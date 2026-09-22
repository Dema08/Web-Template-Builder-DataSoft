import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Search Command Bar
 * Navbar dengan command-bar search besar di tengah + shortcut hint.
 * Ala marketplace / docs / e-commerce modern.
 */
export default function Navbar17({ components = [], sectionId = null }) {
  const [query, setQuery] = useState('');

  const defaultComponents = [
    { id: 'logo-17', type: 'heading', props: { content: 'pulse', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#0f172a' } },
    { id: 'nav-shop', type: 'button', props: { label: 'Shop', href: '#shop', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-brands', type: 'button', props: { label: 'Brands', href: '#brands', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-sale', type: 'button', props: { label: 'Sale %', href: '#sale', variant: 'ghost', size: 'small', background: 'transparent', color: '#dc2626' } },
    { id: 'cta-cart', type: 'button', props: { label: '🛒 Cart', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#0f172a', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <div className="flex items-center gap-2 shrink-0">
          {!hasImageLogo && (
            <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center select-none shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
          )}
          {renderLayoutComponents(logoComps, sectionId)}
        </div>
        <div className="hidden md:flex items-center gap-1 shrink-0">
          {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
            <span className="text-sm font-semibold text-slate-600 px-3 cursor-default select-none">Shop</span>
          )}
        </div>
        <div
          className="flex-1 flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full pl-4 pr-1.5 py-1.5 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-slate-400 select-none">⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Search products, brands, categories…"
            className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
          />
          {query && (
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuery(''); }}
              className="text-slate-400 hover:text-slate-600 text-sm px-1 select-none"
            >
              ✕
            </button>
          )}
          <span className="text-[10px] font-bold text-slate-400 bg-white border border-slate-200 rounded-md px-1.5 py-0.5 select-none">/</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
    </nav>
  );
}
