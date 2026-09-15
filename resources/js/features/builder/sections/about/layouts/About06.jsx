import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Centered Floral Story
 * Pink feminin + foto arch + ornamen bunga.
 * Untuk wedding / spa / hospitality.
 */
export default function About06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-6', type: 'badge', props: { content: '🌸 Our Philosophy', background: '#fce7f3', color: '#be185d' } },
    { id: 'heading-6', type: 'heading', props: { content: 'Beauty in every detail', level: 'h2', fontSize: '44px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-6', type: 'text', props: { content: 'For a decade, Sakura Studio has styled weddings and celebrations where every petal has its place.', fontSize: '16px', color: '#9d7b8c', align: 'center', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-story', type: 'button', props: { label: 'Our Story ♡', href: '#story', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'img-6', type: 'image', props: { src: '', alt: 'Atelier', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '200px 200px 24px 24px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#fff1f5] via-white to-white" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-3xl mx-auto text-center">
        {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="flex items-center justify-center gap-2 my-3 select-none pointer-events-none">
          <div className="w-12 h-px bg-pink-300" /><span className="text-pink-400">✿</span><div className="w-12 h-px bg-pink-300" />
        </div>
        {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
        <div className="flex justify-center mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
      </div>
      <div className="max-w-2xl mx-auto mt-10 overflow-hidden border-8 border-pink-100 shadow-[0_30px_60px_-20px_rgba(219,39,119,0.35)]" style={{ borderRadius: '200px 200px 24px 24px' }}>
        {renderLayoutComponents(img, sectionId)}
      </div>
    </section>
  );
}
