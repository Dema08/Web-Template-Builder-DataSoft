import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Story
 * Ala terminal: window dots + timeline deploy + copy.
 * Untuk API / cloud / dev-tools SaaS.
 */
export default function About11({ components = [], sectionId = null }) {
  const [copied, setCopied] = useState(false);
  const defaultComponents = [
    { id: 'heading-11', type: 'heading', props: { content: 'Built by developers, for developers', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-11', type: 'text', props: { content: 'From a weekend side-project to the cloud 40,000 teams deploy on. Open source at heart, SOC2 in production.', fontSize: '15px', color: '#94a3b8', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-github', type: 'button', props: { label: '★ Star on GitHub', href: '#github', variant: 'primary', size: 'medium', radius: 'md', background: '#22c55e', color: '#052e16' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return (
    <section className="py-20 px-6 bg-[#0d1117]" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-400 text-sm mb-3 select-none pointer-events-none">$ cat our-story.md</p>
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="rounded-2xl border border-green-500/20 bg-black/60 overflow-hidden shadow-[0_0_60px_-20px_rgba(34,197,94,0.5)]">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
            <span className="ml-2 text-xs text-slate-500 select-none pointer-events-none">history — zsh</span>
          </div>
          <div className="p-5 text-sm leading-7 select-none">
            <p><span className="text-green-400">2019</span> <span className="text-slate-300">— weekend side-project</span></p>
            <p><span className="text-green-400">2022</span> <span className="text-slate-300">— 10k developers, seed round</span></p>
            <p><span className="text-green-400">2024</span> <span className="text-slate-300">— SOC2 + 40 regions live</span></p>
            <p><span className="text-green-400">2026</span> <span className="text-cyan-300">— 40,000 teams ship here</span></p>
            <div
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 cursor-pointer hover:border-green-400/40 transition"
              onClick={(e) => { e.stopPropagation(); try { navigator.clipboard?.writeText('npm i @datasoft/cloud'); } catch (err) { /* ignore */ } setCopied(true); setTimeout(() => setCopied(false), 1400); }}
            >
              <span className="text-green-400 text-xs">$ npm i @datasoft/cloud</span>
              <span className="text-[11px] text-slate-400">{copied ? '✓ copied' : 'copy'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
