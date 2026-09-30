import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingDivisionsIndustrial
 * 4 Core Heavy Industrial divisions — dark theme with amber accent cards.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingDivisionsIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'div-badge', type: 'badge', props: { content: '🏗️ 4 DIVISI UTAMA MANUFAKTUR HULU & HILIR', variant: 'primary', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'medium' } },
    { id: 'div-title', type: 'heading', props: { content: 'Ekosistem Manufaktur Terpadu Dari Hulu Mineral Hingga Produk Presisi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', align: 'center' } },
    { id: 'div-desc', type: 'text', props: { content: 'Seluruh divisi beroperasi secara sinergis, memanfaatkan energi bersih dari gardu internal grup untuk menekan jejak karbon manufaktur ke tingkat terendah.', fontSize: '16px', color: '#94a3b8', align: 'center' } },
    {
      id: 'div-card-1',
      type: 'card',
      props: { background: '#0f172a', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e293b', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dc1-tag', type: 'badge', props: { content: 'Divisi 01: Metalurgi & Smelter', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'dc1-icon', type: 'icon', props: { name: 'Flame', size: 32, color: '#fbbf24' } },
        { id: 'dc1-title', type: 'heading', props: { content: 'Sovereign Metal & Smelting Tbk', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'dc1-desc', type: 'text', props: { content: 'Fasilitas peleburan Nickel Pig Iron (NPI), Ferronickel, dan Copper Cathode berkemurnian 99.99% dengan teknologi High Pressure Acid Leach (HPAL).', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'dc1-btn', type: 'button', props: { label: 'Spesifikasi Material Logam →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
      ],
    },
    {
      id: 'div-card-2',
      type: 'card',
      props: { background: '#0f172a', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e293b', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dc2-tag', type: 'badge', props: { content: 'Divisi 02: Energi & Sel Surya', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'dc2-icon', type: 'icon', props: { name: 'SunMedium', size: 32, color: '#fbbf24' } },
        { id: 'dc2-title', type: 'heading', props: { content: 'Sovereign Solar Technologies', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'dc2-desc', type: 'text', props: { content: 'Giga-factory manufaktur sel fotovoltaik (PV N-Type TOPCon) dan perakitan panel surya monokristalin berkapasitas 3.2 GW per tahun.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'dc2-btn', type: 'button', props: { label: 'Katalog Modul Solar PV →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
      ],
    },
    {
      id: 'div-card-3',
      type: 'card',
      props: { background: '#0f172a', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e293b', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dc3-tag', type: 'badge', props: { content: 'Divisi 03: Otomasi & Robotika', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'dc3-icon', type: 'icon', props: { name: 'Bot', size: 32, color: '#fbbf24' } },
        { id: 'dc3-title', type: 'heading', props: { content: 'Sovereign Robotics & Automation', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'dc3-desc', type: 'text', props: { content: 'Rekayasa lengan robot presisi tinggi, automated guided vehicles (AGV) pabrik, dan sistem integrasi lini konveyor cerdas untuk industri otomotif.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'dc3-btn', type: 'button', props: { label: 'Solusi Otomasi Pabrik →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
      ],
    },
    {
      id: 'div-card-4',
      type: 'card',
      props: { background: '#0f172a', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e293b', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dc4-tag', type: 'badge', props: { content: 'Divisi 04: Terminal Maritim & Logistik', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'dc4-icon', type: 'icon', props: { name: 'Ship', size: 32, color: '#fbbf24' } },
        { id: 'dc4-title', type: 'heading', props: { content: 'Sovereign Port & Bulk Logistics', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'dc4-desc', type: 'text', props: { content: 'Pengelolaan 4 pelabuhan laut dalam berkedalaman -18 meter LWS yang mampu melayani sandar kapal kargo Capesize berbobot 180.000 DWT.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'dc4-btn', type: 'button', props: { label: 'Fasilitas Terminal Maritim →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="divisions" className="py-24 px-4 sm:px-6 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Subtle amber accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
