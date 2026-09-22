import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ZEPHYR — Glassmorphism AI Network Hub
 * Jangkauan cerdas berbasis algoritma rute dinamis dengan estetika sky blue, glassmorphism, dan node adaptif.
 * Cocok untuk AI logistics platform, smart courier, dan otomatisasi supply chain.
 */
export default function Coverage14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov14-badge', type: 'badge', props: { content: '✦ AI DYNAMIC REROUTING', background: '#e0f2fe', color: '#0284c7' } },
    { id: 'cov14-heading', type: 'heading', props: { content: 'Optimasi Rute Jangkauan Berbasis Kecerdasan Buatan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov14-text', type: 'text', props: { content: 'Algoritma cerdas yang memilih jalur tercepat secara otomatis berdasarkan data cuaca, lalu lintas, dan kapasitas hub.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-sky-50/70 via-white to-cyan-50/50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-sky-200 shadow-xl">
            <span className="text-3xl">🧠</span>
            <h3 className="text-xl font-bold text-slate-900 mt-4">Predictive Route Dispatch</h3>
            <p className="text-slate-600 text-sm mt-2">Prediksi kemacetan pelabuhan dan jalan tol untuk pengalihan rute instan tanpa jeda waktu.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-sky-200 shadow-xl">
            <span className="text-3xl">⚡</span>
            <h3 className="text-xl font-bold text-slate-900 mt-4">35% Faster Transit Time</h3>
            <p className="text-slate-600 text-sm mt-2">Rata-rata pemangkasan waktu tempuh pengiriman antar pulau berkat optimasi multi-modal.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-sky-200 shadow-xl">
            <span className="text-3xl">🌐</span>
            <h3 className="text-xl font-bold text-slate-900 mt-4">Real-time Telemetry Sync</h3>
            <p className="text-slate-600 text-sm mt-2">Sinkronisasi status lokasi setiap 10 detik dari GPS onboard ke dashboard pelanggan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
