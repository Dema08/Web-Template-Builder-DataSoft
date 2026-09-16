import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 15 — MONOCLE Editorial Magazine Vision
 * Mirrors Hero15 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v15-badge', type: 'badge', props: { content: 'VISION ESSAY — AUTUMN 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'v15-heading', type: 'heading', props: { content: 'The quiet principles reshaping our industry', level: 'h2', fontSize: '64px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'v15-text', type: 'text', props: { content: 'Inside the philosophy and long-term vision of leaders choosing deep craft over superficial scale.', fontSize: '18px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'v15-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '12px', padding: '20px', borderWidth: '1px', borderColor: '#d6d3d1' },
      childrenComponents: [
        { id: 'v15-c1-title', type: 'heading', props: { content: 'Filosofi Desain', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#1c1917', margin: '0 0 4px 0' } },
        { id: 'v15-c1-desc', type: 'text', props: { content: 'Kesederhanaan yang memancarkan kemewahan abadi.', fontSize: '13px', color: '#57534e', margin: '0' } },
      ],
    },
    { id: 'v15-img', type: 'image', props: { src: '', alt: 'Editorial Vision', width: '100%', height: '480px', objectFit: 'cover', borderRadius: '0' } },
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
          <div className="mt-2 mb-4">
            {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 select-none">By Strategy Board — 12 min read</p>
        </div>
        <div className="border-2 border-stone-900 shadow-[8px_8px_0_#1c1917]">
          {renderLayoutComponents(img, sectionId)}
          <p className="text-[11px] italic text-stone-500 bg-white px-4 py-2 border-t-2 border-stone-900 select-none">Photo: strategic framework session in studio district.</p>
        </div>
      </div>
    </section>
  );
}
