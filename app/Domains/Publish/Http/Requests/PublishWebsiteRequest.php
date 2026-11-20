<?php

namespace App\Domains\Publish\Http\Requests;

use App\Domains\Website\Models\Website;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PublishWebsiteRequest extends FormRequest
{
    public const RESERVED_SLUGS = [
        'admin',
        'api',
        'app',
        'assets',
        'auth',
        'billing',
        'builder',
        'cdn',
        'dashboard',
        'forgot-password',
        'ftp',
        'home',
        'login',
        'mail',
        'my-templates',
        'onboarding',
        'p',
        'preview',
        'profile',
        'public',
        'register',
        'reset-password',
        'settings',
        'site',
        'static',
        'storage',
        'templates',
        'templates-gallery',
        'up',
        'user',
        'verify-otp',
        'web',
        'websites',
        'welcome',
        'www',
    ];

    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('custom_domain') && is_string($this->custom_domain)) {
            $domain = strtolower(trim($this->custom_domain));
            $domain = preg_replace('#^https?://#i', '', $domain);
            $domain = rtrim($domain, '/');
            $domain = explode('/', $domain)[0];
            $domain = explode(':', $domain)[0];
            $this->merge(['custom_domain' => $domain]);
        }
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
            'source_template_id' => ['nullable', 'integer', Rule::exists('template', 'id')],
            'slug' => $slugRules,
            'domain_type' => ['required', Rule::in(['subdomain', 'custom', 'subprefix', 'path'])],
            'custom_domain' => [
                'required_if:domain_type,custom',
                'nullable',
                'string',
                'max:253',
                'regex:/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i',
                function ($attribute, $value, $fail) use ($websiteId) {
                    if ($this->input('domain_type') !== 'custom' || empty($value)) {
                        return;
                    }
                    $clean = strtolower(trim($value));
                    $exists = Website::where('status', '!=', 'rejected')
                        ->when($websiteId, fn ($q) => $q->where('id', '!=', $websiteId))
                        ->where(function ($q) use ($clean) {
                            $q->where('settings->custom_domain', $clean)
                              ->orWhere('settings->custom_domain', 'www.' . $clean)
                              ->orWhere('settings->custom_domain', preg_replace('/^www\./', '', $clean));
                        })
                        ->exists();

                    if ($exists) {
                        $fail('Domain tersebut sudah digunakan atau diajukan oleh website lain.');
                    }
                },
            ],
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
            'custom_domain.regex' => 'Format domain tidak valid (contoh yang benar: www.perusahaan.com atau bisnis.id).',
        ];
    }
}
