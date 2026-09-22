import React, { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Interactive Region Filter Tabs
 * Jangkauan dengan tab navigasi interaktif untuk melihat daftar rute, hub, dan durasi pengiriman per pulau secara dinamis.
 * Cocok untuk web direktori logistik, tracking portal, dan pengalaman pengguna interaktif.
 */
export default function Coverage10({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov10-badge', type: 'badge', props: { content: 'TAB PETA WILAYAH', background: '#eff6ff', color: '#2563eb' } },
    { id: 'cov10-heading', type: 'heading', props: { content: 'Eksplorasi Jangkauan Berdasarkan Wilayah', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cov10-text', type: 'text', props: { content: 'Pilih pulau atau zona di bawah ini untuk memeriksa daftar kota jangkauan dan waktu tempuh pengiriman.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 36px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const [activeTab, setActiveTab] = useState('jawa');

  const tabData = {
    jawa: [
      { city: 'DKI Jakarta & Bodetabek', time: 'Same-Day / 12 Jam', hubs: '18 Hub Sortir Utama', type: 'Darat' },
      { city: 'Bandung & Jawa Barat', time: '24 Jam', hubs: '14 Hub Transit', type: 'Darat' },
      { city: 'Semarang & DI Yogyakarta', time: '24 Jam', hubs: '12 Hub Transit', type: 'Darat' },
      { city: 'Surabaya & Jawa Timur', time: '24 Jam', hubs: '16 Hub Sortir Utama', type: 'Darat' },
    ],
    sumatera: [
      { city: 'Medan & Sumatera Utara', time: '1-2 Hari', hubs: '8 Hub Sortir', type: 'Darat/Udara' },
      { city: 'Palembang & Lampung', time: '1-2 Hari', hubs: '6 Hub Transit', type: 'Darat' },
      { city: 'Pekanbaru & Padang', time: '2 Hari', hubs: '5 Hub Transit', type: 'Darat/Udara' },
      { city: 'Batam & Kepulauan Riau', time: '1-2 Hari', hubs: '4 Hub FTZ Pelabuhan', type: 'Laut/Udara' },
    ],
    kalimantan: [
      { city: 'Balikpapan & IKN Nusantara', time: '1-2 Hari', hubs: '6 Hub Logistik', type: 'Laut/Udara' },
      { city: 'Samarinda & Bontang', time: '2-3 Hari', hubs: '4 Hub Transit', type: 'Darat/Laut' },
      { city: 'Banjarmasin & Pontianak', time: '2-3 Hari', hubs: '5 Hub Transit', type: 'Laut/Udara' },
    ],
    timur: [
      { city: 'Makassar (Gateway Timur)', time: '2 Hari', hubs: '10 Hub Logistik', type: 'Laut/Udara' },
      { city: 'Manado & Gorontalo', time: '2-3 Hari', hubs: '4 Hub Transit', type: 'Laut/Udara' },
      { city: 'Denpasar & Mataram', time: '1-2 Hari', hubs: '6 Hub Transit', type: 'Darat/Laut' },
      { city: 'Ambon & Jayapura', time: '3-4 Hari', hubs: '5 Hub Port', type: 'Udara/Laut' },
    ],
  };

  const tabs = [
    { id: 'jawa', label: 'Jawa & Madura' },
    { id: 'sumatera', label: 'Pulau Sumatera' },
    { id: 'kalimantan', label: 'Kalimantan & IKN' },
    { id: 'timur', label: 'Indonesia Timur & Bali' },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === t.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tabData[activeTab].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">{item.type}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-3">{item.city}</h3>
              <p className="text-xs text-slate-500 mt-1">{item.hubs}</p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Lead Time:</span>
                <span className="text-sm font-bold text-slate-800">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
