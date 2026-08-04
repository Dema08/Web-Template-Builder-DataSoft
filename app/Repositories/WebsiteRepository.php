<?php

namespace App\Repositories;

use App\Contracts\WebsiteRepositoryInterface;
use App\Models\Website;
use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

class WebsiteRepository implements WebsiteRepositoryInterface
{
    public function getAllByUser(User $user, int $skip = 0, int $take = 20): LengthAwarePaginator
    {
        return Website::where('user_id', $user->id)
            ->orderByDesc('created_at')
            ->skip($skip)
            ->take($take)
            ->paginate($take, ['*'], 'page', ($skip / $take) + 1);
    }

    public function findById(int $id): ?Website
    {
        return Website::find($id);
    }

    public function findBySlug(string $slug): ?Website
    {
        return Website::where('slug', $slug)->first();
    }

    public function findByUserAndSlug(User $user, string $slug): ?Website
    {
        return Website::where('user_id', $user->id)
            ->where('slug', $slug)
            ->first();
    }

    public function findActiveByUser(User $user): ?Website
    {
        return Website::where('user_id', $user->id)
            ->whereIn('status', ['draft', 'published'])
            ->first();
    }

    public function create(array $data): Website
    {
        return Website::create($data);
    }

    public function update(Website $website, array $data): Website
    {
        $website->update($data);
        return $website->fresh();
    }

    public function delete(Website $website): bool
    {
        return $website->delete();
    }

    public function userOwnsWebsite(User $user, int $websiteId): bool
    {
        return Website::where('user_id', $user->id)
            ->where('id', $websiteId)
            ->exists();
    }
}
