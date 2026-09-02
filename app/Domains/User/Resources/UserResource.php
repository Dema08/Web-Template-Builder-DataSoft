<?php

namespace App\Domains\User\Resources;

use App\Domains\User\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * UserResource
 *
 * Transforms a User model into the canonical public JSON shape:
 *   id, name, email, avatar, role, created_at
 */
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        /** @var User $user */
        $user = $this->resource;

        $avatar = $user->avatar
            ? '/storage/' . ltrim($user->avatar, '/')
            : null;

        $effectivePlan = $user->effective_pricelist;

        return [
            'id'          => $user->id,
            'name'        => $user->name,
            'email'       => $user->email,
            'avatar'      => $avatar,
            'role'        => $user->peran?->value ?? 'user',
            'is_approved' => (bool) $user->disetujui,
            'plan'        => new \App\Domains\Pricelist\Resources\PricelistResource($effectivePlan),
            'created_at'  => $user->created_at?->toISOString(),
        ];
    }
}
