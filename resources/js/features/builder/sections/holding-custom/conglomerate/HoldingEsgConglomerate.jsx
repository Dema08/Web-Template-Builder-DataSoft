import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingEsgConglomerate
 * Environmental, Social & Governance (ESG) Framework for conglomerate groups.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingEsgConglomerate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'esg-badge', type: 'badge', props: { content: '🌱 KEBERLANJUTAN & TATA KELOLA ESG', variant: 'primary', background: '#ecfdf5', color: '#047857', size: 'medium' } },
    { id: 'esg-title', type: 'heading', props: { content: 'Komitmen Net-Zero Carbon 2050 & Dampak Sosial Nyata', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'esg-desc', type: 'text', props: { content: 'Pilar keberlanjutan terintegrasi ke dalam setiap keputusan investasi dan operasional seluruh anak perusahaan Nusantara Holdings.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'esg-card-1',
      type: 'card',
      props: { variant: 'service', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ec1-b', type: 'badge', props: { content: 'Environmental (Lingkungan)', variant: 'primary', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'ec1-t', type: 'heading', props: { content: 'Dekarbonisasi & Energi Terbarukan', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'ec1-d', type: 'text', props: { content: 'Pengurangan emisi karbon lingkup 1 & 2 sebesar 34% per 2025 melalui konversi PLTS atap pabrik dan elektrifikasi armada pelabuhan.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'ec1-btn', type: 'button', props: { label: 'Laporan Emisi Karbon →', href: '#investor', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#34d399', borderColor: '#34d399', fontWeight: '700' } },
      ],
    },
    {
      id: 'esg-card-2',
      type: 'card',
      props: { variant: 'service', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ec2-b', type: 'badge', props: { content: 'Social (Sosial & Komunitas)', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'ec2-t', type: 'heading', props: { content: 'Pemberdayaan 120.000 Petani & Komunitas Lokal', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'ec2-d', type: 'text', props: { content: 'Program kemitraan rantai pasok inklusif, beasiswa pendidikan vokasi teknik, dan layanan kesehatan gratis di sekitar area operasional grup.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'ec2-btn', type: 'button', props: { label: 'Laporan Dampak Sosial →', href: '#investor', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
      ],
    },
    {
      id: 'esg-card-3',
      type: 'card',
      props: { variant: 'service', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ec3-b', type: 'badge', props: { content: 'Governance (Tata Kelola)', variant: 'primary', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'ec3-t', type: 'heading', props: { content: 'GCG & Anti-Bribery ISO 37001', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'ec3-d', type: 'text', props: { content: 'Penerapan whistleblowing system independen, audit kepatuhan berkala komite audit OJK, dan transparansi penuh kepada pemegang saham publik.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'ec3-btn', type: 'button', props: { label: 'Pedoman Tata Kelola GCG →', href: '#investor', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#fbbf24', borderColor: '#fbbf24', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="esg" className="py-24 px-4 sm:px-6 bg-[#061427] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
