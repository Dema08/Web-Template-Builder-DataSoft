import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OBSIDIAN — Scroll Morph Footer
 * Gelap blur + status sistem + kolom enterprise.
 * Untuk SaaS enterprise / cloud / fintech.
 */
export default function Footer07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-7', type: 'heading', props: { content: 'OBSIDIAN', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.25em', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-7', type: 'text', props: { content: 'Infrastructure that never sleeps. 40 regions, 99.99% uptime.', fontSize: '14px', color: '#94a3b8', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-cloud', type: 'button', props: { label: 'Cloud', href: '#cloud', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'link-security', type: 'button', props: { label: 'Security', href: '#security', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'link-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Free Trial →', href: '#trial', variant: 'primary', size: 'small', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    { id: 'copy-7', type: 'text', props: { content: '© 2026 Obsidian Cloud. All systems operational.', fontSize: '12px', color: '#475569', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="relative bg-slate-950/95 backdrop-blur-xl px-6 pt-14 pb-8 border-t border-white/10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(56,189,248,0.1),transparent)]" />
      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5 mb-8 rounded-full bg-emerald-400/10 border border-emerald-400/20 px-4 py-2 w-fit select-none pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-bold text-emerald-300">ALL SYSTEMS OPERATIONAL — 40/40 REGIONS</span>
        </div>
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-500 mb-3 select-none">PLATFORM</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-slate-400 cursor-default select-none">Cloud</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-500 mb-3 select-none">TRUST</p>
            <div className="flex flex-col gap-1.5 text-sm text-slate-400 select-none">
              <span>SOC2 Type II</span>
              <span>ISO 27001</span>
              <span>GDPR Ready</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-500 select-none">DEPLOY</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-slate-600 cursor-default select-none">© 2026 Obsidian.</span>)}
          <FooterSupportBadge className="text-slate-400" />
        </div>
      </div>
    </footer>
  );
}
