import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduNavBootcamp
 * Modern tech bootcamp navbar with live batch countdown and syllabus download CTA.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduNavBootcamp({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'boot-logo', type: 'heading', props: { content: 'CODESPHERE.ACADEMY', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' } },
    { id: 'nav-bt1', type: 'button', props: { label: 'Career Tracks', href: '#tracks', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-bt2', type: 'button', props: { label: 'Kurikulum & Proyek', href: '#curriculum', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-bt3', type: 'button', props: { label: 'Hiring Partners', href: '#hiring', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-bt4', type: 'button', props: { label: 'Biaya & ISA', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-boot', type: 'button', props: { label: 'Gabung Batch 24 ⚡', href: '#pricing', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-[#0c041f] border-b border-purple-950 px-4 py-1.5 text-center text-xs text-purple-200 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Pendaftaran Batch 24: Sisa <strong>6 Kursi Tersedia</strong> • Beasiswa Talenta Digital Tersedia</span>
      </div>

      <nav className="bg-[#090514]/95 backdrop-blur-xl border-b border-indigo-500/20 px-4 sm:px-6 py-3.5 shadow-2xl shadow-indigo-950/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-mono font-black text-white text-base shadow-lg shadow-indigo-500/30">
              &lt;/&gt;
            </div>
            {renderLayoutComponents(logoComps, sectionId)}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.05] border border-white/10 rounded-full px-4 py-1.5">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {renderLayoutComponents(ctaComps, sectionId)}
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-xl bg-purple-950 text-white border border-purple-800"
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#13092b] border border-purple-800/50 flex flex-col gap-2">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>
        )}
      </nav>
    </header>
  );
}
