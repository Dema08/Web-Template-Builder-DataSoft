<?php

namespace App\Providers;

use App\Domains\Onboarding\Contracts\CategoryRepositoryInterface;
use App\Domains\Onboarding\Contracts\TemplateRepositoryInterface;
use App\Domains\Onboarding\Contracts\WebsiteRepositoryInterface;
use App\Domains\Onboarding\Repositories\CategoryRepository;
use App\Domains\Onboarding\Repositories\TemplateRepository;
use App\Domains\Onboarding\Repositories\WebsiteRepository;
use Illuminate\Support\ServiceProvider;

use Illuminate\Support\Facades\Gate;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        $this->app->bind(TemplateRepositoryInterface::class, TemplateRepository::class);
        $this->app->bind(WebsiteRepositoryInterface::class, WebsiteRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::policy(\App\Domains\Template\Models\Template::class, \App\Domains\Template\Policies\TemplatePolicy::class);
    }
}
