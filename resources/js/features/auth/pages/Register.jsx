import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
    Eye, EyeOff, Sparkles, User, Mail, Lock, ShieldCheck, ArrowRight, ArrowLeft,
    Layers, Headphones, Clock, CheckCircle2, Check, Loader2, CreditCard
} from 'lucide-react';
import { Spinner, Alert, BrandLogo } from '@shared/components/ui';
import { pricelistApi, billingApi } from '@api';
import { useRegister } from '@features/auth/hooks/useRegister';
import { ROUTES, QUERY_KEYS } from '@constants';
import { toast } from '@store';

function SparkleStarGroup({ className = '', style = {}, size = 'md', color = 'text-white' }) {
    const scaleMap = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-20 h-20',
        xl: 'w-28 h-28',
    };
    const currentSize = scaleMap[size] || scaleMap.md;

    return (
        <div className={`relative inline-block select-none pointer-events-none ${className}`} style={style}>
            <svg
                className="absolute -top-2 -left-2 w-4 h-4 text-indigo-200 animate-pulse"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
            >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>

            <svg
                className={`${currentSize} ${color} filter drop-shadow-lg`}
                viewBox="0 0 100 100"
                fill="currentColor"
                fillOpacity="0.15"
                stroke="currentColor"
                strokeWidth="6.5"
                strokeLinejoin="round"
                strokeLinecap="round"
            >
                <path d="M50 5 C50 30, 70 50, 95 50 C70 50, 50 70, 50 95 C50 70, 30 50, 5 50 C30 50, 50 30, 50 5 Z" />
            </svg>

            <svg
                className="absolute -bottom-1 -right-2 w-3.5 h-3.5 text-indigo-300 fill-indigo-300 animate-bounce"
                style={{ animationDuration: '3s' }}
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="8" />
            </svg>
        </div>
    );
}

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
        script.src = snapJsUrl || 'https://app.sandbox.midtrans.com/snap/snap.js';
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

const DEFAULT_FALLBACK_PLANS = [
    {
        id: 1,
        nama: 'Free',
        name: 'Free',
        harga: 0,
        price: 0,
        periode: 'selamanya',
        maks_domain: 0,
        bisa_upload_website: false,
        is_default: true,
    },
    {
        id: 2,
        nama: 'Harga 1 (Starter)',
        name: 'Harga 1 (Starter)',
        harga: 99000,
        price: 99000,
        periode: 'bulan',
        maks_domain: 3,
        bisa_upload_website: true,
    },
    {
        id: 3,
        nama: 'Harga 2 (Pro)',
        name: 'Harga 2 (Pro)',
        harga: 199000,
        price: 199000,
        periode: 'bulan',
        maks_domain: 10,
        bisa_upload_website: true,
        is_popular: true,
    },
    {
        id: 4,
        nama: 'Harga 3 (Unlimited)',
        name: 'Harga 3 (Unlimited)',
        harga: 399000,
        price: 399000,
        periode: 'bulan',
        maks_domain: -1,
        bisa_upload_website: true,
    },
];

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState(null);
    const [registeredState, setRegisteredState] = useState(null);
    const [isLaunchingSnap, setIsLaunchingSnap] = useState(false);

    // Fetch public active pricelists from admin database
    const { data: fetchedPlans } = useQuery({
        queryKey: [QUERY_KEYS.PUBLIC_PRICELISTS],
        queryFn: async () => {
            try {
                const res = await pricelistApi.getPublic();
                const list = res?.data ?? res;
                return Array.isArray(list) && list.length > 0 ? list : null;
            } catch (e) {
                return null;
            }
        },
        staleTime: 5 * 60 * 1000,
    });

    const plans = fetchedPlans && fetchedPlans.length > 0 ? fetchedPlans : DEFAULT_FALLBACK_PLANS;

    // Auto-select default or free plan on load
    useEffect(() => {
        if (plans.length > 0 && !selectedPlanId) {
            const defaultPlan = plans.find((p) => (p.harga === 0 || p.price === 0) || p.is_default) || plans[0];
            if (defaultPlan) {
                setSelectedPlanId(defaultPlan.id);
            }
        }
    }, [plans, selectedPlanId]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: { name: '', email: '', password: '', password_confirmation: '' },
    });

    const doRegister = useRegister();
    const password = watch('password');

    const selectedPlan = plans.find((p) => p.id === selectedPlanId);
    const isSelectedFree = selectedPlan ? (selectedPlan.harga === 0 || selectedPlan.price === 0) : true;

    const triggerSnapPayment = (snapToken, snapJsUrl, clientKey, orderId) => {
        setIsLaunchingSnap(true);
        loadMidtransSnapScript(snapJsUrl, clientKey, () => {
            setIsLaunchingSnap(false);
            if (window.snap) {
                window.snap.pay(snapToken, {
                    onSuccess: async () => {
                        try {
                            if (orderId) {
                                await billingApi.devSimulatePaid(orderId);
                            }
                        } catch (e) {
                            // Suppress error if webhook already processed it
                        }
                        toast.success('Pembayaran berhasil! Akun Anda telah disetujui secara otomatis.', 'Pembayaran Sukses');
                        setRegisteredState((prev) => ({
                            ...prev,
                            paidSuccess: true,
                            pendingPayment: false,
                        }));
                    },
                    onPending: () => {
                        toast.info('Pembayaran sedang diproses. Silakan selesaikan pembayaran.', 'Menunggu Pembayaran');
                        setRegisteredState((prev) => ({
                            ...prev,
                            paidSuccess: false,
                            pendingPayment: true,
                        }));
                    },
                    onError: () => {
                        toast.error('Pembayaran gagal atau ditolak. Anda dapat mencoba lagi nanti.', 'Pembayaran Gagal');
                        setRegisteredState((prev) => ({
                            ...prev,
                            paidSuccess: false,
                            pendingPayment: true,
                        }));
                    },
                    onClose: () => {
                        toast.info('Popup pembayaran ditutup. Silakan selesaikan pembayaran.', 'Pembayaran Dibatalkan');
                        setRegisteredState((prev) => ({
                            ...prev,
                            paidSuccess: false,
                            pendingPayment: true,
                        }));
                    },
                });
            } else {
                toast.error('Gagal memuat popup pembayaran Midtrans. Coba muat ulang halaman.', 'Error Script');
            }
        });
    };

    const onSubmit = (values) => {
        doRegister.mutate(
            {
                name: values.name,
                email: values.email,
                password: values.password,
                password_confirmation: values.password_confirmation,
                paket_harga_id: selectedPlanId,
            },
            {
                onSuccess: (response) => {
                    const resData = response?.data ?? response;
                    const snapToken = resData?.snap_token;
                    const isFree = resData?.is_free === true || !snapToken;

                    if (isFree) {
                        setRegisteredState({
                            isFree: true,
                            paidSuccess: false,
                            message: resData?.message || 'Pendaftaran berhasil! Akun Anda sedang menunggu persetujuan dari administrator.',
                        });
                        toast.success('Pendaftaran berhasil! Menunggu persetujuan admin.', 'Registrasi Berhasil');
                    } else {
                        const snapJsUrl = resData?.snap_js_url || 'https://app.sandbox.midtrans.com/snap/snap.js';
                        const clientKey = resData?.client_key;
                        const orderId = resData?.order_id;

                        setRegisteredState({
                            isFree: false,
                            paidSuccess: false,
                            orderId,
                            snapToken,
                            snapJsUrl,
                            clientKey,
                            planName: selectedPlan?.nama || selectedPlan?.name,
                            message: 'Akun terdaftar! Silakan selesaikan pembayaran untuk aktivasi otomatis.',
                        });

                        triggerSnapPayment(snapToken, snapJsUrl, clientKey, orderId);
                    }
                },
            }
        );
    };

    // Determine grid columns dynamically (e.g. 2x2 for 4 plans)
    const gridColsClass = plans.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2';

    // Render Post-Registration State Screens
    if (registeredState) {
        if (registeredState.isFree) {
            return (
                <div className="max-w-4xl w-full bg-[rgb(var(--color-surface))] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[rgb(var(--color-border))] my-4">
                    <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col items-center justify-center text-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
                            <Clock className="h-8 w-8 text-amber-500" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Pendaftaran Berhasil!</h2>
                            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed max-w-xs font-medium">
                                Akun Anda telah terdaftar dengan <span className="font-bold text-indigo-600">Paket Free</span>. Akun sedang menunggu persetujuan <span className="font-bold text-slate-800">Administrator</span>.
                            </p>
                        </div>
                        <div className="w-full bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 text-left space-y-1.5">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                                <p className="text-xs font-semibold text-amber-900">Langkah selanjutnya:</p>
                            </div>
                            <ol className="text-xs text-amber-800/90 space-y-1 list-decimal list-inside pl-1 font-medium">
                                <li>Administrator akan meninjau pendaftaran Anda</li>
                                <li>Setelah disetujui, Anda dapat langsung login</li>
                            </ol>
                        </div>
                        <Link
                            to={ROUTES.LOGIN}
                            className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-blue-500/20 transition-all"
                        >
                            <span>Kembali ke Halaman Login</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:w-1/2 relative p-8 flex-col justify-between text-white overflow-hidden bg-gradient-to-br from-[#3b82f6] via-[#4f46e5] to-[#6d28d9]">
                        <div className="relative z-10 my-auto py-4">
                            <h2 className="text-3xl font-extrabold leading-tight text-white mb-2 tracking-tight">
                                Build the future <br />
                                with DataSoft.
                            </h2>
                            <p className="text-xs text-blue-100/90 leading-relaxed font-normal">
                                Bangun website impian Anda menggunakan platform pembuatan website tercepat dan paling fleksibel.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        if (registeredState.paidSuccess) {
            return (
                <div className="max-w-4xl w-full bg-[rgb(var(--color-surface))] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[rgb(var(--color-border))] my-4">
                    <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col items-center justify-center text-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                        </div>
                        <div>
                            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                                Otomatis Disetujui System
                            </span>
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-2">
                                Pembayaran Berhasil!
                            </h2>
                            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed max-w-xs font-medium">
                                Pembayaran paket <span className="font-bold text-indigo-600">{registeredState.planName || 'Berbayar'}</span> telah dikonfirmasi. Akun Anda telah <span className="font-bold text-emerald-600">otomatis disetujui</span>.
                            </p>
                        </div>

                        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-left space-y-1 font-mono text-xs">
                            <div className="flex justify-between text-slate-600">
                                <span>Order ID:</span>
                                <span className="font-bold text-slate-900">{registeredState.orderId}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Status Akun:</span>
                                <span className="font-bold text-emerald-600">DISETUJUI (APPROVED)</span>
                            </div>
                        </div>

                        <Link
                            to={ROUTES.LOGIN}
                            className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-emerald-500/20 transition-all"
                        >
                            <span>Login ke Akun Anda</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="hidden md:flex md:w-1/2 relative p-8 flex-col justify-between text-white overflow-hidden bg-gradient-to-br from-[#059669] via-[#0d9488] to-[#4f46e5]">
                        <div className="relative z-10 my-auto py-4">
                            <h2 className="text-3xl font-extrabold leading-tight text-white mb-2 tracking-tight">
                                Welcome aboard! <br />
                                Plan Active.
                            </h2>
                            <p className="text-xs text-emerald-100/90 leading-relaxed font-normal">
                                Paket langganan Anda sudah aktif sepenuhnya. Silakan login untuk mulai membuat website.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="max-w-4xl w-full bg-[rgb(var(--color-surface))] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[rgb(var(--color-border))] my-4">
                <div className="w-full md:w-1/2 p-8 sm:p-10 flex flex-col items-center justify-center text-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center">
                        <CreditCard className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Menunggu Pembayaran</h2>
                        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed max-w-xs font-medium">
                            Selesaikan pembayaran paket <span className="font-bold text-indigo-600">{registeredState.planName}</span> agar akun Anda <span className="font-bold text-slate-800">otomatis disetujui</span>.
                        </p>
                    </div>

                    <div className="w-full bg-indigo-50/80 border border-indigo-200/80 rounded-2xl p-3.5 text-left space-y-1 font-mono text-xs">
                        <div className="flex justify-between items-center">
                            <span className="text-indigo-700">Order ID:</span>
                            <span className="font-bold text-indigo-900">{registeredState.orderId}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 w-full">
                        <button
                            type="button"
                            onClick={() => triggerSnapPayment(registeredState.snapToken, registeredState.snapJsUrl, registeredState.clientKey, registeredState.orderId)}
                            disabled={isLaunchingSnap}
                            className="flex-1 py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5"
                        >
                            {isLaunchingSnap ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin text-white" />
                            ) : (
                                <CreditCard className="h-3.5 w-3.5" />
                            )}
                            <span>Bayar Sekarang (Midtrans)</span>
                        </button>

                        <Link
                            to={ROUTES.LOGIN}
                            className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-all text-center"
                        >
                            Halaman Login
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex md:w-1/2 relative p-8 flex-col justify-between text-white overflow-hidden bg-gradient-to-br from-[#3b82f6] via-[#4f46e5] to-[#6d28d9]">
                    <div className="relative z-10 my-auto py-4">
                        <h2 className="text-3xl font-extrabold leading-tight text-white mb-2 tracking-tight">
                            Instant Auto Approval <br />
                            on Payment.
                        </h2>
                        <p className="text-xs text-blue-100/90 leading-relaxed font-normal">
                            Sistem secara otomatis mendeteksi pembayaran Midtrans dan langsung mengaktifkan akun Anda.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="max-w-[980px] w-full rounded-[28px] overflow-hidden flex flex-col md:flex-row relative z-10 bg-white/95 backdrop-blur-xl ds-animate-scale-in my-3"
            style={{
                boxShadow: '0 25px 80px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.4)',
            }}
        >
            {/* Left Column — Form Container */}
            <div className="w-full md:w-7/12 p-5 sm:p-7 flex flex-col justify-between bg-white ds-animate-fade-up">
                <div>
                    {/* Brand Logo & Back to Login */}
                    <div className="flex items-center justify-between">
                        <BrandLogo />
                        <Link
                            to={ROUTES.LOGIN}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100/90 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 text-xs font-bold transition-all duration-200 border border-slate-200/70 hover:scale-[1.02] active:scale-95"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            <span>Halaman Login</span>
                        </Link>
                    </div>

                    {/* Heading */}
                    <div className="mt-3 mb-3">
                        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Create Account</h1>
                        <p className="text-xs text-slate-500 font-medium">
                            Join and start building your company profile website
                        </p>
                    </div>

                    {doRegister.isError && (
                        <div className="mb-2.5 ds-animate-fade-in">
                            <Alert variant="error" title="Gagal Membuat Akun">
                                {doRegister.error?.response?.data?.errors?.email?.[0] ||
                                    doRegister.error?.response?.data?.message ||
                                    'Periksa kembali data formulir Anda.'}
                            </Alert>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5" noValidate>
                        {/* Name Field */}
                        <div className="group">
                            <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Jane Doe"
                                    className={`w-full pl-9 pr-3 py-2 rounded-xl border text-xs transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                        errors.name
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-slate-200 focus:border-indigo-600'
                                    }`}
                                    {...register('name', {
                                        required: 'Nama wajib diisi',
                                        minLength: { value: 2, message: 'Minimal 2 karakter' },
                                    })}
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-0.5 text-[10px] font-semibold text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="group">
                            <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type="email"
                                    autoComplete="email"
                                    placeholder="name@company.com"
                                    className={`w-full pl-9 pr-3 py-2 rounded-xl border text-xs transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                        errors.email
                                            ? 'border-red-400 focus:border-red-500'
                                            : 'border-slate-200 focus:border-indigo-600'
                                    }`}
                                    {...register('email', {
                                        required: 'Email wajib diisi',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Format email tidak valid',
                                        },
                                    })}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-0.5 text-[10px] font-semibold text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {/* Password Field */}
                            <div className="group">
                                <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="new-password"
                                        placeholder="Min 8 karakter"
                                        className={`w-full pl-9 pr-8 py-2 rounded-xl border text-xs transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                            errors.password
                                                ? 'border-red-400 focus:border-red-500'
                                                : 'border-slate-200 focus:border-indigo-600'
                                        }`}
                                        {...register('password', {
                                            required: 'Password wajib diisi',
                                            minLength: { value: 8, message: 'Minimal 8 karakter' },
                                        })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-0.5 text-[10px] font-semibold text-red-500">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div className="group">
                                <label className="block text-[11px] font-semibold text-slate-700 mb-0.5">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        autoComplete="new-password"
                                        placeholder="Ulangi password"
                                        className={`w-full pl-9 pr-8 py-2 rounded-xl border text-xs transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                            errors.password_confirmation
                                                ? 'border-red-400 focus:border-red-500'
                                                : 'border-slate-200 focus:border-indigo-600'
                                        }`}
                                        {...register('password_confirmation', {
                                            required: 'Konfirmasi wajib',
                                            validate: (value) => value === password || 'Password tidak cocok',
                                        })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                                    >
                                        {showConfirmPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                                    </button>
                                </div>
                                {errors.password_confirmation && (
                                    <p className="mt-0.5 text-[10px] font-semibold text-red-500">{errors.password_confirmation.message}</p>
                                )}
                            </div>
                        </div>

                        {/* PLAN SELECTION SECTION (2x2 Balanced Grid) */}
                        <div className="pt-1">
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="text-[11px] font-extrabold text-slate-800">
                                    Pilih Paket Langganan
                                </label>
                                <span className="text-[9px] text-indigo-600 font-bold uppercase tracking-wider">
                                    {plans.length} Paket Tersedia
                                </span>
                            </div>

                            <div className={`grid ${gridColsClass} gap-2`}>
                                {plans.map((plan) => {
                                    const isSelected = selectedPlanId === plan.id;
                                    const isFree = plan.harga === 0 || plan.price === 0;
                                    const priceNum = plan.harga ?? plan.price ?? 0;
                                    const formattedPrice = isFree
                                        ? 'Free'
                                        : `Rp ${Number(priceNum).toLocaleString('id-ID').replace(/,/g, '.')}`;

                                    return (
                                        <div
                                            key={plan.id}
                                            onClick={() => setSelectedPlanId(plan.id)}
                                            className={`cursor-pointer rounded-xl p-2.5 border transition-all duration-200 relative flex flex-col justify-between ${
                                                isSelected
                                                    ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-600/20 shadow-xs'
                                                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-50'
                                            }`}
                                        >
                                            {plan.is_popular && (
                                                <span className="absolute -top-1.5 right-2 bg-amber-400 text-amber-950 text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full shadow-2xs">
                                                    POPULAR
                                                </span>
                                            )}

                                            <div>
                                                <div className="flex items-center justify-between gap-1">
                                                    <span className="text-[11px] font-extrabold text-slate-800 truncate">
                                                        {plan.nama || plan.name}
                                                    </span>
                                                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                                                        isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                                                    }`}>
                                                        {isSelected && <Check className="h-2 w-2 stroke-[3]" />}
                                                    </div>
                                                </div>
                                                <div className="text-xs font-black text-indigo-600 mt-0.5">
                                                    {formattedPrice}
                                                    {!isFree && <span className="text-[9px] text-slate-400 font-normal">/bulan</span>}
                                                </div>
                                            </div>

                                            <div className="mt-1.5 text-[9px] text-slate-500 border-t border-slate-200/60 pt-1 space-y-0.5">
                                                <div className="flex items-center justify-between">
                                                    <span>Domain:</span>
                                                    <span className="font-bold text-slate-700">
                                                        {plan.maks_domain === -1 || plan.max_domains === -1 ? 'Unlimited' : (plan.maks_domain ?? plan.max_domains ?? 0)}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span>Upload Web:</span>
                                                    <span className="font-bold text-slate-700">
                                                        {(plan.bisa_upload_website ?? plan.can_upload_website) ? 'Ya' : 'Tidak'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* PLAN APPROVAL NOTICE CALLOUT */}
                        <div className={`flex items-start gap-2 p-2.5 rounded-xl border text-[11px] transition-colors duration-200 ${
                            isSelectedFree
                                ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                                : 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                        }`}>
                            {isSelectedFree ? (
                                <>
                                    <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">Ketentuan Paket Free:</p>
                                        <p className="text-[10px] text-amber-800/90 leading-tight mt-0.5">
                                            Akun baru Paket Free harus menunggu <span className="font-bold">persetujuan dari Admin</span> sebelum dapat login.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold">Ketentuan Paket Berbayar:</p>
                                        <p className="text-[10px] text-emerald-800/90 leading-tight mt-0.5">
                                            Setelah pembayaran Midtrans berhasil, akun <span className="font-bold text-emerald-700">otomatis disetujui sistem</span> untuk langsung login.
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={doRegister.isPending || isLaunchingSnap}
                            className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl text-xs shadow-md shadow-indigo-600/25 transition-all duration-200 flex items-center justify-center gap-1.5 disabled:opacity-70 cursor-pointer hover:scale-[1.005] active:scale-[0.99]"
                        >
                            {doRegister.isPending || isLaunchingSnap ? (
                                <Spinner size="sm" />
                            ) : (
                                <>
                                    <span>
                                        {isSelectedFree
                                            ? 'Register Account (Free)'
                                            : `Lanjut Pembayaran (${selectedPlan ? (selectedPlan.harga === 0 ? 'Free' : `Rp ${(selectedPlan.harga ?? selectedPlan.price).toLocaleString('id-ID')}`) : ''})`}
                                    </span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </>
                            )}
                        </button>

                        {/* Footer Link */}
                        <div className="text-center text-[11px] text-slate-500 font-medium">
                            Sudah memiliki akun?{' '}
                            <Link to={ROUTES.LOGIN} className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Column — Animated Hero Banner */}
            <div className="hidden md:flex md:w-5/12 relative p-6 sm:p-8 flex-col justify-between text-white overflow-hidden ds-animate-gradient"
                 style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #4f46e5, #7c3aed, #1e3a8a)' }}>

                <div className="absolute top-6 right-6 z-10 ds-animate-float-slow">
                    <SparkleStarGroup size="lg" color="text-white" />
                </div>

                <div className="relative z-10 flex justify-start pt-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[9px] font-bold tracking-wider text-white uppercase shadow-xs">
                        <Sparkles className="h-2.5 w-2.5 text-blue-200 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>DATASOFT STUDIO 2.0</span>
                    </div>
                </div>

                <div className="relative z-10 my-auto py-4 space-y-3">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black leading-tight text-white mb-2 tracking-tight">
                            Build the future <br />
                            <span className="text-blue-200 drop-shadow-md">with DataSoft.</span>
                        </h2>

                        <p className="text-xs text-blue-100/90 leading-relaxed font-medium">
                            Pilih paket terbaik untuk usaha Anda dan nikmati publikasi website instan.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-md ds-animate-float">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                <span className="text-[10px] font-bold text-white tracking-wide">Instant Auto-Approval on Payment</span>
                            </div>
                            <span className="text-[8px] font-extrabold px-1.5 py-0.2 rounded bg-white/20 text-blue-100 uppercase">Midtrans</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 border-t border-white/20">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-1">
                            <Layers className="h-3.5 w-3.5 text-blue-100" />
                        </div>
                        <div className="text-xs font-black text-white tracking-tight">1.2M+</div>
                        <div className="text-[8px] font-extrabold text-blue-200/90 tracking-wider uppercase">
                            Sites Built
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-1">
                            <ShieldCheck className="h-3.5 w-3.5 text-blue-100" />
                        </div>
                        <div className="text-xs font-black text-white tracking-tight">99.9%</div>
                        <div className="text-[8px] font-extrabold text-blue-200/90 tracking-wider uppercase">
                            Uptime
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center mb-1">
                            <Headphones className="h-3.5 w-3.5 text-blue-100" />
                        </div>
                        <div className="text-xs font-black text-white tracking-tight">24/7</div>
                        <div className="text-[8px] font-extrabold text-blue-200/90 tracking-wider uppercase">
                            Support
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
