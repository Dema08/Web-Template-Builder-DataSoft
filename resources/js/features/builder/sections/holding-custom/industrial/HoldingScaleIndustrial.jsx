import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingScaleIndustrial
 * Manufacturing output & operational KPIs — dark theme with amber stat highlights.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingScaleIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'sc-badge', type: 'badge', props: { content: '📊 KAPASITAS PRODUKSI & PRESTASI OPERASIONAL', variant: 'primary', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'medium' } },
    { id: 'sc-title', type: 'heading', props: { content: 'Skala Manufaktur Presisi Dunia dalam Satu Ekosistem', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', align: 'center' } },
    { id: 'sc-desc', type: 'text', props: { content: 'Angka-angka riil yang mencerminkan kapasitas dan kontribusi nyata Sovereign Industrial Group terhadap industrialisasi berkelanjutan Indonesia.', fontSize: '16px', color: '#94a3b8', align: 'center' } },
    {
      id: 'isc-card-1',
      type: 'card',
      props: { background: '#0f172a', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.2)', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ic1-val', type: 'heading', props: { content: '8.4 Juta MT', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#fbbf24', align: 'center' } },
        { id: 'ic1-lbl', type: 'heading', props: { content: 'Output Smelter & Hot Rolling Mill', level: 'h4', fontSize: '14px', fontWeight: '600', color: '#e2e8f0', align: 'center' } },
        { id: 'ic1-sub', type: 'text', props: { content: 'NPI, Ferronickel, Baja Canai Panas', fontSize: '12px', color: '#64748b', align: 'center' } },
      ],
    },
    {
      id: 'isc-card-2',
      type: 'card',
      props: { background: '#0f172a', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.2)', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ic2-val', type: 'heading', props: { content: '1.200 MW', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#4ade80', align: 'center' } },
        { id: 'ic2-lbl', type: 'heading', props: { content: 'Kapasitas Energi Bersih', level: 'h4', fontSize: '14px', fontWeight: '600', color: '#e2e8f0', align: 'center' } },
        { id: 'ic2-sub', type: 'text', props: { content: 'PLTS Terapung & Micro Hydro Power', fontSize: '12px', color: '#64748b', align: 'center' } },
      ],
    },
    {
      id: 'isc-card-3',
      type: 'card',
      props: { background: '#0f172a', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.2)', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ic3-val', type: 'heading', props: { content: '32.400+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#38bdf8', align: 'center' } },
        { id: 'ic3-lbl', type: 'heading', props: { content: 'Insinyur & Teknisi Terlatih', level: 'h4', fontSize: '14px', fontWeight: '600', color: '#e2e8f0', align: 'center' } },
        { id: 'ic3-sub', type: 'text', props: { content: 'Tersertifikasi BNSP, K3 & ASME', fontSize: '12px', color: '#64748b', align: 'center' } },
      ],
    },
    {
      id: 'isc-card-4',
      type: 'card',
      props: { background: '#0f172a', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.2)', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ic4-val', type: 'heading', props: { content: '42 Negara', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#c084fc', align: 'center' } },
        { id: 'ic4-lbl', type: 'heading', props: { content: 'Jaringan Distribusi Global', level: 'h4', fontSize: '14px', fontWeight: '600', color: '#e2e8f0', align: 'center' } },
        { id: 'ic4-sub', type: 'text', props: { content: 'Asia, Eropa, Timur Tengah & Amerika', fontSize: '12px', color: '#64748b', align: 'center' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="scale" className="py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Decorative radial glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
