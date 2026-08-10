import { Outlet } from 'react-router-dom';

export default function GuestLayout() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 antialiased selection:bg-indigo-500 selection:text-white relative overflow-hidden bg-slate-100">

            {/* ── Layer 1: The Exact Uploaded Background Image ── */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-all duration-500"
                style={{
                    backgroundImage: `url('/images/auth-bg.jpg')`,
                }}
            />

            {/* ── Layer 2: Subtle Ambient Corner Glow Orbs ── */}
            <div
                className="absolute -top-20 -left-20 z-0 w-80 h-80 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />
            <div
                className="absolute -bottom-20 -right-20 z-0 w-80 h-80 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />

            {/* ── Layer 3: Soft Center Radial Highlight for Card Readability ── */}
            <div
                className="absolute z-0 pointer-events-none inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(240, 244, 255, 0.1) 60%, transparent 100%)',
                }}
            />

            {/* ── Content Container ── */}
            <div className="relative z-10 w-full flex items-center justify-center">
                <Outlet />
            </div>
        </div>
    );
}

