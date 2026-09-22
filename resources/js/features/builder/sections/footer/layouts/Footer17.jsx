import { useState } from 'react';
import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Marketplace Command Footer
 * Search command-bar + kategori + seller CTA.
 * Untuk marketplace / direktori / e-commerce.
 */
export default function Footer17({ components = [], sectionId = null }) {
  const [q, setQ] = useState('');
  const defaultComponents = [
    { id: 'brand-17', type: 'heading', props: { content: 'pulse.', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-17', type: 'text', props: { content: '2M+ products from 40,000 trusted sellers across Indonesia.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-fashion', type: 'button', props: { label: 'Fashion', href: '#fashion', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-electronic', type: 'button', props: { label: 'Electronics', href: '#electronics', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-home', type: 'button', props: { label: 'Home', href: '#home', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-sell', type: 'button', props: { label: 'Start Selling', href: '#sell', variant: 'primary', size: 'small', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'copy-17', type: 'text', props: { content: '© 2026 Pulse Market. 12.480 produk terjual hari ini.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-white px-6 pt-14 pb-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div
          className="flex items-center gap-2 bg-slate-100 border-2 border-slate-200 rounded-full pl-5 pr-2 py-2 mb-10 focus-within:border-slate-900 focus-within:ring-4 focus-within:ring-slate-100 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="text-slate-400 text-lg select-none">⌕</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            placeholder="Search sneakers, laptops, furniture…  ( tekan / )"
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <span className="bg-slate-900 text-white text-xs font-bold rounded-full px-5 py-2.5 select-none">Search</span>
        </div>
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 mb-3 select-none">CATEGORIES</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-slate-500 cursor-default select-none">Fashion</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 mb-3 select-none">SELLER</p>
            <div className="flex flex-col gap-1.5 text-sm text-slate-500 select-none">
              <span>Seller Center</span>
              <span>Logistics</span>
              <span>Help</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 select-none">JOIN</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-100 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-slate-400 cursor-default select-none">© 2026 Pulse.</span>)}
          <FooterSupportBadge className="text-slate-400" />
        </div>
      </div>
    </footer>
  );
}
