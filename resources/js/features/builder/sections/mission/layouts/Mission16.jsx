import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 16 — Emerald Eco Shop Hero
 */
export default function Mission16({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-16', type: 'badge', props: { content: '🌿 SUSTAINABILITY MISSION', background: '#dcfce7', color: '#15803d' } },
    { id: 'heading-16', type: 'heading', props: { content: 'Pure botanicals for a regenerative future', level: 'h2', fontSize: '46px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-16', type: 'text', props: { content: 'We formulate 100% natural skin rituals that respect both your skin and the planetary ecosystem.', fontSize: '17px', color: '#4d7c0f', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-shop', type: 'button', props: { label: 'Explore Our Standards →', href: '#standards', variant: 'primary', size: 'large', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'img-16', type: 'image', props: { src: '', alt: 'Eco', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '24px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-2">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-emerald-200 shadow-xl bg-white">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
