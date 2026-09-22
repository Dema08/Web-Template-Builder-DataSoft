import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ZEPHYR — Glassmorphism AI Evolution
 * Lini masa futuristik biru langit cerah dengan komponen glassmorphism, evolusi algoritma kecerdasan buatan, dan milestone komputasi.
 * Cocok untuk AI startup, lab penelitian teknologi, dan produk otomatisasi cerdas.
 */
export default function Timeline14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml14-badge', type: 'badge', props: { content: '✦ AI EVOLUTIONARY MILESTONES', background: '#e0f2fe', color: '#0284c7' } },
    { id: 'tml14-heading', type: 'heading', props: { content: 'Evolusi Model AI & Kecerdasan Mesin', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml14-text', type: 'text', props: { content: 'Tonggak sejarah pengembangan model kecerdasan buatan terapan kami dalam memecahkan masalah kompleks.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
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
            <span className="text-3xl">🧬</span>
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2.5 py-0.5 rounded-full ml-3">Model v1.0</span>
            <h3 className="text-xl font-bold text-slate-900 mt-4">Algoritma Prediksi Dasar</h3>
            <p className="text-slate-600 text-sm mt-2">Pelatihan model awal pada 10 juta dataset untuk otomasi klasifikasi data instan.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-sky-200 shadow-xl">
            <span className="text-3xl">⚡</span>
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2.5 py-0.5 rounded-full ml-3">Model v2.5</span>
            <h3 className="text-xl font-bold text-slate-900 mt-4">Multi-Modal Reasoning</h3>
            <p className="text-slate-600 text-sm mt-2">Integrasi pemrosesan bahasa alami, visi komputer, dan pemahaman dokumen cerdas.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-sky-200 shadow-xl">
            <span className="text-3xl">🌐</span>
            <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2.5 py-0.5 rounded-full ml-3">Model v4.0</span>
            <h3 className="text-xl font-bold text-slate-900 mt-4">Autonomous Agent Mesh</h3>
            <p className="text-slate-600 text-sm mt-2">Ekosistem agen cerdas otonom yang bekerja bersama tanpa intervensi manual.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
