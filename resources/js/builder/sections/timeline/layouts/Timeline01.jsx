import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Timeline01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'tml1-badge',
      type: 'badge',
      props: { content: 'PERJALANAN KAMI', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'tml1-heading',
      type: 'heading',
      props: { content: 'Jejak Langkah & Sejarah', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'tml1-subtext',
      type: 'text',
      props: { content: 'Perjalanan panjang kami dalam membangun solusi terbaik dari masa ke masa', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'tml1-card-1',
      type: 'card',
      props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'tml1-c1-year', type: 'badge', props: { content: '2015', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
        { id: 'tml1-c1-title', type: 'heading', props: { content: 'Perusahaan Didirikan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'tml1-c1-desc', type: 'text', props: { content: 'Berawal dari 3 pendiri dengan visi besar menyediakan solusi teknologi tepercaya.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tml1-card-2',
      type: 'card',
      props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'tml1-c2-year', type: 'badge', props: { content: '2018', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
        { id: 'tml1-c2-title', type: 'heading', props: { content: 'Ekspansi Nasional', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'tml1-c2-desc', type: 'text', props: { content: 'Membuka cabang di 5 kota besar dan melayani lebih dari 100 perusahaan.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tml1-card-3',
      type: 'card',
      props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'tml1-c3-year', type: 'badge', props: { content: '2021', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
        { id: 'tml1-c3-title', type: 'heading', props: { content: 'Inovasi Cloud Enterprise', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'tml1-c3-desc', type: 'text', props: { content: 'Peluncuran platform cloud enterprise generasi baru berbasis otomasi AI.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tml1-card-4',
      type: 'card',
      props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'tml1-c4-year', type: 'badge', props: { content: '2024', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
        { id: 'tml1-c4-title', type: 'heading', props: { content: 'Pemimpin Pasar Industri', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'tml1-c4-desc', type: 'text', props: { content: 'Diakui sebagai penyedia solusi terdepan dengan kepuasan pelanggan 99%.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}