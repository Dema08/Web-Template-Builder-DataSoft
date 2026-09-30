import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsCalculatorCorporate
 * Interactive B2B Freight Rate & Fleet Contract Estimator.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsCalculatorCorporate({ components = [], sectionId = null }) {
  const [origin, setOrigin] = useState('Jakarta (Jabodetabek)');
  const [dest, setDest] = useState('Surabaya');
  const [tonnage, setTonnage] = useState(25);

  const defaultComponents = [
    { id: 'calc-badge', type: 'badge', props: { content: '🧮 Estimasi Tarif Cepat B2B', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'calc-title', type: 'heading', props: { content: 'Kalkulator Simulasi Tarif & Kontrak Armada', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'calc-desc', type: 'text', props: { content: 'Dapatkan gambaran estimasi biaya distribusi kargo muatan penuh (FTL) berdasarkan rute dan tonase muatan perusahaan Anda.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    { id: 'calc-cta-btn', type: 'button', props: { label: 'Ajukan Kontrak Resmi & Penawaran Final →', href: '#contact', variant: 'primary', size: 'large', radius: 'xl', background: '#f97316', color: '#ffffff', fontWeight: '800' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'button');
  const buttonComps = layoutComponents.filter(c => c.type === 'button');

  const baseRates = {
    'Surabaya': 9500000,
    'Semarang': 6800000,
    'Bandung': 3500000,
    'Medan': 24000000,
    'Palembang': 14500000,
    'Balikpapan (IKN)': 32000000,
    'Makassar': 28000000,
  };

  const estimatedCost = Math.round((baseRates[dest] || 10000000) * (1 + (tonnage - 10) * 0.02));

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 bg-[#0a192f] text-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl grid lg:grid-cols-12 gap-8 items-center">
          {/* Form Inputs */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Kota Asal Penjemputan (Origin):
              </label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
              >
                <option>Jakarta (Jabodetabek)</option>
                <option>Cikarang / Karawang Industri</option>
                <option>Surabaya Hub</option>
                <option>Semarang Hub</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Destinasi Pengiriman (Destination):
              </label>
              <select
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
              >
                <option>Surabaya</option>
                <option>Semarang</option>
                <option>Bandung</option>
                <option>Palembang</option>
                <option>Medan</option>
                <option>Balikpapan (IKN)</option>
                <option>Makassar</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                <span className="uppercase tracking-wider">Estimasi Berat / Muatan:</span>
                <span className="text-orange-400 font-mono text-sm">{tonnage} Ton</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={tonnage}
                onChange={(e) => setTonnage(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>5 Ton (CDD)</span>
                <span>20 Ton (Fuso)</span>
                <span>40 Ton (Wingbox / Lowbed)</span>
              </div>
            </div>
          </div>

          {/* Result Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-orange-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-center relative overflow-hidden shadow-inner">
            <div>
              <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                ESTIMASI BIAYA RUNNING
              </span>
              <p className="text-xs text-slate-400">Rute {origin} ➔ {dest}</p>
              <p className="text-3xl sm:text-4xl font-black text-white my-3 font-mono">
                Rp {estimatedCost.toLocaleString('id-ID')}
              </p>
              <p className="text-xs text-emerald-400 font-semibold mb-4">
                ✓ Termasuk Asuransi All-Risk & Driver Dispatch
              </p>
            </div>

            <div className="w-full flex justify-center">
              {renderLayoutComponents(buttonComps, sectionId)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
