import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Dark
 * Navbar ala dev-tools: status dot hijau, breadcrumb path,
 * tombol copy command. Untuk SaaS developer / API / cloud.
 */
export default function Navbar12({ components = [], sectionId = null }) {
  const [copied, setCopied] = useState(false);

  const defaultComponents = [
    { id: 'logo-12', type: 'heading', props: { content: '~/datasoft', level: 'h2', fontSize: '16px', fontWeight: '700', color: '#4ade80' } },
    { id: 'nav-docs', type: 'button', props: { label: 'Docs', href: '#docs', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-api', type: 'button', props: { label: 'API', href: '#api', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-status', type: 'button', props: { label: 'Status', href: '#status', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'cta-deploy', type: 'button', props: { label: '▸ Deploy', href: '#deploy', variant: 'primary', size: 'small', radius: 'md', background: '#22c55e', color: '#052e16' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1117] border-b border-green-500/20 px-4 sm:px-6 py-2.5" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
          </div>
          {renderLayoutComponents(logoComps, sectionId)}
          <span className="hidden md:inline text-xs text-slate-500 select-none">$ main ✓</span>
        </div>
        <div className="hidden md:flex items-center gap-1 text-sm">
          {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
            <span className="text-slate-400 px-3 cursor-default select-none">Docs</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
            className="hidden sm:block text-[11px] text-slate-400 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 hover:text-green-300 transition select-none"
          >
            {copied ? '✓ copied!' : '$ npm i datasoft'}
          </button>
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
    </nav>
  );
}
