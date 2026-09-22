import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Brutalist Bold Footer
 * Neo-brutalism kuning + border tebal + shadow kotak.
 * Berani, playful, ala Awwwards.
 */
export default function Footer08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-8', type: 'heading', props: { content: 'PAPERCUT★', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-8', type: 'text', props: { content: 'Studio anti-template. Berisik, berani, tak terlupakan.', fontSize: '14px', color: '#000000', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-work', type: 'button', props: { label: 'WORK', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'link-about', type: 'button', props: { label: 'ABOUT', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'link-contact', type: 'button', props: { label: 'CONTACT', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'cta-hire', type: 'button', props: { label: 'HIRE US ★', href: '#hire', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#facc15' } },
    { id: 'copy-8', type: 'text', props: { content: '© 2026 Papercut Studio. LOUD & PROUD.', fontSize: '12px', color: '#000000', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-[#facc15] border-t-4 border-black px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border-[3px] border-black rounded-2xl p-8 shadow-[8px_8px_0_#000] grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            <div className="inline-block border-[3px] border-black rounded-xl bg-[#facc15] px-3 py-1 shadow-[4px_4px_0_#000] -rotate-1 mb-2">
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="max-w-xs font-bold">{renderLayoutComponents(descComps, sectionId)}</div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] mb-3 select-none">★ MENU</p>
            <div className="flex flex-col items-start gap-1 font-black">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm cursor-default select-none">WORK</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] mb-3 select-none">★ FIND US</p>
            <div className="flex flex-col gap-1.5 text-sm font-bold select-none">
              <span>hello@papercut.id</span>
              <span>Jakarta Selatan</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] select-none">★ HIRE</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-6 text-center font-black">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs cursor-default select-none">© 2026 Papercut.</span>)}
          <FooterSupportBadge className="text-black" />
        </div>
      </div>
    </footer>
  );
}
