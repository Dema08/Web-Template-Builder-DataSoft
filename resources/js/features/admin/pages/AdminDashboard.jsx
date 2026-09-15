import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Calendar,
    Download,
    Users as UsersIcon,
    Layout,
    Eye,
    CreditCard,
    Shield,
    BarChart3,
    TrendingUp,
    Activity,
    Globe,
    RefreshCw,
    Loader2,
    ExternalLink,
    ChevronRight,
    Sparkles,
    CheckCircle2,
    Clock,
    UserCheck,
    Layers,
    Tag,
} from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Card } from '@shared/components/ui';
import { useSettingsStore } from '@store';
import { ROUTES } from '@constants';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { stats, websites, recentActivity, isLoading, refetch, isRefetching } = useDashboard();
    const { brand_name } = useSettingsStore();

    const firstName = user?.name?.split(' ')[0] || 'Admin';
    const totalUsers = stats?.total_users ?? 0;
    const totalViews = stats?.total_views ?? 0;
    const publishedTemplatesCount = stats?.published_templates_count ?? 0;
    const totalWebsites = stats?.total_websites ?? 0;
    const publishedWebsitesCount = stats?.published_count ?? 0;

    const statCards = [
        {
            label: 'Total Terdaftar',
            value: totalUsers.toLocaleString(),
            subtext: 'Pengguna Platform',
            icon: UsersIcon,
            iconColor: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50',
            chartColor: 'text-emerald-600 dark:text-emerald-400',
            link: ROUTES.ADMIN_USERS,
        },
        {
            label: 'Total Views Website',
            value: totalViews.toLocaleString(),
            subtext: 'Lalu Lintas Pengunjung',
            icon: Eye,
            iconColor: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border border-violet-200/50',
            chartColor: 'text-violet-600 dark:text-violet-400',
            link: ROUTES.ADMIN_ANALYTICS,
        },
        {
            label: 'Template Dipublish',
            value: publishedTemplatesCount.toLocaleString(),
            subtext: 'Starter Templates Aktif',
            icon: Layout,
            iconColor: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/50',
            chartColor: 'text-amber-600 dark:text-amber-400',
            link: ROUTES.ADMIN_TEMPLATES,
        },
        {
            label: 'Website Dihosting',
            value: totalWebsites.toLocaleString(),
            subtext: `${publishedWebsitesCount} Dipublish`,
            icon: Globe,
            iconColor: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/50',
            chartColor: 'text-blue-600 dark:text-blue-400',
            link: ROUTES.ADMIN_WEBSITES,
        },
    ];

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Title + Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2 border border-indigo-200/50 dark:border-indigo-900/50">
                        <Shield className="h-3.5 w-3.5" />
                        <span>{brand_name} Admin Dashboard</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">System Overview</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Selamat datang kembali, <span className="font-bold text-indigo-600 dark:text-indigo-400">{firstName}</span>. Berikut ringkasan performa dan aktivitas ekosistem platform.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => refetch()}
                        disabled={isLoading || isRefetching}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition shadow-xs disabled:opacity-50"
                    >
                        <RefreshCw className={`h-4 w-4 ${isRefetching ? 'animate-spin text-indigo-600' : ''}`} />
                        <span>{isRefetching ? 'Memperbarui...' : 'Refresh Data'}</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(ROUTES.ADMIN_TEMPLATES)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold transition shadow-md shadow-indigo-600/20"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span>Template Builder</span>
                    </button>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => (
                    <Card
                        key={card.label}
                        className="p-5 hover:border-indigo-500/40 transition-all cursor-pointer group relative overflow-hidden"
                        onClick={() => card.link && navigate(card.link)}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${card.iconColor}`}>
                                <card.icon className="h-5 w-5" />
                            </div>
                            <span className={`text-xs font-extrabold ${card.chartColor} group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5`}>
                                {card.subtext}
                                <ChevronRight className="h-3.5 w-3.5" />
                            </span>
                        </div>
                        <p className="text-2xl font-black text-[rgb(var(--color-text-primary))] tracking-tight">
                            {isLoading ? <Loader2 className="h-6 w-6 animate-spin text-indigo-500" /> : card.value}
                        </p>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-secondary))] mt-1">{card.label}</p>
                    </Card>
                ))}
            </div>

            {/* Recent Websites & Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Websites */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgb(var(--color-border))]">
                        <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-indigo-500" />
                            <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))]">Website Terbaru</h3>
                        </div>
                        <Link
                            to={ROUTES.ADMIN_WEBSITES}
                            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                        >
                            <span>Lihat Semua</span>
                            <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {isLoading && (
                            <div className="py-8 text-center text-xs text-[rgb(var(--color-text-tertiary))]">
                                <Loader2 className="h-5 w-5 animate-spin mx-auto text-indigo-500 mb-2" />
                                Memuat website terbaru...
                            </div>
                        )}
                        {!isLoading && websites?.slice(0, 5).map((site) => (
                            <div
                                key={site.id}
                                className="flex items-center justify-between p-3 bg-[rgb(var(--color-surface-alt))] rounded-xl border border-[rgb(var(--color-border))] hover:border-indigo-500/30 transition"
                            >
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="h-8 w-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shrink-0">
                                        <Globe className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] truncate">{site.name}</p>
                                        <p className="text-[10px] text-[rgb(var(--color-text-tertiary))] truncate">
                                            Pemilik: <span className="font-semibold text-[rgb(var(--color-text-secondary))]">{typeof site.owner === 'object' ? site.owner?.name : (site.owner || 'Unknown')}</span>
                                        </p>
                                    </div>
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold shrink-0 ${site.is_published ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300' : 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'}`}>
                                    {site.is_published ? 'Published' : 'Draft'}
                                </span>
                            </div>
                        ))}
                        {!isLoading && (!websites || websites.length === 0) && (
                            <div className="text-center py-8 text-xs text-[rgb(var(--color-text-tertiary))]">
                                Belum ada website yang dibuat oleh pengguna.
                            </div>
                        )}
                    </div>
                </Card>

                {/* Recent System Activity Log */}
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgb(var(--color-border))]">
                        <div className="flex items-center gap-2">
                            <Activity className="h-4 w-4 text-emerald-500" />
                            <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))]">Aktivitas Sistem Terbaru</h3>
                        </div>
                        <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200/50">
                            Live Events
                        </span>
                    </div>

                    <div className="space-y-3.5">
                        {isLoading && (
                            <div className="py-8 text-center text-xs text-[rgb(var(--color-text-tertiary))]">
                                <Loader2 className="h-5 w-5 animate-spin mx-auto text-indigo-500 mb-2" />
                                Memuat aktivitas terbaru...
                            </div>
                        )}
                        {!isLoading && recentActivity?.slice(0, 6).map((act, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-xs">
                                <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 mt-1 shrink-0 ring-4 ring-indigo-500/10" />
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="font-extrabold text-[rgb(var(--color-text-primary))]">{act.action}</p>
                                        <span className="text-[10px] text-[rgb(var(--color-text-tertiary))] font-semibold shrink-0">
                                            {act.created_at ? new Date(act.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Baru saja'}
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-[rgb(var(--color-text-secondary))] mt-0.5 leading-relaxed">
                                        {act.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {!isLoading && (!recentActivity || recentActivity.length === 0) && (
                            <div className="text-center py-8 text-xs text-[rgb(var(--color-text-tertiary))]">
                                Belum ada aktivitas sistem terbaru.
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}