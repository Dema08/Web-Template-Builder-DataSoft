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
    CheckCircle2,
    Clock,
    ExternalLink,
    Edit3,
    Camera,
} from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner, Card, StatusBadge, CreateSiteChoiceModal } from '@shared/components/ui';
import { ROUTES } from '@constants';
import { toast, useSettingsStore } from '@store';
import UploadThumbnailButton from '@shared/components/UploadThumbnailButton';

const templateCards = [
    { title: 'Architectural Vanguard', subtitle: 'Premium • Business', accent: 'from-indigo-100 via-white to-white' },
    { title: 'Street Style Hub', subtitle: 'Free • E-commerce', accent: 'from-slate-100 via-white to-white' },
    { title: 'SaaS Foundation', subtitle: 'Premium • Tech', accent: 'from-blue-100 via-white to-white' },
    { title: 'Noir Portfolio', subtitle: 'Premium • Photography', accent: 'from-zinc-100 via-white to-white' },
];

export default function UserDashboard() {
    const { user } = useAuth();
    const [isChoiceOpen, setIsChoiceOpen] = useState(false);
    const [selectedWebsiteId, setSelectedWebsiteId] = useState('');
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
    if (selectedWebsiteId) {
        params.website_id = selectedWebsiteId;
    }
    if (range === 'custom' && startDate && endDate) {
        params.start_date = startDate;
        params.end_date = endDate;
    }

    const { websites = [], published_websites = [], selected_website_id, analytics, isLoading, refetch } = useDashboard(params);
    const { brand_name } = useSettingsStore();

    const userWebsites = Array.isArray(websites) ? websites : [];
    const publishedOnlyWebsites = userWebsites.filter((site) => site.is_published);

    if (isLoading) {
        return (
            <div className="flex h-[50vh] items-center justify-center">
                <Spinner className="h-8 w-8 text-blue-600 animate-spin" />
            </div>
        );
    }

    const firstName = user?.name?.split(' ')[0] || 'User';

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Welcome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                        Selamat datang kembali, {firstName}
                    </h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Berikut ringkasan website Anda hari ini.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={() => setIsChoiceOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-md shadow-blue-600/20 cursor-pointer"
                >
                    <Sparkles className="h-4 w-4" />
                    Buat Website Baru
                </button>
                <CreateSiteChoiceModal isOpen={isChoiceOpen} onClose={() => setIsChoiceOpen(false)} />
            </div>

            {/* User Websites Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">Website Saya</h2>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">
                            Daftar website Anda, status publikasi, dan tautan subdomain.
                        </p>
                    </div>
                    <Link
                        to={ROUTES.WEBSITES}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition"
                    >
                        Kelola Semua ({userWebsites.length}) <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                </div>

                {userWebsites.length === 0 ? (
                    <Card className="p-8 flex flex-col items-center justify-center text-center gap-3">
                        <Globe className="h-10 w-10 text-[rgb(var(--color-text-tertiary))] opacity-30" />
                        <p className="text-sm font-bold text-[rgb(var(--color-text-secondary))]">Belum ada website</p>
                        <p className="text-xs text-[rgb(var(--color-text-tertiary))]">
                            Buat website pertama Anda melalui builder untuk mempublikasikannya ke subdomain.
                        </p>
                        <button
                            type="button"
                            onClick={() => setIsChoiceOpen(true)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition mt-1"
                        >
                            <Sparkles className="h-3.5 w-3.5" />
                            Buat Website
                        </button>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {userWebsites.slice(0, 6).map((site) => {
                            const slug = site.subdomain || site.slug || 'my-website';
                            const statusKey = site.status || (site.is_published ? 'published' : 'draft');
                            const liveUrl = site.url_subdomain || `https://${encodeURIComponent(slug)}.web.microdata.co.id`;
                            const previewUrl = `/p/${encodeURIComponent(slug)}?preview=true`;
                            const targetUrl = statusKey === 'published' ? liveUrl : previewUrl;

                            return (
                                <Card
                                    key={site.id}
                                    className="p-4 flex flex-col justify-between gap-3 hover:shadow-md transition-all duration-200 group"
                                >
                                    <div>
                                        <div className="relative h-28 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-white to-slate-100">
                                            {site.thumbnail_url && (
                                                <img
                                                    src={site.thumbnail_url}
                                                    alt={`${site.name} thumbnail`}
                                                    className="h-full w-full object-cover"
                                                />
                                            )}
                                            <UploadThumbnailButton
                                                website={site}
                                                onSuccess={async () => {
                                                    await refetch();
                                                    toast.success('Thumbnail website berhasil diperbarui.', 'Berhasil');
                                                }}
                                                className="absolute right-2 top-2 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-slate-700 shadow-sm transition hover:bg-white disabled:opacity-60"
                                            >
                                                <Camera className="h-4 w-4" />
                                            </UploadThumbnailButton>
                                        </div>
                                        <div className="flex items-start justify-between gap-2 mt-3">
                                            <div className="flex-1 min-w-0">
                                                <Link
                                                    to={`${ROUTES.BUILDER}?website_id=${site.id}`}
                                                    className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] truncate hover:text-indigo-600 transition block"
                                                >
                                                    {site.name}
                                                </Link>
                                                <a
                                                    href={targetUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[11px] text-indigo-600 font-medium mt-0.5 flex items-center gap-1 truncate hover:text-indigo-700 hover:underline"
                                                    title={`Buka ${targetUrl} di tab baru`}
                                                >
                                                    <Globe className="h-3 w-3 shrink-0" />
                                                    <span className="truncate">{slug}.web.microdata.co.id</span>
                                                </a>
                                            </div>
                                            <StatusBadge status={statusKey} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-1.5 text-[10px] text-[rgb(var(--color-text-tertiary))] mb-2">
                                            {statusKey === 'published' ? (
                                                <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                                            ) : statusKey === 'pending' ? (
                                                <Clock className="h-3 w-3 text-amber-500 shrink-0 animate-pulse" />
                                            ) : (
                                                <Globe className="h-3 w-3 text-slate-400 shrink-0" />
                                            )}
                                            <span>
                                                {statusKey === 'published'
                                                    ? 'Published Live'
                                                    : statusKey === 'pending'
                                                    ? 'Menunggu Review Admin'
                                                    : statusKey === 'rejected'
                                                    ? 'Publikasi Ditolak'
                                                    : 'Draf'}
                                            </span>
                                            {site.template && (
                                                <span className="ml-auto truncate">• {site.template}</span>
                                            )}
                                        </div>

                                        {statusKey === 'rejected' && site.rejection_reason && (
                                            <div className="mb-2 p-2 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 rounded-lg text-[11px] text-rose-700 dark:text-rose-300 leading-tight">
                                                <span className="font-bold">Alasan Ditolak: </span>
                                                {site.rejection_reason}
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2 pt-2 border-t border-[rgb(var(--color-border))]">
                                            <a
                                                href={targetUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 text-[rgb(var(--color-text-secondary))] hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition border border-[rgb(var(--color-border))]"
                                                title={statusKey === 'published' ? 'Buka Situs Live' : 'Pratinjau Website'}
                                            >
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                            <Link
                                                to={`${ROUTES.BUILDER}?website_id=${site.id}`}
                                                className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold rounded-lg transition"
                                            >
                                                <Edit3 className="h-3 w-3" />
                                                Ubah di Builder
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>


            {/* Visitor Analytics Section */}
            <Card className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[rgb(var(--color-border))] pb-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <Activity className="h-5 w-5 text-indigo-600" />
                                <h2 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">
                                    Analitik Pengunjung Website
                                </h2>
                            </div>
                            <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">
                                Pantau dan analisis kunjungan website profil perusahaan Anda yang terpublikasi.
                            </p>
                        </div>

                        {/* Range & Published Website Select Controls */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            {published_websites && published_websites.length > 0 ? (
                                <div className="relative">
                                    <select
                                        value={selectedWebsiteId || selected_website_id || ''}
                                        onChange={(e) => setSelectedWebsiteId(e.target.value)}
                                        className="appearance-none pl-3 pr-8 py-1.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-bold text-indigo-900 hover:bg-indigo-100/80 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                                        title="Pilih Website Dipublish"
                                    >
                                        {published_websites.map((site) => (
                                            <option key={site.id} value={site.id}>
                                                🌐 {site.name} ({site.domain})
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronRight className="h-3.5 w-3.5 text-indigo-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
                                </div>
                            ) : (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
                                    Belum ada website dipublish
                                </span>
                            )}

                            {range === 'custom' && (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="px-3 py-1.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-semibold text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        title="Tanggal Mulai"
                                    />
                                    <span className="text-xs text-[rgb(var(--color-text-secondary))] font-bold">s/d</span>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="px-3 py-1.5 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-semibold text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        title="Tanggal Selesai"
                                    />
                                </div>
                            )}
                            <div className="relative">
                                <select
                                    value={range}
                                    onChange={(e) => setRange(e.target.value)}
                                    className="appearance-none pl-3 pr-8 py-1.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface))] transition focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                                >
                                    <option value="7days">7 Hari Terakhir</option>
                                    <option value="30days">30 Hari Terakhir</option>
                                    <option value="last_month">Bulan Lalu</option>
                                    <option value="custom">Rentang Kustom...</option>
                                </select>
                                <ChevronRight className="h-3.5 w-3.5 text-[rgb(var(--color-text-secondary))] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold self-start sm:self-auto shrink-0">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                                Trafik Live
                            </span>
                        </div>
                    </div>

                    {/* KPIs grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-[rgb(var(--color-surface-alt))] rounded-xl flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">
                                    {range === '7days' && 'Total Tayangan Halaman (7 hari)'}
                                    {range === '30days' && 'Total Tayangan Halaman (30 hari)'}
                                    {range === 'last_month' && 'Total Tayangan Halaman (Bulan Lalu)'}
                                    {range === 'custom' && 'Total Tayangan Halaman (Kustom)'}
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
                                    {range === '7days' && 'Pengunjung Unik (7 hari)'}
                                    {range === '30days' && 'Pengunjung Unik (30 hari)'}
                                    {range === 'last_month' && 'Pengunjung Unik (Bulan Lalu)'}
                                    {range === 'custom' && 'Pengunjung Unik (Kustom)'}
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
                                        {range === '7days' && 'Kunjungan 7 Hari Terakhir'}
                                        {range === '30days' && 'Kunjungan 30 Hari Terakhir'}
                                        {range === 'last_month' && 'Kunjungan Bulan Lalu'}
                                        {range === 'custom' && 'Kunjungan Rentang Terpilih'}
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
                                                    <p className="text-xs text-[rgb(var(--color-text-tertiary))] font-medium">Tidak ada pengunjung pada periode ini</p>
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

            {/* Aksi Cepat & Templates */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Aksi Cepat */}
                <Card className="p-6">
                    <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] mb-4">Aksi Cepat</h3>
                    <div className="space-y-3">
                        <Link to={ROUTES.BUILDER} className="flex items-center gap-3 p-3 bg-[rgb(var(--color-surface-alt))] rounded-xl hover:bg-indigo-50 transition">
                            <Globe className="h-5 w-5 text-indigo-600" />
                            <div>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Ubah Website</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))]">Buka di builder</p>
                            </div>
                        </Link>
                        <Link to={ROUTES.TEMPLATES} className="flex items-center gap-3 p-3 bg-[rgb(var(--color-surface-alt))] rounded-xl hover:bg-indigo-50 transition">
                            <Activity className="h-5 w-5 text-indigo-600" />
                            <div>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Lihat Template</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))]">Temukan desain baru</p>
                            </div>
                        </Link>
                    </div>
                </Card>

                {/* Rekomendasi Template */}
                <Card className="p-6 lg:col-span-2">
                    <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] mb-4">Rekomendasi Template</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {templateCards.map((template) => (
                            <div key={template.title} className={`p-4 rounded-xl bg-gradient-to-br ${template.accent} border border-[rgb(var(--color-border))]`}>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">{template.title}</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))] mt-1">{template.subtitle}</p>
                                <Link to={ROUTES.TEMPLATES} className="inline-flex items-center gap-1 mt-3 text-[10px] font-bold text-indigo-600 hover:text-indigo-700">
                                    Gunakan template <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}