import { Link } from 'react-router-dom';
import { Globe, Settings, ArrowRight, ExternalLink, Search, LayoutGrid, FileText, Palette, Bell, ChevronRight, Sparkles, UserCircle2 } from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner } from '@components/ui';
import { ROUTES } from '@constants';
import { useWebsite } from '@hooks';

const templateCards = [
    { title: 'Architectural Vanguard', subtitle: 'Premium • Business', accent: 'from-sky-100 to-white' },
    { title: 'Street Style Hub', subtitle: 'Free • E-commerce', accent: 'from-slate-100 to-white' },
    { title: 'SaaS Foundation', subtitle: 'Premium • Tech', accent: 'from-blue-100 to-white' },
    { title: 'Noir Portfolio', subtitle: 'Premium • Photography', accent: 'from-zinc-100 to-white' },
];

export default function Dashboard() {
    const { user } = useAuth();
    const { data: dashboard, isLoading: isDashboardLoading } = useDashboard();
    const { website } = useWebsite();

    if (isDashboardLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Spinner size="lg" />
            </div>
        );
    }

    const siteUrl = website?.published_url || null;
    const firstName = user?.name?.split(' ')[0] || 'Alex';

    return (
        <div className="min-h-screen bg-[#f3f4f8] text-slate-900">
            <div className="flex min-h-screen">
                <aside className="hidden w-72 flex-col bg-white border-r border-slate-200 lg:flex">
                    <div className="flex items-center gap-3 px-5 py-6 border-b border-slate-200">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                            AC
                        </div>
                        <div>
                            <div className="text-[15px] font-semibold text-slate-900">Acme Corp</div>
                            <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Premium plan</div>
                        </div>
                    </div>

                    <nav className="flex-1 px-3 py-5">
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
                                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                                    active
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="px-4 pb-6 pt-2">
                        <Link
                            to={ROUTES.BUILDER}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                        >
                            <Sparkles className="h-4 w-4" />
                            Create New Site
                        </Link>
                    </div>
                </aside>

                <main className="flex-1">
                    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
                        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 w-full max-w-md">
                            <Search className="h-4 w-4" />
                            <span>Search templates or sites...</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="rounded-full border border-slate-200 p-2 text-slate-600 hover:text-slate-900">
                                <Bell className="h-4 w-4" />
                            </button>
                            <Link
                                to={ROUTES.PROFILE}
                                className="flex items-center gap-3 rounded-full bg-white px-2 py-1 shadow-sm ring-1 ring-slate-200 transition hover:ring-blue-200"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
                                    {firstName.slice(0, 1).toUpperCase()}
                                </div>
                                <div className="hidden text-sm sm:block">
                                    <div className="font-semibold text-slate-900">{firstName}</div>
                                    <div className="text-xs text-slate-500">Admin</div>
                                </div>
                            </Link>
                        </div>
                    </header>

                    <div className="p-8">
                        <div className="grid gap-6 xl:grid-cols-[2fr_0.9fr]">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="mb-8 flex items-center justify-between gap-4">
                                    <div>
                                        <h1 className="text-[28px] font-semibold text-slate-900">Welcome back, {firstName}!</h1>
                                        <p className="mt-1 text-sm text-slate-500">Manage your projects and discover new inspirations.</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                                            Preview
                                        </button>
                                        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                                            Continue Editing
                                        </button>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                                        <span className="font-medium">Published</span>
                                        <span className="ml-4 text-slate-400">Website Status</span>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between gap-2">
                                        <div>
                                            <div className="text-[38px] font-semibold text-slate-900">Corporate Pro v2</div>
                                            <div className="mt-1 text-sm text-slate-500">5 mins ago</div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                                            <Globe className="h-4 w-4" />
                                            View Live Site
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
                        </div>

                        <section className="mt-10">
                            <div className="mb-5 flex items-center justify-between">
                                <h2 className="text-[28px] font-semibold text-slate-900">Template Library</h2>
                                <Link to={ROUTES.TEMPLATES || ROUTES.DASHBOARD} className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900">
                                    Browse All <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                                {templateCards.map((card, index) => (
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
