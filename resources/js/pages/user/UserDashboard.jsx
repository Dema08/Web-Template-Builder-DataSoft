import { Link } from 'react-router-dom';
import {
    Sparkles,
    Globe,
    Activity,
    ArrowRight,
    ChevronRight,
} from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner, Card } from '@components/ui';
import { ROUTES } from '@constants';

const templateCards = [
    { title: 'Architectural Vanguard', subtitle: 'Premium • Business', accent: 'from-indigo-100 via-white to-white' },
    { title: 'Street Style Hub', subtitle: 'Free • E-commerce', accent: 'from-slate-100 via-white to-white' },
    { title: 'SaaS Foundation', subtitle: 'Premium • Tech', accent: 'from-blue-100 via-white to-white' },
    { title: 'Noir Portfolio', subtitle: 'Premium • Photography', accent: 'from-zinc-100 via-white to-white' },
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
                <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700 font-semibold">
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
        { label: 'Edit Content', description: 'Update page text & images', href: ROUTES.BUILDER, icon: 'sparkles' },
        { label: 'Site Settings', description: 'Configure subdomain & SEO', href: ROUTES.SETTINGS, icon: 'layout-grid' },
        { label: 'Pick Template', description: 'Switch layout design', href: ROUTES.TEMPLATES, icon: 'user-circle' },
    ];
    const activities = dashboard?.activities || [
        { action: 'Website Initialized', description: 'Corporate profile created', created_at: 'Just now' },
        { action: 'Profile Updated', description: 'Account settings saved', created_at: '2 hours ago' },
    ];

    return (
        <div className="space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
            {/* Section 1: Welcome Header */}
            <Card className="p-6 lg:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                            <Sparkles className="h-3.5 w-3.5" />
                            Dashboard overview
                        </div>
                        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl tracking-tight">
                            Welcome back, {firstName}!
                        </h1>
                        <p className="mt-1 text-sm text-slate-500 lg:text-base max-w-lg">
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
                            className="rounded-xl bg-indigo-600 px-5 py-2 text-xs font-bold text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition"
                        >
                            Continue Editing
                        </Link>
                    </div>
                </div>
            </Card>

            {/* Section 2: Website Summary + Weekly Performance */}
            <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                {/* Website Summary Card */}
                <Card className="p-6 flex flex-col justify-between">
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
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Template</div>
                                <div className="mt-1.5 text-base font-extrabold text-slate-900">{website?.template || 'Corporate Pro v2'}</div>
                            </div>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                                <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Slug</div>
                                <div className="mt-1.5 text-base font-extrabold text-slate-900">{website?.slug || website?.subdomain || 'datasoft'}</div>
                            </div>
                            <div className="rounded-xl bg-slate-50 p-4 md:col-span-2 border border-slate-100">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Last updated</div>
                                        <div className="mt-1.5 text-base font-extrabold text-slate-900">{website?.updated_at || website?.created_at || 'Just now'}</div>
                                    </div>
                                    <a
                                        href={`http://${website?.subdomain || 'datasoft'}.datasoft.id`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-600/20"
                                    >
                                        <Globe className="h-4 w-4" />
                                        <span>View Live Site</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Weekly Performance Card */}
                <Card className="p-6 bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="text-2xl font-extrabold tracking-tight">Weekly Performance</div>
                                <div className="mt-2 text-sm text-blue-100 font-medium">+12.4% traffic increase this week.</div>
                            </div>
                            <div className="rounded-xl bg-white/10 p-2.5 backdrop-blur-md">
                                <Sparkles className="h-5 w-5" />
                            </div>
                        </div>
                        <div className="mt-8 text-[52px] font-black leading-none tracking-tight">1.2k</div>
                    </div>

                    {/* Subtle wave pattern */}
                    <div className="absolute -bottom-2 -left-2 w-32 h-16 opacity-10">
                        <svg viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
                            <path d="M0 25 Q20 5, 40 20 T80 10 T100 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </Card>
            </section>

            {/* Section 3: Quick Actions + Recent Activity */}
            <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
                {/* Quick Actions */}
                <Card className="p-6">
                    <div className="mb-6">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Actions</p>
                        <h2 className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">Launch faster</h2>
                        <p className="text-xs text-slate-500 mt-1.5">Common tasks to publish & optimize your site</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {quickActions.map((action) => (
                            <Link
                                key={action.label}
                                to={action.href || ROUTES.BUILDER}
                                className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md flex flex-col text-center"
                            >
                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-slate-200 group-hover:ring-indigo-200 mx-auto">
                                    ✨
                                </div>
                                <div className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition">{action.label}</div>
                                <p className="mt-1 text-xs text-slate-500 font-medium flex-1">{action.description}</p>
                                <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-indigo-600">
                                    <span>Open</span> <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </Card>

                {/* Recent Activity */}
                <Card className="p-6">
                    <div className="mb-6 flex items-center justify-between gap-3">
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recent Activity</p>
                            <h2 className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">Latest activity</h2>
                        </div>
                        <div className="rounded-full bg-slate-100 p-2.5 text-slate-500">
                            <Activity className="h-4 w-4" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        {activities.slice(0, 4).map((activity, index) => (
                            <div
                                key={`${activity.action}-${index}`}
                                className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 border border-slate-100"
                            >
                                <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500" />
                                <div className="min-w-0 flex-1">
                                    <div className="text-xs font-extrabold text-slate-900">{activity.action}</div>
                                    <div className="text-xs text-slate-500 mt-0.5">{activity.description}</div>
                                </div>
                                <div className="whitespace-nowrap text-[10px] font-bold text-slate-400">
                                    {activity.created_at || 'Recently'}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>

            {/* Section 4: Template Library */}
            <Card className="p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Template Library</h2>
                    <Link to={ROUTES.TEMPLATES} className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition">
                        <span>Browse All</span> <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {templateCards.map((card) => (
                        <div
                            key={card.title}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-200"
                        >
                            <div className={`h-44 bg-gradient-to-br ${card.accent} p-4`}>
                                <div className="flex h-full items-center justify-center rounded-xl border border-white/70 bg-white/40 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                                    <div className="grid w-full grid-cols-3 gap-2 p-3">
                                        <div className="col-span-2 h-8 rounded bg-slate-100" />
                                        <div className="h-8 rounded bg-slate-200" />
                                        <div className="col-span-3 h-16 rounded bg-white/80" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 space-y-1">
                                <div className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition">{card.title}</div>
                                <div className="text-xs font-semibold text-slate-400">{card.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
