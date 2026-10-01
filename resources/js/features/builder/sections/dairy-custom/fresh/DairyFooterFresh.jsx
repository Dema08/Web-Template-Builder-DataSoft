import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyFooterFresh
 * Dairy Cooperative footer with cooling units, veterinary clinic, and legal information.
 */
export default function DairyFooterFresh({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'fr-ft-title', type: 'heading', props: { content: 'KOPERASI PETERNAK SUSU MURNI NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
    { id: 'fr-ft-desc', type: 'paragraph', props: { content: 'Badan Hukum Koperasi Produsen Susu No. AHU-0014820.AH.01.26. Menghubungkan peternak lokal dengan rantai pasok industri dan konsumen keluarga Indonesia.', fontSize: '13px', color: '#99f6e4' } },
    { id: 'fr-ft-copy', type: 'paragraph', props: { content: '© 2026 Koperasi Peternak Susu Murni Nusantara. Bersama Peternak Membangun Gizi Bangsa.', fontSize: '12px', color: '#5eead4' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'fr-ft-title');
  const descC = lc.filter(c => c.id === 'fr-ft-desc');
  const copyC = lc.filter(c => c.id === 'fr-ft-copy');

  return (
    <footer className="bg-[#021311] text-teal-200/70 py-12 border-t border-teal-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-teal-950">
          <div className="md:col-span-2 space-y-3">
            {renderLayoutComponents(titleC, sectionId)}
            {renderLayoutComponents(descC, sectionId)}
            <div className="flex items-center gap-3 pt-2 text-xs text-teal-300 font-semibold">
              <span>📍 Kantor Pusat & Sentra Pabrik: Jl. Raya Dataran Tinggi Pengalengan KM 18, Bandung</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-teal-100 uppercase tracking-wider mb-3">Unit Layanan Koperasi</h4>
            <ul className="space-y-2 text-xs">
              <li>12 Pos Penampungan Susu Desa</li>
              <li>Klinik Hewan & Inseminasi Buatan</li>
              <li>Unit Pabrik Pakan Ternak Konsentrat</li>
              <li>Unit Simpan Pinjam Modal Peternak</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-teal-100 uppercase tracking-wider mb-3">Produk & Distribusi</h4>
            <ul className="space-y-2 text-xs">
              <li>Layanan Susu Antar Rumah Pagi</li>
              <li>Pasokan Susu Segar Kedai Kopi (Horeka)</li>
              <li>Grosir Yogurt & Keju Mozzarella</li>
              <li>Kemitraan Pasokan Pabrik Olahan</li>
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
