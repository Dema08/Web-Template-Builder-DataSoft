import { useState } from 'react';
import {
    Globe,
    Search,
    X,
    ExternalLink,
    Trash2,
    Shield,
    RefreshCw,
    Loader2,
    AlertTriangle,
    CheckCircle2,
    Clock,
    XCircle,
    Ban,
    Eye,
    User as UserIcon,
    Mail,
    Phone,
    Calendar,
    Layout,
    Link2,
    Info,
    ChevronRight,
    Tag,
    Copy,
    Check,
    MessageSquare,
    Sparkles,
} from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card } from '@shared/components/ui';
import { toast } from '@store';
import { websiteApi } from '@api';

export default function AdminHostingRequests() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [rejectTarget, setRejectTarget] = useState(null);
    const [rejectReason, setRejectReason] = useState('');
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [deleteReason, setDeleteReason] = useState('');
    const [previewTarget, setPreviewTarget] = useState(null);
    const [copiedSlug, setCopiedSlug] = useState(null);
    const queryClient = useQueryClient();

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['admin-hosting-requests', statusFilter, searchQuery],
        queryFn: () => websiteApi.adminGetHostingRequests({
            status: statusFilter !== 'all' ? statusFilter : undefined,
            search: searchQuery || undefined,
        }),
        staleTime: 10 * 1000,
        refetchInterval: 15 * 1000,
    });

    const requests = data?.data ?? [];
    const stats = data?.stats ?? {};

    const approveMutation = useMutation({
        mutationFn: (id) => websiteApi.adminApproveHostingRequest(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-hosting-requests']);
            queryClient.invalidateQueries(['admin-websites']);
            queryClient.invalidateQueries([['dashboard', 'admin']]);
            toast.success('Permintaan publikasi subdomain berhasil disetujui! Website kini aktif.', 'Disetujui');
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
            toast.success('Permintaan publikasi telah ditolak dan notifikasi dikirim ke user.', 'Ditolak');
            setRejectTarget(null);
            setRejectReason('');
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message ?? 'Gagal menolak permintaan', 'Galat');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: ({ id, reason }) => websiteApi.adminDelete(id, reason),
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-hosting-requests']);
            queryClient.invalidateQueries(['admin-websites']);
            queryClient.invalidateQueries([['dashboard', 'admin']]);
            toast.success('Website berhasil dihapus dari platform.', 'Berhasil');
            setDeleteTarget(null);
            setDeleteReason('');
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message ?? 'Gagal menghapus website', 'Galat');
        },
    });

    const handleCopyUrl = async (url, id) => {
        try {
            await navigator.clipboard.writeText(url);
            setCopiedSlug(id);
            toast.success('Alamat subdomain berhasil disalin.', 'Disalin');
            setTimeout(() => setCopiedSlug(null), 2000);
        } catch (_e) {
            toast.error('Gagal menyalin link.', 'Galat');
        }
    };

    const statCards = [
        {
            label: 'Menunggu Persetujuan',
            value: stats.pending ?? 0,
            color: 'text-amber-600 dark:text-amber-400',
            bgColor: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/50',
            icon: Clock,
            filter: 'pending',
        },
        {
            label: 'Subdomain Disetujui (Live)',
            value: stats.published ?? 0,
            color: 'text-emerald-600 dark:text-emerald-400',
            bgColor: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50',
            icon: CheckCircle2,
            filter: 'published',
        },
        {
            label: 'Permintaan Ditolak',
            value: stats.rejected ?? 0,
            color: 'text-rose-600 dark:text-rose-400',
            bgColor: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200/50',
            icon: XCircle,
            filter: 'rejected',
        },
        {
            label: 'Total Permintaan Hosting',
            value: stats.total ?? 0,
            color: 'text-indigo-600 dark:text-indigo-400',
            bgColor: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50',
            icon: Globe,
            filter: 'all',
        },
    ];

    const filterTabs = [
        { key: 'all', label: 'Semua Permintaan', count: stats.total ?? 0 },
        { key: 'pending', label: 'Menunggu Persetujuan', count: stats.pending ?? 0, isPendingBadge: true },
        { key: 'published', label: 'Disetujui / Aktif', count: stats.published ?? 0 },
        { key: 'rejected', label: 'Ditolak', count: stats.rejected ?? 0 },
    ];

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2 border border-indigo-200/50 dark:border-indigo-900/50">
                        <Shield className="h-3.5 w-3.5" />
                        <span>Manajemen Hosting Subdomain</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                        Permintaan Hosting Subdomain
                    </h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Tinjau dan setujui permintaan penerbitan website pengguna pada subdomain <code className="bg-indigo-50 dark:bg-indigo-950/40 px-1.5 py-0.5 rounded text-indigo-600 dark:text-indigo-400 font-bold">slug.web.microdata.co.id</code>.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => refetch()}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition shadow-xs cursor-pointer"
                    >
                        <RefreshCw className="h-4 w-4" />
                        <span>Segarkan Data</span>
                    </button>
                </div>
            </div>

            {/* KPI Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => {
                    const Icon = card.icon;
                    const isActive = statusFilter === card.filter;
                    return (
                        <Card
                            key={card.label}
                            onClick={() => setStatusFilter(card.filter)}
                            className={`p-5 transition-all cursor-pointer relative overflow-hidden group ${
                                isActive
                                    ? 'ring-2 ring-indigo-500 shadow-md'
                                    : 'hover:border-indigo-500/30'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${card.bgColor}`}>
                                    <Icon className="h-5 w-5" />
                                </div>
                                {card.filter === 'pending' && (stats.pending ?? 0) > 0 && (
                                    <span className="flex h-3 w-3 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                                    </span>
                                )}
                            </div>
                            <p className="text-2xl font-black text-[rgb(var(--color-text-primary))] tracking-tight">
                                {isLoading ? <Loader2 className="h-6 w-6 animate-spin text-indigo-500" /> : card.value}
                            </p>
                            <p className="text-xs font-bold text-[rgb(var(--color-text-secondary))] mt-1">{card.label}</p>
                        </Card>
                    );
                })}
            </div>

            {/* Main Content Area: Filter tabs & Search */}
            <Card className="p-6 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[rgb(var(--color-border))]">
                    {/* Tabs */}
                    <div className="flex flex-wrap items-center gap-2">
                        {filterTabs.map((tab) => {
                            const isTabActive = statusFilter === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setStatusFilter(tab.key)}
                                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                                        isTabActive
                                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                                            : 'bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface))]'
                                    }`}
                                >
                                    <span>{tab.label}</span>
                                    <span
                                        className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                                            isTabActive
                                                ? 'bg-white/20 text-white'
                                                : tab.isPendingBadge && tab.count > 0
                                                ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                                                : 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-tertiary))]'
                                        }`}
                                    >
                                        {tab.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search bar */}
                    <div className="relative min-w-[260px]">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari website, subdomain, atau email..."
                            className="w-full pl-9 pr-4 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-semibold text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Table / List */}
                {isLoading ? (
                    <div className="py-16 text-center text-xs text-[rgb(var(--color-text-tertiary))] space-y-3">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto text-indigo-500" />
                        <p className="font-semibold">Memuat data permintaan hosting subdomain...</p>
                    </div>
                ) : isError ? (
                    <div className="py-12 text-center text-xs text-red-500 space-y-2">
                        <AlertTriangle className="h-8 w-8 mx-auto" />
                        <p className="font-bold">Gagal memuat permintaan hosting.</p>
                    </div>
                ) : requests.length === 0 ? (
                    <div className="py-16 text-center text-xs text-[rgb(var(--color-text-tertiary))] space-y-2">
                        <Globe className="h-10 w-10 mx-auto opacity-30 text-indigo-500" />
                        <p className="font-bold text-sm text-[rgb(var(--color-text-secondary))]">Tidak ada permintaan hosting</p>
                        <p>Belum ada permintaan publikasi website yang sesuai dengan filter.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {requests.map((item) => {
                            const isPending = item.status === 'pending';
                            const isPublished = item.status === 'published';
                            const isRejected = item.status === 'rejected';

                            return (
                                <div
                                    key={item.id}
                                    className={`p-5 rounded-2xl border transition-all ${
                                        isPending
                                            ? 'bg-amber-50/20 dark:bg-amber-950/10 border-amber-300/80 dark:border-amber-900/60 shadow-xs'
                                            : 'bg-[rgb(var(--color-surface))] border-[rgb(var(--color-border))] hover:border-indigo-500/30'
                                    }`}
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                                        {/* Left Side: Thumbnail & Website Info */}
                                        <div className="flex items-start gap-4 min-w-0 flex-1">
                                            <div className="h-16 w-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 border border-[rgb(var(--color-border))] relative group">
                                                {item.thumbnail_url ? (
                                                    <img
                                                        src={item.thumbnail_url}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="h-full w-full flex items-center justify-center text-slate-400">
                                                        <Globe className="h-6 w-6 opacity-40" />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="min-w-0 flex-1 space-y-1.5">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight truncate">
                                                        {item.name}
                                                    </h3>

                                                    {/* Status Badge */}
                                                    {isPending && (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold border border-amber-300/60 animate-pulse">
                                                            <Clock className="h-3 w-3" />
                                                            Menunggu Konfirmasi
                                                        </span>
                                                    )}
                                                    {isPublished && (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-extrabold border border-emerald-300/60">
                                                            <CheckCircle2 className="h-3 w-3" />
                                                            Disetujui & Live
                                                        </span>
                                                    )}
                                                    {isRejected && (
                                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 text-[10px] font-extrabold border border-rose-300/60">
                                                            <XCircle className="h-3 w-3" />
                                                            Ditolak
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Subdomain URL pill with copy button */}
                                                <div className="flex items-center gap-2 text-xs">
                                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[rgb(var(--color-surface-alt))] rounded-lg border border-[rgb(var(--color-border))] text-[rgb(var(--color-text-secondary))] font-mono text-xs">
                                                        <Globe className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                                                        <span className="font-extrabold text-indigo-600 dark:text-indigo-400">
                                                            {item.domain}
                                                        </span>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={() => handleCopyUrl(item.published_url, item.id)}
                                                        className="p-1 rounded-lg hover:bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 transition"
                                                        title="Salin Alamat Subdomain"
                                                    >
                                                        {copiedSlug === item.id ? (
                                                            <Check className="h-3.5 w-3.5 text-emerald-600" />
                                                        ) : (
                                                            <Copy className="h-3.5 w-3.5" />
                                                        )}
                                                    </button>
                                                </div>

                                                {/* Owner Details & Timing */}
                                                <div className="flex flex-wrap items-center gap-3 text-[11px] text-[rgb(var(--color-text-tertiary))] pt-1">
                                                    <span className="flex items-center gap-1">
                                                        <UserIcon className="h-3.5 w-3.5 text-slate-400" />
                                                        <strong className="text-[rgb(var(--color-text-secondary))]">{item.owner?.name}</strong> ({item.owner?.email})
                                                    </span>
                                                    <span>•</span>
                                                    <span className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 font-bold text-[10px]">
                                                        Paket: {item.owner?.plan}
                                                    </span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3 text-slate-400" />
                                                        Diajukan: {item.requested_at_formatted || 'Baru saja'}
                                                    </span>
                                                </div>

                                                {/* Rejection reason box if rejected */}
                                                {isRejected && item.rejection_reason && (
                                                    <div className="mt-2 p-2.5 bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl text-xs text-rose-900 dark:text-rose-200">
                                                        <p className="font-bold flex items-center gap-1.5">
                                                            <Info className="h-3.5 w-3.5 text-rose-600" />
                                                            Alasan Penolakan:
                                                        </p>
                                                        <p className="text-[11px] mt-0.5 text-rose-800 dark:text-rose-300">{item.rejection_reason}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Side: Action Buttons */}
                                        <div className="flex flex-wrap items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[rgb(var(--color-border-soft))]">
                                            {/* Preview Button */}
                                            <a
                                                href={`/p/${item.slug}?preview=true`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-2 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-primary))] rounded-xl text-xs font-bold transition shadow-xs"
                                            >
                                                <Eye className="h-3.5 w-3.5 text-indigo-500" />
                                                <span>Pratinjau</span>
                                            </a>

                                            {/* Approve Button */}
                                            {item.status !== 'published' && (
                                                <button
                                                    type="button"
                                                    disabled={approveMutation.isPending}
                                                    onClick={() => approveMutation.mutate(item.id)}
                                                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold transition shadow-md shadow-emerald-600/20 disabled:opacity-50 cursor-pointer"
                                                >
                                                    {approveMutation.isPending ? (
                                                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                                                    ) : (
                                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                                    )}
                                                    <span>Setujui Publikasi</span>
                                                </button>
                                            )}

                                            {/* Reject Button */}
                                            {item.status === 'pending' && (
                                                <button
                                                    type="button"
                                                    disabled={rejectMutation.isPending}
                                                    onClick={() => {
                                                        setRejectTarget(item);
                                                        setRejectReason('');
                                                    }}
                                                    className="flex items-center gap-1.5 px-3.5 py-2 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/50 hover:bg-rose-100 rounded-xl text-xs font-extrabold transition cursor-pointer"
                                                >
                                                    <XCircle className="h-3.5 w-3.5" />
                                                    <span>Tolak</span>
                                                </button>
                                            )}

                                            {/* Delete Button */}
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setDeleteTarget(item);
                                                    setDeleteReason('');
                                                }}
                                                className="p-2 rounded-xl border border-transparent text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition cursor-pointer"
                                                title="Hapus Website"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </Card>

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
                                        Website: <strong className="text-[rgb(var(--color-text-primary))]">{rejectTarget.name}</strong> ({rejectTarget.domain})
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
                                placeholder="Contoh: Mohon lengkapi profil kontak bisnis dan gunakan logo beresolusi tinggi sebelum mengajukan publikasi..."
                                className="w-full p-3 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 leading-relaxed"
                            />
                            <p className="text-[11px] text-[rgb(var(--color-text-tertiary))]">
                                Alasan ini akan dikirimkan secara langsung ke notifikasi pemilik website agar dapat diperbaiki.
                            </p>
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

            {/* Delete Modal */}
            {deleteTarget && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5">
                        <div className="flex items-start justify-between gap-4 border-b border-[rgb(var(--color-border))] pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-2xl bg-red-100 dark:bg-red-950/50 text-red-600">
                                    <Trash2 className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">
                                        Hapus Website
                                    </h3>
                                    <p className="text-xs text-red-500 mt-0.5">Tindakan ini permanen dan tidak dapat dibatalkan.</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setDeleteTarget(null)}
                                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))]">
                                Alasan Penghapusan <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={deleteReason}
                                onChange={(e) => setDeleteReason(e.target.value)}
                                rows={3}
                                placeholder="Contoh: Website melanggar kebijakan konten platform..."
                                className="w-full p-3 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500"
                            />
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-2 border-t border-[rgb(var(--color-border))]">
                            <button
                                type="button"
                                onClick={() => setDeleteTarget(null)}
                                className="px-4 py-2.5 rounded-xl text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))]"
                            >
                                Batal
                            </button>
                            <button
                                type="button"
                                disabled={deleteMutation.isPending || deleteReason.trim().length < 3}
                                onClick={() => deleteMutation.mutate({ id: deleteTarget.id, reason: deleteReason.trim() })}
                                className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/20 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                            >
                                {deleteMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                                <span>Hapus Permanen</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
