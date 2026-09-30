import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingFooterConglomerate
 * Corporate governance mega footer with IDX/OJK compliance and subsidiary directory.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingFooterConglomerate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ft-logo', type: 'heading', props: { content: 'PT NUSANTARA STRATEGIC HOLDINGS TBK', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.06em' } },
    { id: 'ft-desc', type: 'text', props: { content: 'Konglomerasi investasi & pengelolaan portofolio multi-sektor terkemuka di Indonesia. Terdaftar di Bursa Efek Indonesia (IDX: NUSH).', fontSize: '13px', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <footer className="bg-[#030c18] border-t border-slate-800 text-white pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        {/* Col 1 Brand */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center font-black text-slate-950 text-lg">
              N
            </div>
            {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}
          </div>
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-400">
            <span className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-md">IDX: NUSH</span>
            <span className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-md">OJK Terdaftar</span>
            <span className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-md">MSCI ESG AAA</span>
          </div>
        </div>

        {/* Col 2 Entitas Usaha */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-amber-400 uppercase tracking-wider">Entitas Usaha Utama</p>
          <ul className="space-y-2 text-slate-400">
            <li>PT Nusantara Energy Tbk</li>
            <li>PT Nusantara Port & Infra</li>
            <li>PT Agro Nusantara Lestari</li>
            <li>Nusantara Capital Services</li>
          </ul>
        </div>

        {/* Col 3 Tata Kelola */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-amber-400 uppercase tracking-wider">Tata Kelola & ESG</p>
          <ul className="space-y-2 text-slate-400">
            <li>Dewan Komisaris & Direksi</li>
            <li>Komite Audit & Risiko</li>
            <li>Laporan Keberlanjutan 2025</li>
            <li>Sistem Whistleblowing (WBS)</li>
          </ul>
        </div>

        {/* Col 4 Investor Relations */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-amber-400 uppercase tracking-wider">Hubungan Investor</p>
          <ul className="space-y-2 text-slate-400">
            <li className="text-white font-bold">Sekretariat Perusahaan:</li>
            <li>ir@nusantaragroup.co.id</li>
            <li>(021) 515-8888</li>
            <li>SCBD Lot 28, Jakarta 12190</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© 2026 PT Nusantara Strategic Holdings Tbk. Hak Cipta Dilindungi Undang-Undang.</p>
        <p className="text-slate-400 font-mono text-[11px]">Keterbukaan Informasi Regulasi Otoritas Jasa Keuangan (OJK)</p>
      </div>
    </footer>
  );
}
