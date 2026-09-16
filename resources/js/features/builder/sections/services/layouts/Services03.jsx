import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 03 — TRANSGO Logistics Split
 * Mirrors Hero03 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv3-badge', type: 'badge', props: { content: '🚚 500+ Armada Aktif', background: '#fff7ed', color: '#ea580c' } },
    { id: 'srv3-heading', type: 'heading', props: { content: 'Moving logistics forward, across Indonesia', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'srv3-text', type: 'text', props: { content: 'Armada darat, laut, dan udara dengan tracking real-time. On-time rate 99.8% ke 50+ kota.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    {
      id: 'srv3-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv3-c1-icon', type: 'icon', props: { icon: 'FaTruck', size: '32px', color: '#f97316', align: 'left' } },
        { id: 'srv3-c1-title', type: 'heading', props: { content: 'Pengiriman Darat Ekspres', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv3-c1-desc', type: 'text', props: { content: 'Truking dan van antar kota terjadwal dengan GPS tracking.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv3-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv3-c2-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#f97316', align: 'left' } },
        { id: 'srv3-c2-title', type: 'heading', props: { content: 'Kargo Laut & Pelabuhan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv3-c2-desc', type: 'text', props: { content: 'Muatan kontainer skala besar antar pulau dengan tarif kompetitif.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="flex items-center gap-6 mt-6">
            <div><p className="text-2xl font-black text-slate-900">99.8%</p><p className="text-xs text-slate-500">On-time</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">50+</p><p className="text-xs text-slate-500">Kota</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">24/7</p><p className="text-xs text-slate-500">Support</p></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
