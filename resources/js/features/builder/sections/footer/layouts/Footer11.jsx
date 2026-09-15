import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Serif Footer
 * Ala koran: masthead + garis ganda + kolom rubrik.
 * Untuk media / publishing / blog premium.
 */
export default function Footer11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-11', type: 'heading', props: { content: 'MONOCLE', level: 'h3', fontSize: '26px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 8px 0' } },
    { id: 'desc-11', type: 'text', props: { content: 'Autumn 2026 edition — stories of craft over scale.', fontSize: '14px', color: '#57534e', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-stories', type: 'button', props: { label: 'Stories', href: '#stories', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'link-editions', type: 'button', props: { label: 'Editions', href: '#editions', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'link-about', type: 'button', props: { label: 'About', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'cta-subscribe', type: 'button', props: { label: 'Subscribe →', href: '#subscribe', variant: 'primary', size: 'small', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'copy-11', type: 'text', props: { content: '© 2026 Monocle Press. All rights reserved.', fontSize: '12px', color: '#78716c', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-[#faf9f6] border-t-2 border-stone-900 px-6 py-12" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          {renderLayoutComponents(brandComps, sectionId)}
          <p className="text-[11px] tracking-[0.35em] text-stone-500 select-none">JAKARTA — AUTUMN 2026</p>
          <div className="mt-3 border-t-2 border-stone-900" />
          <div className="mt-[3px] border-t border-stone-400" />
        </div>
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone-500 mt-2 select-none">By Editorial Team</p>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] mb-3 select-none">RUBRIK</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm cursor-default select-none">Stories</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] mb-3 select-none">REDAKSI</p>
            <div className="flex flex-col gap-1.5 text-sm text-stone-600 select-none">
              <span>redaksi@monocle.id</span>
              <span>Kemang, Jakarta</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.25em] select-none">BERLANGGANAN</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-8 pt-5 border-t-2 border-stone-900 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-stone-500 cursor-default select-none">© 2026 Monocle.</span>)}
        </div>
      </div>
    </footer>
  );
}
