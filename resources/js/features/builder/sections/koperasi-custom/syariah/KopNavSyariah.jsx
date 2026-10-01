import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavSyariah
 * Islamic Sharia Savings & Financing Cooperative (KSPPS / BMT) navigation bar.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function KopNavSyariah({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'syariah-nav-logo', type: 'heading', props: { content: 'KSPPS BMT AMANAH NUSANTARA', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
    { id: 'syariah-nav-badge', type: 'badge', props: { text: '⚖️ DIAWASI DEWAN PENGAWAS SYARIAH & KEMENKOP', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
    { id: 'syariah-nav-1', type: 'button', props: { label: 'Simpanan Syariah', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'syariah-nav-2', type: 'button', props: { label: 'Pembiayaan Usaha', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'syariah-nav-3', type: 'button', props: { label: 'Laporan SHU & Zakat', href: '#shu', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'syariah-nav-4', type: 'button', props: { label: 'Kantor Cabang', href: '#register', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'syariah-nav-cta', type: 'button', props: { label: 'Portal Anggota 🕌', href: '#register', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'syariah-nav-logo');
  const badge = lc.filter(c => c.id === 'syariah-nav-badge');
  const nav1 = lc.filter(c => c.id === 'syariah-nav-1');
  const nav2 = lc.filter(c => c.id === 'syariah-nav-2');
  const nav3 = lc.filter(c => c.id === 'syariah-nav-3');
  const nav4 = lc.filter(c => c.id === 'syariah-nav-4');
  const cta = lc.filter(c => c.id === 'syariah-nav-cta');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#022417]/95 backdrop-blur-md border-b border-emerald-600/30 text-emerald-50 shadow-xl">
      {/* Top Sharia trust bar */}
      <div className="bg-gradient-to-r from-emerald-900 via-[#033b26] to-emerald-950 py-1 px-4 text-center border-b border-emerald-700/30">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-emerald-200 font-semibold tracking-wider">
          <span>🕌 AKAD MUDHARABAH & MURABAHAH BEBAS RIBA</span>
          <span className="hidden sm:inline text-emerald-500">|</span>
          <span className="hidden sm:inline">Aset Kelolaan Rp 180+ Miliar</span>
          <span className="hidden md:inline text-emerald-500">|</span>
          <span className="hidden md:inline text-amber-300">Nisbah Bagi Hasil Kompetitif & Berkah</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Cert Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-amber-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20">
            🕌
          </div>
          <div>
            <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            <div className="mt-1 hidden sm:block">{renderLayoutComponents(badge, sectionId)}</div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {renderLayoutComponents(nav1, sectionId)}
          {renderLayoutComponents(nav2, sectionId)}
          {renderLayoutComponents(nav3, sectionId)}
          {renderLayoutComponents(nav4, sectionId)}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          {renderLayoutComponents(cta, sectionId)}
        </div>
      </div>
    </header>
  );
}
