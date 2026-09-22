import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Interactive Fleet Filter
 * Filter tab interaktif: klik kategori armada untuk lihat detail.
 * Untuk showcase armada dengan UX yang engaging.
 */
export default function Fleet10({ components = [], sectionId = null }) {
  const [activeTab, setActiveTab] = useState('darat');

  const tabs = ['darat', 'laut', 'udara', 'cold-chain'];
  const tabData = {
    darat: { emoji: '🚛', title: 'Armada Darat', count: '320 Unit', desc: 'Truk tronton, kontainer, dan minibus kargo siap melayani pengiriman darat ke seluruh Jawa, Sumatra, dan Kalimantan.' },
    laut: { emoji: '⛵', title: 'Armada Laut', count: '12 Kapal', desc: 'Kapal kontainer dan feri kargo melayani rute antar pulau dengan kapasitas hingga 1.000 ton per trip.' },
    udara: { emoji: '✈️', title: 'Air Cargo', count: '8 Slot Harian', desc: 'Pengiriman same-day dan next-day via cargo udara ke 30+ bandara di seluruh Indonesia.' },
    'cold-chain': { emoji: '❄️', title: 'Cold Chain', count: '80 Unit', desc: 'Unit berpendingin -20°C hingga +10°C khusus untuk farmasi, produk segar, dan pangan beku.' },
  };

  const defaultComponents = [
    { id: 'flt10-badge', type: 'badge', props: { content: '🔥 Armada Terupdate 2026', background: '#fef2f2', color: '#dc2626' } },
    { id: 'flt10-heading', type: 'heading', props: { content: 'Semua Jenis Armada dalam Satu Platform', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt10-text', type: 'text', props: { content: 'Pilih jenis armada yang sesuai dengan kebutuhan pengiriman Anda.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-2" onClick={e => e.stopPropagation()}>
          {tabs.map(t => (
            <button
              key={t}
              type="button"
              onClick={e => { e.preventDefault(); e.stopPropagation(); setActiveTab(t); }}
              className={`text-sm font-bold rounded-full px-5 py-2 border transition-all select-none ${activeTab === t ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}
            >
              {t === 'cold-chain' ? 'Cold Chain' : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50 p-10 text-center transition-all">
          <p className="text-6xl mb-4">{tabData[activeTab].emoji}</p>
          <p className="text-2xl font-black text-slate-900">{tabData[activeTab].title}</p>
          <p className="text-lg font-bold text-orange-500 mt-1">{tabData[activeTab].count}</p>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">{tabData[activeTab].desc}</p>
        </div>
      </div>
    </section>
  );
}
