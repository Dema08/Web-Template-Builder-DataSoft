import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Sparkles,
    Search,
    Eye,
    ArrowRight,
    Check,
    Star,
    Laptop,
    Smartphone,
    Filter,
} from 'lucide-react';
import { Card, Button } from '@components/ui';
import { ROUTES } from '@constants';
import { toast } from '@store';
import { useQuery } from '@tanstack/react-query';
import { onboardingApi, templateApi } from '@api';

export default function Templates() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [previewModalTemplate, setPreviewModalTemplate] = useState(null);

    const { data: categoriesData = [], isLoading: categoriesLoading, isError: categoriesError } = useQuery({
        queryKey: ['user', 'categories'],
        queryFn: async () => {
            const data = await onboardingApi.getCategories();
            return data || [];
        },
        staleTime: 5 * 60 * 1000, // 5 minutes — re-fetches if admin changes categories
    });

    const [templatesLoading, setTemplatesLoading] = useState(false);

    const categories = [
        { id: 'all', name: 'All Templates' },
        ...categoriesData.map((cat) => ({
            id: cat.id,
            name: cat.name,
        })),
    ];

    const { data: templatesData, isLoading: templatesApiLoading, isError: templatesError } = useQuery({
        queryKey: ['user-templates', { category: selectedCategory, search: searchQuery }],
        queryFn: () => templateApi.getAll({
            industry_category_id: selectedCategory !== 'all' ? selectedCategory : undefined,
            search: searchQuery || undefined,
            per_page: 50,
            status: 'published',
        }).then(res => res.data?.data ?? res.data),
    });

    const templates = (templatesData || []).map((tpl) => ({
        id: tpl.id,
        title: tpl.name,
        category: tpl.industry_category_id || tpl.category_id,
        badge: tpl.is_featured ? 'Featured' : (tpl.status === 'published' ? 'Published' : 'Draft'),
        rating: null,
        downloads: null,
        description: tpl.description || '',
        image: tpl.preview_image || tpl.thumbnail,
        features: [],
    }));

    const filteredTemplates = templates.filter((tpl) => {
        const matchesCat = selectedCategory === 'all' || tpl.category === selectedCategory;
        const matchesSearch =
            tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tpl.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    useEffect(() => {
        setTemplatesLoading(templatesApiLoading);
    }, [templatesApiLoading]);

    const handleUseTemplate = (tpl) => {
        toast.success(`Loading "${tpl.title}" template into Builder...`, 'Template Selected');
        navigate(ROUTES.BUILDER);
    };

    if (categoriesLoading) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto">
                <div className="text-center text-slate-500 py-12">Loading categories...</div>
            </div>
        );
    }

    if (categoriesError) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    Failed to load categories. Please try refreshing the page.
                </div>
            </div>
        );
    }

    if (templatesApiLoading) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto">
                <div className="text-center text-slate-500 py-12">Loading templates...</div>
            </div>
        );
    }

    if (templatesError) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                    Failed to load templates. Please try refreshing the page.
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
                        <span>DataSoft Template Library</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Template Gallery</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Select a professionally crafted DataSoft template to build your corporate web presence.
                    </p>
                </div>

            </div>

            {/* Search Bar - Modern Premium Design */}
            <div className="max-w-2xl">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search templates by name, keyword, or description..."
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

            {/* Template Cards Grid */}
            {filteredTemplates.length === 0 ? (
                <div className="text-center text-slate-500 py-12">No templates found.</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredTemplates.map((tpl) => (
                        <Card
                            key={tpl.id}
                            className="border border-[rgb(var(--color-border))] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                        >
                            {/* Preview Image with Hover Overlay */}
                            <div className="relative h-[220px] overflow-hidden rounded-t-[24px]">
                                {tpl.image ? (
                                    <img
                                        src={tpl.image}
                                        alt={tpl.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50">
                                        <Layout className="h-10 w-10 mb-2 opacity-40" />
                                        <span className="text-xs font-medium">No Preview Available</span>
                                    </div>
                                )}
                                <div className="absolute top-3 left-3 flex items-center gap-2">
                                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                                        {tpl.badge}
                                    </span>
                                </div>

                                {tpl.rating && (
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-bold text-slate-800 shadow-xs">
                                        <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                                        <span>{tpl.rating}</span>
                                    </div>
                                )}

                                {/* Hover Overlay Buttons */}
                                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-3 p-4">
                                    <button
                                        type="button"
                                        onClick={() => setPreviewModalTemplate(tpl)}
                                        className="px-4 py-2.5 bg-white text-slate-900 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:bg-slate-100 transition"
                                    >
                                        <Eye className="h-3.5 w-3.5" />
                                        Preview
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleUseTemplate(tpl)}
                                        className="px-4 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-lg hover:bg-indigo-700 transition"
                                    >
                                        <UseTemplateIcon className="h-3.5 w-3.5" />
                                        Use Template
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                <div>
                                    <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] group-hover:text-indigo-600 transition">
                                        {tpl.title}
                                    </h3>
                                    <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1.5 leading-relaxed line-clamp-2">
                                        {tpl.description}
                                    </p>
                                </div>

        {/* Key Features Pill - Only show if features exist */}
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

                                {/* Footer Action */}
                                <Button
                                    onClick={() => handleUseTemplate(tpl)}
                                    className="w-full py-2.5 px-4 bg-[rgb(var(--color-surface-alt))] hover:bg-indigo-50 hover:text-indigo-600 border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))] transition flex items-center justify-center gap-2"
                                    variant="ghost"
                                >
                                    <span>Customize in DataSoft Builder</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Template Live Preview Modal */}
            {previewModalTemplate && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-4">
                            <div>
                                <h3 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">{previewModalTemplate.title}</h3>
                                <p className="text-xs text-[rgb(var(--color-text-secondary))]">{previewModalTemplate.description}</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setPreviewModalTemplate(null)}
                                className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1 rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden border border-[rgb(var(--color-border))] max-h-80">
                            {previewModalTemplate.image ? (
                                <img
                                    src={previewModalTemplate.image}
                                    alt={previewModalTemplate.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-64 flex items-center justify-center text-slate-400">
                                    <span className="text-sm font-medium">No preview image available</span>
                                </div>
                            )}
                        </div>

                            <div className="flex items-center justify-between pt-3">
                                <div className="flex items-center gap-4 text-xs font-bold text-[rgb(var(--color-text-primary))]">
                                <span className="flex items-center gap-1">
                                    <Laptop className="h-4 w-4 text-indigo-600" /> Desktop Ready
                                </span>
                                <span className="flex items-center gap-1">
                                    <Smartphone className="h-4 w-4 text-indigo-600" /> Mobile Responsive
                                </span>
                            </div>

                            <Button
                                onClick={() => {
                                    setPreviewModalTemplate(null);
                                    handleUseTemplate(previewModalTemplate);
                                }}
                                variant="primary"
                                size="sm"
                                className="text-xs"
                            >
                                <span>Use This Template</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function UseTemplateIcon({ className }) {
    return null;
}