import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsNavGlobal
 * Noir Dark Luxury International Freight Forwarder Navigation with Global Port Time Clocks.
 */
export default function LogisticsNavGlobal({ components = [], sectionId = null }) {
  const [open, setOpen] = useState(false);
  useMobileNavClose(open, setOpen);

  const defaultComponents = [
    { id: 'global-logo', type: 'heading', props: { content: 'NEXUS GLOBAL', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#e7c873', letterSpacing: '0.12em' } },
    { id: 'nav-1', type: 'button', props: { label: 'Overview', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#d6d3d1' } },
    { id: 'nav-2', type: 'button', props: { label: 'Air & Ocean Freight', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#d6d3d1' } },
    { id: 'nav-3', type: 'button', props: { label: 'Fleet & Vessels', href: '#fleet', variant: 'ghost', size: 'small', background: 'transparent', color: '#d6d3d1' } },
    { id: 'nav-4', type: 'button', props: { label: 'Bonded Facilities', href: '#facilities', variant: 'ghost', size: 'small', background: 'transparent', color: '#d6d3d1' } },
    { id: 'nav-5', type: 'button', props: { label: 'Trade Corridors', href: '#corridors', variant: 'ghost', size: 'small', background: 'transparent', color: '#d6d3d1' } },
    { id: 'cta-quote', type: 'button', props: { label: 'Get Global Rate →', href: '#inquiry', variant: 'primary', size: 'small', radius: 'full', background: '#e7c873', color: '#0c0a09', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      {/* Top Global Maritime & Air Traffic Clock */}
      <div className="bg-[#050505] border-b border-[#292524] px-4 sm:px-6 py-1.5 text-[11px] text-[#a8a29e] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono">
          <div className="flex items-center gap-4">
            <span className="text-[#e7c873] font-bold">PORT HUBS:</span>
            <span>SIN (GMT+8)</span>
            <span>•</span>
            <span>SHA (GMT+8)</span>
            <span>•</span>
            <span>RTM (GMT+1)</span>
            <span>•</span>
            <span>LAX (GMT-8)</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>IATA CARGO CODE: NX-8890 | FIATA ACCREDITED</span>
          </div>
        </div>
      </div>

      <nav className="bg-[#0c0a09]/95 backdrop-blur-xl border-b border-[#292524] px-4 sm:px-6 py-3.5 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full border border-[#e7c873]/50 bg-gradient-to-br from-[#1c1917] to-[#0c0a09] flex items-center justify-center text-[#e7c873] font-serif font-black text-base shadow-lg shadow-[#e7c873]/10">
              N
            </div>
            <div>
              {renderLayoutComponents(logoComps, sectionId)}
              <span className="text-[9px] tracking-[0.25em] font-serif text-[#e7c873]/80 uppercase block">
                GLOBAL FREIGHT FORWARDING
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1 border border-[#292524] rounded-full px-3 py-1 bg-[#141210]">
            {renderLayoutComponents(menuComps, sectionId)}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:block">{renderLayoutComponents(ctaComps, sectionId)}</div>
            <button
              type="button"
              onClick={() => setOpen(v => !v)}
              className="lg:hidden p-2.5 rounded-lg bg-[#1c1917] border border-[#e7c873]/30 text-[#e7c873]"
              aria-label="Toggle Navigation"
              aria-expanded={open}
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 p-4 bg-[#141210] border border-[#292524] rounded-2xl flex flex-col gap-2.5">
            <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
              {renderLayoutComponents(menuComps, sectionId)}
            </div>
            {ctaComps.length > 0 && (
              <div className="pt-2 border-t border-[#292524] sm:hidden [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
