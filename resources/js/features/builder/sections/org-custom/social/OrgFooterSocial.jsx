import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgFooterSocial
 * Warm community footer for NGO / social movement — emerald/orange.
 * Fully supports right-inspector selection and property editing.
 */
export default function OrgFooterSocial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'soc-foot-logo', type: 'heading', props: { content: 'GERAKAN BERDAYA INDONESIA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' } },
    { id: 'soc-foot-desc', type: 'paragraph', props: { content: 'Yayasan nirlaba pemberdayaan masyarakat terdaftar di Kementerian Sosial RI. Berkomitmen mewujudkan keadilan akses pendidikan, kesehatan, dan kemandirian ekonomi.', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'soc-foot-addr', type: 'paragraph', props: { content: 'Rumah Pemberdayaan DPP: Jl. Tebet Timur Raya No. 45, Jakarta Selatan 12820', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'soc-foot-phone', type: 'paragraph', props: { content: 'Call Center Relawan: +62 21 8370 5522 | halo@gerakanberdaya.id', fontSize: '13px', color: '#6ee7b7' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logoC = lc.filter(c => c.id === 'soc-foot-logo');
  const descC = lc.filter(c => c.id === 'soc-foot-desc');
  const addrC = lc.filter(c => c.id === 'soc-foot-addr');
  const phoneC = lc.filter(c => c.id === 'soc-foot-phone');

  return (
    <footer className="relative bg-[#01140e] text-emerald-100 pt-16 pb-12 border-t-2 border-emerald-500/30 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Col 1: Brand & Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#022c22] rounded-[14px] flex items-center justify-center text-emerald-300 font-black text-xl">
                  🌱
                </div>
              </div>
              <div>{renderLayoutComponents(logoC, sectionId)}</div>
            </div>
            <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-300 font-medium">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40">Izin Kemsos RI</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40">Audit WTP 2025</span>
            </div>
          </div>

          {/* Col 2: Hub Relawan & Kantor */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Pusat Gerakan Relawan</h4>
            <div className="leading-relaxed">{renderLayoutComponents(addrC, sectionId)}</div>
            <div className="pt-2 font-medium">{renderLayoutComponents(phoneC, sectionId)}</div>
          </div>

          {/* Col 3: Program & Tautan */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Program Kami</h4>
            <ul className="space-y-2 text-xs text-emerald-300/80">
              <li><a href="#beasiswa" className="hover:text-white transition-colors">Beasiswa Pendidikan</a></li>
              <li><a href="#klinik" className="hover:text-white transition-colors">Klinik Keliling</a></li>
              <li><a href="#umkm" className="hover:text-white transition-colors">Pemberdayaan Desa</a></li>
              <li><a href="#hutan" className="hover:text-white transition-colors">Hutan Lestari</a></li>
              <li><a href="#volunteer" className="hover:text-white transition-colors">Daftar Relawan</a></li>
            </ul>
          </div>

          {/* Col 4: Rekening Amanah Donasi */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Rekening Amanah Donasi</h4>
            <div className="p-4 rounded-xl bg-[#022c22] border border-emerald-500/30 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-200">
                <span className="font-bold">Bank Syariah Indonesia (BSI)</span>
                <span className="text-orange-400 font-extrabold">712-8899-001</span>
              </div>
              <div className="flex justify-between items-center text-slate-200">
                <span className="font-bold">Bank Mandiri</span>
                <span className="text-orange-400 font-extrabold">137-00-998877-1</span>
              </div>
              <div className="text-[11px] text-emerald-400/80 pt-1">a.n. Yayasan Gerakan Berdaya Indonesia</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400/60">
          <div>
            © {new Date().getFullYear()} Yayasan Gerakan Berdaya Indonesia. Terdaftar di Kemenkumham RI.
          </div>
          <div className="flex items-center gap-6 text-emerald-400/80">
            <a href="#privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#transparency" className="hover:text-white transition-colors">Kanal Transparansi</a>
            <a href="#report" className="hover:text-white transition-colors">Laporan Keuangan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
