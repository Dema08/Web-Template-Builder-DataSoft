import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailNavWholesale
 * B2B Wholesale & FMCG Distribution Navigation with Live MOQ Status & Partner Portal
 */
export default function RetailNavWholesale({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'wh-brand', type: 'heading', props: { content: 'MEGA DISTRIBUSI', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.04em' } },
    { id: 'wh-status-badge', type: 'badge', props: { text: '📦 15 HUB GUDANG REGIONAL AKTIF • MIN ORDER Rp 2.5 JUTA', variant: 'solid', background: 'rgba(37,99,235,0.25)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.3)' } },
    { id: 'wh-contact-btn', type: 'button', props: { label: 'Hubungi Sales B2B 📞', href: '#contact', variant: 'outline', size: 'small', radius: 'md', background: 'rgba(30,41,59,0.8)', color: '#cbd5e1', borderColor: 'rgba(100,116,139,0.4)', fontSize: '12px' } },
    { id: 'wh-portal-btn', type: 'button', props: { label: 'Portal Grosir Agen', href: '#catalog', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const brandC = lc.filter(c => c.id === 'wh-brand');
  const badgeC = lc.filter(c => c.id === 'wh-status-badge');
  const btn1 = lc.filter(c => c.id === 'wh-contact-btn');
  const btn2 = lc.filter(c => c.id === 'wh-portal-btn');

  return (
    <header className="sticky top-0 z-50 bg-[#0b1329]/95 backdrop-blur-md border-b border-blue-900/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/30 shrink-0">
              M
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[11px] font-semibold text-blue-400 tracking-wider uppercase block">
                B2B Wholesale & Supply Chain FMCG
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
        <div className="md:hidden border-t border-blue-900/40 bg-[#0b1329]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badgeC.length > 0 && (
            <div className="pb-3 border-b border-slate-800">
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
