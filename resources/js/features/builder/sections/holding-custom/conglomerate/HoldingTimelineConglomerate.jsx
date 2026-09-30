import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingTimelineConglomerate
 * Corporate genesis and historical growth milestones.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingTimelineConglomerate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'time-badge', type: 'badge', props: { content: '📜 35+ TAHUN PERJALANAN KORPORASI', variant: 'primary', background: '#fffbeb', color: '#b45309', size: 'medium' } },
    { id: 'time-title', type: 'heading', props: { content: 'Tonggak Sejarah & Transformasi Strategis', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'time-desc', type: 'text', props: { content: 'Dari perintis perdagangan komoditas nasional hingga menjadi salah satu konglomerasi paling bernilai di Asia Tenggara.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'mile-card-1',
      type: 'card',
      props: { variant: 'timeline', background: '#091b33', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'mc1-yr', type: 'badge', props: { content: 'TAHUN 1988', variant: 'primary', background: '#d97706', color: '#ffffff', size: 'small' } },
        { id: 'mc1-t', type: 'heading', props: { content: 'Pendirian & Perintisan Usaha', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'mc1-d', type: 'text', props: { content: 'Didirikan sebagai entitas perdagangan logistik dan perkebunan terintegrasi di Jakarta.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'mile-card-2',
      type: 'card',
      props: { variant: 'timeline', background: '#091b33', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'mc2-yr', type: 'badge', props: { content: 'TAHUN 2002', variant: 'primary', background: '#d97706', color: '#ffffff', size: 'small' } },
        { id: 'mc2-t', type: 'heading', props: { content: 'Penawaran Umum Perdana (IPO IDX)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'mc2-d', type: 'text', props: { content: 'Resmi melantai di Bursa Efek Indonesia dengan oversubscribed 8.5x untuk ekspansi infrastruktur pelabuhan.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'mile-card-3',
      type: 'card',
      props: { variant: 'timeline', background: '#091b33', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'mc3-yr', type: 'badge', props: { content: 'TAHUN 2016', variant: 'primary', background: '#d97706', color: '#ffffff', size: 'small' } },
        { id: 'mc3-t', type: 'heading', props: { content: 'Diversifikasi Energi & Fintech', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'mc3-d', type: 'text', props: { content: 'Akuisisi strategis aset pembangkit listrik terbarukan dan peluncuran unit pembiayaan digital korporasi.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'mile-card-4',
      type: 'card',
      props: { variant: 'timeline', background: '#091b33', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'mc4-yr', type: 'badge', props: { content: 'TAHUN 2026', variant: 'primary', background: '#d97706', color: '#ffffff', size: 'small' } },
        { id: 'mc4-t', type: 'heading', props: { content: 'Era Hilirisasi Hijau & Global Net-Zero', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'mc4-d', type: 'text', props: { content: 'Komitmen investasi $1.5 Miliar untuk ekosistem rantai pasok baterai EV dan target dekarbonisasi 2050.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#051325] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
