import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduFooterBootcamp
 * Cyber-themed bootcamp footer with career track links, community Discord, and hiring hotline.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduFooterBootcamp({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ftr-bt-brand', type: 'heading', props: { content: 'CODESPHERE.ACADEMY', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' } },
    { id: 'ftr-bt-tagline', type: 'paragraph', props: { content: 'Akselerator Karir Teknologi Terdepan. Menjembatani talenta non-IT dan profesional menuju karir software engineer kelas dunia.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'ftr-bt-copy', type: 'paragraph', props: { content: '© 2026 CodeSphere Academy Inc. All rights reserved.', fontSize: '12px', color: '#64748b' } },
    { id: 'ftr-bt-lnk1', type: 'button', props: { label: 'Fullstack Web Engineering', href: '#tracks', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-bt-lnk2', type: 'button', props: { label: 'Applied AI & LLM Systems', href: '#tracks', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-bt-lnk3', type: 'button', props: { label: 'Data Science & MLOps', href: '#tracks', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-bt-lnk4', type: 'button', props: { label: 'Skema Beasiswa & ISA', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.id === 'ftr-bt-brand');
  const taglineComps = layoutComponents.filter(c => c.id === 'ftr-bt-tagline');
  const copyComps = layoutComponents.filter(c => c.id === 'ftr-bt-copy');
  const trackLinks = layoutComponents.filter(c => ['ftr-bt-lnk1', 'ftr-bt-lnk2', 'ftr-bt-lnk3', 'ftr-bt-lnk4'].includes(c.id));

  return (
    <footer className="relative bg-[#05010b] border-t border-purple-950 text-white overflow-hidden pt-16 pb-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-950">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-mono font-bold text-white text-xs">
                &lt;/&gt;
              </div>
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="max-w-sm">
              {renderLayoutComponents(taglineComps, sectionId)}
            </div>
            <div className="flex items-center gap-3 pt-2">
              {['Discord Community (15k+)', 'GitHub Student Pack', 'LinkedIn Alumni', 'YouTube Tutorials'].map((soc, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs rounded-full bg-[#130728] border border-purple-800/40 text-purple-300 hover:text-white transition-all cursor-pointer"
                >
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/* Tracks Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">Career Tracks</div>
            <div className="flex flex-col items-start gap-1">
              {renderLayoutComponents(trackLinks, sectionId)}
            </div>
          </div>

          {/* Campus & Admissions */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400">Tech Campus & Admissions</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Cyber Tech Hub, Lt. 8, Mega Kuningan<br />
              Jakarta Selatan, DKI Jakarta 12950
            </p>
            <p className="text-sm text-indigo-300 font-medium pt-1">
              Admission Hotline: 0811-9876-5432 • admissions@codesphere.academy
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {renderLayoutComponents(copyComps, sectionId)}
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Student Terms</span>
            <span className="hover:text-slate-300 cursor-pointer">Job Guarantee Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">ISA Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
