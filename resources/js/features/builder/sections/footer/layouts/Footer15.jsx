import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IRIS — Gradient Mesh Footer
 * Mesh warna-warni + kartu kaca + tombol putih.
 * Untuk agency kreatif / portfolio / AI.
 */
export default function Footer15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-15', type: 'heading', props: { content: 'Iris ✦', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-15', type: 'text', props: { content: 'Design at the speed of thought. Colors, type & layout in seconds.', fontSize: '14px', color: '#ddd6fe', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-canvas', type: 'button', props: { label: 'Canvas', href: '#canvas', variant: 'ghost', size: 'small', background: 'transparent', color: '#e9d5ff' } },
    { id: 'link-templates', type: 'button', props: { label: 'Templates', href: '#templates', variant: 'ghost', size: 'small', background: 'transparent', color: '#e9d5ff' } },
    { id: 'link-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e9d5ff' } },
    { id: 'cta-try', type: 'button', props: { label: 'Try Iris Free ✦', href: '#try', variant: 'primary', size: 'small', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'copy-15', type: 'text', props: { content: '© 2026 Iris Labs. Joined by 40,000 designers.', fontSize: '12px', color: '#c4b5fd', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="relative bg-[#1e1b4b] px-6 pt-14 pb-8 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-fuchsia-500/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-10 -right-24 w-[420px] h-[420px] rounded-full bg-cyan-400/30 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
            <div className="flex items-center gap-2 mt-1">
              {['#f0abfc', '#67e8f9', '#fcd34d', '#a5b4fc'].map((c, i) => (
                <span key={i} className="w-7 h-7 rounded-full border-2 border-white/60 -ml-2 first:ml-0" style={{ background: c }} />
              ))}
              <span className="ml-2 text-[11px] text-violet-200 select-none">40.000 designers</span>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-violet-200 mb-3 select-none">CREATE</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-violet-100 cursor-default select-none">Canvas</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-violet-200 mb-3 select-none">STUDIO</p>
            <div className="flex flex-col gap-1.5 text-sm text-violet-100 select-none">
              <span>About</span>
              <span>Blog</span>
              <span>Careers</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-violet-200 select-none">START</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/15 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-violet-300 cursor-default select-none">© 2026 Iris.</span>)}
          <FooterSupportBadge className="text-violet-200" />
        </div>
      </div>
    </footer>
  );
}
