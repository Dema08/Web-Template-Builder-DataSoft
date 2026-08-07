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
    Shield,
    BarChart3,
    TrendingUp,
    Activity,
    Globe,
} from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner, Card } from '@components/ui';
import { useSettingsStore } from '@store';

export default function AdminDashboard() {
    const { user } = useAuth();
    const { stats, websites, recentActivity, isLoading } = useDashboard();
    const { brand_name } = useSettingsStore();

    const firstName = user?.name?.split(' ')[0] || 'Admin';
    const totalWebsites = stats?.total_websites || 0;
    const totalUsers = stats?.total_users || 0;
    const totalViews = stats?.total_views || 0;
    const publishedCount = stats?.published_count || 0;

    const statCards = [
        {
            label: 'Total Websites',
            value: totalWebsites.toString(),
            change: '+12%',
            changeDir: 'up',
            icon: Globe,
            iconColor: 'bg-blue-50 text-blue-600',
            chartColor: 'text-blue-600',
        },
        {
            label: 'Total Users',
            value: totalUsers.toString(),
            change: '+8%',
            changeDir: 'up',
            icon: UsersIcon,
            iconColor: 'bg-emerald-50 text-emerald-600',
            chartColor: 'text-emerald-600',
        },
        {
            label: 'Total Views',
            value: totalViews.toLocaleString(),
            change: '+24%',
            changeDir: 'up',
            icon: Eye,
            iconColor: 'bg-violet-50 text-violet-600',
            chartColor: 'text-violet-600',
        },
        {
            label: 'Published',
            value: publishedCount.toString(),
            change: `${totalWebsites > 0 ? Math.round((publishedCount / totalWebsites) * 100) : 0}%`,
            changeDir: 'up',
            icon: BarChart3,
            iconColor: 'bg-amber-50 text-amber-600',
            chartColor: 'text-amber-600',
        },
    ];

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Title + Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                        <Shield className="h-3.5 w-3.5" />
                        <span>{brand_name} Admin Overview</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">System Overview</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Welcome back, {firstName}. Here is the platform-wide activity and user metrics.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="flex items-center gap-2 px-4 py-2.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition shadow-xs"
                    >
                        <Calendar className="h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                        <span>Last 30 Days</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-md shadow-blue-600/20">
                        <Download className="h-4 w-4" />
                        <span>Export Report</span>
                    </button>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => (
                    <Card key={card.label} className="p-5">
                        <div className="flex items-center justify-between mb-3">
                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${card.iconColor}`}>
                                <card.icon className="h-5 w-5" />
                            </div>
                            <span className={`text-xs font-bold ${card.chartColor}`}>{card.change}</span>
                        </div>
                        <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))]">{card.value}</p>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1">{card.label}</p>
                    </Card>
                ))}
            </div>

            {/* Recent Websites & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] mb-4">Recent Websites</h3>
                    <div className="space-y-3">
                        {websites?.slice(0, 5).map((site) => (
                            <div key={site.id} className="flex items-center justify-between p-3 bg-[rgb(var(--color-surface-alt))] rounded-xl">
                                <div>
                                    <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">{site.name}</p>
                                    <p className="text-[10px] text-[rgb(var(--color-text-secondary))]">{site.owner?.name || 'Unknown'}</p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-[10px] font-extrabold ${site.is_published ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                                    {site.is_published ? 'Published' : 'Draft'}
                                </span>
                            </div>
                        ))}
                        {(!websites || websites.length === 0) && (
                            <p className="text-xs text-[rgb(var(--color-text-secondary))] text-center py-4">No websites yet.</p>
                        )}
                    </div>
                </Card>

                <Card className="p-6">
                    <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                        {recentActivity?.slice(0, 5).map((activity, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="h-2 w-2 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                                <div>
                                    <p className="text-xs text-[rgb(var(--color-text-primary))]">{activity.description}</p>
                                    <p className="text-[10px] text-[rgb(var(--color-text-secondary))]">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                        {(!recentActivity || recentActivity.length === 0) && (
                            <p className="text-xs text-[rgb(var(--color-text-secondary))] text-center py-4">No recent activity.</p>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}