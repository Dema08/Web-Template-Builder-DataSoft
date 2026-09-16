import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 15 — Monocle Editorial Magazine
 */
export default function Mission15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-15', type: 'badge', props: { content: 'EDITORIAL MISSION — 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'heading-15', type: 'heading', props: { content: 'Chasing the stories that others overlook', level: 'h2', fontSize: '48px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-15', type: 'text', props: { content: 'Our editorial mission is rooted in fearless investigative journalism and profound cultural critique.', fontSize: '17px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-read', type: 'button', props: { label: 'Read Our Manifesto →', href: '#manifesto', variant: 'primary', size: 'large', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'img-15', type: 'image', props: { src: '', alt: 'Editorial', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-24 px-6 bg-[#fafaf9] overflow-hidden border-y border-stone-200" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="overflow-hidden border border-stone-300 shadow-xl bg-white">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
