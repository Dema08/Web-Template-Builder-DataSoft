import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceFooterTech
 * Dark tech console footer with system operational indicators and links.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceFooterTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ftr-tc-brand', type: 'heading', props: { content: 'SYNAPSE.TECH', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em' } },
    { id: 'ftr-tc-tagline', type: 'paragraph', props: { content: 'Enterprise Cloud Architecture & Distributed Systems Engineering. Built for mission-critical digital scale.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'ftr-tc-copy', type: 'paragraph', props: { content: '© 2026 Synapse Technologies Ltd. High-Reliability Systems Architecture.', fontSize: '12px', color: '#64748b' } },
    { id: 'ftr-tc-lnk1', type: 'button', props: { label: 'Cloud Infrastructure', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'ftr-tc-lnk2', type: 'button', props: { label: 'Microservices & APIs', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'ftr-tc-lnk3', type: 'button', props: { label: 'Cybersecurity SOC-2', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'ftr-tc-lnk4', type: 'button', props: { label: 'Data & AI Pipeline', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.id === 'ftr-tc-brand');
  const taglineComps = layoutComponents.filter(c => c.id === 'ftr-tc-tagline');
  const copyComps = layoutComponents.filter(c => c.id === 'ftr-tc-copy');
  const techLinks = layoutComponents.filter(c => ['ftr-tc-lnk1', 'ftr-tc-lnk2', 'ftr-tc-lnk3', 'ftr-tc-lnk4'].includes(c.id));

  return (
    <footer className="relative bg-[#030610] border-t border-slate-800/80 text-white overflow-hidden pt-16 pb-12 font-mono">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 font-sans">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                &lt;&gt;
              </div>
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="max-w-sm">
              {renderLayoutComponents(taglineComps, sectionId)}
            </div>
            <div className="pt-2 text-xs font-mono text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              Primary Node: ap-southeast-3 (Jakarta)
            </div>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">Solusi Teknis</div>
            <div className="flex flex-col items-start gap-1">
              {renderLayoutComponents(techLinks, sectionId)}
            </div>
          </div>

          {/* Security & NOC */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">Network Operations Center (NOC)</div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Cyber 2 Tower, 18th Floor<br />
              Jl. HR Rasuna Said, Jakarta 12950
            </p>
            <p className="text-xs text-cyan-300 font-mono pt-1">
              noc@synapse.tech • Incident hotline: 24/7
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
          {renderLayoutComponents(copyComps, sectionId)}
          <div className="flex items-center gap-6 text-slate-500 font-mono text-[11px]">
            <span className="hover:text-slate-300 cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-slate-300 cursor-pointer">SLA Agreement</span>
            <span className="hover:text-slate-300 cursor-pointer">Status Page</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
