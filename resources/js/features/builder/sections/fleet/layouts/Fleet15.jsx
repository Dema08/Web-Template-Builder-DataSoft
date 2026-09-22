import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MERIDIAN — Timeline Fleet History
 * Timeline horizontal armada: sejarah dan perkembangan armada.
 * Untuk perusahaan ekspedisi dengan warisan dan kredibilitas lama.
 */
export default function Fleet15({ components = [], sectionId = null }) {
  const milestones = [
    { year: '2000', title: 'Berdiri', desc: '10 truk pertama, melayani Jabodetabek.' },
    { year: '2008', title: 'Ekspansi', desc: 'Masuk jalur laut, 5 kapal kargo pertama.' },
    { year: '2015', title: '200 Armada', desc: 'Jangkauan meluas ke seluruh Jawa & Bali.' },
    { year: '2020', title: 'Digital', desc: 'Integrasi GPS realtime & aplikasi tracking.' },
    { year: '2026', title: '500+ Unit', desc: 'Armada terbesar dengan teknologi AI.' },
  ];

  const defaultComponents = [
    { id: 'flt15-badge', type: 'badge', props: { content: 'EST. 2000 — JAKARTA • INDONESIA', background: '#1c1917', color: '#e7c873' } },
    { id: 'flt15-heading', type: 'heading', props: { content: 'Dua Dekade Kepercayaan dalam Armada', level: 'h2', fontSize: '52px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt15-text', type: 'text', props: { content: 'Dari 10 truk ke 500+ unit armada modern — perjalanan kami dimulai dari komitmen sederhana: kirim tepat waktu, tanpa alasan.', fontSize: '17px', color: '#57534e', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-[#faf9f6] border-b-2 border-stone-900" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-6 w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="flex items-center gap-3 my-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
            <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>
          <div className="max-w-2xl">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        </div>
        {/* Timeline */}
        <div className="relative mt-10">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-stone-300 hidden lg:block" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {milestones.map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-10 h-10 rounded-full border-2 border-stone-900 bg-[#c9a227] flex items-center justify-center shadow-[4px_4px_0_#1c1917] select-none z-10">
                  <span className="text-xs font-black text-stone-900">{i + 1}</span>
                </div>
                <p className="text-lg font-black text-stone-900 mt-3">{m.year}</p>
                <p className="text-sm font-bold text-amber-700 mt-1">{m.title}</p>
                <p className="text-xs text-stone-500 mt-2 max-w-[120px]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
