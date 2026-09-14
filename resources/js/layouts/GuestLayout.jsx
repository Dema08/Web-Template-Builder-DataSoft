import { Outlet } from 'react-router-dom';

export default function GuestLayout() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden bg-slate-100">

            {/* ── Layer 1: Background Image ── */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-all duration-500"
                style={{
                    backgroundImage: `url('/images/auth-bg.jpg')`,
                }}
            />

            {/* ── Layer 2: Soft Center Light Highlight for Card Readability ── */}
            <div
                className="absolute z-0 pointer-events-none inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(240, 244, 255, 0.15) 60%, transparent 100%)',
                }}
            />

            {/* ── Content Container ── */}
            <div className="relative z-10 w-full flex items-center justify-center ds-animate-scale-in">
                <Outlet />
            </div>
        </div>
    );
}

