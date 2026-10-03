import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import SectionRenderer from '@builder/components/sections/SectionRenderer';
import http from '@shared/api/http';

/**
 * PublicSitePage
 *
 * Halaman publik yang menampilkan website yang sudah dipublish oleh user.
 * Diakses via: /public/site?slug=nama-website
 * Tidak memerlukan autentikasi.
 */
export default function PublicSitePage() {
    const { slug: pathSlug } = useParams();
    const [searchParams] = useSearchParams();
    const slug = pathSlug || searchParams.get('slug');

    const [siteData, setSiteData] = useState(null);
    const [sections, setSections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSite = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const url = slug ? `/public/site?slug=${encodeURIComponent(slug)}` : '/public/site';
                const { data } = await http.get(url);
                const site = data?.data ?? data;
                setSiteData(site);

                // Extract sections from published JSON
                let loadedSections = [];

                // Jika response punya field html/css langsung (mode lama), tampilkan via iframe-like div
                // Jika response punya sections array (mode baru via builder JSON), render via SectionRenderer
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

    // Update document title & meta
    useEffect(() => {
        if (siteData?.site_name) {
            document.title = siteData.site_name;
        }
    }, [siteData]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center space-y-4">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-sm font-semibold text-slate-500">Memuat website...</p>
                </div>
            </div>
        );
    }

    if (error || !siteData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
                <div className="text-center max-w-md space-y-4">
                    <div className="text-6xl">🌐</div>
                    <h1 className="text-2xl font-extrabold text-slate-800">Website Tidak Ditemukan</h1>
                    <p className="text-sm text-slate-500">
                        Website dengan slug <strong className="text-indigo-600">"{slug}"</strong> tidak ditemukan
                        atau belum dipublish.
                    </p>
                    <a
                        href="/"
                        className="inline-block mt-4 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition"
                    >
                        Kembali ke Beranda
                    </a>
                </div>
            </div>
        );
    }

    // Legacy mode: website disimpan sebagai raw HTML + CSS
    if (siteData.legacyMode && siteData.html) {
        const srcDoc = `<!doctype html><html><head><meta charset="utf-8"><style>${siteData.css || ''}</style></head><body>${siteData.html}</body></html>`;

        return (
            <iframe
                title={siteData.site_name || 'Published site'}
                srcDoc={srcDoc}
                sandbox="allow-scripts allow-popups"
                className="block w-full min-h-screen border-0"
            />
        );
    }

    // Modern mode: website disimpan sebagai JSON sections
    if (sections && sections.length > 0) {
        return (
            <div className="w-full bg-white">
                {sections.map((section) => (
                    <SectionRenderer
                        key={section.id}
                        section={section}
                        isSelected={false}
                        onClick={() => {}}
                    />
                ))}
            </div>
        );
    }

    // Fallback: data ada tapi tidak ada sections
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center max-w-md space-y-4">
                <div className="text-6xl">🚧</div>
                <h1 className="text-2xl font-extrabold text-slate-800">Website Sedang Dibangun</h1>
                <p className="text-sm text-slate-500">
                    Website <strong className="text-indigo-600">{siteData.site_name}</strong> sedang dalam proses pengembangan.
                    Silakan kunjungi kembali nanti.
                </p>
            </div>
        </div>
    );
}
