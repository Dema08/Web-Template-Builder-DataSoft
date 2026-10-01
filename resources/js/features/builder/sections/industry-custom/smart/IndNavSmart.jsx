import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndNavSmart
 * High-tech Industry 4.0 & Smart Factory navigation bar with live telemetry indicator.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function IndNavSmart({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'smart-nav-logo', type: 'heading', props: { content: 'NEXUS AUTOMATION 4.0', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.05em' } },
    { id: 'smart-nav-badge', type: 'badge', props: { text: '⚡ SMART FACTORY & ROBOTICS', variant: 'outline', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.45)' } },
    { id: 'smart-nav-1', type: 'button', props: { label: 'Robotika & AGV', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#93c5fd' } },
    { id: 'smart-nav-2', type: 'button', props: { label: 'AI Quality Control', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#93c5fd' } },
    { id: 'smart-nav-3', type: 'button', props: { label: 'Live Telemetri', href: '#telemetry', variant: 'ghost', size: 'small', background: 'transparent', color: '#93c5fd' } },
    { id: 'smart-nav-4', type: 'button', props: { label: 'Audit Industri 4.0', href: '#audit', variant: 'ghost', size: 'small', background: 'transparent', color: '#93c5fd' } },
    { id: 'smart-nav-cta', type: 'button', props: { label: 'Jadwalkan Live Demo 🚀', href: '#audit', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'smart-nav-logo');
  const badge = lc.filter(c => c.id === 'smart-nav-badge');
  const nav1 = lc.filter(c => c.id === 'smart-nav-1');
  const nav2 = lc.filter(c => c.id === 'smart-nav-2');
  const nav3 = lc.filter(c => c.id === 'smart-nav-3');
  const nav4 = lc.filter(c => c.id === 'smart-nav-4');
  const cta = lc.filter(c => c.id === 'smart-nav-cta');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030712]/95 backdrop-blur-md border-b border-blue-500/20 text-slate-100 shadow-xl">
      {/* High-tech Telemetry status bar */}
      <div className="bg-[#020617] border-b border-blue-900/40 py-1 px-4 text-center">
        <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-cyan-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
            <span>IoT CLOUD NETWORK: ONLINE (99.98% UPTIME)</span>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-300">120+ CONNECTED ROBOTIC CELLS</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline text-blue-400">DIGITAL TWIN LIVE TELEMETRY</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo & Badge */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30 shrink-0">
            🤖
          </div>
          <div>
            <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            <div className="mt-1 hidden sm:block">{renderLayoutComponents(badge, sectionId)}</div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
          {renderLayoutComponents(nav1, sectionId)}
          {renderLayoutComponents(nav2, sectionId)}
          {renderLayoutComponents(nav3, sectionId)}
          {renderLayoutComponents(nav4, sectionId)}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {renderLayoutComponents(cta, sectionId)}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-800/60 text-blue-200 hover:text-white focus:outline-none transition shadow-sm"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-blue-900/40 bg-[#030712]/98 px-4 py-5 backdrop-blur-2xl shadow-2xl space-y-3">
          {badge.length > 0 && (
            <div className="pb-3 border-b border-blue-900/50">
              {renderLayoutComponents(badge, sectionId)}
            </div>
          )}
          <div className="flex flex-col gap-2 [&_a]:w-full [&_button]:w-full [&_a]:justify-start [&_button]:justify-start">
            {renderLayoutComponents(nav1, sectionId)}
            {renderLayoutComponents(nav2, sectionId)}
            {renderLayoutComponents(nav3, sectionId)}
            {renderLayoutComponents(nav4, sectionId)}
          </div>
          <div className="pt-2 border-t border-blue-900/40 [&_a]:w-full [&_button]:w-full [&_a]:justify-center [&_button]:justify-center">
            {renderLayoutComponents(cta, sectionId)}
          </div>
        </div>
      )}
    </header>
  );
}
