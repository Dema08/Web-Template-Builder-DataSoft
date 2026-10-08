import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SectionRenderer from '@builder/components/sections/SectionRenderer';
import { useBuilderStore } from '@builder/stores/builderStore';
import http from '@shared/api/http';
import {
    Monitor,
    Tablet,
    Smartphone,
    RotateCw,
    X,
    Eye,
    ZoomIn,
    Check,
    ArrowLeft,
} from 'lucide-react';

/**
 * PublicSitePage
 *
 * Halaman publik yang menampilkan website yang sudah dipublish oleh user.
 * Diakses via: /public/site?slug=nama-website atau /p/:slug
 * Tidak memerlukan autentikasi.
 *
 * CSS Isolation: Menggunakan .public-site-wrapper untuk mengisolasi CSS
 * dashboard agar tidak mempengaruhi tampilan website yang dipublish.
 * Semua garis/border/ring dari builder UI dihilangkan sepenuhnya.
 */
export default function PublicSitePage() {
    const { slug: pathSlug } = useParams();
    const [searchParams] = useSearchParams();
    const slug = pathSlug || searchParams.get('slug');
    const isPreviewParam = searchParams.get('preview') === 'true' || searchParams.get('preview') === '1' || window.location.pathname.startsWith('/preview/site');

    const [siteData, setSiteData] = useState(null);
    const [sections, setSections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [previewDevice, setPreviewDevice] = useState('desktop'); // desktop | tablet | mobile
    const [zoom, setZoom] = useState(100); // 100 | 90 | 80 | 75
    const [showZoomMenu, setShowZoomMenu] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0);

    const currentPreviewPageId = useBuilderStore((state) => state.currentPreviewPageId);
    const pages = useBuilderStore((state) => state.pages);
    const loadSections = useBuilderStore((state) => state.loadSections);
    const switchPreviewPage = useBuilderStore((state) => state.switchPreviewPage);

    useEffect(() => {
        const store = useBuilderStore.getState();
        const previousBuilderState = {
            sections: store.sections,
            landingSections: store.landingSections,
            pages: store.pages,
            currentPageId: store.currentPageId,
            currentPreviewPageId: store.currentPreviewPageId,
            history: store.history,
            historyIndex: store.historyIndex,
            selectedSectionId: store.selectedSectionId,
            selectedComponentId: store.selectedComponentId,
            isPreviewMode: store.isPreviewMode,
        };

        store.setIsPreviewMode(true);

        return () => {
            useBuilderStore.setState(previousBuilderState);
        };
    }, []);

    // Override body/html dari dashboard CSS saat halaman publik dimuat.
    // CSS global app.css mengaplikasikan warna dashboard ke html/body via CSS variables.
    // Kita reset semua di sini agar website yang dipublish tampil normal.
    useEffect(() => {
        const htmlEl = document.documentElement;
        const bodyEl = document.body;

        // Simpan nilai sebelumnya
        const prevBodyBg = bodyEl.style.backgroundColor;
        const prevBodyColor = bodyEl.style.color;
        const prevHtmlBg = htmlEl.style.backgroundColor;
        const prevHtmlColor = htmlEl.style.color;
        const prevHtmlTransition = htmlEl.style.transition;
        const prevBodyTransition = bodyEl.style.transition;

        // Reset background dan color agar tidak terpengaruh CSS variable dashboard
        htmlEl.style.setProperty('background-color', 'transparent', 'important');
        htmlEl.style.setProperty('color', 'inherit', 'important');
        htmlEl.style.setProperty('transition', 'none', 'important');
        bodyEl.style.setProperty('background-color', 'transparent', 'important');
        bodyEl.style.setProperty('color', 'inherit', 'important');
        bodyEl.style.setProperty('transition', 'none', 'important');

        // Tambahkan class untuk override CSS spesifik
        bodyEl.classList.add('public-site-body');
        htmlEl.classList.add('public-html-body');

        return () => {
            htmlEl.style.backgroundColor = prevHtmlBg;
            htmlEl.style.color = prevHtmlColor;
            htmlEl.style.transition = prevHtmlTransition;
            bodyEl.style.backgroundColor = prevBodyBg;
            bodyEl.style.color = prevBodyColor;
            bodyEl.style.transition = prevBodyTransition;
            bodyEl.classList.remove('public-site-body');
            htmlEl.classList.remove('public-html-body');
        };
    }, []);

    useEffect(() => {
        const fetchSite = async () => {
            setIsLoading(true);
            setError(null);
            try {
                let url = '/public/site';
                const queryParts = [];
                if (slug) queryParts.push(`slug=${encodeURIComponent(slug)}`);
                if (isPreviewParam) queryParts.push('preview=true');
                if (queryParts.length > 0) {
                    url += `?${queryParts.join('&')}`;
                }

                const { data } = await http.get(url);
                const site = data?.data ?? data;
                setSiteData(site);

                let loadedSections = [];

                if (site?.sections && Array.isArray(site.sections)) {
                    loadedSections = site.sections;
                } else if (site?.html) {
                    // Legacy mode: render raw HTML/CSS
                    setSiteData({ ...site, legacyMode: true });
                    setIsLoading(false);
                    return;
                }

                setSections(loadedSections);
                if (Array.isArray(site?.sections)) {
                    loadSections(site.sections, site.pages || {});
                }
            } catch (err) {
                setError('Website tidak ditemukan atau belum dipublish.');
                console.error('Public site fetch error:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSite();
    }, [slug, isPreviewParam, loadSections, refreshKey]);

    // Update document title & meta description
    useEffect(() => {
        if (siteData?.site_name) {
            document.title = siteData.site_name;
        }
        return () => {
            document.title = 'Microdata Web Builder';
        };
    }, [siteData]);

    if (isLoading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8fafc',
                fontFamily: 'Inter, -apple-system, sans-serif',
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        border: '4px solid #e0e7ff',
                        borderTopColor: '#4f46e5',
                        borderRadius: '50%',
                        animation: 'pub-spin 0.75s linear infinite',
                        margin: '0 auto 16px',
                    }} />
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#64748b', margin: 0 }}>
                        Memuat website...
                    </p>
                </div>
                <style>{`@keyframes pub-spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (error || !siteData) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8fafc',
                padding: '16px',
                fontFamily: 'Inter, -apple-system, sans-serif',
            }}>
                <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                    <div style={{ fontSize: '64px', marginBottom: '16px' }}>🌐</div>
                    <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '8px', margin: '0 0 8px' }}>
                        Website Tidak Ditemukan
                    </h1>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 24px' }}>
                        Website dengan slug <strong style={{ color: '#4f46e5' }}>"{slug}"</strong> tidak
                        ditemukan atau belum dipublish.
                    </p>
                    <a
                        href="/"
                        style={{
                            display: 'inline-block',
                            padding: '10px 24px',
                            backgroundColor: '#4f46e5',
                            color: '#ffffff',
                            fontSize: '14px',
                            fontWeight: 700,
                            borderRadius: '12px',
                            textDecoration: 'none',
                        }}
                    >
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        );
    }

    const isEffectivePreview = Boolean(siteData?.is_preview || isPreviewParam);

    // State: Website pending approval (hanya jika BUKAN mode pratinjau)
    if (!isEffectivePreview && siteData.status === 'pending') {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8fafc',
                padding: '24px',
                fontFamily: 'Inter, -apple-system, sans-serif',
            }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '480px',
                    backgroundColor: '#ffffff',
                    padding: '36px 28px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
                    border: '1px solid #f1f5f9'
                }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: '#fef3c7',
                        color: '#d97706',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        margin: '0 auto 20px',
                    }}>
                        ⏳
                    </div>
                    <span style={{
                        display: 'inline-block',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        backgroundColor: '#fffbeb',
                        color: '#b45309',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        marginBottom: '12px',
                        border: '1px solid #fef3c7'
                    }}>
                        Menunggu Verifikasi Admin
                    </span>
                    <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
                        {siteData.site_name || 'Website'} Sedang Ditinjau
                    </h1>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 24px', lineHeight: 1.6 }}>
                        Subdomain <strong style={{ color: '#4f46e5' }}>{siteData.subdomain}.web.microdata.co.id</strong> telah berhasil diajukan untuk publikasi dan saat ini sedang dalam proses review oleh Administrator.
                    </p>
                    <div style={{
                        backgroundColor: '#f8fafc',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        color: '#64748b',
                        border: '1px solid #e2e8f0'
                    }}>
                        Website akan aktif dan dapat diakses publik setelah disetujui.
                    </div>
                </div>
            </div>
        );
    }

    // State: Website rejected (hanya jika BUKAN mode pratinjau)
    if (!isEffectivePreview && siteData.status === 'rejected') {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8fafc',
                padding: '24px',
                fontFamily: 'Inter, -apple-system, sans-serif',
            }}>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '480px',
                    backgroundColor: '#ffffff',
                    padding: '36px 28px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
                    border: '1px solid #f1f5f9'
                }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        backgroundColor: '#fee2e2',
                        color: '#ef4444',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px',
                        margin: '0 auto 20px',
                    }}>
                        🚫
                    </div>
                    <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', margin: '0 0 10px' }}>
                        Website Belum Tersedia
                    </h1>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 20px', lineHeight: 1.6 }}>
                        Permintaan publikasi untuk website ini belum dapat disetujui atau memerlukan perbaikan dari pemilik website.
                    </p>
                </div>
            </div>
        );
    }

    // Handle Close Preview
    const handleClosePreview = () => {
        if (typeof window !== 'undefined' && window.opener) {
            window.close();
        } else {
            window.history.back();
        }
    };

    const handleRefresh = () => {
        setRefreshKey((prev) => prev + 1);
    };

    const getViewportBadge = () => {
        switch (previewDevice) {
            case 'mobile':
                return 'Mobile • 375px';
            case 'tablet':
                return 'Tablet • 768px';
            case 'desktop':
            default:
                return 'Desktop • 100%';
        }
    };

    // Render Preview Top Floating Bar
    const renderPreviewHeader = () => {
        if (!isEffectivePreview) return null;

        const statusBg = siteData.status === 'published' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
            : siteData.status === 'pending' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
            : 'bg-slate-700 text-slate-300 border-slate-600';

        const statusLabel = siteData.status === 'published' ? 'Live'
            : siteData.status === 'pending' ? 'Menunggu Approval'
            : 'Draf';

        return (
            <header className="fixed top-0 left-0 right-0 h-14 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 text-white z-50 px-4 sm:px-6 flex items-center justify-between shadow-2xl">
                {/* Left: Live Indicator & Title */}
                <div className="flex items-center gap-2.5 min-w-0">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <div className="flex flex-col min-w-0">
                        <span className="font-extrabold text-xs text-white flex items-center gap-1.5 truncate">
                            <Eye className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                            Live Website Preview
                            <span className="ml-1 text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-md font-semibold hidden md:inline-block">
                                {getViewportBadge()}
                            </span>
                            <span className={`ml-1 text-[9px] font-bold px-1.5 py-0.2 rounded border hidden sm:inline-block ${statusBg}`}>
                                {statusLabel}
                            </span>
                        </span>
                        <span className="text-[10px] text-slate-400 truncate max-w-[150px] sm:max-w-[260px]">
                            {siteData.site_name} ({siteData.subdomain}.web.microdata.co.id)
                        </span>
                    </div>
                </div>

                {/* Center: Viewport Switcher */}
                <div className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/60 gap-1 shadow-inner">
                    <button
                        type="button"
                        onClick={() => setPreviewDevice('desktop')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                            previewDevice === 'desktop'
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                        }`}
                        title="Desktop View (Full Width)"
                    >
                        <Monitor className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Desktop</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setPreviewDevice('tablet')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                            previewDevice === 'tablet'
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                        }`}
                        title="Tablet View (768px)"
                    >
                        <Tablet className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Tablet</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setPreviewDevice('mobile')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                            previewDevice === 'mobile'
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                        }`}
                        title="Mobile View (375px)"
                    >
                        <Smartphone className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Mobile</span>
                    </button>
                </div>

                {/* Right: Zoom Controls, Refresh & Close */}
                <div className="flex items-center gap-2">
                    {/* Zoom Selector Dropdown */}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setShowZoomMenu(!showZoomMenu)}
                            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-bold border border-slate-700/60 transition"
                            title="Zoom Scale"
                        >
                            <ZoomIn className="h-3.5 w-3.5 text-indigo-400" />
                            <span>{zoom}%</span>
                        </button>

                        {showZoomMenu && (
                            <div className="absolute right-0 mt-2 w-32 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50">
                                {[100, 90, 80, 75].map((z) => (
                                    <button
                                        key={z}
                                        type="button"
                                        onClick={() => {
                                            setZoom(z);
                                            setShowZoomMenu(false);
                                        }}
                                        className={`w-full text-left px-3 py-1.5 text-xs font-semibold flex items-center justify-between transition ${
                                            zoom === z ? 'bg-indigo-600/30 text-indigo-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                        }`}
                                    >
                                        <span>{z}%</span>
                                        {zoom === z && <Check className="h-3.5 w-3.5 text-indigo-400" />}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={handleRefresh}
                        className="p-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700/60 transition"
                        title="Refresh Live Data Sync"
                    >
                        <RotateCw className="h-4 w-4" />
                    </button>

                    <button
                        type="button"
                        onClick={handleClosePreview}
                        className="p-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition"
                        title="Tutup Pratinjau"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </header>
        );
    };

    // Render Website Content Inside Target Device Frame
    const renderContent = () => {
        // Legacy mode: website disimpan sebagai raw HTML + CSS
        if (siteData.legacyMode && siteData.html) {
            const readOnlyScript = '<script>document.designMode="off";document.querySelectorAll("[contenteditable]").forEach((element)=>element.setAttribute("contenteditable","false"));</script>';
            const srcDoc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${siteData.css || ''} * { outline: none; } </style></head><body style="margin:0;padding:0;">${siteData.html}${readOnlyScript}</body></html>`;

            return (
                <iframe
                    title={siteData.site_name || 'Published site'}
                    srcDoc={srcDoc}
                    sandbox="allow-scripts allow-popups allow-forms allow-downloads"
                    className="block w-full min-h-screen border-0"
                    style={{ display: 'block', width: '100%', minHeight: '100vh', border: 'none', outline: 'none' }}
                />
            );
        }

        // Modern mode: website disimpan sebagai JSON sections
        if (sections && sections.length > 0) {
            const activeSections = currentPreviewPageId === 'landing'
                ? sections
                : (pages[currentPreviewPageId]?.sections || []);

            return (
                <div className="public-site-wrapper w-full">
                    {activeSections.map((section) => (
                        <SectionRenderer
                            key={section.id}
                            section={section}
                            isPreview={true}
                            isSelected={false}
                            onClick={() => {}}
                        />
                    ))}
                </div>
            );
        }

        // Fallback: data ada tapi tidak ada sections
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-sans">
                <div className="text-center max-w-md">
                    <div className="text-6xl mb-4">🚧</div>
                    <h1 className="text-2xl font-extrabold text-slate-900 mb-2">
                        Website Sedang Dibangun
                    </h1>
                    <p className="text-sm text-slate-600">
                        Website <strong className="text-indigo-600">{siteData.site_name}</strong> sedang dalam proses pengembangan. Silakan kunjungi kembali nanti.
                    </p>
                </div>
            </div>
        );
    };

    // Mode Preview Viewport Container (Identik dengan AdminTemplatePreview di Builder)
    if (isEffectivePreview) {
        return (
            <div className="min-h-screen bg-slate-950 font-sans relative selection:bg-indigo-500 selection:text-white overflow-y-auto">
                {renderPreviewHeader()}

                {/* Subpage banner in preview mode if viewing a subpage */}
                {currentPreviewPageId && currentPreviewPageId !== 'landing' && (
                    <div className="fixed top-14 left-0 right-0 bg-indigo-900 text-white px-6 py-3 flex items-center justify-between z-40 shadow-xl border-b border-indigo-800">
                        <div className="flex items-center gap-2.5 text-xs font-bold">
                            <span className="px-2 py-0.5 bg-indigo-600 rounded-md text-[10px] uppercase">Subpage Preview</span>
                            <span>Viewing Page: <strong className="underline decoration-indigo-400">{pages?.[currentPreviewPageId]?.name || currentPreviewPageId}</strong></span>
                        </div>
                        <button
                            type="button"
                            onClick={() => switchPreviewPage('landing')}
                            className="flex items-center gap-2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold shadow-md transition-all duration-200"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            <span>Kembali ke Landing Page</span>
                        </button>
                    </div>
                )}

                {/* Main Preview Container with Zoom Scale & Realistic Device Mockups */}
                <div className={`pb-16 px-4 transition-all duration-300 flex justify-center items-start min-h-[calc(100vh-3.5rem)] ${currentPreviewPageId && currentPreviewPageId !== 'landing' ? 'pt-28' : 'pt-20'}`}>
                    <div
                        style={{
                            transform: zoom !== 100 ? `scale(${zoom / 100})` : 'none',
                            transformOrigin: 'top center',
                            width: previewDevice === 'desktop' ? '100%' : undefined,
                        }}
                        className="transition-transform duration-300 w-full flex justify-center"
                    >
                        {/* MOBILE VIEWPORT MOCKUP (375px) */}
                        {previewDevice === 'mobile' && (
                            <div className="w-[375px] max-w-full bg-slate-900 border-[10px] border-slate-900 rounded-[48px] shadow-2xl shadow-indigo-950/80 relative transition-all duration-300 my-2">
                                {/* iPhone Dynamic Island / Speaker Notch */}
                                <div className="w-full bg-slate-900 pt-3 pb-2 flex justify-center items-center rounded-t-[38px] select-none">
                                    <div className="w-28 h-4 bg-slate-950 rounded-full flex items-center justify-between px-3 border border-slate-800/60">
                                        <span className="w-2 h-2 rounded-full bg-slate-800"></span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-950"></span>
                                    </div>
                                </div>

                                {/* Scrollable Screen Content */}
                                <div className="builder-canvas-mobile w-full bg-white min-h-[667px] max-h-[820px] overflow-y-auto overflow-x-hidden ds-scrollbar-thin rounded-[22px]">
                                    {renderContent()}
                                </div>

                                {/* iPhone Home Bar */}
                                <div className="w-full bg-slate-900 py-2.5 flex justify-center items-center rounded-b-[38px] select-none">
                                    <div className="w-32 h-1 bg-slate-500/50 rounded-full"></div>
                                </div>
                            </div>
                        )}

                        {/* TABLET VIEWPORT MOCKUP (768px) */}
                        {previewDevice === 'tablet' && (
                            <div className="w-[768px] max-w-full bg-slate-900 border-[12px] border-slate-900 rounded-[32px] shadow-2xl shadow-indigo-950/80 relative transition-all duration-300 my-2">
                                {/* iPad Camera Dot */}
                                <div className="w-full bg-slate-900 pt-2.5 pb-1.5 flex justify-center items-center rounded-t-[20px] select-none">
                                    <div className="w-3 h-3 bg-slate-950 rounded-full border border-slate-800"></div>
                                </div>

                                {/* Scrollable Screen Content */}
                                <div className="builder-canvas-tablet w-full bg-white min-h-[720px] max-h-[860px] overflow-y-auto overflow-x-hidden ds-scrollbar-thin rounded-[12px]">
                                    {renderContent()}
                                </div>

                                {/* iPad Home Bar */}
                                <div className="w-full bg-slate-900 py-2 flex justify-center items-center rounded-b-[20px] select-none">
                                    <div className="w-36 h-1 bg-slate-500/50 rounded-full"></div>
                                </div>
                            </div>
                        )}

                        {/* DESKTOP VIEWPORT MOCKUP (Full Width Browser Frame macOS Style) */}
                        {previewDevice === 'desktop' && (
                            <div className="w-full max-w-[1536px] mx-auto bg-white rounded-2xl shadow-2xl border border-slate-800/80 overflow-hidden transition-all duration-300 my-2">
                                {/* macOS Browser Bar Mockup */}
                                <div className="w-full bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-slate-400 text-xs select-none">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block shadow-xs"></span>
                                            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-xs"></span>
                                            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-xs"></span>
                                        </div>
                                    </div>
                                    <div className="flex-1 max-w-md bg-slate-800/90 rounded-lg px-3 py-1 text-[11px] text-slate-300 flex items-center justify-center gap-2 border border-slate-700/60 mx-4 shadow-inner">
                                        <span className="text-emerald-400 font-bold">🔒 https://</span>
                                        <span className="text-slate-200 font-mono truncate">
                                            {siteData.subdomain ? `${siteData.subdomain}.web.microdata.co.id` : 'preview.microdata.co.id'}
                                        </span>
                                    </div>
                                    <div className="text-[10px] text-slate-400 font-bold hidden sm:block bg-slate-800 px-2 py-0.5 rounded">
                                        Desktop • 100%
                                    </div>
                                </div>

                                {/* Desktop Website Canvas */}
                                <div className="builder-canvas-desktop w-full bg-white min-h-[calc(100vh-8rem)]">
                                    {renderContent()}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Public Live Site View (Bukan Mode Preview)
    return (
        <div className="w-full min-h-screen bg-white">
            {renderContent()}
        </div>
    );
}
