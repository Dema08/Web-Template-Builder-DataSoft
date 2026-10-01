import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyNavFresh
 * Fresh Milk Dairy Cooperative Navigation with Cold Chain Status & Member Portal
 */
export default function DairyNavFresh({ components = [], sectionId = null }) {
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
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-teal-500/30">
              🥛
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[11px] font-semibold text-teal-400 tracking-wider uppercase block">
                Kemitraan Peternak Sapi Perah Nusantara
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
