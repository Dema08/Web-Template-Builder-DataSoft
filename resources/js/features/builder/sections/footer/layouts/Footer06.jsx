import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Centered Floral Footer
 * Pink feminin + logo tengah + ornamen bunga.
 * Untuk wedding / spa / hospitality.
 */
export default function Footer06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-6', type: 'heading', props: { content: '🌸 Sakura', level: 'h3', fontSize: '24px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'desc-6', type: 'text', props: { content: 'Bridal, events & intimate celebrations styled with love.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'link-bridal', type: 'button', props: { label: 'Bridal', href: '#bridal', variant: 'ghost', size: 'small', background: 'transparent', color: '#be185d' } },
    { id: 'link-events', type: 'button', props: { label: 'Events', href: '#events', variant: 'ghost', size: 'small', background: 'transparent', color: '#be185d' } },
    { id: 'link-gallery', type: 'button', props: { label: 'Gallery', href: '#gallery', variant: 'ghost', size: 'small', background: 'transparent', color: '#be185d' } },
    { id: 'cta-book', type: 'button', props: { label: 'Book Consultation ♡', href: '#book', variant: 'primary', size: 'small', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'copy-6', type: 'text', props: { content: '© 2026 Sakura Studio. Made with ♡', fontSize: '12px', color: '#d48aa8', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-gradient-to-b from-[#fff1f5] to-white px-6 pt-14 pb-8" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-3xl mx-auto text-center">
        {renderLayoutComponents(brandComps, sectionId)}
        <div className="flex items-center justify-center gap-2 my-3">
          <div className="w-12 h-px bg-pink-300" />
          <span className="text-pink-400 select-none">✿</span>
          <div className="w-12 h-px bg-pink-300" />
        </div>
        {renderLayoutComponents(descComps, sectionId)}
        <div className="flex flex-wrap items-center justify-center gap-1">
          {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-pink-600 cursor-default select-none">Bridal</span>)}
        </div>
        <div className="flex justify-center mt-4">{renderLayoutComponents(ctaComps, sectionId)}</div>
        <div className="mt-8 pt-6 border-t border-pink-100">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-pink-300 cursor-default select-none">© 2026 Sakura.</span>)}
          <FooterSupportBadge className="text-pink-400" />
        </div>
      </div>
    </footer>
  );
}
