import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyFooterArtisan
 * Organic dairy farmstead footer with estate foothills address, certified organic logos, and farm store hours.
 */
export default function DairyFooterArtisan({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'art-ft-title', type: 'heading', props: { content: 'VALLEY PASTURES ORGANIC FARMSTEAD', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.08em' } },
    { id: 'art-ft-desc', type: 'paragraph', props: { content: 'Peternakan Susu Organik Single-Estate & Pabrik Keju Artisan. Sertifikasi Organik Indonesia (INOFICE) & Standar Kesejahteraan Ternak Internasional.', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'art-ft-copy', type: 'paragraph', props: { content: '© 2026 Valley Pastures Dairy Estate. Pure Nature, Pure Nutrition.', fontSize: '12px', color: '#a7f3d0' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'art-ft-title');
  const descC = lc.filter(c => c.id === 'art-ft-desc');
  const copyC = lc.filter(c => c.id === 'art-ft-copy');

  return (
    <footer className="bg-[#020d09] text-emerald-200/70 py-12 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-emerald-950">
          <div className="md:col-span-2 space-y-3">
            {renderLayoutComponents(titleC, sectionId)}
            {renderLayoutComponents(descC, sectionId)}
            <div className="flex items-center gap-3 pt-2 text-xs text-amber-300 font-semibold">
              <span>📍 Farm Estate: Valley Pastures Foothills KM 24, Kaki Gunung Salak, Bogor</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-amber-100 uppercase tracking-wider mb-3">Farmstead Salons</h4>
            <ul className="space-y-2 text-xs">
              <li>Pasture Tasting Room (Sabtu-Minggu)</li>
              <li>Artisan Cheese Cave & Aging Cellar</li>
              <li>Botanic Milk Bar & Farm Store</li>
              <li>Organic Workshop Pavilion</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-amber-100 uppercase tracking-wider mb-3">Layanan Langganan</h4>
            <ul className="space-y-2 text-xs">
              <li>Home Delivery Botol Kaca Subuh</li>
              <li>Farmstead Club VIP Membership</li>
              <li>Curated Monthly Cheese Box</li>
              <li>Chef & Culinary Supply Program</li>
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
