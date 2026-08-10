import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, User, Lock, ArrowRight, Layers, ShieldCheck, Headphones } from 'lucide-react';
import { Spinner, Alert, BrandLogo } from '@components/ui';
import { useLogin } from '@hooks';
import { ROUTES } from '@constants';

export default function Login() {
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
            className="max-w-[960px] w-full rounded-[28px] overflow-hidden flex flex-col md:flex-row min-h-[560px] relative z-10 transition-all duration-300 bg-white"
            style={{
                boxShadow: '0 25px 70px rgba(30, 41, 59, 0.18)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
            }}
        >
            {/* Left Column — Form */}
            <div className="w-full md:w-1/2 p-8 sm:p-11 flex flex-col justify-between bg-white">
                <div>
                    {/* Brand Logo */}
                    <BrandLogo />

                    {/* Heading */}
                    <div className="mt-8 mb-6">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h1>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
                            Sign in to continue to your dashboard
                        </p>
                    </div>

                    {maintenanceNotice && (
                        <div className="mb-4">
                            <Alert variant="warning" title="Modus Pemeliharaan Aktif">
                                {maintenanceNotice}
                            </Alert>
                        </div>
                    )}

                    {justRegistered && (
                        <div className="mb-4">
                            <Alert variant="success" title="Akun berhasil dibuat!">
                                Silakan masuk menggunakan email dan password Anda.
                            </Alert>
                        </div>
                    )}

                    {login.isError && (
                        <div className="mb-4">
                            <Alert variant="error" title="Gagal Login">
                                {login.error?.response?.data?.message || 'Please check your credentials and try again.'}
                            </Alert>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Email Address
                            </label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="email"
                                    autoComplete="email"
                                    placeholder="name@company.com"
                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 text-slate-900 placeholder:text-slate-400 ${
                                        errors.email
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-blue-600'
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
                                <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    className={`w-full pl-10 pr-11 py-3 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 text-slate-900 placeholder:text-slate-400 ${
                                        errors.password
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-blue-600'
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
                                <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Remember Me + Forgot Password Row */}
                        <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/30 bg-slate-50 cursor-pointer"
                                    {...register('remember')}
                                />
                                <label htmlFor="remember" className="ml-2 block text-xs font-medium text-slate-600 select-none cursor-pointer">
                                    Remember Me
                                </label>
                            </div>
                            <Link
                                to={ROUTES.FORGOT_PASSWORD}
                                className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={login.isPending}
                            className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 mt-4 cursor-pointer"
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
                            <Link to={ROUTES.REGISTER} className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Column — Hero Banner */}
            <div className="hidden md:flex md:w-1/2 relative p-8 sm:p-11 flex-col justify-between text-white overflow-hidden bg-gradient-to-br from-[#3b82f6] via-[#4f46e5] to-[#6d28d9]">

                {/* Top Right Dot Matrix Pattern */}
                <div className="absolute top-6 right-6 z-10 pointer-events-none opacity-30 grid grid-cols-6 gap-2">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                    ))}
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex justify-start pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
                        <Sparkles className="h-3 w-3 text-blue-100" />
                        <span>DATASOFT STUDIO</span>
                    </div>
                </div>

                {/* Center Hero Content */}
                <div className="relative z-10 my-auto py-6">
                    <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-white mb-3 tracking-tight">
                        Build the future <br />
                        with DataSoft.
                    </h2>

                    <p className="text-xs lg:text-sm text-blue-100/90 leading-relaxed max-w-sm font-normal">
                        Join thousands of organizations using DataSoft to create stunning digital experiences with precision.
                    </p>
                </div>

                {/* Bottom Stats Footer with Icons */}
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


