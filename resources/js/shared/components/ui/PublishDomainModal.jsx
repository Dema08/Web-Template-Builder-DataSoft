import { useState, useEffect } from 'react';
import { Globe, Lock, ArrowUpRight, Sparkles, X, Loader2, CheckCircle2, Copy, CircleAlert, Clock, Link2, ExternalLink } from 'lucide-react';
import { useSubscriptionStore } from '@shared/stores/subscriptionStore';
import { useAuthStore } from '@shared/stores/authStore';
import { toast } from '@store';
import { websiteApi } from '@api';

function getPrimaryDomainUrl() {
    if (typeof window === 'undefined') return 'https://web.microdata.co.id';
    const host = window.location.hostname.toLowerCase();
    const port = window.location.port ? `:${window.location.port}` : '';
    if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.localhost')) {
        return `${window.location.protocol}//localhost${port}`;
    }
    if (host.endsWith('.web.microdata.co.id')) {
        return 'https://web.microdata.co.id';
    }
    if (host.endsWith('.microdata.co.id')) {
        return 'https://microdata.co.id';
    }
    return window.location.origin;
}

function getPrimaryDomainName() {
    if (typeof window === 'undefined') return 'domainutama.com';
    const host = window.location.hostname.toLowerCase();
    const port = window.location.port ? `:${window.location.port}` : '';
    if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.localhost')) {
        return `localhost${port}`;
    }
    if (host.endsWith('.web.microdata.co.id')) {
        return 'web.microdata.co.id';
    }
    if (host.endsWith('.microdata.co.id')) {
        return 'microdata.co.id';
    }
    return window.location.host;
}

export default function PublishDomainModal({
    isOpen,
    onClose,
    onPublish,
    initialWebsiteId = null,
    initialSlug = '',
    initialCustomDomain = '',
    initialDomainType = 'subdomain',
    initialIsPublished = false,
    isPublishing = false,
    publishResult = null,
}) {
    const user = useAuthStore((s) => s.user);
    const { openUpgradeModal } = useSubscriptionStore();
    const isAdmin = user?.role === 'admin';

    const normalizedInitialType = (initialDomainType === 'path' || initialDomainType === 'subprefix')
        ? 'subprefix'
        : (initialDomainType || 'subdomain');

    const [domainType, setDomainType] = useState(normalizedInitialType);
    const [publishAction, setPublishAction] = useState('update');
    const [slug, setSlug] = useState(initialSlug || '');
    const [customDomain, setCustomDomain] = useState(initialCustomDomain || '');
    const [slugCheck, setSlugCheck] = useState({ status: 'idle', message: '' });
    const [quota, setQuota] = useState(null);
    const [quotaError, setQuotaError] = useState('');
    const [quotaLoading, setQuotaLoading] = useState(false);

    const primaryBaseUrl = getPrimaryDomainUrl();
    const primaryDomainName = getPrimaryDomainName();

    useEffect(() => {
        if (isOpen) {
            setSlug(initialSlug || '');
            setCustomDomain(initialCustomDomain || '');
            setPublishAction('update');
            setSlugCheck({ status: 'idle', message: '' });
            setQuota(null);
            setQuotaError('');
            setQuotaLoading(true);
            setDomainType(normalizedInitialType);
        }
    }, [isOpen, initialSlug, initialCustomDomain, normalizedInitialType]);

    useEffect(() => {
        if (!isOpen) return undefined;
        let active = true;

        websiteApi.getQuota()
            .then((data) => {
                if (active) setQuota(data);
            })
            .catch((error) => {
                if (active) setQuotaError(error.response?.data?.message || 'Kuota website gagal dimuat.');
            })
            .finally(() => {
                if (active) setQuotaLoading(false);
            });

        return () => {
            active = false;
        };
    }, [isOpen]);

    const cleanSlug = slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    const isSlugFormatValid = cleanSlug.length >= 3
        && cleanSlug.length <= 50
        && slug.trim().toLowerCase() === cleanSlug
        && /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(cleanSlug);

    const isSlugDomain = domainType === 'subdomain' || domainType === 'subprefix';

    useEffect(() => {
        if (!isOpen || !isSlugDomain) {
            setSlugCheck({ status: 'idle', message: '' });
            return undefined;
        }

        if (!isSlugFormatValid) {
            setSlugCheck({
                status: cleanSlug ? 'invalid' : 'idle',
                message: cleanSlug ? 'Slug harus 3–50 karakter, huruf kecil, angka, atau tanda hubung.' : '',
            });
            return undefined;
        }

        let active = true;
        setSlugCheck({ status: 'checking', message: 'Memeriksa ketersediaan alamat...' });
        const timeoutId = window.setTimeout(() => {
            websiteApi.checkSlug(
                cleanSlug,
                publishAction === 'update' ? initialWebsiteId : null,
                publishAction === 'update'
            )
                .then((result) => {
                    if (active) {
                        setSlugCheck({
                            status: result.available ? 'available' : 'unavailable',
                            message: result.message,
                        });
                    }
                })
                .catch((error) => {
                    if (active) {
                        setSlugCheck({
                            status: 'error',
                            message: error.response?.data?.message || 'Alamat gagal diperiksa. Coba lagi.',
                        });
                    }
                });
        }, 400);

        return () => {
            active = false;
            window.clearTimeout(timeoutId);
        };
    }, [isOpen, domainType, isSlugDomain, publishAction, cleanSlug, isSlugFormatValid, initialWebsiteId]);

    if (!isOpen) return null;

    // Derived: can this user use custom domain (based on plan, from quota API)
    const canUseCustomDomain = isAdmin || quota?.can_use_custom_domain === true;
    const cleanCustomDomain = customDomain.trim().toLowerCase().replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
    const isCustomDomainFormatValid = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i.test(cleanCustomDomain);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (domainType === 'custom') {
            if (!canUseCustomDomain || !cleanCustomDomain || !isCustomDomainFormatValid) {
                return;
            }
        }

        if (isSlugDomain && (!isSlugFormatValid || slugCheck.status !== 'available')) {
            return;
        }

        onPublish({
            publish_action: publishAction,
            domain_type: domainType,
            slug: cleanSlug,
            custom_domain: cleanCustomDomain,
            website_id: initialWebsiteId || undefined,
        });
    };

    const handleCopyUrl = async (url) => {
        try {
            await navigator.clipboard.writeText(url);
            toast.success('URL berhasil disalin.', 'Disalin');
        } catch (_error) {
            toast.error('URL tidak dapat disalin. Silakan salin secara manual.', 'Gagal menyalin');
        }
    };

    const handleSelectCustomDomain = () => {
        if (!canUseCustomDomain || publishAction === 'new') {
            return;
        }
        setDomainType('custom');
    };

    if (publishResult) {
        const isSubprefix = publishResult.domain_type === 'subprefix' || publishResult.domain_type === 'path';
        const isCustom = publishResult.domain_type === 'custom';
        const isPending = publishResult.is_pending || publishResult.status === 'pending';

        const subdomainUrl = publishResult.subdomain_url || `https://${cleanSlug}.web.microdata.co.id`;
        const pathUrl = publishResult.path_url || `${primaryBaseUrl}/${cleanSlug}`;
        const customUrl = isCustom ? publishResult.published_url : null;
        const targetActiveUrl = isSubprefix ? pathUrl : (isCustom ? customUrl : subdomainUrl);

        return (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-5 animate-in fade-in zoom-in-95 duration-150" role="dialog" aria-modal="true">
                    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                            {isPending ? (
                                <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-700">
                                    <Clock className="h-7 w-7" />
                                </div>
                            ) : (
                                <div className="p-2.5 rounded-2xl bg-emerald-100 text-emerald-700">
                                    <CheckCircle2 className="h-7 w-7" />
                                </div>
                            )}
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900">
                                    {isPending
                                        ? 'Permintaan Publikasi Terkirim!'
                                        : (publishResult.publish_action === 'new' ? 'Website Baru Berhasil Dibuat' : 'Website Berhasil Dipublikasikan!')}
                                </h3>
                                <p className="text-xs text-slate-500 mt-1">
                                    {isPending
                                        ? 'Website Anda sedang menunggu konfirmasi admin sebelum aktif di subdomain.'
                                        : 'Website Anda telah aktif dan dapat langsung diakses oleh publik.'}
                                </p>
                            </div>
                        </div>
                        <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Sub-Prefix Success Card */}
                    {isSubprefix && (
                        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                                    <Link2 className="h-3.5 w-3.5 text-emerald-600" />
                                    Alamat Website (Sub-Prefix):
                                </p>
                                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                                    Langsung Aktif
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href={pathUrl} target="_blank" rel="noreferrer" className="text-xs text-emerald-700 font-bold underline truncate flex-1 hover:text-emerald-800">
                                    {pathUrl}
                                </a>
                                <button type="button" onClick={() => handleCopyUrl(pathUrl)} className="p-2 rounded-xl bg-white border border-emerald-200 text-slate-600 hover:bg-emerald-50 transition" title="Salin URL">
                                    <Copy className="h-4 w-4 text-emerald-600" />
                                </button>
                                <a href={pathUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white border border-emerald-200 text-slate-600 hover:bg-emerald-50 transition" title="Buka Website">
                                    <ExternalLink className="h-4 w-4 text-emerald-600" />
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Subdomain Success Card */}
                    {!isSubprefix && !isCustom && (
                        <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                    <Globe className="h-3.5 w-3.5 text-indigo-600" />
                                    Alamat Subdomain:
                                </p>
                                {isPending ? (
                                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-extrabold text-[10px]">
                                        Menunggu Persetujuan
                                    </span>
                                ) : (
                                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                                        Aktif
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <a href={subdomainUrl} target="_blank" rel="noreferrer" className="text-xs text-indigo-700 font-bold underline truncate flex-1 hover:text-indigo-800">
                                    {subdomainUrl}
                                </a>
                                <button type="button" onClick={() => handleCopyUrl(subdomainUrl)} className="p-2 rounded-xl bg-white border border-indigo-200 text-slate-600 hover:bg-indigo-50 transition" title="Salin Subdomain">
                                    <Copy className="h-4 w-4 text-indigo-600" />
                                </button>
                                {!isPending && (
                                    <a href={subdomainUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white border border-indigo-200 text-slate-600 hover:bg-indigo-50 transition" title="Buka Website">
                                        <ExternalLink className="h-4 w-4 text-indigo-600" />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Custom Domain Success Card */}
                    {customUrl && (
                        <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-3">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                    <Globe className="h-3.5 w-3.5 text-indigo-600" />
                                    Custom Domain:
                                </p>
                                <span className={`px-2 py-0.5 rounded-full font-extrabold text-[10px] ${
                                    isPending ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                    {isPending ? 'Menunggu Verifikasi DNS & Admin' : 'Aktif'}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href={customUrl} target="_blank" rel="noreferrer" className="text-xs text-indigo-700 font-bold underline truncate flex-1 hover:text-indigo-800">{customUrl}</a>
                                <button type="button" onClick={() => handleCopyUrl(customUrl)} className="p-2 rounded-xl bg-white border border-indigo-200 text-slate-600 hover:bg-indigo-50 transition" title="Salin Custom Domain">
                                    <Copy className="h-4 w-4 text-indigo-600" />
                                </button>
                                {!isPending && (
                                    <a href={customUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-white border border-indigo-200 text-slate-600 hover:bg-indigo-50 transition" title="Buka Website">
                                        <ExternalLink className="h-4 w-4 text-indigo-600" />
                                    </a>
                                )}
                            </div>

                            {isPending && (
                                <div className="p-2.5 bg-white border border-indigo-100 rounded-xl text-[11px] space-y-1">
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-500 font-semibold">Target DNS CNAME:</span>
                                        <button
                                            type="button"
                                            onClick={() => handleCopyUrl(primaryDomainName)}
                                            className="text-indigo-600 font-bold hover:underline flex items-center gap-1"
                                        >
                                            <Copy className="h-3 w-3" />
                                            Salin Target
                                        </button>
                                    </div>
                                    <p className="font-mono font-bold text-slate-800 truncate">{primaryDomainName}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {isPending && (
                        <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 space-y-1">
                            <p className="font-bold flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-amber-600" />
                                Proses Verifikasi Administrator
                            </p>
                            <p className="text-[11px] text-amber-800 leading-relaxed">
                                Notifikasi akan otomatis masuk ke akun Anda setelah admin menyetujui penerbitan alamat ini.
                            </p>
                        </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                        {targetActiveUrl && !isPending ? (
                            <a
                                href={targetActiveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-600 hover:text-indigo-800"
                            >
                                <span>Kunjungi Website Sekarang</span>
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        ) : <div />}

                        <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition shadow-md shadow-indigo-600/20">
                            Selesai & Tutup
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div
                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-6 animate-in fade-in zoom-in-95 duration-150 relative max-h-[90vh] overflow-y-auto"
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100/80">
                            <Globe className="h-6 w-6" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                                    Publikasikan Website
                                </h3>
                                <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider border border-indigo-200">
                                    3 Pilihan Alamat
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                                Pilih metode publikasi: Subdomain, Sub-Prefix (Path URL), atau Domain Sendiri.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isPublishing}
                        className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition shrink-0 disabled:opacity-50"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {initialIsPublished && (
                        <fieldset className="space-y-2">
                            <legend className="text-xs font-extrabold text-slate-700">Pilih tindakan publikasi</legend>
                            <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition ${
                                publishAction === 'update' ? 'border-indigo-600 bg-indigo-50/40' : 'border-slate-200 hover:border-slate-300'
                            }`}>
                                <input
                                    type="radio"
                                    name="publish_action"
                                    value="update"
                                    checked={publishAction === 'update'}
                                    onChange={() => {
                                        setPublishAction('update');
                                        setSlug(initialSlug || '');
                                        setDomainType(normalizedInitialType);
                                    }}
                                    className="mt-1 h-4 w-4 text-indigo-600"
                                />
                                <span>
                                    <span className="block text-sm font-extrabold text-slate-900">Perbarui website yang sudah ada</span>
                                    <span className="mt-1 block text-xs text-slate-500">Isi terbaru akan menggantikan konten pada website dan alamat yang sama.</span>
                                </span>
                            </label>
                            <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition ${
                                publishAction === 'new' ? 'border-indigo-600 bg-indigo-50/40' : 'border-slate-200 hover:border-slate-300'
                            }`}>
                                <input
                                    type="radio"
                                    name="publish_action"
                                    value="new"
                                    checked={publishAction === 'new'}
                                    onChange={() => {
                                        setPublishAction('new');
                                        if (domainType === 'custom') setDomainType('subprefix');
                                        const baseSlug = (initialSlug || 'website').slice(0, 45);
                                        setSlug(`${baseSlug}-baru`);
                                    }}
                                    className="mt-1 h-4 w-4 text-indigo-600"
                                />
                                <span>
                                    <span className="block text-sm font-extrabold text-slate-900">Buat website baru</span>
                                    <span className="mt-1 block text-xs text-slate-500">Website lama tetap aktif; konten saat ini diterbitkan sebagai website baru dengan alamat terpisah.</span>
                                </span>
                            </label>
                        </fieldset>
                    )}

                    {/* Domain Choice 1: Subdomain Microdata */}
                    <div
                        onClick={() => setDomainType('subdomain')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative ${
                            domainType === 'subdomain'
                                ? 'bg-indigo-50/40 border-indigo-600 shadow-sm'
                                : 'bg-white border-slate-200/80 hover:border-slate-300'
                        }`}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3">
                                <input
                                    type="radio"
                                    name="domain_type"
                                    value="subdomain"
                                    checked={domainType === 'subdomain'}
                                    onChange={() => setDomainType('subdomain')}
                                    className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-extrabold text-slate-900">
                                            1. Menggunakan Subdomain (.web.microdata.co.id)
                                        </span>
                                        <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                                            GRATIS
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Alamat website menggunakan subdomain terpisah (contoh: <code className="text-indigo-600 font-semibold">perusahaan.web.microdata.co.id</code>).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {domainType === 'subdomain' && (
                            <div className="mt-4 pt-3 border-t border-indigo-100/80 space-y-2">
                                <label className="block text-xs font-bold text-slate-700">Nama Subdomain</label>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                        placeholder="nama-perusahaan"
                                        required
                                        disabled={initialIsPublished && publishAction === 'update'}
                                        className="flex-1 h-10 px-3 bg-white border border-slate-300 rounded-l-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                                    />
                                    <span className="h-10 px-3.5 bg-slate-100 border border-l-0 border-slate-300 rounded-r-xl text-xs font-bold text-slate-600 flex items-center">
                                        .web.microdata.co.id
                                    </span>
                                </div>
                                {initialIsPublished && publishAction === 'update' && (
                                    <p className="text-[11px] text-slate-500">
                                        Alamat website yang sudah aktif akan dipertahankan saat diperbarui.
                                    </p>
                                )}
                                {slugCheck.message && (
                                    <p className={`text-[11px] font-semibold flex items-center gap-1 ${
                                        slugCheck.status === 'available' ? 'text-emerald-700'
                                            : ['unavailable', 'invalid', 'error'].includes(slugCheck.status) ? 'text-red-600'
                                                : 'text-slate-500'
                                    }`}>
                                        {slugCheck.status === 'checking' && <Loader2 className="h-3 w-3 animate-spin" />}
                                        {['unavailable', 'invalid', 'error'].includes(slugCheck.status) && <CircleAlert className="h-3 w-3" />}
                                        {slugCheck.status === 'available' && <CheckCircle2 className="h-3 w-3" />}
                                        {slugCheck.message}
                                    </p>
                                )}

                                <div className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center justify-between text-xs">
                                    <span className="text-slate-500 text-[11px] font-medium">Preview URL:</span>
                                    <span className="font-extrabold text-indigo-600 truncate max-w-[280px]">
                                        {`https://${cleanSlug || 'nama-perusahaan'}.web.microdata.co.id`}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Domain Choice 2: Menggunakan Sub-Prefix (Path URL) */}
                    <div
                        onClick={() => setDomainType('subprefix')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative ${
                            domainType === 'subprefix'
                                ? 'bg-indigo-50/40 border-indigo-600 shadow-sm'
                                : 'bg-white border-slate-200/80 hover:border-slate-300'
                        }`}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3">
                                <input
                                    type="radio"
                                    name="domain_type"
                                    value="subprefix"
                                    checked={domainType === 'subprefix'}
                                    onChange={() => setDomainType('subprefix')}
                                    className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-extrabold text-slate-900">
                                            2. Menggunakan Sub-Prefix (Path URL)
                                        </span>
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                                            GRATIS & LANGSUNG AKTIF
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Publikasikan website langsung pada direktori domain utama (contoh: <code className="text-indigo-600 font-semibold">{primaryDomainName}/portfolio</code>). Tanpa konfigurasi DNS dan langsung live.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {domainType === 'subprefix' && (
                            <div className="mt-4 pt-3 border-t border-indigo-100/80 space-y-2">
                                <label className="block text-xs font-bold text-slate-700">Alamat Website</label>
                                <div className="flex items-center">
                                    <span className="h-10 px-3 bg-slate-100 border border-r-0 border-slate-300 rounded-l-xl text-xs font-bold text-slate-600 flex items-center shrink-0">
                                        {primaryBaseUrl}/
                                    </span>
                                    <input
                                        type="text"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                        placeholder="portfolio"
                                        required
                                        disabled={initialIsPublished && publishAction === 'update'}
                                        className="flex-1 h-10 px-3 bg-white border border-slate-300 rounded-r-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 min-w-0"
                                    />
                                </div>
                                {initialIsPublished && publishAction === 'update' && (
                                    <p className="text-[11px] text-slate-500">
                                        Alamat website yang sudah aktif akan dipertahankan saat diperbarui.
                                    </p>
                                )}
                                {slugCheck.message && (
                                    <p className={`text-[11px] font-semibold flex items-center gap-1 ${
                                        slugCheck.status === 'available' ? 'text-emerald-700'
                                            : ['unavailable', 'invalid', 'error'].includes(slugCheck.status) ? 'text-red-600'
                                                : 'text-slate-500'
                                    }`}>
                                        {slugCheck.status === 'checking' && <Loader2 className="h-3 w-3 animate-spin" />}
                                        {['unavailable', 'invalid', 'error'].includes(slugCheck.status) && <CircleAlert className="h-3 w-3" />}
                                        {slugCheck.status === 'available' && <CheckCircle2 className="h-3 w-3" />}
                                        {slugCheck.message}
                                    </p>
                                )}

                                <div className="p-2.5 bg-white rounded-xl border border-indigo-100 flex items-center justify-between text-xs">
                                    <span className="text-slate-500 text-[11px] font-medium">Preview:</span>
                                    <span className="font-extrabold text-indigo-600 truncate max-w-[280px]">
                                        {`${primaryBaseUrl}/${cleanSlug || 'portfolio'}`}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Domain Choice 3: Domain Sendiri / Custom Domain */}
                    {publishAction === 'update' && (
                        <div
                            onClick={handleSelectCustomDomain}
                            className={`p-4 rounded-2xl border-2 transition-all relative ${
                                !canUseCustomDomain
                                    ? 'bg-slate-50/70 border-slate-200 opacity-95 cursor-not-allowed'
                                    : domainType === 'custom'
                                    ? 'bg-indigo-50/40 border-indigo-600 shadow-sm cursor-pointer'
                                    : 'bg-white border-slate-200/80 hover:border-slate-300 cursor-pointer'
                            }`}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3">
                                    <input
                                        type="radio"
                                        name="domain_type"
                                        value="custom"
                                        disabled={!canUseCustomDomain}
                                        checked={domainType === 'custom'}
                                        onChange={() => canUseCustomDomain && setDomainType('custom')}
                                        className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer disabled:opacity-50"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-sm font-extrabold ${!canUseCustomDomain ? 'text-slate-500' : 'text-slate-900'}`}>
                                                3. Menggunakan Domain Sendiri (Custom Domain)
                                            </span>
                                            {!canUseCustomDomain ? (
                                                <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-extrabold flex items-center gap-1">
                                                    <Lock className="h-3 w-3" />
                                                    PRO / STARTER
                                                </span>
                                            ) : (
                                                <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                                                    CUSTOM DOMAIN
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1">
                                            Gunakan domain utama atau subdomain milik bisnis Anda sendiri (contoh: <code className="text-indigo-600 font-semibold">www.perusahaan.com</code>).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Free Account Lock Restriction & Upgrade Trigger */}
                            {!canUseCustomDomain ? (
                                <div className="mt-3.5 p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl space-y-2.5">
                                    <div className="flex items-start gap-2.5">
                                        <Lock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                                        <div className="text-xs text-amber-900">
                                            <p className="font-bold">Domain Sendiri Tidak Tersedia pada Paket Free</p>
                                            <p className="text-[11px] text-amber-700 mt-0.5 leading-relaxed">
                                                Fitur menghubungkan domain sendiri khusus untuk pengguna paket Starter & Unlimited. Silakan upgrade paket Anda untuk membuka fitur ini.
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onClose();
                                            openUpgradeModal({
                                                title: 'Upgrade ke Paket Starter / Unlimited',
                                                message: 'Buka fitur Domain Sendiri (Domain Kustom) untuk memberikan kesan profesional pada bisnis Anda.',
                                                targetPlan: 'starter',
                                            });
                                        }}
                                        className="w-full py-2 bg-gradient-to-r from-amber-600 to-indigo-600 hover:from-amber-700 hover:to-indigo-700 text-white rounded-lg text-xs font-extrabold shadow-sm flex items-center justify-center gap-1.5 transition"
                                    >
                                        <Sparkles className="h-3.5 w-3.5" />
                                        <span>Upgrade Paket Sekarang</span>
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </button>
                                </div>
                            ) : (
                                domainType === 'custom' && (
                                    <div className="mt-4 pt-3 border-t border-indigo-100/80 space-y-3">
                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <label className="block text-xs font-bold text-slate-700">Nama Domain Sendiri</label>
                                                {cleanCustomDomain && (
                                                    <span className={`text-[10px] font-bold flex items-center gap-1 ${
                                                        isCustomDomainFormatValid ? 'text-emerald-600' : 'text-amber-600'
                                                    }`}>
                                                        {isCustomDomainFormatValid ? (
                                                            <>
                                                                <CheckCircle2 className="h-3 w-3" /> Format Valid
                                                            </>
                                                        ) : (
                                                            <>
                                                                <CircleAlert className="h-3 w-3" /> Format Belum Valid
                                                            </>
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="relative">
                                                <Globe className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                                <input
                                                    type="text"
                                                    value={customDomain}
                                                    onChange={(e) => setCustomDomain(e.target.value)}
                                                    placeholder="contoh: www.perusahaan.com atau bisnis.id"
                                                    required={domainType === 'custom'}
                                                    className="w-full h-10 pl-9 pr-3 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                                                />
                                            </div>
                                            <p className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                                                <span>Masukkan domain lengkap tanpa http/https (contoh: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-bold">www.perusahaan.com</code>).</span>
                                            </p>
                                        </div>

                                        {/* Target Preview */}
                                        {cleanCustomDomain && (
                                            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Preview Alamat Website</span>
                                                <p className="text-xs font-bold text-indigo-600 mt-0.5 font-mono truncate">
                                                    https://{cleanCustomDomain}
                                                </p>
                                            </div>
                                        )}

                                        {/* DNS Setup Guide Card */}
                                        <div className="p-3.5 bg-slate-50/90 border border-slate-200 rounded-xl space-y-2.5 text-xs text-slate-700">
                                            <div className="flex items-center justify-between">
                                                <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                                                    <Shield className="h-3.5 w-3.5 text-indigo-600" />
                                                    Petunjuk Pengaturan DNS Registrar Anda
                                                </span>
                                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-extrabold">
                                                    CNAME Record
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-slate-500 leading-relaxed">
                                                Tambahkan CNAME Record pada panel DNS domain Anda (Cloudflare, Niagahoster, Rumahweb, dll.) agar mengarah ke server platform:
                                            </p>
                                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                                                <div className="p-2 bg-white rounded-lg border border-slate-200">
                                                    <span className="text-slate-400 font-bold block text-[10px] uppercase">Host / Name</span>
                                                    <span className="font-mono font-bold text-slate-800">www <span className="text-slate-400 font-normal">atau</span> @</span>
                                                </div>
                                                <div className="p-2 bg-white rounded-lg border border-slate-200 flex items-center justify-between gap-1">
                                                    <div className="min-w-0">
                                                        <span className="text-slate-400 font-bold block text-[10px] uppercase">Target / Value</span>
                                                        <span className="font-mono font-bold text-indigo-600 truncate block">{primaryDomainName}</span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleCopyUrl(primaryDomainName)}
                                                        className="p-1 rounded bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition shrink-0"
                                                        title="Salin Target CNAME"
                                                    >
                                                        <Copy className="h-3 w-3" />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-slate-400 italic">
                                                * Setelah diajukan, Administrator akan memverifikasi propagasi DNS sebelum mengaktifkan domain.
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    )}

                    {quota && (
                        <div className={`p-3 rounded-xl border text-xs ${
                            quota.can_publish
                                ? 'bg-indigo-50 border-indigo-100 text-indigo-800'
                                : 'bg-amber-50 border-amber-200 text-amber-900'
                        }`}>
                            Kuota paket <strong>{quota.package}</strong>: {quota.current} / {quota.unlimited ? 'Tanpa batas' : quota.max} website published.
                            {(!quota.can_publish || (publishAction === 'new' && !quota.unlimited && quota.current >= quota.max)) && (
                                <p className="mt-1 font-semibold" title="Limit paket tercapai">
                                    Limit paket tercapai. Batal Publikasi website lain atau upgrade paket untuk melanjutkan.
                                </p>
                            )}
                        </div>
                    )}
                    {quotaError && (
                        <p className="text-xs text-amber-700 flex items-center gap-1">
                            <CircleAlert className="h-3.5 w-3.5" /> {quotaError} Batas tetap divalidasi oleh server saat publish.
                        </p>
                    )}
                    {quotaLoading && (
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Memuat kuota paket...
                        </p>
                    )}

                    {/* Footer buttons */}
                    <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isPublishing}
                            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition border border-transparent disabled:opacity-50"
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={
                                isPublishing
                                || (isSlugDomain && (!isSlugFormatValid || slugCheck.status !== 'available'))
                                || (domainType === 'custom' && (!canUseCustomDomain || !cleanCustomDomain || !isCustomDomainFormatValid))
                                || quotaLoading
                                || (publishAction === 'update' && quota?.can_publish === false)
                                || (publishAction === 'new' && quota && !quota.unlimited && quota.current >= quota.max)
                            }
                            className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                        >
                            {isPublishing ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                                    <span>Memproses Permintaan...</span>
                                </>
                            ) : (
                                <>
                                    <Globe className="h-4 w-4" />
                                    <span>
                                        {publishAction === 'new'
                                            ? (isAdmin || domainType === 'subprefix' ? 'Terbitkan sebagai Website Baru' : 'Ajukan sebagai Website Baru')
                                            : (isAdmin || domainType === 'subprefix' ? 'Terbitkan Sekarang' : 'Kirim Permintaan Publikasi')}
                                    </span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
