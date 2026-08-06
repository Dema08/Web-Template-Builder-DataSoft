<?php

namespace App\Domains\Template\Requests;

use App\Domains\Shared\Rules\SlugRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateTemplateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'industry_category_id' => ['sometimes', 'integer', 'exists:categories,id'],
            'code' => ['nullable', 'string', 'max:50', 'unique:templates,code,' . $this->route('template')->id],
            'name' => ['sometimes', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', new SlugRule(), 'unique:templates,slug,' . $this->route('template')->id],
            'description' => ['nullable', 'string', 'max:2000'],
            'thumbnail' => ['nullable', 'string', 'max:255'],
            'preview_image' => ['nullable', 'string', 'max:255'],
            'draft_json' => ['nullable', 'array'],
            'published_json' => ['nullable', 'array'],
            'version' => ['nullable', 'string', 'max:20'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
            'is_featured' => ['boolean'],
            'status' => ['sometimes', Rule::in(['draft', 'published', 'archived', 'disabled'])],
        ];
    }

    public function messages(): array
    {
        return [
            'industry_category_id.exists' => 'Selected industry category does not exist.',
            'code.unique' => 'Template code must be unique.',
            'slug.unique' => 'Template slug must be unique.',
            'name.max' => 'Template name may not be greater than 255 characters.',
            'status.in' => 'Invalid template status selected.',
        ];
    }
}
