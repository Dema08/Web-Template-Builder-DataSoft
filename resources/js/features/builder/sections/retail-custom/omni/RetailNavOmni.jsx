import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailNavOmni
 * Omnichannel Fast Retail & Supermart Navigation with Flash Deals countdown and Click & Collect 2-hr express badge
 */
export default function RetailNavOmni({ components = [], sectionId = null }) {
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
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-rose-600/30">
              S
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[11px] font-bold text-rose-400 tracking-wide uppercase block">
                Omnichannel Fresh & Mega Store
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
