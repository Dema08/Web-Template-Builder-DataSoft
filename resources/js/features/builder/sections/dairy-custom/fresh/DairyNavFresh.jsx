import { useState } from 'react';
import useMobileNavClose from '../../../utils/useMobileNavClose';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyNavFresh
 * Fresh Milk Dairy Cooperative Navigation with Cold Chain Status & Member Portal
 */
export default function DairyNavFresh({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  useMobileNavClose(mobileOpen, setMobileOpen);

  const defaultComponents = [
    { id: 'fresh-brand', type: 'heading', props: { content: 'KOPERASI SUSU MURNI', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.04em' } },
    { id: 'fresh-status-badge', type: 'badge', props: { text: '🥛 12 POS PENAMPUNGAN SUHU 4°C AKTIF • STANDAR SNI 3141.1', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4', borderColor: 'rgba(20,184,166,0.3)' } },
    { id: 'fresh-member-btn', type: 'button', props: { label: 'Kemitraan Peternak 🐄', href: '#contact', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(4,47,44,0.8)', color: '#99f6e4', borderColor: 'rgba(20,184,166,0.4)', fontSize: '12px' } },
    { id: 'fresh-order-btn', type: 'button', props: { label: 'Order Susu Segar', href: '#products', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #0d9488, #0f766e)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const brandC = lc.filter(c => c.id === 'fresh-brand');
  const badgeC = lc.filter(c => c.id === 'fresh-status-badge');
  const btn1 = lc.filter(c => c.id === 'fresh-member-btn');
  const btn2 = lc.filter(c => c.id === 'fresh-order-btn');

  return (
    <header className="sticky top-0 z-50 bg-[#042421]/95 backdrop-blur-md border-b border-teal-800/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-teal-500/30 shrink-0">
              🥛
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[11px] font-semibold text-teal-400 tracking-wider uppercase block">
                Kemitraan Peternak Sapi Perah Nusantara
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
              className="p-2.5 rounded-xl bg-teal-950/80 border border-teal-800/60 text-teal-200 hover:text-white focus:outline-none transition shadow-sm"
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
        <div className="md:hidden border-t border-teal-800/40 bg-[#042421]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badgeC.length > 0 && (
            <div className="pb-3 border-b border-teal-800/50">
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
