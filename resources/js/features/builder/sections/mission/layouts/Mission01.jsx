import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 01 — Aurora Centered Gradient Glow
 */
export default function Mission01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-1', type: 'badge', props: { content: '✦ Our Mission', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Empowering makers to build the future', level: 'h2', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Our mission is to democratize software creation through intuitive tools, unmatched speed, and uncompromising design quality.', fontSize: '18px', color: '#64748b', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-primary', type: 'button', props: { label: 'Explore Our Vision →', href: '#vision', variant: 'primary', size: 'large', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
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
      </div>
    </section>
  );
}
