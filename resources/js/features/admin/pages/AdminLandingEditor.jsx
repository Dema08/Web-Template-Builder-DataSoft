import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@constants';
import {
    Sparkles, Save, RotateCcw, Eye, Layout, Zap, Clock,
    BarChart3, CheckCircle2, AlertCircle, RefreshCw, Layers,
    Plus, Trash2, ArrowRight, Check, Play, Globe, Shield, Users,
    Headphones, Award, Tag, DollarSign, MousePointer2, Monitor, Palette, Image, Rocket,
    Code2, Lock, Star, Smartphone, Tablet, CreditCard
} from 'lucide-react';
import { settingsApi } from '@api';
import { Toast, ConfirmModal } from '@shared/components/ui';
import LandingPage from '@features/publish/pages/LandingPage';

const ICON_OPTIONS = [
    { name: 'MousePointer2', label: 'Cursor', icon: MousePointer2 },
    { name: 'Layout', label: 'Template', icon: Layout },
    { name: 'Rocket', label: 'Launch', icon: Rocket },
    { name: 'Monitor', label: 'Screen', icon: Monitor },
    { name: 'Palette', label: 'Design', icon: Palette },
    { name: 'Image', label: 'Media', icon: Image },
    { name: 'Sparkles', label: 'Sparkles', icon: Sparkles },
    { name: 'Shield', label: 'Shield', icon: Shield },
    { name: 'Globe', label: 'Globe', icon: Globe },
    { name: 'Zap', label: 'Speed', icon: Zap },
    { name: 'Users', label: 'Users', icon: Users },
    { name: 'Headphones', label: 'Support', icon: Headphones },
    { name: 'Code2', label: 'Code', icon: Code2 },
    { name: 'Lock', label: 'Security', icon: Lock },
    { name: 'BarChart3', label: 'Chart', icon: BarChart3 },
    { name: 'Star', label: 'Quality', icon: Star },
];

const DEFAULT_FEATURES = [
    {
        title: 'Drag & Drop Builder',
        desc: 'Visual editing experience like Canva — no coding required. Build stunning sections with precision.',
        accent: 'blue',
        icon: 'MousePointer2',
    },
    {
        title: 'Professional Templates',
        desc: 'Curated templates for Corporate, Logistics, Manufacturing, Education, Cooperatives, and Startups.',
        accent: 'indigo',
        icon: 'Layout',
    },
    {
        title: 'One Click Publish',
        desc: 'Launch your website instantly to a custom domain or subdomain — zero deployment knowledge needed.',
        accent: 'violet',
        icon: 'Rocket',
    },
    {
        title: 'Responsive Design',
        desc: 'Every template is automatically optimized for Desktop, Tablet, and Mobile screens.',
        accent: 'sky',
        icon: 'Monitor',
    },
    {
        title: 'Theme Customizer',
        desc: 'Change colors, fonts, spacing, and layouts instantly with real-time live preview updates.',
        accent: 'pink',
        icon: 'Palette',
    },
    {
        title: 'Media Manager',
        desc: 'Upload and manage images, videos, logos, and documents in an organized media library.',
        accent: 'amber',
        icon: 'Image',
    },
];

const DEFAULT_STEPS = [
    { title: 'Choose Template', desc: 'Browse professionally designed templates across all business categories.', icon: 'Layout' },
    { title: 'Customize Content', desc: 'Edit text, images, colors, sections, and branding visually in real time.', icon: 'Palette' },
    { title: 'Preview Website', desc: 'Check responsiveness across desktop, tablet, and mobile devices.', icon: 'Eye' },
    { title: 'Publish Online', desc: 'Launch instantly with one click — go live in seconds, not days.', icon: 'Rocket' },
];

const DEFAULT_PRICING = [
    {
        name: 'Starter', price: 'Free', period: '',
        desc: 'Perfect for personal projects and exploring the platform.',
        features: ['1 Website', '10 Pages', 'DataSoft Subdomain', 'Basic Templates', 'Community Support'],
        cta: 'Get Started Free', highlight: false,
    },
    {
        name: 'Growth', price: 'Rp 79K', period: '/bulan',
        desc: 'For individuals and freelancers starting their online journey.',
        features: ['3 Websites', '50 Pages', 'Custom Domain', 'Premium Templates', 'Email Support', 'Media Manager'],
        cta: 'Start Growth', highlight: false,
    },
    {
        name: 'Professional', price: 'Rp 149K', period: '/bulan',
        desc: 'For growing businesses ready to scale their online presence.',
        features: ['5 Websites', 'Unlimited Pages', 'Custom Domain', 'All Premium Templates', 'Media Manager', 'Analytics Dashboard', 'Priority Support'],
        cta: 'Start Professional', highlight: true,
    },
    {
        name: 'Agency', price: 'Rp 349K', period: '/bulan',
        desc: 'For agencies managing multiple clients and projects at scale.',
        features: ['20 Websites', 'Unlimited Pages', 'Client Management', 'White Label Option', 'API Access', 'Team Collaboration', '24/7 Priority Support'],
        cta: 'Start Agency', highlight: false,
    },
    {
        name: 'Enterprise', price: 'Custom', period: '',
        desc: 'For large organizations needing full customization and control.',
        features: ['Unlimited Websites', 'White Label Option', 'API Access', 'Dedicated Manager', 'SSO Integration', 'SLA 99.9%', '24/7 Phone Support'],
        cta: 'Contact Sales', highlight: false,
    },
];

const DEFAULT_LANDING_CONTENT = {
    hero_badge: 'DataSoft Website Builder 2.0',
    hero_title: 'Build Professional Websites',
    hero_subtitle: 'With One-Click Hosting',
    hero_desc: 'Create, customize, and publish stunning websites using a visual drag-and-drop builder without writing a single line of code.',
    hero_cta_primary: 'Start Building Free',
    hero_cta_secondary: 'Watch Live Demo',
    
    features_badge: 'Platform Features',
    features_title: 'Everything Needed to Launch Websites Faster',
    features_subtitle: 'All the tools a business needs to create a stunning web presence — in one platform.',
    features_list: DEFAULT_FEATURES,
    
    steps_badge: 'How It Works',
    steps_title: 'Build and Publish in 4 Easy Steps',
    steps_list: DEFAULT_STEPS,
    
    stats_title: 'Trusted at Scale',
    stats_subtitle: 'Numbers that speak for themselves.',
    
    pricing_badge: 'Pricing',
    pricing_title: 'Simple, Transparent Pricing',
    pricing_subtitle: 'Drag left/right or tap a tab to rotate 3D pricing wheel.',
    pricing_list: DEFAULT_PRICING,

    cta_badge: 'Get Started Today',
    cta_title: 'Start Building Your Website Today',
    cta_desc: 'Launch professional websites faster with DataSoft Website Builder. No credit card required.',
    cta_button_text: 'Start Building Free',

    // Footer
    footer_brand_name: 'DataSoft',
    footer_brand_tagline: 'Studio',
    footer_desc: 'Build, customize, and publish professional websites without coding.',
    footer_email: 'hello@datasoft.id',
    footer_social_twitter: '#',
    footer_social_github: '#',
    footer_social_linkedin: '#',
    footer_social_instagram: '#',
    footer_copyright: '© 2026 PT DataSoft Solusindo. All rights reserved.',
};

const ACCENT_COLORS = [
    { label: 'Blue', value: 'blue', bg: 'bg-blue-50', text: 'text-blue-600' },
    { label: 'Indigo', value: 'indigo', bg: 'bg-indigo-50', text: 'text-indigo-600' },
    { label: 'Violet', value: 'violet', bg: 'bg-violet-50', text: 'text-violet-600' },
    { label: 'Sky', value: 'sky', bg: 'bg-sky-50', text: 'text-sky-600' },
    { label: 'Pink', value: 'pink', bg: 'bg-pink-50', text: 'text-pink-600' },
    { label: 'Amber', value: 'amber', bg: 'bg-amber-50', text: 'text-amber-600' },
    { label: 'Emerald', value: 'emerald', bg: 'bg-emerald-50', text: 'text-emerald-600' },
];

export default function AdminLandingEditor() {
    const [content, setContent] = useState(DEFAULT_LANDING_CONTENT);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('hero'); // 'hero' | 'features' | 'pricing' | 'steps' | 'stats' | 'cta' | 'preview'
    const [viewportMode, setViewportMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);


    useEffect(() => {
        let isMounted = true;
        settingsApi.getSettings()
            .then((settings) => {
                if (!isMounted) return;
                if (settings?.landing_content) {
                    const parsed = typeof settings.landing_content === 'string'
                        ? JSON.parse(settings.landing_content)
                        : settings.landing_content;
                    setContent({
                        ...DEFAULT_LANDING_CONTENT,
                        ...parsed,
                        features_list: parsed.features_list || DEFAULT_FEATURES,
                        steps_list: parsed.steps_list || DEFAULT_STEPS,
                        pricing_list: parsed.pricing_list || DEFAULT_PRICING,
                        footer_brand_name: parsed.footer_brand_name || 'DataSoft',
                        footer_brand_tagline: parsed.footer_brand_tagline || 'Studio',
                        footer_desc: parsed.footer_desc || 'Build, customize, and publish professional websites without coding.',
                        footer_email: parsed.footer_email || 'hello@datasoft.id',
                        footer_social_twitter: parsed.footer_social_twitter || '#',
                        footer_social_github: parsed.footer_social_github || '#',
                        footer_social_linkedin: parsed.footer_social_linkedin || '#',
                        footer_social_instagram: parsed.footer_social_instagram || '#',
                        footer_copyright: parsed.footer_copyright || '© 2026 PT DataSoft Solusindo. All rights reserved.',
                    });
                }
            })
            .catch(() => {})
            .finally(() => {
                if (isMounted) setIsLoading(false);
            });
        return () => { isMounted = false; };
    }, []);

    const handleChange = (field, value) => {
        setContent((prev) => ({ ...prev, [field]: value }));
    };

    /* ── FEATURE CARD HANDLERS ── */
    const handleFeatureChange = (index, key, val) => {
        const updated = [...(content.features_list || [])];
        updated[index] = { ...updated[index], [key]: val };
        setContent((prev) => ({ ...prev, features_list: updated }));
    };

    const handleAddFeature = () => {
        const newCard = {
            title: 'Fitur Baru',
            desc: 'Deskripsi fitur keunggulan platform Anda di sini.',
            accent: 'indigo',
            icon: 'Sparkles',
        };
        setContent((prev) => ({
            ...prev,
            features_list: [...(prev.features_list || []), newCard],
        }));
        Toast.success('Kartu fitur baru ditambahkan! Pilih ikon & sesuaikan deskripsi.');
    };

    const handleDeleteFeature = (index) => {
        if ((content.features_list || []).length <= 1) {
            Toast.error('Minimal harus ada 1 kartu fitur.');
            return;
        }
        const updated = (content.features_list || []).filter((_, i) => i !== index);
        setContent((prev) => ({ ...prev, features_list: updated }));
        Toast.info('Kartu fitur dihapus.');
    };

    /* ── STEP HANDLERS ── */
    const handleStepChange = (index, key, val) => {
        const updated = [...(content.steps_list || [])];
        updated[index] = { ...updated[index], [key]: val };
        setContent((prev) => ({ ...prev, steps_list: updated }));
    };

    const handleAddStep = () => {
        const newStep = {
            title: 'Langkah Baru',
            desc: 'Penjelasan singkat mengenai langkah ini.',
            icon: 'Sparkles',
        };
        setContent((prev) => ({
            ...prev,
            steps_list: [...(prev.steps_list || []), newStep],
        }));
        Toast.success('Langkah baru ditambahkan!');
    };

    const handleDeleteStep = (index) => {
        if ((content.steps_list || []).length <= 1) {
            Toast.error('Minimal harus ada 1 langkah.');
            return;
        }
        const updated = (content.steps_list || []).filter((_, i) => i !== index);
        setContent((prev) => ({ ...prev, steps_list: updated }));
        Toast.info('Langkah dihapus.');
    };

    /* ── PRICING CARD HANDLERS ── */
    const handlePricingChange = (index, key, val) => {
        const updated = [...(content.pricing_list || [])];
        updated[index] = { ...updated[index], [key]: val };
        setContent((prev) => ({ ...prev, pricing_list: updated }));
    };

    const handlePricingFeaturesChange = (index, rawText) => {
        const featuresArray = rawText.split('\n').map(s => s.trim()).filter(Boolean);
        handlePricingChange(index, 'features', featuresArray);
    };

    const handleAddPricing = () => {
        const newPlan = {
            name: 'Paket Baru',
            price: 'Rp 99K',
            period: '/bulan',
            desc: 'Deskripsi singkat sasaran penggunaan paket ini.',
            features: ['Akses 5 Website', 'Domain Kustom', 'Dukungan Email'],
            cta: 'Pilih Paket',
            highlight: false,
        };
        setContent((prev) => ({
            ...prev,
            pricing_list: [...(prev.pricing_list || []), newPlan],
        }));
        Toast.success('Paket harga baru ditambahkan!');
    };

    const handleDeletePricing = (index) => {
        if ((content.pricing_list || []).length <= 1) {
            Toast.error('Minimal harus ada 1 paket harga.');
            return;
        }
        const updated = (content.pricing_list || []).filter((_, i) => i !== index);
        setContent((prev) => ({ ...prev, pricing_list: updated }));
        Toast.info('Paket harga dihapus.');
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await settingsApi.updateSettings({ landing_content: content });
            Toast.success('Konten Landing Page berhasil disimpan!');
        } catch (error) {
            console.error('Failed to update landing page content:', error);
            Toast.error('Gagal menyimpan konten. Silakan coba lagi.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleReset = () => {
        setIsResetModalOpen(true);
    };

    const handleConfirmReset = () => {
        setContent(DEFAULT_LANDING_CONTENT);
        Toast.info('Konten dikembalikan ke standar default. Klik Simpan untuk menerapkan.');
        setIsResetModalOpen(false);
    };


    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
                <RefreshCw className="h-8 w-8 animate-spin text-indigo-600" />
                <p className="text-sm font-semibold text-slate-500">Memuat konfigurasi landing page...</p>
            </div>
        );
    }

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 font-sans">
            {/* Header Title Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Landing Page Content Studio</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Edit Landing Page & Pricing
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl leading-relaxed">
                        Kelola teks hero, daftar fitur, langkah cara kerja (ikon & deskripsi), paket harga, dan CTA banner.
                    </p>
                </div>

                {/* Actions */}
                <div className="relative z-10 flex items-center gap-3">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 bg-white text-xs font-bold flex items-center gap-2 transition hover:bg-slate-50 shadow-2xs cursor-pointer"
                    >
                        <RotateCcw className="h-4 w-4 text-slate-400" />
                        <span>Reset Default</span>
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={isSaving}
                        className="px-6 py-2.5 rounded-xl text-white text-xs font-extrabold flex items-center gap-2 shadow-md shadow-indigo-600/25 hover:shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                        style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)' }}
                    >
                        {isSaving ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                        <span>{isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
                    </button>
                </div>
            </div>

            {/* Editor Tabs Nav */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 no-scrollbar">
                {[
                    { id: 'hero', label: '🚀 Hero Section', icon: Layout },
                    { id: 'features', label: `⚡ Fitur Platform (${(content.features_list || []).length} Kartu)`, icon: Zap },
                    { id: 'steps', label: `⏱️ Cara Kerja (${(content.steps_list || []).length} Langkah)`, icon: Clock },
                    { id: 'pricing', label: '💎 Header Pricing (Pricelist DB)', icon: DollarSign },
                    { id: 'stats', label: '📊 Statistik', icon: BarChart3 },
                    { id: 'cta', label: '🎯 CTA Banner', icon: Sparkles },
                    { id: 'footer', label: '🦶 Footer Manager', icon: Globe },
                    { id: 'preview', label: '👁️ Live Interactive Preview', icon: Eye },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                            activeTab === tab.id
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105'
                                : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-indigo-600'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* TAB CONTENT AREAS */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                
                {/* 1. HERO TAB */}
                {activeTab === 'hero' && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                        <div className="border-b border-slate-100 pb-4">
                            <h3 className="text-base font-extrabold text-slate-900">Konfigurasi Hero Section</h3>
                            <p className="text-xs text-slate-500 mt-1">Bagian utama yang pertama kali dilihat oleh pengunjung landing page.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Hero Badge Tag
                                </label>
                                <input
                                    type="text"
                                    value={content.hero_badge}
                                    onChange={(e) => handleChange('hero_badge', e.target.value)}
                                    placeholder="Misal: DataSoft Website Builder 2.0"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Hero Primary Title (Baris 1)
                                </label>
                                <input
                                    type="text"
                                    value={content.hero_title}
                                    onChange={(e) => handleChange('hero_title', e.target.value)}
                                    placeholder="Misal: Build Professional Websites"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Hero Gradient Subtitle (Baris 2 Gradient)
                                </label>
                                <input
                                    type="text"
                                    value={content.hero_subtitle}
                                    onChange={(e) => handleChange('hero_subtitle', e.target.value)}
                                    placeholder="Misal: With One-Click Hosting"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Primary CTA Button Text
                                </label>
                                <input
                                    type="text"
                                    value={content.hero_cta_primary}
                                    onChange={(e) => handleChange('hero_cta_primary', e.target.value)}
                                    placeholder="Misal: Start Building Free"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Hero Description (Paragraf Penjelas)
                                </label>
                                <textarea
                                    rows={3}
                                    value={content.hero_desc}
                                    onChange={(e) => handleChange('hero_desc', e.target.value)}
                                    placeholder="Tuliskan penjelasan singkat mengenai produk..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. FEATURES TAB */}
                {activeTab === 'features' && (
                    <div className="space-y-8 animate-in fade-in duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900">Kelola Fitur Platform</h3>
                                <p className="text-xs text-slate-500 mt-1">Ubah judul section, pilih ikon & warna aksen kartu, serta tambah atau hapus kartu fitur.</p>
                            </div>
                            <button
                                type="button"
                                onClick={handleAddFeature}
                                className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer shrink-0"
                            >
                                <Plus className="h-4 w-4" />
                                <span>Tambah Kartu Fitur</span>
                            </button>
                        </div>

                        {/* Section Header Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Features Section Badge Tag
                                </label>
                                <input
                                    type="text"
                                    value={content.features_badge}
                                    onChange={(e) => handleChange('features_badge', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Features Section Headline
                                </label>
                                <input
                                    type="text"
                                    value={content.features_title}
                                    onChange={(e) => handleChange('features_title', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Features Section Subtitle
                                </label>
                                <input
                                    type="text"
                                    value={content.features_subtitle}
                                    onChange={(e) => handleChange('features_subtitle', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Daftar Kartu Fitur (Total: {(content.features_list || []).length})</h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {(content.features_list || []).map((card, idx) => {
                                    const SelectedIcon = ICON_OPTIONS.find(o => o.name === (card.icon || 'MousePointer2'))?.icon || MousePointer2;
                                    
                                    return (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative group hover:border-indigo-300 transition-all space-y-4"
                                        >
                                            {/* Card Header & Delete Button */}
                                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-extrabold text-xs shadow-2xs">
                                                        <SelectedIcon className="h-4 w-4 text-indigo-600" />
                                                    </div>
                                                    <span className="text-xs font-extrabold text-slate-800">Kartu Fitur #{idx + 1}</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteFeature(idx)}
                                                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                                                    title="Hapus kartu fitur ini"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>

                                            {/* VISUAL ICON PICKER GRID */}
                                            <div>
                                                <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                                                    Pilih Ikon Kartu Fitur
                                                </label>
                                                <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 p-2 bg-slate-50 rounded-xl border border-slate-200">
                                                    {ICON_OPTIONS.map((opt) => {
                                                        const IconComp = opt.icon;
                                                        const isSelected = (card.icon || 'MousePointer2') === opt.name;
                                                        return (
                                                            <button
                                                                key={opt.name}
                                                                type="button"
                                                                onClick={() => handleFeatureChange(idx, 'icon', opt.name)}
                                                                className={`p-2 rounded-lg flex flex-col items-center justify-center gap-1 transition cursor-pointer ${
                                                                    isSelected
                                                                        ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-600/30'
                                                                        : 'bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200/60'
                                                                }`}
                                                                title={opt.label}
                                                            >
                                                                <IconComp className="h-4 w-4" />
                                                                <span className="text-[9px] font-extrabold truncate w-full text-center">{opt.label}</span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Inputs */}
                                            <div>
                                                <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                                                    Judul Fitur
                                                </label>
                                                <input
                                                    type="text"
                                                    value={card.title}
                                                    onChange={(e) => handleFeatureChange(idx, 'title', e.target.value)}
                                                    placeholder="Judul Fitur"
                                                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                                                    Deskripsi Fitur
                                                </label>
                                                <textarea
                                                    rows={2}
                                                    value={card.desc}
                                                    onChange={(e) => handleFeatureChange(idx, 'desc', e.target.value)}
                                                    placeholder="Deskripsi penjelasan fitur..."
                                                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-normal text-slate-600 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                                                    Warna Aksen Ikon
                                                </label>
                                                <div className="flex flex-wrap gap-2">
                                                    {ACCENT_COLORS.map((c) => (
                                                        <button
                                                            key={c.value}
                                                            type="button"
                                                            onClick={() => handleFeatureChange(idx, 'accent', c.value)}
                                                            className={`px-3 py-1 rounded-lg text-[10px] font-extrabold border transition cursor-pointer ${
                                                                (card.accent || 'indigo') === c.value
                                                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                                                                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                                                            }`}
                                                        >
                                                            {c.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. STEPS TAB (FULL EDIT TITLE, DESC, ICON & CRUD) */}
                {activeTab === 'steps' && (
                    <div className="space-y-8 animate-in fade-in duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900">Kelola Section Cara Kerja (Steps)</h3>
                                <p className="text-xs text-slate-500 mt-1">Ubah judul section, deskripsi singkat, serta pilih ikon untuk setiap langkah penggunaan platform.</p>
                            </div>
                            <button
                                type="button"
                                onClick={handleAddStep}
                                className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer shrink-0"
                            >
                                <Plus className="h-4 w-4" />
                                <span>Tambah Langkah Baru</span>
                            </button>
                        </div>

                        {/* Section Header Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Steps Badge Tag
                                </label>
                                <input
                                    type="text"
                                    value={content.steps_badge || 'How It Works'}
                                    onChange={(e) => handleChange('steps_badge', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Steps Section Headline
                                </label>
                                <input
                                    type="text"
                                    value={content.steps_title || 'Build and Publish in 4 Easy Steps'}
                                    onChange={(e) => handleChange('steps_title', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>
                        </div>

                        {/* Steps List */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Daftar Langkah (Total: {(content.steps_list || []).length})</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {(content.steps_list || []).map((step, idx) => {
                                    const StepIcon = ICON_OPTIONS.find(o => o.name === (step.icon || 'Layout'))?.icon || Layout;

                                    return (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative group hover:border-indigo-300 transition-all space-y-4"
                                        >
                                            {/* Card Header & Delete Button */}
                                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-md">
                                                        {idx + 1}
                                                    </div>
                                                    <span className="text-xs font-extrabold text-slate-800">Langkah #{idx + 1}</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteStep(idx)}
                                                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                                                    title="Hapus langkah ini"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>

                                            {/* VISUAL ICON PICKER GRID */}
                                            <div>
                                                <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1.5">
                                                    Pilih Ikon Langkah #{idx + 1}
                                                </label>
                                                <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 p-2 bg-slate-50 rounded-xl border border-slate-200">
                                                    {ICON_OPTIONS.map((opt) => {
                                                        const IconComp = opt.icon;
                                                        const isSelected = (step.icon || 'Layout') === opt.name;
                                                        return (
                                                            <button
                                                                key={opt.name}
                                                                type="button"
                                                                onClick={() => handleStepChange(idx, 'icon', opt.name)}
                                                                className={`p-2 rounded-lg flex flex-col items-center justify-center gap-1 transition cursor-pointer ${
                                                                    isSelected
                                                                        ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-600/30'
                                                                        : 'bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200/60'
                                                                }`}
                                                                title={opt.label}
                                                            >
                                                                <IconComp className="h-4 w-4" />
                                                                <span className="text-[9px] font-extrabold truncate w-full text-center">{opt.label}</span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Title & Desc */}
                                            <div>
                                                <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                                                    Judul Langkah
                                                </label>
                                                <input
                                                    type="text"
                                                    value={step.title}
                                                    onChange={(e) => handleStepChange(idx, 'title', e.target.value)}
                                                    placeholder="Judul Langkah"
                                                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-[10px] font-extrabold text-slate-500 uppercase tracking-wider mb-1">
                                                    Deskripsi Singkat Langkah
                                                </label>
                                                <textarea
                                                    rows={2}
                                                    value={step.desc}
                                                    onChange={(e) => handleStepChange(idx, 'desc', e.target.value)}
                                                    placeholder="Deskripsi penjelasan singkat..."
                                                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-normal text-slate-600 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. PRICING TAB (FETCHED DYNAMICALLY FROM PRICELIST MANAGEMENT) */}
                {activeTab === 'pricing' && (
                    <div className="space-y-8 animate-in fade-in duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900">Kelola Header Section Pricing</h3>
                                <p className="text-xs text-slate-500 mt-1">Ubah badge tag dan judul header section pricing di Landing Page.</p>
                            </div>
                            <Link
                                to={ROUTES.ADMIN_PRICELIST || '/admin/pricelist'}
                                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold flex items-center justify-center gap-2 transition shadow-md shadow-indigo-600/20 shrink-0"
                            >
                                <CreditCard className="h-4 w-4" />
                                <span>Buka Pricelist Management Database</span>
                            </Link>
                        </div>

                        {/* Notice Banner */}
                        <div className="p-5 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-indigo-900">
                            <div className="flex items-start gap-3">
                                <Sparkles className="h-6 w-6 text-indigo-600 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-sm font-extrabold text-indigo-900">Pricelist Terintegrasi Otomatis dengan Database</h4>
                                    <p className="text-xs text-indigo-700 mt-1 leading-relaxed">
                                        Data paket harga, nominal tarif, deskripsi, dan poin fitur di Landing Page diambil secara real-time langsung dari <strong>Pricelist Management</strong>. Untuk mengedit atau menambah paket harga, gunakan menu Pricelist Management.
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={ROUTES.ADMIN_PRICELIST || '/admin/pricelist'}
                                className="px-4 py-2 bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50 text-xs font-bold rounded-xl whitespace-nowrap shadow-2xs transition"
                            >
                                Kelola Paket & Limit →
                            </Link>
                        </div>

                        {/* Section Header Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Pricing Section Badge
                                </label>
                                <input
                                    type="text"
                                    value={content.pricing_badge || 'Pricing'}
                                    onChange={(e) => handleChange('pricing_badge', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Pricing Section Headline
                                </label>
                                <input
                                    type="text"
                                    value={content.pricing_title || 'Simple, Transparent Pricing'}
                                    onChange={(e) => handleChange('pricing_title', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Pricing Section Subtitle
                                </label>
                                <input
                                    type="text"
                                    value={content.pricing_subtitle || 'Drag left/right or tap a tab to rotate 3D pricing wheel.'}
                                    onChange={(e) => handleChange('pricing_subtitle', e.target.value)}
                                    className="w-full px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* 5. STATS TAB */}
                {activeTab === 'stats' && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                        <div className="border-b border-slate-100 pb-4">
                            <h3 className="text-base font-extrabold text-slate-900">Konfigurasi Section Statistik</h3>
                            <p className="text-xs text-slate-500 mt-1">Poin angka statistik pencapaian platform.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Stats Section Title
                                </label>
                                <input
                                    type="text"
                                    value={content.stats_title}
                                    onChange={(e) => handleChange('stats_title', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    Stats Section Subtitle
                                </label>
                                <input
                                    type="text"
                                    value={content.stats_subtitle}
                                    onChange={(e) => handleChange('stats_subtitle', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* 6. CTA TAB */}
                {activeTab === 'cta' && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                        <div className="border-b border-slate-100 pb-4">
                            <h3 className="text-base font-extrabold text-slate-900">Konfigurasi Banner Call to Action (CTA)</h3>
                            <p className="text-xs text-slate-500 mt-1">Banner ajakan bergabung pada bagian bawah landing page.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    CTA Badge Tag
                                </label>
                                <input
                                    type="text"
                                    value={content.cta_badge}
                                    onChange={(e) => handleChange('cta_badge', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    CTA Main Headline
                                </label>
                                <input
                                    type="text"
                                    value={content.cta_title}
                                    onChange={(e) => handleChange('cta_title', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    CTA Button Text
                                </label>
                                <input
                                    type="text"
                                    value={content.cta_button_text}
                                    onChange={(e) => handleChange('cta_button_text', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                    CTA Paragraph Description
                                </label>
                                <textarea
                                    rows={2}
                                    value={content.cta_desc}
                                    onChange={(e) => handleChange('cta_desc', e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* 7. FOOTER MANAGER TAB */}
                {activeTab === 'footer' && (
                    <div className="space-y-8 animate-in fade-in duration-200">
                        <div className="border-b border-slate-100 pb-4">
                            <h3 className="text-base font-extrabold text-slate-900">🦶 Kelola Footer Landing Page</h3>
                            <p className="text-xs text-slate-500 mt-1">
                                Atur nama brand, tagline, deskripsi, email kontak, link sosial media, dan teks hak cipta (copyright) footer.
                            </p>
                        </div>

                        {/* Brand Info */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-black">1</span>
                                Identitas Brand Footer
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                                <div>
                                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                        Nama Brand / Produk
                                    </label>
                                    <input
                                        type="text"
                                        value={content.footer_brand_name || 'DataSoft'}
                                        onChange={(e) => handleChange('footer_brand_name', e.target.value)}
                                        placeholder="Misal: DataSoft"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                    />
                                    <p className="text-[10px] text-slate-400 mt-1">Tampil di logo footer kiri atas (maks. 2 huruf jadi initial).</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                        Tagline / Subtitle Brand
                                    </label>
                                    <input
                                        type="text"
                                        value={content.footer_brand_tagline || 'Studio'}
                                        onChange={(e) => handleChange('footer_brand_tagline', e.target.value)}
                                        placeholder="Misal: Studio"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-xs font-medium text-slate-700 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                    />
                                    <p className="text-[10px] text-slate-400 mt-1">Teks kecil berwarna indigo di bawah nama brand.</p>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                        Deskripsi Singkat Brand (Footer)
                                    </label>
                                    <textarea
                                        rows={2}
                                        value={content.footer_desc || ''}
                                        onChange={(e) => handleChange('footer_desc', e.target.value)}
                                        placeholder="Misal: Build, customize, and publish professional websites without coding."
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-xs font-normal text-slate-600 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact & Copyright */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-black">2</span>
                                Kontak & Hak Cipta
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                                <div>
                                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                        Email Kontak / Support
                                    </label>
                                    <input
                                        type="email"
                                        value={content.footer_email || ''}
                                        onChange={(e) => handleChange('footer_email', e.target.value)}
                                        placeholder="Misal: hello@datasoft.id"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-xs font-medium text-indigo-700 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                    />
                                    <p className="text-[10px] text-slate-400 mt-1">Ditampilkan sebagai link mailto: di footer brand.</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                        Teks Hak Cipta (Copyright)
                                    </label>
                                    <input
                                        type="text"
                                        value={content.footer_copyright || ''}
                                        onChange={(e) => handleChange('footer_copyright', e.target.value)}
                                        placeholder="Misal: © 2026 PT DataSoft Solusindo. All rights reserved."
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-xs font-medium text-slate-600 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none"
                                    />
                                    <p className="text-[10px] text-slate-400 mt-1">Muncul di bagian paling bawah footer.</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-black">3</span>
                                Link Sosial Media
                            </h4>
                            <p className="text-xs text-slate-500 -mt-2">Isi URL lengkap. Jika dikosongkan atau diisi '#', ikon sosial media tersebut tidak akan ditampilkan.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                                {[
                                    { field: 'footer_social_twitter', label: 'Twitter / X', placeholder: 'https://twitter.com/datasoft', color: 'text-sky-600' },
                                    { field: 'footer_social_github', label: 'GitHub', placeholder: 'https://github.com/datasoft', color: 'text-slate-700' },
                                    { field: 'footer_social_linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/company/datasoft', color: 'text-blue-600' },
                                    { field: 'footer_social_instagram', label: 'Instagram', placeholder: 'https://instagram.com/datasoft', color: 'text-pink-600' },
                                ].map(({ field, label, placeholder, color }) => (
                                    <div key={field}>
                                        <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                                            {label}
                                        </label>
                                        <input
                                            type="url"
                                            value={content[field] === '#' ? '' : (content[field] || '')}
                                            onChange={(e) => handleChange(field, e.target.value || '#')}
                                            placeholder={placeholder}
                                            className={`w-full px-4 py-3 bg-white rounded-xl border border-slate-200 text-xs font-medium ${color} focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition outline-none`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Preview Card */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Preview Footer (Simulasi)</h4>
                            <div className="rounded-2xl bg-slate-900 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                <div className="flex items-center gap-2.5 shrink-0">
                                    <div className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm"
                                         style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}>
                                        {(content.footer_brand_name || 'DataSoft').substring(0, 2).toUpperCase()}
                                    </div>
                                    <div>
                                        <div className="text-sm font-extrabold text-white">{content.footer_brand_name || 'DataSoft'}</div>
                                        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-indigo-400">{content.footer_brand_tagline || 'Studio'}</div>
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-slate-400 mb-2 leading-relaxed">{content.footer_desc || '...'}</p>
                                    {content.footer_email && (
                                        <p className="text-xs text-indigo-400 font-medium">{content.footer_email}</p>
                                    )}
                                </div>
                                <div className="flex flex-col items-end gap-1 shrink-0">
                                    <div className="flex gap-2">
                                        {content.footer_social_twitter && content.footer_social_twitter !== '#' && (
                                            <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400 text-[9px] font-bold">𝕏</div>
                                        )}
                                        {content.footer_social_github && content.footer_social_github !== '#' && (
                                            <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 text-[9px] font-bold">G</div>
                                        )}
                                        {content.footer_social_linkedin && content.footer_social_linkedin !== '#' && (
                                            <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 text-[9px] font-bold">in</div>
                                        )}
                                        {content.footer_social_instagram && content.footer_social_instagram !== '#' && (
                                            <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-pink-400 text-[9px] font-bold">IG</div>
                                        )}
                                    </div>
                                    <p className="text-[10px] text-slate-600 text-right">{content.footer_copyright || '© 2026 PT DataSoft Solusindo'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 8. FULL INTERACTIVE REAL-TIME LIVE PREVIEW TAB */}
                {activeTab === 'preview' && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900">Live Interactive Landing Page Preview</h3>
                                <p className="text-xs text-slate-500 mt-1">Pratinjau interaktif 100% identik dengan landing page asli. Setiap perubahan teks/fitur/pricing otomatis ter-update secara real-time.</p>
                            </div>

                            {/* Viewport Switcher Controls */}
                            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
                                <button
                                    type="button"
                                    onClick={() => setViewportMode('desktop')}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                                        viewportMode === 'desktop'
                                            ? 'bg-white text-indigo-600 shadow-sm'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    <Monitor className="h-3.5 w-3.5" /> Desktop
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setViewportMode('tablet')}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                                        viewportMode === 'tablet'
                                            ? 'bg-white text-indigo-600 shadow-sm'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    <Tablet className="h-3.5 w-3.5" /> Tablet
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setViewportMode('mobile')}
                                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                                        viewportMode === 'mobile'
                                            ? 'bg-white text-indigo-600 shadow-sm'
                                            : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    <Smartphone className="h-3.5 w-3.5" /> Mobile
                                </button>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-3 py-1.5 rounded-xl text-indigo-700 bg-indigo-50 hover:bg-indigo-100 text-xs font-extrabold flex items-center gap-1 transition"
                                >
                                    <Globe className="h-3.5 w-3.5" /> ↗
                                </a>
                            </div>
                        </div>

                        {/* Interactive Responsive Device Frame */}
                        <div className="bg-slate-900/5 p-4 sm:p-8 rounded-3xl border border-slate-200 flex justify-center overflow-x-auto">
                            <div
                                className="bg-white rounded-3xl shadow-2xl border border-slate-300 overflow-hidden transition-all duration-300 relative"
                                style={{
                                    width: viewportMode === 'mobile' ? '380px' : viewportMode === 'tablet' ? '768px' : '100%',
                                    height: '750px',
                                    maxHeight: '80vh',
                                    overflowY: 'auto',
                                }}
                            >
                                <LandingPage liveContent={content} />
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Confirm Reset Modal */}
            <ConfirmModal
                isOpen={isResetModalOpen}
                onClose={() => setIsResetModalOpen(false)}
                onConfirm={handleConfirmReset}
                title="Reset Konten Landing Page"
                description="Apakah Anda yakin ingin mengembalikan seluruh konten landing page & teks section ke format standar default?"
                variant="warning"
                icon={RotateCcw}
                confirmText="Ya, Reset Konten"
                cancelText="Batal"
            />
        </div>
    );
}

