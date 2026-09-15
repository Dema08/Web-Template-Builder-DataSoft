import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NOIR — Full Dark Luxury Footer
 * Hitam pekat + aksen emas + garis gold gradient.
 * Untuk luxury / fashion / properti premium.
 */
export default function Footer02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-2', type: 'heading', props: { content: 'NOIR', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.3em', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-2', type: 'text', props: { content: 'Private collections & bespoke service, beyond the ordinary.', fontSize: '14px', color: '#78716c', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-maison', type: 'button', props: { label: 'Maison', href: '#maison', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } },
    { id: 'link-collection', type: 'button', props: { label: 'Collection', href: '#collection', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } },
    { id: 'link-atelier', type: 'button', props: { label: 'Atelier', href: '#atelier', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } },
    { id: 'cta-reserve', type: 'button', props: { label: 'Reserve', href: '#reserve', variant: 'outline', size: 'small', radius: 'full', background: '#c9a227', color: '#c9a227' } },
    { id: 'copy-2', type: 'text', props: { content: '© 2026 Noir Maison. Crafted for the few.', fontSize: '12px', color: '#57534e', align: 'center', margin: '0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));

  return (
    <footer className="relative bg-[#0c0a09] px-6 pt-14 pb-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a227] to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(201,162,39,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
            <div className="flex items-center gap-3 mt-1">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a227]" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-[#c9a227] mb-3 select-none">MAISON</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (
                <span className="text-sm text-stone-400 cursor-default select-none">Maison</span>
              )}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-[#c9a227] mb-3 select-none">CONTACT</p>
            <div className="flex flex-col gap-1.5 text-sm text-stone-400 select-none">
              <span>atelier@noir.id</span>
              <span>+62 21 555 0192</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-[#c9a227] select-none">PRIVATE VIEW</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (
            <span className="text-xs text-stone-600 cursor-default select-none">© 2026 Noir Maison.</span>
          )}
        </div>
      </div>
    </footer>
  );
}
