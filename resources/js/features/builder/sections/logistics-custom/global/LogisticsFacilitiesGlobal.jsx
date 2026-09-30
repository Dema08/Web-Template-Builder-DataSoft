import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFacilitiesGlobal
 * Bonded Logistics Centers (PLB), Cold Storage, and Air Cargo Terminals.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsFacilitiesGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'fac-badge', type: 'badge', props: { content: '🏛️ BONDED LOGISTICS HUBS & COLD STORAGE', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'fac-title', type: 'heading', props: { content: 'Fasilitas Pergudangan Berikat & Logistik Khusus', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 12px 0' } },
    { id: 'fac-desc', type: 'text', props: { content: 'Infrastruktur pergudangan modern berstandar internasional dengan status Pusat Logistik Berikat (PLB) bebas bea transit hingga 3 tahun.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'fac-card-1',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fc1-b', type: 'badge', props: { content: 'Kawasan Berikat Bebas Pajak', variant: 'primary', background: 'rgba(231, 200, 115, 0.15)', color: '#e7c873', size: 'small' } },
        { id: 'fc1-t', type: 'heading', props: { content: 'Pusat Logistik Berikat (PLB) Cikarang & Marunda', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'fc1-d', type: 'text', props: { content: 'Kapasitas 45.000 m² dengan penundaan bea masuk, PPN tidak dipungut, dan integrasi sistem inventori Ceisa Bea Cukai real-time.', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'fc1-btn', type: 'button', props: { label: 'Sewa Ruang Berikat →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#e7c873', borderColor: '#e7c873', fontWeight: '700' } },
      ],
    },
    {
      id: 'fac-card-2',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fc2-b', type: 'badge', props: { content: 'WHO-GDP Certified', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'fc2-t', type: 'heading', props: { content: 'Pharma & Vaccine Ultra-Cold Storage (-80°C s/d +25°C)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'fc2-d', type: 'text', props: { content: 'Fasilitas cleanroom bertekanan positif, backup genset ganda 100%, dan perekam suhu kontinu per 30 detik bersertifikat BPOM.', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'fc2-btn', type: 'button', props: { label: 'Lihat Sertifikasi Cold Storage →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
      ],
    },
    {
      id: 'fac-card-3',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fc3-b', type: 'badge', props: { content: 'Air Cargo Terminal Airside', variant: 'primary', background: 'rgba(74, 222, 128, 0.15)', color: '#4ade80', size: 'small' } },
        { id: 'fc3-t', type: 'heading', props: { content: 'Dedicated Air Cargo Village Soekarno-Hatta (CGK)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'fc3-d', type: 'text', props: { content: 'Akses langsung ke apron bandara, mesin X-Ray dual-view kargo berat, dan fasilitas penanganan hewan hidup & kargo berbahaya (DG).', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'fc3-btn', type: 'button', props: { label: 'Akses Terminal Udara →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#4ade80', borderColor: '#4ade80', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0a0807] text-white relative">
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
