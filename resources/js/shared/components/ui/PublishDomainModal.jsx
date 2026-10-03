import { useState, useEffect } from 'react';
import { Globe, Lock, ArrowUpRight, Sparkles, X, Loader2, CheckCircle2, Copy, CircleAlert } from 'lucide-react';
import { useSubscriptionStore } from '@shared/stores/subscriptionStore';
import { useAuthStore } from '@shared/stores/authStore';
import { toast } from '@store';
import { websiteApi } from '@api';

export default function PublishDomainModal({
    isOpen,
    onClose,
    onPublish,
    initialSlug = '',
    initialCustomDomain = '',
    initialDomainType = 'subdomain',
    websiteId = null,
    isPublishing = false,
    publishResult = null,
}) {
    const user = useAuthStore((s) => s.user);
    const { isFree, openUpgradeModal } = useSubscriptionStore();
    const isAdmin = user?.role === 'admin';
    const isFreeAccount = isFree && !isAdmin;

    const [domainType, setDomainType] = useState(initialDomainType || 'subdomain');
    const [slug, setSlug] = useState(initialSlug || '');
    const [customDomain, setCustomDomain] = useState(initialCustomDomain || '');
    const [slugCheck, setSlugCheck] = useState({ status: 'idle', message: '' });
    const [quota, setQuota] = useState(null);
    const [quotaError, setQuotaError] = useState('');
    const [quotaLoading, setQuotaLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setSlug(initialSlug || '');
            setCustomDomain(initialCustomDomain || '');
            setSlugCheck({ status: 'idle', message: '' });
            setQuota(null);
            setQuotaError('');
            setQuotaLoading(true);
            const defaultType = initialDomainType === 'custom' && isFreeAccount ? 'subdomain' : (initialDomainType || 'subdomain');
            setDomainType(defaultType);
        }
    }, [isOpen, initialSlug, initialCustomDomain, initialDomainType, isFreeAccount]);

    useEffect(() => {
        if (!isOpen) return undefined;
        let active = true;

        websiteApi.getQuota(websiteId)
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
    }, [isOpen, websiteId]);

    const cleanSlug = slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    const isSlugFormatValid = cleanSlug.length >= 3
        && cleanSlug.length <= 50
        && slug.trim().toLowerCase() === cleanSlug
        && /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(cleanSlug);

    useEffect(() => {
        if (!isOpen || domainType !== 'subdomain') {
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
        setSlugCheck({ status: 'checking', message: 'Memeriksa ketersediaan slug...' });
        const timeoutId = window.setTimeout(() => {
            websiteApi.checkSlug(cleanSlug, websiteId)
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
                            message: error.response?.data?.message || 'Slug gagal diperiksa. Coba lagi.',
                        });
                    }
                });
        }, 500);

        return () => {
            active = false;
            window.clearTimeout(timeoutId);
        };
    }, [isOpen, domainType, cleanSlug, isSlugFormatValid, websiteId]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (domainType === 'custom' && isFreeAccount) {
            return;
        }

        if (domainType === 'subdomain' && (!isSlugFormatValid || slugCheck.status !== 'available')) {
            return;
        }

        if (domainType === 'custom' && !customDomain.trim()) {
            return;
        }

        onPublish({
            domain_type: domainType,
            slug: cleanSlug,
            custom_domain: customDomain.trim().toLowerCase(),
            website_id: websiteId,
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
        if (isFreeAccount) {
            return;
        }
        setDomainType('custom');
    };

    if (publishResult) {
        const pathUrl = publishResult.path_url;
        const subdomainUrl = publishResult.subdomain_url;
        const customUrl = publishResult.domain_type === 'custom'
            ? publishResult.published_url
            : null;

        return (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-5" role="dialog" aria-modal="true">
                    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900">Website berhasil dipublish</h3>
                                <p className="text-xs text-slate-500 mt-1">Website dapat diakses melalui URL berikut.</p>
                            </div>
                        </div>
                        <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {[['URL Path', pathUrl], ['Subdomain', subdomainUrl], ...(customUrl ? [['Custom domain', customUrl]] : [])].map(([label, url]) => (
                        <div key={label} className="p-3 rounded-xl border border-slate-200 space-y-2">
                            <p className="text-[11px] font-bold text-slate-500">{label}</p>
                            <div className="flex items-center gap-2">
                                <a href={url} target="_blank" rel="noreferrer" className="text-xs text-indigo-700 font-semibold underline truncate flex-1">{url}</a>
                                <button type="button" onClick={() => handleCopyUrl(url)} className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50" aria-label={`Salin ${label}`}>
                                    <Copy className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-end pt-2">
                        <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700">Selesai</button>
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
                                    Terbitkan Website Perusahaan
                                </h3>
                                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider border border-emerald-200">
                                    Live
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">
                                Pilih konfigurasi domain yang akan digunakan publik untuk mengakses website Anda.
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
                                            Subdomain Microdata (.microdata.co.id)
                                        </span>
                                        <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 text-[10px] font-bold">
                                            GRATIS
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Subdomain siap pakai tanpa konfigurasi tambahan. Tersedia untuk semua paket.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {domainType === 'subdomain' && (
                            <div className="mt-4 pt-3 border-t border-indigo-100/80 space-y-2">
                                <label className="block text-xs font-bold text-slate-700">Subdomain Prefix</label>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                        placeholder="nama-perusahaan"
                                        required
                                        className="flex-1 h-10 px-3 bg-white border border-slate-300 rounded-l-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                                    />
                                    <span className="h-10 px-3.5 bg-slate-100 border border-l-0 border-slate-300 rounded-r-xl text-xs font-bold text-slate-600 flex items-center">
                                        .microdata.co.id
                                    </span>
                                </div>
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
                                    <span className="text-slate-500 text-[11px] font-medium">URL Publik:</span>
                                    <span className="font-extrabold text-indigo-600 truncate max-w-[280px]">
                                        {`${window.location.origin}/p/${encodeURIComponent(cleanSlug || 'subdomain')}`}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Domain Choice 2: Domain Sendiri / Custom Domain */}
                    <div
                        onClick={handleSelectCustomDomain}
                        className={`p-4 rounded-2xl border-2 transition-all relative ${
                            isFreeAccount
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
                                    disabled={isFreeAccount}
                                    checked={domainType === 'custom'}
                                    onChange={() => !isFreeAccount && setDomainType('custom')}
                                    className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer disabled:opacity-50"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-sm font-extrabold ${isFreeAccount ? 'text-slate-500' : 'text-slate-900'}`}>
                                            Domain Sendiri (Custom Domain)
                                        </span>
                                        {isFreeAccount ? (
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
                                        Gunakan domain utama atau subdomain milik bisnis Anda (contoh: www.perusahaan.com).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Free Account Lock Restriction & Upgrade Trigger */}
                        {isFreeAccount ? (
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
                                            message: 'Buka fitur Domain Sendiri (Custom Domain) untuk memberikan kesan profesional pada bisnis Anda.',
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
                                <div className="mt-4 pt-3 border-t border-indigo-100/80 space-y-2">
                                    <label className="block text-xs font-bold text-slate-700">Nama Domain Sendiri</label>
                                    <input
                                        type="text"
                                        value={customDomain}
                                        onChange={(e) => setCustomDomain(e.target.value)}
                                        placeholder="www.perusahaan.com atau perusahaan.co.id"
                                        required={domainType === 'custom'}
                                        className="w-full h-10 px-3 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                                    />
                                    <p className="text-[11px] text-slate-500">
                                        Masukkan domain lengkap (contoh: <code className="bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-bold">www.perusahaan.com</code>).
                                    </p>
                                </div>
                            )
                        )}
                    </div>



                    {quota && (
                        <div className={`p-3 rounded-xl border text-xs ${
                            quota.can_publish
                                ? 'bg-indigo-50 border-indigo-100 text-indigo-800'
                                : 'bg-amber-50 border-amber-200 text-amber-900'
                        }`}>
                            Kuota paket <strong>{quota.package}</strong>: {quota.current} / {quota.unlimited ? 'Unlimited' : quota.max} website published.
                            {!quota.can_publish && (
                                <p className="mt-1 font-semibold" title="Limit paket tercapai">
                                    Limit paket tercapai. Unpublish website lain atau upgrade paket untuk melanjutkan.
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
                                || (domainType === 'subdomain' && (!isSlugFormatValid || slugCheck.status !== 'available'))
                                || (domainType === 'custom' && !customDomain.trim())
                                || quotaLoading
                                || quota?.can_publish === false
                            }
                            className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                        >
                            {isPublishing ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                                    <span>Menerbitkan Website...</span>
                                </>
                            ) : (
                                <>
                                    <Globe className="h-4 w-4" />
                                    <span>Terbitkan Sekarang</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
