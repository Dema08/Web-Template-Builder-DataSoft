import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Newsroom Story
 * Ala majalah: kicker + headline serif + foto + byline.
 * Untuk media / publishing / blog premium.
 */
export default function About15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-15', type: 'badge', props: { content: 'ABOUT THE NEWSROOM', background: '#1c1917', color: '#fafaf9' } },
    { id: 'heading-15', type: 'heading', props: { content: 'Independent since day one', level: 'h2', fontSize: '48px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-15', type: 'text', props: { content: 'No investors, no algorithms pulling strings. Just 24 journalists chasing stories that matter across the archipelago.', fontSize: '17px', color: '#57534e', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-newsroom', type: 'button', props: { label: 'Inside the Newsroom →', href: '#newsroom', variant: 'primary', size: 'medium', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'img-15', type: 'image', props: { src: '', alt: 'Newsroom', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="py-14 px-6 bg-[#faf9f6] border-y-2 border-stone-900" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-4 select-none pointer-events-none">By Editorial Team — Est. 2016</p>
          {renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}
        </div>
        <div className="border-2 border-stone-900 shadow-[8px_8px_0_#1c1917]">
          {renderLayoutComponents(img, sectionId)}
          <p className="text-[11px] italic text-stone-500 bg-white px-4 py-2 border-t-2 border-stone-900 select-none pointer-events-none">The Kemang newsroom, 7AM editorial meeting.</p>
        </div>
      </div>
    </section>
  );
}
