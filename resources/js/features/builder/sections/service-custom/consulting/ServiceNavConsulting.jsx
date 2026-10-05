import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceNavConsulting
 * Executive consulting firm header — dark navy with gold prestige accents.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceNavConsulting({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'con-logo', type: 'heading', props: { content: 'ADVANTA PARTNERS', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.06em' } },
    { id: 'nav-c1', type: 'button', props: { label: 'Tentang Kami', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-c2', type: 'button', props: { label: 'Layanan', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-c3', type: 'button', props: { label: 'Keahlian', href: '#expertise', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-c4', type: 'button', props: { label: 'Klien', href: '#clients', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-c5', type: 'button', props: { label: 'Tim Konsultan', href: '#team', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'cta-con', type: 'button', props: { label: 'Jadwalkan Konsultasi →', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: 'linear-gradient(135deg, #b8963e, #d4af6a)', color: '#0d1117', fontWeight: '800' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Prestige Strip */}
      <div className="bg-[#0a0f1e] border-b border-amber-700/20 px-4 sm:px-6 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="select-none font-medium tracking-wide">
            🏛️ Konsultan Manajemen & Strategi Bisnis Kelas Dunia · Est. 2003
          </span>
          <div className="flex items-center gap-4 font-semibold select-none">
            <span className="text-amber-400">+62 21 5050 8888</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-500">consult@advantapartners.com</span>
          </div>
        </div>
      </div>

      {/* Main Navy Navbar */}
      <nav className="bg-[#0d1627]/96 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-6 py-3.5 shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-[#0d1627] font-black text-lg shadow-lg shadow-amber-600/20 select-none">
              A
            </div>
            <div>
              {renderLayoutComponents(logoComps, sectionId)}
              <span className="text-[10px] tracking-[0.2em] font-bold text-amber-500/80 uppercase select-none block">
                MANAGEMENT CONSULTING & ADVISORY
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700"
              aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-xl bg-[#0a1020] border border-slate-800 flex flex-col gap-2.5">
            <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
              {renderLayoutComponents(menuComps, sectionId)}
            </div>
            {ctaComps.length > 0 && (
              <div className="pt-2 border-t border-slate-800 sm:hidden [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
