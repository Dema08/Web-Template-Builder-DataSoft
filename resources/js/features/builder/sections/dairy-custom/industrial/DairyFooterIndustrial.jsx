import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyFooterIndustrial
 * Industrial Dairy Cooperative footer with corporate headquarters, fleet dispatch hubs, and compliance certifications.
 */
export default function DairyFooterIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ind-ft-title', type: 'heading', props: { content: 'PT AGRO DAIRY NUSANTARA (KOPERASI INDUK)', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
    { id: 'ind-ft-desc', type: 'paragraph', props: { content: 'Penyedia Bahan Baku Susu Segar Curah & Pabrik Pakan Ternak Berstandar Internasional. Izin Usaha Industri Pengolahan Susu No. IU-IND/DAIRY/2026.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'ind-ft-copy', type: 'paragraph', props: { content: '© 2026 PT Agro Dairy Nusantara. Integrating Farmers with National Industry.', fontSize: '12px', color: '#64748b' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'ind-ft-title');
  const descC = lc.filter(c => c.id === 'ind-ft-desc');
  const copyC = lc.filter(c => c.id === 'ind-ft-copy');

  return (
    <footer className="bg-[#030908] text-slate-400 py-12 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          <div className="md:col-span-2 space-y-3">
            {renderLayoutComponents(titleC, sectionId)}
            {renderLayoutComponents(descC, sectionId)}
            <div className="flex items-center gap-3 pt-2 text-xs text-emerald-400 font-semibold">
              <span>📍 Central Processing Hub: Kawasan Agro Industri Pujon KM 12, Malang, Jawa Timur</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">Fasilitas B2B</h4>
            <ul className="space-y-2 text-xs">
              <li>Silo Penyimpanan Susu 250 KL</li>
              <li>Pabrik Pakan Konsentrat 120 Ton/Hari</li>
              <li>Laboratorium Sentral Mikrobiologi</li>
              <li>Depot Truk Tangki Isothermal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">Layanan Korporat</h4>
            <ul className="space-y-2 text-xs">
              <li>Kontrak Pasokan Pabrik FMCG & Olahan</li>
              <li>Penyediaan Susu Curah Cold Tanker</li>
              <li>Program CSR Kemitraan Peternak</li>
              <li>Konsultasi Ransum Pakan Sapi Perah</li>
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
