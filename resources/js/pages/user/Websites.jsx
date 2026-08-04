import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { useWebsite } from '@hooks';
import { ROUTES } from '@constants';
import { toast } from '@store';

export default function Websites() {
    const navigate = useNavigate();
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
        navigate(ROUTES.BUILDER);
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
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Websites</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Manage your company profile websites, custom subdomains, and published deployments.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => setIsCreateModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-sm shadow-md shadow-blue-600/20 transition-all"
                >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>Create New Site</span>
                </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Globe className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Websites</p>
                        <p className="text-2xl font-extrabold text-slate-900 mt-0.5">{websitesList.length}</p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Published Sites</p>
                        <p className="text-2xl font-extrabold text-slate-900 mt-0.5">
                            {websitesList.filter((w) => w.status === 'Published').length}
                        </p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Eye className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Monthly Views</p>
                        <p className="text-2xl font-extrabold text-slate-900 mt-0.5">69.3k</p>
                    </div>
                </div>
            </div>

            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search websites by name or domain..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                    />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                        <button
                            type="button"
                            onClick={() => setStatusFilter('all')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                statusFilter === 'all'
                                    ? 'bg-white text-slate-900 shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            All ({websitesList.length})
                        </button>
                        <button
                            type="button"
                            onClick={() => setStatusFilter('published')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                statusFilter === 'published'
                                    ? 'bg-white text-emerald-700 shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Published ({websitesList.filter((w) => w.status === 'Published').length})
                        </button>
                        <button
                            type="button"
                            onClick={() => setStatusFilter('draft')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                                statusFilter === 'draft'
                                    ? 'bg-white text-amber-700 shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Draft ({websitesList.filter((w) => w.status === 'Draft').length})
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid of Website Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWebsites.map((site) => (
                    <div
                        key={site.id}
                        className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition duration-200 overflow-hidden flex flex-col group"
                    >
                        {/* Thumbnail Image Header */}
                        <div className="relative h-44 bg-slate-100 overflow-hidden border-b border-slate-100">
                            <img
                                src={site.thumbnail}
                                alt={site.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                            <div className="absolute top-3 left-3">
                                <span
                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md ${
                                        site.status === 'Published'
                                            ? 'bg-emerald-500/90 text-white shadow-sm'
                                            : 'bg-amber-500/90 text-white shadow-sm'
                                    }`}
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                                    {site.status}
                                </span>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div>
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-base font-extrabold text-slate-900 truncate group-hover:text-blue-600 transition">
                                        {site.name}
                                    </h3>
                                </div>
                                <p className="text-xs text-blue-600 font-medium mt-0.5 flex items-center gap-1">
                                    <Globe className="h-3.5 w-3.5 shrink-0" />
                                    <span className="truncate">{site.domain}</span>
                                </p>
                                <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                                    <Clock className="h-3 w-3" /> Updated {site.updatedAt} • Template: {site.templateName}
                                </p>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                                <Link
                                    to={ROUTES.BUILDER}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow-xs"
                                >
                                    <Edit3 className="h-3.5 w-3.5" />
                                    <span>Edit Builder</span>
                                </Link>

                                {site.status === 'Published' && (
                                    <a
                                        href={`http://${site.domain}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition border border-slate-200"
                                        title="View Live Site"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                )}

                                <button
                                    type="button"
                                    onClick={() => handleDeleteWebsite(site.id, site.name)}
                                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition border border-slate-200"
                                    title="Delete Website"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Create Website Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-2.5">
                                <div className="h-9 w-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                                    <Globe className="h-5 w-5 stroke-[2]" />
                                </div>
                                <div>
                                    <h3 className="text-base font-extrabold text-slate-900">Create New Website</h3>
                                    <p className="text-xs text-slate-500">Set up your DataSoft company profile</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsCreateModalOpen(false)}
                                className="text-slate-400 hover:text-slate-600 p-1"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleCreateWebsite} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Website Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. DataSoft Global Profile"
                                    value={newSiteName}
                                    onChange={(e) => setNewSiteName(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">Subdomain</label>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="datasoft-global"
                                        value={newSubdomain}
                                        onChange={(e) => setNewSubdomain(e.target.value)}
                                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-l-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                                    />
                                    <span className="bg-slate-100 text-slate-500 px-3 py-2.5 text-xs border border-l-0 border-slate-200 rounded-r-xl font-medium">
                                        .datasoft.id
                                    </span>
                                </div>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-600/20 transition"
                                >
                                    Launch Website
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
