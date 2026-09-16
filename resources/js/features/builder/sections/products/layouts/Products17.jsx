import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Sport Full-Bleed Products
 * Sporty merah + kartu performa horizontal.
 */
export default function Products17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod17-badge', type: 'badge', props: { content: '⚡ Veloce Racing', background: '#dc2626', color: '#ffffff' } },
    { id: 'prod17-heading', type: 'heading', props: { content: 'Engineered for Speed', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod17-text', type: 'text', props: { content: 'Aero-tested, track-proven. 0–100 dalam 3.1 detik.', fontSize: '15px', color: '#fecaca', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod17-cta', type: 'button', props: { label: 'Book Test Ride →', href: '#test', variant: 'primary', size: 'medium', radius: 'md', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'prod17-card-1', type: 'card',
      props: { variant: 'product', background: '#171717', borderRadius: '16px', shadow: 'lg', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod17-c1-image', type: 'image', props: { src: '', alt: 'Helm', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod17-c1-title', type: 'heading', props: { content: 'Veloce Helmet GP', level: 'h3', fontSize: '17px', fontWeight: '900', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod17-c1-price', type: 'heading', props: { content: 'Rp 4.5jt', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ef4444', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod17-c1-btn', type: 'button', props: { label: 'Add →', href: '#cart', variant: 'primary', size: 'small', radius: 'md', background: '#dc2626', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod17-card-2', type: 'card',
      props: { variant: 'product', background: '#171717', borderRadius: '16px', shadow: 'lg', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod17-c2-image', type: 'image', props: { src: '', alt: 'Jacket', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod17-c2-title', type: 'heading', props: { content: 'Aero Jacket', level: 'h3', fontSize: '17px', fontWeight: '900', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod17-c2-price', type: 'heading', props: { content: 'Rp 2.8jt', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ef4444', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod17-c2-btn', type: 'button', props: { label: 'Add →', href: '#cart', variant: 'primary', size: 'small', radius: 'md', background: '#dc2626', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod17-card-3', type: 'card',
      props: { variant: 'product', background: '#dc2626', borderRadius: '16px', shadow: 'lg', borderWidth: '0', borderColor: '#dc2626', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod17-c3-title', type: 'heading', props: { content: 'Veloce S — Full Bike', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod17-c3-price', type: 'heading', props: { content: 'Rp 385jt', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#ffffff', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod17-c3-desc', type: 'text', props: { content: '210HP · Carbon full · Ohlins.', fontSize: '13px', color: '#fecaca', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod17-c3-btn', type: 'button', props: { label: 'Configure →', href: '#config', variant: 'primary', size: 'small', radius: 'md', background: '#ffffff', color: '#dc2626' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-neutral-950 border-l-8 border-red-600">
      <div className="max-w-6xl mx-auto">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 max-w-2xl">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        {renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
