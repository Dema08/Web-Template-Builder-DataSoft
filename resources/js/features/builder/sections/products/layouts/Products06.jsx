import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Glass Space Products
 * Luar angkasa: orb ungu + kartu kaca gelap.
 */
export default function Products06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod6-badge', type: 'badge', props: { content: '● Nebula Drop Live', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'prod6-heading', type: 'heading', props: { content: 'Gear dari Galaksi Lain', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod6-text', type: 'text', props: { content: '128.400 explorer sudah upgrade loadout mereka.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod6-cta', type: 'button', props: { label: 'Explore Universe →', href: '#universe', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    {
      id: 'prod6-card-1', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod6-c1-image', type: 'image', props: { src: '', alt: 'Nebula Headset', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod6-c1-title', type: 'heading', props: { content: 'Nebula Headset', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c1-price', type: 'heading', props: { content: 'Rp 1.899rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c1-desc', type: 'text', props: { content: 'Spatial audio + noise void.', fontSize: '13px', color: '#a5b4fc', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod6-c1-btn', type: 'button', props: { label: 'Add to Loadout', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod6-card-2', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod6-c2-image', type: 'image', props: { src: '', alt: 'Orbit Keyboard', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod6-c2-title', type: 'heading', props: { content: 'Orbit Keyboard', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c2-price', type: 'heading', props: { content: 'Rp 2.499rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c2-desc', type: 'text', props: { content: 'Hall-effect, RGB nebula.', fontSize: '13px', color: '#a5b4fc', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod6-c2-btn', type: 'button', props: { label: 'Add to Loadout', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod6-card-3', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod6-c3-image', type: 'image', props: { src: '', alt: 'Void Mouse', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod6-c3-title', type: 'heading', props: { content: 'Void Mouse', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c3-price', type: 'heading', props: { content: 'Rp 999rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c3-desc', type: 'text', props: { content: '8K polling, 49g ringan.', fontSize: '13px', color: '#a5b4fc', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod6-c3-btn', type: 'button', props: { label: 'Add to Loadout', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-violet-600/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[420px] h-[420px] rounded-full bg-indigo-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
