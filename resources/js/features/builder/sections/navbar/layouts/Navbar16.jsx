import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * GOLDLEAF — Gold Foil Premium
 * Krem + emas foil dengan ornamen garis ganda. Untuk wedding,
 * perhiasan, hotel bintang 5, brand heritage.
 */
export default function Navbar16({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'logo-16', type: 'heading', props: { content: 'GOLDLEAF', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#78350f', letterSpacing: '0.25em' } },
    { id: 'nav-heritage', type: 'button', props: { label: 'Heritage', href: '#heritage', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'nav-collections', type: 'button', props: { label: 'Collections', href: '#collections', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'nav-boutiques', type: 'button', props: { label: 'Boutiques', href: '#boutiques', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'cta-appoint', type: 'button', props: { label: '✦ Book Appointment', href: '#book', variant: 'primary', size: 'small', radius: 'full', background: '#b45309', color: '#fffbeb' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#fffbeb] to-[#fef3c7] px-6 pt-5 pb-3 border-b border-amber-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400" />
          <div className="w-10 h-10 rounded-full border-2 border-amber-500 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center font-black text-amber-900 shadow select-none">G</div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="hidden lg:flex items-center gap-1 flex-1">
            {menuComps.slice(0, 2).length > 0 ? renderLayoutComponents(menuComps.slice(0, 2), sectionId) : (
              <span className="text-sm font-semibold text-amber-800 px-3 cursor-default select-none">Heritage</span>
            )}
          </div>
          <div className="shrink-0 text-center">
            {renderLayoutComponents(logoComps, sectionId)}
          </div>
          <div className="hidden lg:flex items-center justify-end gap-1 flex-1">
            {menuComps.slice(2).length > 0 ? renderLayoutComponents(menuComps.slice(2), sectionId) : (
              <span className="text-sm font-semibold text-amber-800 px-3 cursor-default select-none">Boutiques</span>
            )}
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
          <div className="lg:hidden flex items-center gap-2">
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
      </div>
    </nav>
  );
}
