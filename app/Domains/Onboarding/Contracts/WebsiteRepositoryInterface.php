<?php

namespace App\Domains\Onboarding\Contracts;

use App\Domains\User\Models\User;
use App\Domains\Website\Models\Website;
use Illuminate\Pagination\LengthAwarePaginator;

interface WebsiteRepositoryInterface
{
    public function getAllByUser(User $user, int $skip = 0, int $take = 20): LengthAwarePaginator;

    public function findById(int $id): ?Website;

    public function findBySlug(string $slug): ?Website;

    public function findByUserAndSlug(User $user, string $slug): ?Website;

    public function findActiveByUser(User $user): ?Website;

    public function create(array $data): Website;

    public function update(Website $website, array $data): Website;

    public function delete(Website $website): bool;

    public function userOwnsWebsite(User $user, int $websiteId): bool;
}