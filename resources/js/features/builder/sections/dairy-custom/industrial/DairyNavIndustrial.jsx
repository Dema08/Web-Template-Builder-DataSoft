import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyNavIndustrial
 * Industrial Dairy Supply Chain & Tanker Fleet Navigation with Live Supply Status
 */
export default function DairyNavIndustrial({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'ind-brand', type: 'heading', props: { content: 'AGRO DAIRY SUPPLY HUB', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.04em' } },
    { id: 'ind-status-badge', type: 'badge', props: { text: '🚛 45 TRUK TANGKI ISOTHERMAL DISPATCH • 85 TON / HARI KAPASITAS PASOK', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },
    { id: 'ind-rfq-btn', type: 'button', props: { label: 'Permintaan Pasokan B2B 📑', href: '#contact', variant: 'outline', size: 'small', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: 'rgba(100,116,139,0.4)', fontSize: '12px' } },
    { id: 'ind-portal-btn', type: 'button', props: { label: 'Portal Industri F&B', href: '#programs', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const brandC = lc.filter(c => c.id === 'ind-brand');
  const badgeC = lc.filter(c => c.id === 'ind-status-badge');
  const btn1 = lc.filter(c => c.id === 'ind-rfq-btn');
  const btn2 = lc.filter(c => c.id === 'ind-portal-btn');

  return (
    <header className="sticky top-0 z-50 bg-[#071318]/95 backdrop-blur-md border-b border-emerald-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-600/30 shrink-0">
              A
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[11px] font-semibold text-emerald-400 tracking-wider uppercase block">
                B2B Industrial Dairy & Feed Mill Ecosystem
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
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white focus:outline-none transition shadow-sm"
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
        <div className="md:hidden border-t border-emerald-900/40 bg-[#071318]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badgeC.length > 0 && (
            <div className="pb-3 border-b border-emerald-900/50">
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
