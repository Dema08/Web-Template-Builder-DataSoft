import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VERDANT — Eco Green Sustainability Journey
 * Lini masa bernuansa hijau ekologis yang mendokumentasikan perjalanan inisiatif ramah lingkungan dan dekarbonisasi.
 * Cocok untuk laporan ESG, perusahaan energi terbarukan, dan inisiatif konservasi.
 */
export default function Timeline11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml11-badge', type: 'badge', props: { content: '🌱 ESG & SUSTAINABILITY ROADMAP', background: '#ecfdf5', color: '#059669' } },
    { id: 'tml11-heading', type: 'heading', props: { content: 'Perjalanan Menuju Emisi Nol Bersih', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml11-text', type: 'text', props: { content: 'Langkah nyata kami dalam mengintegrasikan praktik ramah lingkungan di setiap lini operasional bisnis.', fontSize: '16px', color: '#047857', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const ecoMilestones = [
    { year: '2022', title: '100% Bebas Kertas & Limbah Plastik', metric: '-40 Ton Plastik', desc: 'Digitalisasi seluruh alur dokumen operasional dan eliminasi kemasan sekali pakai.' },
    { year: '2024', title: 'Adopsi Solar Panel & Energi Terbarukan', metric: '60% Energi Hijau', desc: 'Pemasangan panel surya di seluruh fasilitas kantor dan pusat data induk.' },
    { year: '2026', title: 'Konversi Armada Listrik (EV Fleet)', metric: 'Net Zero Target', desc: 'Penggunaan kendaraan listrik untuk 100% mobilitas operasional dalam kota.' },
  ];

  return (
    <section className="py-24 px-6 bg-emerald-50/40" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecoMilestones.map((m, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-emerald-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">{m.year}</span>
                <h3 className="text-xl font-bold text-emerald-950 mt-4">{m.title}</h3>
                <p className="text-sm text-emerald-800/80 mt-2 leading-relaxed">{m.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-emerald-100 font-bold text-emerald-600 text-sm">
                ✦ Dampak: {m.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
