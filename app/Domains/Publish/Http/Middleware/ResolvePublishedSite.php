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
        $publishDomain = strtolower((string) config('app.publish_domain', 'web.microdata.co.id'));
        $primaryHost = strtolower((string) config('app.primary_host', 'web.microdata.co.id'));
        $mainDomain = strtolower((string) config('app.main_domain', 'microdata.co.id'));

        // If accessing main dashboard / landing host
        if ($host === $primaryHost || $host === $mainDomain || $host === 'localhost' || $host === '127.0.0.1') {
            return $next($request);
        }

        $subdomain = null;

        // Check against publish domain (.web.microdata.co.id)
        $publishSuffix = '.' . $publishDomain;
        if (str_ends_with($host, $publishSuffix)) {
            $subdomain = substr($host, 0, -strlen($publishSuffix));
        } elseif (str_ends_with($host, '.' . $mainDomain)) {
            $subdomain = substr($host, 0, -strlen('.' . $mainDomain));
            // In case host is xxx.web (subdomain of mainDomain when mainDomain is microdata.co.id)
            if (str_ends_with($subdomain, '.web')) {
                $subdomain = substr($subdomain, 0, -4);
            }
        } elseif (str_ends_with($host, '.localhost')) {
            $subdomain = substr($host, 0, -strlen('.localhost'));
        }

        if ($subdomain !== null) {
            if (
                str_contains($subdomain, '.')
                || !preg_match('/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/', $subdomain)
                || in_array($subdomain, self::RESERVED_SUBDOMAINS, true)
            ) {
                abort(404, 'Subdomain tidak valid.');
            }

            $request->attributes->set('published_slug', $subdomain);
            $request->attributes->set('published_source', 'subdomain');
        }

        return $next($request);
    }
}
