import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFooterPuskopolda
 * Official Footer for Pusat Koperasi Kepolisian Daerah (PUSKOPOLDA).
 * Pure Blue & White & Slate-900 Theme.
 */
export default function KopFooterPuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'kop-ft-logo', type: 'heading', props: { content: 'PUSKOPOLDA', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.06em' } },
    { id: 'kop-ft-desc', type: 'paragraph', props: { content: 'Pusat Koperasi Kepolisian Daerah yang profesional, transparan, dan akuntabel dalam mewujudkan kemandirian ekonomi anggota.', fontSize: '13px', color: '#94a3b8' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'kop-ft-logo' || (c.type === 'heading' && !String(c.id).includes('menu')));
  const desc = lc.filter(c => c.id === 'kop-ft-desc' || c.type === 'paragraph');

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛡️</span>
              <div>{renderLayoutComponents(logo, sectionId)}</div>
            </div>
            <div className="leading-relaxed text-xs sm:text-sm">{renderLayoutComponents(desc, sectionId)}</div>
          </div>

          {/* Col 2: Navigasi */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigasi Utama</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#beranda" className="hover:text-blue-400 transition">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-blue-400 transition">Tentang Kami</a></li>
              <li><a href="#struktur" className="hover:text-blue-400 transition">Struktur Organisasi</a></li>
              <li><a href="#unit-usaha" className="hover:text-blue-400 transition">Unit Usaha & Layanan</a></li>
              <li><a href="#keanggotaan" className="hover:text-blue-400 transition">Keanggotaan</a></li>
            </ul>
          </div>

          {/* Col 3: Layanan & Informasi */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Layanan Koperasi</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#unit-usaha" className="hover:text-blue-400 transition">Simpan Pinjam</a></li>
              <li><a href="#unit-usaha" className="hover:text-blue-400 transition">Perdagangan Sembako</a></li>
              <li><a href="#dokumen" className="hover:text-blue-400 transition">Unduh Formulir & AD/ART</a></li>
              <li><a href="#legalitas" className="hover:text-blue-400 transition">Legalitas Badan Hukum</a></li>
              <li><a href="#mitra" className="hover:text-blue-400 transition">Jaringan Mitra Kerja</a></li>
            </ul>
          </div>

          {/* Col 4: Sekretariat */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Sekretariat</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Jl. Contoh No. 123, Jakarta Selatan 12345<br />
              Telp: (021) 1234-5678<br />
              Email: info@puskopolda.co.id
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2026 PUSKOPOLDA. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </div>
    </footer>
  );
}
