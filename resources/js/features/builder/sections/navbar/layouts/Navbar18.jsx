import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TRANSGO — Logistics Pro (upgrade)
 * Navbar logistik dengan topbar kontak + menu pill + CTA orange.
 * Dirombak total: topbar gradient, badge live, mobile drawer animasi.
 */
export default function Navbar18({ components = [], sectionId = null }) {
  const [open, setOpen] = useState(false);

  const defaultComponents = [
    { id: 'logo-18', type: 'heading', props: { content: 'TRANSGO', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.1em' } },
    { id: 'nav-home', type: 'button', props: { label: 'Home', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-fleet', type: 'button', props: { label: 'Fleet', href: '#fleet', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-coverage', type: 'button', props: { label: 'Coverage', href: '#coverage', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-contact', type: 'button', props: { label: 'Contact', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'cta-track', type: 'button', props: { label: 'Track Shipment →', href: '#tracking', variant: 'primary', size: 'small', radius: 'full', background: '#f97316', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 px-6 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-bold text-white">
          <span className="flex items-center gap-1.5 select-none"><span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" /> 2.400+ ARMADA AKTIF HARI INI</span>
          <span className="hidden sm:block select-none">HOTLINE 24/7: 0800-TRANSGO</span>
        </div>
      </div>
      <nav className="bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 shrink-0">
            {!hasImageLogo && <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-orange-500/40 select-none shrink-0">T</div>}
            <div className="leading-tight">
              {renderLayoutComponents(logoComps, sectionId)}
              {!hasImageLogo && <p className="text-[9px] tracking-[0.3em] text-orange-400 font-bold select-none">LOGISTICS</p>}
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-1.5 py-1">
            {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
              <span className="text-sm font-semibold text-slate-300 px-4 py-1.5 cursor-default select-none">Home</span>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {renderLayoutComponents(ctaComps, sectionId)}
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(v => !v); }}
              className="xl:hidden w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-white font-bold select-none"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
        <div className={`xl:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-80 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-1 bg-white/5 border border-white/10 rounded-2xl p-2">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
        </div>
      </nav>
    </header>
  );
}
