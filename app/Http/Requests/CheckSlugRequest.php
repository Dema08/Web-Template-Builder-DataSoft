<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckSlugRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'slug' => ['required', 'string', 'min:3', 'max:255'],
        ];
    }

    public function messages(): array
    {
        return [
            'slug.required' => 'Slug is required.',
            'slug.min' => 'Slug must be at least 3 characters.',
            'slug.max' => 'Slug must not exceed 255 characters.',
        ];
    }
}