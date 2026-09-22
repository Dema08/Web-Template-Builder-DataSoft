import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IRIS — Sidebar Drawer Nav
 * Navbar ramping + drawer sidebar animasi slide dari kanan.
 * Modern dashboard / portfolio / agency kreatif.
 */
export default function Navbar15({ components = [], sectionId = null }) {
  const [drawer, setDrawer] = useState(false);

  const defaultComponents = [
    { id: 'logo-15', type: 'heading', props: { content: 'iris*', level: 'h2', fontSize: '24px', fontWeight: '900', color: '#0f172a' } },
    { id: 'nav-work', type: 'button', props: { label: 'Work', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-services', type: 'button', props: { label: 'Services', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-about', type: 'button', props: { label: 'About', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-contact', type: 'button', props: { label: 'Contact', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-start', type: 'button', props: { label: 'Start Project', href: '#start', variant: 'primary', size: 'medium', radius: 'full', background: '#7c3aed', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 px-6 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          {!hasImageLogo && <div className="w-8 h-8 rounded-full bg-[conic-gradient(from_0deg,#7c3aed,#ec4899,#f59e0b,#7c3aed)] animate-spin select-none shrink-0" style={{ animationDuration: '8s' }} />}
          {renderLayoutComponents(logoComps, sectionId)}
        </div>
        <div className="hidden md:flex items-center gap-1">
          {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
            <span className="text-sm font-semibold text-slate-600 px-3 cursor-default select-none">Work</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDrawer(true); }}
            className="w-11 h-11 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform select-none"
          >
            <span className="w-5 h-0.5 bg-white rounded" />
            <span className="w-5 h-0.5 bg-white rounded" />
            <span className="w-3 h-0.5 bg-white rounded self-start ml-3" />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${drawer ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={(e) => { e.stopPropagation(); setDrawer(false); }}
      >
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" />
        <aside
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl p-6 flex flex-col gap-2 transition-transform duration-500 ${drawer ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-black text-lg select-none">Menu</span>
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setDrawer(false); }}
              className="w-9 h-9 rounded-full bg-slate-100 font-bold select-none"
            >
              ✕
            </button>
          </div>
          {renderLayoutComponents(menuComps, sectionId)}
          <div className="mt-4">{renderLayoutComponents(ctaComps, sectionId)}</div>
          <p className="mt-auto text-xs text-slate-400 select-none">hello@iris-studio.id</p>
        </aside>
      </div>
    </nav>
  );
}
