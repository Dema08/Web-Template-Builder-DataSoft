import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AETHER — Ultra Premium Finale Products
 * Aurora gelap + kartu kaca + progress gradient.
 */
export default function Products20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod20-badge', type: 'badge', props: { content: '✦ AETHER 4.2 — NOW LIVE', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'prod20-heading', type: 'heading', props: { content: 'One platform. Infinite scale.', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod20-text', type: 'text', props: { content: 'OS untuk tim ambisius — ship lebih cepat & indah.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod20-cta', type: 'button', props: { label: 'Start Trial ✦', href: '#trial', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    {
      id: 'prod20-card-1', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod20-c1-image', type: 'image', props: { src: '', alt: 'Edge', width: '100%', height: '150px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod20-c1-title', type: 'heading', props: { content: '⚡ Edge Global', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c1-price', type: 'heading', props: { content: '40 regions', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c1-btn', type: 'button', props: { label: 'Deploy →', href: '#deploy', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod20-card-2', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod20-c2-image', type: 'image', props: { src: '', alt: 'Enterprise', width: '100%', height: '150px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod20-c2-title', type: 'heading', props: { content: '🛡 Enterprise', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c2-price', type: 'heading', props: { content: 'SOC2 ready', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c2-btn', type: 'button', props: { label: 'Contact →', href: '#sales', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod20-card-3', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod20-c3-image', type: 'image', props: { src: '', alt: 'Apps', width: '100%', height: '150px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod20-c3-title', type: 'heading', props: { content: '◈ Integrations', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c3-price', type: 'heading', props: { content: '200+ apps', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c3-btn', type: 'button', props: { label: 'Browse →', href: '#apps', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-indigo-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[420px] h-[420px] rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="max-w-2xl w-full mt-8 h-1 rounded-full bg-white/10 overflow-hidden select-none pointer-events-none"><div className="h-full w-1/3 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300" /></div>
      </div>
    </section>
  );
}
