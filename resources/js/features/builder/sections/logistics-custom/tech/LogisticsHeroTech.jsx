import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsHeroTech
 * Interactive modern tech logistics hero with simulated live AWB status tracker.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsHeroTech({ components = [], sectionId = null }) {
  const [resi, setResi] = useState('');
  const [trackInfo, setTrackInfo] = useState(null);

  const defaultComponents = [
    { id: 'tech-badge', type: 'badge', props: { content: '⚡ IoT GPS Telematics — Auto Refresh 15 Detik', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'medium' } },
    { id: 'tech-title', type: 'heading', props: { content: 'Pengiriman Cepat, Presisi & Terpantau Real-Time', level: 'h1', fontSize: '50px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'tech-desc', type: 'text', props: { content: 'Platform pengiriman on-demand & logistik same-day perkotaan untuk seller e-commerce dan D2C brand. Dilengkapi armada kurir EV ramah lingkungan, notifikasi WhatsApp otomatis, dan integrasi API instan.', fontSize: '18px', color: '#64748b', align: 'center', lineHeight: '1.8', margin: '0 0 28px 0' } },
    { id: 'btn-kirim', type: 'button', props: { label: 'Mulai Kirim Paket Sekarang →', href: '#pricing', variant: 'primary', size: 'large', radius: 'full', background: '#0284c7', color: '#ffffff', shadow: 'lg', fontWeight: '700' } },
    { id: 'btn-docs', type: 'button', props: { label: '⚡ Dokumentasi API Webhook', href: '#engine', variant: 'ghost', size: 'large', background: 'transparent', color: '#0369a1', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading');
  const textComps = layoutComponents.filter(c => c.type === 'text');
  const buttonComps = layoutComponents.filter(c => c.type === 'button');

  const handleTrack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!resi.trim()) {
      setTrackInfo({ err: 'Ketik nomor resi Anda (contoh: TF-99210)' });
      return;
    }
    setTrackInfo({
      awb: resi.toUpperCase(),
      courier: 'Budi Santoso (Motor Listrik EV-04)',
      status: 'Paket Sedang Diantar ke Penerima',
      eta: '14 Menit Lagi (Estimasi 14:15 WIB)',
      loc: 'Jl. Sudirman No. 45 Menuju Jl. Gatot Subroto',
      battery: '88% EV Battery',
    });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-sky-50/50 via-white to-slate-50 overflow-hidden">
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-br from-sky-200/50 via-emerald-200/40 to-cyan-200/40 blur-3xl" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(badgeComps, sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(textComps, sectionId)}</div>

        {/* Interactive AWB Tracking Bar */}
        <div id="tracker" className="w-full max-w-2xl bg-white border-2 border-sky-100 rounded-3xl p-3 sm:p-4 shadow-xl shadow-sky-500/10 mt-2 mb-6">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3">
              <span className="text-slate-400">📦</span>
              <input
                type="text"
                value={resi}
                onChange={(e) => setResi(e.target.value)}
                placeholder="Masukkan Nomor Resi / AWB (Contoh: TF-88910)"
                className="bg-transparent text-sm w-full outline-none text-slate-800 placeholder-slate-400 font-mono font-bold"
              />
            </div>
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-3.5 rounded-2xl text-sm transition-all shadow-lg shadow-sky-600/20 shrink-0"
            >
              Lacak Paket Live 📍
            </button>
          </form>

          {trackInfo && (
            <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white text-left font-mono text-xs space-y-2 border border-sky-500/40 animate-fadeIn">
              {trackInfo.err ? (
                <p className="text-rose-400">{trackInfo.err}</p>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-sky-400 font-bold">RESI: {trackInfo.awb}</span>
                    <span className="bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full text-[10px]">
                      LIVE GPS TRACKING
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                    <p>Status: <span className="text-white font-bold">{trackInfo.status}</span></p>
                    <p>Kurir: <span className="text-white font-bold">{trackInfo.courier}</span></p>
                    <p>Posisi: <span className="text-white font-bold">{trackInfo.loc}</span></p>
                    <p>Estimasi Tiba: <span className="text-amber-400 font-bold">{trackInfo.eta}</span></p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {renderLayoutComponents(buttonComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
