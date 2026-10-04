<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Chunked video upload storage
    |--------------------------------------------------------------------------
    |
    | Chunk sementara disimpan di disk "local" (tidak bisa diakses publik),
    | hasil video final + poster disimpan di disk "public".
    |
    */
    'storage' => [
        'disk' => 'local',
        'chunks' => 'video-chunks',
        'merged' => 'videos/temp',
        'output' => 'website-videos',
    ],

    'chunk' => [
        // Ukuran chunk yang dikirim frontend (5MB).
        'size' => 5 * 1024 * 1024,
        // Batas atas ukuran satu chunk yang diterima server (10MB, toleransi).
        'max_size' => 10 * 1024 * 1024,
    ],

    'upload' => [
        // Batas total file video background.
        'max_size' => 50 * 1024 * 1024,
        'allowed_extensions' => ['mp4', 'webm', 'mov'],
    ],

    'cleanup' => [
        'enabled' => true,
        'hours' => 24,
    ],

    /*
    |--------------------------------------------------------------------------
    | Kompresi FFmpeg (dipakai OptimizeVideoJob)
    |--------------------------------------------------------------------------
    | CRF 28 + preset medium: file ringan, kualitas terjaga.
    | Kalau binary ffmpeg tidak ada di server, job otomatis fallback
    | copy file apa adanya (tanpa kompresi) supaya upload tetap jalan.
    |
    | Override opsional (kosongkan untuk auto-detect):
    |   storage/app/bin (hasil deploy) -> install umum -> PATH.
    | Cek kesiapan: php artisan video:ffmpeg-check
    |
    */
    'ffmpeg' => [
        'crf' => '28',
        'preset' => 'medium',

        'ffmpeg_binary' => env('FFMPEG_BINARY'),
        'ffprobe_binary' => env('FFPROBE_BINARY'),
    ],
];
