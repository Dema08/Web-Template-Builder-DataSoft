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
        $ffmpeg = Ffmpeg::ffmpeg();
        $ffprobe = Ffmpeg::ffprobe();

        $this->newLine();
        $this->line('  shell_exec        : '.(function_exists('shell_exec') ? 'ON' : 'OFF (disabled)'));
        $this->line('  exec              : '.(function_exists('exec') ? 'ON' : 'OFF (disabled)'));
        $this->line('  override ffmpeg   : '.((string) config('chunk-upload.ffmpeg.ffmpeg_binary') ?: '(kosong)'));
        $this->line('  override ffprobe  : '.((string) config('chunk-upload.ffmpeg.ffprobe_binary') ?: '(kosong)'));
        $this->line('  bundled ffmpeg    : '.(is_file(storage_path('app/bin/ffmpeg')) ? storage_path('app/bin/ffmpeg') : '(tidak ada)'));
        $this->line('  resolusi ffmpeg   : '.($ffmpeg ?: 'TIDAK DITEMUKAN'));
        $this->line('  resolusi ffprobe  : '.($ffprobe ?: 'TIDAK DITEMUKAN'));
        $this->line('  versi ffmpeg      : '.(Ffmpeg::version() ?: '-'));
        $this->newLine();

        if ($ffmpeg !== null) {
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
