import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduNavExecutive
 * Premium corporate training & executive education navbar with B2B corporate inquiry CTA.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduNavExecutive({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'exec-logo', type: 'heading', props: { content: 'APEX LEADERSHIP INSTITUTE', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.06em' } },
    { id: 'nav-ex1', type: 'button', props: { label: 'Program Eksekutif', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-ex2', type: 'button', props: { label: 'Metodologi & Dampak', href: '#methodology', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-ex3', type: 'button', props: { label: 'Master Facilitators', href: '#trainers', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-ex4', type: 'button', props: { label: 'In-House Corporate', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'cta-exec', type: 'button', props: { label: 'Konsultasi In-House Training ➔', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Corporate Accreditation Notice */}
      <div className="bg-[#05080f] border-b border-slate-800 px-4 py-1.5 text-center text-xs text-slate-400 flex items-center justify-center gap-3 font-medium">
        <span className="text-cyan-400">✦</span>
        <span>Akreditasi Global PMI (Project Management), HRCI, & ISO 29993 Lembaga Pelatihan Terpercaya</span>
        <span className="text-cyan-400">✦</span>
      </div>

      <nav className="bg-[#0c121e]/95 backdrop-blur-xl border-b border-cyan-900/40 px-4 sm:px-6 py-3.5 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white font-serif font-black text-sm shadow-md">
              A
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-xl px-3 py-1.5">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {renderLayoutComponents(ctaComps, sectionId)}
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 text-white border border-slate-700"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#111a2c] border border-cyan-900/50 flex flex-col gap-2">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
        )}
      </nav>
    </header>
  );
}
