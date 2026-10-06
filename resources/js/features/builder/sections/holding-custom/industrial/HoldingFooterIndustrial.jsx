import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingFooterIndustrial
 * Section: Industrial Group Footer with Plant Directory, Compliance & Safety Hotlines
 */
export default function HoldingFooterIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ifoot-heading', type: 'heading', props: { content: 'SOVEREIGN INDUSTRIAL GROUP TBK', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#ffffff' } },
    { id: 'ifoot-text-1', type: 'text', props: { content: 'Sovereign Industrial Tower, Mega Kuningan Barat Lot 5, Jakarta Selatan 12950, Indonesia. Telp: +62 21 5790 9900 | E-Procurement: vendor.desk@sovereignindustrial.co.id', fontSize: '14px', color: '#94a3b8' } },
    {
      id: 'ifoot-card-1',
      type: 'card',
      props: { background: 'transparent' },
      childrenComponents: [
        { id: 'ifc-head-1', type: 'heading', props: { content: 'Divisi Industri Manufaktur', level: 'h5', fontSize: '15px', color: '#ffffff' } },
        { id: 'ifc-btn-1a', type: 'button', props: { label: 'Metalurgi & Smelter Nikel/Tembaga', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
        { id: 'ifc-btn-1b', type: 'button', props: { label: 'Pabrik Sel Surya & Modul PV', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
        { id: 'ifc-btn-1c', type: 'button', props: { label: 'Robotika & Otomasi CNC Pabrik', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
        { id: 'ifc-btn-1d', type: 'button', props: { label: 'Terminal Pelabuhan Laut Dalam', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
      ],
    },
    {
      id: 'ifc-card-2',
      type: 'card',
      props: { background: 'transparent' },
      childrenComponents: [
        { id: 'ifc-head-2', type: 'heading', props: { content: 'Kepatuhan & E-Procurement', level: 'h5', fontSize: '15px', color: '#ffffff' } },
        { id: 'ifc-btn-2a', type: 'button', props: { label: 'Portal Vendor & Syarat Tender', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
        { id: 'ifc-btn-2b', type: 'button', props: { label: 'Standar K3 & Manual ISO 45001', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
        { id: 'ifc-btn-2c', type: 'button', props: { label: 'Laporan AMDAL & Mutu Udara CEMS', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
        { id: 'ifc-btn-2d', type: 'button', props: { label: 'Whistleblower & Whistleblowing System', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
      ],
    },
    { id: 'ifoot-text-2', type: 'text', props: { content: '© 2026 PT Sovereign Industrial Group Tbk. Seluruh hak cipta dilindungi undang-undang. Sertifikasi ISO 9001, ISO 14001, ISO 45001, ISO 17025.', fontSize: '12px', color: '#64748b' } },
  ];

  const comps = components.length > 0 ? components : defaultComponents;
  const headings = comps.filter((c) => c.type === 'heading');
  const texts = comps.filter((c) => c.type === 'text');
  const cards = comps.filter((c) => c.type === 'card');
  const buttons = comps.filter((c) => c.type === 'button');

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t-2 border-amber-500/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2">
            {headings.length > 0 && <div className="mb-4">{renderLayoutComponents(headings.slice(0, 1), sectionId)}</div>}
            {texts.length > 0 && <div className="mb-6 max-w-sm">{renderLayoutComponents(texts.slice(0, 1), sectionId)}</div>}
            {buttons.length > 0 && <div className="flex flex-wrap gap-3">{renderLayoutComponents(buttons, sectionId)}</div>}
          </div>

          {/* Navigation Columns / Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.length > 0 && renderLayoutComponents(cards, sectionId)}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            {texts.length > 1 ? renderLayoutComponents(texts.slice(1, 2), sectionId) : (
              <p>© 2026 Sovereign Industrial Group Tbk. Hak cipta dilindungi.</p>
            )}
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              ISO 9001, 14001, 45001 Certified Group Plants
            </span>
            <span>Zero-Harm K3 Target 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
