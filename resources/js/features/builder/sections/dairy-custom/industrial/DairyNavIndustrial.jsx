import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyNavIndustrial
 * Industrial Dairy Supply Chain & Tanker Fleet Navigation with Live Supply Status
 */
export default function DairyNavIndustrial({ components = [], sectionId = null }) {
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-600/30">
              A
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[11px] font-semibold text-emerald-400 tracking-wider uppercase block">
                B2B Industrial Dairy & Feed Mill Ecosystem
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            {renderLayoutComponents(badgeC, sectionId)}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">{renderLayoutComponents(btn1, sectionId)}</div>
            <div>{renderLayoutComponents(btn2, sectionId)}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
