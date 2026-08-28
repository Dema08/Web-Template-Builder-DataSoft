import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Sparkles,
    Search,
    Eye,
    Check,
    Star,
    Laptop,
    Smartphone,
    Layout,
    ExternalLink,
    Wand2,
    X,
} from 'lucide-react';
import { Card, Button } from '@shared/components/ui';
import { ROUTES } from '@constants';
import { toast } from '@store';
import { useQuery } from '@tanstack/react-query';
import { onboardingApi, templateApi } from '@api';

export default function Templates() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [previewModalTemplate, setPreviewModalTemplate] = useState(null);

    /* ─── Categories ──────────────────────────────────────────────── */
    const {
        data: categoriesData = [],
        isLoading: categoriesLoading,
        isError: categoriesError,
    } = useQuery({
        queryKey: ['user', 'categories'],
        queryFn: async () => {
            const data = await onboardingApi.getCategories();
            return data || [];
        },
        staleTime: 5 * 60 * 1000,
    });

    const categories = [
        { id: 'all', name: 'All Templates' },
        ...categoriesData.map((cat) => ({ id: cat.id, name: cat.name })),
    ];

    /* ─── Templates ───────────────────────────────────────────────── */
    const {
        data: templatesData,
        isLoading: templatesApiLoading,
        isError: templatesError,
    } = useQuery({
        queryKey: ['user-templates', { category: selectedCategory, search: searchQuery }],
        queryFn: () =>
            templateApi
                .getPublic({
                    industry_category_id: selectedCategory !== 'all' ? selectedCategory : undefined,
                    search: searchQuery || undefined,
                })
                .then((res) => res.data?.data ?? res.data),
    });

    const templates = (templatesData || []).map((tpl) => ({
        id: tpl.id,
        title: tpl.name,
        category: tpl.industry_category_id || tpl.category_id,
        badge: tpl.is_featured ? 'Featured' : 'Published',
        description: tpl.description || '',
        image: tpl.thumbnail || tpl.preview_image || null,
        features: [],
    }));

    const filteredTemplates = templates.filter((tpl) => {
        const matchesCat = selectedCategory === 'all' || tpl.category === selectedCategory;
        const matchesSearch =
            tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tpl.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    /* ─── Handlers ────────────────────────────────────────────────── */

    /** Buka preview template di tab baru */
    const handlePreview = (tpl) => {
        window.open(`/preview/template/${tpl.id}`, '_blank', 'noopener,noreferrer');
    };

    /** Simpan template ID ke sessionStorage lalu arahkan ke Builder */
    const handleUseTemplate = (tpl) => {
        try {
            sessionStorage.setItem('pending_template_id', String(tpl.id));
            sessionStorage.setItem('pending_template_name', tpl.title);
        } catch (_) {
            // sessionStorage might not be available in some envs
        }
        toast.success(`Memuat template "${tpl.title}" ke dalam Builder...`, 'Template Dipilih');
        navigate(ROUTES.BUILDER);
    };

    /* ─── Loading / Error States ──────────────────────────────────── */
    if (categoriesLoading || templatesApiLoading) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="rounded-3xl border border-slate-200 overflow-hidden animate-pulse">
                            <div className="h-[220px] bg-slate-100" />
                            <div className="p-6 space-y-3">
                                <div className="h-4 bg-slate-200 rounded w-3/4" />
                                <div className="h-3 bg-slate-100 rounded w-full" />
                                <div className="h-3 bg-slate-100 rounded w-5/6" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (categoriesError || templatesError) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    Gagal memuat data template. Silakan refresh halaman.
                </div>
            </div>
        );
    }

    /* ─── Render ──────────────────────────────────────────────────── */
    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold mb-2 dark:bg-indigo-900/40 dark:text-indigo-100">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>DataSoft Template Library</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                        Template Gallery
                    </h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Pilih template profesional DataSoft untuk membangun website perusahaan Anda.
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari template berdasarkan nama atau deskripsi..."
                        className="w-full h-[52px] pl-12 pr-4 bg-[rgb(var(--color-surface-alt))] border-2 border-[rgb(var(--color-border))] rounded-xl text-sm text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all"
                    />
                </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 ds-scrollbar-thin">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                            selectedCategory === cat.id
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                                : 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] hover:text-[rgb(var(--color-text-primary))] border border-[rgb(var(--color-border))]'
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Template Grid */}
            {filteredTemplates.length === 0 ? (
                <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 mb-4">
                        <Layout className="h-8 w-8 text-slate-400" />
                    </div>
                    <p className="text-slate-500 font-medium">Tidak ada template yang ditemukan.</p>
                    <p className="text-slate-400 text-sm mt-1">Coba ubah filter atau kata kunci pencarian.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredTemplates.map((tpl) => (
                        <TemplateCard
                            key={tpl.id}
                            tpl={tpl}
                            onPreview={handlePreview}
                            onUseTemplate={handleUseTemplate}
                        />
                    ))}
                </div>
            )}

            {/* Template Detail Modal (from card info click) */}
            {previewModalTemplate && (
                <TemplateDetailModal
                    tpl={previewModalTemplate}
                    onClose={() => setPreviewModalTemplate(null)}
                    onPreview={handlePreview}
                    onUseTemplate={handleUseTemplate}
                />
            )}
        </div>
    );
}

/* ─── Template Card ──────────────────────────────────────────────────── */
function TemplateCard({ tpl, onPreview, onUseTemplate }) {
    return (
        <Card className="border border-[rgb(var(--color-border))] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group rounded-3xl">
            {/* Thumbnail / Preview Image */}
            <div className="relative h-[220px] overflow-hidden rounded-t-[24px]">
                {tpl.image ? (
                    <img
                        src={tpl.image}
                        alt={tpl.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling?.classList.remove('hidden');
                        }}
                    />
                ) : null}

                {/* Fallback jika gambar gagal / tidak ada */}
                <div className={`${tpl.image ? 'hidden' : ''} w-full h-full flex flex-col items-center justify-center text-slate-400 bg-gradient-to-br from-slate-50 to-slate-100`}>
                    <Layout className="h-10 w-10 mb-2 opacity-30" />
                    <span className="text-xs font-medium">No Preview Available</span>
                </div>

                {/* Badge — only show for Featured, hide Published from user view */}
                {tpl.badge === 'Featured' && (
                    <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md bg-amber-500 text-white">
                            <Star className="inline h-2.5 w-2.5 mr-0.5 fill-current" />
                            Featured
                        </span>
                    </div>
                )}

                {/* Hover Overlay — Preview & Use Template buttons */}
                <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-3 p-4 z-20">
                    <button
                        type="button"
                        onClick={() => onPreview(tpl)}
                        title="Buka live preview di tab baru"
                        className="px-4 py-2.5 bg-white text-slate-900 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:bg-slate-50 transition active:scale-95"
                    >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Preview
                    </button>
                    <button
                        type="button"
                        onClick={() => onUseTemplate(tpl)}
                        title="Gunakan template ini di Builder"
                        className="px-4 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:bg-indigo-700 transition active:scale-95"
                    >
                        <Wand2 className="h-3.5 w-3.5" />
                        Gunakan
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] group-hover:text-indigo-600 transition line-clamp-1">
                        {tpl.title}
                    </h3>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1.5 leading-relaxed line-clamp-2">
                        {tpl.description || 'Template profesional siap pakai.'}
                    </p>
                </div>

                {/* Features pills */}
                {tpl.features.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-[rgb(var(--color-border))]">
                        {tpl.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-[11px] text-[rgb(var(--color-text-secondary))] font-medium">
                                <Check className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                                <span>{feat}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA Row */}
                <div className="flex items-center gap-2 pt-1">
                    <button
                        type="button"
                        onClick={() => onPreview(tpl)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition border border-[rgb(var(--color-border))]"
                    >
                        <Eye className="h-3.5 w-3.5" />
                        Preview
                    </button>
                    <Button
                        onClick={() => onUseTemplate(tpl)}
                        className="flex-1 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20"
                        variant="primary"
                    >
                        <Wand2 className="h-3.5 w-3.5" />
                        <span>Gunakan Template</span>
                    </Button>
                </div>
            </div>
        </Card>
    );
}

/* ─── Template Detail Modal ──────────────────────────────────────────── */
function TemplateDetailModal({ tpl, onClose, onPreview, onUseTemplate }) {
    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-[rgb(var(--color-border))] pb-4">
                    <div>
                        <h3 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">{tpl.title}</h3>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">{tpl.description}</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1 rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden border border-[rgb(var(--color-border))] max-h-72 bg-slate-100">
                    {tpl.image ? (
                        <img
                            src={tpl.image}
                            alt={tpl.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-64 flex flex-col items-center justify-center text-slate-400">
                            <Layout className="h-10 w-10 mb-2 opacity-30" />
                            <span className="text-sm font-medium">No preview image available</span>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4 text-xs font-bold text-[rgb(var(--color-text-primary))]">
                        <span className="flex items-center gap-1">
                            <Laptop className="h-4 w-4 text-indigo-600" /> Desktop Ready
                        </span>
                        <span className="flex items-center gap-1">
                            <Smartphone className="h-4 w-4 text-indigo-600" /> Mobile Responsive
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => { onClose(); onPreview(tpl); }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 border border-slate-200 transition"
                        >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Preview
                        </button>
                        <Button
                            onClick={() => { onClose(); onUseTemplate(tpl); }}
                            variant="primary"
                            size="sm"
                            className="text-xs flex items-center gap-1.5"
                        >
                            <Wand2 className="h-3.5 w-3.5" />
                            <span>Gunakan Template Ini</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}