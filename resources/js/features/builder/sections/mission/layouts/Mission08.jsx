import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 08 — Sakura Centered Floral
 */
export default function Mission08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-8', type: 'badge', props: { content: '🌸 Our Mission & Promise', background: '#fce7f3', color: '#be185d' } },
    { id: 'heading-8', type: 'heading', props: { content: 'Crafting moments that blossom for a lifetime', level: 'h2', fontSize: '50px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-8', type: 'text', props: { content: 'We are dedicated to turning your most cherished milestones into breathtaking floral artistry.', fontSize: '17px', color: '#9d7b8c', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-book', type: 'button', props: { label: 'Our Floral Values ♡', href: '#values', variant: 'primary', size: 'large', radius: 'full', background: '#db2777', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50/60 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
      </div>
    </section>
  );
}
