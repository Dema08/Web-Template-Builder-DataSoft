import { useState } from 'react';
import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

export default function Footer20({ components = [], sectionId = null }) {
  const f20progress = 72;
  const defaultComponents = [
    { id: 'brand-20', type: 'heading', props: { content: 'AETHER', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-20', type: 'text', props: { content: 'One platform. Infinite scale.', fontSize: '14px', color: '#a5b4fc', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-platform', type: 'button', props: { label: 'Platform', href: '#platform', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'link-solutions', type: 'button', props: { label: 'Solutions', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Trial', href: '#trial', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'copy-20', type: 'text', props: { content: 'Copyright 2026 Aether OS v4.2.', fontSize: '12px', color: '#6d6fa8', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="relative bg-slate-950 px-6 pt-14 pb-8 overflow-hidden">
      <div className="relative max-w-6xl mx-auto rounded-2xl border border-white/15 bg-slate-950/70 px-8 py-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 mb-3 select-none">PLATFORM</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-slate-300 cursor-default select-none">Platform</span>)}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-slate-400 select-none">START</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-8 h-[3px] rounded-full bg-white/10 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300" style={{ width: f20progress + '%' }} />
        </div>
        <div className="mt-6 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-slate-500 cursor-default select-none">Copyright 2026 Aether.</span>)}
          <FooterSupportBadge className="text-slate-400" />
        </div>
      </div>
    </footer>
  );
}
