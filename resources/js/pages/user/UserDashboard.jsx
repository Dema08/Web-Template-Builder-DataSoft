import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Sparkles,
    Globe,
    Activity,
    ArrowRight,
    ChevronRight,
    Eye,
    Users,
    Calendar,
} from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner, Card } from '@components/ui';
import { ROUTES } from '@constants';
import { useSettingsStore } from '@store';

const templateCards = [
    { title: 'Architectural Vanguard', subtitle: 'Premium • Business', accent: 'from-indigo-100 via-white to-white' },
    { title: 'Street Style Hub', subtitle: 'Free • E-commerce', accent: 'from-slate-100 via-white to-white' },
    { title: 'SaaS Foundation', subtitle: 'Premium • Tech', accent: 'from-blue-100 via-white to-white' },
    { title: 'Noir Portfolio', subtitle: 'Premium • Photography', accent: 'from-zinc-100 via-white to-white' },
];

export default function UserDashboard() {
    const { user } = useAuth();
    const [range, setRange] = useState('7days');
    const [startDate, setStartDate] = useState(() => {
        const d = new Date();
        d.setDate(d.getDate() - 7);
        return d.toISOString().split('T')[0];
    });
    const [endDate, setEndDate] = useState(() => {
        return new Date().toISOString().split('T')[0];
    });

    const params = { range };
    if (range === 'custom' && startDate && endDate) {
        params.start_date = startDate;
        params.end_date = endDate;
    }

    const { websites, analytics, isLoading } = useDashboard(params);
    const { brand_name } = useSettingsStore();

    if (isLoading) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <Spinner className="h-8 w-8 text-blue-600 animate-spin" />
            </div>
        );
    }

    const firstName = user?.name?.split(' ')[0] || 'User';
    const myWebsite = websites?.[0];

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Welcome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                        Welcome back, {firstName}
                    </h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Here's what's happening with your websites today.
                    </p>
                </div>
                <Link
                    to={ROUTES.ONBOARDING}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-md shadow-blue-600/20"
                >
                    <Sparkles className="h-4 w-4" />
                    Create New Site
                </Link>
            </div>

            {/* Website Summary Card */}
            <Card className="p-6 flex flex-col justify-between">
                <div>
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Website Summary</p>
                            <h2 className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">{myWebsite?.name || 'My Company Profile'}</h2>
                        </div>
                        <span className="rounded-full bg-[rgb(var(--color-surface-alt))] px-3 py-1 text-xs font-bold text-[rgb(var(--color-text-primary))]">
                            {myWebsite?.is_published ? 'Published' : 'Draft'}
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 mt-4">
                        <div className="p-4 bg-[rgb(var(--color-surface-alt))] rounded-xl">
                            <p className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider mb-1">Template</p>
                            <p className="text-sm font-extrabold text-[rgb(var(--color-text-primary))]">{myWebsite?.template || 'Corporate Pro v2'}</p>
                        </div>
                        <div className="p-4 bg-[rgb(var(--color-surface-alt))] rounded-xl">
                            <p className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider mb-1">Subdomain</p>
                            <p className="text-sm font-extrabold text-[rgb(var(--color-text-primary))]">{myWebsite?.subdomain || 'mycompany'}</p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Visitor Analytics Section */}
            <Card className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[rgb(var(--color-border))] pb-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <Activity className="h-5 w-5 text-indigo-600" />
                                <h2 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">
                                    Website Visitor Analytics
                                </h2>
                            </div>
                            <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">
                                Track and analyze views for your published company profile website.
                            </p>
                        </div>

                        {/* Range Select Controls */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            {range === 'custom' && (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="px-3 py-1.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-semibold text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        title="Start Date"
                                    />
                                    <span className="text-xs text-[rgb(var(--color-text-secondary))] font-bold">to</span>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="px-3 py-1.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-semibold text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        title="End Date"
                                    />
                                </div>
                            )}
                            <div className="relative">
                                <select
                                    value={range}
                                    onChange={(e) => setRange(e.target.value)}
                                    className="appearance-none pl-3 pr-8 py-1.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface))] transition focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                                >
                                    <option value="7days">Last 7 Days</option>
                                    <option value="30days">Last 30 Days</option>
                                    <option value="last_month">Last Month</option>
                                    <option value="custom">Custom Range...</option>
                                </select>
                                <ChevronRight className="h-3.5 w-3.5 text-[rgb(var(--color-text-secondary))] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold self-start sm:self-auto shrink-0">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                                Live Traffic
                            </span>
                        </div>
                    </div>

                    {/* KPIs grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-[rgb(var(--color-surface-alt))] rounded-xl flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">
                                    {range === '7days' && 'Total Page Views (7d)'}
                                    {range === '30days' && 'Total Page Views (30d)'}
                                    {range === 'last_month' && 'Total Page Views (Last Month)'}
                                    {range === 'custom' && 'Total Page Views (Custom)'}
                                </p>
                                <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">
                                    {analytics?.total_views?.toLocaleString() || 0}
                                </p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                <Eye className="h-5 w-5" />
                            </div>
                        </div>
                        <div className="p-4 bg-[rgb(var(--color-surface-alt))] rounded-xl flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">
                                    {range === '7days' && 'Unique Visitors (7d)'}
                                    {range === '30days' && 'Unique Visitors (30d)'}
                                    {range === 'last_month' && 'Unique Visitors (Last Month)'}
                                    {range === 'custom' && 'Unique Visitors (Custom)'}
                                </p>
                                <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">
                                    {analytics?.unique_visitors?.toLocaleString() || 0}
                                </p>
                            </div>
                            <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <Users className="h-5 w-5" />
                            </div>
                        </div>
                    </div>

                    {/* Chart Container */}
                    {(() => {
                        const dailyViews = analytics?.daily_views || [];
                        const daysCount = dailyViews.length || 7;
                        const isSmallRange = daysCount <= 14;
                        const maxViews = Math.max(...dailyViews.map(d => d.views), 1);
                        const hasAnyViews = dailyViews.some(d => d.views > 0);
                        const step = daysCount <= 7 ? 1 : daysCount <= 14 ? 2 : daysCount <= 31 ? 5 : 7;
                        const barMinW = isSmallRange ? null : 28;
                        const containerMinW = isSmallRange ? null : Math.max(daysCount * 36, 300);

                        return (
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-bold text-[rgb(var(--color-text-secondary))]">
                                        {range === '7days' && 'Views in the Last 7 Days'}
                                        {range === '30days' && 'Views in the Last 30 Days'}
                                        {range === 'last_month' && 'Views in the Last Month'}
                                        {range === 'custom' && 'Views in the Selected Range'}
                                    </p>
                                    {!isSmallRange && (
                                        <span className="text-[10px] text-[rgb(var(--color-text-tertiary))] font-medium italic select-none">
                                            ← Scroll →
                                        </span>
                                    )}
                                </div>

                                <div className="rounded-2xl border border-[rgb(var(--color-border))] bg-gradient-to-b from-[rgb(var(--color-surface-alt))]/40 to-[rgb(var(--color-surface))]">
                                    <div className={isSmallRange ? '' : 'overflow-x-auto'}>
                                        {/* Chart area with Y-axis reference */}
                                        <div
                                            className="relative"
                                            style={{ minWidth: containerMinW ? `${containerMinW}px` : undefined }}
                                        >
                                            {/* Horizontal grid lines */}
                                            <div className="absolute inset-x-0 top-0 h-44 flex flex-col justify-between px-4 pointer-events-none" aria-hidden>
                                                {[100, 75, 50, 25, 0].map(pct => (
                                                    <div key={pct} className="flex items-center gap-2">
                                                        <span className="text-[9px] text-[rgb(var(--color-text-tertiary))] w-8 text-right shrink-0">
                                                            {pct === 100 ? maxViews : pct === 0 ? '0' : ''}
                                                        </span>
                                                        <div className="flex-1 border-t border-dashed border-[rgb(var(--color-border))]/60" />
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Bars */}
                                            <div
                                                className={`flex items-end pl-12 pr-4 pt-4 pb-0 gap-1 ${isSmallRange ? 'w-full' : ''}`}
                                                style={{ height: '176px' }}
                                            >
                                                {dailyViews.map((day, idx) => {
                                                    const ratio = maxViews > 0 ? day.views / maxViews : 0;
                                                    const barPercent = day.views > 0
                                                        ? Math.max(ratio * 100, 6)
                                                        : 0;
                                                    // Lightness: 82% (sedikit/terang) → 38% (banyak/gelap)
                                                    const lightness = Math.round(82 - ratio * 44);
                                                    const barColor = day.views > 0
                                                        ? `hsl(239, 84%, ${lightness}%)`
                                                        : null;
                                                    const hoverColor = day.views > 0
                                                        ? `hsl(239, 84%, ${Math.max(lightness - 8, 28)}%)`
                                                        : null;
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className={`group relative flex flex-col items-center justify-end h-full ${isSmallRange ? 'flex-1' : 'flex-shrink-0'}`}
                                                            style={{ ...(barMinW ? { width: `${barMinW}px` } : {}), overflow: 'visible' }}
                                                        >
                                                            {/* Tooltip — rendered above, z-index tinggi, overflow visible */}
                                                            {day.views > 0 && (
                                                                <div
                                                                    className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none"
                                                                    style={{ bottom: `calc(${barPercent}% + 10px)`, zIndex: 50 }}
                                                                >
                                                                    <div className="bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg shadow-2xl text-center">
                                                                        <div className="text-white">{day.views} views</div>
                                                                        <div className="text-slate-400 font-normal text-[9px]">{day.date}</div>
                                                                    </div>
                                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                                                                </div>
                                                            )}

                                                            {/* Bar */}
                                                            {day.views > 0 ? (
                                                                <div
                                                                    className="w-full rounded-t-md transition-all duration-300 cursor-pointer"
                                                                    style={{
                                                                        height: `${barPercent}%`,
                                                                        backgroundColor: barColor,
                                                                    }}
                                                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverColor}
                                                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = barColor}
                                                                />
                                                            ) : (
                                                                <div className="w-full flex items-end justify-center" style={{ height: '3px' }}>
                                                                    <div className="w-1 h-1 rounded-full bg-[rgb(var(--color-border))]" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Empty state overlay */}
                                            {!hasAnyViews && (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                    <Eye className="h-8 w-8 text-[rgb(var(--color-text-tertiary))] opacity-30 mb-2" />
                                                    <p className="text-xs text-[rgb(var(--color-text-tertiary))] font-medium">No visitors in this period</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* X-axis labels */}
                                        <div
                                            className={`flex items-center pl-12 pr-4 py-2 border-t border-[rgb(var(--color-border))]/40 gap-1 ${isSmallRange ? 'w-full' : ''}`}
                                            style={{ minWidth: containerMinW ? `${containerMinW}px` : undefined }}
                                        >
                                            {dailyViews.map((day, idx) => {
                                                const showLabel = idx % step === 0 || idx === daysCount - 1;
                                                return (
                                                    <div
                                                        key={idx}
                                                        className={`text-center ${isSmallRange ? 'flex-1' : 'flex-shrink-0'}`}
                                                        style={barMinW ? { width: `${barMinW}px` } : undefined}
                                                    >
                                                        <span className="text-[9px] font-semibold text-[rgb(var(--color-text-tertiary))]">
                                                            {showLabel ? day.label : ''}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}

                </Card>

            {/* Quick Actions & Templates */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Actions */}
                <Card className="p-6">
                    <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <Link to={ROUTES.BUILDER} className="flex items-center gap-3 p-3 bg-[rgb(var(--color-surface-alt))] rounded-xl hover:bg-indigo-50 transition">
                            <Globe className="h-5 w-5 text-indigo-600" />
                            <div>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Edit Website</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))]">Open in builder</p>
                            </div>
                        </Link>
                        <Link to={ROUTES.TEMPLATES} className="flex items-center gap-3 p-3 bg-[rgb(var(--color-surface-alt))] rounded-xl hover:bg-indigo-50 transition">
                            <Activity className="h-5 w-5 text-indigo-600" />
                            <div>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Browse Templates</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))]">Find a new design</p>
                            </div>
                        </Link>
                    </div>
                </Card>

                {/* Template Recommendations */}
                <Card className="p-6 lg:col-span-2">
                    <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] mb-4">Recommended Templates</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {templateCards.map((template) => (
                            <div key={template.title} className={`p-4 rounded-xl bg-gradient-to-br ${template.accent} border border-[rgb(var(--color-border))]`}>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">{template.title}</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))] mt-1">{template.subtitle}</p>
                                <Link to={ROUTES.TEMPLATES} className="inline-flex items-center gap-1 mt-3 text-[10px] font-bold text-indigo-600 hover:text-indigo-700">
                                    Use template <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}