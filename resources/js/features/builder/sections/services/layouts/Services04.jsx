import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 04 — PAPERCUT Brutalist Statement
 * Mirrors Hero04 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv4-badge', type: 'badge', props: { content: '★ SERVICES 2026', background: '#000000', color: '#facc15' } },
    { id: 'srv4-heading', type: 'heading', props: { content: 'LOUD DIGITAL SERVICES', level: 'h2', fontSize: '64px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'srv4-text', type: 'text', props: { content: 'Layanan anti-template. Kami bikin web dan sistem yang berisik, berani, dan tidak terlupakan.', fontSize: '17px', color: '#000000', align: 'left', margin: '0 0 26px 0' } },
    {
      id: 'srv4-card-1',
      type: 'card',
      props: { variant: 'service-brutalist', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', padding: '24px' },
      childrenComponents: [
        { id: 'srv4-c1-icon', type: 'icon', props: { icon: 'FaBolt', size: '32px', color: '#000000', align: 'left' } },
        { id: 'srv4-c1-title', type: 'heading', props: { content: 'BRUTAL BRANDING', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '12px 0 6px 0' } },
        { id: 'srv4-c1-desc', type: 'text', props: { content: 'Identitas visual menonjol yang langsung mencuri perhatian pasar.', fontSize: '14px', color: '#000000', margin: '0' } },
      ],
    },
    {
      id: 'srv4-card-2',
      type: 'card',
      props: { variant: 'service-brutalist', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', padding: '24px' },
      childrenComponents: [
        { id: 'srv4-c2-icon', type: 'icon', props: { icon: 'FaLaptopCode', size: '32px', color: '#000000', align: 'left' } },
        { id: 'srv4-c2-title', type: 'heading', props: { content: 'RAW WEB DEV', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '12px 0 6px 0' } },
        { id: 'srv4-c2-desc', type: 'text', props: { content: 'Situs web performa tinggi anti-membosankan.', fontSize: '14px', color: '#000000', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-[#facc15] border-b-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-block border-[3px] border-black rounded-xl bg-white px-3 py-1 shadow-[4px_4px_0_#000] -rotate-1">
            {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          </div>
          <div className="mt-5 bg-white border-[3px] border-black rounded-2xl p-6 shadow-[8px_8px_0_#000] rotate-[0.5deg]">
            {renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}
            {renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
