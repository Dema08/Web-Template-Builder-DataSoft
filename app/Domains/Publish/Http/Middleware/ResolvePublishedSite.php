<?php

namespace App\Domains\Publish\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ResolvePublishedSite
{
    private const RESERVED_SUBDOMAINS = [
        'admin',
        'api',
        'app',
        'assets',
        'cdn',
        'dashboard',
        'ftp',
        'mail',
        'p',
        'public',
        'static',
        'storage',
        'web',
        'www',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $host = strtolower($request->getHost());
        $mainDomain = strtolower((string) config('app.main_domain'));
        $primaryHost = strtolower((string) config('app.primary_host'));

        if ($host === $primaryHost || $host === $mainDomain) {
            return $next($request);
        }

        $domainSuffix = '.'.$mainDomain;
        if (!str_ends_with($host, $domainSuffix)) {
            return $next($request);
        }

        $subdomain = substr($host, 0, -strlen($domainSuffix));

        if (
            str_contains($subdomain, '.')
            || !preg_match('/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/', $subdomain)
            || in_array($subdomain, self::RESERVED_SUBDOMAINS, true)
        ) {
            abort(404);
        }

        $request->attributes->set('published_slug', $subdomain);
        $request->attributes->set('published_source', 'subdomain');

        if ($request->isMethod('GET') && $request->path() === '/' && !$request->expectsJson()) {
            return redirect('/p/'.$subdomain);
        }

        return $next($request);
    }
}
