import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AETHER — Ultra Premium Finale
 * Penutup koleksi: aurora + glass + progress + mega cards.
 * Hero paling mewah dari 20 variasi.
 */
export default function Hero20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-20', type: 'badge', props: { content: '✦ AETHER 4.2 — NOW LIVE', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'heading-20', type: 'heading', props: { content: 'One platform. Infinite scale.', level: 'h1', fontSize: '64px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-20', type: 'text', props: { content: 'The operating system for ambitious teams — ship faster, safer, and beautifully.', fontSize: '18px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-trial', type: 'button', props: { label: 'Start Trial ✦', href: '#trial', variant: 'primary', size: 'large', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'btn-sales', type: 'button', props: { label: 'Talk to Sales', href: '#sales', variant: 'ghost', size: 'large', background: 'transparent', color: '#e2e8f0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-4xl mx-auto text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-6">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}
        </div>
        <div className="grid grid-cols-3 gap-3 mt-12 max-w-2xl mx-auto">
          {[
            ['⚡', 'Edge Global', '40 regions'],
            ['🛡', 'Enterprise', 'SOC2 ready'],
            ['◈', 'Integrations', '200+ apps'],
          ].map(([icon, t, d]) => (
            <div key={t} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-5 hover:bg-white/10 transition">
              <p className="text-2xl">{icon}</p>
              <p className="text-sm font-bold text-white mt-2">{t}</p>
              <p className="text-[11px] text-slate-400">{d}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto mt-8 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300" />
        </div>
      </div>
    </section>
  );
}
