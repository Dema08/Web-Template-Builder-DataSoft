import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmNavWellness
 * Forest emerald & sage botanical wellness & herbal skincare navbar.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmNavWellness({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'wel-logo', type: 'heading', props: { content: 'SEKAR ARUM', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#ecfdf5', letterSpacing: '0.08em' } },
    { id: 'nav-wl1', type: 'button', props: { label: 'Produk Herbal', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'nav-wl2', type: 'button', props: { label: 'Kandungan Alami', href: '#benefits', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'nav-wl3', type: 'button', props: { label: 'Ulasan Pelanggan', href: '#reviews', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'nav-wl4', type: 'button', props: { label: 'Konsultasi Kulit', href: '#consultation', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'cta-wel', type: 'button', props: { label: 'Belanja Sekarang 🌿', href: '#products', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Eco Notice */}
      <div className="bg-[#03130d] border-b border-emerald-950 px-4 py-1.5 text-center text-xs text-emerald-300 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1 font-medium">
          🌿 100% Organik • Bersertifikat BPOM & Halal MUI • Tanpa Paraben & SLS
        </span>
      </div>

      <nav className="bg-[#081f16]/95 backdrop-blur-xl border-b border-emerald-800/30 px-4 sm:px-6 py-3.5 shadow-xl shadow-emerald-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 text-lg shadow-inner">
              🌱
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 bg-[#0c2e21]/70 border border-emerald-800/40 rounded-full px-4 py-1.5">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-800/60"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0c2a1e] border border-emerald-800/50 flex flex-col gap-2.5">
            <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
              {renderLayoutComponents(menuComps, sectionId)}
            </div>
            {ctaComps.length > 0 && (
              <div className="pt-2 border-t border-emerald-800/60 sm:hidden [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
