import { useState, useEffect } from 'react';
import { TrendingUp, Users, Globe, Eye, Server, Shield, ArrowUpRight, Database, RefreshCw, Cpu, HardDrive, Clock, Filter, BarChart3 } from 'lucide-react';
import { Card, Button } from '@shared/components/ui';
import http from '@shared/api/http';

export default function AdminAnalytics() {
    const [analytics, setAnalytics] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState(null);
    const [selectedRange, setSelectedRange] = useState('12months');
    const [selectedWebsite, setSelectedWebsite] = useState('all');

    const fetchAnalytics = async (showRefresh = false, rangeParam = selectedRange, siteParam = selectedWebsite) => {
        if (showRefresh) setIsRefreshing(true);
        try {
            const { data } = await http.get('/admin/analytics', {
                params: {
                    range: rangeParam,
                    website_id: siteParam !== 'all' ? siteParam : undefined,
                },
            });
            setAnalytics(data?.data ?? data);
            setError(null);
        } catch (err) {
            console.error('Failed to fetch admin analytics:', err);
            setError('Gagal memuat data analitik server.');
        } finally {
            setIsLoading(false);
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        fetchAnalytics(false, selectedRange, selectedWebsite);
        // Auto refresh server metrics every 30 seconds for real-time monitoring
        const interval = setInterval(() => {
            fetchAnalytics(false, selectedRange, selectedWebsite);
        }, 30000);
        return () => clearInterval(interval);
    }, [selectedRange, selectedWebsite]);

    const handleRangeChange = (newRange) => {
        setSelectedRange(newRange);
    };

    const handleWebsiteChange = (newSiteId) => {
        setSelectedWebsite(newSiteId);
    };

    const serverStats = analytics?.server;
    const stats = analytics?.stats;
    const monthlyTraffic = analytics?.monthly_traffic || [];
    const trafficSummary = analytics?.traffic_summary || {};
    const websitesFilter = analytics?.websites_filter || [];
    const topWebsites = analytics?.top_websites || [];

    const kpiCards = [
        {
            label: 'Total Kunjungan Bulanan',
            value: stats?.total_monthly_visits !== undefined ? stats.total_monthly_visits.toLocaleString() : '-',
            subtext: `Total sepanjang masa: ${stats?.total_all_time_visits !== undefined ? stats.total_all_time_visits.toLocaleString() : '-'}`,
            icon: Eye,
            iconBg: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400',
        },
        {
            label: 'Terpublikasi',
            value: stats?.active_deployments !== undefined ? stats.active_deployments.toLocaleString() : '-',
            subtext: `Dari total ${stats?.total_websites || 0} website dibuat`,
            icon: Globe,
            iconBg: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
        },
        {
            label: 'Beban CPU Server',
            value: serverStats?.cpu_load || '-',
            subtext: `Load Avg: ${serverStats?.cpu_raw_load ?? '0.00'} (${serverStats?.cpu_cores || 1} vCPU)`,
            icon: Server,
            iconBg: 'bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400',
        },
        {
            label: 'Penggunaan Penyimpanan',
            value: serverStats?.storage_used_gb ? `${serverStats.storage_used_gb} GB` : '-',
            subtext: `Dari total ${serverStats?.storage_total_gb || 500} GB kuota VPS`,
            icon: Database,
            iconBg: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400',
        },
    ];

    const maxViews = Math.max(...monthlyTraffic.map((t) => t.views), 1);

    if (isLoading) {
        return (
            <div className="p-8 max-w-7xl mx-auto flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4">
                    <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-sm font-semibold text-[rgb(var(--color-text-secondary))]">Memuat data analisis server real-time...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                        <Shield className="h-3.5 w-3.5" />
                        <span>Real-Time System Intelligence</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Platform & Server Analytics</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Monitoring performa server VPS, penggunaan resource, dan grafik trafik pengunjung secara real-time.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => fetchAnalytics(true, selectedRange, selectedWebsite)}
                        disabled={isRefreshing}
                        className="gap-2 text-xs font-bold"
                    >
                        <RefreshCw className={`h-3.5 w-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                        <span>{isRefreshing ? 'Memperbarui...' : 'Refresh Realtime'}</span>
                    </Button>
                </div>
            </div>

            {error && (
                <div className="p-4 rounded-xl bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300 text-sm font-medium">
                    {error}
                </div>
            )}

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
                            <p className="text-xs font-semibold text-[rgb(var(--color-text-secondary))]">{card.subtext}</p>
                        </Card>
                    );
                })}
            </div>

            {/* Server Specs & Live Health Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Card className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
                        <Cpu className="h-4 w-4" />
                        <span>PHP Environment</span>
                    </div>
                    <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))]">PHP v{serverStats?.php_version || '8.3'}</p>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">Framework: Laravel v{serverStats?.laravel_version}</p>
                </Card>

                <Card className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                        <HardDrive className="h-4 w-4" />
                        <span>RAM Memory Load</span>
                    </div>
                    <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))]">{serverStats?.memory_usage || 'Optimal'}</p>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">Status Server: Online & Normal</p>
                </Card>

                <Card className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                        <Clock className="h-4 w-4" />
                        <span>Waktu Server VPS</span>
                    </div>
                    <p className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] truncate">
                        {serverStats?.server_time ? new Date(serverStats.server_time).toLocaleString('id-ID') : '-'}
                    </p>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">Auto-refresh setiap 30 detik</p>
                </Card>
            </div>

            {/* Visual Chart Graphic Section & Top Websites */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Traffic Chart */}
                <Card className="p-6 sm:p-8 space-y-6 lg:col-span-2 min-w-0 overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <BarChart3 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                <h2 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">
                                    Trafik Pengunjung ({selectedRange === '12months' ? '12 Bulan Terakhir' : selectedRange === '6months' ? '6 Bulan Terakhir' : selectedRange === '30days' ? '30 Hari Terakhir' : '7 Hari Terakhir'})
                                </h2>
                            </div>
                            <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">
                                Akumulasi total tayangan halaman (hits) dan pengunjung unik seluruh website
                            </p>
                        </div>

                        {/* Filter Controls */}
                        <div className="flex flex-wrap items-center gap-2">
                            {/* Website Filter Dropdown */}
                            <select
                                value={selectedWebsite}
                                onChange={(e) => handleWebsiteChange(e.target.value)}
                                className="px-3 py-1.5 rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-alt))] text-xs font-bold text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 max-w-[200px] truncate"
                            >
                                <option value="all">🌐 Semua Website</option>
                                {websitesFilter.map((site) => (
                                    <option key={site.id} value={site.id}>
                                        {site.name} ({site.slug})
                                    </option>
                                ))}
                            </select>

                            {/* Range Selector Buttons */}
                            <div className="flex bg-[rgb(var(--color-surface-alt))] p-1 rounded-xl border border-[rgb(var(--color-border))] text-xs font-bold">
                                {[
                                    { id: '12months', label: '12 Bulan' },
                                    { id: '6months', label: '6 Bulan' },
                                    { id: '30days', label: '30 Hari' },
                                    { id: '7days', label: '7 Hari' },
                                ].map((r) => (
                                    <button
                                        key={r.id}
                                        type="button"
                                        onClick={() => handleRangeChange(r.id)}
                                        className={`px-2.5 py-1 rounded-lg text-[11px] transition-all ${
                                            selectedRange === r.id
                                                ? 'bg-indigo-600 text-white shadow-xs'
                                                : 'text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))]'
                                        }`}
                                    >
                                        {r.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary KPI Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] min-w-0">
                            <span className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider block truncate">Total Tayangan</span>
                            <span className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 block truncate">
                                {(trafficSummary.total_views ?? 0).toLocaleString()} <span className="text-[10px] font-normal text-slate-500">hits</span>
                            </span>
                        </div>
                        <div className="p-3 rounded-xl bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] min-w-0">
                            <span className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider block truncate">Pengunjung Unik</span>
                            <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 block truncate">
                                {(trafficSummary.total_unique ?? 0).toLocaleString()} <span className="text-[10px] font-normal text-slate-500">IP</span>
                            </span>
                        </div>
                        <div className="p-3 rounded-xl bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] min-w-0">
                            <span className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider block truncate">Rata-rata / Periode</span>
                            <span className="text-base font-extrabold text-purple-600 dark:text-purple-400 block truncate">
                                {(trafficSummary.avg_views ?? 0).toLocaleString()} <span className="text-[10px] font-normal text-slate-500">views</span>
                            </span>
                        </div>
                        <div className="p-3 rounded-xl bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] min-w-0">
                            <span className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider block truncate">Bulan/Hari Puncak</span>
                            <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 block truncate" title={trafficSummary.peak_label}>
                                {trafficSummary.peak_label || '-'} ({(trafficSummary.peak_views ?? 0).toLocaleString()})
                            </span>
                        </div>
                    </div>

                    {/* Interactive Bar Chart Graphic — 100% Responsive & Strict Bounds */}
                    <div className="w-full min-w-0 overflow-hidden">
                        <div className="h-64 w-full bg-gradient-to-b from-indigo-50/50 to-[rgb(var(--color-surface))] dark:from-indigo-950/20 dark:to-[rgb(var(--color-surface))] rounded-2xl border border-[rgb(var(--color-border))] flex items-end p-4 sm:p-6 gap-1 sm:gap-1.5 overflow-hidden">
                            {monthlyTraffic.map((item, idx) => {
                                const views = item.views || 0;
                                const isPeak = maxViews > 0 && views === maxViews && views > 0;
                                const heightPercent = maxViews > 0 ? Math.max((views / maxViews) * 100, 8) : 8;
                                const showLabel = monthlyTraffic.length > 20
                                    ? (idx % 5 === 0 || idx === monthlyTraffic.length - 1)
                                    : true;

                                return (
                                    <div key={idx} className="flex-1 min-w-0 flex flex-col items-center gap-1 group h-full justify-end relative">
                                        {/* Number label on top of bar (only shown if views > 0 to avoid clutter) */}
                                        <span className={`text-[10px] font-extrabold transition-opacity duration-200 truncate max-w-full h-4 flex items-center ${
                                            isPeak ? 'text-amber-600 dark:text-amber-400 font-black' : 'text-indigo-600 dark:text-indigo-400'
                                        }`}>
                                            {views > 0 ? (views >= 1000 ? `${(views / 1000).toFixed(1)}k` : views) : ''}
                                        </span>

                                        {/* Bar element */}
                                        <div className="w-full relative flex-1 flex items-end justify-center min-w-0">
                                            <div
                                                className={`w-full rounded-t transition-all duration-300 relative group-hover:scale-105 ${
                                                    isPeak
                                                        ? 'bg-gradient-to-t from-amber-500 to-amber-400 shadow-md shadow-amber-500/20'
                                                        : views > 0
                                                        ? 'bg-gradient-to-t from-indigo-600 to-indigo-500 group-hover:from-indigo-700 group-hover:to-indigo-600 shadow-sm'
                                                        : 'bg-slate-200 dark:bg-slate-800 opacity-40'
                                                }`}
                                                style={{ height: `${heightPercent}%` }}
                                            >
                                                {/* Tooltip on hover */}
                                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-xl transition-all whitespace-nowrap z-30 pointer-events-none flex flex-col items-center">
                                                    <span>{item.month || item.label}</span>
                                                    <span className="text-indigo-300 font-extrabold">{views.toLocaleString()} visits ({item.unique_visitors ?? 0} unique)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Month/Date label at bottom */}
                                        <span className={`text-[10px] font-bold h-4 flex items-center justify-center whitespace-nowrap ${
                                            showLabel ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        } ${
                                            isPeak ? 'text-amber-600 dark:text-amber-400' : 'text-[rgb(var(--color-text-tertiary))]'
                                        }`} title={item.month}>
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Card>

                {/* Top Websites List */}
                <Card className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">Website Trafik Tertinggi</h2>
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Top 5</span>
                    </div>

                    {topWebsites.length === 0 ? (
                        <div className="py-8 text-center text-xs text-[rgb(var(--color-text-secondary))] font-medium">
                            Belum ada statistik kunjungan website.
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {topWebsites.map((site, index) => (
                                <div
                                    key={site.id || index}
                                    className="p-3 rounded-xl bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] flex items-center justify-between gap-3"
                                >
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-bold text-[rgb(var(--color-text-primary))] truncate">{site.name}</p>
                                        <p className="text-[11px] text-[rgb(var(--color-text-secondary))] truncate">slug: {site.slug}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 block">
                                            {site.views.toLocaleString()}
                                        </span>
                                        <span className="text-[10px] text-[rgb(var(--color-text-tertiary))]">hits</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}
