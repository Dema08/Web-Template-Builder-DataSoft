import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceNavTech
 * Glassmorphic cyber/tech solutions navbar — cyan/indigo glow, status ping indicators.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceNavTech({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'tech-logo', type: 'heading', props: { content: 'SYNAPSE.TECH', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em' } },
    { id: 'nav-tc1', type: 'button', props: { label: 'Layanan IT', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-tc2', type: 'button', props: { label: 'Solusi Cloud', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-tc3', type: 'button', props: { label: 'Infrastruktur', href: '#stats', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-tc4', type: 'button', props: { label: 'Keamanan', href: '#security', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'cta-tc', type: 'button', props: { label: 'Konsultasi Arsitektur ⚡', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* System Status Banner Bar */}
      <div className="bg-[#030712] border-b border-cyan-950 px-4 py-1.5 text-center text-xs text-slate-400 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-cyan-400 font-mono text-[11px]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
          SYSTEM OPERATIONAL: 99.99% UPTIME
        </span>
        <span className="hidden sm:inline text-slate-600">|</span>
        <span className="hidden sm:inline text-slate-400 text-[11px]">ISO 27001 & SOC-2 TYPE II CERTIFIED</span>
      </div>

      <nav className="bg-[#0b1120]/90 backdrop-blur-2xl border-b border-cyan-500/20 px-4 sm:px-6 py-3 shadow-2xl shadow-cyan-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              &lt;/&gt;
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-[#111827]/80 border border-slate-800 rounded-xl px-3 py-1">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA & Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {renderLayoutComponents(ctaComps, sectionId)}
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#0b1120] border border-cyan-900/60 flex flex-col gap-2">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
        )}
      </nav>
    </header>
  );
}
