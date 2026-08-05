import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, Compass } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Spinner, Alert } from '@components/ui';
import { ROUTES } from '@constants';

export default function ForgotPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: { email: '' },
    });

    const emailValue = watch('email');

    const onSubmit = async (values) => {
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || '/api'}/v1/auth/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ email: values.email }),
            });

            const text = await response.text();
            const data = text ? JSON.parse(text) : {};

            if (!response.ok) {
                throw new Error(data?.message || 'Gagal mengirim kode OTP.');
            }

            setSuccess('Kode OTP telah dikirim ke email Anda. Silakan periksa inbox Anda.');

            // Redirect to verify OTP page after 1.5 seconds
            setTimeout(() => {
                window.location.href = `${ROUTES.VERIFY_OTP}?email=${encodeURIComponent(values.email)}`;
            }, 1500);
        } catch (err) {
            setError(err.message || 'Terjadi kesalahan. Silakan coba lagi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[640px] border border-gray-100/50">
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
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Lupa Password?</h1>
                        <p className="text-sm text-gray-500 mt-1.5">
                            Masukkan email Anda dan kami akan mengirimkan kode OTP untuk mereset password.
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                        >
                            {isLoading ? <Spinner size="sm" /> : 'Kirim Kode OTP'}
                        </button>
                    </form>

                    {/* Footer Link */}
                    <div className="pt-6 text-center text-xs text-gray-500">
                        Ingat password Anda?{' '}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue-600 hover:text-blue-700">
                            Login
                        </Link>
                    </div>
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
