import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EMERALD — Split Announcement + Nav
 * Bar pengumuman gradient di atas + navbar putih bersih di bawah.
 * Ada toggle pill yang bisa expand/collapse info promo.
 */
export default function Navbar04({ components = [], sectionId = null }) {
  const [expanded, setExpanded] = useState(true);

  const defaultComponents = [
    { id: 'logo-4', type: 'heading', props: { content: '🌿 Emerald', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#064e3b' } },
    { id: 'nav-shop', type: 'button', props: { label: 'Shop', href: '#shop', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-sustain', type: 'button', props: { label: 'Sustainability', href: '#sustain', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-stores', type: 'button', props: { label: 'Stores', href: '#stores', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-cart', type: 'button', props: { label: 'Cart (2)', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#059669', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <div className="sticky top-0 z-50">
      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 px-6 py-2 flex items-center justify-center gap-3">
          <span className="text-[11px] font-bold tracking-wide text-white select-none">✨ FREE CARBON-NEUTRAL SHIPPING OVER $75 — THIS WEEK ONLY</span>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(false); }}
            className="text-white/80 hover:text-white text-xs font-bold px-1 select-none"
          >
            ✕
          </button>
        </div>
      </div>
      <nav className="bg-white/95 backdrop-blur border-b border-emerald-100 px-6 py-3.5 shadow-[0_8px_30px_-12px_rgba(5,150,105,0.25)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 shrink-0">
            {!expanded && (
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setExpanded(true); }}
                className="text-[10px] font-bold bg-emerald-100 text-emerald-700 rounded-full px-2.5 py-1 select-none"
              >
                ● PROMO
              </button>
            )}
            {renderLayoutComponents(logoComps, sectionId)}
          </div>
          <div className="hidden md:flex items-center gap-1 bg-emerald-50/70 border border-emerald-100 rounded-full px-2 py-1">
            {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
              <>
                <span className="text-sm font-semibold text-slate-600 px-4 py-1.5 cursor-default select-none">Shop</span>
                <span className="text-sm font-semibold text-slate-600 px-4 py-1.5 cursor-default select-none">Stores</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
      </nav>
    </div>
  );
}
