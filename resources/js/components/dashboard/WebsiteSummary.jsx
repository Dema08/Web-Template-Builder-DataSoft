import { ExternalLink, Globe, PencilLine } from 'lucide-react';
import { Card } from '@components/ui';
import StatusBadge from './StatusBadge';

export default function WebsiteSummary({ website }) {
    if (!website) {
        return null;
    }

    return (
        <Card className="p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                    <p className="text-sm font-medium text-slate-500">Website Summary</p>
                    <h2 className="text-2xl font-semibold text-slate-900">{website.name || 'Website'}</h2>
                </div>
                <StatusBadge status={website.is_published ? 'published' : 'draft'} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Template</div>
                    <div className="mt-2 text-base font-semibold text-slate-900">{website.template || 'Corporate Pro'}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Slug</div>
                    <div className="mt-2 text-base font-semibold text-slate-900">{website.slug || website.subdomain || 'site-name'}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Last updated</div>
                            <div className="mt-2 text-base font-semibold text-slate-900">{website.updated_at || website.created_at || 'Just now'}</div>
                        </div>
                        <a
                            href={website.published_url || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50"
                        >
                            <Globe className="h-4 w-4" />
                            View Live Site
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2"><PencilLine className="h-4 w-4" /> Edit website</span>
                <span className="inline-flex items-center gap-2"><ExternalLink className="h-4 w-4" /> {website.published_url || 'https://preview.example.com'}</span>
            </div>
        </Card>
    );
}
