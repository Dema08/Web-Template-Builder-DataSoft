import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — Sunset Warm Horizon Track
 * Lini masa bertema matahari terbenam dengan aksen oranye/amber energik, milestone kartu menonjol, dan metrik kemajuan.
 * Cocok untuk akselerator startup, program inkubasi, dan peluncuran produk inovasi.
 */
export default function Timeline12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml12-badge', type: 'badge', props: { content: '⚡ GROWTH HORIZON TRACK', background: '#ffedd5', color: '#ea580c' } },
    { id: 'tml12-heading', type: 'heading', props: { content: 'Lintasan Akselerasi & Lompatan Nilai', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml12-text', type: 'text', props: { content: 'Kilas balik fase percepatan bisnis dari tahap inkubasi hingga ekspansi pasar yang agresif.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-amber-500/10 via-white to-orange-500/10" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl">
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Fase 1 — Inkubasi</span>
            <h3 className="text-2xl font-black mt-4">Validasi MVP & 50 Klien Awal</h3>
            <p className="text-amber-100 text-sm mt-2">Membuktikan kecocokan produk dengan kebutuhan pasar dalam 6 bulan pertama.</p>
            <div className="mt-8 text-3xl font-black">100%</div>
            <div className="text-xs text-amber-200">Target Validasi Tercapai</div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-orange-200 shadow-md">
            <span className="text-xs font-black uppercase text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Fase 2 — Scaling</span>
            <h3 className="text-2xl font-black text-slate-900 mt-4">Peningkatan Kapasitas 5x</h3>
            <p className="text-slate-500 text-sm mt-2">Perekrutan talenta kunci dan otomatisasi rantai operasional internal.</p>
            <div className="mt-8 text-3xl font-black text-orange-600">500+</div>
            <div className="text-xs text-slate-400">Pengguna Korporat Baru</div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-orange-200 shadow-md">
            <span className="text-xs font-black uppercase text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Fase 3 — Dominasi</span>
            <h3 className="text-2xl font-black text-slate-900 mt-4">Ekspansi Pasar Nasional</h3>
            <p className="text-slate-500 text-sm mt-2">Menjadi standar industri dengan jangkauan merata di seluruh kota strategis.</p>
            <div className="mt-8 text-3xl font-black text-slate-900">Top 3</div>
            <div className="text-xs text-slate-400">Pangsa Pasar Terbesar</div>
          </div>
        </div>
      </div>
    </section>
  );
}
