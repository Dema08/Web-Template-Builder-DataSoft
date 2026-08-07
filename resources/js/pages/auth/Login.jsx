import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, Compass } from 'lucide-react';
import { Spinner, Alert, BrandLogo } from '@components/ui';
import { useLogin } from '@hooks';
import { ROUTES } from '@constants';
import { useSettingsStore } from '@store';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const justRegistered = location.state?.registered === true;
    const { brand_color } = useSettingsStore();

    const [maintenanceNotice, setMaintenanceNotice] = useState(() => {
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
        <div className="max-w-4xl w-full bg-[rgb(var(--color-surface))] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[520px] border border-[rgb(var(--color-border))]">
            {/* Left Column — Form */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-[rgb(var(--color-surface))]">
                <div>
                    {/* Brand Logo */}
                    <BrandLogo />

                    {/* Heading */}
                    <div className="mt-6 mb-5">
                        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h1>
                        <p className="text-sm text-gray-500 mt-1.5">Please enter your details to access your dashboard.</p>
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
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                autoComplete="email"
                                placeholder="name@company.com"
                                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                                    errors.email
                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                        : 'border-[rgb(var(--color-border))] focus:border-indigo-600'
                                }`}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Enter a valid email address',
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))]">
                                    Password
                                </label>
                                <Link to={ROUTES.FORGOT_PASSWORD} className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    className={`w-full px-4 py-2.5 pr-10 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600/20 bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-primary))] placeholder:text-[rgb(var(--color-text-tertiary))] ${
                                        errors.password
                                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-[rgb(var(--color-border))] focus:border-indigo-600'
                                    }`}
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: { value: 8, message: 'Password must be at least 8 characters' },
                                    })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-secondary))] focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center pt-1">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 rounded border-[rgb(var(--color-border))] text-indigo-600 focus:ring-indigo-600 bg-[rgb(var(--color-surface-alt))]"
                                {...register('remember')}
                            />
                            <label htmlFor="remember" className="ml-2 block text-xs text-[rgb(var(--color-text-secondary))] select-none">
                                Remember Me
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={login.isPending}
                            className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-xl text-sm shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                        >
                            {login.isPending ? <Spinner size="sm" /> : 'Login'}
                        </button>

                        {/* Footer Link */}
                        <div className="pt-4 text-center text-xs text-[rgb(var(--color-text-secondary))]">
                            Don't have an account?{' '}
                            <Link to={ROUTES.REGISTER} className="font-bold text-indigo-600 hover:text-indigo-700">
                                Register
                            </Link>
                        </div>
                    </form>

                </div>
            </div>

            {/* Right Column — Hero Banner */}
            <div className="hidden md:flex md:w-1/2 relative bg-slate-900 p-10 flex-col justify-between text-white overflow-hidden">
                {/* Background Image with Blue Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')`,
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/85 via-blue-900/90 to-slate-950/95 backdrop-blur-[2px]"></div>

                {/* Floating Top Right Glass Card */}
                <div className="relative z-10 flex justify-end">
                    <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-4 w-28 h-28 flex flex-col items-center justify-center text-center shadow-2xl">
                        <Compass className="h-8 w-8 text-white/90 mb-1.5 stroke-[1.5]" />
                        <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">DATASOFT</span>
                    </div>
                </div>

                {/* Center Hero Content */}
                <div className="relative z-10 my-auto py-8">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] font-medium text-blue-100 mb-5 shadow-sm">
                        <Sparkles className="h-3.5 w-3.5 text-blue-200" />
                        <span>DATASOFT STUDIO SOLUSINDO</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-white mb-4">
                        Build the future <br />with DataSoft.
                    </h2>

                    <p className="text-sm text-blue-100/80 leading-relaxed max-w-md font-normal">
                        Join thousands of organizations using DataSoft Profile Builder to craft pixel-perfect digital experiences with
                        unparalleled precision.
                    </p>
                </div>

                {/* Bottom Stats Footer */}
                <div className="relative z-10 grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
                    <div>
                        <div className="text-base font-extrabold text-white tracking-tight">1.2M+</div>
                        <div className="text-[9px] font-bold text-blue-200/70 tracking-widest uppercase mt-0.5">
                            SITES BUILT
                        </div>
                    </div>
                    <div>
                        <div className="text-base font-extrabold text-white tracking-tight">99.9%</div>
                        <div className="text-[9px] font-bold text-blue-200/70 tracking-widest uppercase mt-0.5">
                            PLATFORM UPTIME
                        </div>
                    </div>
                    <div>
                        <div className="text-base font-extrabold text-white tracking-tight">24/7</div>
                        <div className="text-[9px] font-bold text-blue-200/70 tracking-widest uppercase mt-0.5">
                            EXPERT SUPPORT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
