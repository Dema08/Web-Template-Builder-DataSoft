<?php

namespace App\Domains\Pricelist\Http\Controllers;

use App\Domains\Pricelist\Models\Pricelist;
use App\Domains\Pricelist\Resources\PricelistResource;
use App\Domains\Shared\Http\Controllers\BaseController;
use App\Domains\User\Models\User;
use App\Domains\User\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * AdminPricelistController
 *
 * Endpoint API Manajemen Paket Harga (Admin Only).
 */
class AdminPricelistController extends BaseController
{
    public function index(): JsonResponse
    {
        $plans = Pricelist::withCount('users')
            ->orderBy('urutan', 'asc')
            ->orderBy('id', 'asc')
            ->get();

        return $this->success(
            PricelistResource::collection($plans),
            'Daftar paket harga berhasil diambil.'
        );
    }

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:paket_harga,slug',
            'harga' => 'required|numeric|min:0',
            'deskripsi' => 'nullable|string',
            'periode' => 'required|string|max:50',
            'maks_domain' => 'required|integer', // -1 for unlimited, 0 for none
            'maks_starter_template' => 'required|integer', // -1 for unlimited, 0 for blank only
            'bisa_upload_website' => 'required|boolean',
            'bisa_custom_domain' => 'required|boolean',
            'fitur' => 'nullable|array',
            'fitur.*' => 'string|max:255',
            'is_active' => 'boolean',
            'is_default' => 'boolean',
            'is_popular' => 'boolean',
            'urutan' => 'nullable|integer',
        ]);

        if (empty($validated['slug'])) {
            $validated['slug'] = \Illuminate\Support\Str::slug($validated['nama']);
        }

        // If marked as default, unset other defaults
        if (!empty($validated['is_default'])) {
            Pricelist::query()->update(['is_default' => false]);
        }

        $plan = Pricelist::create($validated);

        return $this->success(
            new PricelistResource($plan),
            "Paket harga '{$plan->nama}' berhasil dibuat.",
            201
        );
    }

    public function update(Request $request, Pricelist $pricelist): JsonResponse
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:paket_harga,slug,' . $pricelist->id,
            'harga' => 'required|numeric|min:0',
            'deskripsi' => 'nullable|string',
            'periode' => 'required|string|max:50',
            'maks_domain' => 'required|integer',
            'maks_starter_template' => 'required|integer',
            'bisa_upload_website' => 'required|boolean',
            'bisa_custom_domain' => 'required|boolean',
            'fitur' => 'nullable|array',
            'fitur.*' => 'string|max:255',
            'is_active' => 'boolean',
            'is_default' => 'boolean',
            'is_popular' => 'boolean',
            'urutan' => 'nullable|integer',
        ]);

        // If marked as default, unset other defaults
        if (!empty($validated['is_default']) && !$pricelist->is_default) {
            Pricelist::where('id', '!=', $pricelist->id)->update(['is_default' => false]);
        }

        $pricelist->update($validated);

        return $this->success(
            new PricelistResource($pricelist->fresh()),
            "Paket harga '{$pricelist->nama}' berhasil diperbarui."
        );
    }

    public function destroy(Pricelist $pricelist): JsonResponse
    {
        if ($pricelist->is_default) {
            return $this->error('Tidak dapat menghapus paket harga default.', 400);
        }

        if ($pricelist->users()->count() > 0) {
            // Reassign users to default plan before deleting
            $defaultPlan = Pricelist::where('is_default', true)->first();
            if ($defaultPlan) {
                $pricelist->users()->update(['paket_harga_id' => $defaultPlan->id]);
            }
        }

        $nama = $pricelist->nama;
        $pricelist->delete();

        return $this->success(
            null,
            "Paket harga '{$nama}' berhasil dihapus."
        );
    }

    public function setDefault(Pricelist $pricelist): JsonResponse
    {
        Pricelist::query()->update(['is_default' => false]);
        $pricelist->update(['is_default' => true, 'is_active' => true]);

        return $this->success(
            new PricelistResource($pricelist),
            "Paket harga '{$pricelist->nama}' telah dijadikan sebagai paket default sistem."
        );
    }

    public function updateUserPlan(Request $request, User $user): JsonResponse
    {
        $validated = $request->validate([
            'paket_harga_id' => 'required|exists:paket_harga,id',
        ]);

        $plan = Pricelist::findOrFail($validated['paket_harga_id']);
        $user->update(['paket_harga_id' => $plan->id]);

        return $this->success(
            new UserResource($user->fresh()),
            "Paket pengguna {$user->name} berhasil diubah menjadi '{$plan->nama}'."
        );
    }
}
