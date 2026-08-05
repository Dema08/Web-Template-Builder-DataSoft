import { useState } from 'react';
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
import { Link } from 'react-router-dom';
import { useWebsite } from '@hooks';
import { ROUTES } from '@constants';
import { Card, Button, Spinner, StatusBadge } from '@components/ui';
import { toast } from '@store';

export default function Websites() {
    const { website } = useWebsite();

    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [newSiteName, setNewSiteName] = useState('');
    const [newSubdomain, setNewSubdomain] = useState('');

    const [websitesList, setWebsitesList] = useState([
        {
            id: 1,
            name: website?.name || 'DataSoft Corporate Profile',
            subdomain: website?.subdomain || 'datasoft',
            domain: `${website?.subdomain || 'datasoft'}.datasoft.id`,
            status: website?.is_published ? 'Published' : 'Draft',
            updatedAt: 'Just now',
            visitors: '14,290',
            views: '45.2k',
            thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
            templateName: 'Enterprise Corporate',
        },
        {
            id: 2,
            name: 'Koperasi Maju Profile',
            subdomain: 'koperasimaju',
            domain: 'koperasimaju.datasoft.id',
            status: 'Published',
            updatedAt: '2 hours ago',
            visitors: '8,420',
            views: '24.1k',
            thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=80',
            templateName: 'Modern Business',
        },
        {
            id: 3,
            name: 'DataSoft Solution Hub',
            subdomain: 'solutionhub',
            domain: 'solutionhub.datasoft.id',
            status: 'Draft',
            updatedAt: '3 days ago',
            visitors: '0',
            views: '0',
            thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
            templateName: 'SaaS Showcase',
        },
    ]);

    const filteredWebsites = websitesList.filter((site) => {
        const matchesSearch =
            site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            site.domain.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus =
            statusFilter === 'all' || site.status.toLowerCase() === statusFilter.toLowerCase();
        return matchesSearch && matchesStatus;
    });

    const handleCreateWebsite = (e) => {
        e.preventDefault();
        if (!newSiteName.trim()) return;

        const newSite = {
            id: Date.now(),
            name: newSiteName,
            subdomain: newSubdomain || newSiteName.toLowerCase().replace(/\s+/g, '-'),
            domain: `${newSubdomain || newSiteName.toLowerCase().replace(/\s+/g, '-')}.datasoft.id`,
            status: 'Draft',
            updatedAt: 'Just now',
            visitors: '0',
            views: '0',
            thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
            templateName: 'DataSoft Default Template',
        };

        setWebsitesList([newSite, ...websitesList]);
        setIsCreateModalOpen(false);
        setNewSiteName('');
        setNewSubdomain('');
        toast.success(`Website "${newSite.name}" created successfully!`, 'Website Created');
    };

    const handleDeleteWebsite = (id, name) => {
        if (confirm(`Are you sure you want to delete "${name}"?`)) {
            setWebsitesList(websitesList.filter((w) => w.id !== id));
            toast.info(`Website "${name}" deleted.`, 'Website Deleted');
        }
    };

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Websites</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Manage your company profile websites, custom subdomains, and published deployments.
                    </p>
                </div>

                <Button onClick={() => setIsCreateModalOpen(true)} variant="primary" size="md">
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
                        <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">69.3k</p>
                    </div>
                </Card>
            </div>

            {/* Search & Filter Toolbar */}
            <Card className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search websites by name or domain..."
                        className="w-full pl-10 pr-4 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                    />
                </div>

                <div className="flex items-center gap-2 bg-[rgb(var(--color-surface-alt))] p-1 rounded-xl">
                    <button
                        type="button"
                        onClick={() => setStatusFilter('all')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                statusFilter === 'all'
                                    ? 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-primary))] shadow-xs'
                                    : 'text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))]'
                            }`}
                    >
                        All ({websitesList.length})
                    </button>
                    <button
                        type="button"
                        onClick={() => setStatusFilter('published')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                statusFilter === 'published'
                                    ? 'bg-[rgb(var(--color-surface))] text-emerald-600 shadow-xs'
                                    : 'text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))]'
                            }`}
                    >
                        Published ({websitesList.filter((w) => w.status === 'Published').length})
                    </button>
                    <button
                        type="button"
                        onClick={() => setStatusFilter('draft')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                statusFilter === 'draft'
                                    ? 'bg-[rgb(var(--color-surface))] text-amber-600 shadow-xs'
                                    : 'text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))]'
                            }`}
                    >
                        Draft ({websitesList.filter((w) => w.status === 'Draft').length})
                    </button>
                </div>
            </Card>

            {/* Grid of Website Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWebsites.map((site) => (
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
                                <p className="text-[11px] text-[rgb(var(--color-text-tertiary))] mt-2 flex items-center gap-1">
                                    <Clock className="h-3 w-3" /> Updated {site.updatedAt} • Template: {site.templateName}
                                </p>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="pt-3 border-t border-[rgb(var(--color-border))] flex items-center justify-between gap-2">
                                <a
                                    href={`http://${site.domain}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-[rgb(var(--color-text-secondary))] hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition border border-[rgb(var(--color-border))]"
                                    title="View Live Site"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </a>

                                <Link
                                    to={ROUTES.BUILDER}
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

            {/* Create Website Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-4">
                            <div className="flex items-center gap-2.5">
                                <div className="h-9 w-9 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold">
                                    <Globe className="h-5 w-5 stroke-[2]" />
                                </div>
                                <div>
                                    <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">Create New Website</h3>
                                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">Set up your DataSoft company profile</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsCreateModalOpen(false)}
                                className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1 rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleCreateWebsite} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Website Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. DataSoft Global Profile"
                                    value={newSiteName}
                                    onChange={(e) => setNewSiteName(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Subdomain</label>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="datasoft-global"
                                        value={newSubdomain}
                                        onChange={(e) => setNewSubdomain(e.target.value)}
                                        className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-l-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input rounded-r-none"
                                    />
                                    <span className="bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-secondary))] px-3 py-2.5 text-xs border border-l-0 border-[rgb(var(--color-border))] rounded-r-xl font-medium">
                                        .datasoft.id
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[rgb(var(--color-border))]">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-xl transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-2"
                                >
                                    <Plus className="h-3 w-3" />
                                    <span>Launch Website</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
