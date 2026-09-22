import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VERDANT — Eco Green Fleet
 * Hijau emerald: armada ramah lingkungan & electric vehicle.
 * Untuk perusahaan logistik hijau / sustainable logistics.
 */
export default function Fleet11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt11-badge', type: 'badge', props: { content: '🌿 Green Fleet Certified', background: '#f0fdf4', color: '#15803d' } },
    { id: 'flt11-heading', type: 'heading', props: { content: 'Armada Ramah Lingkungan untuk Masa Depan', level: 'h2', fontSize: '46px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'flt11-text', type: 'text', props: { content: 'Kami berkomitmen mengurangi emisi karbon 50% pada 2030 dengan armada kendaraan listrik dan hybrid.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
    { id: 'flt11-card-1', type: 'card', props: { variant: 'feature', background: '#f0fdf4', borderRadius: '20px', borderWidth: '1px', borderColor: '#bbf7d0', shadow: 'none', padding: '28px' },
      childrenComponents: [
        { id: 'flt11-c1-title', type: 'heading', props: { content: '⚡ Electric Truck', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#15803d', margin: '0 0 8px 0' } },
        { id: 'flt11-c1-desc', type: 'text', props: { content: '60 unit EV truck · 0 emisi · Jarak tempuh 400km per charge.', fontSize: '14px', color: '#4b5563', margin: '0 0 12px 0' } },
        { id: 'flt11-c1-stat', type: 'text', props: { content: '−60% emisi CO₂', fontSize: '13px', color: '#15803d', fontWeight: '700', margin: '0' } },
      ]
    },
    { id: 'flt11-card-2', type: 'card', props: { variant: 'feature', background: '#f0fdf4', borderRadius: '20px', borderWidth: '1px', borderColor: '#bbf7d0', shadow: 'none', padding: '28px' },
      childrenComponents: [
        { id: 'flt11-c2-title', type: 'heading', props: { content: '🌿 Hybrid Fleet', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#15803d', margin: '0 0 8px 0' } },
        { id: 'flt11-c2-desc', type: 'text', props: { content: '180 unit hybrid · Efisiensi BBM 40% lebih hemat dari konvensional.', fontSize: '14px', color: '#4b5563', margin: '0 0 12px 0' } },
        { id: 'flt11-c2-stat', type: 'text', props: { content: '−40% konsumsi BBM', fontSize: '13px', color: '#15803d', fontWeight: '700', margin: '0' } },
      ]
    },
    { id: 'flt11-card-3', type: 'card', props: { variant: 'feature', background: '#f0fdf4', borderRadius: '20px', borderWidth: '1px', borderColor: '#bbf7d0', shadow: 'none', padding: '28px' },
      childrenComponents: [
        { id: 'flt11-c3-title', type: 'heading', props: { content: '♻️ Carbon Offset', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#15803d', margin: '0 0 8px 0' } },
        { id: 'flt11-c3-desc', type: 'text', props: { content: 'Setiap pengiriman dikompensasi dengan penanaman pohon di hutan Indonesia.', fontSize: '14px', color: '#4b5563', margin: '0 0 12px 0' } },
        { id: 'flt11-c3-stat', type: 'text', props: { content: '50.000 pohon ditanam', fontSize: '13px', color: '#15803d', fontWeight: '700', margin: '0' } },
      ]
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {renderLayoutComponents(badge, sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="max-w-2xl">{renderLayoutComponents(text, sectionId)}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="mt-10 rounded-2xl bg-emerald-900 p-6 text-center">
          <p className="text-white font-bold text-lg">Target 2030: Net-Zero Fleet</p>
          <div className="mt-3 h-2 rounded-full bg-white/20 overflow-hidden max-w-md mx-auto">
            <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-emerald-400 to-green-300" />
          </div>
          <p className="text-emerald-300 text-sm mt-2 select-none">62% tercapai · 240 dari 500 unit sudah dikonversi</p>
        </div>
      </div>
    </section>
  );
}
