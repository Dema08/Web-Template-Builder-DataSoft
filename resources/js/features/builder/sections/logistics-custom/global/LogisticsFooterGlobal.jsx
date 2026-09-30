import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFooterGlobal
 * Dark Luxury international forwarder footer with global office directory.
 */
export default function LogisticsFooterGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ft-logo', type: 'heading', props: { content: 'NEXUS GLOBAL FREIGHT FORWARDING', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#e7c873', letterSpacing: '0.08em' } },
    { id: 'ft-desc', type: 'text', props: { content: 'International air charter freight, ocean container line, and AEO accredited customs brokerage.', fontSize: '13px', color: '#78716c' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <footer className="bg-[#050505] border-t border-[#292524] text-white pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#292524]">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#e7c873]/50 bg-[#141210] flex items-center justify-center text-[#e7c873] font-serif font-black text-sm">
              N
            </div>
            {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}
          </div>
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-2 text-[11px] text-[#a8a29e] pt-2">
            <span className="bg-[#141210] border border-[#292524] px-3 py-1 rounded-full">IATA Agent #NX-8890</span>
            <span className="bg-[#141210] border border-[#292524] px-3 py-1 rounded-full">FIATA Member</span>
            <span className="bg-[#141210] border border-[#292524] px-3 py-1 rounded-full">AEO Customs Green Lane</span>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <p className="font-serif font-bold text-[#e7c873] uppercase tracking-wider">Jakarta HQ Office</p>
          <ul className="space-y-2 text-[#a8a29e]">
            <li>World Trade Centre II, Level 18</li>
            <li>Jl. Jend. Sudirman Kav 29-31, Jakarta</li>
            <li>Desk: +62 21 5299 8800</li>
            <li>jkt.ops@nexus-globalfreight.com</li>
          </ul>
        </div>

        <div className="space-y-3 text-xs">
          <p className="font-serif font-bold text-[#e7c873] uppercase tracking-wider">Singapore Hub</p>
          <ul className="space-y-2 text-[#a8a29e]">
            <li>Marina Bay Financial Tower 3</li>
            <li>12 Marina Blvd, Singapore 018982</li>
            <li>Desk: +65 6800 9900</li>
            <li>sin.ops@nexus-globalfreight.com</li>
          </ul>
        </div>

        <div className="space-y-3 text-xs">
          <p className="font-serif font-bold text-[#e7c873] uppercase tracking-wider">European Gateway</p>
          <ul className="space-y-2 text-[#a8a29e]">
            <li>Port of Rotterdam World Gateway</li>
            <li>Maasvlakte 2, Rotterdam, Netherlands</li>
            <li>Desk: +31 10 799 4400</li>
            <li>rtm.ops@nexus-globalfreight.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716c] gap-4">
        <p>© 2026 Nexus Global Freight Forwarding Ltd. All International Rights Reserved.</p>
        <div className="flex gap-6 text-[#a8a29e]">
          <a href="#" className="hover:text-[#e7c873]">International Maritime Law</a>
          <a href="#" className="hover:text-[#e7c873]">Air Waybill Conditions</a>
          <a href="#" className="hover:text-[#e7c873]">Security Guidelines</a>
        </div>
      </div>
    </footer>
  );
}
