<?php

namespace App\Domains\Template\Requests;

use App\Domains\Shared\Rules\SlugRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreTemplateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // Authorization handled by policy/middleware
    }

    public function rules(): array
    {
        return [
            'industry_category_id' => ['required', 'integer', 'exists:kategori_industri,id'],
            'code' => ['nullable', 'string', 'max:50', 'unique:template,code'],
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', new SlugRule(), 'unique:template,slug'],
            'description' => ['nullable', 'string', 'max:2000'],
            'thumbnail' => ['nullable', 'string', 'max:255'],
            'preview_image' => ['nullable', 'string', 'max:255'],
            'draft_json' => ['nullable', 'array'],
            'published_json' => ['nullable', 'array'],
            'version' => ['nullable', 'string', 'max:20'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'is_featured' => ['boolean'],
            'status' => ['required', Rule::in(['draft', 'published', 'archived', 'disabled'])],
        ];
    }

    public function messages(): array
    {
        return [
            'industry_category_id.required' => 'Industry category is required.',
            'industry_category_id.exists' => 'Selected industry category does not exist.',
            'code.unique' => 'Template code must be unique.',
            'slug.unique' => 'Template slug must be unique.',
            'name.max' => 'Template name may not be greater than 255 characters.',
            'status.in' => 'Invalid template status selected.',
        ];
    }
}
