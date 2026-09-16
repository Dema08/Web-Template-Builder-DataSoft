import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 09 — GOLDLEAF Heritage Gold
 * Mirrors Hero09 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v9-badge', type: 'badge', props: { content: '✦ HERITAGE VISION 1987', background: '#fef3c7', color: '#92400e' } },
    { id: 'v9-heading', type: 'heading', props: { content: 'A legacy of vision cast in gold', level: 'h2', fontSize: '60px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v9-text', type: 'text', props: { content: 'Three decades of artisanal mastery — translating timeless heritage into future-proof strategic dominance.', fontSize: '17px', color: '#92600e', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'v9-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', padding: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fde68a' },
      childrenComponents: [
        { id: 'v9-c1-title', type: 'heading', props: { content: 'Keahlian Turun-Temurun', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 6px 0' } },
        { id: 'v9-c1-desc', type: 'text', props: { content: 'Menjaga kemurnian kualitas dalam setiap langkah strategis.', fontSize: '14px', color: '#92600e', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'v9-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', padding: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fde68a' },
      childrenComponents: [
        { id: 'v9-c2-title', type: 'heading', props: { content: 'Prestise Global', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 6px 0' } },
        { id: 'v9-c2-desc', type: 'text', props: { content: 'Diakui oleh kalangan elit dan institusi terkemuka dunia.', fontSize: '14px', color: '#92600e', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-white">
      <div className="max-w-4xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500" />
          {renderLayoutComponents(badge, sectionId)}
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500" />
        </div>
        {renderLayoutComponents(heading, sectionId)}
        {renderLayoutComponents(text, sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center justify-center gap-8 mt-10 text-amber-900">
          {[['38', 'Tahun Dedikasi'], ['12', 'Aliansi Global'], ['40k', 'Mitra Setia']].map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="text-3xl font-bold">{v}</p>
              <p className="text-[11px] tracking-[0.3em] uppercase">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
