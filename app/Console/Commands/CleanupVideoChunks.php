<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CleanupVideoChunks extends Command
{
    protected $signature = 'video:cleanup-chunks {--hours=24}';

    protected $description = 'Hapus chunk upload video orphan';

    public function handle(): int
    {
        $hours = max(1, (int) $this->option('hours'));
        $threshold = now()->subHours($hours)->getTimestamp();
        $basePath = storage_path('app/private/video-chunks');
        $deleted = 0;

        if (! is_dir($basePath)) {
            $this->info('No chunk directory.');

            return 0;
        }

        foreach (glob($basePath.'/*/*', GLOB_ONLYDIR) ?: [] as $dir) {
            $mtime = @filemtime($dir) ?: 0;
            if ($mtime < $threshold) {
                $this->deleteDirectory($dir);
                $deleted++;
            }
        }

        // Bersihkan juga file temp lama.
        $tempPath = storage_path('app/private/videos/temp');
        if (is_dir($tempPath)) {
            foreach (glob($tempPath.'/*') ?: [] as $file) {
                if (is_file($file) && (@filemtime($file) ?: 0) < $threshold) {
                    @unlink($file);
                    $deleted++;
                }
            }
        }

        $this->info("Deleted {$deleted} orphan chunk dirs/files.");

        return 0;
    }

    private function deleteDirectory(string $dir): void
    {
        if (! is_dir($dir)) {
            return;
        }
        $files = array_diff(scandir($dir) ?: [], ['.', '..']);
        foreach ($files as $file) {
            $path = $dir.DIRECTORY_SEPARATOR.$file;
            if (is_dir($path)) {
                $this->deleteDirectory($path);
            } else {
                @unlink($path);
            }
        }
        @rmdir($dir);
    }
}
