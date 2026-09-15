import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Zen
 * Super minimal: banyak whitespace, tipografi ringan, satu garis halus.
 * Nuansa wellness / arsitek / skincare premium.
 */
export default function Navbar09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'logo-9', type: 'heading', props: { content: 'serenity', level: 'h2', fontSize: '24px', fontWeight: '400', color: '#1c1917' } },
    { id: 'nav-retreats', type: 'button', props: { label: 'Retreats', href: '#retreats', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'nav-philosophy', type: 'button', props: { label: 'Philosophy', href: '#philosophy', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'nav-journal', type: 'button', props: { label: 'Journal', href: '#journal', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'cta-begin', type: 'button', props: { label: 'Begin →', href: '#begin', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f7]/90 backdrop-blur px-6 pt-6 pb-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-6">
          <div className="hidden md:flex items-center gap-8 flex-1">
            {menuComps.slice(0, 2).length > 0 ? renderLayoutComponents(menuComps.slice(0, 2), sectionId) : (
              <span className="text-[13px] font-light tracking-wide text-stone-500 cursor-default select-none">Retreats</span>
            )}
          </div>
          <div className="flex flex-col items-center leading-none shrink-0">
            {renderLayoutComponents(logoComps, sectionId)}
            <span className="text-[9px] tracking-[0.5em] text-stone-400 mt-1.5 select-none">B A L I</span>
          </div>
          <div className="hidden md:flex items-center justify-end gap-8 flex-1">
            {menuComps.slice(2).length > 0 ? renderLayoutComponents(menuComps.slice(2), sectionId) : (
              <span className="text-[13px] font-light tracking-wide text-stone-500 cursor-default select-none">Journal</span>
            )}
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
          <div className="md:hidden flex items-center gap-2">
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
      </div>
    </nav>
  );
}
