import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailNavLuxury
 * High-End Luxury Boutique & Curated Maison Navigation with Concierge & VIP Lounge Access
 */
export default function RetailNavLuxury({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'lux-brand', type: 'heading', props: { content: 'MAISON PRESTIGE', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.15em' } },
    { id: 'lux-status-badge', type: 'badge', props: { text: '✦ PRIVATE CONCIERGE & 100% AUTHENTICITY GUARANTEE', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#d8b4fe', borderColor: 'rgba(168,85,247,0.4)' } },
    { id: 'lux-vip-btn', type: 'button', props: { label: 'Private VIP Lounge ✨', href: '#experience', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(24,15,46,0.8)', color: '#e9d5ff', borderColor: 'rgba(168,85,247,0.5)', fontSize: '12px' } },
    { id: 'lux-book-btn', type: 'button', props: { label: 'Book Private Appointment', href: '#collection', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const brandC = lc.filter(c => c.id === 'lux-brand');
  const badgeC = lc.filter(c => c.id === 'lux-status-badge');
  const buttonComps = lc.filter(c => c.type === 'button');

  return (
    <header className="sticky top-0 z-50 bg-[#0d071a]/95 backdrop-blur-md border-b border-purple-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-amber-300 flex items-center justify-center text-white font-serif font-black text-xl shadow-lg shadow-purple-600/30 shrink-0">
              P
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[10px] font-semibold text-purple-300 tracking-[0.2em] uppercase block">
                Haute Horlogerie & Curated Boutique
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            {renderLayoutComponents(badgeC, sectionId)}
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-3">{renderLayoutComponents(buttonComps, sectionId)}</div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/60 text-purple-200 hover:text-white focus:outline-none transition shadow-sm"
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
        <div className="md:hidden border-t border-purple-900/40 bg-[#0d071a]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badgeC.length > 0 && (
            <div className="pb-3 border-b border-purple-900/50">
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
