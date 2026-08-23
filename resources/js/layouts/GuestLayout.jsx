import { Outlet } from 'react-router-dom';

function SparkleStarGroup({ className = '', style = {}, size = 'md', color = 'text-indigo-500' }) {
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
                className="absolute -top-2 -left-2 w-5 h-5 text-indigo-400 animate-pulse"
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
                className={`${currentSize} ${color}`}
                viewBox="0 0 100 100"
                fill="currentColor"
                fillOpacity="0.1"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinejoin="round"
                strokeLinecap="round"
            >
                <path d="M50 5 C50 30, 70 50, 95 50 C70 50, 50 70, 50 95 C50 70, 30 50, 5 50 C30 50, 50 30, 50 5 Z" />
            </svg>

            {/* Bottom-right small circle */}
            <svg
                className="absolute -bottom-1 -right-2 w-4 h-4 text-indigo-500 fill-indigo-500 animate-bounce"
                style={{ animationDuration: '3.5s' }}
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="12" r="8" />
            </svg>
        </div>
    );
}

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

            {/* ── Layer 2: Floating Animated Sparkle Stars (Top Right & Bottom Left) ── */}
            <div className="absolute top-8 right-12 z-0 ds-animate-float-slow opacity-85">
                <SparkleStarGroup size="xl" color="text-indigo-600" />
            </div>

            <div className="absolute bottom-10 left-12 z-0 ds-animate-float-reverse opacity-75">
                <SparkleStarGroup size="lg" color="text-indigo-500" />
            </div>

            <div className="absolute top-1/3 left-8 z-0 ds-animate-float-slow opacity-50">
                <SparkleStarGroup size="sm" color="text-indigo-400" />
            </div>

            {/* ── Layer 3: Soft Center Light Highlight for Card Readability ── */}
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

