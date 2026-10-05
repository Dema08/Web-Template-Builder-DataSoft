import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailNavOmni
 * Omnichannel Fast Retail & Supermart Navigation with Flash Deals countdown and Click & Collect 2-hr express badge
 */
export default function RetailNavOmni({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'omni-brand', type: 'heading', props: { content: 'SUPERMART', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' } },
    { id: 'omni-deal-badge', type: 'badge', props: { text: '⚡ FLASH DEAL TODAY: DISKON S/D 70% + GRATIS ONGKIR', variant: 'solid', background: '#e11d48', color: '#ffffff' } },
    { id: 'omni-collect-btn', type: 'button', props: { label: 'Click & Collect 2 Jam 🛒', href: '#deals', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(30,10,18,0.8)', color: '#fda4af', borderColor: 'rgba(244,63,94,0.4)', fontSize: '12px' } },
    { id: 'omni-app-btn', type: 'button', props: { label: 'Download SuperApp 📱', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #e11d48, #be123c)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const brandC = lc.filter(c => c.id === 'omni-brand');
  const badgeC = lc.filter(c => c.id === 'omni-deal-badge');
  const btn1 = lc.filter(c => c.id === 'omni-collect-btn');
  const btn2 = lc.filter(c => c.id === 'omni-app-btn');

  return (
    <header className="sticky top-0 z-50 bg-[#16060c]/95 backdrop-blur-md border-b border-rose-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-rose-600/30 shrink-0">
              S
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[11px] font-bold text-rose-400 tracking-wide uppercase block">
                Omnichannel Fresh & Mega Store
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            {renderLayoutComponents(badgeC, sectionId)}
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-3">
            <div>{renderLayoutComponents(btn1, sectionId)}</div>
            <div>{renderLayoutComponents(btn2, sectionId)}</div>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-rose-950/80 border border-rose-800/60 text-rose-200 hover:text-white focus:outline-none transition shadow-sm"
              aria-label="Toggle Menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-rose-900/40 bg-[#16060c]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badgeC.length > 0 && (
            <div className="pb-3 border-b border-rose-900/50">
              {renderLayoutComponents(badgeC, sectionId)}
            </div>
          )}
          <div className="flex flex-col gap-2.5 pt-1 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
            {renderLayoutComponents(btn1, sectionId)}
            {renderLayoutComponents(btn2, sectionId)}
          </div>
        </div>
      )}
    </header>
  );
}
