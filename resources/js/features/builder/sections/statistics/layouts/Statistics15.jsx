import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Magazine — Statistics
 * Ala majalah: kicker + angka serif raksasa + garis kolom + byline.
 * Untuk media / publishing / blog premium.
 */
export default function Statistics15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat15-badge', type: 'badge', props: { content: 'DATA DESK — AUTUMN 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'stat15-heading', type: 'heading', props: { content: 'The year in numbers', level: 'h2', fontSize: '56px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'stat15-text', type: 'text', props: { content: 'Redaksi kami menelusuri satu tahun liputan — inilah angka yang paling banyak dibaca pembaca setia.', fontSize: '18px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat15-cta', type: 'button', props: { label: 'Read the Data Story →', href: '#story', variant: 'primary', size: 'medium', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    {
      id: 'stat15-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '2px', borderColor: '#1c1917', hoverEffect: 'none', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat15-c1-value', type: 'heading', props: { content: '120', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat15-c1-label', type: 'text', props: { content: 'Edisi Terbit', fontSize: '11px', color: '#57534e', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat15-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '2px', borderColor: '#1c1917', hoverEffect: 'none', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat15-c2-value', type: 'heading', props: { content: '2,4M', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat15-c2-label', type: 'text', props: { content: 'Pembaca Bulanan', fontSize: '11px', color: '#57534e', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat15-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '2px', borderColor: '#1c1917', hoverEffect: 'none', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat15-c3-value', type: 'heading', props: { content: '18', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat15-c3-label', type: 'text', props: { content: 'Penghargaan', fontSize: '11px', color: '#57534e', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat15-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '2px', borderColor: '#1c1917', hoverEffect: 'none', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat15-c4-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat15-c4-label', type: 'text', props: { content: 'Menit Baca Rata-rata', fontSize: '11px', color: '#57534e', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-14 px-6 bg-[#faf9f6] border-b-2 border-stone-900">
      <div className="max-w-6xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
            <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
            {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-4 select-none pointer-events-none">By Data Desk — 12 min read</p>
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {renderLayoutComponents(cards, sectionId)}
          </div>
        </div>
        <p className="text-[11px] italic text-stone-500 mt-6 select-none pointer-events-none">
          Sumber: survei pembaca internal &amp; analitik redaksi, Januari–Desember 2026.
        </p>
      </div>
    </section>
  );
}
