import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Command
 * Ala terminal: window dots + prompt + tombol copy command.
 * Untuk API / cloud / dev-tools SaaS.
 */
export default function Hero07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-7', type: 'heading', props: { content: 'Ship to production in one command', level: 'h1', fontSize: '48px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-7', type: 'text', props: { content: 'Edge deploys, instant rollbacks, and observability built-in. Developers ship 10x faster on Datasoft Cloud.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-deploy', type: 'button', props: { label: '▸ Deploy Now', href: '#deploy', variant: 'primary', size: 'large', radius: 'md', background: '#22c55e', color: '#052e16' } },
    { id: 'btn-docs', type: 'button', props: { label: 'Read Docs', href: '#docs', variant: 'ghost', size: 'large', background: 'transparent', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-[#0d1117]" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-400 text-sm mb-3 select-none">$ datasoft init --production</p>
          {renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-2">
            {renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}
          </div>
          <div className="flex items-center gap-4 mt-6 text-xs text-slate-500">
            <span className="select-none">✓ 99.99% uptime</span>
            <span className="select-none">✓ SOC2</span>
            <span className="select-none">✓ 40+ regions</span>
          </div>
        </div>
        <div className="rounded-2xl border border-green-500/20 bg-black/60 overflow-hidden shadow-[0_0_60px_-20px_rgba(34,197,94,0.5)]">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse" />
            <span className="ml-2 text-xs text-slate-500 select-none">terminal — zsh</span>
          </div>
          <div className="p-5 text-sm leading-7">
            <p className="text-slate-500 select-none"># deploy your app</p>
            <p><span className="text-green-400">$</span> <span className="text-slate-200">datasoft deploy --prod</span></p>
            <p className="text-slate-500">→ Building… <span className="text-green-400">✓ done in 8s</span></p>
            <p className="text-slate-500">→ Deploying to 40 regions… <span className="text-green-400">✓ live</span></p>
            <p><span className="text-green-400">✓</span> <span className="text-cyan-300">https://your-app.datasoft.id</span></p>
          </div>
          {img.length > 0 && <div className="p-4">{renderLayoutComponents(img, sectionId)}</div>}
        </div>
      </div>
    </section>
  );
}
