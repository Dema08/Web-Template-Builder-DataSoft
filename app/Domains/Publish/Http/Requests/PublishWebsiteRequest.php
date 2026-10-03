<?php

namespace App\Domains\Publish\Http\Requests;

use App\Domains\Website\Models\Website;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PublishWebsiteRequest extends FormRequest
{
    private const RESERVED_SLUGS = [
        'admin',
        'api',
        'www',
        'app',
        'mail',
        'ftp',
        'cdn',
        'static',
        'assets',
        'public',
        'storage',
        'p',
        'dashboard',
        'web',
    ];

    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    public function rules(): array
    {
        $requestedWebsiteId = $this->input('website_id') ?? $this->query('website_id');
        $websiteId = $requestedWebsiteId === null
            ? Website::where('user_id', $this->user()->id)->oldest('id')->value('id')
            : Website::where('user_id', $this->user()->id)
                ->whereKey($requestedWebsiteId)
                ->value('id');
        $slugRules = [
            'required',
            'string',
            'min:3',
            'max:50',
            'regex:/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/',
            Rule::notIn(self::RESERVED_SLUGS),
            Rule::unique('website', 'slug')->ignore($websiteId),
        ];

        return [
            'website_id' => ['sometimes', 'integer'],
            'slug' => $slugRules,
            'domain_type' => ['required', Rule::in(['subdomain', 'custom'])],
            'custom_domain' => ['required_if:domain_type,custom', 'nullable', 'string', 'max:253'],
        ];
    }

    public function messages(): array
    {
        return [
            'slug.required' => 'Slug website wajib diisi.',
            'slug.min' => 'Slug website minimal 3 karakter.',
            'slug.max' => 'Slug website maksimal 50 karakter.',
            'slug.regex' => 'Slug hanya boleh berisi huruf kecil, angka, dan tanda hubung.',
            'slug.not_in' => 'Slug tersebut tidak dapat digunakan.',
            'slug.unique' => 'Slug tersebut sudah digunakan website lain.',
            'domain_type.required' => 'Jenis domain wajib dipilih.',
            'domain_type.in' => 'Jenis domain tidak valid.',
            'custom_domain.required_if' => 'Custom domain wajib diisi.',
            'custom_domain.max' => 'Custom domain maksimal 253 karakter.',
        ];
    }
}
