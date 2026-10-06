import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduFooterExecutive
 * Executive corporate development footer with certification tracks and contact information.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduFooterExecutive({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ftr-ex-brand', type: 'heading', props: { content: 'APEX LEADERSHIP INSTITUTE', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.06em' } },
    { id: 'ftr-ex-tagline', type: 'paragraph', props: { content: 'Lembaga Pengembangan Eksekutif & Sertifikasi Manajemen Global. Membangun pemimpin tangguh untuk masa depan korporasi Indonesia.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'ftr-ex-copy', type: 'paragraph', props: { content: '© 2026 Apex Leadership & Corporate Institute. Hak cipta dilindungi.', fontSize: '12px', color: '#64748b' } },
    { id: 'ftr-ex-lnk1', type: 'button', props: { label: 'Board Leadership & GCG', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-ex-lnk2', type: 'button', props: { label: 'Project Management (PMP)', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-ex-lnk3', type: 'button', props: { label: 'Digital Transformation Track', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-ex-lnk4', type: 'button', props: { label: 'In-House Corporate RFP', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.id === 'ftr-ex-brand');
  const taglineComps = layoutComponents.filter(c => c.id === 'ftr-ex-tagline');
  const copyComps = layoutComponents.filter(c => c.id === 'ftr-ex-copy');
  const execLinks = layoutComponents.filter(c => ['ftr-ex-lnk1', 'ftr-ex-lnk2', 'ftr-ex-lnk3', 'ftr-ex-lnk4'].includes(c.id));

  return (
    <footer className="relative bg-[#04070d] border-t border-slate-800 text-white overflow-hidden pt-16 pb-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center font-bold text-white text-xs">
                A
              </div>
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="max-w-sm">
              {renderLayoutComponents(taglineComps, sectionId)}
            </div>
            <div className="flex items-center gap-3 pt-2">
              {['PMI ATP #4891', 'HRCI Approved Provider', 'ISO 29993 Certified'].map((soc, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/* Program Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">Program Unggulan</div>
            <div className="flex flex-col items-start gap-1">
              {renderLayoutComponents(execLinks, sectionId)}
            </div>
          </div>

          {/* Corporate Office */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Executive Learning Center</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              World Trade Center II, 16th Floor<br />
              Jl. Jend. Sudirman Kav. 29-31, Jakarta 12920
            </p>
            <p className="text-sm text-cyan-300 font-medium pt-1">
              Corporate Desk: (021) 5296-8800 • corporate@apexleadership.id
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {renderLayoutComponents(copyComps, sectionId)}
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Corporate SLA</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy & NDA Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Alumni Network Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
