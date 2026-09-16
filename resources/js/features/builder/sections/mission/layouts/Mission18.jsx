import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 18 — Solstice App Download
 */
export default function Mission18({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-18', type: 'badge', props: { content: '✦ FINTECH MISSION', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-18', type: 'heading', props: { content: 'Democratizing financial freedom for everyone', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-18', type: 'text', props: { content: 'Our mission is to simplify money management so you can spend less time worrying and more time living.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-ios', type: 'button', props: { label: 'Download App →', href: '#download', variant: 'primary', size: 'large', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-18', type: 'image', props: { src: '', alt: 'App', width: '260px', height: '480px', objectFit: 'cover', borderRadius: '32px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-[36px] overflow-hidden border-8 border-slate-900 shadow-2xl bg-white">
            {renderLayoutComponents(img, sectionId)}
          </div>
        </div>
      </div>
    </section>
  );
}
