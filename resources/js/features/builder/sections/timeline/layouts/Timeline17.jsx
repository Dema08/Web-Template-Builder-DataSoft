import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TRANSGO — Industrial Logistics Milestones
 * Lini masa industri bernuansa kuning/amber dengan fokus pada ekspansi fasilitas pabrik, armada berat, dan sertifikasi operasional.
 * Cocok untuk industri manufaktur, pertambangan, dan konstruksi.
 */
export default function Timeline17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml17-badge', type: 'badge', props: { content: 'TRANSGO OPERATIONAL MILESTONES', background: '#fef3c7', color: '#d97706' } },
    { id: 'tml17-heading', type: 'heading', props: { content: 'Tahapan Ekspansi Fasilitas & Kapasitas Industri', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml17-text', type: 'text', props: { content: 'Pertumbuhan kapasitas pabrik dan peremajaan mesin untuk menjawab permintaan pasar skala raksasa.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  return (
    <section className="py-24 px-6 bg-amber-500/5" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border-2 border-amber-300 shadow-lg">
            <span className="text-2xl font-black text-amber-600">FASE 1</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Pabrik Manufaktur Unit 1</h3>
            <p className="text-sm text-slate-600 mt-1">Pengoperasian fasilitas produksi seluas 25.000 m² dengan output 10.000 unit/bulan.</p>
          </div>

          <div className="p-7 rounded-2xl bg-white border-2 border-amber-300 shadow-lg">
            <span className="text-2xl font-black text-amber-600">FASE 2</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Otomasi Robotik Lini Produksi</h3>
            <p className="text-sm text-slate-600 mt-1">Integrasi lengan robot presisi tinggi untuk memangkas waktu siklus perakitan sebesar 50%.</p>
          </div>

          <div className="p-7 rounded-2xl bg-white border-2 border-amber-300 shadow-lg">
            <span className="text-2xl font-black text-amber-600">FASE 3</span>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Hub Distribusi Ekspor Samudra</h3>
            <p className="text-sm text-slate-600 mt-1">Akses langsung jalur dermaga khusus untuk pengapalan kontainer ke pasar ekspor internasional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
