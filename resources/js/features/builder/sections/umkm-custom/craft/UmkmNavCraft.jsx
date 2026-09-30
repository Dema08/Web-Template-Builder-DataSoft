import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmNavCraft
 * Terracotta & warm linen artisanal heritage boutique navbar.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmNavCraft({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'crf-logo', type: 'heading', props: { content: 'PUSAKA HERITAGE', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#ffedd5', letterSpacing: '0.12em' } },
    { id: 'nav-cr1', type: 'button', props: { label: 'Koleksi Karya', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'nav-cr2', type: 'button', props: { label: 'Filosofi Motif', href: '#heritage', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'nav-cr3', type: 'button', props: { label: 'Kisah Pengrajin', href: '#artisan', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'nav-cr4', type: 'button', props: { label: 'Katalog & Custom', href: '#catalog', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'cta-crf', type: 'button', props: { label: 'Koleksi Eksklusif ✦', href: '#products', variant: 'primary', size: 'small', radius: 'none', background: '#c2410c', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Heritage Notice */}
      <div className="bg-[#120a06] border-b border-orange-950 px-4 py-1.5 text-center text-xs text-orange-200/80 tracking-wider uppercase font-medium">
        Karya Autentik Pengrajin Lokal • 100% Pewarna Alami Ramah Lingkungan
      </div>

      <nav className="bg-[#1d120c]/95 backdrop-blur-xl border-b border-orange-800/30 px-4 sm:px-6 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-none border border-orange-500/60 bg-orange-950/60 flex items-center justify-center font-serif font-bold text-orange-400 text-sm">
              P
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-black/20 border border-orange-900/40 rounded-none px-4 py-1.5">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {renderLayoutComponents(ctaComps, sectionId)}
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 rounded bg-orange-950 text-orange-200 border border-orange-800"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#23150e] border border-orange-800/40 flex flex-col gap-2">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
        )}
      </nav>
    </header>
  );
}
