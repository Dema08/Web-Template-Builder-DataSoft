import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * GOLDLEAF — Gold Foil Premium Footer
 * Krem + emas foil + ornamen garis ganda.
 * Untuk hotel, perhiasan, brand heritage.
 */
export default function Footer16({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-16', type: 'heading', props: { content: '✦ GOLDLEAF', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#451a03', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-16', type: 'text', props: { content: 'Three generations of craftsmanship — heritage boutiques worldwide.', fontSize: '14px', color: '#92600e', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-boutique', type: 'button', props: { label: 'Boutique', href: '#boutique', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'link-heritage', type: 'button', props: { label: 'Heritage', href: '#heritage', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'link-care', type: 'button', props: { label: 'Care', href: '#care', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'cta-visit', type: 'button', props: { label: '✦ Visit Boutique', href: '#visit', variant: 'primary', size: 'small', radius: 'full', background: '#b45309', color: '#fffbeb' } },
    { id: 'copy-16', type: 'text', props: { content: '© 2026 Goldleaf. Since 1987 — 12 boutiques, 40k patrons.', fontSize: '12px', color: '#a16207', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-[#fffbeb] px-6 pt-14 pb-8" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-500" />
          <span className="text-amber-600 text-lg select-none">✦</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-500" />
        </div>
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-amber-700 mb-3 select-none">MAISON</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm cursor-default select-none">Boutique</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.3em] text-amber-700 mb-3 select-none">ATELIER</p>
            <div className="flex flex-col gap-1.5 text-sm text-amber-900 select-none">
              <span>38 Years</span>
              <span>12 Boutiques</span>
              <span>40k Patrons</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.3em] text-amber-700 select-none">VISIT</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-amber-200 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-amber-700 cursor-default select-none">© 2026 Goldleaf.</span>)}
          <FooterSupportBadge className="text-amber-700" />
        </div>
      </div>
    </footer>
  );
}
