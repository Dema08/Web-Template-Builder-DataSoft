<?php

namespace App\Domains\Template\Policies;

use App\Domains\Shared\Enums\UserRole;
use App\Domains\Template\Models\Template;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TemplatePolicy
{
    /**
     * Determine whether the user can view any templates.
     */
    public function viewAny(User $user): bool
    {
        return true; // Templates are browsable by authenticated users
    }

    /**
     * Determine whether the user can view the template.
     */
    public function view(User $user, Template $template): bool
    {
        return true; // Templates are viewable by authenticated users
    }

    /**
     * Determine whether the user can create templates.
     */
    public function create(User $user): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the template.
     */
    public function update(User $user, Template $template): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the template.
     */
    public function delete(User $user, Template $template): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the template.
     */
    public function restore(User $user, Template $template): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the template.
     */
    public function forceDelete(User $user, Template $template): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can publish the template.
     */
    public function publish(User $user, Template $template): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can archive the template.
     */
    public function archive(User $user, Template $template): bool
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can duplicate the template.
     */
    public function duplicate(User $user, Template $template): bool
    {
        return $user->isAdmin();
    }
}
