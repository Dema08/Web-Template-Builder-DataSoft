import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgNavProfessional
 * Elite professional association navbar — deep navy with gold accents, formal authority bar.
 * Fully supports right-inspector selection and property editing.
 */
export default function OrgNavProfessional({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'pro-logo', type: 'heading', props: { content: 'FORUM PROFESI NUSANTARA', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.06em' } },
    { id: 'nav-pro1', type: 'button', props: { label: 'Tentang Forum', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#fbbf24' } },
    { id: 'nav-pro2', type: 'button', props: { label: 'Keanggotaan', href: '#membership', variant: 'ghost', size: 'small', background: 'transparent', color: '#fbbf24' } },
    { id: 'nav-pro3', type: 'button', props: { label: 'Agenda & Event', href: '#events', variant: 'ghost', size: 'small', background: 'transparent', color: '#fbbf24' } },
    { id: 'nav-pro4', type: 'button', props: { label: 'Publikasi', href: '#publications', variant: 'ghost', size: 'small', background: 'transparent', color: '#fbbf24' } },
    { id: 'cta-pro', type: 'button', props: { label: 'Daftar Anggota ⚜', href: '#join', variant: 'primary', size: 'small', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50 w-full bg-[#060d1a]/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-black/60">
      {/* Prestige Authority Top Bar */}
      <div className="bg-gradient-to-r from-[#0d1829] via-[#132238] to-[#0d1829] border-b border-amber-500/20 px-4 py-1.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2 text-amber-300 font-semibold tracking-wide">
            <span className="text-amber-400">⚜</span>
            <span>TERDAFTAR KEMENKUMHAM RI · SK NO. AHU-00189.AH.01.07</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>🏛 Berdiri Sejak 1985</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400/90 font-medium">35.000+ Anggota Bersertifikat</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-900/40">
            <div className="w-full h-full bg-[#081120] rounded-[10px] flex items-center justify-center text-amber-400 font-black text-lg">
              ⚜
            </div>
          </div>
          <div className="flex flex-col">
            <div className="leading-tight">{renderLayoutComponents(logoComps, sectionId)}</div>
            <span className="text-[10px] text-amber-400/70 font-semibold tracking-wider uppercase">IKATAN PROFESIONAL INDONESIA</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-amber-500/20 shadow-inner">
          {renderLayoutComponents(menuComps, sectionId)}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-all cursor-pointer"
            aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-[#081120] border-t border-amber-500/20 space-y-3">
          <div className="flex flex-col gap-2">{renderLayoutComponents(menuComps, sectionId)}</div>
          <div className="pt-2 border-t border-slate-800">{renderLayoutComponents(ctaComps, sectionId)}</div>
        </div>
      )}
    </header>
  );
}
