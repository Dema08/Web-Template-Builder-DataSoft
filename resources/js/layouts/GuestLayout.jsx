import { Outlet } from 'react-router-dom';

function SparkleStarGroup({ className = '', style = {}, size = 'md' }) {
    const scaleMap = {
        sm: 'w-10 h-10',
        md: 'w-16 h-16',
        lg: 'w-24 h-24',
        xl: 'w-32 h-32',
    };
    const currentSize = scaleMap[size] || scaleMap.md;

    return (
        <div className={`relative inline-flex items-center justify-center select-none pointer-events-none ${className}`} style={style}>
            <img
                src="/images/microdata-emblem.png"
                alt="Microdata"
                className={`${currentSize} object-contain filter drop-shadow-xl animate-spin`}
                style={{ animationDuration: '12s' }}
            />
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

