import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Zen — Statistics
 * Super lega & tenang: krem, serif ringan, angka tipis tanpa border.
 * Untuk wellness / villa / skincare premium.
 */
export default function Statistics05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat5-badge', type: 'badge', props: { content: 'U B U D — B A L I', background: '#faf9f7', color: '#a8a29e' } },
    { id: 'stat5-heading', type: 'heading', props: { content: 'Quietly, the numbers grew', level: 'h2', fontSize: '52px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat5-text', type: 'text', props: { content: 'Pertumbuhan yang tidak diburu-buru — dibangun perlahan lewat ritual dan kepercayaan.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 30px 0' } },
    { id: 'stat5-cta', type: 'button', props: { label: 'Reserve Your Stay —', href: '#reserve', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
    {
      id: 'stat5-card-1',
      type: 'card',
      props: { variant: 'stat', background: 'transparent', borderRadius: '0px', shadow: 'none', borderWidth: '0px', hoverEffect: 'none', padding: '28px 16px' },
      childrenComponents: [
        { id: 'stat5-c1-value', type: 'heading', props: { content: '24', level: 'h3', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 10px 0' } },
        { id: 'stat5-c1-label', type: 'text', props: { content: 'Private Suites', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat5-card-2',
      type: 'card',
      props: { variant: 'stat', background: 'transparent', borderRadius: '0px', shadow: 'none', borderWidth: '0px', hoverEffect: 'none', padding: '28px 16px' },
      childrenComponents: [
        { id: 'stat5-c2-value', type: 'heading', props: { content: '8.000+', level: 'h3', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 10px 0' } },
        { id: 'stat5-c2-label', type: 'text', props: { content: 'Tamu Menginap', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat5-card-3',
      type: 'card',
      props: { variant: 'stat', background: 'transparent', borderRadius: '0px', shadow: 'none', borderWidth: '0px', hoverEffect: 'none', padding: '28px 16px' },
      childrenComponents: [
        { id: 'stat5-c3-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 10px 0' } },
        { id: 'stat5-c3-label', type: 'text', props: { content: 'Guest Rating', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat5-card-4',
      type: 'card',
      props: { variant: 'stat', background: 'transparent', borderRadius: '0px', shadow: 'none', borderWidth: '0px', hoverEffect: 'none', padding: '28px 16px' },
      childrenComponents: [
        { id: 'stat5-c4-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 10px 0' } },
        { id: 'stat5-c4-label', type: 'text', props: { content: 'Tahun Mengabdi', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-28 px-6 bg-[#faf9f7]">
      <div className="max-w-5xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="max-w-3xl mx-auto text-center">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-6">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          <div className="flex items-center justify-center gap-2 my-4">
            <div className="w-12 h-px bg-stone-300" />
            <div className="w-1.5 h-1.5 rotate-45 bg-stone-400" />
            <div className="w-12 h-px bg-stone-300" />
          </div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex justify-center">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-10 divide-x divide-stone-200">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <p className="text-center text-[11px] tracking-[0.5em] text-stone-400 mt-10 select-none pointer-events-none">
          S L O W &nbsp; M O R N I N G S
        </p>
      </div>
    </section>
  );
}
