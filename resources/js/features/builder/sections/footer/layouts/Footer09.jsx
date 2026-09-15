import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Zen Footer
 * Super minimal krem + tipografi ringan + garis halus.
 * Untuk wellness / villa / skincare premium.
 */
export default function Footer09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-9', type: 'heading', props: { content: 'Serenity', level: 'h3', fontSize: '22px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'desc-9', type: 'text', props: { content: 'A private sanctuary in Ubud — slow mornings, jungle views.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'link-stay', type: 'button', props: { label: 'Stay', href: '#stay', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'link-rituals', type: 'button', props: { label: 'Rituals', href: '#rituals', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'link-visit', type: 'button', props: { label: 'Visit', href: '#visit', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'copy-9', type: 'text', props: { content: '© 2026 Serenity Ubud. Breathe.', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button');
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-[#faf9f7] px-6 py-14" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] text-stone-400 mb-4 select-none">U B U D — B A L I</p>
        {renderLayoutComponents(brandComps, sectionId)}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-12 h-px bg-stone-300" />
          <div className="w-1.5 h-1.5 rotate-45 bg-stone-400" />
          <div className="w-12 h-px bg-stone-300" />
        </div>
        {renderLayoutComponents(descComps, sectionId)}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-stone-500 cursor-default select-none">Stay</span>)}
        </div>
        <div className="mt-8 pt-6 border-t border-stone-200">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-stone-400 cursor-default select-none">© 2026 Serenity.</span>)}
        </div>
      </div>
    </footer>
  );
}
