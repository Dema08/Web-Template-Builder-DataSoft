import { Link } from 'react-router-dom';
import {
    Sparkles,
    Globe,
    Activity,
    ArrowRight,
    ChevronRight,
} from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner } from '@components/ui';
import { ROUTES } from '@constants';

const templateCards = [
    { title: 'Architectural Vanguard', subtitle: 'Premium • Business', accent: 'from-sky-100 to-white' },
    { title: 'Street Style Hub', subtitle: 'Free • E-commerce', accent: 'from-slate-100 to-white' },
    { title: 'SaaS Foundation', subtitle: 'Premium • Tech', accent: 'from-blue-100 to-white' },
    { title: 'Noir Portfolio', subtitle: 'Premium • Photography', accent: 'from-zinc-100 to-white' },
];

export default function UserDashboard() {
    const { user } = useAuth();
    const { data: dashboard, isLoading, isError, error } = useDashboard();

    if (isLoading) {
        return (
            <div className="flex min-h-[420px] items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="p-6">
                <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-sm text-red-700 font-semibold">
                    {error?.response?.data?.message || 'Unable to load dashboard right now.'}
                </div>
            </div>
        );
    }

    const hasWebsite = Boolean(dashboard?.website);
    const dashboardUser = dashboard?.user || user;
    const firstName = dashboardUser?.name?.split(' ')[0] || 'User';
    const website = dashboard?.website;
    const quickActions = dashboard?.quick_actions || [
        { label: 'Edit Content', description: 'Update page text & images', href: ROUTES.BUILDER },
        { label: 'Site Settings', description: 'Configure subdomain & SEO', href: ROUTES.SETTINGS },
        { label: 'Pick Template', description: 'Switch layout design', href: ROUTES.TEMPLATES },
    ];
    const activities = dashboard?.activities || [
        { action: 'Website Initialized', description: 'Corporate profile created', created_at: 'Just now' },
        { action: 'Profile Updated', description: 'Account settings saved', created_at: '2 hours ago' },
    ];

    return (
        <div className="space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Section 1: Welcome Header */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                            <Sparkles className="h-3.5 w-3.5" />
                            Dashboard overview
                        </div>
                        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">
                            Welcome back, {firstName}!
                        </h1>
                        <p className="mt-2 text-sm text-slate-500 font-medium">
                            {hasWebsite
                                ? 'Your website is ready for updates, publishing, and review.'
                                : 'Create your first website and start shaping your brand story.'}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link
                            to={ROUTES.WEBSITES}
                            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition shadow-xs"
                        >
                            Preview
                        </Link>
                        <Link
                            to={ROUTES.BUILDER}
                            className="rounded-xl bg-blue-600 px-5 py-2 text-xs font-bold text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 transition"
                        >
                            Continue Editing
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 2: Website Summary + Weekly Performance */}
            <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between">
                    <div>
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Website Summary</p>
                                <h2 className="text-2xl font-extrabold text-slate-900 mt-1">{website?.name || 'DataSoft Profile'}</h2>
                            </div>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                                {website?.is_published ? 'Published' : 'Draft'}
                            </span>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 mt-4">
                            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Template</div>
                                <div className="mt-1 text-base font-extrabold text-slate-900">{website?.template || 'Corporate Pro v2'}</div>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Slug</div>
                                <div className="mt-1 text-base font-extrabold text-slate-900">{website?.slug || website?.subdomain || 'datasoft'}</div>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2 border border-slate-100">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Last updated</div>
                                        <div className="mt-1 text-base font-extrabold text-slate-900">{website?.updated_at || website?.created_at || 'Just now'}</div>
                                    </div>
                                    <a
                                        href={`http://${website?.subdomain || 'datasoft'}.datasoft.id`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50 transition shadow-xs"
                                    >
                                        <Globe className="h-4 w-4" />
                                        <span>View Live Site</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl bg-[#2f5df0] p-6 text-white shadow-lg shadow-blue-600/25 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-2xl font-extrabold tracking-tight">Weekly Performance</div>
                            <div className="mt-2 text-xs text-blue-100 font-medium">+12.4% traffic increase this week.</div>
                        </div>
                        <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-md">
                            <Sparkles className="h-5 w-5" />
                        </div>
                    </div>
                    <div className="mt-8 text-[52px] font-black leading-none tracking-tight">1.2k</div>
                </div>
            </section>

            {/* Section 3: Quick Actions + Recent Activity */}
            <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                    <div className="mb-5 flex items-center justify-between gap-3">
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Actions</p>
                            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Launch faster</h2>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {quickActions.map((action) => (
                            <Link
                                key={action.label}
                                to={action.href || ROUTES.BUILDER}
                                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white shadow-xs"
                            >
                                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-xs ring-1 ring-slate-200">
                                    ✨
                                </div>
                                <div className="text-base font-extrabold text-slate-900">{action.label}</div>
                                <p className="mt-1 text-xs text-slate-500 font-medium">{action.description}</p>
                                <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-600">
                                    <span>Open</span> <ArrowRight className="h-3.5 w-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                    <div className="mb-5 flex items-center justify-between gap-3">
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recent Activity</p>
                            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Latest activity</h2>
                        </div>
                        <div className="rounded-full bg-slate-100 p-2 text-slate-600">
                            <Activity className="h-4 w-4" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        {activities.slice(0, 4).map((activity, index) => (
                            <div key={`${activity.action}-${index}`} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3 border border-slate-100">
                                <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0" />
                                <div className="min-w-0 flex-1">
                                    <div className="text-xs font-bold text-slate-900">{activity.action}</div>
                                    <div className="text-xs text-slate-500 font-medium">{activity.description}</div>
                                </div>
                                <div className="whitespace-nowrap text-[10px] font-bold text-slate-400">{activity.created_at || 'Recently'}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Template Library */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Template Library</h2>
                    <Link to={ROUTES.TEMPLATES} className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition">
                        <span>Browse All</span> <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {templateCards.map((card) => (
                        <div key={card.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition">
                            <div className={`h-40 bg-gradient-to-br ${card.accent} p-4`}>
                                <div className="flex h-full items-center justify-center rounded-xl border border-white/70 bg-white/40 backdrop-blur-xs">
                                    <div className="grid w-full grid-cols-3 gap-2 p-3">
                                        <div className="col-span-2 h-8 rounded bg-slate-100" />
                                        <div className="h-8 rounded bg-slate-200" />
                                        <div className="col-span-3 h-16 rounded bg-white/80" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-sm font-extrabold text-slate-900">{card.title}</div>
                                <div className="mt-1 text-xs font-semibold text-slate-400">{card.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
