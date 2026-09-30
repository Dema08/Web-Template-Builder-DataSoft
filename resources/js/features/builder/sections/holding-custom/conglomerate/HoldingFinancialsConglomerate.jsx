import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingFinancialsConglomerate
 * Annual financial highlights, dividend yield history, and investor disclosure downloads.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingFinancialsConglomerate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'fin-badge', type: 'badge', props: { content: '📈 KINERJA KEUANGAN & DIVIDEN', variant: 'primary', background: '#fffbeb', color: '#b45309', size: 'medium' } },
    { id: 'fin-title', type: 'heading', props: { content: 'Ikhtisar Keuangan Audit & Nilai Pemegang Saham', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'fin-desc', type: 'text', props: { content: 'Komitmen dividen tunai rutin setiap tahun dengan dividend payout ratio rata-rata 45-55% dari laba bersih grup.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'fin-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fc1-yr', type: 'badge', props: { content: 'Tahun Buku 2025', variant: 'primary', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'fc1-rev', type: 'heading', props: { content: 'Rp 42.8 Triliun', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: '14px 0 4px 0' } },
        { id: 'fc1-lbl', type: 'text', props: { content: 'Pendapatan Usaha (YoY +12.4%)', fontSize: '13px', color: '#94a3b8', margin: '0 0 12px 0' } },
        { id: 'fc1-div', type: 'heading', props: { content: 'Dividen: Rp 240 / Lembar', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#34d399', margin: '0' } },
      ],
    },
    {
      id: 'fin-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fc2-yr', type: 'badge', props: { content: 'Tahun Buku 2024', variant: 'primary', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'fc2-rev', type: 'heading', props: { content: 'Rp 38.1 Triliun', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: '14px 0 4px 0' } },
        { id: 'fc2-lbl', type: 'text', props: { content: 'Pendapatan Usaha (YoY +9.8%)', fontSize: '13px', color: '#94a3b8', margin: '0 0 12px 0' } },
        { id: 'fc2-div', type: 'heading', props: { content: 'Dividen: Rp 215 / Lembar', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#34d399', margin: '0' } },
      ],
    },
    {
      id: 'fin-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'fc3-yr', type: 'badge', props: { content: 'Tahun Buku 2023', variant: 'primary', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'fc3-rev', type: 'heading', props: { content: 'Rp 34.7 Triliun', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff', margin: '14px 0 4px 0' } },
        { id: 'fc3-lbl', type: 'text', props: { content: 'Pendapatan Usaha (YoY +11.2%)', fontSize: '13px', color: '#94a3b8', margin: '0 0 12px 0' } },
        { id: 'fc3-div', type: 'heading', props: { content: 'Dividen: Rp 190 / Lembar', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#34d399', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="financials" className="py-24 px-4 sm:px-6 bg-[#061427] text-white relative">
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
