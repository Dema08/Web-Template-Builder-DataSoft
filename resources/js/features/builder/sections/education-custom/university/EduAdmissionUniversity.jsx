import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduAdmissionUniversity
 * Admission pathways, scholarship criteria, and application CTA for University variation.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduAdmissionUniversity({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'adm-badge', type: 'badge', props: { text: 'PENERIMAAN MAHASISWA BARU 2026/2027', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' } },
    { id: 'adm-title', type: 'heading', props: { content: 'Wujudkan Impian Menjadi Insinyur & Peneliti Berdaya Saing Global', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', textAlign: 'center' } },
    { id: 'adm-desc', type: 'paragraph', props: { content: 'Pilih jalur seleksi yang sesuai dengan minat dan potensimu. Dapatkan kesempatan beasiswa bebas biaya kuliah penuh hingga lulus.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    { id: 'adm-btn1', type: 'button', props: { label: 'Daftar Online Sekarang (PMB) 🎓', href: '#admission', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
    { id: 'adm-btn2', type: 'button', props: { label: 'Konsultasi Tim Admisi Kampus', href: '#admission', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'adm-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'adm-title');
  const descComps = layoutComponents.filter(c => c.id === 'adm-desc');
  const btn1Comps = layoutComponents.filter(c => c.id === 'adm-btn1');
  const btn2Comps = layoutComponents.filter(c => c.id === 'adm-btn2');

  return (
    <section id="admission" className="relative py-24 sm:py-32 bg-[#060b18] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0c1830] via-[#081224] to-[#040813] border border-blue-600/30 shadow-2xl text-center space-y-8 overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>

          <div className="relative space-y-4 max-w-3xl mx-auto">
            {renderLayoutComponents(titleComps, sectionId)}
            {renderLayoutComponents(descComps, sectionId)}
          </div>

          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-4">
            {renderLayoutComponents(btn1Comps, sectionId)}
            {renderLayoutComponents(btn2Comps, sectionId)}
          </div>

          {/* Admission Pathways footer */}
          <div className="relative pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><span className="text-amber-400">●</span> Jalur Nilai Rapor (Tanpa Tes)</span>
            <span className="flex items-center gap-1.5"><span className="text-blue-400">●</span> Jalur Beasiswa Prestasi & OSN</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">●</span> CBT Online Test Fleksibel</span>
          </div>
        </div>
      </div>
    </section>
  );
}
