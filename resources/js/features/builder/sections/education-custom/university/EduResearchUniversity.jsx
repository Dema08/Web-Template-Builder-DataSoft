import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduResearchUniversity
 * Research centers, Scopus Q1 publications, patents, and global tech grants section.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduResearchUniversity({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'res-badge', type: 'badge', props: { text: 'PUSAT RISET & INOVASI GLOBAL', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' } },
    { id: 'res-title', type: 'heading', props: { content: 'Mendorong Batas Ilmu Pengetahuan dengan Riset Berdampak Tinggi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' } },
    { id: 'res-desc', type: 'paragraph', props: { content: 'NIT mengelola 8 pusat riset interdisipliner dengan pendanaan internasional dan fasilitas supercomputing untuk memecahkan tantangan energi, kesehatan, dan kecerdasan buatan.', fontSize: '16px', color: '#cbd5e1' } },
    // Feat 1
    { id: 'r1-title', type: 'heading', props: { content: 'Supercomputing & Quantum AI Lab', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'r1-desc', type: 'paragraph', props: { content: 'Klaster GPU H100 berkapasitas tinggi untuk komputasi model bahasa besar dan simulasi molekuler obat.', fontSize: '13px', color: '#94a3b8' } },
    // Feat 2
    { id: 'r2-title', type: 'heading', props: { content: 'Renewable Energy & Battery Storage Center', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'r2-desc', type: 'paragraph', props: { content: 'Pengembangan sel baterai sodium-ion generasi baru dan optimasi pembangkit smart grid tenaga surya.', fontSize: '13px', color: '#94a3b8' } },
    // Feat 3
    { id: 'r3-title', type: 'heading', props: { content: 'Autonomous Robotics & Aerospace Facility', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
    { id: 'r3-desc', type: 'paragraph', props: { content: 'Riset wahana nirawak (drone otonom) dan satelit mikro nano bekerja sama dengan badan antariksa.', fontSize: '13px', color: '#94a3b8' } },
    // CTA
    { id: 'res-cta-btn', type: 'button', props: { label: 'Jelajahi Publikasi & Paten Riset ➔', href: '#research', variant: 'outline', size: 'medium', radius: 'lg', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: '#d97706' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'res-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'res-title');
  const descComps = layoutComponents.filter(c => c.id === 'res-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'res-cta-btn');

  const researchLabs = [
    {
      num: '01',
      title: layoutComponents.filter(c => c.id === 'r1-title'),
      desc: layoutComponents.filter(c => c.id === 'r1-desc')
    },
    {
      num: '02',
      title: layoutComponents.filter(c => c.id === 'r2-title'),
      desc: layoutComponents.filter(c => c.id === 'r2-desc')
    },
    {
      num: '03',
      title: layoutComponents.filter(c => c.id === 'r3-title'),
      desc: layoutComponents.filter(c => c.id === 'r3-desc')
    }
  ];

  return (
    <section id="research" className="relative py-24 sm:py-32 bg-[#060c18] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>

            <div className="space-y-4 pt-4">
              {researchLabs.map((r, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#0c172d] border border-blue-900/30 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-950 border border-blue-700 flex items-center justify-center font-mono font-bold text-amber-400 text-xs shrink-0 mt-0.5">
                    {r.num}
                  </div>
                  <div className="space-y-1">
                    {renderLayoutComponents(r.title, sectionId)}
                    {renderLayoutComponents(r.desc, sectionId)}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">{renderLayoutComponents(ctaComps, sectionId)}</div>
          </div>

          {/* Right Research Metric Panel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 bg-[#0b162c] border border-blue-700/30 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  ✦ Academic & Innovation Output
                </span>
                <span className="text-xs font-mono text-blue-300 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
                  Scopus Q1 Indexed
                </span>
              </div>

              {/* Research Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#070e1c] border border-slate-800">
                  <div className="text-3xl font-extrabold text-white">1,450+</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Publikasi Jurnal Internasional</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#070e1c] border border-slate-800">
                  <div className="text-3xl font-extrabold text-amber-400">84</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Paten Teknologi Terdaftar</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#070e1c] border border-slate-800">
                  <div className="text-3xl font-extrabold text-blue-400">42</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Startup Inkubasi Kampus</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#070e1c] border border-slate-800">
                  <div className="text-3xl font-extrabold text-emerald-400">30+</div>
                  <div className="text-xs font-medium text-slate-400 mt-1">Mitra Riset Universitas Dunia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
