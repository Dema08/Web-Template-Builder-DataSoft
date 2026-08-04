import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Sparkles, Globe, Activity, LayoutGrid, FileText, UserCircle2, Settings, ArrowRight, ChevronRight, PanelLeftClose, PanelLeftOpen, LogOut } from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner } from '@components/ui';
import { ROUTES } from '@constants';

const templateCards = [
    { title: 'Architectural Vanguard', subtitle: 'Premium • Business', accent: 'from-sky-100 to-white' },
    { title: 'Street Style Hub', subtitle: 'Free • E-commerce', accent: 'from-slate-100 to-white' },
    { title: 'SaaS Foundation', subtitle: 'Premium • Tech', accent: 'from-blue-100 to-white' },
    { title: 'Noir Portfolio', subtitle: 'Premium • Photography', accent: 'from-zinc-100 to-white' },
];

export default function Dashboard() {
    const { user, logout, isLoggingOut } = useAuth();
    const { data: dashboard, isLoading, isError, error } = useDashboard();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    if (isLoading) {
        return (
            <div className="flex min-h-[420px] items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
                {error?.response?.data?.message || 'Unable to load dashboard right now.'}
            </div>
        );
    }

    const hasWebsite = Boolean(dashboard?.website);
    const dashboardUser = dashboard?.user || user;
    const firstName = dashboardUser?.name?.split(' ')[0] || 'User';
    const website = dashboard?.website;
    const quickActions = dashboard?.quick_actions || [];
    const activities = dashboard?.activities || [];
    const profileAvatar = dashboardUser?.avatar || user?.avatar || null;
    const profileAvatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}`;

    return (
        <div className="h-screen overflow-hidden bg-[#f3f4f8] text-slate-900">
            <div className="flex h-screen">
                <aside
                    className={`sticky top-0 hidden h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ease-out lg:flex ${
                        isSidebarCollapsed ? 'w-20' : 'w-72'
                    }`}
                >
                    <div
                        className={`flex items-center border-b border-slate-200 px-3 py-6 transition-all duration-300 ease-out ${
                            isSidebarCollapsed ? 'justify-center' : 'justify-between gap-3'
                        }`}
                    >
                        <div className="flex shrink-0 items-center justify-center overflow-hidden">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
                                AC
                            </div>
                        </div>

                        {!isSidebarCollapsed && (
                            <div className="min-w-0 flex-1">
                                <div className="text-[15px] font-semibold text-slate-900">DataSoft</div>
                                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Premium plan</div>
                            </div>
                        )}

                        <button
                            type="button"
                            aria-label={isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
                            onClick={() => setIsSidebarCollapsed((value) => !value)}
                            className="shrink-0 rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                        >
                            {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto px-3 py-5">
                        {[
                            { label: 'Dashboard', icon: LayoutGrid, active: true },
                            { label: 'Websites', icon: Globe },
                            { label: 'Templates', icon: FileText },
                            { label: 'Profile', icon: UserCircle2 },
                            { label: 'Settings', icon: Settings },
                        ].map(({ label, icon: Icon, active }) => (
                            <Link
                                key={label}
                                to={
                                    label === 'Dashboard'
                                        ? ROUTES.DASHBOARD
                                        : label === 'Websites'
                                            ? ROUTES.BUILDER
                                            : label === 'Profile'
                                                ? ROUTES.PROFILE
                                                : ROUTES.SETTINGS
                                }
                                className={`flex items-center rounded-lg py-3 text-sm font-medium transition ${
                                    isSidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-3'
                                } ${
                                    active
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                            >
                                <Icon className="h-4 w-4 shrink-0" />
                                {!isSidebarCollapsed && <span>{label}</span>}
                            </Link>
                        ))}
                    </nav>

                    <div className="space-y-3 px-4 pb-6 pt-2">
                        <Link
                            to={ROUTES.BUILDER}
                            className={`flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 ${
                                isSidebarCollapsed ? 'px-2' : ''
                            }`}
                        >
                            <Sparkles className="h-4 w-4 shrink-0" />
                            {!isSidebarCollapsed && <span>Create New Site</span>}
                        </Link>

                        <button
                            type="button"
                            onClick={() => logout()}
                            disabled={isLoggingOut}
                            className={`flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:text-red-600 disabled:opacity-50 ${
                                isSidebarCollapsed ? 'px-2' : ''
                            }`}
                        >
                            {isLoggingOut ? <Spinner size="sm" /> : <LogOut className="h-4 w-4 shrink-0" />}
                            {!isSidebarCollapsed && <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>}
                        </button>
                    </div>
                </aside>

                <main className="flex-1 overflow-y-auto">
                    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                aria-label={isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
                                onClick={() => setIsSidebarCollapsed((value) => !value)}
                                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
                            >
                                {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                            </button>

                            <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                                <Search className="h-4 w-4" />
                                <span>Search templates or sites...</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="rounded-full border border-slate-200 p-2 text-slate-600 hover:text-slate-900">
                                <Bell className="h-4 w-4" />
                            </button>
                            <Link
                                to={ROUTES.PROFILE}
                                className="flex items-center gap-3 rounded-full bg-white px-2 py-1 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-200"
                            >
                                <img
                                    src={profileAvatar || profileAvatarFallback}
                                    alt="User profile"
                                    onError={(event) => {
                                        event.currentTarget.onerror = null;
                                        event.currentTarget.src = profileAvatarFallback;
                                    }}
                                    className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200"
                                />
                                <div className="hidden text-sm sm:block">
                                    <div className="font-semibold text-slate-900">{firstName}</div>
                                    <div className="text-xs text-slate-500">{dashboardUser?.role || 'User'}</div>
                                </div>
                            </Link>
                        </div>
                    </header>

                    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                                        <Sparkles className="h-3.5 w-3.5" />
                                        Dashboard overview
                                    </div>
                                    <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Welcome back, {firstName}!</h1>
                                    <p className="mt-2 text-sm text-slate-500">
                                        {hasWebsite
                                            ? 'Your website is ready for updates, publishing, and review.'
                                            : 'Create your first website and start shaping your brand story.'}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        to={website?.published_url || ROUTES.BUILDER}
                                        target={website?.published_url ? '_blank' : undefined}
                                        rel={website?.published_url ? 'noreferrer' : undefined}
                                        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                                    >
                                        Preview
                                    </Link>
                                    <Link
                                        to={ROUTES.BUILDER}
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                                    >
                                        Continue Editing
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Website Summary</p>
                                        <h2 className="text-2xl font-semibold text-slate-900">{website?.name || 'Website'}</h2>
                                    </div>
                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                                        {website?.is_published ? 'Published' : 'Draft'}
                                    </span>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="rounded-2xl bg-slate-50 p-4">
                                        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Template</div>
                                        <div className="mt-2 text-base font-semibold text-slate-900">{website?.template || 'Corporate Pro'}</div>
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 p-4">
                                        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Slug</div>
                                        <div className="mt-2 text-base font-semibold text-slate-900">{website?.slug || website?.subdomain || 'site-name'}</div>
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Last updated</div>
                                                <div className="mt-2 text-base font-semibold text-slate-900">{website?.updated_at || website?.created_at || 'Just now'}</div>
                                            </div>
                                            <a
                                                href={website?.published_url || '#'}
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
                            </div>

                            <div className="rounded-2xl bg-[#2f5df0] p-6 text-white shadow-sm">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="text-2xl font-semibold">Weekly Performance</div>
                                        <div className="mt-2 text-sm text-blue-100">+12.4% traffic increase this week.</div>
                                    </div>
                                    <div className="rounded-lg bg-white/10 p-2">
                                        <Sparkles className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="mt-8 text-[52px] font-semibold leading-none">1.2k</div>
                            </div>
                        </section>

                        <section className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-5 flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Quick Actions</p>
                                        <h2 className="text-2xl font-semibold text-slate-900">Launch faster</h2>
                                    </div>
                                </div>
                                <div className="grid gap-4 md:grid-cols-3">
                                    {quickActions.map((action) => (
                                        <Link
                                            key={action.label}
                                            to={action.href || ROUTES.BUILDER}
                                            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white"
                                        >
                                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-slate-200">
                                                ✨
                                            </div>
                                            <div className="text-base font-semibold text-slate-900">{action.label}</div>
                                            <p className="mt-1 text-sm text-slate-500">{action.description}</p>
                                            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
                                                Open <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-5 flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">Recent Activity</p>
                                        <h2 className="text-2xl font-semibold text-slate-900">Latest activity</h2>
                                    </div>
                                    <div className="rounded-full bg-slate-100 p-2 text-slate-600">
                                        <Activity className="h-4 w-4" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {activities.slice(0, 4).map((activity, index) => (
                                        <div key={`${activity.action}-${index}`} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                                            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                                            <div className="min-w-0 flex-1">
                                                <div className="text-sm font-semibold text-slate-900">{activity.action}</div>
                                                <div className="text-sm text-slate-500">{activity.description}</div>
                                            </div>
                                            <div className="whitespace-nowrap text-xs text-slate-400">{activity.created_at || 'Recently'}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-5 flex items-center justify-between">
                                <h2 className="text-2xl font-semibold text-slate-900">Template Library</h2>
                                <Link to={ROUTES.BUILDER} className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900">
                                    Browse All <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                                {templateCards.map((card) => (
                                    <div key={card.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                        <div className={`h-40 bg-gradient-to-br ${card.accent} p-4`}>
                                            <div className="flex h-full items-center justify-center rounded-xl border border-white/70 bg-white/40 backdrop-blur-sm">
                                                <div className="grid w-full grid-cols-3 gap-2 p-3">
                                                    <div className="col-span-2 h-8 rounded bg-slate-100" />
                                                    <div className="h-8 rounded bg-slate-200" />
                                                    <div className="col-span-3 h-16 rounded bg-white/80" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="text-[17px] font-semibold text-slate-900">{card.title}</div>
                                            <div className="mt-1 text-sm text-slate-500">{card.subtitle}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}
