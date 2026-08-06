import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, Compass, Clock, CheckCircle2, Info } from 'lucide-react';
import { Spinner, Alert } from '@components/ui';
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

    // Show pending approval state after successful registration
    if (doRegister.isSuccess) {
        return (
            <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[660px] border border-gray-100/50">
                <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col items-center justify-center bg-white text-center gap-5">
                    <div className="h-20 w-20 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
                        <Clock className="h-10 w-10 text-amber-500" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Pendaftaran Berhasil!</h2>
                        <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-xs">
                            Akun Anda telah berhasil didaftarkan. Akun Anda sedang menunggu persetujuan dari <span className="font-bold text-gray-700">Administrator</span>.
                        </p>
                    </div>
                    <div className="w-full bg-amber-50 border border-amber-200 rounded-2xl p-4 text-left space-y-2">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                            <p className="text-xs font-semibold text-amber-800">Langkah selanjutnya:</p>
                        </div>
                        <ol className="text-xs text-amber-700 space-y-1 list-decimal list-inside pl-1">
                            <li>Administrator akan meninjau pendaftaran Anda</li>
                            <li>Setelah disetujui, Anda dapat login dan menggunakan platform</li>
                            <li>Hubungi admin jika menunggu lebih dari 1x24 jam</li>
                        </ol>
                    </div>
                    <Link
                        to={ROUTES.LOGIN}
                        className="mt-2 inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-600/25 transition-all"
                    >
                        Kembali ke Halaman Login
                    </Link>
                </div>
                <div className="hidden md:flex md:w-1/2 relative bg-slate-900 p-10 flex-col justify-between text-white overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700/85 via-blue-900/90 to-slate-950/95 backdrop-blur-[2px]" />
                    <div className="relative z-10 flex justify-end">
                        <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl p-4 w-28 h-28 flex flex-col items-center justify-center text-center shadow-2xl">
                            <Compass className="h-8 w-8 text-white/90 mb-1.5 stroke-[1.5]" />
                            <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase">DATASOFT</span>
                        </div>
                    </div>
                    <div className="relative z-10 my-auto py-8 text-center">
                        <Clock className="h-16 w-16 text-amber-300 mx-auto mb-4" />
                        <h2 className="text-3xl font-extrabold text-white mb-3">Menunggu Persetujuan</h2>
                        <p className="text-sm text-blue-100/80 leading-relaxed">Akun Anda telah terdaftar. Admin akan segera meninjau dan menyetujui akun Anda.</p>
                    </div>
                    <div className="relative z-10 grid grid-cols-3 gap-4 pt-6 border-t border-white/15">
                        <div>
                            <div className="text-base font-extrabold text-white tracking-tight">1.2M+</div>
                            <div className="text-[9px] font-bold text-blue-200/70 tracking-widest uppercase mt-0.5">SITES BUILT</div>
                        </div>
                        <div>
                            <div className="text-base font-extrabold text-white tracking-tight">99.9%</div>
                            <div className="text-[9px] font-bold text-blue-200/70 tracking-widest uppercase mt-0.5">PLATFORM UPTIME</div>
                        </div>
                        <div>
                            <div className="text-base font-extrabold text-white tracking-tight">24/7</div>
                            <div className="text-[9px] font-bold text-blue-200/70 tracking-widest uppercase mt-0.5">EXPERT SUPPORT</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[660px] border border-gray-100/50">
            {/* Left Column — Form */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-between bg-white">
                <div>
                    {/* Brand Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-md shadow-blue-500/20">
                            DS
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">DataSoft</span>
                    </div>

                    {/* Heading */}
                    <div className="mt-8 mb-6">
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create Account</h1>
                        <p className="text-sm text-gray-500 mt-1.5">Join and start building your company profile website with DataSoft.</p>
                    </div>

                    {doRegister.isError && (
                        <div className="mb-4">
                            <Alert variant="error" title="Unable to create account">
                                {doRegister.error?.response?.data?.errors?.email?.[0] ||
                                    doRegister.error?.response?.data?.message ||
                                    'Please review the form and try again.'}
                            </Alert>
                        </div>
                    )}

                    {/* Pending approval notice */}
                    <div className="mb-4 flex items-start gap-2 px-3 py-2.5 bg-blue-50 border border-blue-200 rounded-xl">
                        <Info className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-700 leading-relaxed">
                            <span className="font-bold">Perhatian:</span> Akun baru memerlukan persetujuan admin sebelum dapat login.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
                        {/* Name Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                autoComplete="name"
                                placeholder="Jane Doe"
                                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                                    errors.name
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                        : 'border-gray-200 focus:border-blue-600'
                                }`}
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                autoComplete="email"
                                placeholder="name@datasoft.id"
                                className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                                    errors.email
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                        : 'border-gray-200 focus:border-blue-600'
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
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    placeholder="Minimum 8 characters"
                                    className={`w-full px-4 py-2.5 pr-10 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                                        errors.password
                                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-gray-200 focus:border-blue-600'
                                    }`}
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: { value: 8, message: 'Password must be at least 8 characters' },
                                    })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    placeholder="Re-enter password"
                                    className={`w-full px-4 py-2.5 pr-10 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                                        errors.password_confirmation
                                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-gray-200 focus:border-blue-600'
                                    }`}
                                    {...register('password_confirmation', {
                                        required: 'Please confirm your password',
                                        validate: (value) => value === password || 'Passwords do not match',
                                    })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.password_confirmation && (
                                <p className="mt-1 text-xs text-red-500">{errors.password_confirmation.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={doRegister.isPending}
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
                        >
                            {doRegister.isPending ? <Spinner size="sm" /> : 'Register'}
                        </button>
                    </form>
                </div>

                {/* Footer Link */}
                <div className="pt-6 text-center text-xs text-gray-500">
                    Already have an account?{' '}
                    <Link to={ROUTES.LOGIN} className="font-bold text-blue-600 hover:text-blue-700">
                        Sign in
                    </Link>
                </div>
            </div>

            {/* Right Column — Hero Banner */}
            <div className="hidden md:flex md:w-1/2 relative bg-slate-900 p-10 flex-col justify-between text-white overflow-hidden">
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
                        Start your journey <br />with DataSoft.
                    </h2>

                    <p className="text-sm text-blue-100/80 leading-relaxed max-w-md font-normal">
                        Create an account to build, customize, and publish your professional company profile website in minutes.
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
