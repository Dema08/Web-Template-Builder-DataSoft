<?php

namespace Database\Seeders;

use App\Domains\System\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // Brand settings
            [
                'key' => 'brand_name',
                'value' => 'Microdata',
                'type' => 'string',
                'group' => 'brand',
            ],
            [
                'key' => 'brand_badge',
                'value' => 'MD',
                'type' => 'string',
                'group' => 'brand',
            ],
            [
                'key' => 'brand_color',
                'value' => '#2563eb',
                'type' => 'string',
                'group' => 'brand',
            ],
            [
                'key' => 'plan_label',
                'value' => 'Premium Plan',
                'type' => 'string',
                'group' => 'brand',
            ],
            [
                'key' => 'logo_path',
                'value' => '/images/microdata-emblem.png',
                'type' => 'string',
                'group' => 'brand',
            ],

            // System settings
            [
                'key' => 'maintenance_mode',
                'value' => '0',
                'type' => 'boolean',
                'group' => 'system',
            ],
            [
                'key' => 'allow_registration',
                'value' => '1',
                'type' => 'boolean',
                'group' => 'system',
            ],
            [
                'key' => 'default_storage_limit',
                'value' => '100',
                'type' => 'integer',
                'group' => 'system',
            ],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                $setting
            );
        }
    }
}