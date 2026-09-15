import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AURORA — Centered Gradient Glow
 * Hero tengah dengan orb gradient animasi + badge pill + 2 CTA.
 * Klasik SaaS premium yang selalu terlihat mahal.
 */
export default function Hero01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-1', type: 'badge', props: { content: '✦ Introducing Aurora 3.0', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Build websites that feel like magic', level: 'h1', fontSize: '56px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Drag, drop, publish. Aurora gives your team a premium canvas with zero code — loved by 12,000+ makers.', fontSize: '18px', color: '#64748b', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-primary', type: 'button', props: { label: 'Start Building Free →', href: '#start', variant: 'primary', size: 'large', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    { id: 'btn-ghost', type: 'button', props: { label: '▶ Watch Demo', href: '#demo', variant: 'ghost', size: 'large', background: 'transparent', color: '#334155' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-200/60 via-fuchsia-200/50 to-cyan-200/60 blur-3xl animate-pulse" />
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(heading, sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(text, sectionId)}</div>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          {renderLayoutComponents(buttons, sectionId)}
        </div>
        <div className="flex items-center gap-4 mt-8 text-xs text-slate-400">
          <span className="select-none">★★★★★ 4.9/5</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="select-none">No credit card required</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="select-none">Free 14-day trial</span>
        </div>
      </div>
    </section>
  );
}
