import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 11 — Iris Gradient Mesh Playground
 */
export default function Mission11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-11', type: 'badge', props: { content: '✦ IRIS MISSION', background: '#ffffff', color: '#7c3aed' } },
    { id: 'heading-11', type: 'heading', props: { content: 'Accelerating human creativity with AI', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-11', type: 'text', props: { content: 'We build intelligent design systems that bridge the gap between imagination and production.', fontSize: '18px', color: '#ddd6fe', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-try', type: 'button', props: { label: 'Try Iris Free ✦', href: '#try', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,#ec4899,transparent_50%),radial-gradient(circle_at_70%_70%,#3b82f6,transparent_50%)]" />
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-6 w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
      </div>
    </section>
  );
}
