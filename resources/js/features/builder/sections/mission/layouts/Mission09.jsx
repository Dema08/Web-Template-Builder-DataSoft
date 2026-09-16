import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 09 — Goldleaf Heritage Gold
 */
export default function Mission09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-9', type: 'badge', props: { content: '✦ OUR HERITAGE MISSION', background: '#fef3c7', color: '#92400e' } },
    { id: 'heading-9', type: 'heading', props: { content: 'Preserving the gold standard of craftsmanship', level: 'h2', fontSize: '52px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-9', type: 'text', props: { content: 'For nearly four decades, our mission has remained unchanged: uncompromised jewelry passed down through generations.', fontSize: '17px', color: '#92600e', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-visit', type: 'button', props: { label: '✦ Learn Our Story', href: '#story', variant: 'primary', size: 'large', radius: 'full', background: '#b45309', color: '#fffbeb' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-28 px-6 bg-[#fffbeb] border-y border-amber-200 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
      </div>
    </section>
  );
}
