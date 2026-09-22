import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Zen Milestone Line
 * Tata letak lini masa serba bersih, berjarak lega dengan tipografi halus dan kartu monokrom elegan.
 * Cocok untuk studio arsitektur, firma konsultan independen, dan brand gaya hidup minimalis.
 */
export default function Timeline05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml5-badge', type: 'badge', props: { content: 'Tahapan Kerja', background: '#f1f5f9', color: '#475569' } },
    { id: 'tml5-heading', type: 'heading', props: { content: 'Kesederhanaan Dalam Setiap Langkah', level: 'h2', fontSize: '38px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml5-text', type: 'text', props: { content: 'Pendekatan terstruktur yang mengutamakan kejelasan, ketelitian, dan kenyamanan kolaborasi.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const steps = [
    { step: '01', title: 'Pemahaman Mendalam', desc: 'Mendengarkan tujuan Anda dan merumuskan konteks permasalahan secara utuh.' },
    { step: '02', title: 'Eksplorasi Konseptual', desc: 'Menghadirkan opsi kreatif terbaik dengan pertimbangan estetika dan fungsi.' },
    { step: '03', title: 'Penyempurnaan Detail', desc: 'Mengasah setiap elemen hingga mencapai keselarasan standar tertinggi.' },
    { step: '04', title: 'Realisasi Berkelanjutan', desc: 'Pelaksanaan menyeluruh dengan komitmen dukungan jangka panjang.' },
  ];

  return (
    <section className="py-24 px-6 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <span className="text-sm font-mono font-bold text-slate-400 block mb-3">{s.step}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
