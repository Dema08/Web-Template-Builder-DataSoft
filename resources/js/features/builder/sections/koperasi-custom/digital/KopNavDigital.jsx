import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNavDigital
 * Modern Digital Fintech Cooperative Navigation Bar with live transaction status.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function KopNavDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dig-kop-logo', type: 'heading', props: { content: 'KOPERASI DIGITAL ID', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
    { id: 'dig-kop-badge', type: 'badge', props: { text: '⚡ DIGITAL COOPERATIVE SUPERAPP', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
    { id: 'dig-nav-1', type: 'button', props: { label: 'Fitur SuperApp', href: '#features', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5f3fc' } },
    { id: 'dig-nav-2', type: 'button', props: { label: 'Pinjaman Kilat AI', href: '#features', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5f3fc' } },
    { id: 'dig-nav-3', type: 'button', props: { label: 'Keamanan ISO 27001', href: '#security', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5f3fc' } },
    { id: 'dig-nav-4', type: 'button', props: { label: 'Simulasi SHU', href: '#features', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5f3fc' } },
    { id: 'dig-nav-cta', type: 'button', props: { label: 'Download SuperApp 📱', href: '#download', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #06b6d4, #059669)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'dig-kop-logo');
  const badge = lc.filter(c => c.id === 'dig-kop-badge');
  const nav1 = lc.filter(c => c.id === 'dig-nav-1');
  const nav2 = lc.filter(c => c.id === 'dig-nav-2');
  const nav3 = lc.filter(c => c.id === 'dig-nav-3');
  const nav4 = lc.filter(c => c.id === 'dig-nav-4');
  const cta = lc.filter(c => c.id === 'dig-nav-cta');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#03131c]/95 backdrop-blur-md border-b border-cyan-500/20 text-slate-100 shadow-xl">
      {/* Top Digital Core Banking Status Bar */}
      <div className="bg-[#020b10] border-b border-cyan-900/40 py-1 px-4 text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-cyan-300">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span>CORE BANKING 24/7 ONLINE: QRIS & BI-FAST ACTIVE</span>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-300">50.000+ PENGGUNA AKTIF</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline text-emerald-400">PENCAIRAN SIMPAN PINJAM INSTANT 5 MENIT</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/25">
            💳
          </div>
          <div>
            <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            <div className="mt-1 hidden sm:block">{renderLayoutComponents(badge, sectionId)}</div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {renderLayoutComponents(nav1, sectionId)}
          {renderLayoutComponents(nav2, sectionId)}
          {renderLayoutComponents(nav3, sectionId)}
          {renderLayoutComponents(nav4, sectionId)}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {renderLayoutComponents(cta, sectionId)}
        </div>
      </div>
    </header>
  );
}
