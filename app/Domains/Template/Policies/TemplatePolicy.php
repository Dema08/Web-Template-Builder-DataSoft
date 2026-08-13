<?php

namespace App\Domains\Template\Policies;

class TemplatePolicy
{
    /**
     * Determine whether the user can view any templates.
     */
    public function viewAny(mixed $user = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the template.
     */
    public function view(mixed $user = null, mixed $template = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create templates.
     */
    public function create(mixed $user = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the template.
     */
    public function update(mixed $user = null, mixed $template = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can delete the template.
     */
    public function delete(mixed $user = null, mixed $template = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can restore the template.
     */
    public function restore(mixed $user = null, mixed $template = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can permanently delete the template.
     */
    public function forceDelete(mixed $user = null, mixed $template = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can publish the template.
     */
    public function publish(mixed $user = null, mixed $template = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can archive the template.
     */
    public function archive(mixed $user = null, mixed $template = null): bool
    {
        return true;
    }

    /**
     * Determine whether the user can duplicate the template.
     */
    public function duplicate(mixed $user = null, mixed $template = null): bool
    {
        return true;
    }
}
