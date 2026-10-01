import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndNavHeavy
 * Heavy Industrial Navigation Bar with ISO badge, precision status, and RFQ button.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function IndNavHeavy({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heavy-nav-logo', type: 'heading', props: { content: 'PT NUSANTARA HEAVY INDUSTRY', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.05em' } },
    { id: 'heavy-nav-badge', type: 'badge', props: { text: '⚙️ ISO 9001:2015 & ASME CERTIFIED', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
    { id: 'heavy-nav-1', type: 'button', props: { label: 'Kapasitas Pabrik', href: '#capabilities', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'heavy-nav-2', type: 'button', props: { label: 'Standar Mutu', href: '#standards', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'heavy-nav-3', type: 'button', props: { label: 'Fasilitas CNC', href: '#capabilities', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'heavy-nav-4', type: 'button', props: { label: 'Kontak & Lokasi', href: '#rfq', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'heavy-nav-cta', type: 'button', props: { label: 'Request RFQ 🏭', href: '#rfq', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', fontWeight: '800' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'heavy-nav-logo');
  const badge = lc.filter(c => c.id === 'heavy-nav-badge');
  const nav1 = lc.filter(c => c.id === 'heavy-nav-1');
  const nav2 = lc.filter(c => c.id === 'heavy-nav-2');
  const nav3 = lc.filter(c => c.id === 'heavy-nav-3');
  const nav4 = lc.filter(c => c.id === 'heavy-nav-4');
  const cta = lc.filter(c => c.id === 'heavy-nav-cta');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0d14]/95 backdrop-blur-md border-b border-amber-500/20 text-slate-100 shadow-xl">
      {/* Top industrial precision stripe */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 py-1 px-4 text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-slate-950 font-bold uppercase tracking-wider">
          <span>⚡ Pabrik Beroperasi 24/7 CNC High-Precision</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Kapasitas 50.000 Ton/Bulan</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">Hotline RFQ: (021) 8990-2026</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Cert Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/30">
            ⚙️
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
