import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailFooterWholesale
 * Wholesale corporation footer with branch hubs list, logistics license, and legal notices.
 */
export default function RetailFooterWholesale({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'wh-ft-title', type: 'heading', props: { content: 'PT MEGA DISTRIBUSI LOGISTIK UTAMA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
    { id: 'wh-ft-desc', type: 'paragraph', props: { content: 'Holding Distributor FMCG, Komoditas Pangan & Sembako Terintegrasi. Izin Usaha Distribusi Dagang Nasional No. SIUP/DIS-FMCG/2026.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'wh-ft-copy', type: 'paragraph', props: { content: '© 2026 PT Mega Distribusi Logistik Utama. Seluruh Hak Cipta Dilindungi Undang-Undang.', fontSize: '12px', color: '#64748b' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'wh-ft-title');
  const descC = lc.filter(c => c.id === 'wh-ft-desc');
  const copyC = lc.filter(c => c.id === 'wh-ft-copy');

  return (
    <footer className="bg-[#040814] text-slate-400 py-12 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          <div className="md:col-span-2 space-y-3">
            {renderLayoutComponents(titleC, sectionId)}
            {renderLayoutComponents(descC, sectionId)}
            <div className="flex items-center gap-3 pt-2 text-xs text-blue-400 font-semibold">
              <span>📍 Head Office: Kawasan Industri Pulogadung Blok H-12, Jakarta Timur</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">Warehouse Regional</h4>
            <ul className="space-y-2 text-xs">
              <li>Hub Jakarta & Banten (Cakung & Cikupa)</li>
              <li>Hub Jawa Barat (Bandung & Cirebon)</li>
              <li>Hub Jawa Tengah (Semarang & Solo)</li>
              <li>Hub Jawa Timur (Surabaya & Malang)</li>
              <li>Hub Luar Jawa (Medan, Makassar, Balikpapan)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">Layanan Grosir</h4>
            <ul className="space-y-2 text-xs">
              <li>Pemesanan Kontainer / Pallet</li>
              <li>Program Fasilitas Tempo Toko</li>
              <li>Integrasi POS & WMS Toko</li>
              <li>Konsultasi Planogram Rak Retail</li>
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
