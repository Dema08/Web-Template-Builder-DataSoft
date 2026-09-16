import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 13 — Kioso Playful Food Hero
 */
export default function Mission13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-13', type: 'badge', props: { content: '🍔 OUR YUMMY MISSION', background: '#fce7f3', color: '#db2777' } },
    { id: 'heading-13', type: 'heading', props: { content: 'Bringing smiles through mouthwatering food', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-13', type: 'text', props: { content: 'We promise fresh ingredients, fast delivery, and burgers that make your day instantly better.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-order', type: 'button', props: { label: 'Order Yum! 🍔', href: '#order', variant: 'primary', size: 'large', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'img-13', type: 'image', props: { src: '', alt: 'Food', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '32px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-2">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="rounded-[32px] overflow-hidden border border-pink-200 shadow-2xl bg-white">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
