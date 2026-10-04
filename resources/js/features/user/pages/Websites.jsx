import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    Globe,
    Plus,
    Search,
    ExternalLink,
    Edit3,
    Trash2,
    CheckCircle2,
    Clock,
    Eye,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Card, Button, Spinner, StatusBadge, ConfirmModal } from '@shared/components/ui';
import { toast } from '@store';
import websiteApi from '@api/website';

export default function Websites() {
    const navigate = useNavigate();
    const { data: websites = [], isLoading: isWebsiteLoading, isError: isWebsiteError, refetch } = useQuery({
        queryKey: ['websites'],
        queryFn: websiteApi.getWebsites,
    });
    const { data: quota } = useQuery({
        queryKey: ['website-quota'],
        queryFn: websiteApi.getQuota,
    });

    const [searchQuery, setSearchQuery] = useState('');

    const [siteToDelete, setSiteToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const websitesList = useMemo(() => {
        const rootDomain = window.location.hostname.replace(/^web\./, '');
        return websites.map((website) => {
            const customDomain = website.settings?.custom_domain;
            const isCustomDomain = website.settings?.domain_type === 'custom' && customDomain;
            const slug = website.slug || 'my-website';

            return {
                id: website.id,
                name: website.name || 'Website Perusahaan Saya',
                domain: isCustomDomain ? customDomain : `${slug}.${rootDomain}`,
                publicUrl: isCustomDomain
                    ? (customDomain.startsWith('http') ? customDomain : `https://${customDomain}`)
                    : `https://${slug}.${rootDomain}`,
                status: website.status === 'published' ? 'Published' : 'Draft',
                updatedAt: website.updated_at
                    ? new Date(website.updated_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
                    : 'Baru saja',
                thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
                templateName: 'Microdata Website Template',
                viewsCount: website.views_count || 0,
                monthlyViewsCount: website.monthly_views_count || 0,
            };
        });
    }, [websites]);

    const totalMonthlyViews = useMemo(() => {
        return websitesList
            .filter((site) => site.status === 'Published')
            .reduce((sum, site) => sum + (site.monthlyViewsCount || site.viewsCount || 0), 0);
    }, [websitesList]);

    const filteredWebsites = websitesList.filter((site) => {
        const matchesSearch =
            site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            site.domain.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    const handleDeleteWebsite = (id, name) => {
        setSiteToDelete({ id, name });
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDeleteWebsite = async () => {
        if (!siteToDelete) return;
        try {
            await websiteApi.deleteWebsite(siteToDelete.id);
            await refetch();
            toast.success(`Website "${siteToDelete.name}" deleted.`, 'Website Deleted');
            setIsDeleteModalOpen(false);
            setSiteToDelete(null);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Gagal menghapus website.', 'Error');
        }
    };


    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Website Published Saya</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Kelola website yang sudah dipublikasikan ke subdomain atau custom domain Anda.
                    </p>
                </div>

                <Button onClick={() => navigate(ROUTES.ONBOARDING)} variant="primary" size="md">
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>Create New Site</span>
                </Button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center">
                        <Globe className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Total Websites</p>
                        <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">{websitesList.length}</p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Published Sites</p>
                        <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">
                            {websitesList.filter((w) => w.status === 'Published').length}
                        </p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Eye className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Total Monthly Views</p>
                        <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">
                            {totalMonthlyViews >= 10000
                                ? `${(totalMonthlyViews / 1000).toFixed(1)}k`
                                : totalMonthlyViews.toLocaleString('id-ID')}
                        </p>
                    </div>
                </Card>
            </div>

            {quota && (
                <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-900">
                    Website published: <strong>{quota.current} / {quota.unlimited ? 'Unlimited' : quota.max}</strong>
                    <span className="text-indigo-700"> (Paket {quota.package})</span>
                </div>
            )}

            {/* Search & Filter Toolbar - Modern Premium Design */}
            <div className="bg-[rgb(var(--color-surface))] rounded-2xl border border-[rgb(var(--color-border))] p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row items-stretch gap-4">
                    {/* Search Bar - Primary Focus (60-70% width) */}
                    <div className="relative flex-1 lg:max-w-[65%]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search websites by name or domain..."
                            className="w-full h-[52px] pl-12 pr-4 bg-[rgb(var(--color-surface-alt))] border-2 border-[rgb(var(--color-border))] rounded-xl text-sm text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all"
                        />
                    </div>

                </div>
            </div>

            {/* Grid of Website Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isWebsiteLoading ? (
                    <div className="col-span-full flex justify-center py-12"><Spinner /></div>
                ) : isWebsiteError ? (
                    <p className="col-span-full text-center text-sm text-red-600">Gagal memuat daftar website.</p>
                ) : filteredWebsites.length === 0 ? (
                    <p className="col-span-full text-center text-sm text-[rgb(var(--color-text-secondary))] py-12">
                        Belum ada website untuk ditampilkan.
                    </p>
                ) : filteredWebsites.map((site) => (
                    <Card
                        key={site.id}
                        className="overflow-hidden flex flex-col group hover:shadow-md transition-all duration-200"
                    >
                        {/* Thumbnail Image Header */}
                        <div className="relative h-44 bg-[rgb(var(--color-surface-alt))] overflow-hidden border-b border-[rgb(var(--color-border))]">
                            <img
                                src={site.thumbnail}
                                alt={site.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute top-3 left-3">
                                <StatusBadge status={site.status === 'Published' ? 'published' : 'draft'} />
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div>
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] truncate group-hover:text-indigo-600 transition">
                                        {site.name}
                                    </h3>
                                </div>
                                <p className="text-xs text-indigo-600 font-medium mt-1 flex items-center gap-1">
                                    <Globe className="h-3.5 w-3.5 shrink-0" />
                                    <span className="truncate">{site.domain}</span>
                                </p>
                                <p className="text-[11px] text-[rgb(var(--color-text-tertiary))] mt-2 flex items-center justify-between gap-1">
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {site.updatedAt}
                                    </span>
                                    <span className="flex items-center gap-1 font-semibold text-indigo-600">
                                        <Eye className="h-3 w-3" /> {site.monthlyViewsCount.toLocaleString('id-ID')} views
                                    </span>
                                </p>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="pt-3 border-t border-[rgb(var(--color-border))] flex items-center justify-between gap-2">
                                <a
                                    href={site.publicUrl || `http://${site.domain}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-[rgb(var(--color-text-secondary))] hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition border border-[rgb(var(--color-border))]"
                                    title="View Live Site"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </a>

                                <Link
                                    to={`${ROUTES.BUILDER}?website_id=${site.id}`}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow-xs"
                                >
                                    <Edit3 className="h-3.5 w-3.5" />
                                    <span>Edit Builder</span>
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => handleDeleteWebsite(site.id, site.name)}
                                    className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 hover:bg-red-50 rounded-xl transition border border-[rgb(var(--color-border))]"
                                    title="Delete Website"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Delete Website Confirm Modal */}
            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setSiteToDelete(null);
                }}
                onConfirm={handleConfirmDeleteWebsite}
                title="Hapus Website"
                description="Apakah Anda yakin ingin menghapus website ini? Deployment dan data terkait akan dihapus."
                variant="danger"
                icon={Trash2}
                confirmText="Ya, Hapus Website"
                cancelText="Batal"
                details={
                    siteToDelete && (
                        <div>
                            <p className="font-extrabold text-[rgb(var(--color-text-primary))] text-sm">{siteToDelete.name}</p>
                        </div>
                    )
                }
            />
        </div>
    );
}
