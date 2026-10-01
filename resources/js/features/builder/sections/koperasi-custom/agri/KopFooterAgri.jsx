import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFooterAgri
 * Agricultural & Production Producers Cooperative multi-column footer.
 * Fully supports right-inspector selection and property editing.
 */
export default function KopFooterAgri({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'agri-foot-logo', type: 'heading', props: { content: 'KOPERASI TANI NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#fef3c7', letterSpacing: '0.04em' } },
    { id: 'agri-foot-desc', type: 'paragraph', props: { content: 'Koperasi produsen pertanian terpadu skala nasional. Menghubungkan ribuan petani dengan teknologi pasca panen modern, resi gudang, dan rantai pasok pasar global berkeadilan.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'agri-foot-addr', type: 'paragraph', props: { content: 'Sentra Logistik & Cold Storage: Jl. Raya Agribisnis KM 14, Malang, Jawa Timur 65152', fontSize: '13px', color: '#fde68a' } },
    { id: 'agri-foot-contact', type: 'paragraph', props: { content: 'Hotline Kemitraan: (0341) 789-2233 | WA Poktan: 0811-8899-0011 | Email: kemitraan@koperasitani.id', fontSize: '13px', color: '#fbbf24' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'agri-foot-logo');
  const desc = lc.filter(c => c.id === 'agri-foot-desc');
  const addr = lc.filter(c => c.id === 'agri-foot-addr');
  const contact = lc.filter(c => c.id === 'agri-foot-contact');

  return (
    <footer className="bg-[#0e0701] border-t border-amber-700/30 text-amber-200/70 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-amber-950">
          {/* Main Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                🌾
              </div>
              <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            </div>
            <div className="max-w-md leading-relaxed">{renderLayoutComponents(desc, sectionId)}</div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-amber-950/80 border border-amber-700/40 text-xs font-mono text-amber-300">Izin Kemenkop RI No. 892/BH/KOP-PROD</span>
              <span className="px-2.5 py-1 rounded bg-amber-950/80 border border-amber-700/40 text-xs font-mono text-emerald-300">Sertifikasi Indo-GAP</span>
              <span className="px-2.5 py-1 rounded bg-amber-950/80 border border-amber-700/40 text-xs font-mono text-amber-300">Pengelola Gudang Bappebti</span>
            </div>
          </div>

          {/* Office & Contact */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Sentra Pasca Panen & Layanan B2B</h4>
            <div className="space-y-2">
              <div>{renderLayoutComponents(addr, sectionId)}</div>
              <div>{renderLayoutComponents(contact, sectionId)}</div>
            </div>
            <div className="pt-2 text-xs text-amber-400/60">
              Penerimaan Komoditas Gudang: 24 Jam Non-Stop Setiap Hari Panen | Kantor Kemitraan: Senin - Sabtu 08:00 - 17:00 WIB
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Koperasi Tani Nusantara. Kedaulatan Petani Menuju Ketahanan Pangan Bangsa.</p>
          <div className="flex items-center gap-6">
            <a href="#programs" className="hover:text-amber-300 transition-colors">Program Tani</a>
            <a href="#impact" className="hover:text-amber-300 transition-colors">Dampak Petani</a>
            <a href="#partner" className="hover:text-amber-300 transition-colors">Kemitraan Poktan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
