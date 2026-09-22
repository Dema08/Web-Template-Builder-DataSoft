import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VERDANT — Eco Green Distribution Network
 * Jangkauan bernuansa hijau ramah lingkungan dengan fokus pada zona armada listrik (EV), koridor rendah emisi, dan logistik hijau.
 * Cocok untuk logistik berkelanjutan, sertifikasi ESG, dan brand eco-conscious.
 */
export default function Coverage11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov11-badge', type: 'badge', props: { content: '🌱 ECO-FRIENDLY DISTRIBUTION', background: '#ecfdf5', color: '#059669' } },
    { id: 'cov11-heading', type: 'heading', props: { content: 'Distribusi Berkelanjutan Ramah Lingkungan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov11-text', type: 'text', props: { content: 'Mengurangi jejak karbon logistik lewat rute optimal, armada listrik untuk last-mile delivery, dan green warehouse di 30 kota utama.', fontSize: '16px', color: '#047857', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const ecoZones = [
    { title: 'Zona EV Last-Mile', desc: '100% armada kendaraan listrik untuk pengantaran dalam kota Jakarta, Surabaya, & Bali.', stat: '0 Emisi Tailpipe' },
    { title: 'Green Hub Bersertifikat', desc: 'Fasilitas gudang bertenaga surya dengan efisiensi energi terstandarisasi ISO 14001.', stat: '30+ Titik Solar Panel' },
    { title: 'Koridor Tol Laut Efisien', desc: 'Rute pelayaran berjadwal efisiensi bahan bakar tinggi untuk muatan curah antar pulau.', stat: '-40% Emisi Karbon' },
  ];

  return (
    <section className="py-24 px-6 bg-emerald-50/40" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecoZones.map((z, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-emerald-200/80 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">{z.stat}</span>
                <h3 className="text-xl font-bold text-emerald-950 mt-4">{z.title}</h3>
                <p className="text-sm text-emerald-800/80 mt-2 leading-relaxed">{z.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-emerald-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <span>🌿 Terverifikasi Standar ESG</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
