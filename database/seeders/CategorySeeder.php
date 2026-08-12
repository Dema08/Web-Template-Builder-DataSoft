<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Seed default industry categories containing strictly id, order, name, status.
     */
    public function run(): void
    {
        $categories = [
            [
                'id'     => 1,
                'order'  => 1,
                'name'   => 'Logistik & Transportasi',
                'status' => true,
            ],
            [
                'id'     => 2,
                'order'  => 2,
                'name'   => 'Group Perusahaan / Holding Company',
                'status' => true,
            ],
            [
                'id'     => 3,
                'order'  => 3,
                'name'   => 'Perusahaan Jasa',
                'status' => true,
            ],
            [
                'id'     => 4,
                'order'  => 4,
                'name'   => 'UMKM',
                'status' => true,
            ],
            [
                'id'     => 5,
                'order'  => 5,
                'name'   => 'Pendidikan & Pelatihan',
                'status' => true,
            ],
            [
                'id'     => 6,
                'order'  => 6,
                'name'   => 'Organisasi & Asosiasi',
                'status' => true,
            ],
            [
                'id'     => 7,
                'order'  => 7,
                'name'   => 'Industri & Manufaktur',
                'status' => true,
            ],
            [
                'id'     => 8,
                'order'  => 8,
                'name'   => 'Koperasi',
                'status' => true,
            ],
            [
                'id'     => 9,
                'order'  => 9,
                'name'   => 'Perdagangan / Retail',
                'status' => true,
            ],
            [
                'id'     => 10,
                'order'  => 10,
                'name'   => 'Koperasi Susu',
                'status' => true,
            ],
        ];

        foreach ($categories as $cat) {
            Category::updateOrCreate(
                ['id' => $cat['id']],
                [
                    'id'          => $cat['id'],
                    'name'        => $cat['name'],
                    'slug'        => Str::slug($cat['name']),
                    'sort_order'  => $cat['order'],
                    'is_active'   => $cat['status'],
                ]
            );
        }
    }
}
