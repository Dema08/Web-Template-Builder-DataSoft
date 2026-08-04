import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Calendar,
    Download,
    Users as UsersIcon,
    Layout,
    Eye,
    CreditCard,
    Filter,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Globe,
    ExternalLink,
    TrendingUp,
    Zap,
    ChevronRight as ChevronRightIcon,
    ArrowUpRight
} from 'lucide-react';
import { useAuth, useDashboard, useWebsite } from '@hooks';
import { Spinner } from '@components/ui';
import { ROUTES } from '@constants';

export default function Dashboard() {
    const { user } = useAuth();
    const { data: dashboard, isLoading: isDashboardLoading } = useDashboard();
    const { website } = useWebsite();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState('all');

    const isAdmin = user?.role === 'admin';
    const firstName = user?.name?.split(' ')[0] || 'User';

    if (isDashboardLoading) {
        return (
            <div className="flex items-center justify-center p-20">
                <Spinner size="lg" />
            </div>
        );
    }

    // Mock data for Admin table
    const mockWebsites = [
        {
            id: 1,
            name: 'Nexus Portfolio',
            url: 'nexus-v3.datasoft.id',
            owner: 'Alex Rivera',
            ownerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            status: 'Published',
            lastModified: '2 mins ago',
            subscribers: '1,429',
            iconColor: 'bg-blue-100 text-blue-600',
        },
        {
            id: 2,
            name: 'EcoStore Beta',
            url: 'ecostore.datasoft.id',
            owner: 'Sarah Chen',
            ownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
            status: 'Draft',
            lastModified: '4 hours ago',
            subscribers: '0',
            iconColor: 'bg-purple-100 text-purple-600',
        },
        {
            id: 3,
            name: 'Alpha Launchpad',
            url: 'alpha-launch.datasoft.id',
            owner: 'Michael Ross',
            ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
            status: 'Published',
            lastModified: 'Yesterday',
            subscribers: '8,201',
            iconColor: 'bg-indigo-100 text-indigo-600',
        },
    ];

    // User Templates Library
    const userTemplates = [
        {
            id: 1,
            title: 'Architectural Vanguard',
            category: 'business',
            priceType: 'Premium • Business',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
        },
        {
            id: 2,
            title: 'Street Style Hub',
            category: 'e-commerce',
            priceType: 'Free • E-commerce',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80',
        },
        {
            id: 3,
            title: 'SaaS Foundation',
            category: 'tech',
            priceType: 'Premium • Tech',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
        },
        {
            id: 4,
            title: 'Noir Portfolio',
            category: 'portfolio',
            priceType: 'Premium • Photography',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
        },
    ];

    const filteredUserTemplates = userTemplates.filter((t) => {
        if (selectedCategory === 'all') return true;
        return t.category === selectedCategory;
    });

    /* =========================================================================
       ADMIN DASHBOARD VIEW
       ========================================================================= */
    if (isAdmin) {
        return (
            <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
                {/* Header Title + Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>DataSoft Admin Overview</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Overview</h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Welcome back, {firstName}. Here's the platform-wide activity and user metrics.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs transition"
                        >
                            <Calendar className="h-4 w-4 text-slate-500" />
                            <span>Last 30 Days</span>
                        </button>

                        <button
                            type="button"
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-xs transition"
                        >
                            <Download className="h-4 w-4 text-slate-500" />
                            <span>Export Data</span>
                        </button>
                    </div>
                </div>

                {/* 4 Metric KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Total Users Card */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <UsersIcon className="h-5 w-5 stroke-[2]" />
                            </div>
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[11px] font-bold">
                                +12%
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Users</p>
                            <p className="text-2xl font-extrabold text-slate-900 mt-0.5">24,402</p>
                        </div>
                        <div className="pt-2">
                            <svg className="w-full h-10 text-blue-500 overflow-visible" viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
                                <path d="M0 25 Q20 5, 40 20 T80 10 T100 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Active Websites Card */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <Layout className="h-5 w-5 stroke-[2]" />
                            </div>
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[11px] font-bold">
                                +8%
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Websites</p>
                            <p className="text-2xl font-extrabold text-slate-900 mt-0.5">1,284</p>
                        </div>
                        <div className="pt-2">
                            <svg className="w-full h-10 text-emerald-500 overflow-visible" viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
                                <path d="M0 20 Q25 28, 50 12 T80 22 T100 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Avg. Engagement Card */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                                <Eye className="h-5 w-5 stroke-[2]" />
                            </div>
                            <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-600 text-[11px] font-bold">
                                -3%
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Avg. Engagement</p>
                            <p className="text-2xl font-extrabold text-slate-900 mt-0.5">68.2%</p>
                        </div>
                        <div className="pt-2">
                            <svg className="w-full h-10 text-slate-400 overflow-visible" viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
                                <path d="M0 15 Q30 25, 60 8 T100 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Monthly Revenue Card */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-3 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                <CreditCard className="h-5 w-5 stroke-[2]" />
                            </div>
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-[11px] font-bold">
                                +21%
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monthly Revenue</p>
                            <p className="text-2xl font-extrabold text-slate-900 mt-0.5">$42,920</p>
                        </div>
                        <div className="pt-2">
                            <svg className="w-full h-10 text-blue-600 overflow-visible" viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
                                <path d="M0 25 L35 18 L70 22 L100 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Recent Websites Data Table Card */}
                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
                    <div className="p-6 flex items-center justify-between border-b border-slate-100">
                        <h2 className="text-lg font-extrabold text-slate-900">Platform Websites</h2>

                        <div className="flex items-center gap-2">
                            <button type="button" className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-50 transition">
                                <Filter className="h-4 w-4" />
                            </button>
                            <button type="button" className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-50 transition">
                                <MoreVertical className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs text-slate-600">
                            <thead className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
                                <tr>
                                    <th className="py-3.5 px-6">Website</th>
                                    <th className="py-3.5 px-6">Owner</th>
                                    <th className="py-3.5 px-6">Status</th>
                                    <th className="py-3.5 px-6">Subscribers</th>
                                    <th className="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 font-medium">
                                {mockWebsites.map((site) => (
                                    <tr key={site.id} className="hover:bg-slate-50/80 transition">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className={`h-9 w-9 rounded-xl ${site.iconColor} flex items-center justify-center font-bold`}>
                                                    <Globe className="h-4 w-4 stroke-[2]" />
                                                </div>
                                                <div>
                                                    <p className="font-extrabold text-slate-900">{site.name}</p>
                                                    <p className="text-[11px] text-slate-400">{site.url}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2.5">
                                                <img src={site.ownerAvatar} alt={site.owner} className="h-7 w-7 rounded-full object-cover" />
                                                <span className="font-bold text-slate-800">{site.owner}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span
                                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                                    site.status === 'Published'
                                                        ? 'bg-emerald-100/80 text-emerald-700'
                                                        : 'bg-slate-100 text-slate-600'
                                                }`}
                                            >
                                                <span className={`h-1.5 w-1.5 rounded-full ${site.status === 'Published' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                                {site.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 font-bold text-slate-800">{site.subscribers}</td>
                                        <td className="py-4 px-6 text-right">
                                            <Link
                                                to={ROUTES.BUILDER}
                                                className="inline-flex items-center gap-1 py-1.5 px-3 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-lg text-xs font-bold transition"
                                            >
                                                <span>Edit</span>
                                                <ExternalLink className="h-3 w-3" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    /* =========================================================================
       USER DASHBOARD VIEW (Matching User Mockup Screenshot)
       ========================================================================= */
    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* User Welcome Header with Preview & Continue Editing buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Welcome back, {firstName}
                    </h1>
                    <p className="text-sm text-slate-500 mt-1 font-medium">
                        Manage your projects and discover new inspirations.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        to={ROUTES.WEBSITES}
                        className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 shadow-xs transition"
                    >
                        Preview
                    </Link>

                    <Link
                        to={ROUTES.BUILDER}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/20 transition flex items-center gap-1.5"
                    >
                        <span>Continue Editing</span>
                    </Link>
                </div>
            </div>

            {/* Top 2 Cards: Website Status + Weekly Performance */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Website Status Card (Takes 2 Columns) */}
                <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            Published
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs font-bold text-slate-400">Website Status</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">ACTIVE TEMPLATE</p>
                            <h3 className="text-xl font-extrabold text-slate-900 mt-1">Corporate Pro v2</h3>
                        </div>

                        <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">LAST SAVED</p>
                            <h3 className="text-xl font-extrabold text-slate-900 mt-1">5 mins ago</h3>
                        </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <a
                            href={`http://${website?.subdomain || 'datasoft'}.datasoft.id`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition"
                        >
                            <Zap className="h-4 w-4 fill-blue-600" />
                            <span>View Live Site</span>
                        </a>
                    </div>
                </div>

                {/* Right Weekly Performance Card (Solid Blue Card) */}
                <div className="bg-blue-600 rounded-3xl p-6 sm:p-7 text-white shadow-lg shadow-blue-600/25 flex flex-col justify-between space-y-6 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                            <Sparkles className="h-5 w-5 stroke-[2]" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-extrabold">Weekly Performance</h3>
                        <p className="text-xs text-blue-100 font-medium mt-1">
                            +12.4% traffic increase this week.
                        </p>
                        <div className="mt-4 flex items-baseline justify-between">
                            <span className="text-4xl font-black tracking-tight">1.2k</span>
                            <TrendingUp className="h-6 w-6 stroke-[3]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Template Library Section */}
            <div className="space-y-6 pt-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Template Library</h2>

                    <Link
                        to={ROUTES.TEMPLATES}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition"
                    >
                        <span>Browse All</span>
                        <ChevronRightIcon className="h-4 w-4" />
                    </Link>
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {[
                        { id: 'all', label: 'All Categories' },
                        { id: 'business', label: 'Business' },
                        { id: 'portfolio', label: 'Portfolio' },
                        { id: 'e-commerce', label: 'E-commerce' },
                        { id: 'tech', label: 'Tech' },
                        { id: 'minimalist', label: 'Minimalist' },
                    ].map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                                selectedCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* 4-Column Template Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filteredUserTemplates.map((tpl) => (
                        <div
                            key={tpl.id}
                            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
                        >
                            <div className="relative h-44 bg-slate-100 overflow-hidden border-b border-slate-100">
                                <img
                                    src={tpl.image}
                                    alt={tpl.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                                <div>
                                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition truncate">
                                        {tpl.title}
                                    </h4>
                                    <p className="text-[11px] font-semibold text-slate-400 mt-1">
                                        {tpl.priceType}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
