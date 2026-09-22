import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * GOLDLEAF — Heritage Gold — Statistics
 * Krem + emas + ornamen klasik. Untuk hotel, perhiasan,
 * brand heritage yang timeless.
 */
export default function Statistics09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat9-badge', type: 'badge', props: { content: '✦ SINCE 1987', background: '#fef3c7', color: '#92400e' } },
    { id: 'stat9-heading', type: 'heading', props: { content: 'A legacy cast in gold', level: 'h2', fontSize: '56px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat9-text', type: 'text', props: { content: 'Tiga generasi craftsmanship — angka yang tercatat rapi dari butik heritage hingga koleksi privat dunia.', fontSize: '17px', color: '#92600e', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat9-cta', type: 'button', props: { label: '✦ Visit Boutique', href: '#visit', variant: 'primary', size: 'medium', radius: 'full', background: '#b45309', color: '#fffbeb' } },
    {
      id: 'stat9-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px 20px' },
      childrenComponents: [
        { id: 'stat9-c1-value', type: 'heading', props: { content: '38', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat9-c1-label', type: 'text', props: { content: 'Years', fontSize: '12px', color: '#92600e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat9-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px 20px' },
      childrenComponents: [
        { id: 'stat9-c2-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat9-c2-label', type: 'text', props: { content: 'Boutiques', fontSize: '12px', color: '#92600e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat9-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px 20px' },
      childrenComponents: [
        { id: 'stat9-c3-value', type: 'heading', props: { content: '40K', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat9-c3-label', type: 'text', props: { content: 'Patrons', fontSize: '12px', color: '#92600e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat9-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px 20px' },
      childrenComponents: [
        { id: 'stat9-c4-value', type: 'heading', props: { content: '3', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat9-c4-label', type: 'text', props: { content: 'Generations', fontSize: '12px', color: '#92600e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-white">
      <div className="max-w-6xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500" />
            {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          {renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap justify-center gap-3 mt-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center justify-center gap-3 mt-10 select-none pointer-events-none">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
          <div className="w-2 h-2 rotate-45 bg-amber-500" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
        </div>
      </div>
    </section>
  );
}
