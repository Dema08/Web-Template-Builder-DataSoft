import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Magazine Products
 * Ala koran: serif + garis ganda + list produk.
 */
export default function Products15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod15-badge', type: 'badge', props: { content: 'EDISI No. 128 — KURASI', background: '#0f172a', color: '#ffffff' } },
    { id: 'prod15-heading', type: 'heading', props: { content: 'Pilihan Editor Minggu Ini', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod15-text', type: 'text', props: { content: 'Dikurasi redaksi dari 200+ produk yang kami uji.', fontSize: '15px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod15-cta', type: 'button', props: { label: 'Baca Ulasan →', href: '#ulasan', variant: 'outline', size: 'medium', radius: 'none', background: '#0f172a', color: '#0f172a' } },
    {
      id: 'prod15-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod15-c1-image', type: 'image', props: { src: '', alt: 'Kopi', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod15-c1-title', type: 'heading', props: { content: '01 — Kopi Gayo Wine', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0' } },
        { id: 'prod15-c1-price', type: 'heading', props: { content: 'Rp 185rb — Skor 9.6', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#b45309', margin: '4px 0 0 0', padding: '0' } },
        { id: 'prod15-c1-btn', type: 'button', props: { label: 'Beli →', href: '#beli', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'prod15-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod15-c2-image', type: 'image', props: { src: '', alt: 'Parfum', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod15-c2-title', type: 'heading', props: { content: '02 — Parfum Hujan', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0' } },
        { id: 'prod15-c2-price', type: 'heading', props: { content: 'Rp 450rb — Skor 9.4', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#b45309', margin: '4px 0 0 0', padding: '0' } },
        { id: 'prod15-c2-btn', type: 'button', props: { label: 'Beli →', href: '#beli', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'prod15-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod15-c3-image', type: 'image', props: { src: '', alt: 'Batuk', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod15-c3-title', type: 'heading', props: { content: '03 — Batik Tulis Solo', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0' } },
        { id: 'prod15-c3-price', type: 'heading', props: { content: 'Rp 1.2jt — Skor 9.8', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#b45309', margin: '4px 0 0 0', padding: '0' } },
        { id: 'prod15-c3-btn', type: 'button', props: { label: 'Beli →', href: '#beli', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-[#fafaf9]" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between text-[11px] tracking-widest text-stone-500 border-b border-stone-300 pb-2 mb-6 select-none pointer-events-none"><span>MONOCLE — KURASI</span><span>EDISI MINGGUAN</span></div>
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 max-w-2xl">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="border-y-4 border-double border-stone-800 py-2 my-4 max-w-2xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        {renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
