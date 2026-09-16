import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 19 — Lumière Agency Portfolio
 */
export default function Mission19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-19', type: 'badge', props: { content: '✦ AGENCY MISSION', background: '#ecfdf5', color: '#059669' } },
    { id: 'heading-19', type: 'heading', props: { content: 'Crafting unforgettable brand narratives', level: 'h2', fontSize: '50px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-19', type: 'text', props: { content: 'We believe every brand has a unique soul. Our mission is to translate that soul into world-class digital experiences.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-work', type: 'button', props: { label: 'Explore Our Process →', href: '#process', variant: 'primary', size: 'large', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-19', type: 'image', props: { src: '', alt: 'Agency', width: '100%', height: '360px', objectFit: 'cover', borderRadius: '20px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
