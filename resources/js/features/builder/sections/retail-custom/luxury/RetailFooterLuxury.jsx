import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailFooterLuxury
 * Luxury maison footer with flagship boutique address, concierge hotline, and discreet VIP newsletter.
 */
export default function RetailFooterLuxury({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'lux-ft-title', type: 'heading', props: { content: 'MAISON PRESTIGE INDONESIA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.1em' } },
    { id: 'lux-ft-desc', type: 'paragraph', props: { content: 'Boutique Curator Resmi untuk Haute Horlogerie, Fine Leathergoods, dan Limited Runway Collections. Terdaftar di Asosiasi Ritel Mewah Internasional.', fontSize: '13px', color: '#a855f7' } },
    { id: 'lux-ft-copy', type: 'paragraph', props: { content: '© 2026 Maison Prestige Indonesia. All Rights Reserved. Luxury Reimagined.', fontSize: '12px', color: '#7e22ce' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'lux-ft-title');
  const descC = lc.filter(c => c.id === 'lux-ft-desc');
  const copyC = lc.filter(c => c.id === 'lux-ft-copy');

  return (
    <footer className="bg-[#05020a] text-purple-200/70 py-12 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-purple-950">
          <div className="md:col-span-2 space-y-3">
            {renderLayoutComponents(titleC, sectionId)}
            {renderLayoutComponents(descC, sectionId)}
            <div className="flex items-center gap-3 pt-2 text-xs text-purple-300 font-semibold">
              <span>📍 Flagship Maison: Plaza Indonesia Level 2, Jalan M.H. Thamrin, Jakarta Pusat</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-purple-100 uppercase tracking-wider mb-3">Maison Salons</h4>
            <ul className="space-y-2 text-xs">
              <li>Maison Jakarta Flagship</li>
              <li>Maison Surabaya Grand City</li>
              <li>Maison Bali Seminyak Suite</li>
              <li>Private Viewing Lounge (By RSVP)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-purple-100 uppercase tracking-wider mb-3">Layanan Eksklusif</h4>
            <ul className="space-y-2 text-xs">
              <li>White-Glove Armored Delivery</li>
              <li>Sertifikasi Keaslian Blockchain</li>
              <li>Restorasi & Pembersihan Jam Tangan</li>
              <li>Bespoke Personal Shopper</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-xs">
          {renderLayoutComponents(copyC, sectionId)}
        </div>
      </div>
    </footer>
  );
}
