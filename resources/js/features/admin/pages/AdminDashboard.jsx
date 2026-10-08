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
    XCircle,
    UserCheck,
    Layers,
    Tag,
    Send,
    X,
} from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Card } from '@shared/components/ui';
import { toast, useSettingsStore } from '@store';
import { ROUTES } from '@constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { websiteApi } from '@api';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const { stats, websites, pending_requests = [], recentActivity, isLoading, refetch, isRefetching } = useDashboard();
    const { brand_name } = useSettingsStore();
    const queryClient = useQueryClient();

    const [rejectTarget, setRejectTarget] = useState(null);
    const [rejectReason, setRejectReason] = useState('');

    const firstName = user?.name?.split(' ')[0] || 'Admin';
    const totalUsers = stats?.total_users ?? 0;
    const totalViews = stats?.total_views ?? 0;
    const publishedTemplatesCount = stats?.published_templates_count ?? 0;
    const totalWebsites = stats?.total_websites ?? 0;
    const publishedWebsitesCount = stats?.published_count ?? 0;
    const pendingRequestsCount = stats?.pending_requests_count ?? (pending_requests?.length || 0);

    const approveMutation = useMutation({
        mutationFn: (id) => websiteApi.adminApproveHostingRequest(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-hosting-requests']);
            queryClient.invalidateQueries(['admin-websites']);
            queryClient.invalidateQueries([['dashboard', 'admin']]);
            refetch();
            toast.success('Permintaan publikasi subdomain berhasil disetujui!', 'Disetujui');
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message ?? 'Gagal menyetujui permintaan', 'Galat');
        },
    });

    const rejectMutation = useMutation({
        mutationFn: ({ id, reason }) => websiteApi.adminRejectHostingRequest(id, reason),
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-hosting-requests']);
            queryClient.invalidateQueries(['admin-websites']);
            queryClient.invalidateQueries([['dashboard', 'admin']]);
            refetch();
            toast.success('Permintaan publikasi telah ditolak.', 'Ditolak');
            setRejectTarget(null);
            setRejectReason('');
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message ?? 'Gagal menolak permintaan', 'Galat');
        },
    });

    const statCards = [
        {
            label: 'Request Hosting Subdomain',
            value: pendingRequestsCount.toLocaleString(),
            subtext: pendingRequestsCount > 0 ? `${pendingRequestsCount} Menunggu Konfirmasi` : 'Semua Bersih',
            icon: Send,
            iconColor: pendingRequestsCount > 0
                ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300/60'
                : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50',
            chartColor: pendingRequestsCount > 0 ? 'text-amber-600 dark:text-amber-400 font-black' : 'text-indigo-600 dark:text-indigo-400',
            link: ROUTES.ADMIN_HOSTING_REQUESTS,
            badgePulse: pendingRequestsCount > 0,
        },
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
                        <span>Dasbor Admin {brand_name}</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Ringkasan Sistem</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Selamat datang kembali, <span className="font-bold text-indigo-600 dark:text-indigo-400">{firstName}</span>. Kelola dan setujui permintaan hosting subdomain pengguna di sini.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => refetch()}
                        disabled={isLoading || isRefetching}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition shadow-xs disabled:opacity-50 cursor-pointer"
                    >
                        <RefreshCw className={`h-4 w-4 ${isRefetching ? 'animate-spin text-indigo-600' : ''}`} />
                        <span>{isRefetching ? 'Memperbarui...' : 'Muat Ulang Data'}</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(ROUTES.ADMIN_HOSTING_REQUESTS)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold transition shadow-md shadow-indigo-600/20 cursor-pointer"
                    >
                        <Send className="h-4 w-4" />
                        <span>Kelola Request Hosting</span>
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

            {/* Permintaan Hosting Subdomain Pending Approval — Prominent Admin Widget */}
            <Card className="p-6 border-2 border-indigo-100 dark:border-indigo-900/40 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgb(var(--color-border))]">
                    <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
                            <Clock className="h-4 w-4" />
                        </div>
                        <div>
                            <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">
                                Permintaan Hosting Subdomain Menunggu Persetujuan
                            </h3>
                            <p className="text-xs text-[rgb(var(--color-text-secondary))]">
                                Setujui permohonan agar website user aktif di <code className="text-indigo-600 dark:text-indigo-400 font-bold">slug.web.microdata.co.id</code>.
                            </p>
                        </div>
                    </div>
                    <Link
                        to={ROUTES.ADMIN_HOSTING_REQUESTS}
                        className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                    >
                        <span>Lihat Semua Permintaan ({pendingRequestsCount})</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                </div>

                <div className="space-y-3">
                    {isLoading ? (
                        <div className="py-8 text-center text-xs text-[rgb(var(--color-text-tertiary))]">
                            <Loader2 className="h-6 w-6 animate-spin mx-auto text-indigo-500 mb-2" />
                            Memuat daftar permintaan hosting...
                        </div>
                    ) : pending_requests.length === 0 ? (
                        <div className="py-8 text-center text-xs text-[rgb(var(--color-text-tertiary))] space-y-1">
                            <CheckCircle2 className="h-8 w-8 mx-auto text-emerald-500 opacity-60 mb-1" />
                            <p className="font-bold text-sm text-[rgb(var(--color-text-secondary))]">Tidak ada permintaan hosting yang pending</p>
                            <p>Semua permintaan penerbitan subdomain telah ditinjau dan disetujui.</p>
                        </div>
                    ) : (
                        pending_requests.map((site) => (
                            <div
                                key={site.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[rgb(var(--color-surface-alt))] rounded-2xl border border-[rgb(var(--color-border))] hover:border-indigo-500/30 gap-4 transition"
                            >
                                <div className="flex items-center gap-3.5 min-w-0">
                                    <div className="h-12 w-16 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border border-[rgb(var(--color-border))] flex items-center justify-center">
                                        {site.thumbnail_url ? (
                                            <img src={site.thumbnail_url} alt={site.name} className="h-full w-full object-cover" />
                                        ) : (
                                            <Globe className="h-5 w-5 text-indigo-400" />
                                        )}
                                    </div>
                                    <div className="min-w-0 space-y-0.5">
                                        <p className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] truncate">{site.name}</p>
                                        <p className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 truncate">
                                            {site.subdomain}.web.microdata.co.id
                                        </p>
                                        <p className="text-[11px] text-[rgb(var(--color-text-tertiary))] truncate">
                                            Pemilik: <strong className="text-[rgb(var(--color-text-secondary))]">{site.owner?.name}</strong> ({site.owner?.email}) • Paket: <span className="font-semibold">{site.owner?.plan}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                                    <a
                                        href={`/p/${site.slug || site.subdomain}?preview=true`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-1.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-xs font-bold text-[rgb(var(--color-text-secondary))] transition"
                                    >
                                        <Eye className="h-3.5 w-3.5 text-indigo-500" />
                                        <span>Pratinjau</span>
                                    </a>

                                    <button
                                        type="button"
                                        disabled={approveMutation.isPending}
                                        onClick={() => approveMutation.mutate(site.id)}
                                        className="flex items-center gap-1 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold transition shadow-xs disabled:opacity-50 cursor-pointer"
                                    >
                                        {approveMutation.isPending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
                                        <span>Setujui</span>
                                    </button>

                                    <button
                                        type="button"
                                        disabled={rejectMutation.isPending}
                                        onClick={() => {
                                            setRejectTarget(site);
                                            setRejectReason('');
                                        }}
                                        className="flex items-center gap-1 px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50 hover:bg-rose-100 rounded-xl text-xs font-bold transition cursor-pointer"
                                    >
                                        <XCircle className="h-3.5 w-3.5" />
                                        <span>Tolak</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </Card>

            {/* Website Terbaru & Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Website Terbaru */}
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
                                    {site.is_published ? 'Dipublikasikan' : 'Draf'}
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
                            Acara Langsung
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

            {/* Reject Modal */}
            {rejectTarget && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5">
                        <div className="flex items-start justify-between gap-4 border-b border-[rgb(var(--color-border))] pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-2xl bg-rose-100 dark:bg-rose-950/50 text-rose-600">
                                    <XCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">
                                        Tolak Permintaan Publikasi
                                    </h3>
                                    <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">
                                        Website: <strong className="text-[rgb(var(--color-text-primary))]">{rejectTarget.name}</strong> ({rejectTarget.subdomain}.web.microdata.co.id)
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setRejectTarget(null)}
                                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))]">
                                Alasan Penolakan <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={rejectReason}
                                onChange={(e) => setRejectReason(e.target.value)}
                                rows={4}
                                placeholder="Tuliskan alasan penolakan agar pemilik website dapat memperbaikinya..."
                                className="w-full p-3 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 leading-relaxed"
                            />
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-2 border-t border-[rgb(var(--color-border))]">
                            <button
                                type="button"
                                onClick={() => setRejectTarget(null)}
                                className="px-4 py-2.5 rounded-xl text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))]"
                            >
                                Batal
                            </button>
                            <button
                                type="button"
                                disabled={rejectMutation.isPending || rejectReason.trim().length < 3}
                                onClick={() => rejectMutation.mutate({ id: rejectTarget.id, reason: rejectReason.trim() })}
                                className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/20 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                            >
                                {rejectMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4" />}
                                <span>Kirim Penolakan</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}