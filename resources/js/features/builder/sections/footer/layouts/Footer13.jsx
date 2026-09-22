import { useState } from 'react';
import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — App Download Footer
 * Fokus unduhan aplikasi + toggle OS + rating.
 * Untuk mobile apps / fintech / edtech.
 */
export default function Footer13({ components = [], sectionId = null }) {
  const [os, setOs] = useState('iOS');
  const defaultComponents = [
    { id: 'brand-13', type: 'heading', props: { content: 'Solstice Bank', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-13', type: 'text', props: { content: 'Banking that fits in your pocket. ★★★★★ 4.9 — 2M+ downloads.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-features', type: 'button', props: { label: 'Features', href: '#features', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-help', type: 'button', props: { label: 'Help', href: '#help', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-ios', type: 'button', props: { label: ' App Store', href: '#ios', variant: 'primary', size: 'small', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'cta-android', type: 'button', props: { label: '▶ Google Play', href: '#android', variant: 'outline', size: 'small', radius: 'lg', background: '#0f172a', color: '#0f172a' } },
    { id: 'copy-13', type: 'text', props: { content: '© 2026 Solstice. Free, no credit card.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-gradient-to-br from-orange-50 via-white to-rose-50 px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
        <div>
          {renderLayoutComponents(brandComps, sectionId)}
          <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
          <div className="flex gap-2 mt-1" onClick={(e) => e.stopPropagation()}>
            {['iOS', 'Android'].map(o => (
              <button
                key={o}
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOs(o); }}
                className={`text-[11px] font-bold rounded-full px-4 py-1.5 transition-all select-none ${os === o ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}
              >
                {o}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 mt-2 select-none">Menampilkan tombol untuk: {os}</p>
        </div>
        <div>
          <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 mb-3 select-none">APP</p>
          <div className="flex flex-col items-start gap-1">
            {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-slate-500 cursor-default select-none">Features</span>)}
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
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 select-none">DOWNLOAD</p>
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-orange-100 text-center">
        {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-slate-400 cursor-default select-none">© 2026 Solstice.</span>)}
        <FooterSupportBadge className="text-slate-400" />
      </div>
    </footer>
  );
}
