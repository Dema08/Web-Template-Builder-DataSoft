import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingFooterCapital
 * Venture capital fund disclosures, regulatory compliance, and office directory.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingFooterCapital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ft-logo-c', type: 'heading', props: { content: 'VANGUARD APEX CAPITAL GROUP', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.08em' } },
    { id: 'ft-desc-c', type: 'text', props: { content: 'Global venture capital & private equity holding backing generational technology leaders across Southeast Asia & globally.', fontSize: '13px', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <footer className="bg-[#020202] border-t border-slate-900 text-white pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
        {/* Col 1 Brand */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-black text-slate-950 text-lg">
              V
            </div>
            {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}
          </div>
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-400">
            <span className="bg-slate-950 border border-slate-800 px-3 py-1 rounded-full">MAS Licensed Fund Manager</span>
            <span className="bg-slate-950 border border-slate-800 px-3 py-1 rounded-full">SEC Regulated</span>
            <span className="bg-slate-950 border border-slate-800 px-3 py-1 rounded-full">ILPA Member</span>
          </div>
        </div>

        {/* Col 2 Fund Focus */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-emerald-400 uppercase tracking-wider">Investment Focus</p>
          <ul className="space-y-2 text-slate-400">
            <li>Enterprise AI & Cloud</li>
            <li>Fintech & Open Banking</li>
            <li>Genomics & Healthcare</li>
            <li>ClimateTech & EV Mobility</li>
          </ul>
        </div>

        {/* Col 3 Portfolio Exits */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-emerald-400 uppercase tracking-wider">Notable Exits & IPOs</p>
          <ul className="space-y-2 text-slate-400">
            <li>NeuroScale AI (NASDAQ)</li>
            <li>PayNusantara (IDX)</li>
            <li>CloudScale Asia (M&A)</li>
            <li>BioGenomiQ (NYSE)</li>
          </ul>
        </div>

        {/* Col 4 Global Offices */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-emerald-400 uppercase tracking-wider">Global Offices</p>
          <ul className="space-y-2 text-slate-400">
            <li className="text-white font-bold">Singapore Headquarters:</li>
            <li>One Raffles Quay #38-01</li>
            <li className="text-white font-bold mt-2">Jakarta Office:</li>
            <li>Pacific Century Place SCBD</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Vanguard Apex Capital Group Pte Ltd. All Rights Reserved.</p>
        <p className="font-mono text-[11px]">This website does not constitute an offer to sell or buy securities.</p>
      </div>
    </footer>
  );
}
