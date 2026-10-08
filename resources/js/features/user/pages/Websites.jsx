import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    Globe,
    Search,
    ExternalLink,
    Edit3,
    Trash2,
    CheckCircle2,
    Clock,
    Eye,
    Camera,
    X,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Card, Button, Spinner, StatusBadge, ConfirmModal } from '@shared/components/ui';
import { toast } from '@store';
import websiteApi from '@api/website';
import UploadThumbnailButton from '@shared/components/UploadThumbnailButton';

export default function Websites() {
    const navigate = useNavigate();
    const { data: websites = [], isLoading: isWebsiteLoading, isError: isWebsiteError, refetch } = useQuery({
        queryKey: ['websites'],
        queryFn: websiteApi.getWebsites,
    });
    const { data: quota } = useQuery({
        queryKey: ['website-quota'],
        queryFn: websiteApi.getQuota,
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [uploadTarget, setUploadTarget] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState('');
    const [isUploadingThumbnail, setIsUploadingThumbnail] = useState(false);
    const [thumbnailError, setThumbnailError] = useState('');

    const [siteToDelete, setSiteToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [rejectionModalData, setRejectionModalData] = useState(null);

    const websitesList = useMemo(() => {
        return websites.map((website) => {
            const slug = website.slug || 'my-website';
            const publicUrl = website.url_subdomain || `https://${encodeURIComponent(slug)}.web.microdata.co.id`;
            const statusKey = website.status || 'draft';

            return {
                id: website.id,
                name: website.name || 'Website Perusahaan Saya',
                domain: publicUrl,
                publicPath: publicUrl,
                slug,
                status: statusKey,
                isPending: statusKey === 'pending',
                isPublished: statusKey === 'published',
                isRejected: statusKey === 'rejected',
                rejectionReason: website.rejection_reason || null,
                requestedAt: website.requested_at
                    ? new Date(website.requested_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                    : null,
                updatedAt: website.updated_at
                    ? new Date(website.updated_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
                    : 'Baru saja',
                thumbnail: website.thumbnail_url || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
                templateName: 'Microdata Website Template',
                viewsCount: website.views_count || 0,
                monthlyViewsCount: website.monthly_views_count || 0,
                thumbnailUrl: website.thumbnail_url || null,
            };
        });
    }, [websites]);

    const totalMonthlyViews = useMemo(() => {
        return websitesList
            .filter((site) => site.status === 'Published')
            .reduce((sum, site) => sum + (site.monthlyViewsCount || site.viewsCount || 0), 0);
    }, [websitesList]);

    const filteredWebsites = websitesList.filter((site) => {
        const matchesSearch =
            site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            site.domain.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    const handleDeleteWebsite = (id, name) => {
        setSiteToDelete({ id, name });
        setIsDeleteModalOpen(true);
    };

    const openThumbnailModal = (website) => {
        setUploadTarget(website);
        setThumbnailPreview(website.thumbnail || '');
        setThumbnailError('');
    };

    const closeThumbnailModal = () => {
        setUploadTarget(null);
        setThumbnailPreview('');
        setThumbnailError('');
    };

    const handleDeleteThumbnail = async () => {
        if (!uploadTarget) return;

        try {
            setIsUploadingThumbnail(true);
            await websiteApi.deleteWebsiteThumbnail(uploadTarget.id);
            await refetch();
            toast.success('Gambar card website dihapus.', 'Berhasil');
            setUploadTarget(null);
            setThumbnailPreview('');
        } catch (error) {
            setThumbnailError(error.response?.data?.message || 'Gagal menghapus gambar.');
        } finally {
            setIsUploadingThumbnail(false);
        }
    };

    const handleConfirmDeleteWebsite = async () => {
        if (!siteToDelete) return;
        try {
            await websiteApi.deleteWebsite(siteToDelete.id);
            await refetch();
            toast.success(`Website "${siteToDelete.name}" dihapus.`, 'Website Dihapus');
            setIsDeleteModalOpen(false);
            setSiteToDelete(null);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Gagal menghapus website.', 'Galat');
        }
    };


    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Website Published Saya</h1>
                <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                    Kelola website yang sudah dipublikasikan ke subdomain atau custom domain Anda.
                </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center">
                        <Globe className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Total Website</p>
                        <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">{websitesList.length}</p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Situs Terpublikasi</p>
                        <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">
                            {websitesList.filter((w) => w.status === 'Published').length}
                        </p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Eye className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Total Kunjungan Bulanan</p>
                        <p className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">
                            {totalMonthlyViews >= 10000
                                ? `${(totalMonthlyViews / 1000).toFixed(1)}k`
                                : totalMonthlyViews.toLocaleString('id-ID')}
                        </p>
                    </div>
                </Card>
            </div>

            {quota && (
                <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-900">
                    Website terpublikasi: <strong>{quota.current} / {quota.unlimited ? 'Tanpa batas' : quota.max}</strong>
                    <span className="text-indigo-700"> (Paket {quota.package})</span>
                </div>
            )}

            {/* Search & Filter Toolbar - Modern Premium Design */}
            <div className="bg-[rgb(var(--color-surface))] rounded-2xl border border-[rgb(var(--color-border))] p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row items-stretch gap-4">
                    {/* Search Bar - Primary Focus (60-70% width) */}
                    <div className="relative flex-1 lg:max-w-[65%]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari website berdasarkan nama atau domain..."
                            className="w-full h-[52px] pl-12 pr-4 bg-[rgb(var(--color-surface-alt))] border-2 border-[rgb(var(--color-border))] rounded-xl text-sm text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all"
                        />
                    </div>

                </div>
            </div>

            {/* Grid of Website Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isWebsiteLoading ? (
                    <div className="col-span-full flex justify-center py-12"><Spinner /></div>
                ) : isWebsiteError ? (
                    <p className="col-span-full text-center text-sm text-red-600">Gagal memuat daftar website.</p>
                ) : filteredWebsites.length === 0 ? (
                    <p className="col-span-full text-center text-sm text-[rgb(var(--color-text-secondary))] py-12">
                        Belum ada website untuk ditampilkan.
                    </p>
                ) : filteredWebsites.map((site) => (
                    <Card
                        key={site.id}
                        className="overflow-hidden flex flex-col group hover:shadow-md transition-all duration-200"
                    >
                        {/* Thumbnail Image Header */}
                        <div className="relative h-44 bg-[rgb(var(--color-surface-alt))] overflow-hidden border-b border-[rgb(var(--color-border))]">
                            <img
                                src={site.thumbnail}
                                alt={site.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                            <button
                                type="button"
                                onClick={() => openThumbnailModal(site)}
                                className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 text-[10px] font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white"
                                title="Unggah thumbnail"
                            >
                                <Camera className="h-3.5 w-3.5" />
                                <span>{site.thumbnail && site.thumbnail !== 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80' ? 'Ubah' : 'Add'}</span>
                            </button>
                            <div className="absolute top-3 left-3">
                                <StatusBadge status={site.status} />
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div>
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] truncate group-hover:text-indigo-600 transition">
                                        {site.name}
                                    </h3>
                                </div>

                                {site.isRejected ? (
                                    <div className="mt-2 p-2.5 bg-rose-50 border border-rose-200 rounded-xl">
                                        <div className="flex items-center justify-between text-xs font-bold text-rose-700">
                                            <span>Publikasi Ditolak</span>
                                            {site.rejectionReason && (
                                                <button
                                                    type="button"
                                                    onClick={() => setRejectionModalData(site)}
                                                    className="underline hover:text-rose-900"
                                                >
                                                    Lihat Alasan
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ) : site.isPending ? (
                                    <div className="mt-2 p-2.5 bg-amber-50 border border-amber-200 rounded-xl">
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-800">
                                            <Clock className="h-3.5 w-3.5 animate-pulse text-amber-600 shrink-0" />
                                            <span className="truncate">Menunggu peninjauan admin</span>
                                        </div>
                                        <p className="text-[11px] text-amber-700 mt-1 truncate">
                                            Diajukan: {site.requestedAt || 'Baru saja'}
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-xs text-indigo-600 font-medium mt-1 flex items-center gap-1">
                                        <Globe className="h-3.5 w-3.5 shrink-0" />
                                        <a
                                            href={site.publicPath}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="truncate hover:underline"
                                            title={`Buka ${site.publicPath} di tab baru`}
                                        >
                                            {site.domain}
                                        </a>
                                    </p>
                                )}

                                <p className="text-[11px] text-[rgb(var(--color-text-tertiary))] mt-2 flex items-center justify-between gap-1">
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {site.updatedAt}
                                    </span>
                                    {site.isPublished && (
                                        <span className="flex items-center gap-1 font-semibold text-indigo-600">
                                            <Eye className="h-3 w-3" /> {site.monthlyViewsCount.toLocaleString('id-ID')} kunjungan
                                        </span>
                                    )}
                                </p>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="pt-3 border-t border-[rgb(var(--color-border))] flex items-center justify-between gap-2">
                                <a
                                    href={site.isPublished ? site.publicPath : `/p/${site.slug}?preview=true`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-[rgb(var(--color-text-secondary))] hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition border border-[rgb(var(--color-border))]"
                                    title={site.isPublished ? "Lihat Situs Live" : "Pratinjau Website"}
                                >
                                    <ExternalLink className="h-4 w-4" />
                                </a>

                                <Link
                                    to={`${ROUTES.BUILDER}?website_id=${site.id}`}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow-xs"
                                >
                                    <Edit3 className="h-3.5 w-3.5" />
                                    <span>Ubah di Builder</span>
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => handleDeleteWebsite(site.id, site.name)}
                                    className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 hover:bg-red-50 rounded-xl transition border border-[rgb(var(--color-border))]"
                                    title="Hapus Website"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {uploadTarget && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">Website Thumbnail</p>
                                <h3 className="mt-1 text-xl font-extrabold text-slate-900">{uploadTarget.name}</h3>
                            </div>
                            <button
                                type="button"
                                onClick={closeThumbnailModal}
                                className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                                aria-label="Tutup"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                            {thumbnailPreview ? (
                                <img src={thumbnailPreview} alt="Preview thumbnail" className="h-56 w-full object-cover" />
                            ) : (
                                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                                    <Camera className="h-12 w-12" />
                                </div>
                            )}
                        </div>

                        <UploadThumbnailButton
                            website={uploadTarget}
                            onSuccess={async () => {
                                await refetch();
                                toast.success('Gambar card website berhasil diupdate.', 'Berhasil');
                                closeThumbnailModal();
                            }}
                            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-indigo-300 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 disabled:cursor-wait disabled:opacity-60"
                        >
                            <Camera className="h-4 w-4" />
                            Pilih gambar untuk upload
                        </UploadThumbnailButton>

                        {thumbnailError && (
                            <p className="mt-3 text-sm text-red-600">{thumbnailError}</p>
                        )}

                        <div className="mt-5 flex items-center justify-end gap-2">
                            {uploadTarget.thumbnailUrl && (
                                <button
                                    type="button"
                                    onClick={handleDeleteThumbnail}
                                    disabled={isUploadingThumbnail}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-60"
                                >
                                    <Trash2 className="h-4 w-4" />
                                    Hapus
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={closeThumbnailModal}
                                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Website Confirm Modal */}
            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setSiteToDelete(null);
                }}
                onConfirm={handleConfirmDeleteWebsite}
                title="Hapus Website"
                description="Apakah Anda yakin ingin menghapus website ini? Deployment dan data terkait akan dihapus."
                variant="danger"
                icon={Trash2}
                confirmText="Ya, Hapus Website"
                cancelText="Batal"
                details={
                    siteToDelete && (
                        <div>
                            <p className="font-extrabold text-[rgb(var(--color-text-primary))] text-sm">{siteToDelete.name}</p>
                        </div>
                    )
                }
            />

            {/* Rejection Details Modal */}
            {rejectionModalData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-xs">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                                    !
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-base">Alasan Penolakan Publikasi</h3>
                                    <p className="text-xs text-slate-500">{rejectionModalData.name}</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setRejectionModalData(null)}
                                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="my-5 rounded-xl border border-rose-200 bg-rose-50/70 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-rose-800 mb-1">
                                Catatan dari Admin:
                            </p>
                            <p className="text-sm text-rose-900 whitespace-pre-wrap leading-relaxed">
                                {rejectionModalData.rejectionReason || 'Tidak ada catatan spesifik dari administrator.'}
                            </p>
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed">
                            Anda dapat memperbaiki website di Builder sesuai catatan di atas, kemudian melakukan pengajuan publikasi ulang.
                        </p>

                        <div className="mt-6 flex items-center justify-end gap-2">
                            <Link
                                to={`${ROUTES.BUILDER}?website_id=${rejectionModalData.id}`}
                                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition"
                                onClick={() => setRejectionModalData(null)}
                            >
                                <Edit3 className="h-3.5 w-3.5" />
                                <span>Perbaiki di Builder</span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setRejectionModalData(null)}
                                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
