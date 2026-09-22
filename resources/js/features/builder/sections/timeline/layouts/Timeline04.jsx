import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Neo-Brutalist Milestone Path
 * Desain neo-brutalist dengan border tebal 4px, drop-shadow kotak solid, warna kontras tinggi, dan badge tahapan tegas.
 * Cocok untuk startup berani, event kreatif, dan brand bernuansa statement kuat.
 */
export default function Timeline04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml4-badge', type: 'badge', props: { content: '★ ROADMAP TAHAPAN KERJA', background: '#fef08a', color: '#000000' } },
    { id: 'tml4-heading', type: 'heading', props: { content: 'PROSES EKSEKUSI TANPA KOMPROMI', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml4-text', type: 'text', props: { content: 'Transparansi total di setiap fase proyek dari konsep awal hingga hasil akhir yang siap digunakan.', fontSize: '16px', color: '#1e293b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const steps = [
    { num: '01', title: 'Audit & Briefing', tag: 'FASE INTI', desc: 'Pengumpulan data menyeluruh dan penetapan target hasil kerja.', bg: '#fef08a' },
    { num: '02', title: 'Penyusunan Solusi', tag: 'DESAIN', desc: 'Perancangan konsep solusi yang disetujui bersama secara formal.', bg: '#bbf7d0' },
    { num: '03', title: 'Produksi & Testing', tag: 'EKSEKUSI', desc: 'Pengerjaan teknis dengan pengujian mutu berkala.', bg: '#fed7aa' },
    { num: '04', title: 'Serah Terima Resmi', tag: 'FINALISASI', desc: 'Penyerahan hasil akhir lengkap dengan garansi dan dokumentasi.', bg: '#bae6fd' },
  ];

  return (
    <section className="py-24 px-6 bg-[#fffbeb] border-y-4 border-black" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-7 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000000] transition-all duration-150 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-black text-2xl text-black">#{s.num}</span>
                  <span className="font-black text-xs px-2.5 py-1 border-2 border-black uppercase" style={{ backgroundColor: s.bg }}>{s.tag}</span>
                </div>
                <h3 className="text-xl font-black text-black">{s.title}</h3>
                <p className="text-sm font-bold text-stone-600 mt-2">{s.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t-2 border-black text-xs font-black uppercase text-stone-500">
                Langkah {s.num} dari 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
