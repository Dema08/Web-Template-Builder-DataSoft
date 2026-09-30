import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingGlobalFootprintIndustrial
 * Section: Manufacturing Plants, Deep-Water Ports & Global Export Hubs
 */
export default function HoldingGlobalFootprintIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'igf-badge', type: 'badge', props: { content: '🌐 JARINGAN MANUFAKTUR & HUB EKSPOR LAUT DALAM', variant: 'primary', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'medium' } },
    { id: 'igf-heading', type: 'heading', props: { content: 'Tapak Operasional Pabrik & Koridor Ekspor Terintegrasi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' } },
    { id: 'igf-text', type: 'text', props: { content: 'Pabrik dan kawasan industri kami terhubung langsung dengan dermaga peti kemas laut dalam untuk mempercepat pengapalan kargo ke pasar ekspor Asia, Eropa, dan Amerika.', fontSize: '16px', color: '#94a3b8' } },
    {
      id: 'igf-card-1',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
      childrenComponents: [
        { id: 'igc1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80', alt: 'Smelter Hub Morowali', radius: 'xl' } },
        { id: 'igc1-badge', type: 'badge', props: { content: 'Sulawesi Tengah', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'igc1-head', type: 'heading', props: { content: 'Morowali Eco-Industrial Park', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'igc1-txt', type: 'text', props: { content: 'Kompleks 8 smelter HPAL terintegrasi, pembangkit listrik internal 1.200 MW, dan dermaga laut dalam 100.000 DWT.', fontSize: '14px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'igf-card-2',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
      childrenComponents: [
        { id: 'igc2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80', alt: 'Solar Gigafactory Batam', radius: 'xl' } },
        { id: 'igc2-badge', type: 'badge', props: { content: 'Kepulauan Riau', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'igc2-head', type: 'heading', props: { content: 'Batam Solar Cell & Module Gigafactory', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'igc2-txt', type: 'text', props: { content: 'Fasilitas cleanroom ISO-7 perakitan wafer fotovoltaik 3.2 GW berorientasi ekspor langsung ke pasar global.', fontSize: '14px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'igf-card-3',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
      childrenComponents: [
        { id: 'igc3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80', alt: 'Robotics Plant Cikarang', radius: 'xl' } },
        { id: 'igc3-badge', type: 'badge', props: { content: 'Jawa Barat', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'igc3-head', type: 'heading', props: { content: 'Cikarang Advanced Robotics Tech Center', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'igc3-txt', type: 'text', props: { content: 'Pusat riset & perakitan mesin CNC 5-axis, sensor optik AI, dan integrasi PLC otomasi pabrik manufaktur.', fontSize: '14px', color: '#94a3b8' } },
      ],
    },
  ];

  const comps = components.length > 0 ? components : defaultComponents;
  const badges = comps.filter((c) => c.type === 'badge');
  const headings = comps.filter((c) => c.type === 'heading');
  const texts = comps.filter((c) => c.type === 'text');
  const cards = comps.filter((c) => c.type === 'card');
  const stats = comps.filter((c) => c.type === 'statistic');

  return (
    <section className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Structural Industrial Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(to right, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badges.length > 0 && <div className="flex justify-center mb-4">{renderLayoutComponents(badges.slice(0, 1), sectionId)}</div>}
          {headings.length > 0 && <div className="mb-4">{renderLayoutComponents(headings.slice(0, 1), sectionId)}</div>}
          {texts.length > 0 && <div>{renderLayoutComponents(texts.slice(0, 1), sectionId)}</div>}
        </div>

        {/* Footprint Key Stats */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {renderLayoutComponents(stats, sectionId)}
          </div>
        )}

        {/* Regional Manufacturing Facilities & Plants */}
        {cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderLayoutComponents(cards, sectionId)}
          </div>
        )}
      </div>
    </section>
  );
}
