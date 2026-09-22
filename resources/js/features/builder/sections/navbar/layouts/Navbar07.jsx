import { useState, useEffect } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OBSIDIAN — Scroll Morph
 * Navbar transparan di atas hero, berubah jadi solid blur + shadow
 * saat di-scroll. Di builder, toggle "Simulate Scroll" untuk preview.
 */
export default function Navbar07({ components = [], sectionId = null }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const y = e?.target?.scrollTop ?? window.scrollY ?? 0;
      setScrolled(y > 40);
    };
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, []);

  const defaultComponents = [
    { id: 'logo-7', type: 'heading', props: { content: 'OBSIDIAN', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.22em' } },
    { id: 'nav-platform', type: 'button', props: { label: 'Platform', href: '#platform', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-solutions', type: 'button', props: { label: 'Solutions', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-demo', type: 'button', props: { label: 'Get Demo →', href: '#demo', variant: 'primary', size: 'small', radius: 'full', background: '#ffffff', color: '#0f172a' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <nav className={`sticky top-0 z-50 px-6 transition-all duration-500 ${scrolled ? 'py-2.5 bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)]' : 'py-5 bg-gradient-to-b from-slate-950/80 to-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 shrink-0">
          {!hasImageLogo && <div className={`rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-300 transition-all duration-500 flex items-center justify-center text-slate-950 font-black select-none shrink-0 ${scrolled ? 'w-8 h-8 text-sm' : 'w-10 h-10 text-base'}`}>◈</div>}
          {renderLayoutComponents(logoComps, sectionId)}
        </div>
        <div className="hidden lg:flex items-center gap-1">
          {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
            <span className="text-sm font-semibold text-slate-200 px-3 cursor-default select-none">Platform</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setScrolled(v => !v); }}
            className="text-[10px] font-bold text-slate-400 border border-white/15 rounded-full px-2.5 py-1 hover:text-white transition select-none"
            title="Preview efek scroll"
          >
            {scrolled ? '● SOLID' : '○ CLEAR'}
          </button>
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
    </nav>
  );
}
