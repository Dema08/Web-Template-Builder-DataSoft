import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyNavArtisan
 * Artisan Organic Dairy Farmstead & Grass-Fed Boutique Navigation
 */
export default function DairyNavArtisan({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'art-brand', type: 'heading', props: { content: 'VALLEY PASTURES DAIRY', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#fef3c7', letterSpacing: '0.08em' } },
    { id: 'art-status-badge', type: 'badge', props: { text: '🌾 100% GRASS-FED ORGANIC CERTIFIED • A2 PROTEIN', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },
    { id: 'art-tour-btn', type: 'button', props: { label: 'Book Farm Visit 🌿', href: '#pasture', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(20,40,25,0.8)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.5)', fontSize: '12px' } },
    { id: 'art-club-btn', type: 'button', props: { label: 'Gabung Member Langganan', href: '#collection', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const brandC = lc.filter(c => c.id === 'art-brand');
  const badgeC = lc.filter(c => c.id === 'art-status-badge');
  const btn1 = lc.filter(c => c.id === 'art-tour-btn');
  const btn2 = lc.filter(c => c.id === 'art-club-btn');

  return (
    <header className="sticky top-0 z-50 bg-[#071f16]/95 backdrop-blur-md border-b border-amber-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-emerald-600 to-amber-300 flex items-center justify-center text-white font-serif font-black text-xl shadow-lg shadow-amber-600/30">
              V
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[10px] font-semibold text-amber-300 tracking-[0.18em] uppercase block">
                Artisan Farmstead & Grass-Fed Dairy
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
