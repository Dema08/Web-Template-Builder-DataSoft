<?php

namespace App\Domains\Shared\Helpers;

/**
 * Ffmpeg Helper
 *
 * Resolusi path binary ffmpeg/ffprobe supaya kompresi video background
 * tetap jalan di berbagai hosting tanpa bantuan IT. Urutan prioritas:
 *
 *   1. Override config/env  -> FFMPEG_BINARY / FFPROBE_BINARY
 *   2. Binary bundled deploy -> storage/app/bin/{ffmpeg,ffprobe}
 *   3. Lokasi install umum   -> Laragon, Chocolatey, Scoop, WinGet,
 *                               /usr/bin, /usr/local/bin, Homebrew
 *   4. PATH sistem           -> where (Windows) / which (Unix)
 *
 * Kalau semua gagal, pemanggil (OptimizeVideoJob) otomatis fallback
 * copy file tanpa kompresi supaya upload user tetap berhasil.
 */
class Ffmpeg
{
    /**
     * Path binary ffmpeg yang bisa dieksekusi, atau null bila tidak ada.
     */
    public static function ffmpeg(): ?string
    {
        return self::binary('ffmpeg');
    }

    /**
     * Path binary ffprobe yang bisa dieksekusi, atau null bila tidak ada.
     */
    public static function ffprobe(): ?string
    {
        return self::binary('ffprobe');
    }

    /**
     * True bila shell_exec/exec tersedia dan ffmpeg bisa ditemukan.
     */
    public static function available(): bool
    {
        if (! function_exists('shell_exec') && ! function_exists('exec')) {
            return false;
        }

        $resolved = self::ffmpeg();
        return $resolved !== null && $resolved !== PHP_BINARY && stripos(basename($resolved), 'php') === false;
    }

    /**
     * Versi ffmpeg (baris pertama output `-version`), atau null.
     */
    public static function version(): ?string
    {
        $binary = self::ffmpeg();
        if ($binary === null || $binary === PHP_BINARY || stripos(basename($binary), 'php') !== false || ! function_exists('shell_exec')) {
            return null;
        }

        $output = @shell_exec(escapeshellarg($binary).' -version 2>&1');
        if (! is_string($output) || $output === '') {
            return null;
        }

        return trim(strtok($output, PHP_EOL));
    }

    /**
     * Daftar path kandidat yang dicek sebelum fallback ke PATH.
     *
     * @return list<string>
     */
    public static function candidatePaths(string $name): array
    {
        $suffix = PHP_OS_FAMILY === 'Windows' ? '.exe' : '';
        $dirs = [];

        if (PHP_OS_FAMILY === 'Windows') {
            $dirs = [
                'C:\\laragon\\bin\\'.$name.'\\bin',
                'C:\\ffmpeg\\bin',
                'C:\\ProgramData\\chocolatey\\bin',
                'C:\\Program Files\\ffmpeg\\bin',
            ];

            foreach (['USERPROFILE', 'LOCALAPPDATA'] as $envKey) {
                $base = (string) getenv($envKey);
                if ($base !== '') {
                    $dirs[] = $base.'\\scoop\\shims';
                    $dirs[] = $base.'\\Microsoft\\WinGet\\Links';
                }
            }

            // Laragon sering menaruh folder berversi: C:\laragon\bin\ffmpeg-7.1\bin
            foreach (glob('C:\\laragon\\bin\\'.$name.'*\\bin') ?: [] as $globDir) {
                $dirs[] = $globDir;
            }

            // WinGet Packages glob support (e.g. Gyan.FFmpeg installed via winget)
            $localAppData = (string) getenv('LOCALAPPDATA');
            if ($localAppData !== '') {
                foreach (glob($localAppData.'\\Microsoft\\WinGet\\Packages\\*FFmpeg*\\*\\bin') ?: [] as $globDir) {
                    $dirs[] = $globDir;
                }
            }
            $userProfile = (string) getenv('USERPROFILE');
            if ($userProfile !== '') {
                foreach (glob($userProfile.'\\AppData\\Local\\Microsoft\\WinGet\\Packages\\*FFmpeg*\\*\\bin') ?: [] as $globDir) {
                    $dirs[] = $globDir;
                }
            }
        } else {
            $dirs = ['/usr/bin', '/usr/local/bin', '/opt/homebrew/bin', '/snap/bin'];
        }

        $paths = [];
        foreach (array_unique($dirs) as $dir) {
            $paths[] = rtrim($dir, '\\/').DIRECTORY_SEPARATOR.$name.$suffix;
        }

        return $paths;
    }

    /**
     * Resolusi binary berdasarkan nama ("ffmpeg" / "ffprobe").
     */
    private static function binary(string $name): ?string
    {
        // 1. Env override (kalau di-set dan bukan PHP binary)
        $override = env(strtoupper($name).'_BINARY') ?? config('chunk-upload.ffmpeg.'.$name.'_binary');
        if ($override && is_string($override) && $override !== '' && $override !== PHP_BINARY && stripos(basename($override), 'php') === false && is_file($override)) {
            @chmod($override, 0755);

            return $override;
        }

        // 2. Bundled di storage/app/bin
        $bundled = storage_path('app/bin/'.$name.(PHP_OS_FAMILY === 'Windows' ? '.exe' : ''));
        if (is_file($bundled) && self::isRunnable($bundled) && $bundled !== PHP_BINARY && stripos(basename($bundled), 'php') === false) {
            @chmod($bundled, 0755);

            return $bundled;
        }

        // 3. Candidate paths
        foreach (self::candidatePaths($name) as $candidate) {
            if (is_file($candidate) && self::isRunnable($candidate) && $candidate !== PHP_BINARY && stripos(basename($candidate), 'php') === false) {
                return $candidate;
            }
        }

        if (! function_exists('shell_exec')) {
            return null;
        }

        $command = PHP_OS_FAMILY === 'Windows'
            ? 'where '.$name.' 2>nul'
            : 'which '.$name.' 2>/dev/null';

        try {
            $path = (string) @shell_exec($command);
        } catch (\Throwable) {
            return null;
        }

        $path = trim(strtok($path, PHP_EOL) ?: '', "\"' \t\r\n");

        if ($path !== '' && is_file($path) && $path !== PHP_BINARY && stripos(basename($path), 'php') === false) {
            return $path;
        }

        return null;
    }

    /**
     * Windows tidak punya flag executable, cukup file ada.
     */
    private static function isRunnable(string $path): bool
    {
        return PHP_OS_FAMILY === 'Windows' || is_executable($path);
    }
}
