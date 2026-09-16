import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TRANSGO — Logistics Split Products
 * Split oranye logistik + kartu armada produk.
 */
export default function Products03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod3-badge', type: 'badge', props: { content: '● Armada Live', background: '#fff7ed', color: '#ea580c' } },
    { id: 'prod3-heading', type: 'heading', props: { content: 'Layanan Logistik Unggulan', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod3-text', type: 'text', props: { content: 'Darat, laut, udara — satu pintu, tracking real-time.', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod3-cta', type: 'button', props: { label: 'Lacak Kiriman →', href: '#tracking', variant: 'primary', size: 'medium', radius: 'md', background: '#ea580c', color: '#ffffff' } },
    {
      id: 'prod3-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod3-c1-image', type: 'image', props: { src: '', alt: 'Express Darat', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod3-c1-title', type: 'heading', props: { content: 'Express Darat', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c1-price', type: 'heading', props: { content: 'Mulai Rp 15rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#ea580c', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c1-desc', type: 'text', props: { content: 'Same-day antar kota dengan armada 2.400 unit.', fontSize: '13px', color: '#64748b', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod3-c1-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'md', background: '#ea580c', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod3-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod3-c2-image', type: 'image', props: { src: '', alt: 'Cargo Laut', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod3-c2-title', type: 'heading', props: { content: 'Cargo Laut', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c2-price', type: 'heading', props: { content: 'Mulai Rp 45rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#ea580c', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c2-desc', type: 'text', props: { content: 'Kontainer FCL/LCL ke 120 pelabuhan.', fontSize: '13px', color: '#64748b', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod3-c2-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'md', background: '#ea580c', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod3-card-3', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '16px', shadow: 'lg', borderWidth: '0', borderColor: '#0f172a', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod3-c3-image', type: 'image', props: { src: '', alt: 'Air Priority', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod3-c3-title', type: 'heading', props: { content: 'Air Priority', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c3-price', type: 'heading', props: { content: 'Mulai Rp 95rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#fdba74', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c3-desc', type: 'text', props: { content: 'Next-flight-out, garansi 24 jam tiba.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod3-c3-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'md', background: '#ffffff', color: '#0f172a' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-orange-50 border-y-4 border-orange-500">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
        <div>
          {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}
          <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="mt-6 rounded-xl bg-slate-900 text-white text-xs font-bold px-4 py-3 flex items-center gap-2 select-none">🚚 2.418 armada aktif <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /></div>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
