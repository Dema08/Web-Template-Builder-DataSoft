import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingStatsConglomerate
 * Consolidated financial & scale metrics for diversified conglomerate.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingStatsConglomerate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat-badge', type: 'badge', props: { content: '📊 METRIK KINERJA KONSOLIDASI', variant: 'primary', background: '#fffbeb', color: '#b45309', size: 'medium' } },
    { id: 'stat-title', type: 'heading', props: { content: 'Skala & Kekuatan Finansial Grup', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'stat-desc', type: 'text', props: { content: 'Hasil konsolidasi kinerja keuangan audit tahun 2025 yang mencerminkan pertumbuhan stabil dan ketahanan bisnis lintas siklus ekonomi.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'cstat-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cs-c1-val', type: 'heading', props: { content: 'IDR 186.4 T', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#fbbf24', align: 'center', margin: '0 0 8px 0' } },
        { id: 'cs-c1-lbl', type: 'heading', props: { content: 'Total Aset Terkelola', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'cs-c1-sub', type: 'text', props: { content: 'Pertumbuhan YoY +14.8%', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'cstat-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cs-c2-val', type: 'heading', props: { content: 'IDR 42.8 T', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#34d399', align: 'center', margin: '0 0 8px 0' } },
        { id: 'cs-c2-lbl', type: 'heading', props: { content: 'Pendapatan Bersih Konsolidasi', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'cs-c2-sub', type: 'text', props: { content: 'EBITDA Margin 28.4%', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'cstat-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cs-c3-val', type: 'heading', props: { content: '48.500+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#38bdf8', align: 'center', margin: '0 0 8px 0' } },
        { id: 'cs-c3-lbl', type: 'heading', props: { content: 'Tenaga Kerja Langsung', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'cs-c3-sub', type: 'text', props: { content: 'Tersebar di 26 Provinsi Indonesia', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'cstat-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'cs-c4-val', type: 'heading', props: { content: 'AAA', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#a78bfa', align: 'center', margin: '0 0 8px 0' } },
        { id: 'cs-c4-lbl', type: 'heading', props: { content: 'ESG Sustainability Rating', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 4px 0' } },
        { id: 'cs-c4-sub', type: 'text', props: { content: 'MSCI & IDX ESG Leaders Index', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#051325] text-white relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
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
