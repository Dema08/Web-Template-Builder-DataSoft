<?php

namespace App\Domains\Website\Http\Controllers;

use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\Website\Models\Website;
use App\Domains\Website\Models\WebsiteVideo;
use App\Jobs\OptimizeVideoJob;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class VideoUploadController extends BaseController
{
    private const MAX_BYTES = 50 * 1024 * 1024;

    private const CHUNK_MAX_BYTES = 11 * 1024 * 1024;

    private const ALLOWED = ['mp4', 'webm', 'mov'];

    public function upload(Request $request, int $websiteId): JsonResponse
    {
        $website = $this->findWebsite($request, $websiteId);

        $index = (int) $request->input('dzchunkindex', $request->input('chunk_index', 0));
        $total = max(1, (int) $request->input('dztotalchunkcount', $request->input('total_chunks', 1)));
        $uuid = preg_replace('/[^A-Za-z0-9_-]/', '', (string) $request->input('dzuuid', $request->input('upload_id', 'noid')));
        $declaredSize = (int) $request->input('dztotalfilesize', 0);

        if ($index < 0 || $index >= $total || $uuid === '') {
            return $this->error('Parameter chunk tidak valid.', 422);
        }

        if ($declaredSize > self::MAX_BYTES) {
            return $this->error('Maksimal 50MB.', 422);
        }

        $chunk = $request->file('file');
        if (! $chunk || ! $chunk->isValid()) {
            return $this->error('No file uploaded', 400);
        }

        $dir = 'video-chunks/'.$website->id.'/'.$uuid;
        Storage::disk('local')->makeDirectory($dir);

        if ((int) $chunk->getSize() > self::CHUNK_MAX_BYTES) {
            return $this->error('Chunk terlalu besar.', 422);
        }

        if (! $this->looksLikeVideo($chunk)) {
            Storage::disk('local')->deleteDirectory($dir);

            return $this->error('Format file tidak valid (MIME).', 422);
        }
        Storage::disk('local')->putFileAs($dir, $chunk, $index.'.part');

        if ($index < $total - 1) {
            return $this->success([
                'done' => (int) round((($index + 1) / $total) * 100),
                'status' => true,
            ], 'Chunk received');
        }

        $extension = strtolower($chunk->getClientOriginalExtension() ?: pathinfo((string) $chunk->getClientOriginalName(), PATHINFO_EXTENSION));

        if (! in_array($extension, self::ALLOWED, true)) {
            Storage::disk('local')->deleteDirectory($dir);

            return $this->error('Format tidak didukung.', 422);
        }

        $tempPath = 'videos/temp/vid_'.$website->id.'_'.uniqid().'.'.$extension;
        Storage::disk('local')->makeDirectory('videos/temp');
        $dest = Storage::disk('local')->path($tempPath);
        $out = @fopen($dest, 'wb');
        if ($out === false) {
            Storage::disk('local')->deleteDirectory($dir);

            return $this->serverError('Gagal menyiapkan file sementara.');
        }

        try {
            // Validasi urutan/kelengkapan chunk SEBELUM merge: semua part 0..total-1 wajib ada.
            for ($i = 0; $i < $total; $i++) {
                $part = Storage::disk('local')->path($dir.'/'.$i.'.part');
                if (! is_file($part)) {
                    fclose($out);
                    Storage::disk('local')->delete($tempPath);
                    Storage::disk('local')->deleteDirectory($dir);
                    return $this->error("Chunk {$i} belum diterima. Upload ulang.", 422);
                }
            }
            for ($i = 0; $i < $total; $i++) {
                $part = Storage::disk('local')->path($dir.'/'.$i.'.part');
                $in = fopen($part, 'rb');
                if ($in === false) {
                    throw new \RuntimeException("Chunk {$i} tidak bisa dibaca.");
                }
                stream_copy_to_stream($in, $out);
                fclose($in);
            }
        } catch (\Throwable $e) {
            fclose($out);
            Storage::disk('local')->delete($tempPath);
            Storage::disk('local')->deleteDirectory($dir);
            throw $e;
        }

        fclose($out);
        Storage::disk('local')->deleteDirectory($dir);

        if (is_file($dest) && filesize($dest) > self::MAX_BYTES) {
            Storage::disk('local')->delete($tempPath);

            return $this->error('Maksimal 50MB.', 422);
        }

        // Video disimpan PER SECTION: baris video milik section yang meng-upload
        // dipakai ulang, jadi upload di section lain tidak menimpa/menghapus
        // video section sebelumnya.
        $video = $this->rememberUpload($website, $this->sectionKey($request), $uuid);

        OptimizeVideoJob::dispatch($website->id, $tempPath, $video->id);

        return $this->success([
            'done' => 100,
            'status' => true,
            'message' => 'Upload selesai, video diproses.',
            'processing' => true,
            'upload_id' => $uuid,
            'video_id' => $video->id,
            'section_id' => $video->section_key,
        ], 'Upload selesai, video diproses.');
    }

    public function status(Request $request, int $websiteId): JsonResponse
    {
        $website = $this->findWebsite($request, $websiteId);
        $video = $this->findVideo($website, $request->input('upload_id'), $this->sectionKey($request));

        if ($video) {
            $ready = $video->isReady();
            $failed = $video->status === WebsiteVideo::STATUS_FAILED;

            return $this->success([
                'video_url' => $ready ? $video->url : null,
                'poster_url' => $ready ? $video->poster_url : null,
                'size' => $video->size,
                'duration' => $video->duration,
                'format' => $video->format,
                'processing' => ! $ready && ! $failed,
                'failed' => $failed,
                'video_id' => $video->id,
                'section_id' => $video->section_key,
            ], 'Video status retrieved');
        }

        // Fallback data lama: video tersimpan di kolom website (sebelum tabel
        // website_video dipakai / client lama tanpa section_id).
        return $this->success([
            'video_url' => $website->background_video_url,
            'poster_url' => $website->background_video_poster_url,
            'size' => $website->background_video_size,
            'duration' => $website->background_video_duration,
            'format' => $website->background_video_format,
            'processing' => ! $website->background_video_path,
            'failed' => false,
            'video_id' => null,
            'section_id' => null,
        ], 'Video status retrieved');
    }

    public function delete(Request $request, int $websiteId): JsonResponse
    {
        $website = $this->findWebsite($request, $websiteId);
        $sectionKey = $this->sectionKey($request);
        $uploadId = $this->sanitizeKey($request->input('upload_id'));
        $scoped = $sectionKey !== null || $uploadId !== null;

        $query = WebsiteVideo::where('website_id', $website->id);

        if ($uploadId !== null) {
            $query->where('upload_id', $uploadId);
        } elseif ($sectionKey !== null) {
            $query->where('section_key', $sectionKey);
        }

        $paths = [];

        foreach ($query->get() as $video) {
            $paths[] = $video->path;
            $paths[] = $video->poster;
            $video->delete();
        }

        // Tanpa section_id/upload_id = reset video website (client lama).
        if (! $scoped) {
            $paths[] = $website->background_video_path;
            $paths[] = $website->background_video_poster;
        }

        $paths = array_values(array_unique(array_filter($paths, 'is_string')));

        foreach ($paths as $path) {
            // Jangan hapus file yang masih dipakai section/website lain.
            if (WebsiteVideo::isPathReferenced($path)) {
                continue;
            }
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
            }
        }

        $mirror = array_filter([$website->background_video_path, $website->background_video_poster]);

        if (! $scoped || array_intersect($mirror, $paths)) {
            // Kalau masih ada video section lain yang siap, mirror diarahkan ke
            // sana; kalau tidak ada, kolom mirror dikosongkan.
            $remaining = WebsiteVideo::where('website_id', $website->id)
                ->where('status', WebsiteVideo::STATUS_READY)
                ->latest('id')
                ->first();

            $website->update([
                'background_video_path' => $remaining?->path,
                'background_video_poster' => $remaining?->poster,
                'background_video_size' => $remaining?->size,
                'background_video_duration' => $remaining?->duration,
                'background_video_format' => $remaining?->format,
            ]);
        }

        return $this->success(null, 'Video dihapus');
    }

    /**
     * Baris video untuk (website, section). Upload ulang pada section yang sama
     * memakai baris yang sama supaya file lama bisa diganti dengan aman: path
     * lama tetap dipakai sampai job selesai, baru kemudian ditukar.
     */
    private function rememberUpload(Website $website, ?string $sectionKey, string $uploadId): WebsiteVideo
    {
        $video = WebsiteVideo::firstOrNew([
            'website_id' => $website->id,
            'section_key' => $sectionKey,
        ]);

        $video->upload_id = $uploadId;
        $video->status = WebsiteVideo::STATUS_PROCESSING;
        $video->save();

        return $video;
    }

    /**
     * Cari baris video yang relevan untuk polling uploader: upload_id paling
     * akurat (upload yang sedang diproses), lalu section_id, terakhir video
     * siap terbaru sebagai fallback.
     */
    private function findVideo(Website $website, mixed $uploadId, ?string $sectionKey): ?WebsiteVideo
    {
        $cleanUploadId = $this->sanitizeKey($uploadId);

        if ($cleanUploadId !== null) {
            $video = WebsiteVideo::where('website_id', $website->id)
                ->where('upload_id', $cleanUploadId)
                ->latest('id')
                ->first();

            if ($video) {
                return $video;
            }
        }

        if ($sectionKey !== null) {
            $video = WebsiteVideo::where('website_id', $website->id)
                ->where('section_key', $sectionKey)
                ->latest('id')
                ->first();

            if ($video) {
                return $video;
            }
        }

        return WebsiteVideo::where('website_id', $website->id)
            ->where('status', WebsiteVideo::STATUS_READY)
            ->latest('id')
            ->first();
    }

    /**
     * Id section di builder (mis. "section-1759...-ab12d3") yang dikirim
     * uploader, dinormalisasi supaya aman dipakai sebagai kunci baris video.
     */
    private function sectionKey(Request $request): ?string
    {
        return $this->sanitizeKey($request->input('section_id', $request->input('section_key')));
    }

    private function sanitizeKey(mixed $value): ?string
    {
        if (! is_string($value)) {
            return null;
        }

        $clean = substr((string) preg_replace('/[^A-Za-z0-9_-]/', '', $value), 0, 64);

        return $clean === '' ? null : $clean;
    }

    /**
     * Cek chunk benar-benar video.
     *
     * Chunk di tengah file tidak punya header container, jadi fileinfo bisa
     * melaporkannya sebagai application/octet-stream (bahkan application/mp4
     * untuk potongan ber-ftyp). Selain MIME deteksi isi, MIME yang dikirim
     * browser dipakai sebagai sinyal tambahan supaya upload sah tidak ditolak.
     * Penjaga akhir tetap ekstensi file saat chunk terakhir di-merge.
     */
    private function looksLikeVideo(UploadedFile $chunk): bool
    {
        $binaryish = ['application/octet-stream', 'application/mp4'];

        foreach ([$chunk->getMimeType(), $chunk->getClientMimeType()] as $mime) {
            if (! is_string($mime) || $mime === '') {
                continue;
            }

            if (str_starts_with($mime, 'video/') || in_array($mime, $binaryish, true)) {
                return true;
            }
        }

        return false;
    }

    private function findWebsite(Request $request, int $websiteId): Website
    {
        $user = $request->user();

        if ($user && method_exists($user, 'isAdmin') && $user->isAdmin()) {
            return Website::findOrFail($websiteId);
        }

        return $user->websites()->whereKey($websiteId)->firstOrFail();
    }
}

