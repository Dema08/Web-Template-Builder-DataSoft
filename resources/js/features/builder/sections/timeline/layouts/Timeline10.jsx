import React, { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Interactive Year Filter Tabs
 * Lini masa interaktif dengan tab pemilihan tahun / fase proyek yang memperbarui detail tahapan secara langsung.
 * Cocok untuk presentasi proyek bertahap, laporan tahunan, dan histori interaktif.
 */
export default function Timeline10({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml10-badge', type: 'badge', props: { content: 'TAB TIMELINE INTERAKTIF', background: '#eff6ff', color: '#2563eb' } },
    { id: 'tml10-heading', type: 'heading', props: { content: 'Eksplorasi Jejak Langkah Sesuai Periode', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml10-text', type: 'text', props: { content: 'Pilih periode waktu di bawah untuk melihat rincian inisiatif dan pencapaian strategis pada tahun tersebut.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 36px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const [activeYear, setActiveYear] = useState('2026');

  const yearData = {
    '2026': [
      { title: 'Ekspansi Global & AI Integration', desc: 'Meluncurkan layanan AI workflow otomatis dan menjangkau 5 negara baru di Asia Tenggara.', status: 'Sedang Berjalan' },
      { title: 'Sertifikasi Keamanan ISO 27001', desc: 'Pemenuhan standar kepatuhan proteksi data tertinggi untuk skala enterprise.', status: 'Tuntas' },
    ],
    '2024': [
      { title: 'Rilis Platform Cloud Generasi Baru', desc: 'Arsitektur microservices terdistribusi yang mampu menangani 1 juta permintaan per detik.', status: 'Tuntas' },
      { title: 'Pendanaan Seri B', desc: 'Mendapatkan dukungan investasi untuk memperkuat tim riset dan rekayasa perangkat lunak.', status: 'Tuntas' },
    ],
    '2022': [
      { title: 'Pembukaan 10 Kantor Regional', desc: 'Memperluas jangkauan layanan langsung ke pelanggan di seluruh kota-kota utama.', status: 'Tuntas' },
      { title: 'Peluncuran Aplikasi Mobile', desc: 'Kemudahan akses portal mandiri bagi pelanggan korporat langsung dari ponsel pintar.', status: 'Tuntas' },
    ],
    '2020': [
      { title: 'Inisiasi & Validasi Pasar', desc: 'Memperoleh 100 klien pertama dan mencapai profitabilitas operasional awal.', status: 'Tuntas' },
    ],
  };

  const years = ['2026', '2024', '2022', '2020'];

  return (
    <section className="py-24 px-6 bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="flex justify-center gap-3">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeYear === y
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Tahun {y}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {yearData[activeYear].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
