import { ExternalLink, Globe, Edit3, Calendar, BarChart3 } from 'lucide-react';
import { Card } from '@components/ui';
import StatusBadge from './StatusBadge';

export default function WebsiteSummary({ website }) {
    if (!website) {
        return null;
    }

    return (
        <Card className="p-6">
            <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Website Summary</p>
                    <h2 className="text-2xl font-extrabold text-slate-900 mt-1">{website.name || 'Website'}</h2>
                </div>
                <StatusBadge status={website.is_published ? 'published' : 'draft'} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Template</div>
                    <div className="mt-1.5 text-base font-extrabold text-slate-900">{website.template || 'Corporate Pro'}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Slug</div>
                    <div className="mt-1.5 text-base font-extrabold text-slate-900">{website.slug || website.subdomain || 'site-name'}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 md:col-span-2">
                    <div className="flex items-center justify-between gap-3">
                        <div>
                            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Last updated</div>
                            <div className="mt-1.5 text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                                {website.updated_at || website.created_at || 'Just now'}
                            </div>
                        </div>
                        <a
                            href={website.published_url || '#'}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-600/20"
                        >
                            <Globe className="h-4 w-4" />
                            View Live Site
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="inline-flex items-center gap-2">
                    <Edit3 className="h-4 w-4 text-indigo-600" /> Edit website
                </span>
                <span className="inline-flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-indigo-600" /> Analytics dashboard
                </span>
                <span className="inline-flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-indigo-600" /> {website.published_url || 'https://preview.example.com'}
                </span>
            </div>
        </Card>
    );
}
