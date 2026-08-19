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
    Ban,
    Eye,
} from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card } from '@components/ui';
import { toast } from '@store';
import { websiteApi } from '@api';

function getStatusConfig(status) {
    switch (status) {
        case 'published':
            return {
                label: 'Published',
                icon: CheckCircle2,
                className: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300',
                dotColor: 'bg-emerald-500',
            };
        case 'draft':
            return {
                label: 'Draft',
                icon: Clock,
                className: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300',
                dotColor: 'bg-amber-500',
            };
        case 'suspended':
            return {
                label: 'Suspended',
                icon: Ban,
                className: 'bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300',
                dotColor: 'bg-rose-500',
            };
        default:
            return {
                label: status,
                icon: Clock,
                className: 'bg-slate-100 text-slate-700',
                dotColor: 'bg-slate-500',
            };
    }
}

export default function AdminWebsites() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const queryClient = useQueryClient();

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['admin-websites', statusFilter, searchQuery],
        queryFn: () => websiteApi.adminGetAll({
            status: statusFilter !== 'all' ? statusFilter : undefined,
            search: searchQuery || undefined,
        }),
        staleTime: 10 * 1000,
    });

    const websites = data?.data ?? [];
    const statsFromApi = data?.stats ?? {};

    const updateStatusMutation = useMutation({
        mutationFn: ({ id, status }) => websiteApi.adminUpdateStatus(id, status),
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-websites']);
            queryClient.invalidateQueries([['dashboard', 'admin']]);
            toast.success('Status website berhasil diperbarui', 'Berhasil');
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message ?? 'Gagal memperbarui status', 'Error');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => websiteApi.adminDelete(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-websites']);
            queryClient.invalidateQueries([['dashboard', 'admin']]);
            toast.success('Website berhasil dihapus', 'Berhasil');
            setDeleteConfirm(null);
        },
        onError: (err) => {
            toast.error(err?.response?.data?.message ?? 'Gagal menghapus website', 'Error');
        },
    });

    const statCards = [
        { label: 'Total Hosted Sites', value: statsFromApi.total ?? 0, color: 'text-[rgb(var(--color-text-primary))]' },
        { label: 'Published Sites', value: statsFromApi.published ?? 0, color: 'text-emerald-600 dark:text-emerald-400' },
        { label: 'Draft Sites', value: statsFromApi.draft ?? 0, color: 'text-amber-600 dark:text-amber-400' },
        { label: 'Suspended Sites', value: statsFromApi.suspended ?? 0, color: 'text-rose-600 dark:text-rose-400' },
    ];

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                        <Shield className="h-3.5 w-3.5" />
                        <span>Platform Administration</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">All Platform Websites</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Review, manage, and moderate all websites created across the DataSoft ecosystem.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => refetch()}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition shadow-xs"
                >
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                </button>
            </div>

            {/* KPI Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                {statCards.map((card) => (
                    <Card key={card.label} className="p-5">
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">{card.label}</p>
                        <p className={`text-2xl font-extrabold mt-1 ${card.color}`}>
                            {isLoading ? <Loader2 className="h-5 w-5 animate-spin inline" /> : card.value.toLocaleString()}
                        </p>
                    </Card>
                ))}
            </div>

            {/* Search & Filter */}
            <div className="bg-[rgb(var(--color-surface))] rounded-2xl border border-[rgb(var(--color-border))] shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-4">
                    <div className="flex flex-col lg:flex-row items-stretch gap-4">
                        {/* Search */}
                        <div className="relative flex-1 lg:max-w-[70%]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Cari nama website, domain, atau pemilik..."
                                className="w-full h-[52px] pl-12 pr-10 bg-[rgb(var(--color-surface-alt))] border-2 border-[rgb(var(--color-border))] rounded-xl text-sm text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-secondary))] transition"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        {/* Status Filter */}
                        <div className="flex items-center gap-2 bg-[rgb(var(--color-surface-alt))] p-1 rounded-xl border border-[rgb(var(--color-border))]">
                            {['all', 'published', 'draft', 'suspended'].map((st) => (
                                <button
                                    key={st}
                                    type="button"
                                    onClick={() => setStatusFilter(st)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                                        statusFilter === st
                                            ? 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-primary))] shadow-sm'
                                            : 'text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))]'
                                    }`}
                                >
                                    {st}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border-t border-[rgb(var(--color-border))] pt-4 ds-scrollbar-thin">
                    <table className="w-full text-left text-xs text-[rgb(var(--color-text-secondary))]">
                        <thead className="bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-tertiary))] font-bold uppercase tracking-wider border-b border-[rgb(var(--color-border))]">
                            <tr>
                                <th className="py-3.5 px-4">Website / Domain</th>
                                <th className="py-3.5 px-4">Owner</th>
                                <th className="py-3.5 px-4">Template</th>
                                <th className="py-3.5 px-4">Status</th>
                                <th className="py-3.5 px-4">Views</th>
                                <th className="py-3.5 px-4 text-right">Admin Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[rgb(var(--color-border))] font-medium">
                            {isLoading && (
                                <tr>
                                    <td colSpan={6} className="py-12 text-center">
                                        <Loader2 className="h-6 w-6 animate-spin text-indigo-500 mx-auto mb-2" />
                                        <p className="text-xs text-[rgb(var(--color-text-tertiary))]">Memuat data website...</p>
                                    </td>
                                </tr>
                            )}
                            {isError && (
                                <tr>
                                    <td colSpan={6} className="py-12 text-center">
                                        <AlertTriangle className="h-6 w-6 text-rose-500 mx-auto mb-2" />
                                        <p className="text-xs text-rose-600">Gagal memuat data. Coba refresh halaman.</p>
                                    </td>
                                </tr>
                            )}
                            {!isLoading && !isError && websites.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="py-12 text-center">
                                        <Globe className="h-8 w-8 text-[rgb(var(--color-text-tertiary))] mx-auto mb-2 opacity-40" />
                                        <p className="text-xs text-[rgb(var(--color-text-tertiary))]">Tidak ada website ditemukan.</p>
                                    </td>
                                </tr>
                            )}
                            {websites.map((site) => {
                                const statusCfg = getStatusConfig(site.status);
                                return (
                                    <tr key={site.id} className="hover:bg-[rgb(var(--color-surface-alt))]/80 transition">
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                                                    <Globe className="h-4 w-4 stroke-[2]" />
                                                </div>
                                                <div>
                                                    <p className="font-extrabold text-[rgb(var(--color-text-primary))]">{site.name}</p>
                                                    <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">{site.domain}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-4 px-4">
                                            <div>
                                                <p className="font-bold text-[rgb(var(--color-text-primary))]">{site.owner?.name ?? '—'}</p>
                                                <p className="text-[11px] text-[rgb(var(--color-text-tertiary))]">{site.owner?.email ?? ''}</p>
                                            </div>
                                        </td>

                                        <td className="py-4 px-4 font-bold text-[rgb(var(--color-text-primary))]">{site.template?.name ?? '—'}</td>

                                        <td className="py-4 px-4">
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${statusCfg.className}`}>
                                                <span className={`h-1.5 w-1.5 rounded-full ${statusCfg.dotColor}`} />
                                                {statusCfg.label}
                                            </span>
                                        </td>

                                        <td className="py-4 px-4 font-bold text-[rgb(var(--color-text-primary))]">
                                            <span className="flex items-center gap-1.5">
                                                <Eye className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" />
                                                {(site.views_count ?? 0).toLocaleString()}
                                            </span>
                                        </td>

                                        <td className="py-4 px-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    type="button"
                                                    disabled={updateStatusMutation.isPending}
                                                    onClick={() =>
                                                        updateStatusMutation.mutate({
                                                            id: site.id,
                                                            status: site.status === 'published' ? 'draft' : 'published',
                                                        })
                                                    }
                                                    className="px-2.5 py-1 bg-[rgb(var(--color-surface-alt))] hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-[rgb(var(--color-text-primary))] hover:text-indigo-600 border border-[rgb(var(--color-border))] rounded-lg text-xs font-bold transition disabled:opacity-50"
                                                >
                                                    {site.status === 'published' ? 'Unpublish' : 'Publish'}
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => setDeleteConfirm(site)}
                                                    className="p-1.5 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition"
                                                    title="Delete Site"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-5">
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                            <div className="p-3 bg-red-50 text-red-600 rounded-2xl shrink-0">
                                <AlertTriangle className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900">Konfirmasi Hapus Website</h3>
                                <p className="text-xs text-slate-500 mt-0.5">Tindakan ini permanen dan tidak dapat dibatalkan</p>
                            </div>
                        </div>

                        <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 space-y-2">
                            <p className="text-xs font-semibold text-slate-900">
                                Hapus website <span className="text-red-600 font-extrabold">"{deleteConfirm.name}"</span> milik <span className="font-bold">{deleteConfirm.owner?.name}</span>?
                            </p>
                            <p className="text-[11px] text-slate-500">Domain: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-slate-700">{deleteConfirm.domain}</code></p>
                            <p className="text-[11px] text-red-600 font-medium pt-1 border-t border-red-100">
                                ⚠️ Seluruh konten, pengaturan, dan data analitik website ini akan dihapus secara permanen.
                            </p>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setDeleteConfirm(null)}
                                disabled={deleteMutation.isPending}
                                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition disabled:opacity-50"
                            >
                                Batal
                            </button>
                            <button
                                type="button"
                                disabled={deleteMutation.isPending}
                                onClick={() => deleteMutation.mutate(deleteConfirm.id)}
                                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold rounded-xl shadow-md shadow-red-600/20 transition flex items-center gap-2 disabled:opacity-50"
                            >
                                {deleteMutation.isPending ? (
                                    <><Loader2 className="h-4 w-4 animate-spin" /> Menghapus...</>
                                ) : (
                                    <><Trash2 className="h-4 w-4" /> Ya, Hapus Website</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
