import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SectionRenderer from '@builder/components/sections/SectionRenderer';
import http from '@shared/api/http';

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

    const [siteData, setSiteData] = useState(null);
    const [sections, setSections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Override body/html background dari dashboard CSS saat halaman publik dimuat.
    // CSS global app.css mengaplikasikan warna dashboard ke html/body — kita reset di sini
    // agar website yang dipublish tampil dengan warna background-nya sendiri.
    useEffect(() => {
        const prevBodyBg = document.body.style.backgroundColor;
        const prevBodyColor = document.body.style.color;
        const prevHtmlBg = document.documentElement.style.backgroundColor;

        document.documentElement.style.setProperty('background-color', 'transparent', 'important');
        document.body.style.setProperty('background-color', 'transparent', 'important');
        document.body.style.setProperty('color', 'inherit', 'important');
        document.body.classList.add('public-site-body');

        return () => {
            document.documentElement.style.backgroundColor = prevHtmlBg;
            document.body.style.backgroundColor = prevBodyBg;
            document.body.style.color = prevBodyColor;
            document.body.classList.remove('public-site-body');
        };
    }, []);

    useEffect(() => {
        const fetchSite = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const url = slug ? `/public/site?slug=${encodeURIComponent(slug)}` : '/public/site';
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
            } catch (err) {
                setError('Website tidak ditemukan atau belum dipublish.');
                console.error('Public site fetch error:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSite();
    }, [slug]);

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

    // Legacy mode: website disimpan sebagai raw HTML + CSS
    if (siteData.legacyMode && siteData.html) {
        const srcDoc = `<!doctype html><html><head><meta charset="utf-8"><style>${siteData.css || ''} * { outline: none; } </style></head><body style="margin:0;padding:0;">${siteData.html}</body></html>`;

        return (
            <iframe
                title={siteData.site_name || 'Published site'}
                srcDoc={srcDoc}
                sandbox="allow-scripts allow-popups"
                style={{ display: 'block', width: '100%', minHeight: '100vh', border: 'none', outline: 'none' }}
            />
        );
    }

    // Modern mode: website disimpan sebagai JSON sections
    // Render di dalam .public-site-wrapper untuk isolasi CSS dari dashboard.
    // Semua ring-*, border builder, dan outline dari Tailwind dihilangkan via CSS class.
    if (sections && sections.length > 0) {
        return (
            <div className="public-site-wrapper">
                {sections.map((section) => (
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
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>🚧</div>
                <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', margin: '0 0 8px' }}>
                    Website Sedang Dibangun
                </h1>
                <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
                    Website <strong style={{ color: '#4f46e5' }}>{siteData.site_name}</strong> sedang
                    dalam proses pengembangan. Silakan kunjungi kembali nanti.
                </p>
            </div>
        </div>
    );
}
