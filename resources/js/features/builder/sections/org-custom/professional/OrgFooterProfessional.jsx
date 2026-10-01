import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgFooterProfessional
 * Prestigious multi-column footer for professional forum — deep navy / gold.
 * Fully supports right-inspector selection and property editing.
 */
export default function OrgFooterProfessional({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'pro-foot-logo', type: 'heading', props: { content: 'FORUM PROFESI NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
    { id: 'pro-foot-desc', type: 'paragraph', props: { content: 'Organisasi profesi berbadan hukum resmi Republik Indonesia. Berdedikasi memajukan standar profesi, kompetensi, dan etika kerja nasional sejak 1985.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'pro-foot-addr', type: 'paragraph', props: { content: 'Gedung Graha Profesi Lt. 8, Jl. Jend. Sudirman Kav. 52-53, SCBD, Jakarta Selatan 12190', fontSize: '13px', color: '#94a3b8' } },
    { id: 'pro-foot-phone', type: 'paragraph', props: { content: 'Hotline DPP: +62 21 5289 8800 | sekretariat@forumprofesi.or.id', fontSize: '13px', color: '#fbbf24' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logoC = lc.filter(c => c.id === 'pro-foot-logo');
  const descC = lc.filter(c => c.id === 'pro-foot-desc');
  const addrC = lc.filter(c => c.id === 'pro-foot-addr');
  const phoneC = lc.filter(c => c.id === 'pro-foot-phone');

  return (
    <footer className="relative bg-[#03060d] text-slate-300 pt-16 pb-12 border-t-2 border-amber-500/30 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#081120] rounded-[10px] flex items-center justify-center text-amber-400 font-black text-lg">
                  ⚜
                </div>
              </div>
              <div>{renderLayoutComponents(logoC, sectionId)}</div>
            </div>
            <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
            <div className="pt-2 flex items-center gap-3 text-xs text-amber-400/90 font-medium">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30">SK Kemenkumham RI</span>
              <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30">ISO 9001:2015</span>
            </div>
          </div>

          {/* Col 2: Sekretariat DPP */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Sekretariat Jenderal DPP</h4>
            <div className="leading-relaxed">{renderLayoutComponents(addrC, sectionId)}</div>
            <div className="pt-2 font-medium">{renderLayoutComponents(phoneC, sectionId)}</div>
          </div>

          {/* Col 3: Navigasi Cepat */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Tautan Resmi</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Struktur Organisasi</a></li>
              <li><a href="#membership" className="hover:text-amber-400 transition-colors">Panduan Keanggotaan</a></li>
              <li><a href="#events" className="hover:text-amber-400 transition-colors">Kalender Kongres 2026</a></li>
              <li><a href="#code-of-ethics" className="hover:text-amber-400 transition-colors">Kode Etik Profesi</a></li>
              <li><a href="#journal" className="hover:text-amber-400 transition-colors">E-Journal Profesi</a></li>
            </ul>
          </div>

          {/* Col 4: Akreditasi & Dewan Wilayah */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Dewan Pengurus Wilayah</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Memiliki 34 Kantor Cabang Dewan Pengurus Daerah (DPD) yang siap melayani verifikasi keanggotaan dan sertifikasi di seluruh provinsi Indonesia.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Portal Pelayanan Aktif 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Forum Profesi Nusantara (DPP). Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-amber-400 transition-colors">Kebijakan Privasi</a>
            <a href="#terms" className="hover:text-amber-400 transition-colors">Statuta Organisasi</a>
            <a href="#sitemap" className="hover:text-amber-400 transition-colors">Peta Situs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
