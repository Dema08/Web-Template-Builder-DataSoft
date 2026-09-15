import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Magazine
 * Ala majalah: kicker + headline serif raksasa + foto + byline.
 * Untuk media / publishing / blog premium.
 */
export default function Hero15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-15', type: 'badge', props: { content: 'COVER STORY — AUTUMN 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'heading-15', type: 'heading', props: { content: 'The quiet rebels reshaping Jakarta', level: 'h1', fontSize: '64px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-15', type: 'text', props: { content: 'Inside the studios, kitchens, and workshops of a generation choosing craft over scale.', fontSize: '18px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-read', type: 'button', props: { label: 'Read the Story →', href: '#story', variant: 'primary', size: 'large', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'img-15', type: 'image', props: { src: '', alt: 'Cover', width: '100%', height: '480px', objectFit: 'cover', borderRadius: '0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-14 px-6 bg-[#faf9f6] border-b-2 border-stone-900">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-end" style={{ fontFamily: 'Georgia, serif' }}>
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-4 select-none">By Editorial Team — 12 min read</p>
          {renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}
        </div>
        <div className="border-2 border-stone-900 shadow-[8px_8px_0_#1c1917]">
          {renderLayoutComponents(img, sectionId)}
          <p className="text-[11px] italic text-stone-500 bg-white px-4 py-2 border-t-2 border-stone-900 select-none">Photo: morning light in Kemang studio district.</p>
        </div>
      </div>
    </section>
  );
}
