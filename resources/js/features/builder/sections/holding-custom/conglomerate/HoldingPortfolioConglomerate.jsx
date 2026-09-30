import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingPortfolioConglomerate
 * Core subsidiary business pillars with revenue contribution and operating metrics.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingPortfolioConglomerate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'port-badge', type: 'badge', props: { content: '🏢 4 PILAR STRATEGIS BISNIS', variant: 'primary', background: '#fffbeb', color: '#b45309', size: 'medium' } },
    { id: 'port-title', type: 'heading', props: { content: 'Portofolio Entitas Usaha & Ekosistem Industri', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'port-desc', type: 'text', props: { content: 'Setiap entitas beroperasi secara mandiri dengan standar tata kelola ketat dan sinergi ekosistem terpadu antar grup.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'sub-card-1',
      type: 'card',
      props: { variant: 'service', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc1-badge', type: 'badge', props: { content: 'Kontribusi Pendapatan 38%', variant: 'primary', background: 'rgba(217, 119, 6, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'sc1-icon', type: 'icon', props: { icon: 'FaBolt', size: '36px', color: '#fbbf24', align: 'left', margin: '16px 0 12px 0' } },
        { id: 'sc1-title', type: 'heading', props: { content: 'Transisi Energi & Sumber Daya Bersih', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'sc1-desc', type: 'text', props: { content: 'PT Nusantara Energy Resources Tbk mengelola pembangkit listrik tenaga surya & hidro 1.200 MW serta transisi hilirisasi nikel baterai EV.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'sc1-btn', type: 'button', props: { label: 'Lihat Profil Entitas Energi →', href: '#investor', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#fbbf24', borderColor: '#fbbf24', fontWeight: '700' } },
      ],
    },
    {
      id: 'sub-card-2',
      type: 'card',
      props: { variant: 'service', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc2-badge', type: 'badge', props: { content: 'Kontribusi Pendapatan 28%', variant: 'primary', background: 'rgba(217, 119, 6, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'sc2-icon', type: 'icon', props: { icon: 'FaShip', size: '36px', color: '#fbbf24', align: 'left', margin: '16px 0 12px 0' } },
        { id: 'sc2-title', type: 'heading', props: { content: 'Pelabuhan Maritim & Jalan Tol Logistik', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'sc2-desc', type: 'text', props: { content: 'PT Nusantara Port & Infra mengoperasikan 5 konsesi terminal peti kemas laut dan 320 km jaringan jalan tol strategis Trans-Indonesia.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'sc2-btn', type: 'button', props: { label: 'Lihat Profil Entitas Infrastruktur →', href: '#investor', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#fbbf24', borderColor: '#fbbf24', fontWeight: '700' } },
      ],
    },
    {
      id: 'sub-card-3',
      type: 'card',
      props: { variant: 'service', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc3-badge', type: 'badge', props: { content: 'Kontribusi Pendapatan 20%', variant: 'primary', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'sc3-icon', type: 'icon', props: { icon: 'FaLeaf', size: '36px', color: '#34d399', align: 'left', margin: '16px 0 12px 0' } },
        { id: 'sc3-title', type: 'heading', props: { content: 'Agribisnis Berkelanjutan & Pangan (RSPO)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'sc3-desc', type: 'text', props: { content: 'PT Agro Nusantara Lestari mengelola 85.000 hektar perkebunan bersertifikasi RSPO/ISPO dengan fasilitas pengolahan hilir minyak nabati dan pangan.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'sc3-btn', type: 'button', props: { label: 'Lihat Profil Entitas Agribisnis →', href: '#investor', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#34d399', borderColor: '#34d399', fontWeight: '700' } },
      ],
    },
    {
      id: 'sub-card-4',
      type: 'card',
      props: { variant: 'service', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sc4-badge', type: 'badge', props: { content: 'Kontribusi Pendapatan 14%', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'sc4-icon', type: 'icon', props: { icon: 'FaLandmark', size: '36px', color: '#38bdf8', align: 'left', margin: '16px 0 12px 0' } },
        { id: 'sc4-title', type: 'heading', props: { content: 'Jasa Keuangan & Perbankan Digital', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'sc4-desc', type: 'text', props: { content: 'Nusantara Capital Financial Services menyediakan layanan pembiayaan korporasi, asuransi aset industri, dan platform perbankan digital komersial.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'sc4-btn', type: 'button', props: { label: 'Lihat Profil Entitas Finansial →', href: '#investor', variant: 'outline', size: 'small', radius: 'lg', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 bg-[#061427] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
