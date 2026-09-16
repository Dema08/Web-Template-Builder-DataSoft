import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 16 — EMERALD Eco Shop Services
 * Mirrors Hero16 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services16({ components = [], sectionId = null }) {
  const [filter, setFilter] = useState('All');

  const defaultComponents = [
    { id: 'srv16-badge', type: 'badge', props: { content: '🌿 100% Natural & Vegan Services', background: '#dcfce7', color: '#15803d' } },
    { id: 'srv16-heading', type: 'heading', props: { content: 'Botanical skin wellness services', level: 'h2', fontSize: '54px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 14px 0' } },
    { id: 'srv16-text', type: 'text', props: { content: 'Serum, oils & facial rituals crafted from botanicals — carbon-neutral from farm to door.', fontSize: '17px', color: '#4d7c0f', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'srv16-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv16-c1-icon', type: 'icon', props: { icon: 'FaSeedling', size: '32px', color: '#16a34a', align: 'left' } },
        { id: 'srv16-c1-title', type: 'heading', props: { content: 'Organic Facials', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#052e16', margin: '12px 0 6px 0' } },
        { id: 'srv16-c1-desc', type: 'text', props: { content: 'Rejuvenating skin care with pure plant extracts.', fontSize: '14px', color: '#4d7c0f', margin: '0' } },
      ],
    },
    {
      id: 'srv16-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv16-c2-icon', type: 'icon', props: { icon: 'FaSpa', size: '32px', color: '#16a34a', align: 'left' } },
        { id: 'srv16-c2-title', type: 'heading', props: { content: 'Botanical Consultation', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#052e16', margin: '12px 0 6px 0' } },
        { id: 'srv16-c2-desc', type: 'text', props: { content: 'Personalized skin wellness regimes.', fontSize: '14px', color: '#4d7c0f', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-lime-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex gap-2 mb-5" onClick={(e) => e.stopPropagation()}>
            {['All', 'Facials', 'Oils', 'Consult'].map(f => (
              <button
                key={f}
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setFilter(f); }}
                className={`text-xs font-bold rounded-full px-4 py-1.5 transition-all select-none ${filter === f ? 'bg-emerald-600 text-white shadow' : 'bg-white text-emerald-700 border border-emerald-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
