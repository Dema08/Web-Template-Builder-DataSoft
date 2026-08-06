import { TrendingUp, Users, Globe, Eye, Server, Shield, ArrowUpRight, Database } from 'lucide-react';
import { Card } from '@components/ui';

export default function AdminAnalytics() {
    const kpiCards = [
        {
            label: 'Total Monthly Visits',
            value: '1,420,890',
            icon: Eye,
            iconBg: 'bg-blue-50 text-blue-600',
            trend: '+18.4% vs last month',
            trendDir: 'up',
        },
        {
            label: 'Active Deployments',
            value: '1,284',
            icon: Globe,
            iconBg: 'bg-emerald-50 text-emerald-600',
            trend: '+9.2% increase',
            trendDir: 'up',
        },
        {
            label: 'Server CPU Load',
            value: '14.2%',
            icon: Server,
            iconBg: 'bg-purple-50 text-purple-600',
            trend: 'Optimal Health',
            trendDir: 'neutral',
        },
        {
            label: 'Storage Usage',
            value: '48.6 GB',
            icon: Database,
            iconBg: 'bg-amber-50 text-amber-600',
            trend: 'of 500 GB total',
            trendDir: 'neutral',
        },
    ];

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                    <Shield className="h-3.5 w-3.5" />
                    <span>System Intelligence</span>
                </div>
                <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Platform Analytics</h1>
                <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                    Real-time performance, server load, traffic trends, and user engagement insights across DataSoft.
                </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {kpiCards.map((card) => {
                    const Icon = card.icon;
                    return (
                        <Card key={card.label} className="p-5 space-y-3">
                            <div className="flex items-center justify-between text-[rgb(var(--color-text-tertiary))]">
                                <span className="text-xs font-bold uppercase tracking-wider">{card.label}</span>
                                <div className={`h-8 w-8 rounded-lg ${card.iconBg} flex items-center justify-center`}>
                                    <Icon className="h-4 w-4" />
                                </div>
                            </div>
                            <p className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))]">{card.value}</p>
                            <div
                                className={`flex items-center gap-1 text-xs font-bold ${
                                    card.trendDir === 'up'
                                        ? 'text-emerald-600 dark:text-emerald-400'
                                        : card.trendDir === 'down'
                                        ? 'text-rose-600 dark:text-rose-400'
                                        : 'text-[rgb(var(--color-text-secondary))]'
                                }`}
                            >
                                {card.trendDir === 'up' && <ArrowUpRight className="h-3.5 w-3.5" />}
                                {card.trendDir === 'down' && <ArrowUpRight className="h-3.5 w-3.5 rotate-180" />}
                                {card.trendDir === 'neutral' && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                                <span>{card.trend}</span>
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Visual Chart Graphic Section */}
            <Card className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">Traffic Growth & Visitor Bandwidth</h2>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))]">Aggregated HTTP requests served across all subdomains</p>
                    </div>

                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-full">
                        Live Metrics
                    </span>
                </div>

                <div className="h-56 bg-gradient-to-b from-indigo-50/50 to-[rgb(var(--color-surface))] dark:from-indigo-950/20 dark:to-[rgb(var(--color-surface))] rounded-2xl border border-[rgb(var(--color-border))] flex items-end p-6 gap-3">
                    {[35, 45, 60, 52, 70, 85, 78, 90, 95, 88, 100, 92].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                            <div
                                className="w-full bg-indigo-600 rounded-t-lg group-hover:bg-indigo-700 transition duration-300 relative"
                                style={{ height: `${val}%` }}
                            >
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded transition">
                                    {val * 1000}
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))]">M{idx + 1}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
