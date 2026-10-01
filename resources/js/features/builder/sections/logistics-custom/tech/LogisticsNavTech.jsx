import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsNavTech
 * High-tech clean navbar with expandable green announcement bar, live status pulse, and tracking button.
 */
export default function LogisticsNavTech({ components = [], sectionId = null }) {
  const [promoOpen, setPromoOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultComponents = [
    { id: 'tech-logo', type: 'heading', props: { content: 'TRACKFAST', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0284c7', letterSpacing: '0.04em' } },
    { id: 'nav-1', type: 'button', props: { label: 'Fitur IoT', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-2', type: 'button', props: { label: 'Armada EV', href: '#fleet', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-3', type: 'button', props: { label: 'Smart Hub', href: '#coverage', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-4', type: 'button', props: { label: 'AI Routing', href: '#engine', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-5', type: 'button', props: { label: 'Tarif Kirim', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-track', type: 'button', props: { label: 'Lacak Resi AWB →', href: '#tracker', variant: 'primary', size: 'small', radius: 'full', background: '#0284c7', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner */}
      {promoOpen && (
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-3 sm:px-4 py-1.5 text-xs font-bold flex items-center justify-between shadow-md">
          <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-0 flex-1 pr-2">
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider shrink-0">
              ⚡ LIVE UPDATE
            </span>
            <span className="truncate text-[11px] sm:text-xs">Pengiriman Instant &lt;2 Jam Jabodetabek & Surabaya Aktif Normal!</span>
          </div>
          <button
            type="button"
            onClick={() => setPromoOpen(false)}
            className="text-white/80 hover:text-white text-xs px-1.5 shrink-0"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Bar */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-200/80 px-3 sm:px-6 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg shadow-sky-500/20 shrink-0">
              ⚡
            </div>
            <div className="truncate max-w-[150px] sm:max-w-none">
              {renderLayoutComponents(logoComps, sectionId)}
              <span className="text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] font-extrabold text-sky-600 uppercase block truncate">
                SMART IOT LOGISTICS & DELIVERY
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:block">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition text-base font-bold select-none"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col gap-3">
            {renderLayoutComponents(menuComps, sectionId)}
            <div className="pt-2 border-t border-slate-100 sm:hidden">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
