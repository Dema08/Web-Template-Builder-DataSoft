import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TRANSGO — Logistics Pro Footer
 * Topbar orange + badge armada live + kontak cabang.
 * Untuk logistik / ekspedisi / cargo.
 */
export default function Footer18({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-18', type: 'heading', props: { content: 'TRANSGO', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-18', type: 'text', props: { content: 'Darat, laut & udara. On-time 99.8% ke 50+ kota.', fontSize: '14px', color: '#fed7aa', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-services', type: 'button', props: { label: 'Services', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#fdba74' } },
    { id: 'link-tracking', type: 'button', props: { label: 'Tracking', href: '#tracking', variant: 'ghost', size: 'small', background: 'transparent', color: '#fdba74' } },
    { id: 'link-coverage', type: 'button', props: { label: 'Coverage', href: '#coverage', variant: 'ghost', size: 'small', background: 'transparent', color: '#fdba74' } },
    { id: 'cta-quote', type: 'button', props: { label: 'Request a Quote →', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'copy-18', type: 'text', props: { content: '© 2026 Transgo Logistics. 500+ armada aktif, 24/7 support.', fontSize: '12px', color: '#fb923c', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-slate-950">
      <div className="bg-orange-500 text-white px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold select-none">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            500+ ARMADA AKTIF — 12.480 PAKET HARI INI
          </span>
          <span>Hotline 24/7: 1500-882</span>
        </div>
      </div>
      <div className="px-6 pt-12 pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
            <div className="flex items-center gap-6 mt-2 select-none pointer-events-none">
              <div><p className="text-lg font-black text-white">99.8%</p><p className="text-[10px] text-orange-300">On-time</p></div>
              <div className="w-px h-8 bg-white/10" />
              <div><p className="text-lg font-black text-white">50+</p><p className="text-[10px] text-orange-300">Kota</p></div>
              <div className="w-px h-8 bg-white/10" />
              <div><p className="text-lg font-black text-white">24/7</p><p className="text-[10px] text-orange-300">Support</p></div>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-orange-400 mb-3 select-none">SERVICES</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-orange-200 cursor-default select-none">Services</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-orange-400 mb-3 select-none">HUB</p>
            <div className="flex flex-col gap-1.5 text-sm text-orange-200 select-none">
              <span>Jakarta — HQ</span>
              <span>Surabaya</span>
              <span>Makassar</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-orange-400 select-none">QUOTE</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-orange-400 cursor-default select-none">© 2026 Transgo.</span>)}
        </div>
      </div>
    </footer>
  );
}
