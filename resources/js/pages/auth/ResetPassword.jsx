import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, Lock, ShieldCheck, ArrowRight, Layers, Headphones } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Spinner, Alert, BrandLogo } from '@components/ui';
import { ROUTES } from '@constants';

export default function ResetPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const email = searchParams.get('email') || '';
    const otp = searchParams.get('otp') || '';

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: { new_password: '', new_password_confirmation: '' },
    });

    const newPassword = watch('new_password');

    useEffect(() => {
        if (!email || !otp) {
            navigate(ROUTES.FORGOT_PASSWORD);
        }
    }, [email, otp, navigate]);

    const onSubmit = async (values) => {
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || '/api'}/v1/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    otp_code: otp,
                    new_password: values.new_password,
                    new_password_confirmation: values.new_password_confirmation,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Gagal mereset password.');
            }

            setSuccess('Password berhasil diubah! Mengarahkan ke halaman login...');

            // Redirect to login page after 2 seconds
            setTimeout(() => {
                navigate(ROUTES.LOGIN);
            }, 2000);
        } catch (err) {
            setError(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setIsLoading(false);
        }
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
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Reset Password</h1>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
                            Masukkan password baru untuk akun Anda.
                        </p>
                    </div>

                    {error && (
                        <div className="mb-4">
                            <Alert variant="error" title="Gagal">
                                {error}
                            </Alert>
                        </div>
                    )}

                    {success && (
                        <div className="mb-4">
                            <Alert variant="success" title="Berhasil">
                                {success}
                            </Alert>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                        {/* New Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Password Baru
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className={`w-full pl-10 pr-11 py-3 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 text-slate-900 placeholder:text-slate-400 ${
                                        errors.new_password
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-blue-600'
                                    }`}
                                    {...register('new_password', {
                                        required: 'Password baru wajib diisi',
                                        minLength: {
                                            value: 8,
                                            message: 'Password minimal 8 karakter',
                                        },
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
                            {errors.new_password && (
                                <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.new_password.message}</p>
                            )}
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                Konfirmasi Password
                            </label>
                            <div className="relative">
                                <ShieldCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    className={`w-full pl-10 pr-11 py-3 rounded-xl border text-sm transition-all duration-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 text-slate-900 placeholder:text-slate-400 ${
                                        errors.new_password_confirmation
                                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                                            : 'border-slate-200 focus:border-blue-600'
                                    }`}
                                    {...register('new_password_confirmation', {
                                        required: 'Konfirmasi password wajib diisi',
                                        validate: (value) =>
                                            value === newPassword || 'Konfirmasi password tidak cocok',
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
                            {errors.new_password_confirmation && (
                                <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.new_password_confirmation.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:from-blue-800 active:to-indigo-800 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 mt-4 cursor-pointer"
                        >
                            {isLoading ? (
                                <Spinner size="sm" />
                            ) : (
                                <>
                                    <span>Reset Password</span>
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>

                        {/* Footer Link */}
                        <div className="pt-4 text-center text-xs text-slate-500 font-medium">
                            Ingat password Anda?{' '}
                            <Link to={ROUTES.LOGIN} className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
                                Login
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

