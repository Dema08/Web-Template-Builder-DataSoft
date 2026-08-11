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

/* ── Dashboard Illustration ── */
function DashboardIllustration() {
    return (
        <div className="relative w-full max-w-[620px] mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl opacity-25 rounded-3xl"
                 style={{ background: 'radial-gradient(circle,#4f46e5 0%,#2563eb 50%,transparent 80%)' }} />

            {/* Main Dashboard Window */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
                 style={{ boxShadow: '0 30px 80px rgba(79,70,229,0.18)' }}>
                {/* Toolbar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-slate-400 border border-slate-200 mx-4 font-medium">
                        datasoft.io/builder
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-500 px-2 py-1 bg-slate-100 rounded-md">Save</span>
                        <span className="text-[10px] font-bold text-white px-2 py-1 rounded-md"
                              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>Publish ✓</span>
                    </div>
                </div>

                {/* Builder Layout */}
                <div className="flex" style={{ height: '280px' }}>
                    {/* Left Sidebar */}
                    <div className="w-14 bg-slate-900 flex flex-col items-center py-3 gap-3">
                        {[Layout, Image, Palette, Layers, Globe].map((Icon, i) => (
                            <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer transition ${i === 0 ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}>
                                <Icon className="h-4 w-4" />
                            </div>
                        ))}
                    </div>

                    {/* Components Panel */}
                    <div className="w-32 bg-slate-800 p-2 space-y-1.5 overflow-hidden">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1 mb-2">Sections</p>
                        {['Hero Banner','Nav Bar','Feature Grid','Testimonials','Footer','About Us','Contact'].map((s, i) => (
                            <div key={i} className={`px-2 py-1.5 rounded-lg text-[10px] font-semibold cursor-pointer ${i === 0 ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}>
                                {s}
                            </div>
                        ))}
                    </div>

                    {/* Canvas */}
                    <div className="flex-1 bg-slate-100 relative overflow-hidden">
                        {/* Website preview */}
                        <div className="absolute inset-2 bg-white rounded-lg shadow-sm overflow-hidden">
                            {/* Hero */}
                            <div className="h-20 flex items-center px-4 gap-2"
                                 style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white text-[8px] font-black">DS</div>
                                <div className="flex-1 space-y-1 pl-1">
                                    <div className="h-2.5 bg-white/90 rounded w-24" />
                                    <div className="h-1.5 bg-white/50 rounded w-36" />
                                </div>
                                <div className="h-5 px-2 bg-white rounded text-[8px] font-bold text-indigo-600 flex items-center">Get Started</div>
                            </div>
                            {/* Feature grid */}
                            <div className="grid grid-cols-3 gap-1.5 p-2">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="bg-slate-50 rounded p-1.5 space-y-1 border border-slate-100">
                                        <div className="w-4 h-4 rounded bg-indigo-100" />
                                        <div className="h-1.5 bg-slate-200 rounded w-full" />
                                        <div className="h-1 bg-slate-100 rounded w-3/4" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Selection Highlight */}
                        <div className="absolute top-2 left-2 right-2 h-20 border-2 border-dashed border-indigo-500 rounded-lg pointer-events-none">
                            <div className="absolute -top-3 left-2 bg-indigo-500 text-white text-[9px] font-bold px-2 py-0.5 rounded">Hero Section</div>
                        </div>
                    </div>

                    {/* Right Properties Panel */}
                    <div className="w-36 bg-white border-l border-slate-200 p-2 space-y-3">
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Properties</p>
                        <div className="space-y-2">
                            <div>
                                <p className="text-[9px] text-slate-500 mb-1">Background</p>
                                <div className="flex gap-1">
                                    {['#4f46e5','#2563eb','#7c3aed','#0ea5e9','#10b981'].map(c => (
                                        <div key={c} className="w-4 h-4 rounded-full cursor-pointer border border-white shadow-sm" style={{ background: c }} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <p className="text-[9px] text-slate-500 mb-1">Font</p>
                                <div className="h-5 bg-slate-100 rounded text-[9px] px-2 flex items-center text-slate-600">Inter</div>
                            </div>
                            <div>
                                <p className="text-[9px] text-slate-500 mb-1">Spacing</p>
                                <div className="grid grid-cols-2 gap-1">
                                    <div className="h-4 bg-slate-100 rounded text-[9px] text-center text-slate-500 flex items-center justify-center">40px</div>
                                    <div className="h-4 bg-slate-100 rounded text-[9px] text-center text-slate-500 flex items-center justify-center">24px</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Responsive</p>
                            <div className="flex gap-1.5">
                                <div className="p-1 bg-indigo-50 rounded text-indigo-600"><Monitor className="h-3 w-3" /></div>
                                <div className="p-1 bg-slate-100 rounded text-slate-400"><Tablet className="h-3 w-3" /></div>
                                <div className="p-1 bg-slate-100 rounded text-slate-400"><Smartphone className="h-3 w-3" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-7 h-7 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <div>
                    <p className="text-[10px] font-extrabold text-slate-900">Published!</p>
                    <p className="text-[9px] text-slate-500">datasoft.io/mybrand</p>
                </div>
            </div>

            <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2" style={{ animation: 'bounce 3.5s infinite' }}>
                <div className="w-7 h-7 rounded-xl bg-indigo-500 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                    <p className="text-[10px] font-extrabold text-slate-900">+2.4K Visitors</p>
                    <p className="text-[9px] text-slate-500">This week</p>
                </div>
            </div>

            <div className="absolute top-1/2 -right-14 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 flex items-center gap-2">
                <div className="w-7 h-7 rounded-xl bg-violet-500 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                    <p className="text-[10px] font-extrabold text-slate-900">120 Templates</p>
                    <p className="text-[9px] text-slate-500">Ready to use</p>
                </div>
            </div>
        </div>
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
                {/* Background glow orbs */}
                <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
                     style={{ background: 'radial-gradient(circle,rgba(79,70,229,0.15) 0%,transparent 70%)', filter: 'blur(60px)' }} />
                <div className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
                     style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 70%)', filter: 'blur(60px)' }} />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 rounded-full pointer-events-none"
                     style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.08) 0%,transparent 70%)', filter: 'blur(80px)' }} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border"
                                 style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>DataSoft Website Builder</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
                                Build Professional<br />
                                Websites{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)',
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
                                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-bold rounded-2xl text-sm shadow-xl transition-all hover:shadow-2xl hover:-translate-y-0.5"
                                      style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)', boxShadow: '0 8px 30px rgba(79,70,229,0.35)' }}>
                                    <Sparkles className="h-4 w-4" />
                                    Start Building Free
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <button onClick={() => setDemoOpen(true)}
                                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold rounded-2xl text-sm border-2 border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-all bg-white/80 backdrop-blur-sm">
                                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                                        <Play className="h-3 w-3 text-white fill-white ml-0.5" />
                                    </div>
                                    Watch Demo
                                </button>
                            </div>

                            {/* Trust text */}
                            <p className="mt-6 text-sm text-slate-400 font-medium">
                                ✦ Trusted by <span className="font-bold text-slate-600">10,000+</span> businesses and organizations
                            </p>

                            {/* Trusted logos */}
                            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
                                {TRUSTED_LOGOS.map(l => (
                                    <div key={l} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-500">
                                        {l}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Builder illustration */}
                        <div className="flex-1 w-full lg:max-w-[600px]">
                            <DashboardIllustration />
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                FEATURES SECTION
            ════════════════════════════════════════════════════ */}
            <section id="features" className="py-20 sm:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                             style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                            <Zap className="h-3 w-3" /> Platform Features
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Everything Needed to Launch<br />
                            <span style={{
                                background: 'linear-gradient(135deg,#2563eb,#4f46e5)',
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
                                     className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                                        <Icon className={`h-5 w-5 ${f.accent}`} />
                                    </div>
                                    <h3 className="text-base font-extrabold text-slate-900 mb-2">{f.title}</h3>
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
            <section className="py-20 sm:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                             style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                            <Clock className="h-3 w-3" /> How It Works
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Build and Publish in <span style={{
                                background: 'linear-gradient(135deg,#2563eb,#4f46e5)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>4 Easy Steps</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Connector line (desktop only) */}
                        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5"
                             style={{ background: 'linear-gradient(90deg,#4f46e5,#7c3aed)' }} />

                        {STEPS.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <div key={i} className="relative text-center">
                                    <div className="relative inline-flex">
                                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg"
                                             style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center z-20">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-extrabold text-slate-900 mb-2">{step.title}</h3>
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
                              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition shrink-0">
                            Browse All Templates <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TEMPLATES.map((t, i) => (
                            <div key={i}
                                 onMouseEnter={() => setActiveTemplate(i)}
                                 onMouseLeave={() => setActiveTemplate(null)}
                                 className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img src={t.img} alt={t.title}
                                         className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3"
                                         style={{ background: 'rgba(15,23,42,0.5)', backdropFilter: 'blur(2px)' }}>
                                        <Link to={ROUTES.LOGIN}
                                              className="px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg hover:bg-slate-50 transition">
                                            <Eye className="h-3.5 w-3.5" /> Preview
                                        </Link>
                                        <Link to={ROUTES.REGISTER}
                                              className="px-4 py-2 text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-lg transition"
                                              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                            Use Template
                                        </Link>
                                    </div>
                                    {/* Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-1 rounded-full text-[10px] font-extrabold text-white shadow"
                                              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                            {t.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-between">
                                    <span className="text-sm font-extrabold text-slate-900">{t.title}</span>
                                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                STATS (Dark)
            ════════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-24 relative overflow-hidden"
                     style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f172a 100%)' }}>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
                         style={{ background: 'radial-gradient(circle,#4f46e5,transparent)', filter: 'blur(80px)' }} />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20"
                         style={{ background: 'radial-gradient(circle,#2563eb,transparent)', filter: 'blur(80px)' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Trusted at Scale
                        </h2>
                        <p className="text-slate-400 mt-2 font-medium">Numbers that speak for themselves.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {STATS.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div key={s.label}
                                     className="flex flex-col items-center text-center rounded-2xl p-6 border"
                                     style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                                         style={{ background: 'rgba(79,70,229,0.2)', border: '1px solid rgba(79,70,229,0.3)' }}>
                                        <Icon className="h-5 w-5 text-indigo-300" />
                                    </div>
                                    <div className="text-3xl font-extrabold text-white tracking-tight mb-1">{s.value}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                TESTIMONIALS
            ════════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                             style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                            <Star className="h-3 w-3 fill-current" /> Testimonials
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Loved by Businesses Everywhere
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i}
                                 className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <Quote className="h-8 w-8 text-indigo-100 mb-3" />
                                <p className="text-sm text-slate-600 leading-relaxed mb-5">"{t.review}"</p>
                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
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
                PRICING
            ════════════════════════════════════════════════════ */}
            <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                             style={{ background: 'rgba(79,70,229,0.06)', borderColor: 'rgba(79,70,229,0.18)', color: '#4f46e5' }}>
                            <Award className="h-3 w-3" /> Pricing
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Simple, Transparent Pricing</h2>
                        <p className="mt-3 text-slate-500 font-medium">Choose the plan that fits your needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {PRICING.map((p, i) => (
                            <div key={i}
                                 className={`rounded-2xl p-7 border flex flex-col transition-all duration-300 ${
                                     p.highlight
                                         ? 'text-white shadow-2xl scale-105 relative'
                                         : 'bg-white border-slate-100 shadow-sm hover:shadow-lg'
                                 }`}
                                 style={p.highlight ? {
                                     background: 'linear-gradient(135deg,#2563eb,#4f46e5)',
                                     boxShadow: '0 20px 60px rgba(79,70,229,0.4)',
                                 } : {}}>
                                {p.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-amber-400 text-amber-900 text-[10px] font-extrabold px-3 py-1 rounded-full shadow">
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
                                    <p className={`text-sm ${p.highlight ? 'text-blue-100' : 'text-slate-500'}`}>{p.desc}</p>
                                </div>

                                <ul className="space-y-3 flex-1 mb-7">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2.5 text-sm">
                                            <CheckCircle2 className={`h-4 w-4 shrink-0 ${p.highlight ? 'text-blue-200' : 'text-indigo-500'}`} />
                                            <span className={p.highlight ? 'text-blue-50' : 'text-slate-600'}>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to={ROUTES.REGISTER}
                                      className={`block text-center py-3 rounded-xl text-sm font-bold transition-all ${
                                          p.highlight
                                              ? 'bg-white text-indigo-600 hover:bg-blue-50 shadow-md'
                                              : 'border-2 border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-600 bg-white'
                                      }`}>
                                    {p.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                CTA SECTION
            ════════════════════════════════════════════════════ */}
            <section className="py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-30"
                         style={{ background: 'radial-gradient(circle,rgba(79,70,229,0.5),transparent)', filter: 'blur(80px)' }} />
                    <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-30"
                         style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.5),transparent)', filter: 'blur(80px)' }} />
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="rounded-3xl p-12 sm:p-16 border relative overflow-hidden"
                         style={{
                             background: 'linear-gradient(135deg,rgba(37,99,235,0.06),rgba(79,70,229,0.08))',
                             borderColor: 'rgba(79,70,229,0.15)',
                             boxShadow: '0 25px 80px rgba(79,70,229,0.12)',
                         }}>
                        <div className="absolute top-4 right-4 opacity-10">
                            <Sparkles className="h-24 w-24 text-indigo-500" />
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-5 border"
                             style={{ background: 'rgba(79,70,229,0.08)', borderColor: 'rgba(79,70,229,0.2)', color: '#4f46e5' }}>
                            <Rocket className="h-3 w-3" /> Get Started Today
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                            Start Building Your<br />
                            <span style={{
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
                                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-2xl text-base shadow-xl hover:-translate-y-0.5 transition-all"
                                  style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)', boxShadow: '0 8px 30px rgba(79,70,229,0.4)' }}>
                                <Sparkles className="h-5 w-5" />
                                Start Building Free
                            </Link>
                            <a href="mailto:hello@datasoft.id"
                               className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-2xl text-base border-2 border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-all bg-white/80">
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
