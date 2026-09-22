import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MERIDIAN — National Expansion Milestones
 * Timeline historis perkembangan ekspansi jaringan logistik dari rute awal hingga menjangkau seluruh nusantara.
 * Cocok untuk company profile korporat, sejarah perusahaan, dan milestone investasi logistik.
 */
export default function Coverage15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov15-badge', type: 'badge', props: { content: 'EST. 2010 — EKSPANSI JARINGAN', background: '#f8fafc', color: '#475569' } },
    { id: 'cov15-heading', type: 'heading', props: { content: '15 Tahun Membangun Jaringan Logistik Nasional', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov15-text', type: 'text', props: { content: 'Perjalanan konsisten dalam memperluas jangkauan rute darat, laut, dan udara ke setiap sudut tanah air.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const timeline = [
    { year: '2010', title: 'Fondasi Koridor Jawa-Bali', desc: 'Memulai operasi pengiriman dengan 15 armada di koridor Jakarta-Surabaya-Denpasar.' },
    { year: '2016', title: 'Ekspansi Trans-Sumatera & Kalimantan', desc: 'Membuka 25 hub distribusi regional di Sumatera dan gerbang energi Kalimantan.' },
    { year: '2021', title: 'Integrasi Tol Laut Indonesia Timur', desc: 'Menghubungkan Makassar, Ambon, dan Jayapura lewat kemitraan armada kontainer laut.' },
    { year: '2026', title: 'Smart Hub IKN & Jaringan Otomasi', desc: 'Pusat logistik cerdas modern siap mendukung ibu kota baru dan 500+ kota di Indonesia.' },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timeline.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative group hover:shadow-lg transition-all">
              <span className="text-2xl font-black text-indigo-600 block mb-3">{item.year}</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
