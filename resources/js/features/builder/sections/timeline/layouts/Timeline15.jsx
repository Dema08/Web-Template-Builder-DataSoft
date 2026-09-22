import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MERIDIAN — Vertical Heritage Spine
 * Lini masa vertikal klasik dengan tiang poros tengah yang menghubungkan kartu berselang-seling kiri dan kanan.
 * Cocok untuk company profile korporat, sejarah universitas, dan perjalanan brand legendaris.
 */
export default function Timeline15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml15-badge', type: 'badge', props: { content: 'EST. 2012 — PERJALANAN HISTORIS', background: '#f8fafc', color: '#475569' } },
    { id: 'tml15-heading', type: 'heading', props: { content: 'Kilas Balik Dedikasi Dari Masa Ke Masa', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml15-text', type: 'text', props: { content: 'Menelusuri setiap babak penting dalam perjalanan membangun reputasi yang kokoh dan tepercaya.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const history = [
    { year: '2012', title: 'Langkah Awal & Peletakan Fondasi', desc: 'Didirikan dengan komitmen kuat memberikan layanan profesional berstandar etika tertinggi.' },
    { year: '2017', title: 'Ekspansi Layanan & Akreditasi', desc: 'Meraih akreditasi formal dan memperluas portofolio solusi ke berbagai sektor industri utama.' },
    { year: '2021', title: 'Transformasi Digital Nasional', desc: 'Mengadopsi infrastruktur awan terpadu untuk melayani ribuan pengguna di seluruh Nusantara.' },
    { year: '2026', title: 'Kepemimpinan & Inovasi Global', desc: 'Menjadi pionir terdepan dalam solusi cerdas yang menginspirasi kemajuan industri.' },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-32 space-y-8">
          {history.map((h, i) => (
            <div key={i} className="relative pl-8 group">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover:scale-125 transition-transform" />
              <span className="inline-block text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-2">{h.year}</span>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-900">{h.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
