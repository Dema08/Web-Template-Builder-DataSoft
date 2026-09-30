import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduProgramsExecutive
 * Executive masterclass modules and international certification tracks.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduProgramsExecutive({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ex-prog-badge', type: 'badge', props: { text: 'PROGRAM MASTERCLASS & SERTIFIKASI', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' } },
    { id: 'ex-prog-title', type: 'heading', props: { content: 'Pengembangan Kapabilitas Strategis Berstandar Global', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'ex-prog-desc', type: 'paragraph', props: { content: 'Materi intensif berbasis studi kasus riil korporasi dunia dengan sertifikasi kompetensi bertaraf internasional.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Program 1
    { id: 'ep1-title', type: 'heading', props: { content: 'Strategic Board Leadership & GCG', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'ep1-desc', type: 'paragraph', props: { content: 'Pengambilan keputusan tingkat dewan, manajemen krisis korporasi, etika tata kelola (GCG), dan penciptaan nilai pemegang saham.', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'ep1-tag', type: 'badge', props: { text: 'Khusus Direksi & Komisaris', variant: 'solid', background: '#0284c7', color: '#ffffff' } },
    // Program 2
    { id: 'ep2-title', type: 'heading', props: { content: 'Digital Transformation & Enterprise AI Mastery', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'ep2-desc', type: 'paragraph', props: { content: 'Roadmap transformasi digital, adopsi AI generatif korporasi, arsitektur data modern, dan manajemen perubahan budaya digital.', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'ep2-tag', type: 'badge', props: { text: 'Sertifikasi CDTP Terakreditasi', variant: 'solid', background: '#0284c7', color: '#ffffff' } },
    // Program 3
    { id: 'ep3-title', type: 'heading', props: { content: 'Project Management Professional (PMP)® Prep', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'ep3-desc', type: 'paragraph', props: { content: 'Persiapan komprehensif sertifikasi PMP resmi dari Project Management Institute (PMI) dengan tingkat kelulusan 98%.', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'ep3-tag', type: 'badge', props: { text: 'PMI Authorized Partner', variant: 'solid', background: '#0284c7', color: '#ffffff' } },
    // Program 4
    { id: 'ep4-title', type: 'heading', props: { content: 'Strategic Corporate Finance & ERM', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'ep4-desc', type: 'paragraph', props: { content: 'Analisis valuasi investasi, struktur permodalan optimal, mitigasi Enterprise Risk Management (ERM), dan kepatuhan ESG.', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'ep4-tag', type: 'badge', props: { text: 'C-Suite Finance Track', variant: 'solid', background: '#0284c7', color: '#ffffff' } },
    // CTA
    { id: 'ex-prog-cta-btn', type: 'button', props: { label: 'Unduh Kalender Pelatihan 2026 ➔', href: '#contact', variant: 'primary', size: 'medium', radius: 'md', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#ffffff', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'ex-prog-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'ex-prog-title');
  const descComps = layoutComponents.filter(c => c.id === 'ex-prog-desc');
  const ctaComps = layoutComponents.filter(c => c.id === 'ex-prog-cta-btn');

  const programs = [
    {
      icon: '🏛️',
      title: layoutComponents.filter(c => c.id === 'ep1-title'),
      desc: layoutComponents.filter(c => c.id === 'ep1-desc'),
      tag: layoutComponents.filter(c => c.id === 'ep1-tag'),
    },
    {
      icon: '⚡',
      title: layoutComponents.filter(c => c.id === 'ep2-title'),
      desc: layoutComponents.filter(c => c.id === 'ep2-desc'),
      tag: layoutComponents.filter(c => c.id === 'ep2-tag'),
    },
    {
      icon: '🎯',
      title: layoutComponents.filter(c => c.id === 'ep3-title'),
      desc: layoutComponents.filter(c => c.id === 'ep3-desc'),
      tag: layoutComponents.filter(c => c.id === 'ep3-tag'),
    },
    {
      icon: '📊',
      title: layoutComponents.filter(c => c.id === 'ep4-title'),
      desc: layoutComponents.filter(c => c.id === 'ep4-desc'),
      tag: layoutComponents.filter(c => c.id === 'ep4-tag'),
    }
  ];

  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-[#090e18] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 4 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0f1726] border border-cyan-950 hover:border-cyan-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#080d15] border border-slate-700 flex items-center justify-center text-2xl">
                    {p.icon}
                  </div>
                  <div className="inline-flex">{renderLayoutComponents(p.tag, sectionId)}</div>
                </div>
                <div className="space-y-3">
                  {renderLayoutComponents(p.title, sectionId)}
                  {renderLayoutComponents(p.desc, sectionId)}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-400">
                <span>Silabus & Jadwal Sesi</span>
                <span>Lihat Modul ➔</span>
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
