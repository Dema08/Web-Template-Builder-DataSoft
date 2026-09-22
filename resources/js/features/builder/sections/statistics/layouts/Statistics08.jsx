import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Centered Floral — Statistics
 * Logo bunga + headline serif + kartu pink arch. Feminin elegan
 * untuk wedding / spa / hospitality.
 */
export default function Statistics08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat8-badge', type: 'badge', props: { content: '🌸 Spring Season 2026', background: '#fce7f3', color: '#be185d' } },
    { id: 'stat8-heading', type: 'heading', props: { content: 'Every number tells a love story', level: 'h2', fontSize: '52px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat8-text', type: 'text', props: { content: 'Ribuan momen bahagia yang kami rangkai bersama keluarga dan pasangan di jantung kota.', fontSize: '17px', color: '#9d7b8c', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat8-cta', type: 'button', props: { label: 'Book Consultation ♡', href: '#book', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    {
      id: 'stat8-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#fff1f5', borderRadius: '200px 200px 24px 24px', shadow: 'sm', borderWidth: '1px', borderColor: '#fbcfe8', hoverEffect: 'lift', padding: '36px 20px 28px' },
      childrenComponents: [
        { id: 'stat8-c1-value', type: 'heading', props: { content: '1.200+', level: 'h3', fontSize: '40px', fontWeight: '700', color: '#be185d', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat8-c1-label', type: 'text', props: { content: 'Wedding Terselenggara', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat8-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#fff1f5', borderRadius: '200px 200px 24px 24px', shadow: 'sm', borderWidth: '1px', borderColor: '#fbcfe8', hoverEffect: 'lift', padding: '36px 20px 28px' },
      childrenComponents: [
        { id: 'stat8-c2-value', type: 'heading', props: { content: '320', level: 'h3', fontSize: '40px', fontWeight: '700', color: '#be185d', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat8-c2-label', type: 'text', props: { content: 'Event Privat', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat8-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#fff1f5', borderRadius: '200px 200px 24px 24px', shadow: 'sm', borderWidth: '1px', borderColor: '#fbcfe8', hoverEffect: 'lift', padding: '36px 20px 28px' },
      childrenComponents: [
        { id: 'stat8-c3-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '40px', fontWeight: '700', color: '#be185d', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat8-c3-label', type: 'text', props: { content: 'Rating Pasangan', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat8-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#fff1f5', borderRadius: '200px 200px 24px 24px', shadow: 'sm', borderWidth: '1px', borderColor: '#fbcfe8', hoverEffect: 'lift', padding: '36px 20px 28px' },
      childrenComponents: [
        { id: 'stat8-c4-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '40px', fontWeight: '700', color: '#be185d', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat8-c4-label', type: 'text', props: { content: 'Tahun Berkarya', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fff1f5] via-white to-white overflow-hidden">
      <div className="max-w-6xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="max-w-3xl mx-auto text-center">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-5">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex justify-center mt-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <p className="text-center text-lg text-pink-300 mt-8 select-none pointer-events-none">❀ &nbsp; ❀ &nbsp; ❀</p>
      </div>
    </section>
  );
}
