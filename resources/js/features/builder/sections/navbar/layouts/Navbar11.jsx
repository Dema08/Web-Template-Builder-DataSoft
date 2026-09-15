import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Serif
 * Navbar editorial dengan nomor edisi + garis ganda klasik.
 * Nuansa media / majalah / publishing premium.
 */
export default function Navbar11({ components = [], sectionId = null }) {
  const [issue] = useState('Vol. 42 — Autumn');

  const defaultComponents = [
    { id: 'logo-11', type: 'heading', props: { content: 'The Monocle Post', level: 'h2', fontSize: '28px', fontWeight: '700', color: '#1c1917' } },
    { id: 'nav-news', type: 'button', props: { label: 'News', href: '#news', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'nav-culture', type: 'button', props: { label: 'Culture', href: '#culture', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'nav-opinion', type: 'button', props: { label: 'Opinion', href: '#opinion', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'nav-magazine', type: 'button', props: { label: 'Magazine', href: '#magazine', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'cta-subscribe', type: 'button', props: { label: 'Subscribe', href: '#subscribe', variant: 'primary', size: 'small', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <nav className="sticky top-0 z-50 bg-[#faf9f6] px-6 pt-3 pb-0 border-b border-stone-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-semibold tracking-widest uppercase text-stone-500 pb-2">
        <span className="select-none">{issue}</span>
        <span className="hidden sm:block select-none">Jakarta — London — Tokyo</span>
        <span className="select-none">EN / ID</span>
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-3 border-t border-stone-900">
        <div className="hidden lg:flex items-center gap-6 flex-1">
          {menuComps.slice(0, 2).length > 0 ? renderLayoutComponents(menuComps.slice(0, 2), sectionId) : (
            <span className="text-sm text-stone-600 cursor-default select-none">News</span>
          )}
        </div>
        <div className="shrink-0 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          {renderLayoutComponents(logoComps, sectionId)}
        </div>
        <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
          {menuComps.slice(2).length > 0 ? renderLayoutComponents(menuComps.slice(2), sectionId) : (
            <span className="text-sm text-stone-600 cursor-default select-none">Magazine</span>
          )}
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
        <div className="lg:hidden flex items-center gap-2">
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
    </nav>
  );
}
