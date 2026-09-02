import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
    Eye, EyeOff, Sparkles, User, Mail, Lock, ShieldCheck, ArrowRight, ArrowLeft,
    Layers, Headphones, Clock, CheckCircle2, Info
} from 'lucide-react';
import { Spinner, Alert, BrandLogo } from '@shared/components/ui';
import { useRegister } from '@features/auth/hooks/useRegister';
import { ROUTES } from '@constants';

function SparkleStarGroup({ className = '', style = {}, size = 'md', color = 'text-white' }) {
    const scaleMap = {
        sm: 'w-10 h-10',
        md: 'w-16 h-16',
        lg: 'w-24 h-24',
        xl: 'w-32 h-32',
    };
    const currentSize = scaleMap[size] || scaleMap.md;

    return (
        <div className={`relative inline-block select-none pointer-events-none ${className}`} style={style}>
            <svg
                className="absolute -top-2 -left-2 w-5 h-5 text-indigo-200 animate-pulse"
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
                className="absolute -bottom-1 -right-2 w-4 h-4 text-indigo-300 fill-indigo-300 animate-bounce"
                style={{ animationDuration: '3s' }}
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="8" />
            </svg>
        </div>
    );
}

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    const onSubmit = (values) => {
        doRegister.mutate({
            name: values.name,
            email: values.email,
            password: values.password,
            password_confirmation: values.password_confirmation,
        });
    };

    if (doRegister.isSuccess) {
        localStorage.setItem('show_registration_pending_modal', 'true');
    }

    if (doRegister.isSuccess) {
        return (
            <div className="max-w-5xl w-full bg-[rgb(var(--color-surface))] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[660px] border border-[rgb(var(--color-border))] my-6">
                {/* Left Column — Success Message */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col items-center justify-center bg-[rgb(var(--color-surface))] text-center gap-5">
                    <div className="h-20 w-20 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
                        <Clock className="h-10 w-10 text-amber-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Pendaftaran Berhasil!</h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed max-w-xs font-medium">
                            Akun Anda telah berhasil didaftarkan. Akun Anda sedang menunggu persetujuan dari <span className="font-bold text-slate-800">Administrator</span>.
                        </p>
                    </div>
                    <div className="w-full bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 text-left space-y-2">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                            <p className="text-xs font-semibold text-amber-900">Langkah selanjutnya:</p>
                        </div>
                        <ol className="text-xs text-amber-800/90 space-y-1 list-decimal list-inside pl-1 font-medium">
                            <li>Administrator akan meninjau pendaftaran Anda</li>
                            <li>Setelah disetujui, Anda dapat login dan mulai membuat website</li>
                            <li>Hubungi admin jika menunggu lebih dari 1x24 jam</li>
                        </ol>
                    </div>
                    <Link
                        to={ROUTES.LOGIN}
                        className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/25 transition-all"
                    >
                        <span>Kembali ke Halaman Login</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Right Column — Hero Banner */}
                <div className="hidden md:flex md:w-1/2 relative p-8 sm:p-11 flex-col justify-between text-white overflow-hidden bg-gradient-to-br from-[#3b82f6] via-[#4f46e5] to-[#6d28d9]">
                    <div className="absolute top-6 right-6 z-10 pointer-events-none opacity-30 grid grid-cols-6 gap-2">
                        {Array.from({ length: 30 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                        ))}
                    </div>

                    <div className="relative z-10 flex justify-start pt-2">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
                            <Sparkles className="h-3 w-3 text-blue-100" />
                            <span>DATASOFT STUDIO</span>
                        </div>
                    </div>

                    <div className="relative z-10 my-auto py-6">
                        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-white mb-3 tracking-tight">
                            Build the future <br />
                            with DataSoft.
                        </h2>

                        <p className="text-xs lg:text-sm text-blue-100/90 leading-relaxed max-w-sm font-normal">
                            Join thousands of organizations using DataSoft to create stunning digital experiences with precision.
                        </p>
                    </div>

                    <div className="relative z-10 grid grid-cols-3 gap-3 pt-6 border-t border-white/20">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                                <Layers className="h-4 w-4 text-blue-100" />
                            </div>
                            <div className="text-base font-extrabold text-white tracking-tight">1.2M+</div>
                            <div className="text-[9px] font-bold text-blue-100/80 tracking-wider uppercase mt-0.5">
                                Sites Built
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                                <ShieldCheck className="h-4 w-4 text-blue-100" />
                            </div>
                            <div className="text-base font-extrabold text-white tracking-tight">99.9%</div>
                            <div className="text-[9px] font-bold text-blue-100/80 tracking-wider uppercase mt-0.5">
                                Uptime
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-2">
                                <Headphones className="h-4 w-4 text-blue-100" />
                            </div>
                            <div className="text-base font-extrabold text-white tracking-tight">24/7</div>
                            <div className="text-[9px] font-bold text-blue-100/80 tracking-wider uppercase mt-0.5">
                                Support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="max-w-[980px] w-full rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[580px] relative z-10 transition-all duration-500 bg-white/95 backdrop-blur-xl ds-animate-scale-in my-6"
            style={{
                boxShadow: '0 30px 90px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.4)',
            }}
        >
            {/* Left Column — Form */}
            <div className="w-full md:w-1/2 p-8 sm:p-11 flex flex-col justify-between bg-white ds-animate-fade-up">
                <div>
                    {/* Brand Logo & Back to Login */}
                    <div className="flex items-center justify-between">
                        <BrandLogo />
                        <Link
                            to={ROUTES.LOGIN}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100/90 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 text-xs font-bold transition-all duration-200 border border-slate-200/70 shadow-2xs hover:shadow-xs group hover:scale-[1.02] active:scale-95"
                        >
                            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
                            <span>Halaman Login</span>
                        </Link>
                    </div>

                    {/* Heading */}
                    <div className="mt-6 mb-4">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h1>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                            Join and start building your company profile website
                        </p>
                    </div>

                    {doRegister.isError && (
                        <div className="mb-3 ds-animate-fade-in">
                            <Alert variant="error" title="Gagal Membuat Akun">
                                {doRegister.error?.response?.data?.errors?.email?.[0] ||
                                    doRegister.error?.response?.data?.message ||
                                    'Periksa kembali data formulir Anda.'}
                            </Alert>
                        </div>
                    )}

                    {/* Pending approval notice */}
                    <div className="mb-3 flex items-start gap-2 px-3 py-2 bg-indigo-50/80 border border-indigo-100 rounded-xl ds-animate-fade-in">
                        <Info className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-indigo-700 leading-relaxed font-medium">
                            <span className="font-bold">Perhatian:</span> Akun baru secara otomatis terdaftar dengan paket Free dan memerlukan persetujuan admin sebelum login.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
                        {/* Name Field */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Jane Doe"
                                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                        errors.name
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-indigo-600'
                                    }`}
                                    {...register('name', {
                                        required: 'Nama wajib diisi',
                                        minLength: { value: 2, message: 'Minimal 2 karakter' },
                                    })}
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-1 text-xs font-semibold text-red-500 ds-animate-fade-in">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type="email"
                                    autoComplete="email"
                                    placeholder="name@company.com"
                                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                        errors.email
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
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
                                <p className="mt-1 text-xs font-semibold text-red-500 ds-animate-fade-in">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    placeholder="Minimal 8 karakter"
                                    className={`w-full pl-10 pr-11 py-2.5 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                        errors.password
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
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
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-xs font-semibold text-red-500 ds-animate-fade-in">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <ShieldCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    placeholder="Ulangi password"
                                    className={`w-full pl-10 pr-11 py-2.5 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                        errors.password_confirmation
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-indigo-600'
                                    }`}
                                    {...register('password_confirmation', {
                                        required: 'Konfirmasi password wajib diisi',
                                        validate: (value) => value === password || 'Password tidak cocok',
                                    })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.password_confirmation && (
                                <p className="mt-1 text-xs font-semibold text-red-500 ds-animate-fade-in">{errors.password_confirmation.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={doRegister.isPending}
                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 mt-3 cursor-pointer hover:scale-[1.01] active:scale-[0.99] ds-animate-pulse-glow"
                        >
                            {doRegister.isPending ? (
                                <Spinner size="sm" />
                            ) : (
                                <>
                                    <span>Register Account</span>
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>

                        {/* Footer Link */}
                        <div className="pt-2 text-center text-xs text-slate-500 font-medium">
                            Sudah memiliki akun?{' '}
                            <Link to={ROUTES.LOGIN} className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Column — Animated Hero Banner */}
            <div className="hidden md:flex md:w-1/2 relative p-8 sm:p-11 flex-col justify-between text-white overflow-hidden ds-animate-gradient"
                 style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #4f46e5, #7c3aed, #1e3a8a)' }}>

                <div className="absolute top-8 right-8 z-10 ds-animate-float-slow">
                    <SparkleStarGroup size="xl" color="text-white" />
                </div>

                <div className="relative z-10 flex justify-start pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm hover:scale-105 transition-transform cursor-default">
                        <Sparkles className="h-3 w-3 text-blue-200 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>DATASOFT STUDIO 2.0</span>
                    </div>
                </div>

                <div className="relative z-10 my-auto py-6 space-y-4">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black leading-tight text-white mb-2 tracking-tight">
                            Build the future <br />
                            <span className="text-blue-200 drop-shadow-md">with DataSoft.</span>
                        </h2>

                        <p className="text-xs lg:text-sm text-blue-100/90 leading-relaxed max-w-sm font-medium">
                            Join thousands of organizations using DataSoft to create stunning digital experiences with precision.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 shadow-xl ds-animate-float hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
                                <span className="text-[11px] font-bold text-white tracking-wide">1-Click Subdomain Publish</span>
                            </div>
                            <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-md bg-white/20 text-blue-100 uppercase">Ready</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-3 gap-3 pt-6 border-t border-white/20">
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-sm">
                            <Layers className="h-4 w-4 text-blue-100 group-hover:rotate-6 transition-transform" />
                        </div>
                        <div className="text-base font-black text-white tracking-tight">1.2M+</div>
                        <div className="text-[9px] font-extrabold text-blue-200/90 tracking-wider uppercase mt-0.5">
                            Sites Built
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-sm">
                            <ShieldCheck className="h-4 w-4 text-blue-100 group-hover:rotate-6 transition-transform" />
                        </div>
                        <div className="text-base font-black text-white tracking-tight">99.9%</div>
                        <div className="text-[9px] font-extrabold text-blue-200/90 tracking-wider uppercase mt-0.5">
                            Uptime
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center group cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-sm">
                            <Headphones className="h-4 w-4 text-blue-100 group-hover:rotate-6 transition-transform" />
                        </div>
                        <div className="text-base font-black text-white tracking-tight">24/7</div>
                        <div className="text-[9px] font-extrabold text-blue-200/90 tracking-wider uppercase mt-0.5">
                            Support
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
