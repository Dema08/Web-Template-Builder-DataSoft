import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmNavCulinary
 * Warm espresso & amber wood artisanal coffee roastery & cafe navbar.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmNavCulinary({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'cul-logo', type: 'heading', props: { content: 'KOPI KARSA', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#fef3c7', letterSpacing: '0.1em' } },
    { id: 'nav-cul1', type: 'button', props: { label: 'Signature Menu', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'nav-cul2', type: 'button', props: { label: 'Cerita Kopi', href: '#story', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'nav-cul3', type: 'button', props: { label: 'Ulasan Rasa', href: '#reviews', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'nav-cul4', type: 'button', props: { label: 'Lokasi & Jam Buka', href: '#location', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'cta-cul', type: 'button', props: { label: 'Pesan Meja / Beans ☕', href: '#order', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Artisan Roastery Notice Bar */}
      <div className="bg-[#120a06] border-b border-amber-950/80 px-4 py-1.5 text-center text-xs text-amber-200/80 flex items-center justify-center gap-2 font-medium">
        <span className="text-amber-400">✦</span>
        <span>Fresh Roast Batch Hari Ini: <strong>Gayo Winey Honey & Flores Bajawa Specialty</strong></span>
        <span className="text-amber-400">✦</span>
      </div>

      <nav className="bg-[#1c120c]/95 backdrop-blur-xl border-b border-amber-800/30 px-4 sm:px-6 py-3.5 shadow-2xl shadow-amber-950/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 to-amber-900 border border-amber-500/40 flex items-center justify-center text-amber-200 text-lg shadow-lg shadow-amber-900/40">
              ☕
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 bg-[#2b1810]/60 border border-amber-900/40 rounded-full px-4 py-1.5">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-xl bg-amber-950/80 text-amber-200 hover:bg-amber-900 border border-amber-800/50"
              aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#23140d] border border-amber-800/40 flex flex-col gap-2.5">
            <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
              {renderLayoutComponents(menuComps, sectionId)}
            </div>
            {ctaComps.length > 0 && (
              <div className="pt-2 border-t border-amber-900/60 sm:hidden [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
