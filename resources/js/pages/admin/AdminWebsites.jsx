import { useState } from 'react';
import {
    Globe,
    Search,
    ExternalLink,
    Filter,
    MoreVertical,
    Eye,
    Shield,
    Trash2,
    Plus,
    Edit3,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@components/ui';
import { ROUTES } from '@constants';
import { toast } from '@store';

export default function AdminWebsites() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const [websitesList, setWebsitesList] = useState([
        {
            id: 1,
            name: 'DataSoft Corporate Official',
            domain: 'official.datasoft.id',
            owner: 'DataSoft Admin',
            ownerEmail: 'admin@datasoft.id',
            status: 'Published',
            updatedAt: '10 mins ago',
            visitors: '45,290',
            storageUsed: '124 MB',
            templateName: 'Enterprise Corporate Pro',
        },
        {
            id: 2,
            name: 'Koperasi Maju Profile',
            domain: 'koperasimaju.datasoft.id',
            owner: 'Budi Santoso',
            ownerEmail: 'user@datasoft.id',
            status: 'Published',
            updatedAt: '2 hours ago',
            visitors: '8,420',
            storageUsed: '45 MB',
            templateName: 'Modern Business',
        },
        {
            id: 3,
            name: 'Nexus Tech Solution',
            domain: 'nexustech.datasoft.id',
            owner: 'Alex Rivera',
            ownerEmail: 'alex@nexus.io',
            status: 'Draft',
            updatedAt: 'Yesterday',
            visitors: '0',
            storageUsed: '12 MB',
            templateName: 'SaaS Showcase',
        },
        {
            id: 4,
            name: 'EcoStore Digital',
            domain: 'ecostore.datasoft.id',
            owner: 'Sarah Chen',
            ownerEmail: 'sarah@ecostore.dev',
            status: 'Suspended',
            updatedAt: '5 days ago',
            visitors: '1,200',
            storageUsed: '88 MB',
            templateName: 'E-Commerce Storefront',
        },
    ]);

    const filteredWebsites = websitesList.filter((site) => {
        const matchesSearch =
            site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            site.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
            site.owner.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus =
            statusFilter === 'all' || site.status.toLowerCase() === statusFilter.toLowerCase();
        return matchesSearch && matchesStatus;
    });

    const handleToggleStatus = (id, currentStatus) => {
        const nextStatus = currentStatus === 'Published' ? 'Draft' : 'Published';
        setWebsitesList(
            websitesList.map((site) => (site.id === id ? { ...site, status: nextStatus } : site))
        );
        toast.info(`Website status changed to ${nextStatus}`, 'Admin Action');
    };

    const handleDeleteWebsite = (id, name) => {
        if (confirm(`ADMIN ACTION: Are you sure you want to permanently delete "${name}"?`)) {
            setWebsitesList(websitesList.filter((site) => site.id !== id));
            toast.success(`Website "${name}" deleted from system.`, 'Admin Deleted');
        }
    };

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Admin Header */}
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
            </div>

            {/* Admin KPI Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                <Card className="p-5">
                    <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Total Hosted Sites</p>
                    <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">{websitesList.length}</p>
                </Card>
                <Card className="p-5">
                    <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Published Sites</p>
                    <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                        {websitesList.filter((w) => w.status === 'Published').length}
                    </p>
                </Card>
                <Card className="p-5">
                    <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Draft Sites</p>
                    <p className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 mt-1">
                        {websitesList.filter((w) => w.status === 'Draft').length}
                    </p>
                </Card>
                <Card className="p-5">
                    <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Suspended Sites</p>
                    <p className="text-2xl font-extrabold text-rose-600 dark:text-rose-400 mt-1">
                        {websitesList.filter((w) => w.status === 'Suspended').length}
                    </p>
                </Card>
            </div>

            {/* Filter Toolbar */}
            <Card className="p-5 space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by site name, domain, or owner..."
                            className="w-full pl-10 pr-4 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                        />
                    </div>

                    <div className="flex items-center gap-2 bg-[rgb(var(--color-surface-alt))] p-1 rounded-xl border border-[rgb(var(--color-border))]">
                        {['all', 'published', 'draft', 'suspended'].map((st) => (
                            <button
                                key={st}
                                type="button"
                                onClick={() => setStatusFilter(st)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition ${
                                    statusFilter === st
                                        ? 'bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-primary))] shadow-xs'
                                        : 'text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))]'
                                }`}
                            >
                                {st}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Websites Table */}
                <div className="overflow-x-auto border-t border-[rgb(var(--color-border))] pt-4 ds-scrollbar-thin">
                    <table className="w-full text-left text-xs text-[rgb(var(--color-text-secondary))]">
                        <thead className="bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-tertiary))] font-bold uppercase tracking-wider border-b border-[rgb(var(--color-border))]">
                            <tr>
                                <th className="py-3.5 px-4">Website / Domain</th>
                                <th className="py-3.5 px-4">Owner</th>
                                <th className="py-3.5 px-4">Template</th>
                                <th className="py-3.5 px-4">Status</th>
                                <th className="py-3.5 px-4">Visitors</th>
                                <th className="py-3.5 px-4 text-right">Admin Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[rgb(var(--color-border))] font-medium">
                            {filteredWebsites.map((site) => (
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
                                            <p className="font-bold text-[rgb(var(--color-text-primary))]">{site.owner}</p>
                                            <p className="text-[11px] text-[rgb(var(--color-text-tertiary))]">{site.ownerEmail}</p>
                                        </div>
                                    </td>

                                    <td className="py-4 px-4 font-bold text-[rgb(var(--color-text-primary))]">{site.templateName}</td>

                                    <td className="py-4 px-4">
                                        <span
                                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                                site.status === 'Published'
                                                    ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                                                    : site.status === 'Draft'
                                                    ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
                                                    : 'bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300'
                                            }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${
                                                    site.status === 'Published'
                                                        ? 'bg-emerald-500'
                                                        : site.status === 'Draft'
                                                        ? 'bg-amber-500'
                                                        : 'bg-rose-500'
                                                }`}
                                            />
                                            {site.status}
                                        </span>
                                    </td>

                                    <td className="py-4 px-4 font-bold text-[rgb(var(--color-text-primary))]">{site.visitors}</td>

                                    <td className="py-4 px-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                type="button"
                                                onClick={() => handleToggleStatus(site.id, site.status)}
                                                className="px-2.5 py-1 bg-[rgb(var(--color-surface-alt))] hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-[rgb(var(--color-text-primary))] hover:text-indigo-600 border border-[rgb(var(--color-border))] rounded-lg text-xs font-bold transition"
                                            >
                                                {site.status === 'Published' ? 'Unpublish' : 'Publish'}
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => handleDeleteWebsite(site.id, site.name)}
                                                className="p-1.5 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition"
                                                title="Delete Site"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
