import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Warm Gradient Bento Milestones
 * Tata letak bento box modern bernuansa gradien hangat rose & peach untuk menceritakan kisah perjalanan organisasi.
 * Cocok untuk yayasan, komunitas kreatif, brand fesyen, dan edukasi.
 */
export default function Timeline08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml8-badge', type: 'badge', props: { content: '🌸 KISAH & PERTUMBUHAN KAMI', background: '#fdf2f8', color: '#db2777' } },
    { id: 'tml8-heading', type: 'heading', props: { content: 'Tumbuh Bersama Komunitas Dari Waktu Ke Waktu', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1e293b', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml8-text', type: 'text', props: { content: 'Setiap fase perjalanan kami dipenuhi dedikasi untuk memberikan dampak positif yang nyata dan berkelanjutan.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-rose-50/60 via-white to-pink-50/40" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 p-8 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">2026 — Milestone Terbesar</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-4">Menjangkau 100.000+ Anggota & Mitra</h3>
              <p className="text-rose-100 text-sm md:text-base mt-2 max-w-xl">Ekspansi jejaring program kolaborasi ke 34 provinsi dengan 500+ inisiatif sosial berdaya dampak tinggi.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-6 text-sm font-semibold">
              <div>✦ 34 Provinsi</div>
              <div>✦ 500+ Program</div>
              <div>✦ 99% Dampak Positif</div>
            </div>
          </div>

          <div className="md:col-span-4 p-8 rounded-3xl bg-white border border-rose-100 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-pink-600 bg-pink-50 px-3 py-1 rounded-full">2023 — Transformasi</span>
              <h3 className="text-xl font-bold text-slate-900 mt-4">Digital Hub Platform</h3>
              <p className="text-slate-500 text-sm mt-2">Peluncuran aplikasi interaktif untuk mempermudah akses dan kolaborasi anggota.</p>
            </div>
            <div className="mt-6 text-xs text-rose-500 font-bold">10x Pertumbuhan Aktif</div>
          </div>

          <div className="md:col-span-6 p-8 rounded-3xl bg-white border border-rose-100 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-pink-600 bg-pink-50 px-3 py-1 rounded-full">2020 — Konsolidasi</span>
              <h3 className="text-xl font-bold text-slate-900 mt-4">Kemitraan Lintas Sektor</h3>
              <p className="text-slate-500 text-sm mt-2">Menjalin sinergi strategis dengan institusi pendidikan dan pelaku industri terkemuka.</p>
            </div>
            <div className="mt-6 text-xs text-rose-500 font-bold">50+ Mitra Resmi</div>
          </div>

          <div className="md:col-span-6 p-8 rounded-3xl bg-white border border-rose-100 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase text-pink-600 bg-pink-50 px-3 py-1 rounded-full">2017 — Titik Awal</span>
              <h3 className="text-xl font-bold text-slate-900 mt-4">Inisiasi Komunitas Pertama</h3>
              <p className="text-slate-500 text-sm mt-2">Lahir dari gagasan sekelompok penggerak muda untuk menciptakan ruang berkarya bersama.</p>
            </div>
            <div className="mt-6 text-xs text-rose-500 font-bold">Fondasi Awal Terbentuk</div>
          </div>
        </div>
      </div>
    </section>
  );
}
