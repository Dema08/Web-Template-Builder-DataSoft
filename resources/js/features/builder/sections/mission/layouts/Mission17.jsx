import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 17 — Veloce Sport Full-Bleed
 */
export default function Mission17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-17', type: 'badge', props: { content: '🏁 VELOCE MISSION', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-17', type: 'heading', props: { content: 'Redefining the limits of automotive engineering', level: 'h2', fontSize: '54px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-17', type: 'text', props: { content: 'Every vehicle we build is engineered to push performance boundaries while keeping drivers connected to the road.', fontSize: '18px', color: '#fecaca', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-test', type: 'button', props: { label: 'Explore GT Series →', href: '#gt', variant: 'primary', size: 'large', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'img-17', type: 'image', props: { src: '', alt: 'Sport', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-24 px-6 bg-slate-950 overflow-hidden border-y border-red-900/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-red-500/30 shadow-2xl bg-slate-900">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
