<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateWebsiteRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'company_name' => ['required', 'string', 'min:2', 'max:255'],
            'slug' => ['required', 'string', 'min:3', 'max:255', 'regex:/^[a-z0-9-]+$/'],
            'template_id' => ['required', 'integer', 'exists:templates,id'],
        ];
    }

    public function messages(): array
    {
        return [
            'company_name.required' => 'Company name is required.',
            'company_name.min' => 'Company name must be at least 2 characters.',
            'company_name.max' => 'Company name must not exceed 255 characters.',
            'slug.required' => 'Slug is required.',
            'slug.min' => 'Slug must be at least 3 characters.',
            'slug.max' => 'Slug must not exceed 255 characters.',
            'slug.regex' => 'Slug can only contain lowercase letters, numbers, and hyphens.',
            'template_id.required' => 'Template selection is required.',
            'template_id.exists' => 'Selected template is not valid.',
        ];
    }
}