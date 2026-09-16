import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 04 — PAPERCUT Brutalist Statement
 * Mirrors Hero04 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v4-badge', type: 'badge', props: { content: '★ VISION 2026 STATEMENT', background: '#000000', color: '#facc15' } },
    { id: 'v4-heading', type: 'heading', props: { content: 'WE BUILD BOLD VISIONS', level: 'h2', fontSize: '64px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'v4-text', type: 'text', props: { content: 'Pendekatan anti-mainstream. Kami merumuskan visi perusahaan yang radikal, berani, dan berdampak masif.', fontSize: '17px', color: '#000000', align: 'left', margin: '0 0 26px 0' } },
    {
      id: 'v4-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', borderWidth: '3px', borderColor: '#000000', shadow: '5px_5px_0_#000', padding: '20px' },
      childrenComponents: [
        { id: 'v4-c1-title', type: 'heading', props: { content: 'Radikal & Berani', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0' } },
        { id: 'v4-c1-desc', type: 'text', props: { content: 'Dobrak batas konvensional industri.', fontSize: '14px', color: '#000000', margin: '0' } },
      ],
    },
    {
      id: 'v4-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', borderWidth: '3px', borderColor: '#000000', shadow: '5px_5px_0_#000', padding: '20px' },
      childrenComponents: [
        { id: 'v4-c2-title', type: 'heading', props: { content: 'Dampak Nyata', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#000000', margin: '0 0 6px 0' } },
        { id: 'v4-c2-desc', type: 'text', props: { content: 'Hasil terukur yang mengubah peta pasar.', fontSize: '14px', color: '#000000', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-[#facc15] border-b-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-block border-[3px] border-black rounded-xl bg-white px-3 py-1 shadow-[4px_4px_0_#000] -rotate-1">
            {renderLayoutComponents(badge, sectionId)}
          </div>
          <div className="mt-5 bg-white border-[3px] border-black rounded-2xl p-6 shadow-[8px_8px_0_#000] rotate-[0.5deg]">
            {renderLayoutComponents(heading, sectionId)}
            {renderLayoutComponents(text, sectionId)}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {renderLayoutComponents(cards, sectionId)}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[['100%', 'Visi Utama'], ['24/7', 'Dedikasi'], ['01', 'Pionir'], ['∞', 'Inovasi']].map(([v, l]) => (
            <div key={l} className="bg-white border-[3px] border-black rounded-2xl p-5 shadow-[5px_5px_0_#000] text-center hover:rotate-2 transition-transform">
              <p className="text-3xl font-black">{v}</p>
              <p className="text-xs font-bold uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
