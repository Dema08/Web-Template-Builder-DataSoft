import { useState } from 'react';
import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Dark Footer
 * Ala dev-tools: traffic light + command copy + status.
 * Untuk API / cloud / dev-tools SaaS.
 */
export default function Footer12({ components = [], sectionId = null }) {
  const [copied, setCopied] = useState(false);
  const defaultComponents = [
    { id: 'brand-12', type: 'heading', props: { content: '~/datasoft', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-12', type: 'text', props: { content: 'Edge deploys, rollbacks & observability built-in.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-docs', type: 'button', props: { label: 'Docs', href: '#docs', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'link-api', type: 'button', props: { label: 'API', href: '#api', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'link-status', type: 'button', props: { label: 'Status', href: '#status', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'cta-deploy', type: 'button', props: { label: '▸ Deploy Now', href: '#deploy', variant: 'primary', size: 'small', radius: 'md', background: '#22c55e', color: '#052e16' } },
    { id: 'copy-12', type: 'text', props: { content: '© 2026 Datasoft Cloud. 99.99% uptime.', fontSize: '12px', color: '#475569', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-[#0d1117] px-6 py-12" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-6xl mx-auto rounded-2xl border border-green-500/20 bg-black/60 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
          <span className="ml-2 text-xs text-slate-500 select-none">footer — zsh</span>
        </div>
        <div className="p-6 grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
            <div
              className="mt-2 flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 w-fit cursor-pointer hover:border-green-400/40 transition"
              onClick={(e) => {
                e.stopPropagation();
                try { navigator.clipboard?.writeText('npm i @datasoft/cloud'); } catch (err) { /* ignore */ }
                setCopied(true);
                setTimeout(() => setCopied(false), 1400);
              }}
            >
              <span className="text-green-400 text-xs select-none">$ npm i @datasoft/cloud</span>
              <span className="text-[11px] text-slate-400 select-none">{copied ? '✓ copied' : 'copy'}</span>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-slate-500 mb-3 select-none">DOCS</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-slate-400 cursor-default select-none">Docs</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-slate-500 mb-3 select-none">SYSTEM</p>
            <div className="flex flex-col gap-1.5 text-sm text-slate-400 select-none">
              <span className="text-green-400">✓ 99.99% uptime</span>
              <span>✓ SOC2</span>
              <span>✓ 40+ regions</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.25em] text-slate-500 select-none">SHIP</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="px-6 py-4 border-t border-white/10 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-slate-600 cursor-default select-none">© 2026 Datasoft.</span>)}
          <FooterSupportBadge className="text-slate-400" />
        </div>
      </div>
    </footer>
  );
}
