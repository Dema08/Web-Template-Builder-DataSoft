<?php

namespace App\Jobs;

use App\Domains\Shared\Helpers\Ffmpeg;
use App\Domains\Website\Models\Website;
use App\Domains\Website\Models\WebsiteVideo;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

/**
 * OptimizeVideoJob
 *
 * Kompresi video background: H.264 CRF 28 + preset medium + faststart
 * (file ringan, kualitas terjaga). Dependency-free — memanggil binary
 * ffmpeg langsung via shell. Kalau ffmpeg tidak tersedia di server,
 * otomatis fallback copy file apa adanya supaya upload tetap jalan.
 *
 * Hasil disimpan ke baris WebsiteVideo milik section yang meng-upload
 * ($videoId). Tanpa $videoId, hasil ditulis ke kolom background_video_* di
 * tabel website (kompatibilitas client lama yang belum kirim section_id).
 */
class OptimizeVideoJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $timeout = 900;

    public $tries = 1;

    public function __construct(
        public int $websiteId,
        public string $tempPath,
        public ?int $videoId = null,
    ) {}

    public function handle(): void
    {
        $website = Website::find($this->websiteId);
        if (! $website) {
            $this->cleanup();

            return;
        }

        if (! Storage::disk('local')->exists($this->tempPath)) {
            return;
        }

        // Section dibatalkan/dihapus saat job berjalan (tombol hapus ditekan
        // sebelum video selesai diproses). Jangan tulis apa pun supaya mirror
        // website tidak menunjuk video milik section yang sudah tidak ada.
        if ($this->videoId !== null && ! WebsiteVideo::find($this->videoId)) {
            $this->cleanup();

            return;
        }

        $extension = strtolower(pathinfo($this->tempPath, PATHINFO_EXTENSION)) ?: 'mp4';
        $outputDir = 'website-videos/'.$this->websiteId;
        Storage::disk('public')->makeDirectory($outputDir);

        $finalPath = null;
        $posterPath = null;
        $duration = null;
        $format = $extension;

        try {
            if ($this->ffmpegAvailable()) {
                $compressed = $outputDir.'/'.uniqid('bg_').'.mp4';

                if ($this->compress($this->tempPath, $compressed)) {
                    $finalPath = $compressed;
                    $format = 'mp4';

                    $posterCandidate = $outputDir.'/poster-'.uniqid().'.jpg';
                    $posterPath = $this->extractPoster($compressed, $posterCandidate)
                        ? $posterCandidate
                        : null;

                    $duration = $this->probeDuration($compressed);
                } else {
                    Log::warning('FFmpeg compress gagal, fallback copy tanpa kompresi.', [
                        'website_id' => $this->websiteId,
                    ]);
                }
            } else {
                Log::warning('FFmpeg not available, copying without compression', [
                    'website_id' => $this->websiteId,
                    'hint' => 'Jalankan `php artisan video:ffmpeg-check`; set FFMPEG_BINARY atau sediakan storage/app/bin/ffmpeg.',
                ]);
            }

            if ($finalPath === null) {
                $finalPath = $outputDir.'/'.uniqid('bg_').'.'.$extension;
                Storage::disk('public')->put(
                    $finalPath,
                    Storage::disk('local')->get($this->tempPath)
                );
            }

            // Hapus file lama SETELAH row dipindah ke file baru — dan hanya
            // kalau file itu tidak dipakai section lain (video per-section).
            $replaced = $this->store($website, $finalPath, $posterPath, $duration, $format);

            $this->cleanup();

            foreach ($replaced as $oldPath) {
                $this->deleteIfUnreferenced($oldPath);
            }
        } catch (\Throwable $e) {
            Log::error('Video optimize failed', ['err' => $e->getMessage()]);
            $this->markFailed();
            $this->cleanup();
            throw $e;
        }
    }

    /**
     * Tulis hasil optimasi ke baris WebsiteVideo milik section ($videoId),
     * sinkronkan kolom mirror website, lalu kembalikan daftar file lama yang
     * sudah tidak terpakai.
     *
     * @return array<int, string>
     */
    private function store(Website $website, string $finalPath, ?string $posterPath, ?int $duration, string $format): array
    {
        $video = $this->videoId !== null ? WebsiteVideo::find($this->videoId) : null;

        // Nilai mirror lama harus dibaca sebelum update (kandidat hapus).
        $replaced = $video
            ? [$video->path, $video->poster, $website->background_video_path, $website->background_video_poster]
            : [$website->background_video_path, $website->background_video_poster];

        $size = Storage::disk('public')->size($finalPath);

        if ($video) {
            $video->update([
                'path' => $finalPath,
                'poster' => $posterPath,
                'size' => $size,
                'duration' => $duration,
                'format' => $format,
                'status' => WebsiteVideo::STATUS_READY,
            ]);
        }

        // Mirror kolom website: dipakai resource admin & fallback status untuk
        // data lama (website yang videonya diupload sebelum tabel ini ada).
        $website->update([
            'background_video_path' => $finalPath,
            'background_video_poster' => $posterPath,
            'background_video_size' => $size,
            'background_video_duration' => $duration,
            'background_video_format' => $format,
        ]);

        $keep = [$finalPath, $posterPath];

        return array_values(array_unique(array_filter(
            $replaced,
            fn ($path) => is_string($path) && $path !== '' && ! in_array($path, $keep, true)
        )));
    }

    /**
     * Hapus file kalau benar-benar tidak ada lagi yang memakainya (baris
     * website_video lain atau mirror website). Ini kunci perbaikan bug "video
     * section pertama hilang setelah upload di section kedua".
     */
    private function deleteIfUnreferenced(string $path): void
    {
        $disk = Storage::disk('public');

        if (! $disk->exists($path) || WebsiteVideo::isPathReferenced($path)) {
            return;
        }

        $disk->delete($path);
    }

    /**
     * Tandai hasil job gagal. Kalau section ini masih punya video lama yang
     * valid, status dikembalikan ke ready supaya UI tidak menunggu selamanya.
     */
    private function markFailed(): void
    {
        if ($this->videoId === null) {
            return;
        }

        $video = WebsiteVideo::find($this->videoId);
        if (! $video) {
            return;
        }

        $hasOldFile = $video->path && Storage::disk('public')->exists($video->path);

        $video->update([
            'status' => $hasOldFile ? WebsiteVideo::STATUS_READY : WebsiteVideo::STATUS_FAILED,
        ]);
    }

    private function cleanup(): void
    {
        if (Storage::disk('local')->exists($this->tempPath)) {
            Storage::disk('local')->delete($this->tempPath);
        }
    }

    private function ffmpegAvailable(): bool
    {
        return Ffmpeg::available();
    }

    private function findFfmpeg(): ?string
    {
        return Ffmpeg::ffmpeg();
    }

    private function findFfprobe(): ?string
    {
        return Ffmpeg::ffprobe();
    }

    private function compress(string $inputRelative, string $outputRelative): bool
    {
        $ffmpeg = $this->findFfmpeg();
        if ($ffmpeg === null) {
            return false;
        }

        $input = Storage::disk('local')->path($inputRelative);
        $output = Storage::disk('public')->path($outputRelative);
        @mkdir(dirname($output), 0775, true);

        $crf = (string) config('chunk-upload.ffmpeg.crf', '28');
        $preset = (string) config('chunk-upload.ffmpeg.preset', 'medium');

        $command = sprintf(
            '%s -y -i %s -c:v libx264 -crf %s -preset %s -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 128k %s 2>&1',
            escapeshellarg($ffmpeg),
            escapeshellarg($input),
            escapeshellarg($crf),
            escapeshellarg($preset),
            escapeshellarg($output)
        );

        @exec($command, $lines, $code);

        return $code === 0 && is_file($output) && filesize($output) > 0;
    }

    private function extractPoster(string $videoRelative, string $posterRelative): bool
    {
        $ffmpeg = $this->findFfmpeg();
        if ($ffmpeg === null) {
            return false;
        }

        $video = Storage::disk('public')->path($videoRelative);
        $poster = Storage::disk('public')->path($posterRelative);

        $command = sprintf(
            '%s -y -ss 1 -i %s -vframes 1 -q:v 3 %s 2>&1',
            escapeshellarg($ffmpeg),
            escapeshellarg($video),
            escapeshellarg($poster)
        );

        @exec($command, $lines, $code);

        return $code === 0 && is_file($poster) && filesize($poster) > 0;
    }

    private function probeDuration(string $videoRelative): ?int
    {
        $ffprobe = $this->findFfprobe();
        if ($ffprobe === null) {
            return null;
        }

        $video = Storage::disk('public')->path($videoRelative);

        $command = sprintf(
            '%s -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 %s 2>&1',
            escapeshellarg($ffprobe),
            escapeshellarg($video)
        );

        $output = @shell_exec($command);
        if (! is_string($output)) {
            return null;
        }

        $seconds = (int) round((float) trim($output));

        return $seconds > 0 ? $seconds : null;
    }
}
