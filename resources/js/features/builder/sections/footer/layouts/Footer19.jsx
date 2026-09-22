import { useState } from 'react';
import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KIOSO — Rounded Playful Footer
 * Pastel + border kartun + promo buy-1-get-1.
 * Untuk F&B / kids / resto ceria.
 */
export default function Footer19({ components = [], sectionId = null }) {
  const [subs, setSubs] = useState(12480);
  const defaultComponents = [
    { id: 'brand-19', type: 'heading', props: { content: '🍔 Kioso', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-19', type: 'text', props: { content: 'Fresh burgers, creamy shakes & crispy fries — hot in 20 minutes.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-menu', type: 'button', props: { label: 'Menu', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-outlets', type: 'button', props: { label: 'Outlets', href: '#outlets', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-promo', type: 'button', props: { label: 'Promo', href: '#promo', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-order', type: 'button', props: { label: 'Order Now 🍔', href: '#order', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'copy-19', type: 'text', props: { content: '© 2026 Kioso Kitchen. 12,000+ happy kids ★★★★★', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-[#fef9c3] px-6 py-12">
      <div className="max-w-6xl mx-auto bg-white border-[3px] border-slate-900 rounded-[28px] p-8 shadow-[8px_8px_0_#0f172a] grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start -rotate-[0.3deg]">
        <div>
          {renderLayoutComponents(brandComps, sectionId)}
          <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
          <div
            className="mt-1 inline-flex items-center gap-2 bg-pink-100 border-2 border-slate-900 rounded-full px-3 py-1.5 cursor-pointer select-none"
            onClick={(e) => { e.stopPropagation(); setSubs(s => s + 1); }}
          >
            <span className="text-xs font-black">🎉 {subs.toLocaleString('id-ID')} foodies joined</span>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-black tracking-[0.25em] mb-3 select-none">🍟 MENU</p>
          <div className="flex flex-col items-start gap-1 font-bold">
            {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm cursor-default select-none">Menu</span>)}
          </div>
        </div>
        <div>
          <p className="text-[11px] font-black tracking-[0.25em] mb-3 select-none">🏠 OUTLETS</p>
          <div className="flex flex-col gap-1.5 text-sm font-bold select-none">
            <span>Kemang</span>
            <span>BSD</span>
            <span>Bandung</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-black tracking-[0.25em] select-none">🛵 ORDER</p>
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
      <div className="mt-6 text-center font-bold">
        {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs cursor-default select-none">© 2026 Kioso.</span>)}
        <FooterSupportBadge className="text-slate-500" />
      </div>
    </footer>
  );
}
