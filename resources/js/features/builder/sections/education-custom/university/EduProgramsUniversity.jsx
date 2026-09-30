import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduProgramsUniversity
 * Academic faculties and degree programs showcase for University variation.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduProgramsUniversity({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prog-badge', type: 'badge', props: { text: 'PROGRAM STUDI & FAKULTAS', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' } },
    { id: 'prog-title', type: 'heading', props: { content: 'Pilihan Jenjang Sarjana, Magister & Doktoral Berkelas Dunia', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'prog-desc', type: 'paragraph', props: { content: 'Kurikulum berbasis proyek industri riil dengan sertifikasi kompetensi internasional dari Microsoft, AWS, dan Cisco.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Program 1
    { id: 'pr1-title', type: 'heading', props: { content: 'S1 Teknik Informatika & Kecerdasan Buatan (AI)', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'pr1-desc', type: 'paragraph', props: { content: 'Spesialisasi machine learning, computer vision, deep neural network, dan scalable cloud engineering.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'pr1-tag', type: 'badge', props: { text: 'Akreditasi Internasional ABET', variant: 'solid', background: '#1e3a8a', color: '#93c5fd' } },
    // Program 2
    { id: 'pr2-title', type: 'heading', props: { content: 'S1 Robotika & Sistem Otomasi Industri', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'pr2-desc', type: 'paragraph', props: { content: 'Fokus pada Internet of Things (IoT), autonomous vehicles, mekatronika presisi, dan smart manufacturing.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'pr2-tag', type: 'badge', props: { text: 'Laboratorium Jerman Berstandar DIN', variant: 'solid', background: '#1e3a8a', color: '#93c5fd' } },
    // Program 3
    { id: 'pr3-title', type: 'heading', props: { content: 'S1 Bisnis Digital & Financial Technology', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'pr3-desc', type: 'paragraph', props: { content: 'Mengintegrasikan manajemen strategi, blockchain analytics, algoritma kuantitatif trading, dan venture capital.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'pr3-tag', type: 'badge', props: { text: 'Kerjasama Bloomberg Terminal', variant: 'solid', background: '#1e3a8a', color: '#93c5fd' } },
    // Program 4
    { id: 'pr4-title', type: 'heading', props: { content: 'S2 Magister Keamanan Siber & Kriptografi', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'pr4-desc', type: 'paragraph', props: { content: 'Program pascasarjana pertahanan siber, post-quantum cryptography, dan audit kepatuhan keamanan infrastruktur vital.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'pr4-tag', type: 'badge', props: { text: 'ISO 27001 Security Center', variant: 'solid', background: '#1e3a8a', color: '#93c5fd' } },
    // CTA
    { id: 'prog-cta-btn', type: 'button', props: { label: 'Lihat Seluruh 24 Program Studi ➔', href: '#admission', variant: 'primary', size: 'medium', radius: 'lg', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'prog-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'prog-title');
  const descComps = layoutComponents.filter(c => c.id === 'prog-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'prog-cta-btn');

  const programs = [
    {
      icon: '🧠',
      title: layoutComponents.filter(c => c.id === 'pr1-title'),
      desc: layoutComponents.filter(c => c.id === 'pr1-desc'),
      tag: layoutComponents.filter(c => c.id === 'pr1-tag'),
    },
    {
      icon: '🤖',
      title: layoutComponents.filter(c => c.id === 'pr2-title'),
      desc: layoutComponents.filter(c => c.id === 'pr2-desc'),
      tag: layoutComponents.filter(c => c.id === 'pr2-tag'),
    },
    {
      icon: '📈',
      title: layoutComponents.filter(c => c.id === 'pr3-title'),
      desc: layoutComponents.filter(c => c.id === 'pr3-desc'),
      tag: layoutComponents.filter(c => c.id === 'pr3-tag'),
    },
    {
      icon: '🔒',
      title: layoutComponents.filter(c => c.id === 'pr4-title'),
      desc: layoutComponents.filter(c => c.id === 'pr4-desc'),
      tag: layoutComponents.filter(c => c.id === 'pr4-tag'),
    }
  ];

  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-[#091224] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 4 Cards 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0f1d38] border border-blue-900/40 hover:border-amber-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-800 flex items-center justify-center text-2xl">
                    {p.icon}
                  </div>
                  <div className="inline-flex">{renderLayoutComponents(p.tag, sectionId)}</div>
                </div>
                <div className="space-y-3">
                  {renderLayoutComponents(p.title, sectionId)}
                  {renderLayoutComponents(p.desc, sectionId)}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>Rencana Studi & Mata Kuliah</span>
                <span>Lihat Silabus ➔</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
