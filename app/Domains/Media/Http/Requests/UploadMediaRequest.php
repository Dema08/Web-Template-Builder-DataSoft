<?php

namespace App\Domains\Media\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadMediaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    public function rules(): array
    {
        // Batas atas validasi: 50MB (video). Gambar dibatasi ulang 5MB di controller
        // agar pesan error spesifik per jenis file.
        $maxKb = (int) ((int) config('features.media.max_video_size_bytes', 50 * 1024 * 1024) / 1024);

        return [
            'file' => [
                'required',
                'file',
                'max:'.$maxKb,
                'mimetypes:image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,video/ogg',
            ],
            'website_id' => ['nullable', 'integer', 'exists:website,id'],
            'kind' => ['nullable', 'string', 'in:image,video,auto'],
        ];
    }

    public function messages(): array
    {
        return [
            'file.required' => 'File wajib dipilih.',
            'file.file' => 'Upload tidak valid.',
            'file.max' => 'Ukuran file maksimal 50 MB.',
            'file.mimetypes' => 'Format harus JPG, PNG, WEBP, GIF, MP4, WebM, atau OGG.',
        ];
    }
}

