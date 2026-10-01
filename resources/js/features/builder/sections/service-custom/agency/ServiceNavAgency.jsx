import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceNavAgency
 * Bold creative/digital agency navbar — vivid violet/magenta gradient, modern & energetic.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceNavAgency({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'ag-logo', type: 'heading', props: { content: 'NEXUS.STUDIO', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'nav-ag1', type: 'button', props: { label: 'Layanan', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-ag2', type: 'button', props: { label: 'Portfolio', href: '#portfolio', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-ag3', type: 'button', props: { label: 'Proses', href: '#process', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-ag4', type: 'button', props: { label: 'Harga', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-ag', type: 'button', props: { label: 'Mulai Proyek ✦', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-[#0a0612]/95 backdrop-blur-xl border-b border-purple-500/20 px-4 sm:px-6 py-3.5 shadow-2xl shadow-purple-900/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center font-black text-white text-base shadow-lg shadow-violet-500/30 select-none">
              N
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl px-3 py-1.5">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-xl bg-violet-900/50 text-white hover:bg-violet-800/60 border border-violet-700/50"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0f0620] border border-violet-800/50 flex flex-col gap-2.5">
            <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
              {renderLayoutComponents(menuComps, sectionId)}
            </div>
            {ctaComps.length > 0 && (
              <div className="pt-2 border-t border-violet-800/50 sm:hidden [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
