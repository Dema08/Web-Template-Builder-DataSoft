import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Floating Glass Footer
 * Footer kartu kaca melayang + CTA pill + kolom link.
 * Terang, premium, ala agency mahal.
 */
export default function Footer01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-1', type: 'heading', props: { content: 'LUMIÈRE', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#0f172a', letterSpacing: '0.18em', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-1', type: 'text', props: { content: 'Studio kreatif yang merancang brand dan website premium untuk tim ambisius.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-work', type: 'button', props: { label: 'Work', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-studio', type: 'button', props: { label: 'Studio', href: '#studio', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-journal', type: 'button', props: { label: 'Journal', href: '#journal', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-contact', type: 'button', props: { label: 'Contact', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-book', type: 'button', props: { label: 'Book a Call →', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'copy-1', type: 'text', props: { content: '© 2026 Lumière Studio. All rights reserved.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));

  return (
    <footer className="px-4 sm:px-6 pb-8 pt-4 bg-slate-50">
      <div className="max-w-6xl mx-auto rounded-[28px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_24px_70px_-24px_rgba(15,23,42,0.25)] px-8 py-10">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 via-rose-400 to-indigo-500 shadow-md select-none" />
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="mt-1 max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 mb-3 select-none">MENU</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (
                <>
                  <span className="text-sm text-slate-500 cursor-default select-none">Work</span>
                  <span className="text-sm text-slate-500 cursor-default select-none">Studio</span>
                </>
              )}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 mb-3 select-none">STUDIO</p>
            <div className="flex flex-col gap-1.5 text-sm text-slate-500 select-none">
              <span>hello@lumiere.id</span>
              <span>Kemang, Jakarta</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 select-none">START A PROJECT</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (
            <span className="text-xs text-slate-400 cursor-default select-none">© 2026 Lumière Studio.</span>
          )}
          <FooterSupportBadge className="text-slate-400" />
        </div>
      </div>
    </footer>
  );
}

