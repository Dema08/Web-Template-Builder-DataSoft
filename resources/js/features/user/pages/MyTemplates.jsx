import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Sparkles,
    Search,
    Plus,
    Lock,
    Globe,
    Wand2,
    Trash2,
    ExternalLink,
    LayoutTemplate,
    Eye,
    Shield,
    CheckCircle2,
    Calendar,
} from 'lucide-react';
import { Card, Button } from '@shared/components/ui';
import { ROUTES } from '@constants';
import { toast } from '@store';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { templateApi } from '@api';
import { getTemplateImage, handleImageError } from '@utils/templateHelpers';

export default function MyTemplates() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [searchQuery, setSearchQuery] = useState('');
    const [visibilityFilter, setVisibilityFilter] = useState('all');

    /* ─── Fetch User Templates ────────────────────────────────────── */
    const {
        data: rawMyTemplatesData = [],
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['my-templates', { search: searchQuery }],
        queryFn: () =>
            templateApi
                .getMyTemplates({ search: searchQuery || undefined })
                .then((res) => {
                    const raw = res.data?.data ?? res.data;
                    if (Array.isArray(raw)) return raw;
                    if (Array.isArray(raw?.data)) return raw.data;
                    return [];
                }),
    });

    const myTemplatesData = Array.isArray(rawMyTemplatesData) ? rawMyTemplatesData : [];

    /* ─── Summary Counts ─────────────────────────────────────────── */
    const totalCount = myTemplatesData.length;
    const draftCount = myTemplatesData.filter((t) => t?.status === 'draft').length;
    const privateCount = myTemplatesData.filter((t) => t?.visibility === 'private' && t?.status !== 'draft').length;
    const publicCount = myTemplatesData.filter((t) => t?.visibility === 'public').length;

    /* ─── Filtered List ──────────────────────────────────────────── */
    const filteredTemplates = myTemplatesData.filter((tpl) => {
        if (!tpl) return false;
        const matchesSearch =
            (tpl.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
            (tpl.description || '').toLowerCase().includes(searchQuery.toLowerCase());
        const matchesVis =
            visibilityFilter === 'all' ||
            (visibilityFilter === 'draft' && tpl.status === 'draft') ||
            (visibilityFilter === 'private' && tpl.visibility === 'private' && tpl.status !== 'draft') ||
            (visibilityFilter === 'public' && tpl.visibility === 'public');
        return matchesSearch && matchesVis;
    });

    /* ─── Action Handlers ────────────────────────────────────────── */

    /** Buka preview template di tab baru */
    const handlePreview = (tpl) => {
        window.open(`/preview/template/${tpl.id}`, '_blank', 'noopener,noreferrer');
    };

    /** Edit user-generated template directly in builder */
    const handleEditInBuilder = (tpl) => {
        try {
            sessionStorage.setItem('pending_template_id', String(tpl.id));
            sessionStorage.setItem('pending_template_name', tpl.name);
        } catch (_) { /* ignore */ }
        toast.success(`Membuka template "${tpl.name}" untuk diedit di Builder...`, 'Edit Template');
        navigate(ROUTES.BUILDER);
    };

    /** Gunakan template ini untuk membuat website baru */
    const handleUseTemplate = (tpl) => {
        try {
            sessionStorage.setItem('pending_template_id', String(tpl.id));
            sessionStorage.setItem('pending_template_name', tpl.name);
        } catch (_) { /* ignore */ }
        toast.success(`Memuat template "${tpl.name}" ke dalam Builder...`, 'Gunakan Template');
        navigate(ROUTES.BUILDER);
    };

    /** Toggle private/public visibility for user's template */
    const handleToggleVisibility = async (tpl) => {
        const isPublic = tpl.visibility === 'public';
        try {
            if (isPublic) {
                await templateApi.unpublishMyTemplate(tpl.id);
                toast.success(`Template "${tpl.name}" sekarang diset ke Private (Hanya Anda).`, 'Visibilitas Diubah');
            } else {
                await templateApi.publishMyTemplate(tpl.id);
                toast.success(`Template "${tpl.name}" sekarang dipublikasikan ke Galeri Publik!`, 'Visibilitas Diubah');
            }
            queryClient.invalidateQueries(['my-templates']);
            queryClient.invalidateQueries(['user-templates']);
        } catch (err) {
            toast.error(err.response?.data?.message || 'Gagal mengubah visibilitas template.', 'Error');
        }
    };

    /** Delete user template */
    const handleDeleteTemplate = async (tpl) => {
        if (!window.confirm(`Apakah Anda yakin ingin menghapus template "${tpl.name}"?`)) return;
        try {
            await templateApi.deleteMyTemplate(tpl.id);
            toast.success(`Template "${tpl.name}" berhasil dihapus.`, 'Template Dihapus');
            queryClient.invalidateQueries(['my-templates']);
            queryClient.invalidateQueries(['user-templates']);
        } catch (err) {
            toast.error(err.response?.data?.message || 'Gagal menghapus template.', 'Error');
        }
    };

    /** Buat template baru dari blank template mode */
    const handleCreateNewBlank = () => {
        try {
            sessionStorage.removeItem('pending_template_id');
            sessionStorage.removeItem('pending_template_name');
            sessionStorage.setItem('blank_template_mode', '1');
        } catch (_) { /* ignore */ }
        toast.success('Membuka Builder untuk membuat template baru...', 'Blank Template');
        navigate(ROUTES.BUILDER);
    };

    if (isLoading) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-6">
                <div className="h-8 bg-slate-200 rounded w-1/4 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-24 bg-slate-100 rounded-2xl animate-pulse" />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="rounded-3xl border border-slate-200 overflow-hidden animate-pulse">
                            <div className="h-[220px] bg-slate-100" />
                            <div className="p-6 space-y-3">
                                <div className="h-4 bg-slate-200 rounded w-3/4" />
                                <div className="h-3 bg-slate-100 rounded w-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto">
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl text-sm font-semibold">
                    Gagal memuat daftar template buatan Anda. Silakan coba lagi.
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold mb-2 dark:bg-indigo-900/40 dark:text-indigo-100">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Koleksi Saya</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                        Template Saya
                    </h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Daftar dan kelola template buatan Anda dari Builder (Private & Publik).
                    </p>
                </div>
            </div>

            {/* Summary Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[rgb(var(--color-border))] shadow-xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-secondary))] uppercase tracking-wider">Total Template</p>
                        <p className="text-2xl font-black text-slate-900 mt-1">{totalCount}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600">
                        <LayoutTemplate className="h-6 w-6" />
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[rgb(var(--color-border))] shadow-xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-secondary))] uppercase tracking-wider">Draft</p>
                        <p className="text-2xl font-black text-amber-600 mt-1">{draftCount}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                        <Sparkles className="h-6 w-6" />
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[rgb(var(--color-border))] shadow-xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-secondary))] uppercase tracking-wider">Template Private</p>
                        <p className="text-2xl font-black text-slate-900 mt-1">{privateCount}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-100 text-slate-700">
                        <Lock className="h-6 w-6" />
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[rgb(var(--color-border))] shadow-xs flex items-center justify-between">
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-secondary))] uppercase tracking-wider">Template Publik</p>
                        <p className="text-2xl font-black text-emerald-600 mt-1">{publicCount}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                        <Globe className="h-6 w-6" />
                    </div>
                </div>
            </div>

            {/* Search & Filter Section */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                {/* Search input */}
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari template buatan Anda..."
                        className="w-full h-11 pl-11 pr-4 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-semibold text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                    />
                </div>

                {/* Filter Visibilitas */}
                <div className="flex items-center gap-1.5 bg-[rgb(var(--color-surface))] p-1 rounded-xl border border-[rgb(var(--color-border))]">
                    <button
                        type="button"
                        onClick={() => setVisibilityFilter('all')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                            visibilityFilter === 'all'
                                ? 'bg-indigo-600 text-white shadow-xs'
                                : 'text-[rgb(var(--color-text-secondary))] hover:bg-slate-100'
                        }`}
                    >
                        Semua ({totalCount})
                    </button>
                    <button
                        type="button"
                        onClick={() => setVisibilityFilter('draft')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                            visibilityFilter === 'draft'
                                ? 'bg-amber-500 text-white shadow-xs'
                                : 'text-[rgb(var(--color-text-secondary))] hover:bg-slate-100'
                        }`}
                    >
                        <Sparkles className="h-3 w-3" /> Draft ({draftCount})
                    </button>
                    <button
                        type="button"
                        onClick={() => setVisibilityFilter('private')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                            visibilityFilter === 'private'
                                ? 'bg-indigo-600 text-white shadow-xs'
                                : 'text-[rgb(var(--color-text-secondary))] hover:bg-slate-100'
                        }`}
                    >
                        <Lock className="h-3 w-3" /> Private ({privateCount})
                    </button>
                    <button
                        type="button"
                        onClick={() => setVisibilityFilter('public')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                            visibilityFilter === 'public'
                                ? 'bg-indigo-600 text-white shadow-xs'
                                : 'text-[rgb(var(--color-text-secondary))] hover:bg-slate-100'
                        }`}
                    >
                        <Globe className="h-3 w-3" /> Publik ({publicCount})
                    </button>
                </div>
            </div>

            {/* Template Grid */}
            {filteredTemplates.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 mb-4">
                        <LayoutTemplate className="h-8 w-8" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-800">Tidak Ada Template Ditampilkan</h3>
                    <p className="text-slate-500 text-xs mt-1 max-w-md mx-auto leading-relaxed">
                        {myTemplatesData.length === 0
                            ? 'Anda belum memiliki template buatan sendiri.'
                            : 'Tidak ada template yang cocok dengan pencarian atau filter visibilitas Anda.'}
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredTemplates.map((tpl) => (
                        <UserTemplateItemCard
                            key={tpl.id}
                            tpl={tpl}
                            onPreview={handlePreview}
                            onEdit={handleEditInBuilder}
                            onUse={handleUseTemplate}
                            onToggleVisibility={handleToggleVisibility}
                            onDelete={handleDeleteTemplate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

/* ─── User Template Item Card Component ─────────────────────────────────── */
function UserTemplateItemCard({ tpl, onPreview, onEdit, onUse, onToggleVisibility, onDelete }) {
    const isDraft = tpl.status === 'draft';
    const isPublic = tpl.visibility === 'public';

    return (
        <Card className="border border-[rgb(var(--color-border))] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group rounded-3xl bg-white">
            {/* Thumbnail / Image */}
            <div className="relative h-[220px] overflow-hidden rounded-t-[24px] bg-slate-100">
                <img
                    src={getTemplateImage(tpl)}
                    alt={tpl.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => handleImageError(e, tpl)}
                />

                {/* Badges — Draft / Private / Public */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    {isDraft ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md bg-amber-500 text-white shadow-md flex items-center gap-1 animate-pulse">
                            <Sparkles className="h-3 w-3" /> Draft
                        </span>
                    ) : isPublic ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md bg-emerald-500 text-white shadow-md flex items-center gap-1">
                            <Globe className="h-3 w-3" /> Publik
                        </span>
                    ) : (
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-md bg-slate-800 text-white shadow-md flex items-center gap-1">
                            <Lock className="h-3 w-3" /> Private
                        </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md bg-indigo-600 text-white shadow-md">
                        {tpl.code || 'User Template'}
                    </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-2.5 p-4 z-20">
                    <button
                        type="button"
                        onClick={() => onPreview(tpl)}
                        className="px-3.5 py-2.5 bg-white text-slate-900 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:bg-slate-50 transition active:scale-95 cursor-pointer"
                        title="Live Preview"
                    >
                        <ExternalLink className="h-3.5 w-3.5" /> Preview
                    </button>
                    <button
                        type="button"
                        onClick={() => onEdit(tpl)}
                        className="px-3.5 py-2.5 bg-indigo-600 text-white font-extrabold rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:bg-indigo-700 transition active:scale-95 cursor-pointer"
                        title="Sunting di Builder"
                    >
                        <Wand2 className="h-3.5 w-3.5" /> Edit Builder
                    </button>
                </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] group-hover:text-indigo-600 transition line-clamp-1">
                        {tpl.name}
                    </h3>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1.5 leading-relaxed line-clamp-2">
                        {tpl.description || 'Tidak ada deskripsi template.'}
                    </p>
                </div>

                {/* Action Toolbar */}
                <div className="pt-3 border-t border-[rgb(var(--color-border))] flex items-center justify-between gap-2">
                    {/* Toggle Visibilitas */}
                    <button
                        type="button"
                        onClick={() => onToggleVisibility(tpl)}
                        title={isPublic ? 'Klik untuk mengubah ke Private (Hanya Anda)' : 'Klik untuk mempublikasikan ke Galeri Publik'}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
                            isPublic
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                        }`}
                    >
                        {isPublic ? <Globe className="h-3.5 w-3.5 text-emerald-600" /> : <Lock className="h-3.5 w-3.5 text-slate-600" />}
                        <span>{isPublic ? 'Publik' : 'Private'}</span>
                    </button>

                    <div className="flex items-center gap-1.5">
                        <button
                            type="button"
                            onClick={() => onUse(tpl)}
                            className="px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-xl text-xs font-extrabold transition cursor-pointer"
                            title="Gunakan template ini untuk membuat website"
                        >
                            Gunakan
                        </button>
                        <button
                            type="button"
                            onClick={() => onDelete(tpl)}
                            className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-xl transition cursor-pointer"
                            title="Hapus Template"
                        >
                            <Trash2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
