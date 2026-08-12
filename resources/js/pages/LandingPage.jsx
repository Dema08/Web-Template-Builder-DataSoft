import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Sparkles, ArrowRight, Play, Check, Star, Zap, Globe, Layout,
    Palette, Image, Monitor, Smartphone, Tablet, MousePointer2,
    Shield, Layers, ChevronRight, Menu, X, TrendingUp,
    Users, BarChart3, Clock, Quote, CheckCircle2, Rocket,
    Eye, Code2, Headphones, Award,
} from 'lucide-react';
import { ROUTES } from '@constants';

/* ─────────────────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────────────────── */
const NAV_LINKS = ['Features', 'Templates', 'Builder', 'Pricing', 'Enterprise'];

const FEATURES = [
    {
        icon: MousePointer2,
        title: 'Drag & Drop Builder',
        desc: 'Visual editing experience like Canva — no coding required. Build stunning sections with precision.',
        color: 'from-blue-500 to-indigo-600',
        bg: 'bg-blue-50',
        accent: 'text-blue-600',
    },
    {
        icon: Layout,
        title: 'Professional Templates',
        desc: 'Curated templates for Corporate, Logistics, Manufacturing, Education, Cooperatives, and Startups.',
        color: 'from-indigo-500 to-purple-600',
        bg: 'bg-indigo-50',
        accent: 'text-indigo-600',
    },
    {
        icon: Rocket,
        title: 'One Click Publish',
        desc: 'Launch your website instantly to a custom domain or subdomain — zero deployment knowledge needed.',
        color: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-50',
        accent: 'text-violet-600',
    },
    {
        icon: Monitor,
        title: 'Responsive Design',
        desc: 'Every template is automatically optimized for Desktop, Tablet, and Mobile screens.',
        color: 'from-sky-500 to-blue-600',
        bg: 'bg-sky-50',
        accent: 'text-sky-600',
    },
    {
        icon: Palette,
        title: 'Theme Customizer',
        desc: 'Change colors, fonts, spacing, and layouts instantly with real-time live preview updates.',
        color: 'from-pink-500 to-rose-600',
        bg: 'bg-pink-50',
        accent: 'text-pink-600',
    },
    {
        icon: Image,
        title: 'Media Manager',
        desc: 'Upload and manage images, videos, logos, and documents in an organized media library.',
        color: 'from-amber-500 to-orange-600',
        bg: 'bg-amber-50',
        accent: 'text-amber-600',
    },
];

const TEMPLATES = [
    { title: 'Corporate Business', tag: 'Popular', color: 'from-blue-500 to-indigo-600', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80' },
    { title: 'Logistics Company', tag: 'New', color: 'from-slate-500 to-slate-700', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80' },
    { title: 'Manufacturing', tag: 'Enterprise', color: 'from-orange-500 to-red-600', img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&auto=format&fit=crop&q=80' },
    { title: 'Educational Institution', tag: 'Featured', color: 'from-emerald-500 to-teal-600', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80' },
    { title: 'Startup & SaaS', tag: 'Hot', color: 'from-violet-500 to-purple-700', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80' },
    { title: 'Organization & NGO', tag: 'Pro', color: 'from-cyan-500 to-blue-600', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80' },
];

const STEPS = [
    { num: '01', icon: Layout, title: 'Choose Template', desc: 'Browse professionally designed templates across all business categories.' },
    { num: '02', icon: Palette, title: 'Customize Content', desc: 'Edit text, images, colors, sections, and branding visually in real time.' },
    { num: '03', icon: Eye, title: 'Preview Website', desc: 'Check responsiveness across desktop, tablet, and mobile devices.' },
    { num: '04', icon: Rocket, title: 'Publish Online', desc: 'Launch instantly with one click — go live in seconds, not days.' },
];

const STATS = [
    { value: '1.2M+', label: 'Websites Created', icon: Globe },
    { value: '99.9%', label: 'Platform Uptime', icon: Shield },
    { value: '10K+', label: 'Active Users', icon: Users },
    { value: '24/7', label: 'Expert Support', icon: Headphones },
];

const TESTIMONIALS = [
    {
        name: 'Ahmad Rizki', role: 'CEO, Maju Bersama Corp',
        avatar: 'https://ui-avatars.com/api/?name=Ahmad+Rizki&background=4f46e5&color=fff&size=64',
        review: 'DataSoft transformed how we present our business online. We launched our corporate website in just one afternoon!',
        rating: 5, company: 'Maju Bersama Corp',
    },
    {
        name: 'Sari Dewi', role: 'Marketing Director, EduNusantara',
        avatar: 'https://ui-avatars.com/api/?name=Sari+Dewi&background=7c3aed&color=fff&size=64',
        review: 'The template library is incredible. Professional designs that perfectly match our educational institution brand.',
        rating: 5, company: 'EduNusantara',
    },
    {
        name: 'Budi Santoso', role: 'Operations Manager, LogisTrans',
        avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=0ea5e9&color=fff&size=64',
        review: 'From zero to published in under 2 hours. The drag and drop builder is as intuitive as Canva. Absolutely love it.',
        rating: 5, company: 'LogisTrans Indonesia',
    },
];

const PRICING = [
    {
        name: 'Starter', price: 'Free', period: '',
        desc: 'Perfect for personal projects and exploring the platform.',
        features: ['1 Website', '10 Pages', 'DataSoft Subdomain', 'Basic Templates', 'Community Support'],
        cta: 'Get Started Free', variant: 'outline', highlight: false,
    },
    {
        name: 'Professional', price: 'Rp 149K', period: '/bulan',
        desc: 'For growing businesses ready to scale their online presence.',
        features: ['5 Websites', 'Unlimited Pages', 'Custom Domain', 'All Premium Templates', 'Media Manager', 'Analytics Dashboard', 'Priority Support'],
        cta: 'Start Professional', variant: 'primary', highlight: true,
    },
    {
        name: 'Enterprise', price: 'Custom', period: '',
        desc: 'For agencies, enterprises, and large organizations.',
        features: ['Unlimited Websites', 'White Label Option', 'API Access', 'Dedicated Manager', 'SSO Integration', 'SLA 99.9%', '24/7 Phone Support'],
        cta: 'Contact Sales', variant: 'outline', highlight: false,
    },
];

const TRUSTED_LOGOS = ['Corporate', 'SME', 'Startup', 'Education', 'Organization', 'Logistics'];

/* ─────────────────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────────────────── */
function Navbar({ onDemo }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md"
                             style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>DS</div>
                        <div>
                            <div className="text-[15px] font-extrabold text-slate-900 tracking-tight">DataSoft</div>
                            <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-600 leading-none">Studio</div>
                        </div>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-7">
                        {NAV_LINKS.map(l => (
                            <a key={l} href={`#${l.toLowerCase()}`}
                               className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                                {l}
                            </a>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link to={ROUTES.LOGIN}
                              className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition px-3 py-2">
                            Login
                        </Link>
                        <Link to={ROUTES.REGISTER}
                              className="text-sm font-bold text-white px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                            Start Building
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button type="button" onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition">
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-white rounded-2xl shadow-xl border border-slate-100 mt-2 p-4 space-y-2">
                        {NAV_LINKS.map(l => (
                            <a key={l} href={`#${l.toLowerCase()}`}
                               onClick={() => setMobileOpen(false)}
                               className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition">
                                {l}
                            </a>
                        ))}
                        <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                            <Link to={ROUTES.LOGIN} className="text-center text-sm font-bold text-slate-700 py-2">Login</Link>
                            <Link to={ROUTES.REGISTER}
                                  className="text-center text-sm font-bold text-white py-2.5 rounded-xl"
                                  style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                Start Building Free
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

/* ── Animated Dashboard Illustration ── */
function DashboardIllustration() {
    const [activeSec, setActiveSec] = useState(0);
    const sectionsList = ['Hero Banner','Nav Bar','Feature Grid','Testimonials','Footer','About Us','Contact'];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSec((prev) => (prev + 1) % sectionsList.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-[620px] mx-auto group">
            {/* Pulsing Animated Background Glow */}
            <div className="absolute inset-0 blur-3xl opacity-30 rounded-3xl ds-animate-pulse-slow"
                 style={{ background: 'radial-gradient(circle,#4f46e5 0%,#2563eb 50%,#7c3aed 80%,transparent 100%)' }} />

            {/* Main Dashboard Window */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden ds-hover-glow transition-all duration-500"
                 style={{ boxShadow: '0 30px 80px rgba(79,70,229,0.22)' }}>
                {/* Toolbar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800 text-white">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 bg-slate-800 rounded-lg px-3 py-1 text-[10px] text-slate-300 border border-slate-700 mx-4 font-mono flex items-center justify-between">
                        <span>datasoft.io/builder</span>
                        <span className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> LIVE ENGINE
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-400 px-2 py-1 bg-slate-800 rounded-md">Save</span>
                        <span className="text-[10px] font-bold text-white px-2.5 py-1 rounded-md ds-animate-pulse-glow"
                              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>Publish ✓</span>
                    </div>
                </div>

                {/* Builder Layout */}
                <div className="flex" style={{ height: '290px' }}>
                    {/* Left Sidebar */}
                    <div className="w-14 bg-slate-950 flex flex-col items-center py-3 gap-3">
                        {[Layout, Image, Palette, Layers, Globe].map((Icon, i) => (
                            <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${i === (activeSec % 5) ? 'bg-indigo-600 text-white scale-110 shadow-lg shadow-indigo-500/50' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                                <Icon className="h-4 w-4" />
                            </div>
                        ))}
                    </div>

                    {/* Components Panel */}
                    <div className="w-32 bg-slate-900 p-2 space-y-1.5 overflow-hidden">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1 mb-2">Sections</p>
                        {sectionsList.map((s, i) => (
                            <div key={i} className={`px-2 py-1.5 rounded-lg text-[10px] font-semibold cursor-pointer transition-all duration-300 ${i === activeSec ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md font-bold' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
                                {s}
                            </div>
                        ))}
                    </div>

                    {/* Canvas */}
                    <div className="flex-1 bg-slate-100 relative overflow-hidden">
                        {/* Animated Live Cursor moving around */}
                        <div className="absolute z-40 pointer-events-none ds-animate-cursor transition-all duration-1000">
                            <MousePointer2 className="h-5 w-5 text-indigo-600 fill-indigo-600 drop-shadow-md" />
                            <div className="ml-3 -mt-2 bg-indigo-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow">
                                User Dragging...
                            </div>
                        </div>

                        {/* Website preview */}
                        <div className="absolute inset-2 bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
                            {/* Hero */}
                            <div className={`h-20 flex items-center px-4 gap-2 transition-all duration-500 ${activeSec === 0 ? 'ring-2 ring-indigo-500 bg-indigo-50/50' : ''}`}
                                 style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white text-[8px] font-black animate-pulse">DS</div>
                                <div className="flex-1 space-y-1 pl-1">
                                    <div className="h-2.5 bg-white/90 rounded w-24 ds-animate-shimmer" />
                                    <div className="h-1.5 bg-white/50 rounded w-36" />
                                </div>
                                <div className="h-5 px-2 bg-white rounded text-[8px] font-bold text-indigo-600 flex items-center hover:scale-105 transition">Get Started</div>
                            </div>
                            {/* Feature grid */}
                            <div className={`grid grid-cols-3 gap-1.5 p-2 transition-all duration-500 ${activeSec === 2 ? 'ring-2 ring-indigo-500 bg-indigo-50/50' : ''}`}>
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="bg-slate-50 rounded p-1.5 space-y-1 border border-slate-100 hover:border-indigo-300 transition">
                                        <div className={`w-4 h-4 rounded ${i % 2 === 0 ? 'bg-indigo-500' : 'bg-blue-500'}`} />
                                        <div className="h-1.5 bg-slate-200 rounded w-full" />
                                        <div className="h-1 bg-slate-100 rounded w-3/4" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Selection Highlight Box dynamically moving */}
                        <div className="absolute top-2 left-2 right-2 h-20 border-2 border-dashed border-indigo-500 rounded-lg pointer-events-none transition-all duration-500 bg-indigo-500/5">
                            <div className="absolute -top-3 left-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                Active: {sectionsList[activeSec]}
                            </div>
                        </div>
                    </div>

                    {/* Right Properties Panel */}
                    <div className="w-36 bg-white border-l border-slate-200 p-2 space-y-3">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Properties</p>
                        <div className="space-y-2">
                            <div>
                                <p className="text-[9px] text-slate-500 mb-1">Color Palette</p>
                                <div className="flex gap-1">
                                    {['#4f46e5','#2563eb','#7c3aed','#0ea5e9','#10b981'].map(c => (
                                        <div key={c} className="w-4 h-4 rounded-full cursor-pointer border border-white shadow-sm hover:scale-125 transition-transform" style={{ background: c }} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[9px] text-slate-500 mb-1">Font Family</p>
                                <div className="h-5 bg-indigo-50 border border-indigo-200 rounded text-[9px] px-2 flex items-center text-indigo-700 font-bold">Inter (Google)</div>
                            </div>
                            <div>
                                <p className="text-[9px] text-slate-500 mb-1">Container Gap</p>
                                <div className="grid grid-cols-2 gap-1">
                                    <div className="h-4 bg-slate-100 rounded text-[9px] text-center text-slate-600 flex items-center justify-center font-mono">40px</div>
                                    <div className="h-4 bg-slate-100 rounded text-[9px] text-center text-slate-600 flex items-center justify-center font-mono">24px</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Responsive</p>
                            <div className="flex gap-1.5">
                                <div className="p-1 bg-indigo-600 text-white rounded shadow-sm hover:scale-110 transition"><Monitor className="h-3 w-3" /></div>
                                <div className="p-1 bg-slate-100 text-slate-400 hover:bg-slate-200 rounded transition"><Tablet className="h-3 w-3" /></div>
                                <div className="p-1 bg-slate-100 text-slate-400 hover:bg-slate-200 rounded transition"><Smartphone className="h-3 w-3" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Drifting Cards with CSS animations */}
            <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2.5 ds-animate-float-slow z-20 hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="h-4 w-4 text-white animate-bounce" />
                </div>
                <div>
                    <p className="text-[10px] font-extrabold text-slate-900">Website Published!</p>
                    <p className="text-[9px] text-slate-500 font-mono">datasoft.io/mybrand</p>
                </div>
            </div>

            <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2.5 ds-animate-float-reverse z-20 hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                    <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                    <p className="text-[10px] font-extrabold text-slate-900">+2.4K Live Visitors</p>
                    <p className="text-[9px] text-slate-500 font-semibold">Real-time Analytics</p>
                </div>
            </div>

            <div className="absolute top-1/2 -right-12 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2.5 ds-animate-float-slow z-20 hover:scale-110 transition-transform" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                    <Sparkles className="h-4 w-4 text-white animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                    <p className="text-[10px] font-extrabold text-slate-900">120+ Templates</p>
                    <p className="text-[9px] text-slate-500">Component Based</p>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   ANIMATED STATS SECTION
───────────────────────────────────────────────────────── */
function StatsSection() {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);
    const [counts, setCounts] = useState(['0', '0%', '0', '0/7']);

    // Intersection Observer to trigger counter once
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimated(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // requestAnimationFrame Counter Logic with easeOutExpo (2200ms)
    useEffect(() => {
        if (!isAnimated) return;

        const duration = 2200;
        const startTime = performance.now();
        let animationFrameId;

        const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

        const updateCounters = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeVal = easeOutExpo(progress);

            // Item 1: 1.2M+ (Websites Created) -> 0 to 1.2M+
            const val1 = 1.2 * easeVal;
            let display1;
            if (progress >= 1) {
                display1 = '1.2M+';
            } else if (val1 < 1.0) {
                display1 = Math.floor(val1 * 1000) + 'K';
            } else {
                display1 = val1.toFixed(1) + 'M+';
            }

            // Item 2: 99.9% (Platform Uptime) -> 0% to 99.9%
            const val2 = 99.9 * easeVal;
            let display2 = progress >= 1 ? '99.9%' : val2.toFixed(1) + '%';

            // Item 3: 10K+ (Active Users) -> 0 to 10K+
            const val3 = 10 * easeVal;
            let display3;
            if (progress >= 1) {
                display3 = '10K+';
            } else {
                const kVal = Math.floor(val3);
                display3 = kVal > 0 ? `${kVal}K` : '0';
            }

            // Item 4: 24/7 (Expert Support) -> 0/7 to 24/7
            const val4 = Math.floor(24 * easeVal);
            let display4 = progress >= 1 ? '24/7' : `${val4}/7`;

            setCounts([display1, display2, display3, display4]);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(updateCounters);
            }
        };

        animationFrameId = requestAnimationFrame(updateCounters);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [isAnimated]);

    // Parallax background on scroll (translateY = scroll * 0.15)
    useEffect(() => {
        let animationFrameId;

        const handleScroll = () => {
            if (!sectionRef.current || !bgRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const scrollOffset = (window.innerHeight - rect.top) * 0.15;
                bgRef.current.style.transform = `translate3d(0, ${scrollOffset}px, 0)`;
            }
        };

        const onScroll = () => {
            animationFrameId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-20 sm:py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f172a 100%)' }}
        >
            <div ref={bgRef} className="absolute inset-0 pointer-events-none will-change-transform">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 ds-animate-float-slow"
                    style={{ background: 'radial-gradient(circle,#4f46e5,transparent)', filter: 'blur(80px)' }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 ds-animate-float-reverse"
                    style={{ background: 'radial-gradient(circle,#2563eb,transparent)', filter: 'blur(80px)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Trusted at Scale
                    </h2>
                    <p className="text-slate-400 mt-2 font-medium">Numbers that speak for themselves.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {STATS.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.label}
                                className={`flex flex-col items-center text-center rounded-2xl p-6 border ds-hover-glow transition-all duration-600 ease-out group cursor-pointer ${
                                    isAnimated
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 translate-y-5 scale-95'
                                }`}
                                style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    borderColor: 'rgba(255,255,255,0.08)',
                                    backdropFilter: 'blur(10px)',
                                    transitionDelay: `${idx * 100}ms`,
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                    style={{ background: 'rgba(79,70,229,0.2)', border: '1px solid rgba(79,70,229,0.3)' }}
                                >
                                    <Icon className="h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-3xl font-extrabold text-white tracking-tight mb-1 group-hover:scale-105 transition-transform">
                                    {counts[idx]}
                                </div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────
   REVISED 3D PRICING CAROUSEL (APPLE / FRAMER STYLE)
   Interaction: Horizontal Drag Left/Right to Rotate
───────────────────────────────────────────────────────── */
function PricingSection() {
    const stageRef = useRef(null);
    const [rotationAngle, setRotationAngle] = useState(0);
    const targetAngleRef = useRef(0);
    const currentAngleRef = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Drag state refs (non-reactive for performance)
    const dragStartXRef = useRef(0);
    const dragStartAngleRef = useRef(0);
    const isDraggingRef = useRef(false);
    const lastWheelTimeRef = useRef(0);

    // Screen size detection
    useEffect(() => {
        const checkScreen = () => {
            const w = window.innerWidth;
            setIsMobile(w < 768);
            setIsTablet(w >= 768 && w < 1024);
        };
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    // RAF render loop (runs independently of drag events)
    useEffect(() => {
        let animationFrameId;
        const renderLoop = () => {
            // Smooth spring damping lerp
            const diff = targetAngleRef.current - currentAngleRef.current;
            currentAngleRef.current += diff * 0.09;
            setRotationAngle(currentAngleRef.current);

            // Active front card index calculation
            const count = PRICING.length;
            const step = (2 * Math.PI) / count;
            let normAngle = (-currentAngleRef.current) % (2 * Math.PI);
            if (normAngle < 0) normAngle += 2 * Math.PI;
            const closestIdx = Math.round(normAngle / step) % count;
            setActiveIndex(closestIdx);

            animationFrameId = requestAnimationFrame(renderLoop);
        };
        animationFrameId = requestAnimationFrame(renderLoop);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // ── Pointer (mouse drag) handlers ──────────────────────
    const handlePointerDown = (e) => {
        isDraggingRef.current = true;
        setIsDragging(true);
        dragStartXRef.current = e.clientX;
        dragStartAngleRef.current = targetAngleRef.current;
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!isDraggingRef.current) return;
        const dx = e.clientX - dragStartXRef.current;
        // Sensitivity: 1px of horizontal drag = ~0.01 rad of rotation
        // Drag left (negative dx) → rotate right (decrease angle)
        // Drag right (positive dx) → rotate left (increase angle)
        const sensitivity = 0.008;
        targetAngleRef.current = dragStartAngleRef.current + dx * sensitivity;
    };

    const handlePointerUp = () => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);
        // Snap to nearest 120deg step
        const step = (2 * Math.PI) / PRICING.length;
        targetAngleRef.current = Math.round(targetAngleRef.current / step) * step;
    };

    // ── Touch (mobile swipe) handlers ──────────────────────
    const touchStartXRef = useRef(0);
    const touchStartAngleRef = useRef(0);

    const handleTouchStart = (e) => {
        touchStartXRef.current = e.touches[0].clientX;
        touchStartAngleRef.current = targetAngleRef.current;
    };

    const handleTouchMove = (e) => {
        const dx = e.touches[0].clientX - touchStartXRef.current;
        const sensitivity = 0.008;
        targetAngleRef.current = touchStartAngleRef.current + dx * sensitivity;
    };

    const handleTouchEnd = () => {
        // Snap to nearest 120deg step
        const step = (2 * Math.PI) / PRICING.length;
        targetAngleRef.current = Math.round(targetAngleRef.current / step) * step;
    };

    // Tight Carousel Radius (230px desktop, 180px tablet)
    const radius = isMobile ? 0 : isTablet ? 180 : 230;

    return (
        <section id="pricing" className="py-20 sm:py-28 bg-slate-50 overflow-hidden">
            <div className="ds-carousel-stage" style={{ position: 'relative', height: 'auto', minHeight: '600px' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-center mb-8">
                        <div
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3 border"
                            style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}
                        >
                            <Award className="h-3 w-3" /> Pricing
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Simple, Transparent Pricing</h2>
                        <p className="mt-2 text-slate-500 font-medium text-sm">Drag left/right or tap a tab to rotate 3D pricing wheel.</p>

                        {/* Quick Plan Switcher Buttons */}
                        <div className="flex items-center justify-center gap-2 mt-4">
                            {PRICING.map((p, i) => (
                                <button
                                    key={p.name}
                                    onClick={() => {
                                        targetAngleRef.current = -(i * 2 * Math.PI) / PRICING.length;
                                    }}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                                        activeIndex === i
                                            ? 'bg-indigo-600 text-white shadow-md scale-105'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                    }`}
                                >
                                    {p.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tight 3D Rotating Carousel Stage — horizontal drag/swipe to rotate */}
                    <div
                        ref={stageRef}
                        className="pricing-group mx-auto"
                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {PRICING.map((p, i) => {
                            let cardStyle = {};
                            let depthClass = 'is-inactive-card';

                            if (!isMobile) {
                                // 3D Wheel Angle calculation
                                const cardAngle = rotationAngle + (i * 2 * Math.PI) / PRICING.length;
                                const x = Math.sin(cardAngle) * radius;
                                const z = (Math.cos(cardAngle) - 1) * 90; // Depth translateZ [0, -180px]
                                const rotateY = (cardAngle * 180) / Math.PI;

                                // Normalize facing position (cosVal: 1 front, -1 back)
                                const cosVal = Math.cos(cardAngle);
                                const norm = (cosVal + 1) / 2; // 0 to 1

                                // Target Card Scale & Opacity as requested:
                                // Front card: scale(1), opacity(1)
                                // Side card: scale(0.85), opacity(0.7)
                                // Back card: scale(0.7), opacity(0.4)
                                const cardScale = 0.7 + 0.3 * norm;     // 0.7 to 1.0
                                const cardOpacity = 0.4 + 0.6 * norm;   // 0.4 to 1.0
                                const cardBlur = (1 - norm) * 2.0;      // 0px to 2.0px
                                const zIdx = Math.round(norm * 100);

                                if (norm > 0.85) {
                                    depthClass = 'is-active-card';
                                }

                                cardStyle = {
                                    transform: `translateX(${x.toFixed(1)}px) translateZ(${z.toFixed(1)}px) rotateY(${rotateY.toFixed(1)}deg) scale(${cardScale.toFixed(2)})`,
                                    opacity: cardOpacity.toFixed(2),
                                    filter: cardBlur > 0.1 ? `blur(${cardBlur.toFixed(1)}px)` : 'none',
                                    zIndex: zIdx,
                                };
                            } else {
                                // Mobile view active card handling
                                const isActive = activeIndex === i;
                                cardStyle = {
                                    display: isActive ? 'block' : 'none',
                                    opacity: 1,
                                    transform: 'scale(1)',
                                };
                                depthClass = 'is-active-card';
                            }

                            return (
                                <div
                                    key={i}
                                    className={`ds-carousel-card-wrapper rounded-2xl ${depthClass}`}
                                    style={cardStyle}
                                >
                                    <div
                                        className={`rounded-2xl p-7 border flex flex-col relative transition-all duration-300 h-full ${
                                            p.highlight
                                                ? 'text-white shadow-2xl z-10 ds-animate-pulse-glow'
                                                : 'bg-white border-slate-100 shadow-sm'
                                        }`}
                                        style={p.highlight ? {
                                            background: 'linear-gradient(135deg,#2563eb,#4f46e5)',
                                        } : {}}
                                    >
                                        {p.highlight && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                                <span className="bg-amber-400 text-amber-950 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md animate-bounce" style={{ animationDuration: '2.5s' }}>
                                                    ✦ Most Popular
                                                </span>
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <p className={`text-sm font-extrabold uppercase tracking-wider mb-2 ${p.highlight ? 'text-blue-200' : 'text-indigo-600'}`}>
                                                {p.name}
                                            </p>
                                            <div className="flex items-baseline gap-1 mb-2">
                                                <span className={`text-4xl font-extrabold ${p.highlight ? 'text-white' : 'text-slate-900'}`}>{p.price}</span>
                                                <span className={`text-sm font-medium ${p.highlight ? 'text-blue-200' : 'text-slate-400'}`}>{p.period}</span>
                                            </div>
                                            <p className={`text-xs ${p.highlight ? 'text-blue-100' : 'text-slate-500'}`}>{p.desc}</p>
                                        </div>

                                        <ul className="space-y-3 mb-8 flex-1">
                                            {p.features.map(f => (
                                                <li key={f} className="flex items-center gap-2 text-xs font-semibold">
                                                    <Check className={`h-4 w-4 shrink-0 ${p.highlight ? 'text-emerald-300' : 'text-emerald-500'}`} />
                                                    <span className={p.highlight ? 'text-white' : 'text-slate-700'}>{f}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            to={ROUTES.REGISTER}
                                            className={`text-center text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-md ${
                                                p.highlight
                                                    ? 'bg-white text-indigo-600 hover:bg-slate-100 hover:scale-105'
                                                    : 'border-2 border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 bg-white hover:scale-105'
                                            }`}
                                        >
                                            {p.cta}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────── */
export default function LandingPage() {
    const [demoOpen, setDemoOpen] = useState(false);
    const [activeTemplate, setActiveTemplate] = useState(null);

    return (
        <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Navbar onDemo={() => setDemoOpen(true)} />

            {/* ════════════════════════════════════════════════════
                HERO SECTION
            ════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
                {/* Background drifting glowing orbs */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none ds-animate-float-slow opacity-60"
                     style={{ background: 'radial-gradient(circle,rgba(79,70,229,0.2) 0%,transparent 70%)', filter: 'blur(70px)' }} />
                <div className="absolute -top-20 right-0 w-[450px] h-[450px] rounded-full pointer-events-none ds-animate-float-reverse opacity-50"
                     style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.18) 0%,transparent 70%)', filter: 'blur(70px)' }} />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-72 rounded-full pointer-events-none ds-animate-pulse-slow opacity-40"
                     style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.12) 0%,transparent 70%)', filter: 'blur(90px)' }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left ds-animate-fade-up">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border shadow-sm hover:scale-105 transition-transform cursor-pointer"
                                 style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>DataSoft Website Builder 2.0</span>
                            </div>

                            {/* Headline with animated flowing gradient */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
                                Build Professional<br />
                                Websites{' '}
                                <span className="ds-animate-gradient" style={{
                                    background: 'linear-gradient(135deg, #2563eb, #4f46e5, #7c3aed, #ec4899, #2563eb)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>With One-Click Hosting</span>
                            </h1>

                            {/* Sub */}
                            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                                Create, customize, and publish stunning websites using a visual drag-and-drop builder
                                without writing a single line of code.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <Link to={ROUTES.REGISTER}
                                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-bold rounded-2xl text-sm shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 ds-animate-pulse-glow"
                                      style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                    <Sparkles className="h-4 w-4" />
                                    Start Building Free
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <button onClick={() => setDemoOpen(true)}
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold rounded-2xl text-sm border-2 border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 hover:-translate-y-0.5 transition-all bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center animate-pulse">
                                        <Play className="h-3 w-3 text-white fill-white ml-0.5" />
                                    </div>
                                    Watch Live Demo
                                </button>
                            </div>

                            {/* Trust text */}
                            <p className="mt-6 text-sm text-slate-400 font-medium">
                                ✦ Trusted by <span className="font-bold text-slate-700">10,000+</span> businesses and organizations nationwide
                            </p>

                            {/* Trusted logos infinite marquee */}
                            <div className="mt-4 overflow-hidden max-w-md mx-auto lg:mx-0 relative py-2">
                                <div className="ds-animate-marquee gap-3">
                                    {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((l, idx) => (
                                        <div key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-lg text-[11px] font-extrabold text-slate-600 shadow-2xs hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors shrink-0">
                                            {l}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Builder illustration */}
                        <div className="flex-1 w-full lg:max-w-[600px] ds-animate-fade-up">
                            <DashboardIllustration />
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                FEATURES SECTION
            ════════════════════════════════════════════════════ */}
            <section id="features" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border shadow-2xs"
                             style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                            <Zap className="h-3 w-3 animate-bounce" /> Platform Features
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Everything Needed to Launch<br />
                            <span className="ds-animate-gradient" style={{
                                background: 'linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Websites Faster</span>
                        </h2>
                        <p className="mt-3 text-slate-500 font-medium max-w-xl mx-auto">
                            All the tools a business needs to create a stunning web presence — in one platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {FEATURES.map((f) => {
                            const Icon = f.icon;
                            return (
                                <div key={f.title}
                                     className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm ds-hover-lift ds-hover-glow cursor-pointer">
                                    <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                                        <Icon className={`h-5 w-5 ${f.accent}`} />
                                    </div>
                                    <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{f.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                HOW IT WORKS
            ════════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-28 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                             style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                            <Clock className="h-3 w-3 animate-spin" style={{ animationDuration: '10s' }} /> How It Works
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Build and Publish in <span className="ds-animate-gradient" style={{
                                background: 'linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>4 Easy Steps</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Connector line (desktop only) */}
                        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-1 rounded-full overflow-hidden bg-slate-100">
                            <div className="w-full h-full ds-animate-shimmer"
                                 style={{ background: 'linear-gradient(90deg,transparent,#4f46e5,#7c3aed,transparent)' }} />
                        </div>

                        {STEPS.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <div key={i} className="relative text-center group cursor-pointer">
                                    <div className="relative inline-flex">
                                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300"
                                             style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                            <Icon className="h-8 w-8 text-white group-hover:rotate-6 transition-transform" />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-900 text-white text-[11px] font-black flex items-center justify-center z-20 shadow-md border-2 border-white animate-pulse">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                TEMPLATE SHOWCASE
            ════════════════════════════════════════════════════ */}
            <section id="templates" className="py-20 sm:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                                 style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                                <Layout className="h-3 w-3" /> Template Library
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                                Beautiful Templates<br />Ready to Use
                            </h2>
                        </div>
                        <Link to={ROUTES.LOGIN}
                              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition shrink-0 hover:translate-x-1 duration-200">
                            Browse All Templates <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TEMPLATES.map((t, i) => (
                            <div key={i}
                                 onMouseEnter={() => setActiveTemplate(i)}
                                 onMouseLeave={() => setActiveTemplate(null)}
                                 className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-slate-100 shadow-sm ds-hover-lift ds-hover-glow transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img src={t.img} alt={t.title}
                                         className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3"
                                         style={{ background: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(3px)' }}>
                                        <Link to={ROUTES.LOGIN}
                                              className="px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg hover:bg-slate-50 hover:scale-105 transition">
                                            <Eye className="h-3.5 w-3.5" /> Preview
                                        </Link>
                                        <Link to={ROUTES.REGISTER}
                                              className="px-4 py-2 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg hover:scale-105 transition"
                                              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                            Use Template
                                        </Link>
                                    </div>
                                    {/* Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold text-white shadow-md animate-pulse"
                                              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                            {t.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-between bg-white">
                                    <span className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">{t.title}</span>
                                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                STATS (Dark with Animated Counter & Parallax)
            ════════════════════════════════════════════════════ */}
            <StatsSection />

            {/* ════════════════════════════════════════════════════
                TESTIMONIALS
            ════════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                             style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                            <Star className="h-3 w-3 fill-current text-amber-400 animate-pulse" /> Testimonials
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Loved by Businesses Everywhere
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i}
                                 className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm ds-hover-lift ds-hover-glow transition-all duration-300">
                                <Quote className="h-8 w-8 text-indigo-200 mb-3" />
                                <p className="text-sm text-slate-600 leading-relaxed mb-5">"{t.review}"</p>
                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                                    <div className="flex-1">
                                        <p className="text-sm font-extrabold text-slate-900">{t.name}</p>
                                        <p className="text-xs text-slate-500">{t.role}</p>
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[...Array(t.rating)].map((_, j) => (
                                            <Star key={j} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                PRICING (With Rotation Entrance & Premium Hover)
            ════════════════════════════════════════════════════ */}
            <PricingSection />

            {/* ════════════════════════════════════════════════════
                CTA SECTION
            ════════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30 ds-animate-float-slow"
                         style={{ background: 'radial-gradient(circle,rgba(79,70,229,0.5),transparent)', filter: 'blur(80px)' }} />
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-30 ds-animate-float-reverse"
                         style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.5),transparent)', filter: 'blur(80px)' }} />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="rounded-3xl p-12 sm:p-16 border relative overflow-hidden ds-hover-glow"
                         style={{
                             background: 'linear-gradient(135deg,rgba(37,99,235,0.06),rgba(79,70,229,0.08))',
                             borderColor: 'rgba(79,70,229,0.15)',
                             boxShadow: '0 25px 80px rgba(79,70,229,0.12)',
                         }}>
                        <div className="absolute top-4 right-4 opacity-10 ds-animate-pulse-slow">
                            <Sparkles className="h-24 w-24 text-indigo-500 animate-spin" style={{ animationDuration: '15s' }} />
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-5 border"
                             style={{ background: 'rgba(79,70,229,0.08)', borderColor: 'rgba(79,70,229,0.2)', color: '#4f46e5' }}>
                            <Rocket className="h-3 w-3 animate-bounce" /> Get Started Today
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                            Start Building Your<br />
                            <span className="ds-animate-gradient" style={{
                                background: 'linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>Website Today</span>
                        </h2>
                        <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto mb-8">
                            Launch professional websites faster with DataSoft Website Builder.
                            No credit card required.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link to={ROUTES.REGISTER}
                                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-2xl text-base shadow-xl hover:-translate-y-1 transition-all ds-animate-pulse-glow"
                                  style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                <Sparkles className="h-5 w-5" />
                                Start Building Free
                            </Link>
                            <a href="mailto:hello@datasoft.id"
                               className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-2xl text-base border-2 border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 hover:-translate-y-0.5 transition-all bg-white/80">
                                Request Demo
                                <ArrowRight className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ════════════════════════════════════════════════════
                FOOTER
            ════════════════════════════════════════════════════ */}
            <footer className="bg-slate-900 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
                        {/* Brand */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center gap-2.5 mb-4">
                                <div className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm"
                                     style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>DS</div>
                                <div>
                                    <div className="text-sm font-extrabold text-white">DataSoft</div>
                                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-400">Studio</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed mb-4">
                                Build, customize, and publish professional websites without coding.
                            </p>
                            <div className="flex gap-2">
                                {['Twitter','GitHub','LinkedIn'].map(s => (
                                    <div key={s} className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 cursor-pointer transition text-[10px] font-bold">
                                        {s[0]}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {[
                            { title: 'Product', links: ['Features','Templates','Builder','Pricing','Changelog'] },
                            { title: 'Templates', links: ['Corporate','Logistics','Education','Startup','Organization'] },
                            { title: 'Resources', links: ['Documentation','Blog','Support','API Reference','Status'] },
                            { title: 'Company', links: ['About','Careers','Privacy Policy','Terms of Service','Contact'] },
                        ].map(col => (
                            <div key={col.title}>
                                <p className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">{col.title}</p>
                                <ul className="space-y-2.5">
                                    {col.links.map(l => (
                                        <li key={l}>
                                            <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">
                                                {l}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-slate-500">
                            © 2026 PT DataSoft Solusindo. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-xs text-slate-500 hover:text-white transition">Privacy Policy</a>
                            <a href="#" className="text-xs text-slate-500 hover:text-white transition">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Video Demo Modal */}
            {demoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
                     style={{ background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)' }}>
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                            <h3 className="text-base font-extrabold text-slate-900">DataSoft Builder — Platform Demo</h3>
                            <button onClick={() => setDemoOpen(false)}
                                    className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="aspect-video bg-slate-900 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center mx-auto shadow-xl cursor-pointer hover:bg-indigo-700 transition">
                                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                                </div>
                                <p className="text-slate-400 text-sm font-medium">Demo video coming soon</p>
                            </div>
                        </div>
                        <div className="p-4 flex justify-end">
                            <Link to={ROUTES.REGISTER}
                                  className="inline-flex items-center gap-2 px-5 py-2.5 text-white font-bold rounded-xl text-sm transition"
                                  style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                <Sparkles className="h-4 w-4" />
                                Try for Free
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
