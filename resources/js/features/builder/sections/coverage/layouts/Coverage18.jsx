import React, { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLARIS — App Postal Code Lookup CTA
 * Jangkauan interaktif dengan simulator cek kode pos / nama kota, status estimasi ongkir kilat, dan CTA unduh aplikasi.
 * Cocok untuk kurir ekspres retail, e-commerce direct-to-consumer, dan mobile app promotion.
 */
export default function Coverage18({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov18-badge', type: 'badge', props: { content: '📍 INSTANT COVERAGE CHECKER', background: '#fff1f2', color: '#e11d48' } },
    { id: 'cov18-heading', type: 'heading', props: { content: 'Periksa Jangkauan & Estimasi Waktu Kirim', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov18-text', type: 'text', props: { content: 'Ketik nama kota atau kode pos tujuan Anda untuk memastikan ketersediaan layanan prioritas hari ini.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!query) return;
    setResult({
      city: query,
      status: 'Terjangkau 100%',
      sla: 'Same-Day / 24 Jam',
      express: 'Tersedia',
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-rose-50/50 to-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex flex-col items-center text-center space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        {/* Interactive Search Box */}
        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3 p-3 rounded-2xl bg-white border border-rose-200 shadow-xl">
          <input
            type="text"
            placeholder="Masukkan Kota / Kode Pos (contoh: Surabaya, 60111)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-5 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-rose-500 text-sm"
          />
          <button type="submit" className="px-8 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-colors">
            Cek Jangkauan
          </button>
        </form>

        {/* Result Card */}
        {result && (
          <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
            <div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">✓ {result.status}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">Area Tujuan: {result.city}</h3>
              <p className="text-xs text-slate-500">Layanan Reguler & Next-Day Express Siap Kirim</p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-sm font-bold text-slate-900 block">{result.sla}</span>
              <span className="text-xs text-emerald-600 font-semibold">Drop-off Terdekat: 1.2 KM</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
