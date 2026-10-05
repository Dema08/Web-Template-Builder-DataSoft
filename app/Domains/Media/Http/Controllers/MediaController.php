<?php

namespace App\Domains\Media\Http\Controllers;

use App\Domains\Media\Http\Requests\UploadMediaRequest;
use App\Domains\Shared\Http\Controllers\BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * MediaController
 *
 * Handles builder media uploads (image / video background).
 *
 * Solusi anti-berat untuk video 50MB:
 * - File disimpan sebagai STATIC FILE di disk `websites` (storage/app/public/websites),
 *   BUKAN base64 di database. Database hanya menyimpan URL string pendek.
 * - File statis diserve langsung oleh web server (Apache/Nginx) dengan
 *   HTTP Range Requests -> browser streaming progresif, tidak download 50MB sekaligus.
 * - Kualitas 100% terjaga (no re-encode / no kompresi server).
 */
class MediaController extends BaseController
{
    public function upload(UploadMediaRequest $request): JsonResponse
    {
        $validated = $request->validated();

        /** @var \Illuminate\Http\UploadedFile $file */
        $file = $request->file('file');
        $mime = $file->getMimeType() ?? '';
        $isVideo = str_starts_with($mime, 'video/');

        $kind = $validated['kind'] ?? 'auto';
        if ($kind === 'auto') {
            $kind = $isVideo ? 'video' : 'image';
        }

        // Batas ukuran spesifik agar pesan error jelas (image 5MB, video 50MB).
        $maxImageBytes = (int) config('features.media.max_size_bytes', 5 * 1024 * 1024);
        $maxVideoBytes = (int) config('features.media.max_video_size_bytes', 50 * 1024 * 1024);
        $limit = $kind === 'video' ? $maxVideoBytes : $maxImageBytes;

        if ($file->getSize() > $limit) {
            $maxMb = round($limit / 1024 / 1024);
            return $this->error(
                $kind === 'video'
                    ? "Ukuran video maksimal {$maxMb} MB agar streaming tetap ringan."
                    : "Ukuran gambar maksimal {$maxMb} MB.",
                422
            );
        }

        $allowedImage = config('features.media.allowed_mime_types', ['image/jpeg', 'image/png', 'image/webp']);
        $allowedVideo = config('features.media.allowed_video_mime_types', ['video/mp4', 'video/webm', 'video/ogg']);
        $allowed = $kind === 'video' ? $allowedVideo : array_merge($allowedImage, ['image/gif']);

        if (! in_array($mime, $allowed, true)) {
            return $this->error(
                $kind === 'video'
                    ? 'Format video harus MP4 (H.264), WebM, atau OGG.'
                    : 'Format gambar harus JPG, PNG, WEBP, atau GIF.',
                422
            );
        }

        $disk = config('features.media.disk', 'websites');
        // Disk `websites` root-nya sudah storage/app/public/websites,
        // jadi folder relatif: videos/xxx atau images/xxx.
        $relativeFolder = $kind === 'video' ? 'videos' : 'images';

        $extension = strtolower($file->getClientOriginalExtension() ?: ($kind === 'video' ? 'mp4' : 'jpg'));
        $filename = date('Ymd-His').'-'.Str::uuid()->toString().'.'.$extension;

        $storedPath = $file->storeAs($relativeFolder, $filename, $disk);
        if (! is_string($storedPath) || $storedPath === '') {
            return $this->serverError('Gagal menyimpan file media.');
        }

        $url = Storage::disk($disk)->url($storedPath);

        return $this->created([
            'url' => $url,
            'path' => $storedPath,
            'filename' => $file->getClientOriginalName(),
            'stored_as' => $filename,
            'mime' => $mime,
            'kind' => $kind,
            // Bytes agar frontend bisa format "12.4 MB" tanpa menebak.
            'size' => $file->getSize(),
            // Hint agar <video> hemat resource: streaming progresif + preload metadata.
            'streaming' => $kind === 'video',
        ], $kind === 'video' ? 'Video uploaded successfully' : 'Media uploaded successfully');
    }
}

