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
import { onboardingApi } from '@api';

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

    const [templatesLoading] = useState(false);

    const categories = [
        { id: 'all', name: 'All Templates' },
        ...categoriesData.map((cat) => ({
            id: cat.id,
            name: cat.name,
        })),
    ];

    const dummyTemplates = [
        {
            id: 'template-1',
            title: 'DataSoft Enterprise Suite',
            category: categoriesData[0]?.id || 'corporate',
            badge: 'Popular',
            rating: '4.9',
            downloads: '2.4k',
            description: 'Ultra-modern corporate company profile template tailored for technology and enterprise services.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
            features: ['Responsive 100%', 'SEO Optimized', 'Multi-language Ready', 'Dark Mode Accent'],
        },
        {
            id: 'template-2',
            title: 'Nexus Business Pro',
            category: categoriesData[0]?.id || 'corporate',
            badge: 'Featured',
            rating: '4.8',
            downloads: '1.9k',
            description: 'Clean, minimalist corporate template focusing on clarity, corporate authority, and lead generation.',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
            features: ['Hero Video Support', 'Interactive Case Studies', 'Contact Form Integration'],
        },
        {
            id: 'template-3',
            title: 'EcoStore Commerce',
            category: categoriesData[1]?.id || 'ecommerce',
            badge: 'New',
            rating: '4.9',
            downloads: '850',
            description: 'High-converting digital storefront template designed for catalog showcase and direct sales.',
            image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
            features: ['Product Grid', 'Cart Drawer', 'Payment Badge Section', 'Fast Loading'],
        },
        {
            id: 'template-4',
            title: 'Alpha SaaS Launchpad',
            category: categoriesData[3]?.id || 'saas',
            badge: 'Hot',
            rating: '5.0',
            downloads: '3.1k',
            description: 'Sleek dark-mode landing page designed specifically for modern software products and startup apps.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
            features: ['Pricing Table', 'Feature Grid', 'Testimonial Carousel', 'Animated Gradient'],
        },
        {
            id: 'template-5',
            title: 'Creative Studio Horizon',
            category: categoriesData[2]?.id || 'portfolio',
            badge: 'Pro',
            rating: '4.7',
            downloads: '1.2k',
            description: 'Aesthetic agency portfolio template featuring smooth visual grids and interactive showcase galleries.',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
            features: ['Masonry Grid', 'Filterable Portfolio', 'Client Logos Section'],
        },
        {
            id: 'template-6',
            title: 'Fintech Corporate Apex',
            category: categoriesData[0]?.id || 'corporate',
            badge: 'Enterprise',
            rating: '4.9',
            downloads: '1.5k',
            description: 'Professional financial services template with security badge elements and high credibility layout.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
            features: ['Interactive Calculator', 'Team Section', 'Compliance Badges'],
        },
    ];

    const templates = dummyTemplates.map((tpl) => ({
        id: tpl.id,
        title: tpl.title,
        category: tpl.category,
        badge: tpl.badge,
        rating: tpl.rating,
        downloads: tpl.downloads,
        description: tpl.description,
        image: tpl.image,
        features: tpl.features,
    }));

    const filteredTemplates = templates.filter((tpl) => {
        const matchesCat = selectedCategory === 'all' || tpl.category === selectedCategory;
        const matchesSearch =
            tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tpl.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

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
            {templatesLoading ? (
                <div className="text-center text-slate-500 py-12">Loading templates...</div>
            ) : filteredTemplates.length === 0 ? (
                <div className="text-center text-slate-500 py-12">No templates found.</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTemplates.map((tpl) => (
                        <Card
                            key={tpl.id}
                            className="border border-[rgb(var(--color-border))] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                        >
                            {/* Preview Image with Hover Overlay */}
                            <div className="relative h-52 bg-[rgb(var(--color-surface-alt))] overflow-hidden">
                                <img
                                    src={tpl.image}
                                    alt={tpl.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-3 left-3 flex items-center gap-2">
                                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                                        {tpl.badge}
                                    </span>
                                </div>

                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-bold text-slate-800 shadow-xs">
                                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                                    <span>{tpl.rating}</span>
                                </div>

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

                                {/* Key Features Pill */}
                                <div className="space-y-1.5 pt-2 border-t border-[rgb(var(--color-border))]">
                                    {tpl.features.map((feat) => (
                                        <div key={feat} className="flex items-center gap-2 text-[11px] text-[rgb(var(--color-text-secondary))] font-medium">
                                            <Check className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

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
                            <img
                                src={previewModalTemplate.image}
                                alt={previewModalTemplate.title}
                                className="w-full h-full object-cover"
                            />
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