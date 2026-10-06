import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IRIS — Sidebar Drawer Nav
 * Navbar ramping + drawer sidebar animasi slide dari kanan.
 * Modern dashboard / portfolio / agency kreatif.
 */
export default function Navbar15({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

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
          <div className="hidden md:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setMobileOpen(v => !v); }}
            className="md:hidden w-11 h-11 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform select-none"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <span aria-hidden="true">✕</span>
            ) : (
              <>
                <span className="w-5 h-0.5 bg-white rounded" />
                <span className="w-5 h-0.5 bg-white rounded" />
                <span className="w-3 h-0.5 bg-white rounded self-start ml-3" />
              </>
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden mt-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg flex flex-col gap-2">
          <div className="flex flex-col gap-1.5 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
          {ctaComps.length > 0 && (
            <div className="pt-2 border-t border-slate-100 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          )}
          <p className="text-xs text-slate-400 select-none text-center">hello@iris-studio.id</p>
        </div>
      )}
    </nav>
  );
}
