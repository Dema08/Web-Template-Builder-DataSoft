import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailNavWholesale
 * B2B Wholesale & FMCG Distribution Navigation with Live MOQ Status & Partner Portal
 */
export default function RetailNavWholesale({ components = [], sectionId = null }) {
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/30">
              M
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[11px] font-semibold text-blue-400 tracking-wider uppercase block">
                B2B Wholesale & Supply Chain FMCG
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
