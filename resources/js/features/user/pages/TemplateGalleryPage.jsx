import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Search, Layout, Eye, Edit2, CheckCircle2,
    Loader2, X, ChevronRight, ChevronLeft, Sparkles, Grid3X3,
    List, SlidersHorizontal, Rocket, Tag, Home, ShoppingBag,
    Users, Landmark, GraduationCap, Utensils, Building2,
    HeartHandshake, Factory, Layers, Truck, Stethoscope, Hotel,
    Crown
} from 'lucide-react';
import { ROUTES } from '@constants';
import { templateApi } from '@api';
import { useAuthStore } from '@store';

/* ─────────────────────────────────────────────────────────
   FALLBACK TEMPLATES
───────────────────────────────────────────────────────── */
const FALLBACK_TEMPLATES = [
    { id: 1,  name: 'Retail Commerce',       description: 'Template e-commerce untuk toko ritel modern.',              thumbnail: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format&fit=crop&q=80', industry_category: { id: 1,  name: 'Perdagangan / Retail'         }, code: 'TMPL-001', version: '1.0.0', is_fallback: true },
    { id: 2,  name: 'Org Association',       description: 'Template untuk organisasi dan asosiasi profesional.',       thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80', industry_category: { id: 2,  name: 'Organisasi & Asosiasi'        }, code: 'TMPL-002', version: '1.0.0', is_fallback: true },
    { id: 3,  name: 'Koperasi Modern',       description: 'Template bersih dan modern khusus koperasi simpan pinjam.',thumbnail: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&auto=format&fit=crop&q=80', industry_category: { id: 3,  name: 'Koperasi'                     }, code: 'TMPL-003', version: '1.0.0', is_fallback: true },
    { id: 4,  name: 'Corporate Business',    description: 'Template korporat profesional untuk perusahaan besar.',    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80', industry_category: { id: 4,  name: 'Korporat'                     }, code: 'TMPL-004', version: '1.0.0', is_fallback: true },
    { id: 5,  name: 'Logistics Company',     description: 'Template untuk perusahaan logistik dan pengiriman.',       thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80', industry_category: { id: 5,  name: 'Logistik'                     }, code: 'TMPL-005', version: '1.0.0', is_fallback: true },
    { id: 6,  name: 'Manufacturing',         description: 'Template untuk industri manufaktur dan pabrikasi.',        thumbnail: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&auto=format&fit=crop&q=80', industry_category: { id: 6,  name: 'Manufaktur'                   }, code: 'TMPL-006', version: '1.0.0', is_fallback: true },
    { id: 7,  name: 'Educational Institution',description: 'Template untuk lembaga pendidikan dan sekolah.',          thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80', industry_category: { id: 7,  name: 'Pendidikan'                   }, code: 'TMPL-007', version: '1.0.0', is_fallback: true },
    { id: 8,  name: 'Startup & SaaS',        description: 'Template modern untuk startup teknologi dan produk SaaS.', thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80', industry_category: { id: 8,  name: 'Startup & SaaS'              }, code: 'TMPL-008', version: '1.0.0', is_fallback: true },
    { id: 9,  name: 'Organization & NGO',    description: 'Template untuk organisasi sosial dan LSM.',                thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80', industry_category: { id: 9,  name: 'Organisasi & NGO'             }, code: 'TMPL-009', version: '1.0.0', is_fallback: true },
    { id: 10, name: 'Healthcare Clinic',     description: 'Template profesional untuk klinik dan layanan kesehatan.', thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80', industry_category: { id: 10, name: 'Kesehatan'                    }, code: 'TMPL-010', version: '1.0.0', is_fallback: true },
    { id: 11, name: 'Restaurant & Cafe',     description: 'Template untuk restoran, kafe, dan bisnis kuliner.',       thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80', industry_category: { id: 11, name: 'Kuliner'                      }, code: 'TMPL-011', version: '1.0.0', is_fallback: true },
    { id: 12, name: 'Hotel & Resort',        description: 'Template mewah untuk hotel, resort, dan layanan hospitality.',thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80', industry_category: { id: 12, name: 'Hospitality'                  }, code: 'TMPL-012', version: '1.0.0', is_fallback: true },
];

/* ─────────────────────────────────────────────────────────
   CATEGORY ICON & COLOR MAP (CANVA STYLE)
───────────────────────────────────────────────────────── */
const CATEGORY_META_MAP = {
    'Semua':                                { icon: Sparkles,       bg: 'from-purple-600 to-indigo-600' },
    'Perdagangan / Retail':                 { icon: ShoppingBag,    bg: 'from-orange-500 to-amber-600' },
    'Organisasi & Asosiasi':                { icon: Users,          bg: 'from-pink-500 to-rose-600' },
    'Koperasi':                             { icon: Landmark,       bg: 'from-violet-600 to-purple-700' },
    'Pendidikan & Pelatihan':               { icon: GraduationCap,  bg: 'from-cyan-500 to-blue-600' },
    'Pendidikan':                           { icon: GraduationCap,  bg: 'from-cyan-500 to-blue-600' },
    'UMKM':                                 { icon: Utensils,       bg: 'from-emerald-500 to-teal-600' },
    'Kuliner':                              { icon: Utensils,       bg: 'from-amber-500 to-red-500' },
    'Perusahaan Jasa':                      { icon: Building2,      bg: 'from-blue-600 to-indigo-700' },
    'Korporat':                             { icon: Building2,      bg: 'from-blue-600 to-indigo-700' },
    'Koperasi Susu':                        { icon: HeartHandshake, bg: 'from-sky-400 to-blue-500' },
    'Industri & Manufaktur':                { icon: Factory,        bg: 'from-emerald-600 to-green-700' },
    'Manufaktur':                           { icon: Factory,        bg: 'from-emerald-600 to-green-700' },
    'Group Perusahaan / Holding Company':   { icon: Layers,         bg: 'from-purple-500 to-pink-600' },
    'Logistik & Transportasi':              { icon: Truck,          bg: 'from-indigo-500 to-blue-600' },
    'Logistik':                             { icon: Truck,          bg: 'from-indigo-500 to-blue-600' },
    'Startup & SaaS':                       { icon: Rocket,         bg: 'from-fuchsia-500 to-purple-600' },
    'Kesehatan':                            { icon: Stethoscope,    bg: 'from-red-500 to-pink-600' },
    'Hospitality':                          { icon: Hotel,          bg: 'from-amber-400 to-yellow-600' },
};

const DEFAULT_METAS = [
    { icon: Layout, bg: 'from-indigo-500 to-purple-600' },
    { icon: Tag,    bg: 'from-blue-500 to-cyan-600' },
    { icon: Layers, bg: 'from-rose-500 to-pink-600' },
];

function getCategoryMeta(catName, index) {
    if (CATEGORY_META_MAP[catName]) return CATEGORY_META_MAP[catName];
    return DEFAULT_METAS[index % DEFAULT_METAS.length];
}

/* ─────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────── */
function GalleryNavbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-white/80 backdrop-blur-md border-b border-slate-100/50'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <Link to={ROUTES.HOME}
                              className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-purple-600 transition group">
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                            Kembali
                        </Link>
                        <div className="w-px h-5 bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <img
                                src="/storage/settings/microdata-emblem.png"
                                alt="Microdata"
                                className="h-8 w-auto object-contain"
                                onError={(e) => { e.target.src = '/images/microdata-emblem.png'; }}
                            />
                            <div>
                                <div className="text-[13px] font-extrabold text-slate-900 leading-none">Microdata</div>
                                <div className="text-[8px] font-bold uppercase tracking-widest text-purple-600 leading-none mt-0.5">Studio</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to={ROUTES.LOGIN}
                              className="text-sm font-bold text-slate-700 hover:text-purple-600 transition px-3 py-2">Login</Link>
                        <Link to={ROUTES.REGISTER}
                              className="text-sm font-bold text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
                              style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>Start Building</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

/* ─────────────────────────────────────────────────────────
   TEXT-ONLY HORIZONTAL CATEGORY PILL BAR WITH SCROLL BUTTONS
───────────────────────────────────────────────────────── */
function CanvaCategoryBar({ categories, activeCategory, onSelect }) {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    };

    return (
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 mt-7">
            {/* Left scroll arrow */}
            <button
                type="button"
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-purple-600 transition"
            >
                <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Scrollable Container for Text-Only Pills */}
            <div
                ref={scrollRef}
                className="flex items-center gap-2.5 overflow-x-auto scroll-smooth py-2 px-3 no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {categories.map((cat) => {
                    const isActive = activeCategory === cat;

                    return (
                        <button
                            key={cat}
                            id={`cat-pill-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                            type="button"
                            onClick={() => onSelect(cat)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                                isActive
                                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md scale-105'
                                    : 'bg-white text-slate-700 border border-slate-200/90 shadow-xs hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50/50'
                            }`}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Right scroll arrow */}
            <button
                type="button"
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-purple-600 transition"
            >
                <ChevronRight className="h-4 w-4" />
            </button>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   TEMPLATE CARD
───────────────────────────────────────────────────────── */
function TemplateCard({ tpl, onSelect, viewMode }) {
    const categoryName = tpl.industry_category?.name || 'General';
    const imageUrl = tpl.thumbnail || tpl.preview_image
        || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80';
    const isPremium = Boolean(tpl.is_premium) && !String(tpl.slug || tpl.name || '').toLowerCase().includes('blank');

    const proBadge = (
        <span className="px-2 py-0.5 rounded-full text-[10px] font-black text-white shadow-md"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
            <Crown className="inline h-2.5 w-2.5 mr-0.5" /> PRO
        </span>
    );

    if (viewMode === 'list') {
        return (
            <div onClick={() => onSelect(tpl)}
                 className="group flex items-center gap-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 cursor-pointer hover:border-purple-300 hover:shadow-md transition-all duration-200">
                <div className="relative h-20 w-32 shrink-0 rounded-xl overflow-hidden bg-slate-100">
                    <img src={imageUrl} alt={tpl.name}
                         className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold text-white"
                              style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                            {categoryName}
                        </span>
                        {isPremium && proBadge}
                        {tpl.code && <span className="text-[10px] font-bold text-purple-500">{tpl.code}</span>}
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors truncate">{tpl.name}</h3>
                    {tpl.description && <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{tpl.description}</p>}
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all shrink-0" />
            </div>
        );
    }

    return (
        <div onClick={() => onSelect(tpl)}
             className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            {/* Thumbnail */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img src={imageUrl} alt={tpl.name}
                     className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                     style={{ background: 'rgba(15,23,42,0.60)', backdropFilter: 'blur(3px)' }}>
                    <span className="px-4 py-2 bg-white text-slate-900 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Eye className="h-3.5 w-3.5 text-purple-600" /> Lihat Detail
                    </span>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10 space-y-1.5">
                    {isPremium && proBadge}
                    <span className="block px-2.5 py-1 rounded-full text-[10px] font-extrabold text-white shadow-md backdrop-blur-md"
                          style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                        {categoryName}
                    </span>
                </div>
            </div>
            {/* Info */}
            <div className="p-4 flex-1 flex flex-col gap-1.5">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-purple-600 transition-colors line-clamp-1">
                            {tpl.name}
                        </h3>
                        {tpl.code && <p className="text-[11px] font-bold text-purple-500 mt-0.5">{tpl.code}</p>}
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                </div>
                {tpl.description && (
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{tpl.description}</p>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   TEMPLATE DETAIL MODAL
───────────────────────────────────────────────────────── */
function TemplateModal({ tpl, onClose, onEdit }) {
    const { isAuthenticated } = useAuthStore();
    const imageUrl = tpl.thumbnail || tpl.preview_image
        || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80';

    useEffect(() => {
        const fn = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', fn);
        return () => document.removeEventListener('keydown', fn);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
             style={{ background: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(8px)' }}
             onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
                {/* Header image */}
                <div className="relative h-64 sm:h-72 bg-slate-900 overflow-hidden shrink-0">
                    <img src={imageUrl} alt={tpl.name} className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
                    <button type="button" onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition backdrop-blur-md shadow-lg z-10">
                        <X className="h-5 w-5" />
                    </button>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                        {Boolean(tpl.is_premium) && !String(tpl.slug || tpl.name || '').toLowerCase().includes('blank') && (
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-black text-white shadow-md"
                                  style={{ background: 'linear-gradient(135deg,#4f46e5,#9333ea)' }}>
                                <Crown className="inline h-2.5 w-2.5 mr-0.5" /> PRO / Berbayar
                            </span>
                        )}
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold text-white shadow-md"
                              style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                            {tpl.industry_category?.name || 'Umum'}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-md">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Published
                        </span>
                    </div>
                    <div className="absolute bottom-4 left-6 right-6 text-white">
                        <h3 className="text-2xl font-black tracking-tight">{tpl.name}</h3>
                        {tpl.code && <p className="text-xs font-bold text-purple-300 mt-0.5">{tpl.code}</p>}
                    </div>
                </div>
                {/* Body */}
                <div className="p-6 space-y-5 overflow-y-auto flex-1">
                    <div>
                        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1.5">Deskripsi Template</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {tpl.description || 'Template profesional siap pakai dengan komponen visual builder modern untuk mempercepat peluncuran website Anda.'}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Kategori Industry</span>
                            <span className="text-xs font-extrabold text-slate-800 mt-0.5 block">
                                {tpl.industry_category?.name || 'Umum / Corporate'}
                            </span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Versi Engine</span>
                            <span className="text-xs font-extrabold text-slate-800 mt-0.5 block">v{tpl.version || '1.0.0'}</span>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3 shrink-0">
                    <button type="button"
                            onClick={() => window.open(tpl.is_fallback ? `/preview/template` : `/admin/templates/builder/${tpl.id}/preview`, '_blank')}
                            className="w-full sm:flex-1 py-3 px-5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition hover:scale-[1.02]">
                        <Eye className="h-4 w-4 text-purple-600" /> Live Preview
                    </button>
                    <button type="button" onClick={() => onEdit(tpl)}
                            className="w-full sm:flex-1 py-3 px-5 rounded-2xl text-white font-bold text-xs shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 transition hover:scale-[1.02]"
                            style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                        <Edit2 className="h-4 w-4" />
                        {isAuthenticated ? 'Edit Template' : 'Edit Template (Login)'}
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────────────────
   MAIN PAGE (CANVA HOMEPAGE DESIGN)
───────────────────────────────────────────────────────── */
export default function TemplateGalleryPage() {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuthStore();

    const [allTemplates, setAllTemplates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [viewMode, setViewMode] = useState('grid');

    /* ── Scroll to top on mount ── */
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    /* ── Fetch ── */
    useEffect(() => {
        let mounted = true;
        templateApi.getPublic()
            .then((res) => {
                if (!mounted) return;
                const items = res.data?.data ?? res.data ?? [];
                setAllTemplates(Array.isArray(items) && items.length > 0 ? items : FALLBACK_TEMPLATES);
            })
            .catch(() => { if (mounted) setAllTemplates(FALLBACK_TEMPLATES); })
            .finally(() => { if (mounted) setIsLoading(false); });
        return () => { mounted = false; };
    }, []);

    /* ── Categories list ── */
    const categoryNames = ['Semua', ...Array.from(
        new Set(allTemplates.map(t => t.industry_category?.name).filter(Boolean))
    )];

    /* ── Filter ── */
    const filtered = allTemplates.filter((tpl) => {
        const matchCat = activeCategory === 'Semua' || tpl.industry_category?.name === activeCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchSearch = !q
            || tpl.name?.toLowerCase().includes(q)
            || tpl.description?.toLowerCase().includes(q)
            || tpl.industry_category?.name?.toLowerCase().includes(q)
            || tpl.code?.toLowerCase().includes(q);
        return matchCat && matchSearch;
    });

    /* ── Edit handler ── */
    const handleEdit = useCallback((tpl) => {
        if (!tpl) return;
        setSelectedTemplate(null);
        if (!isAuthenticated) navigate(ROUTES.LOGIN);
        else if (user?.role === 'admin' || user?.role === 'superadmin')
            navigate(tpl.is_fallback ? `/admin/templates` : `/admin/templates/builder/${tpl.id}`);
        else navigate(ROUTES.ONBOARDING);
    }, [isAuthenticated, user, navigate]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
            <GalleryNavbar />

            {/* ── CANVA HERO BANNER ── */}
            <section className="pt-24 pb-10 relative overflow-hidden"
                     style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #f3e8ff 50%, #fae8ff 100%)' }}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">

                    {/* Tab Pill Switcher (Beranda | Template) */}
                    <div className="inline-flex items-center gap-1 bg-white/70 backdrop-blur-md p-1 rounded-full border border-purple-200/60 shadow-xs mb-6">
                        <Link
                            to={ROUTES.HOME}
                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 hover:text-purple-700 transition"
                        >
                            <Home className="h-3.5 w-3.5" />
                            Beranda
                        </Link>
                        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white text-purple-700 shadow-sm border border-purple-200">
                            <Layout className="h-3.5 w-3.5 text-purple-600" />
                            Template
                        </div>
                    </div>

                    {/* Canva Title */}
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-7">
                        Mau buat website apa hari ini?
                    </h1>

                    {/* Giant Pill Search Bar */}
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                        <input
                            type="text"
                            id="template-search"
                            placeholder="Cari apa saja (misal: Corporate, Logistik, Koperasi...)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-13 pr-12 py-4 rounded-full border border-slate-200/90 bg-white text-base font-medium text-slate-800 placeholder-slate-400 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                className="absolute right-5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 transition"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* Horizontal Canva Circular Category Bar */}
                    {!isLoading && (
                        <CanvaCategoryBar
                            categories={categoryNames}
                            activeCategory={activeCategory}
                            onSelect={setActiveCategory}
                        />
                    )}
                </div>
            </section>

            {/* ── TEMPLATES GRID SECTION ── */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    {!isLoading && (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
                            <div>
                                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                    {activeCategory === 'Semua' ? 'Template Populer' : `Template ${activeCategory}`}
                                </h2>
                                <p className="text-xs text-slate-500 font-medium mt-1">
                                    Menampilkan <span className="font-bold text-slate-800">{filtered.length}</span> template siap pakai
                                </p>
                            </div>

                            {/* View toggle & reset */}
                            <div className="flex items-center gap-3">
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); }}
                                        className="text-xs font-bold text-slate-500 hover:text-purple-600 transition flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs"
                                    >
                                        <X className="h-3.5 w-3.5" /> Reset filter
                                    </button>
                                )}

                                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 shadow-xs">
                                    <button
                                        id="view-grid"
                                        type="button"
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                        title="Grid view"
                                    >
                                        <Grid3X3 className="h-4 w-4" />
                                    </button>
                                    <button
                                        id="view-list"
                                        type="button"
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                        title="List view"
                                    >
                                        <List className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-40 gap-4">
                            <div className="relative">
                                <Loader2 className="h-10 w-10 animate-spin text-purple-600" />
                                <div className="absolute inset-0 blur-lg opacity-40"
                                     style={{ background: 'radial-gradient(circle,#7c3aed,transparent)' }} />
                            </div>
                            <p className="text-sm text-slate-500 font-medium">Memuat template...</p>
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
                            <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center">
                                <SlidersHorizontal className="h-8 w-8 text-slate-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-800 mb-1">Tidak ada template ditemukan</h3>
                                <p className="text-sm text-slate-500">Coba ubah filter kategori atau kata kunci pencarian.</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); }}
                                className="px-5 py-2.5 rounded-full text-sm font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 transition"
                            >
                                Reset Filter
                            </button>
                        </div>
                    ) : (
                        <div className={
                            viewMode === 'grid'
                                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                                : 'flex flex-col gap-3'
                        }>
                            {filtered.map((tpl) => (
                                <TemplateCard
                                    key={tpl.id}
                                    tpl={tpl}
                                    onSelect={setSelectedTemplate}
                                    viewMode={viewMode}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── CTA BANNER ── */}
            {!isLoading && (
                <section className="py-14">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl p-10 sm:p-14 text-center border relative overflow-hidden"
                             style={{
                                 background: 'linear-gradient(135deg,rgba(124,58,237,0.06),rgba(79,70,229,0.09))',
                                 borderColor: 'rgba(124,58,237,0.15)',
                                 boxShadow: '0 20px 60px rgba(124,58,237,0.10)',
                             }}>
                            <div className="absolute top-4 right-4 opacity-10">
                                <Sparkles className="h-20 w-20 text-purple-500 animate-spin" style={{ animationDuration: '15s' }} />
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                                 style={{ background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.2)', color: '#7c3aed' }}>
                                <Rocket className="h-3 w-3 animate-bounce" /> Mulai Sekarang
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                                Sudah pilih template favorit Anda?
                            </h2>
                            <p className="text-slate-500 font-medium mb-8 max-w-xl mx-auto">
                                Daftarkan akun gratis sekarang dan mulai membangun website profesional
                                dalam hitungan menit. Tidak butuh kemampuan coding.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    to={ROUTES.REGISTER}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-bold rounded-full text-sm shadow-xl hover:-translate-y-0.5 transition-all"
                                    style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}
                                >
                                    <Sparkles className="h-4 w-4" /> Daftar Gratis Sekarang
                                </Link>
                                <Link
                                    to={ROUTES.HOME}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-full text-sm border-2 border-slate-200 text-slate-700 hover:border-purple-400 hover:text-purple-600 bg-white transition-all"
                                >
                                    <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── DETAIL MODAL ── */}
            {selectedTemplate && (
                <TemplateModal
                    tpl={selectedTemplate}
                    onClose={() => setSelectedTemplate(null)}
                    onEdit={handleEdit}
                />
            )}
        </div>
    );
}
