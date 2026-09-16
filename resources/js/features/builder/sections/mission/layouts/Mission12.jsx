import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 12 — Obsidian Dark Split Enterprise
 */
export default function Mission12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-12', type: 'badge', props: { content: '◆ ENTERPRISE MISSION', background: '#0f172a', color: '#67e8f9' } },
    { id: 'heading-12', type: 'heading', props: { content: 'Unbreakable cloud security for global enterprises', level: 'h2', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-12', type: 'text', props: { content: 'Our mission is to safeguard mission-critical infrastructure with zero-trust architecture and 99.99% reliability.', fontSize: '17px', color: '#94a3b8', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-trial', type: 'button', props: { label: 'Enterprise Security →', href: '#security', variant: 'primary', size: 'large', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    { id: 'img-12', type: 'image', props: { src: '', alt: 'Enterprise', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-24 px-6 bg-slate-950 overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="flex gap-4 mt-4">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
