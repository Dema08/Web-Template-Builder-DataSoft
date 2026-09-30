import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsCoverageCorporate
 * National distribution corridor hubs & intermodal connectivity showcase.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsCoverageCorporate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov-badge', type: 'badge', props: { content: '🗺️ Jaringan Rute Tol & Pelabuhan', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'cov-title', type: 'heading', props: { content: 'Koridor Logistik Terpadu Seluruh Kepulauan Indonesia', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cov-desc', type: 'text', props: { content: 'Konektivitas jadwal tetap menghubungkan pusat manufaktur Jawa ke Sumatera, Kalimantan, Sulawesi, hingga Papua.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'corridor-card-1',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cor-1-badge', type: 'badge', props: { content: 'Trans-Jawa Arterial', variant: 'primary', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', size: 'small' } },
        { id: 'cor-1-title', type: 'heading', props: { content: 'Koridor Tol Trans-Jawa', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'cor-1-desc', type: 'text', props: { content: 'Jakarta - Cikarang - Semarang - Surabaya - Banyuwangi. Keberangkatan FTL 12x sehari dengan lead-time 24 jam door-to-door.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'cor-1-btn', type: 'button', props: { label: 'Cek Jadwal Trans-Jawa →', href: '#contact', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#f97316', borderColor: '#f97316', fontWeight: '700' } },
      ],
    },
    {
      id: 'corridor-card-2',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cor-2-badge', type: 'badge', props: { content: 'Trans-Sumatera Linehaul', variant: 'primary', background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', size: 'small' } },
        { id: 'cor-2-title', type: 'heading', props: { content: 'Koridor Tol Trans-Sumatera', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'cor-2-desc', type: 'text', props: { content: 'Bakauheni - Palembang - Pekanbaru - Medan. Ro-Ro express prioritas dengan segel GPS continuous 36-48 jam.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'cor-2-btn', type: 'button', props: { label: 'Cek Jadwal Trans-Sumatera →', href: '#contact', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#f97316', borderColor: '#f97316', fontWeight: '700' } },
      ],
    },
    {
      id: 'corridor-card-3',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cor-3-badge', type: 'badge', props: { content: 'Intermodal Sea & IKN', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'cor-3-title', type: 'heading', props: { content: 'Koridor Kalimantan & IKN Nusantara', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'cor-3-desc', type: 'text', props: { content: 'Balikpapan Kariangau - Banjarmasin - Pontianak - Samarinda. Mendukung suplai logistik proyek nasional IKN 4x jadwal pelayaran.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'cor-3-btn', type: 'button', props: { label: 'Cek Jadwal Kalimantan & IKN →', href: '#contact', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
      ],
    },
    {
      id: 'corridor-card-4',
      type: 'card',
      props: { variant: 'service', background: '#0f223d', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cor-4-badge', type: 'badge', props: { content: 'Indonesia Timur Gateway', variant: 'primary', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'cor-4-title', type: 'heading', props: { content: 'Koridor Sulawesi & Indonesia Timur', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'cor-4-desc', type: 'text', props: { content: 'Hub Makassar - Kendari - Palu - Manado Bitung - Sorong. Pusat konsolidasi dan redistribusi logistik laut terpadu 3x jadwal mingguan.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'cor-4-btn', type: 'button', props: { label: 'Cek Jadwal Indonesia Timur →', href: '#contact', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#34d399', borderColor: '#34d399', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="coverage" className="py-24 px-4 sm:px-6 bg-[#08152a] text-white">
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
