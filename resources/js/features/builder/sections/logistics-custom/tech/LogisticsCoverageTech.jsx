import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsCoverageTech
 * Metro city hubs & smart micro-fulfillment centers.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsCoverageTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tcov-badge', type: 'badge', props: { content: '📍 JANGKAUAN METROPOLITAN & KOTA BESAR', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'medium' } },
    { id: 'tcov-title', type: 'heading', props: { content: '250+ Micro-Hub di 32 Kota Utama Indonesia', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tcov-desc', type: 'text', props: { content: 'Jaringan pos transit terdistribusi memastikan kurir dapat menjangkau titik penjemputan dalam waktu kurang dari 15 menit.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'tc-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tc1-b', type: 'badge', props: { content: 'Jabodetabek Super-Hub', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'small' } },
        { id: 'tc1-t', type: 'heading', props: { content: 'DKI Jakarta, Bogor, Depok, Tangerang & Bekasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '14px 0 8px 0' } },
        { id: 'tc1-d', type: 'text', props: { content: '120 Micro-Hub dengan SLA Instant 1 Jam & Same-Day 4-6 Jam. Armada EV siaga 24 jam nonstop.', fontSize: '13px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'tc1-btn', type: 'button', props: { label: 'Cek Coverage Jabodetabek →', href: '#pricing', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#0284c7', borderColor: '#0284c7', fontWeight: '700' } },
      ],
    },
    {
      id: 'tc-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tc2-b', type: 'badge', props: { content: 'Jawa Barat & Tengah', variant: 'primary', background: '#ecfdf5', color: '#059669', size: 'small' } },
        { id: 'tc2-t', type: 'heading', props: { content: 'Bandung Raya, Semarang & Solo', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '14px 0 8px 0' } },
        { id: 'tc2-d', type: 'text', props: { content: '48 Hub perkotaan dengan rute antar-kota express same-day tiba di hari yang sama sebelum jam 21:00 WIB.', fontSize: '13px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'tc2-btn', type: 'button', props: { label: 'Cek Coverage Jabar & Jateng →', href: '#pricing', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#059669', borderColor: '#059669', fontWeight: '700' } },
      ],
    },
    {
      id: 'tc-card-3',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tc3-b', type: 'badge', props: { content: 'Jawa Timur & Bali', variant: 'primary', background: '#fdf4ff', color: '#c026d3', size: 'small' } },
        { id: 'tc3-t', type: 'heading', props: { content: 'Surabaya Raya, Malang & Denpasar', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '14px 0 8px 0' } },
        { id: 'tc3-d', type: 'text', props: { content: '52 Hub dengan integrasi merchant kuliner online & UMKM pengrajin kargo express same-day & next-day.', fontSize: '13px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'tc3-btn', type: 'button', props: { label: 'Cek Coverage Jatim & Bali →', href: '#pricing', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#c026d3', borderColor: '#c026d3', fontWeight: '700' } },
      ],
    },
    {
      id: 'tc-card-4',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tc4-b', type: 'badge', props: { content: 'Luar Jawa Metro', variant: 'primary', background: '#fef3c7', color: '#d97706', size: 'small' } },
        { id: 'tc4-t', type: 'heading', props: { content: 'Medan, Palembang, Makassar & Balikpapan', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '14px 0 8px 0' } },
        { id: 'tc4-d', type: 'text', props: { content: 'Pusat distribusi kargo udara kilat terhubung langsung dengan penerbangan pagi CGK untuk next-day delivery.', fontSize: '13px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'tc4-btn', type: 'button', props: { label: 'Cek Coverage Luar Jawa →', href: '#pricing', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#d97706', borderColor: '#d97706', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="coverage" className="py-24 px-4 sm:px-6 bg-white text-slate-800 relative">
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
