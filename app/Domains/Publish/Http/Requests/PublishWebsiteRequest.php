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
        $websiteId = Website::where('user_id', $this->user()->id)
            ->whereKey($this->input('website_id'))
            ->value('id');
        $publishAction = $this->input('publish_action', 'update');
        $slugUniqueRule = Rule::unique('website', 'slug');
        if ($publishAction === 'update' && $websiteId !== null) {
            $slugUniqueRule->ignore($websiteId);
        }
        $slugRules = [
            'required',
            'string',
            'min:3',
            'max:50',
            'regex:/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/',
            Rule::notIn(self::RESERVED_SLUGS),
            $slugUniqueRule,
        ];

        return [
            'website_id' => [
                'required',
                'integer',
                Rule::exists('website', 'id')->where('user_id', $this->user()->id),
            ],
            'publish_action' => ['sometimes', Rule::in(['update', 'new'])],
            'draft_json' => ['sometimes', 'array'],
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
            'publish_action.in' => 'Pilihan publikasi tidak valid.',
            'domain_type.required' => 'Jenis domain wajib dipilih.',
            'domain_type.in' => 'Jenis domain tidak valid.',
            'custom_domain.required_if' => 'Custom domain wajib diisi.',
            'custom_domain.max' => 'Custom domain maksimal 253 karakter.',
        ];
    }
}
