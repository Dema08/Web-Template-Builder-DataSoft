import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NOIR — Full Dark Luxury Story
 * Hitam pekat + aksen emas + garis gold gradient + foto.
 * Untuk luxury / fashion / properti premium.
 */
export default function About02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-2', type: 'badge', props: { content: 'MAISON — SINCE 1998', background: '#1c1917', color: '#e7c873' } },
    { id: 'heading-2', type: 'heading', props: { content: 'A legacy of quiet luxury', level: 'h2', fontSize: '46px', fontWeight: '700', color: '#fafaf9', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-2', type: 'text', props: { content: 'Three generations of artisans. Private collections, bespoke service, and an experience beyond the ordinary.', fontSize: '16px', color: '#a8a29e', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-atelier', type: 'button', props: { label: 'Visit Atelier →', href: '#atelier', variant: 'outline', size: 'medium', radius: 'full', background: '#c9a227', color: '#c9a227' } },
    { id: 'img-2', type: 'image', props: { src: '', alt: 'Atelier', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '16px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="relative py-24 px-6 bg-[#0c0a09] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(201,162,39,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="rounded-2xl overflow-hidden border border-[#c9a227]/25 shadow-[0_32px_70px_-20px_rgba(201,162,39,0.35)]">
          {renderLayoutComponents(img, sectionId)}
        </div>
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="flex items-center gap-3 my-3">
            <div className="w-14 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
            <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
            <div className="w-14 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
      </div>
    </section>
  );
}
