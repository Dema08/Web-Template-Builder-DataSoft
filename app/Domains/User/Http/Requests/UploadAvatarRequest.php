<?php

namespace App\Domains\User\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadAvatarRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'avatar' => ['required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:5120'],
        ];
    }

    public function messages(): array
    {
        return [
            'avatar.required' => 'Please select an image file to upload.',
            'avatar.image'    => 'The file must be an image (JPEG, PNG, or WebP).',
            'avatar.mimes'    => 'Only JPEG, PNG, and WebP images are allowed.',
            'avatar.max'      => 'The image must be smaller than 5MB.',
        ];
    }
}
