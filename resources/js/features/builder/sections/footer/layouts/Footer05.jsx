import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Sporty Strip Footer
 * Merah sporty + strip statistik + link cepat.
 * Untuk otomotif / sport / eSports.
 */
export default function Footer05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-5', type: 'heading', props: { content: 'VELOCE', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-5', type: 'text', props: { content: 'Born to outrun. 680HP hybrid — the fastest ever built.', fontSize: '14px', color: '#fecaca', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-models', type: 'button', props: { label: 'Models', href: '#models', variant: 'ghost', size: 'small', background: 'transparent', color: '#fca5a5' } },
    { id: 'link-dealers', type: 'button', props: { label: 'Dealers', href: '#dealers', variant: 'ghost', size: 'small', background: 'transparent', color: '#fca5a5' } },
    { id: 'link-racing', type: 'button', props: { label: 'Racing', href: '#racing', variant: 'ghost', size: 'small', background: 'transparent', color: '#fca5a5' } },
    { id: 'cta-test', type: 'button', props: { label: 'Book Test Drive →', href: '#test', variant: 'primary', size: 'small', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'social-5', type: 'social', props: { platforms: ['instagram', 'youtube', 'twitter'], size: 'medium' } },
    { id: 'copy-5', type: 'text', props: { content: '© 2026 Veloce Motors. Unleashed.', fontSize: '12px', color: '#f87171', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const socialComps = layoutComponents.filter(c => c.type === 'social');
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-slate-950 overflow-hidden">
      <div className="bg-red-600 text-white text-center text-[11px] font-black tracking-[0.3em] py-2 select-none">VELOCE GT — UNLEASHED</div>
      <div className="px-6 pt-12 pb-8 relative">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(239,68,68,0.18),transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start italic">
          <div className="not-italic">
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
            <div className="mt-2">{renderLayoutComponents(socialComps, sectionId)}</div>
          </div>
          <div className="not-italic">
            <p className="text-[11px] font-black tracking-[0.25em] text-red-400 mb-3 select-none">GARAGE</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-red-200 cursor-default select-none">Models</span>)}
            </div>
          </div>
          <div className="not-italic">
            <p className="text-[11px] font-black tracking-[0.25em] text-red-400 mb-3 select-none">SPECS</p>
            <div className="flex flex-col gap-1.5 text-sm text-red-200 select-none">
              <span><b className="text-white">2.8s</b> 0–100</span>
              <span><b className="text-white">680</b> HP</span>
              <span><b className="text-white">340</b> km/h</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 not-italic">
            <p className="text-[11px] font-black tracking-[0.25em] text-red-400 select-none">DRIVE</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="relative mt-10 pt-6 border-t border-white/10 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-red-400 cursor-default select-none">© 2026 Veloce.</span>)}
          <FooterSupportBadge className="text-red-400" />
        </div>
      </div>
    </footer>
  );
}
