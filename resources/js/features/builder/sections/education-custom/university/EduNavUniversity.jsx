import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduNavUniversity
 * Academic prestige navbar with accreditation ticker and student portal CTA.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduNavUniversity({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'uni-logo', type: 'heading', props: { content: 'NUSANTARA INSTITUTE OF TECH', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.04em' } },
    { id: 'nav-u1', type: 'button', props: { label: 'Program Studi', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-u2', type: 'button', props: { label: 'Pusat Riset', href: '#research', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-u3', type: 'button', props: { label: 'Kehidupan Kampus', href: '#campus', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-u4', type: 'button', props: { label: 'Penerimaan Mahasiswa', href: '#admission', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'cta-uni', type: 'button', props: { label: 'Daftar PMB 2026/2027 🎓', href: '#admission', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Academic Prestige Bar */}
      <div className="bg-[#050b18] border-b border-blue-950 px-4 py-1.5 text-center text-xs text-slate-300 flex items-center justify-center gap-3">
        <span className="text-amber-400 font-semibold flex items-center gap-1">
          <span>🏆</span> AKREDITASI UNGGUL (BAN-PT) & QS ASIA RANKED #150
        </span>
        <span className="hidden sm:inline text-slate-600">|</span>
        <span className="hidden sm:inline text-slate-400 text-[11px]">Pendaftaran Gelombang I Dibuka hingga 30 April 2026</span>
      </div>

      <nav className="bg-[#0a1428]/95 backdrop-blur-xl border-b border-blue-800/30 px-4 sm:px-6 py-3.5 shadow-2xl shadow-blue-950/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-900 border border-blue-500/40 flex items-center justify-center text-amber-300 font-serif font-black text-base shadow-lg">
              NIT
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-xl px-3 py-1.5">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-lg bg-blue-950 text-white hover:bg-blue-900 border border-blue-800"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#0f1d38] border border-blue-800/40 flex flex-col gap-2.5">
            <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
              {renderLayoutComponents(menuComps, sectionId)}
            </div>
            {ctaComps.length > 0 && (
              <div className="pt-2 border-t border-blue-900/60 sm:hidden [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
