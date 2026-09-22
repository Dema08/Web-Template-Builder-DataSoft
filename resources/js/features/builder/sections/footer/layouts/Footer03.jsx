import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AURORA — Gradient Glow Footer
 * Border gradient indigo-fuchsia-cyan + CTA gradient + kolom rapi.
 * SaaS premium yang selalu terlihat mahal.
 */
export default function Footer03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-3', type: 'heading', props: { content: 'aurora', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-3', type: 'text', props: { content: 'Build websites that feel like magic. Loved by 12,000+ makers.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-product', type: 'button', props: { label: 'Product', href: '#product', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-docs', type: 'button', props: { label: 'Docs', href: '#docs', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-blog', type: 'button', props: { label: 'Blog', href: '#blog', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Free →', href: '#trial', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'copy-3', type: 'text', props: { content: '© 2026 Aurora Inc. All rights reserved.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));

  return (
    <footer className="px-4 sm:px-6 py-10 bg-white">
      <div className="max-w-6xl mx-auto rounded-[24px] bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 p-[2px] shadow-[0_24px_70px_-24px_rgba(99,102,241,0.5)]">
        <div className="rounded-[22px] bg-white px-8 py-10">
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
            <div>
              {renderLayoutComponents(brandComps, sectionId)}
              <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
              <span className="inline-block text-[10px] font-black tracking-widest text-fuchsia-600 bg-fuchsia-50 border border-fuchsia-200 rounded-full px-2.5 py-1 select-none">v3.0 LIVE</span>
            </div>
            <div>
              <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 mb-3 select-none">PRODUCT</p>
              <div className="flex flex-col items-start gap-1">
                {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (
                  <span className="text-sm text-slate-500 cursor-default select-none">Product</span>
                )}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 mb-3 select-none">COMPANY</p>
              <div className="flex flex-col gap-1.5 text-sm text-slate-500 select-none">
                <span>About</span>
                <span>Careers</span>
                <span>Press</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 select-none">GET STARTED</p>
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (
              <span className="text-xs text-slate-400 cursor-default select-none">© 2026 Aurora Inc.</span>
            )}
            <FooterSupportBadge className="text-slate-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
