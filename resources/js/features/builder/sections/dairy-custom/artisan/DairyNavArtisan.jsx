import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyNavArtisan
 * Artisan Organic Dairy Farmstead & Grass-Fed Boutique Navigation
 */
export default function DairyNavArtisan({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'art-brand', type: 'heading', props: { content: 'VALLEY PASTURES DAIRY', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#fef3c7', letterSpacing: '0.08em' } },
    { id: 'art-status-badge', type: 'badge', props: { text: '🌾 100% GRASS-FED ORGANIC CERTIFIED • A2 PROTEIN', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },
    { id: 'art-tour-btn', type: 'button', props: { label: 'Book Farm Visit 🌿', href: '#pasture', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(20,40,25,0.8)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.5)', fontSize: '12px' } },
    { id: 'art-club-btn', type: 'button', props: { label: 'Gabung Member Langganan', href: '#collection', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const brandC = lc.filter(c => c.type === 'heading' || c.type === 'image' || c.id === 'art-brand');
  const badgeC = lc.filter(c => c.type === 'badge' || c.id === 'art-status-badge');
  const buttonComps = lc.filter(c => c.type === 'button');

  return (
    <header className="sticky top-0 z-50 bg-[#071f16]/95 backdrop-blur-md border-b border-amber-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-emerald-600 to-amber-300 flex items-center justify-center text-white font-serif font-black text-xl shadow-lg shadow-amber-600/30 shrink-0">
              V
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[10px] font-semibold text-amber-300 tracking-[0.18em] uppercase block">
                Artisan Farmstead & Grass-Fed Dairy
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            {renderLayoutComponents(badgeC, sectionId)}
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-3">
            {renderLayoutComponents(buttonComps, sectionId)}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-800/60 text-amber-200 hover:text-white focus:outline-none transition shadow-sm cursor-pointer"
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
        <div className="md:hidden border-t border-amber-900/40 bg-[#071f16]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badgeC.length > 0 && (
            <div className="pb-3 border-b border-amber-900/50">
              {renderLayoutComponents(badgeC, sectionId)}
            </div>
          )}
          <div className="flex flex-col gap-2.5 pt-1 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
            {renderLayoutComponents(buttonComps, sectionId)}
          </div>
        </div>
      )}
    </header>
  );
}
