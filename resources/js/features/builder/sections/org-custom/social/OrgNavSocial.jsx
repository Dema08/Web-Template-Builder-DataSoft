import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgNavSocial
 * Warm community navbar for NGO / social movement — emerald & orange.
 * Fully supports right-inspector selection and property editing.
 */
export default function OrgNavSocial({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'soc-logo', type: 'heading', props: { content: 'GERAKAN BERDAYA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' } },
    { id: 'nav-soc1', type: 'button', props: { label: 'Misi & Nilai', href: '#mission', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'nav-soc2', type: 'button', props: { label: 'Program Sosial', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'nav-soc3', type: 'button', props: { label: 'Dampak Nyata', href: '#impact', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'nav-soc4', type: 'button', props: { label: 'Relawan', href: '#volunteer', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'cta-soc', type: 'button', props: { label: 'Bergabung Sekarang 💚', href: '#join', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50 w-full bg-[#011d14]/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl shadow-emerald-950/40">
      {/* Top Banner with Donation Impact Callout */}
      <div className="bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-emerald-900/80 border-b border-emerald-500/20 px-4 py-1.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2 text-emerald-300 font-semibold">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>KAMPANYE BERJALAN: 10.000 Paket Pendidikan Daerah 3T</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-emerald-300/80">
            <span>✨ 150.000+ Jiwa Telah Terbantu</span>
            <span className="text-emerald-700">|</span>
            <span className="text-orange-400 font-bold">Audit Keuangan WTP 2025</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-0.5 shadow-lg shadow-emerald-900/50">
            <div className="w-full h-full bg-[#022c22] rounded-[14px] flex items-center justify-center text-emerald-300 font-black text-xl">
              🌱
            </div>
          </div>
          <div className="flex flex-col">
            <div className="leading-tight">{renderLayoutComponents(logoComps, sectionId)}</div>
            <span className="text-[10px] text-emerald-400/80 font-bold tracking-wider uppercase">YAYASAN PEMBERDAYAAN NUSANTARA</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#022c22]/80 border border-emerald-500/30 shadow-inner">
          {renderLayoutComponents(menuComps, sectionId)}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
          <button
            type="button"
            onClick={() => setMobileOpen(v => !v)}
            className="lg:hidden p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-all cursor-pointer"
            aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 bg-[#022c22] border-t border-emerald-500/20 space-y-3">
          <div className="flex flex-col gap-2">{renderLayoutComponents(menuComps, sectionId)}</div>
          <div className="pt-2 border-t border-emerald-900">{renderLayoutComponents(ctaComps, sectionId)}</div>
        </div>
      )}
    </header>
  );
}
