<?php

namespace App\Domains\Website\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadThumbnailRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    public function rules(): array
    {
        return [
            'thumbnail' => [
                'required',
                'file',
                'image',
                'mimes:jpg,jpeg,png,webp,gif',
                'max:5120',
                'dimensions:min_width=200,min_height=100',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'thumbnail.required' => 'File gambar wajib dipilih.',
            'thumbnail.image' => 'File harus berupa gambar.',
            'thumbnail.mimes' => 'Format harus JPG, PNG, WEBP, atau GIF.',
            'thumbnail.max' => 'Ukuran maksimal 5 MB.',
            'thumbnail.dimensions' => 'Ukuran minimal 200x100 piksel.',
        ];
    }
}
