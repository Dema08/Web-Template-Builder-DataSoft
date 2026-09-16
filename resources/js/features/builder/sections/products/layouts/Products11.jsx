import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IRIS — Gradient Mesh Products
 * Mesh ungu playful + kartu putih rounded-3xl.
 */
export default function Products11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod11-badge', type: 'badge', props: { content: '✦ Iris Playground', background: '#ffffff', color: '#7c3aed' } },
    { id: 'prod11-heading', type: 'heading', props: { content: 'Templates yang hidup', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod11-text', type: 'text', props: { content: '40.000 desainer pakai setiap hari.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod11-cta', type: 'button', props: { label: 'Browse Templates →', href: '#templates', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    {
      id: 'prod11-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'lg', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod11-c1-image', type: 'image', props: { src: '', alt: 'UI Kit', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod11-c1-title', type: 'heading', props: { content: 'Iris UI Kit', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c1-price', type: 'heading', props: { content: 'Rp 349rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#7c3aed', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c1-btn', type: 'button', props: { label: 'Preview →', href: '#preview', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod11-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'lg', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod11-c2-image', type: 'image', props: { src: '', alt: 'Icons', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod11-c2-title', type: 'heading', props: { content: 'Iris Icons 2.0', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c2-price', type: 'heading', props: { content: 'Rp 149rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#7c3aed', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c2-btn', type: 'button', props: { label: 'Preview →', href: '#preview', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod11-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'lg', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod11-c3-image', type: 'image', props: { src: '', alt: 'Mockups', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod11-c3-title', type: 'heading', props: { content: 'Mockup Flow', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c3-price', type: 'heading', props: { content: 'Rp 249rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#7c3aed', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c3-btn', type: 'button', props: { label: 'Preview →', href: '#preview', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-indigo-600">
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/20 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
