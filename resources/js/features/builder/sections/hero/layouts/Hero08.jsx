import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Centered Floral
 * Logo bunga + headline serif + CTA pink. Feminin elegan
 * untuk wedding / spa / hospitality.
 */
export default function Hero08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-8', type: 'badge', props: { content: '🌸 Spring Collection 2026', background: '#fce7f3', color: '#be185d' } },
    { id: 'heading-8', type: 'heading', props: { content: 'Where every moment blooms', level: 'h1', fontSize: '58px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-8', type: 'text', props: { content: 'Bridal, events, and intimate celebrations styled with love in the heart of the city.', fontSize: '17px', color: '#9d7b8c', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-book', type: 'button', props: { label: 'Book Consultation ♡', href: '#book', variant: 'primary', size: 'large', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'img-8', type: 'image', props: { src: '', alt: 'Sakura', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '200px 200px 24px 24px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fff1f5] via-white to-white overflow-hidden">
      <div className="max-w-3xl mx-auto text-center" style={{ fontFamily: 'Georgia, serif' }}>
        {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-5">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
        <div className="flex justify-center mt-2">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
      </div>
      <div className="max-w-4xl mx-auto mt-10 rounded-t-full overflow-hidden border-8 border-pink-100 shadow-[0_30px_60px_-20px_rgba(219,39,119,0.35)]" style={{ borderRadius: '200px 200px 24px 24px' }}>
        {renderLayoutComponents(img, sectionId)}
      </div>
    </section>
  );
}
