import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, User, Lock, ArrowRight, ArrowLeft, Layers, ShieldCheck, Headphones } from 'lucide-react';
import { Spinner, Alert, BrandLogo } from '@shared/components/ui';
import { useLogin } from '@hooks';
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
            {/* Top-left small plus star */}
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

            {/* Main 4-pointed smooth curve star */}
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

            {/* Bottom-right small circle */}
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

export default function Login({ onSwitchToRegister }) {
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const justRegistered = location.state?.registered === true;

    const [maintenanceNotice] = useState(() => {
        const notice = sessionStorage.getItem('maintenance_logout_notice');
        if (notice) {
            sessionStorage.removeItem('maintenance_logout_notice');
            return notice;
        }
        return null;
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: { email: '', password: '', remember: false },
    });

    const login = useLogin();

    const onSubmit = (values) => {
        login.mutate(values);
    };

    return (
        <div
            className="w-full h-full rounded-[32px] overflow-hidden flex flex-col md:flex-row relative bg-white/95 backdrop-blur-xl"
            style={{
                boxShadow: '0 30px 90px rgba(15, 23, 42, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.4)',
            }}
        >
            {/* Left Column — Form with stagger entrance */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between bg-white ds-animate-fade-up">
                <div>
                    {/* Brand Logo & Back to Landing Page */}
                    <div className="flex items-center justify-between">
                        <BrandLogo />
                        <Link
                            to="/"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100/90 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 text-xs font-bold transition-all duration-200 border border-slate-200/70 shadow-2xs hover:shadow-xs group hover:scale-[1.02] active:scale-95"
                        >
                            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
                            <span>Kembali ke Beranda</span>
                        </Link>
                    </div>

                    {/* Heading */}
                    <div className="mt-8 mb-6">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h1>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
                            Sign in to continue to your dashboard
                        </p>
                    </div>

                    {maintenanceNotice && (
                        <div className="mb-4 ds-animate-fade-in">
                            <Alert variant="warning" title="Modus Pemeliharaan Aktif">
                                {maintenanceNotice}
                            </Alert>
                        </div>
                    )}

                    {justRegistered && (
                        <div className="mb-4 ds-animate-fade-in">
                            <Alert variant="success" title="Akun berhasil dibuat!">
                                Silakan masuk menggunakan email dan password Anda.
                            </Alert>
                        </div>
                    )}

                    {login.isError && (
                        <div className="mb-4 ds-animate-fade-in">
                            <Alert variant="error" title="Gagal Login">
                                {login.error?.response?.data?.message || 'Please check your credentials and try again.'}
                            </Alert>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} method="post" className="space-y-4" noValidate>
                        {/* Email Field */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Email Address
                            </label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type="email"
                                    autoComplete="email"
                                    placeholder="name@company.com"
                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                        errors.email
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-indigo-600'
                                    }`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Enter a valid email address',
                                        },
                                    })}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1.5 text-xs font-semibold text-red-500 ds-animate-fade-in">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="group">
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    className={`w-full pl-10 pr-11 py-3 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 text-slate-900 placeholder:text-slate-400 ${
                                        errors.password
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-indigo-600'
                                    }`}
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: { value: 8, message: 'Password must be at least 8 characters' },
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
                                <p className="mt-1.5 text-xs font-semibold text-red-500 ds-animate-fade-in">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Remember Me + Forgot Password Row */}
                        <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/30 bg-slate-50 cursor-pointer"
                                    {...register('remember')}
                                />
                                <label htmlFor="remember" className="ml-2 block text-xs font-medium text-slate-600 select-none cursor-pointer">
                                    Remember Me
                                </label>
                            </div>
                            <Link
                                to={ROUTES.FORGOT_PASSWORD}
                                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit Button with Gradient Animation & Glow */}
                        <button
                            type="submit"
                            disabled={login.isPending}
                            className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 mt-4 cursor-pointer hover:scale-[1.01] active:scale-[0.99] ds-animate-pulse-glow"
                        >
                            {login.isPending ? (
                                <Spinner size="sm" />
                            ) : (
                                <>
                                    <span>Login</span>
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>

                        {/* Footer Link */}
                        <div className="pt-4 text-center text-xs text-slate-500 font-medium">
                            Don't have an account?{' '}
                            <Link
                                to={ROUTES.REGISTER}
                                onClick={(e) => {
                                    if (onSwitchToRegister) {
                                        e.preventDefault();
                                        onSwitchToRegister();
                                    }
                                }}
                                className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline cursor-pointer"
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Column — Animated Hero Banner */}
            <div className="hidden md:flex md:w-1/2 relative p-8 sm:p-11 flex-col justify-between text-white overflow-hidden ds-animate-gradient"
                 style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb, #4f46e5, #7c3aed, #1e3a8a)' }}>

                {/* Top Right Sparkle Star */}
                <div className="absolute top-8 right-8 z-10 ds-animate-float-slow">
                    <SparkleStarGroup size="xl" color="text-white" />
                </div>

                {/* Bottom Left Sparkle Star (smaller) */}
                <div className="absolute bottom-24 left-8 z-10 ds-animate-float-reverse opacity-60">
                    <SparkleStarGroup size="md" color="text-blue-200" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex justify-start pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm hover:scale-105 transition-transform cursor-default">
                        <Sparkles className="h-3 w-3 text-blue-200 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>MICRODATA STUDIO 2.0</span>
                    </div>
                </div>

                {/* Center Animated Hero Content + Floating Builder Glass Card */}
                <div className="relative z-10 my-auto py-6 space-y-5">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-black leading-tight text-white mb-3 tracking-tight">
                            Build the future <br />
                            <span className="text-blue-200 drop-shadow-md">with Microdata.</span>
                        </h2>

                        <p className="text-xs lg:text-sm text-blue-100/90 leading-relaxed max-w-sm font-medium">
                            Join thousands of organizations using Microdata to create stunning digital experiences with precision.
                        </p>
                    </div>

                    {/* Floating Glass Builder Preview Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl ds-animate-float hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                <span className="text-[11px] font-bold text-white tracking-wide">Live Builder Engine</span>
                            </div>
                            <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-md bg-white/20 text-blue-100 uppercase tracking-wider">Active</span>
                        </div>
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-400 rounded-full ds-animate-shimmer" style={{ width: '85%' }} />
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Footer with Hover Motion */}
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


