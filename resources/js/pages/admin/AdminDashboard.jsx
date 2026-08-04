import { useState } from 'react';
import {
    Calendar,
    Download,
    Users as UsersIcon,
    Layout,
    Eye,
    CreditCard,
    Filter,
    MoreVertical,
    Sparkles,
    Globe,
    ExternalLink,
    Shield,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth, useDashboard } from '@hooks';
import { Spinner, Card, StatusBadge } from '@components/ui';
import { ROUTES } from '@constants';

export default function AdminDashboard() {
    const { user } = useAuth();
    const { data: dashboard, isLoading: isDashboardLoading } = useDashboard();
    const firstName = user?.name?.split(' ')[0] || 'Admin';

    if (isDashboardLoading) {
        return (
            <div className="flex items-center justify-center p-20">
                <Spinner size="lg" />
            </div>
        );
    }

    const mockWebsites = [
        {
            id: 1,
            name: 'Nexus Portfolio',
            url: 'nexus-v3.datasoft.id',
            owner: 'Alex Rivera',
            ownerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            status: 'published',
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
            status: 'draft',
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
            status: 'published',
            lastModified: 'Yesterday',
            subscribers: '8,201',
            iconColor: 'bg-indigo-100 text-indigo-600',
        },
    ];

    const kpiCards = [
        {
            label: 'Total Users',
            value: '24,402',
            change: '+12%',
            changeDir: 'up',
            icon: UsersIcon,
            iconColor: 'bg-blue-50 text-blue-600',
            chartColor: 'text-blue-500',
        },
        {
            label: 'Active Websites',
            value: '1,284',
            change: '+8%',
            changeDir: 'up',
            icon: Layout,
            iconColor: 'bg-emerald-50 text-emerald-600',
            chartColor: 'text-emerald-500',
        },
        {
            label: 'Avg. Engagement',
            value: '68.2%',
            change: '-3%',
            changeDir: 'down',
            icon: Eye,
            iconColor: 'bg-purple-50 text-purple-600',
            chartColor: 'text-slate-400',
        },
        {
            label: 'Monthly Revenue',
            value: '$42,920',
            change: '+21%',
            changeDir: 'up',
            icon: CreditCard,
            iconColor: 'bg-blue-50 text-blue-600',
            chartColor: 'text-blue-600',
        },
    ];

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Title + Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                        <Shield className="h-3.5 w-3.5" />
                        <span>DataSoft Admin Overview</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Overview</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Welcome back, {firstName}. Here is the platform-wide activity and user metrics.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition shadow-xs"
                    >
                        <Calendar className="h-4 w-4 text-slate-500" />
                        <span>Last 30 Days</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition shadow-xs"
                    >
                        <Download className="h-4 w-4 text-slate-500" />
                        <span>Export Data</span>
                    </button>
                </div>
            </div>

            {/* 4 Metric KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {kpiCards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <Card key={card.label} className="p-5 space-y-3 relative overflow-hidden">
                            <div className="flex items-center justify-between">
                                <div className={`h-10 w-10 rounded-xl ${card.iconColor} flex items-center justify-center`}>
                                    <Icon className="h-5 w-5 stroke-[2]" />
                                </div>
                                <span
                                    className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                                        card.changeDir === 'up'
                                            ? 'bg-emerald-50 text-emerald-600'
                                            : 'bg-rose-50 text-rose-600'
                                    }`}
                                >
                                    {card.change}
                                </span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{card.label}</p>
                                <p className="text-2xl font-extrabold text-slate-900 mt-1">{card.value}</p>
                            </div>
                            <div className="pt-2">
                                <svg
                                    className={`w-full h-10 ${card.chartColor} overflow-visible`}
                                    viewBox="0 0 100 30"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0 25 Q20 5, 40 20 T80 10 T100 2"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Recent Websites Data Table Card */}
            <Card className="border border-slate-200 overflow-hidden">
                <div className="p-6 flex items-center justify-between border-b border-slate-100">
                    <h2 className="text-lg font-extrabold text-slate-900">Platform Websites</h2>

                    <div className="flex items-center gap-2">
                        <button type="button" className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-50 transition">
                            <Filter className="h-4 w-4" />
                        </button>
                        <button type="button" className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-50 transition">
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
                                            <img
                                                src={site.ownerAvatar}
                                                alt={site.owner}
                                                className="h-7 w-7 rounded-full object-cover"
                                            />
                                            <span className="font-bold text-slate-800">{site.owner}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        <StatusBadge status={site.status} />
                                    </td>
                                    <td className="py-4 px-6 font-bold text-slate-800">{site.subscribers}</td>
                                    <td className="py-4 px-6 text-right">
                                        <Link
                                            to={ROUTES.BUILDER}
                                            className="inline-flex items-center gap-1.5 py-1.5 px-3 bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 rounded-xl text-xs font-bold transition"
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
            </Card>
        </div>
    );
}
