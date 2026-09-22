import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AURORA — Centered Card Grid
 * Grid armada modern dengan orb gradient glow, badge pill, kartu beranimasi hover dan statistik ringkas.
 * Cocok untuk ekosistem logistik modern & SaaS fulfillment.
 */
export default function Fleet01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'flt1-badge',
      type: 'badge',
      props: { content: '✦ Ekosistem Transportasi & Distribusi Terpadu', background: '#eef2ff', color: '#4f46e5' },
    },
    {
      id: 'flt1-heading',
      type: 'heading',
      props: { content: 'Armada & Fasilitas Transportasi Unggulan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'flt1-subtext',
      type: 'text',
      props: { content: 'Armada angkutan darat, laut, dan udara siap melayani kebutuhan pengiriman barang skala nasional dan global dengan efisiensi tinggi.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'flt1-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'flt1-c1-icon', type: 'icon', props: { icon: 'FaTruck', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'flt1-c1-title', type: 'heading', props: { content: 'Truk Tronton & Container', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'flt1-c1-desc', type: 'text', props: { content: 'Armada angkutan berat 40ft antar kota dan pulau dengan teknologi GPS tracking real-time 24 jam.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'flt1-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'flt1-c2-icon', type: 'icon', props: { icon: 'FaShip', size: '36px', color: '#06b6d4', align: 'left' } },
        { id: 'flt1-c2-title', type: 'heading', props: { content: 'Kapal Cargo Nusantara', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'flt1-c2-desc', type: 'text', props: { content: 'Layanan kontainer laut efisien untuk muatan curah dan kargo besar ke seluruh pelabuhan strategis.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'flt1-card-3',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'flt1-c3-icon', type: 'icon', props: { icon: 'FaPlane', size: '36px', color: '#a855f7', align: 'left' } },
        { id: 'flt1-c3-title', type: 'heading', props: { content: 'Air Cargo Express', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'flt1-c3-desc', type: 'text', props: { content: 'Pengiriman kilat jalur udara prioritas dengan garansi sampai di hari yang sama untuk kota-kota utama.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading' && c.id === 'flt1-heading');
  const subtext = layoutComponents.filter(c => c.type === 'text' && c.id === 'flt1-subtext');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');
  const otherComponents = layoutComponents.filter(c => 
    c.type !== 'badge' && 
    c.id !== 'flt1-heading' && 
    c.id !== 'flt1-subtext' && 
    c.type !== 'card'
  );

  return (
    <section className="relative py-24 px-6 bg-slate-50/50 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Background Aurora Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-br from-indigo-200/50 via-purple-200/40 to-cyan-200/50 blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        {/* Header Area */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-4">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading.length > 0 ? heading : layoutComponents.filter(c => c.type === 'heading').slice(0, 1), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(subtext.length > 0 ? subtext : layoutComponents.filter(c => c.type === 'text').slice(0, 1), sectionId)}</div>
          {otherComponents.length > 0 && renderLayoutComponents(otherComponents, sectionId)}
        </div>

        {/* 3 Column Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>

        {/* Aurora Footer Stat Badges */}
        <div className="pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>500+ Armada Aktif 24/7</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <span>99.8% On-Time Delivery Rate</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Terintegrasi GPS & IoT Sensor</span>
          </div>
        </div>
      </div>
    </section>
  );
}