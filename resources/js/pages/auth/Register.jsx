import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, User, Mail, Lock, ShieldCheck, ArrowRight, Layers, Headphones, Clock, CheckCircle2, Info } from 'lucide-react';
import { Spinner, Alert, BrandLogo } from '@components/ui';
import { useRegister } from '@hooks';
import { ROUTES } from '@constants';

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

    // Set localStorage flag when registration is successful
    if (doRegister.isSuccess) {
        localStorage.setItem('show_registration_pending_modal', 'true');
    }

    // Show pending approval state after successful registration
    if (doRegister.isSuccess) {
        return (
            <div className="max-w-5xl w-full bg-[rgb(var(--color-surface))] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[660px] border border-[rgb(var(--color-border))]">
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
                            <li>Setelah disetujui, Anda dapat login dan menggunakan platform</li>
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
                    <div className="mt-6 mb-4">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h1>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                            Join and start building your company profile website
                        </p>
                    </div>

                    {doRegister.isError && (
                        <div className="mb-3">
                            <Alert variant="error" title="Unable to create account">
                                {doRegister.error?.response?.data?.errors?.email?.[0] ||
                                    doRegister.error?.response?.data?.message ||
                                    'Please review the form and try again.'}
                            </Alert>
                        </div>
                    )}

                    {/* Pending approval notice */}
                    <div className="mb-3 flex items-start gap-2 px-3 py-2 bg-indigo-50/80 border border-indigo-100 rounded-xl">
                        <Info className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-indigo-700 leading-relaxed font-medium">
                            <span className="font-bold">Perhatian:</span> Akun baru memerlukan persetujuan admin sebelum dapat login.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
                        {/* Name Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Jane Doe"
                                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 text-slate-900 placeholder:text-slate-400 ${
                                        errors.name
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-blue-600'
                                    }`}
                                    {...register('name', {
                                        required: 'Name is required',
                                        minLength: { value: 2, message: 'Name must be at least 2 characters' },
                                    })}
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-1 text-xs font-semibold text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type="email"
                                    autoComplete="email"
                                    placeholder="name@company.com"
                                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 text-slate-900 placeholder:text-slate-400 ${
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
                                <p className="mt-1 text-xs font-semibold text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    placeholder="Minimum 8 characters"
                                    className={`w-full pl-10 pr-11 py-2.5 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 text-slate-900 placeholder:text-slate-400 ${
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
                                <p className="mt-1 text-xs font-semibold text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <ShieldCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    placeholder="Re-enter password"
                                    className={`w-full pl-10 pr-11 py-2.5 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 text-slate-900 placeholder:text-slate-400 ${
                                        errors.password_confirmation
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-blue-600'
                                    }`}
                                    {...register('password_confirmation', {
                                        required: 'Please confirm your password',
                                        validate: (value) => value === password || 'Passwords do not match',
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
                                <p className="mt-1 text-xs font-semibold text-red-500">{errors.password_confirmation.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={doRegister.isPending}
                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 mt-3 cursor-pointer"
                        >
                            {doRegister.isPending ? (
                                <Spinner size="sm" />
                            ) : (
                                <>
                                    <span>Register</span>
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>

                        {/* Footer Link */}
                        <div className="pt-3 text-center text-xs text-slate-500 font-medium">
                            Already have an account?{' '}
                            <Link to={ROUTES.LOGIN} className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
                                Sign in
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

