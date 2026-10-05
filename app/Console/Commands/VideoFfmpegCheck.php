<?php

namespace App\Console\Commands;

use App\Domains\Shared\Helpers\Ffmpeg;
use Illuminate\Console\Command;

/**
 * VideoFfmpegCheck
 *
 * Diagnosa kesiapan ffmpeg/ffprobe untuk kompresi video background.
 * Dipakai setelah deploy untuk memastikan binary bundled benar-benar
 * terpakai (tanpa perlu SSH/IT).
 *
 * Usage:
 *   php artisan video:ffmpeg-check
 */
class VideoFfmpegCheck extends Command
{
    protected $signature = 'video:ffmpeg-check';

    protected $description = 'Cek kesiapan ffmpeg/ffprobe untuk kompresi video background';

    public function handle(): int
    {
        $overrideFfmpeg = env('FFMPEG_BINARY') ?? config('chunk-upload.ffmpeg.ffmpeg_binary');
        $overrideFfprobe = env('FFPROBE_BINARY') ?? config('chunk-upload.ffmpeg.ffprobe_binary');
        $bundledFfmpeg = storage_path('app/bin/ffmpeg' . (PHP_OS_FAMILY === 'Windows' ? '.exe' : ''));
        $bundledFfprobe = storage_path('app/bin/ffprobe' . (PHP_OS_FAMILY === 'Windows' ? '.exe' : ''));

        $ffmpeg = Ffmpeg::ffmpeg();
        $ffprobe = Ffmpeg::ffprobe();
        $version = Ffmpeg::version();

        $this->newLine();
        $this->line('  shell_exec        : '.(function_exists('shell_exec') ? 'ON' : 'OFF (disabled)'));
        $this->line('  exec              : '.(function_exists('exec') ? 'ON' : 'OFF (disabled)'));
        $this->line('  override ffmpeg   : '.($overrideFfmpeg && $overrideFfmpeg !== PHP_BINARY && stripos(basename($overrideFfmpeg), 'php') === false ? $overrideFfmpeg : '(kosong)'));
        $this->line('  override ffprobe  : '.($overrideFfprobe && $overrideFfprobe !== PHP_BINARY && stripos(basename($overrideFfprobe), 'php') === false ? $overrideFfprobe : '(kosong)'));
        $this->line('  bundled ffmpeg    : '.(is_file($bundledFfmpeg) ? $bundledFfmpeg : '(tidak ada)'));
        $this->line('  bundled ffprobe   : '.(is_file($bundledFfprobe) ? $bundledFfprobe : '(tidak ada)'));

        $ffmpegResStr = $ffmpeg ?: 'TIDAK DITEMUKAN';
        if ($ffmpeg === PHP_BINARY || (is_string($ffmpeg) && stripos(basename($ffmpeg), 'php') !== false)) {
            $ffmpegResStr = $ffmpeg . ' [BUG: resolving to PHP binary]';
        }
        $this->line('  resolusi ffmpeg   : '.$ffmpegResStr);

        $ffprobeResStr = $ffprobe ?: 'TIDAK DITEMUKAN';
        if ($ffprobe === PHP_BINARY || (is_string($ffprobe) && stripos(basename($ffprobe), 'php') !== false)) {
            $ffprobeResStr = $ffprobe . ' [BUG: resolving to PHP binary]';
        }
        $this->line('  resolusi ffprobe  : '.$ffprobeResStr);

        $this->line('  versi ffmpeg      : '.($version ?: 'NOT AVAILABLE'));
        $this->newLine();

        if ($ffmpeg !== null && $ffmpeg !== PHP_BINARY && stripos(basename($ffmpeg), 'php') === false) {
            $this->info('OK: video background akan dikompresi (H.264 CRF '.
                config('chunk-upload.ffmpeg.crf', '28').', preset '.
                config('chunk-upload.ffmpeg.preset', 'medium').').');

            return self::SUCCESS;
        }

        $this->warn('FFmpeg belum tersedia. Upload tetap jalan, tapi video disimpan TANPA kompresi.');
        $this->line('Penyebab umum: .github/workflows/deploy.yml belum dijalankan, atau binary bundled gagal di-chmod.');
        $this->line('Cara memperbaiki tanpa IT:');
        $this->line('  1. Push ke main agar deploy.yml mengunduh ffmpeg static ke storage/app/bin/.');
        $this->line('  2. Atau set FFMPEG_BINARY=/path/ffmpeg (+ FFPROBE_BINARY) di .env lalu config:clear.');
        $this->line('  3. Atau install ffmpeg di server (apt/brew/choco) lalu jalankan ulang perintah ini.');
        $this->line('Path yang dicek otomatis:');
        foreach (Ffmpeg::candidatePaths('ffmpeg') as $candidate) {
            $this->line('  - '.$candidate);
        }
        $this->newLine();

        return self::FAILURE;
    }
}
