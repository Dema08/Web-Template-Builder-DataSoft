import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    CreditCard,
    Check,
    Clock,
    Sparkles,
    Shield,
    Globe,
    Layers,
    UploadCloud,
    CheckCircle2,
    XCircle,
    AlertCircle,
    ArrowUpRight,
    RefreshCw,
    Loader2,
} from 'lucide-react';
import { billingApi, pricelistApi } from '@api';
import { Spinner, Alert, Card } from '@shared/components/ui';
import { toast } from '@store';
import { QUERY_KEYS } from '@constants';

export default function BillingPage() {
    const [page, setPage] = useState(1);
    const [checkoutPlanId, setCheckoutPlanId] = useState(null);
    const queryClient = useQueryClient();

    // Fetch current plan & active subscription info
    const { data: currentData, isLoading: isLoadingCurrent } = useQuery({
        queryKey: [QUERY_KEYS.BILLING_CURRENT],
        queryFn: () => billingApi.getCurrentPlan(),
    });

    // Fetch available plans from public API
    const { data: pricelists, isLoading: isLoadingPlans } = useQuery({
        queryKey: [QUERY_KEYS.PUBLIC_PRICELISTS],
        queryFn: async () => {
            const res = await pricelistApi.getPublic();
            return res?.data ?? res ?? [];
        },
    });

    // Fetch transaction history
    const { data: historyData, isLoading: isLoadingHistory } = useQuery({
        queryKey: [QUERY_KEYS.BILLING_HISTORY, page],
        queryFn: () => billingApi.getHistory(page),
    });

    const currentPlan = currentData?.current_plan;
    const subscription = currentData?.subscription;

    // Checkout Mutation
    const checkoutMutation = useMutation({
        mutationFn: (planId) => billingApi.checkout(planId),
        onSuccess: (res) => {
            const payload = res?.data ?? res;
            const snapToken = payload?.snap_token;
            const isFreeResponse = payload?.is_free === true || !snapToken;

            // Free plan: no Midtrans payment needed
            if (isFreeResponse) {
                toast.success('Paket Free berhasil diaktifkan!', 'Paket Diperbarui');
                queryClient.invalidateQueries([QUERY_KEYS.BILLING_CURRENT]);
                queryClient.invalidateQueries([QUERY_KEYS.BILLING_HISTORY]);
                queryClient.invalidateQueries([QUERY_KEYS.USER]);
                setCheckoutPlanId(null);
                return;
            }

            const snapJsUrl = payload?.snap_js_url || 'https://app.sandbox.midtrans.com/snap/snap.js';
            const clientKey = payload?.client_key;

            // Load Snap JS script dynamically if not loaded yet
            loadMidtransSnapScript(snapJsUrl, clientKey, () => {
                if (window.snap) {
                    window.snap.pay(snapToken, {
                        onSuccess: (result) => {
                            toast.success('Pembayaran berhasil! Paket baru Anda telah diaktifkan.', 'Pembayaran Sukses');
                            queryClient.invalidateQueries([QUERY_KEYS.BILLING_CURRENT]);
                            queryClient.invalidateQueries([QUERY_KEYS.BILLING_HISTORY]);
                            queryClient.invalidateQueries([QUERY_KEYS.USER]);
                            setCheckoutPlanId(null);
                        },
                        onPending: (result) => {
                            toast.info('Pembayaran sedang diproses. Silakan selesaikan tagihan Anda.', 'Menunggu Pembayaran');
                            queryClient.invalidateQueries([QUERY_KEYS.BILLING_CURRENT]);
                            queryClient.invalidateQueries([QUERY_KEYS.BILLING_HISTORY]);
                            setCheckoutPlanId(null);
                        },
                        onError: (result) => {
                            toast.error('Pembayaran gagal atau ditolak. Silakan coba kembali.', 'Pembayaran Gagal');
                            setCheckoutPlanId(null);
                        },
                        onClose: () => {
                            toast.info('Popup pembayaran ditutup. Anda dapat melanjutkan pembayaran kapan saja.', 'Pembayaran Dibatalkan');
                            queryClient.invalidateQueries([QUERY_KEYS.BILLING_HISTORY]);
                            setCheckoutPlanId(null);
                        },
                    });
                } else {
                    toast.error('Gagal memuat popup pembayaran Midtrans. Coba muat ulang halaman.', 'Error Script');
                    setCheckoutPlanId(null);
                }
            });
        },
        onError: (err) => {
            const msg = err?.response?.data?.message || 'Gagal memproses checkout paket.';
            toast.error(msg, 'Checkout Error');
            setCheckoutPlanId(null);
        },
    });

    const handleSelectPlan = (plan) => {
        if (currentPlan?.id === plan.id) {
            toast.info(`Anda saat ini sudah menggunakan paket ${plan.nama || plan.name}.`, 'Paket Aktif');
            return;
        }
        setCheckoutPlanId(plan.id);
        checkoutMutation.mutate(plan.id);
    };

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-10">
            {/* Page Header */}
            <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                    <CreditCard className="h-3.5 w-3.5" />
                    <span>Billing & Subscriptions</span>
                </div>
                <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                    Billing & Langganan Paket
                </h1>
                <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                    Kelola paket langganan aktif, lakukan upgrade secara otomatis via Midtrans Payment Gateway, dan lihat riwayat invoice.
                </p>
            </div>

            {/* 1. CURRENT PLAN CARD */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                                Paket Aktif Saat Ini
                            </span>
                            {subscription?.is_active && (
                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase tracking-wider">
                                    Active
                                </span>
                            )}
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            {currentPlan?.name || currentPlan?.nama || 'Free'}
                        </h2>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-indigo-200">
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-indigo-400" />
                                <span>Mulai: <strong>{subscription?.formatted_started_at || 'Masa Registrasi'}</strong></span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Shield className="h-4 w-4 text-indigo-400" />
                                <span>Berakhir: <strong>{subscription?.formatted_expired_at || 'Selamanya (Free Level)'}</strong></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <a
                            href="#available-plans"
                            className="px-6 py-3 rounded-2xl bg-white text-indigo-900 hover:bg-slate-100 font-extrabold text-xs shadow-lg transition text-center flex items-center justify-center gap-2 hover:scale-105"
                        >
                            <ArrowUpRight className="h-4 w-4" />
                            <span>Upgrade Paket</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. AVAILABLE PLANS SECTION */}
            <div id="available-plans" className="space-y-6">
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))]">
                        Pilihan Paket Harga Platform
                    </h2>
                    <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1">
                        Pilih paket terbaik untuk kebutuhan bisnis Anda. Pembayaran otomatis diverifikasi via QRIS, E-Wallet, VA, atau Kartu Kredit.
                    </p>
                </div>

                {isLoadingPlans ? (
                    <div className="p-12 flex justify-center">
                        <Spinner size="lg" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pricelists?.map((plan) => {
                            const isCurrent = currentPlan?.id === plan.id;
                            const isPopular = plan.is_popular;
                            const isFree = plan.harga === 0 || plan.price === 0;

                            const formattedPrice = isFree
                                ? 'Free'
                                : `Rp ${Number(plan.harga ?? plan.price).toLocaleString('id-ID').replace(/,/g, '.')}`;

                            const maxDomainsLabel = plan.max_domains === -1 || plan.maks_domain === -1
                                ? 'Unlimited Domain'
                                : (plan.max_domains === 0 || plan.maks_domain === 0 ? '0 (Subdomain)' : `${plan.max_domains ?? plan.maks_domain} Custom Domain`);

                            const maxTemplatesLabel = plan.max_starter_templates === -1 || plan.maks_starter_template === -1
                                ? 'Unlimited Templates'
                                : (plan.max_starter_templates === 0 || plan.maks_starter_template === 0 ? 'Blank Template Only' : `${plan.max_starter_templates ?? plan.maks_starter_template} Starter Templates`);

                            const canUpload = Boolean(plan.can_upload_website ?? plan.bisa_upload_website);
                            const features = plan.features ?? plan.fitur ?? [];

                            return (
                                <div
                                    key={plan.id}
                                    className={`relative rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 bg-[rgb(var(--color-surface))] shadow-md ${
                                        isPopular
                                            ? 'border-indigo-600 ring-2 ring-indigo-600/20 shadow-xl scale-[1.02]'
                                            : 'border-[rgb(var(--color-border))] hover:border-indigo-300'
                                    }`}
                                >
                                    {isPopular && (
                                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                            <span className="bg-amber-400 text-amber-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                                ✦ Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div>
                                        <div className="mb-4">
                                            <span className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                                                {plan.nama || plan.name}
                                            </span>
                                            <div className="mt-2 flex items-baseline gap-1">
                                                <span className="text-3xl font-black text-[rgb(var(--color-text-primary))]">
                                                    {formattedPrice}
                                                </span>
                                                {!isFree && (
                                                    <span className="text-xs text-[rgb(var(--color-text-tertiary))]">/{plan.periode || 'bulan'}</span>
                                                )}
                                            </div>
                                            <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-2 line-clamp-2">
                                                {plan.deskripsi || plan.description || 'Paket langganan untuk mendukung pertumbuhan website Anda.'}
                                            </p>
                                        </div>

                                        <hr className="my-4 border-[rgb(var(--color-border))]" />

                                        {/* Capabilities */}
                                        <div className="space-y-2 text-xs mb-6">
                                            <div className="flex items-center justify-between p-2 rounded-xl bg-[rgb(var(--color-surface-alt))]">
                                                <span className="text-[rgb(var(--color-text-secondary))] font-medium flex items-center gap-1.5">
                                                    <Globe className="h-3.5 w-3.5 text-indigo-500" /> Custom Domain
                                                </span>
                                                <span className="font-extrabold text-[rgb(var(--color-text-primary))] text-[11px]">{maxDomainsLabel}</span>
                                            </div>

                                            <div className="flex items-center justify-between p-2 rounded-xl bg-[rgb(var(--color-surface-alt))]">
                                                <span className="text-[rgb(var(--color-text-secondary))] font-medium flex items-center gap-1.5">
                                                    <Layers className="h-3.5 w-3.5 text-indigo-500" /> Templates
                                                </span>
                                                <span className="font-extrabold text-[rgb(var(--color-text-primary))] text-[11px]">{maxTemplatesLabel}</span>
                                            </div>

                                            <div className="flex items-center justify-between p-2 rounded-xl bg-[rgb(var(--color-surface-alt))]">
                                                <span className="text-[rgb(var(--color-text-secondary))] font-medium flex items-center gap-1.5">
                                                    <UploadCloud className="h-3.5 w-3.5 text-indigo-500" /> Upload HTML
                                                </span>
                                                {canUpload ? (
                                                    <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-[11px]">Ya</span>
                                                ) : (
                                                    <span className="text-red-500 font-extrabold text-[11px]">Tidak</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Features checklist */}
                                        {features.length > 0 && (
                                            <ul className="space-y-2 text-xs text-[rgb(var(--color-text-secondary))] mb-6">
                                                {features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        type="button"
                                        disabled={isCurrent || checkoutMutation.isPending}
                                        onClick={() => handleSelectPlan(plan)}
                                        className={`w-full py-3 px-4 rounded-xl text-xs font-extrabold shadow-md transition flex items-center justify-center gap-2 cursor-pointer ${
                                            isCurrent
                                                ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed shadow-none'
                                                : isPopular
                                                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/25 hover:scale-[1.02]'
                                                : 'bg-[rgb(var(--color-surface-alt))] hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-[rgb(var(--color-text-primary))] hover:text-indigo-600 border border-[rgb(var(--color-border))]'
                                        }`}
                                    >
                                        {checkoutMutation.isPending && checkoutPlanId === plan.id ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin text-indigo-600" />
                                                <span>Memproses Snap...</span>
                                            </>
                                        ) : isCurrent ? (
                                            <span>Paket Aktif Saat Ini</span>
                                        ) : (
                                            <span>{isFree ? 'Pilih Paket Free' : `Bayar & Upgrade (${formattedPrice})`}</span>
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* 3. TRANSACTION HISTORY TABLE */}
            <div className="space-y-4 pt-4 border-t border-[rgb(var(--color-border))]">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-extrabold text-[rgb(var(--color-text-primary))]">
                            Riwayat Transaksi & Invoice
                        </h2>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">
                            Daftar tagihan dan status pembayaran langganan Anda.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => queryClient.invalidateQueries([QUERY_KEYS.BILLING_HISTORY])}
                        className="p-2 rounded-xl text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 hover:bg-[rgb(var(--color-surface-alt))] transition"
                        title="Muat ulang riwayat"
                    >
                        <RefreshCw className="h-4 w-4" />
                    </button>
                </div>

                {isLoadingHistory ? (
                    <div className="p-8 flex justify-center">
                        <Spinner size="md" />
                    </div>
                ) : !historyData?.data || historyData.data.length === 0 ? (
                    <Card className="p-8 text-center text-xs text-[rgb(var(--color-text-tertiary))] space-y-2">
                        <CreditCard className="h-8 w-8 mx-auto text-slate-300" />
                        <p className="font-bold text-slate-600 dark:text-slate-400">Belum Ada Riwayat Transaksi</p>
                        <p>Transaksi pembayaran Anda akan muncul secara otomatis di sini setelah melakukan upgrade.</p>
                    </Card>
                ) : (
                    <div className="bg-[rgb(var(--color-surface))] rounded-2xl border border-[rgb(var(--color-border))] overflow-hidden shadow-xs">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead className="bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-tertiary))] font-extrabold uppercase tracking-wider border-b border-[rgb(var(--color-border))]">
                                    <tr>
                                        <th className="py-3.5 px-4">Invoice</th>
                                        <th className="py-3.5 px-4">Order ID</th>
                                        <th className="py-3.5 px-4">Paket Target</th>
                                        <th className="py-3.5 px-4">Nominal</th>
                                        <th className="py-3.5 px-4">Metode</th>
                                        <th className="py-3.5 px-4">Status</th>
                                        <th className="py-3.5 px-4">Tanggal</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[rgb(var(--color-border))] text-[rgb(var(--color-text-primary))] font-medium">
                                    {historyData.data.map((tx) => {
                                        const status = tx.status;
                                        const statusStyle = {
                                            paid: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
                                            pending: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
                                            expired: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
                                            failed: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300',
                                            cancelled: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300',
                                            refunded: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300',
                                        }[status] || 'bg-slate-100 text-slate-700';

                                        return (
                                            <tr key={tx.id} className="hover:bg-[rgb(var(--color-surface-alt))] transition">
                                                <td className="py-3.5 px-4 font-mono font-extrabold text-indigo-600 dark:text-indigo-400">
                                                    {tx.invoice_number}
                                                </td>
                                                <td className="py-3.5 px-4 font-mono text-[11px] text-[rgb(var(--color-text-tertiary))]">
                                                    {tx.order_id}
                                                </td>
                                                <td className="py-3.5 px-4 font-bold">
                                                    {tx.pricelist?.name || tx.pricelist?.nama || 'N/A'}
                                                </td>
                                                <td className="py-3.5 px-4 font-extrabold">
                                                    {tx.formatted_nominal}
                                                </td>
                                                <td className="py-3.5 px-4 uppercase text-[11px] font-semibold text-[rgb(var(--color-text-secondary))]">
                                                    {tx.metode_pembayaran}
                                                </td>
                                                <td className="py-3.5 px-4">
                                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${statusStyle}`}>
                                                        {tx.status_label || status}
                                                    </span>
                                                </td>
                                                <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                                                    {tx.formatted_date}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {historyData?.pagination && historyData.pagination.last_page > 1 && (
                            <div className="p-4 bg-[rgb(var(--color-surface-alt))] border-t border-[rgb(var(--color-border))] flex items-center justify-between text-xs">
                                <span className="text-[rgb(var(--color-text-tertiary))]">
                                    Halaman {historyData.pagination.current_page} dari {historyData.pagination.last_page}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        disabled={page <= 1}
                                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                                        className="px-3 py-1.5 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] disabled:opacity-40"
                                    >
                                        Sebelumnya
                                    </button>
                                    <button
                                        disabled={page >= historyData.pagination.last_page}
                                        onClick={() => setPage((p) => p + 1)}
                                        className="px-3 py-1.5 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] disabled:opacity-40"
                                    >
                                        Selanjutnya
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

/**
 * Utility function to load Midtrans Snap JS dynamically.
 */
function loadMidtransSnapScript(snapJsUrl, clientKey, callback) {
    if (window.snap) {
        callback();
        return;
    }

    const scriptId = 'midtrans-snap-script';
    let existingScript = document.getElementById(scriptId);

    if (!existingScript) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = snapJsUrl;
        if (clientKey) {
            script.setAttribute('data-client-key', clientKey);
        }
        script.onload = () => {
            if (callback) callback();
        };
        script.onerror = () => {
            console.error('Failed to load Midtrans Snap JS');
        };
        document.body.appendChild(script);
    } else {
        existingScript.onload = () => {
            if (callback) callback();
        };
    }
}
