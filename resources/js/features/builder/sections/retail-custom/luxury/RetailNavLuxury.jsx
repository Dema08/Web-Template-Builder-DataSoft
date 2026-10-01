import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailNavLuxury
 * High-End Luxury Boutique & Curated Maison Navigation with Concierge & VIP Lounge Access
 */
export default function RetailNavLuxury({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'lux-brand', type: 'heading', props: { content: 'MAISON PRESTIGE', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.15em' } },
    { id: 'lux-status-badge', type: 'badge', props: { text: '✦ PRIVATE CONCIERGE & 100% AUTHENTICITY GUARANTEE', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#d8b4fe', borderColor: 'rgba(168,85,247,0.4)' } },
    { id: 'lux-vip-btn', type: 'button', props: { label: 'Private VIP Lounge ✨', href: '#experience', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(24,15,46,0.8)', color: '#e9d5ff', borderColor: 'rgba(168,85,247,0.5)', fontSize: '12px' } },
    { id: 'lux-book-btn', type: 'button', props: { label: 'Book Private Appointment', href: '#collection', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const brandC = lc.filter(c => c.id === 'lux-brand');
  const badgeC = lc.filter(c => c.id === 'lux-status-badge');
  const btn1 = lc.filter(c => c.id === 'lux-vip-btn');
  const btn2 = lc.filter(c => c.id === 'lux-book-btn');

  return (
    <header className="sticky top-0 z-50 bg-[#0d071a]/95 backdrop-blur-md border-b border-purple-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-amber-300 flex items-center justify-center text-white font-serif font-black text-xl shadow-lg shadow-purple-600/30">
              P
            </div>
            <div>
              {renderLayoutComponents(brandC, sectionId)}
              <span className="text-[10px] font-semibold text-purple-300 tracking-[0.2em] uppercase block">
                Haute Horlogerie & Curated Boutique
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
