import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFooterSyariah
 * Islamic Sharia Savings & Financing Cooperative multi-column footer.
 * Fully supports right-inspector selection and property editing.
 */
export default function KopFooterSyariah({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'syariah-foot-logo', type: 'heading', props: { content: 'KSPPS BMT AMANAH NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
    { id: 'syariah-foot-desc', type: 'paragraph', props: { content: 'Koperasi Simpan Pinjam dan Pembiayaan Syariah terpercaya. Berkhidmat memberdayakan ekonomi ummat melalui permodalan mikro, simpanan berkah, dan tata kelola profesional berlandaskan syariat Islam.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'syariah-foot-addr', type: 'paragraph', props: { content: 'Kantor Pusat: Gedung Graha BMT, Jl. KH. Ahmad Dahlan No. 45, Yogyakarta 55262', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'syariah-foot-contact', type: 'paragraph', props: { content: 'Call Center: (0274) 556-7890 | WA Anggota: 0811-5566-7788 | Email: layanan@bmtamanah.id', fontSize: '13px', color: '#fde047' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'syariah-foot-logo');
  const desc = lc.filter(c => c.id === 'syariah-foot-desc');
  const addr = lc.filter(c => c.id === 'syariah-foot-addr');
  const contact = lc.filter(c => c.id === 'syariah-foot-contact');

  return (
    <footer className="bg-[#011109] border-t border-emerald-700/30 text-emerald-200/70 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-950">
          {/* Main Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                🕌
              </div>
              <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            </div>
            <div className="max-w-md leading-relaxed">{renderLayoutComponents(desc, sectionId)}</div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-700/40 text-xs font-mono text-emerald-300">Izin Kemenkop RI No. 518/BH/MENKOP</span>
              <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-700/40 text-xs font-mono text-amber-300">DPS DSN-MUI Certified</span>
              <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-700/40 text-xs font-mono text-emerald-300">Opini WTP KAP Independen</span>
            </div>
          </div>

          {/* Office & Contact */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Kantor Pelayanan & Pusat Bantuan Anggota</h4>
            <div className="space-y-2">
              <div>{renderLayoutComponents(addr, sectionId)}</div>
              <div>{renderLayoutComponents(contact, sectionId)}</div>
            </div>
            <div className="pt-2 text-xs text-emerald-400/60">
              Jam Operasional Kas: Senin - Jumat 08:00 - 15:30 WIB | Portal Anggota & Mobile BMT: 24 Jam Non-Stop
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 KSPPS BMT Amanah Nusantara. Berkah, Amanah, Menyejahterakan Ummat.</p>
          <div className="flex items-center gap-6">
            <a href="#products" className="hover:text-amber-300 transition-colors">Produk Syariah</a>
            <a href="#shu" className="hover:text-amber-300 transition-colors">Laporan SHU</a>
            <a href="#register" className="hover:text-amber-300 transition-colors">Daftar Anggota</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
