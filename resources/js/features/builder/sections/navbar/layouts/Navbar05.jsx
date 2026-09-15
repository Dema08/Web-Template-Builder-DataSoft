import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Sporty Mega-Bar
 * Navbar sporty dengan search pill + mega dropdown animasi.
 * Nuansa e-commerce / otomotif / sport premium.
 */
export default function Navbar05({ components = [], sectionId = null }) {
  const [openMenu, setOpenMenu] = useState(false);

  const defaultComponents = [
    { id: 'logo-5', type: 'heading', props: { content: 'VELOCE', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.12em' } },
    { id: 'nav-models', type: 'button', props: { label: 'Models', href: '#models', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-racing', type: 'button', props: { label: 'Racing', href: '#racing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-store', type: 'button', props: { label: 'Store', href: '#store', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-test', type: 'button', props: { label: 'Test Drive', href: '#test', variant: 'primary', size: 'small', radius: 'md', background: '#ef4444', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-red-500/30 px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-black italic shadow-lg shadow-red-500/40 select-none">V</div>
          {renderLayoutComponents(logoComps, sectionId)}
        </div>
        <div className="hidden lg:flex items-center gap-2">
          {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
            <>
              <span className="text-sm font-bold text-slate-200 px-3 py-2 cursor-default select-none">Models</span>
              <span className="text-sm font-bold text-slate-200 px-3 py-2 cursor-default select-none">Racing</span>
            </>
          )}
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpenMenu(v => !v); }}
            className={`text-sm font-bold px-3 py-2 rounded-lg transition-all select-none ${openMenu ? 'bg-red-500/20 text-red-300' : 'text-slate-200 hover:bg-white/10'}`}
          >
            More ▾
          </button>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden md:flex items-center bg-white/10 border border-white/15 rounded-full pl-3 pr-1 py-1">
            <span className="text-slate-400 text-sm mr-2 select-none">⌕</span>
            <span className="text-xs text-slate-400 mr-2 select-none">Search models…</span>
            <span className="text-[10px] font-bold bg-white/15 text-white rounded-full px-2 py-0.5 select-none">⌘K</span>
          </div>
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${openMenu ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 pb-2">
          {['GT Series', 'Electric', 'Accessories', 'Support'].map(label => (
            <span key={label} className="text-xs font-bold text-slate-300 bg-white/5 border border-white/10 rounded-xl px-4 py-3 select-none">{label}</span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
    </nav>
  );
}
