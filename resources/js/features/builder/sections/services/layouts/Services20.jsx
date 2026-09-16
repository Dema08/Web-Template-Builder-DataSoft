import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 20 — AETHER Ultra Premium Finale
 * Mirrors Hero20 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv20-badge', type: 'badge', props: { content: '✦ AETHER SERVICES 4.2 — NOW LIVE', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'srv20-heading', type: 'heading', props: { content: 'One service platform. Infinite scale.', level: 'h2', fontSize: '64px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'srv20-text', type: 'text', props: { content: 'The ultimate operating system services for ambitious teams — execute strategy faster, safer, and beautifully.', fontSize: '18px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'srv20-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)' },
      childrenComponents: [
        { id: 'srv20-c1-icon', type: 'icon', props: { icon: 'FaGlobe', size: '28px', color: '#818cf8', align: 'left' } },
        { id: 'srv20-c1-title', type: 'heading', props: { content: 'Edge Global Services', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '10px 0 6px 0' } },
        { id: 'srv20-c1-desc', type: 'text', props: { content: '40 regions deployment for planetary scale operations.', fontSize: '14px', color: '#a5b4fc', margin: '0' } },
      ],
    },
    {
      id: 'srv20-card-2',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)' },
      childrenComponents: [
        { id: 'srv20-c2-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '28px', color: '#818cf8', align: 'left' } },
        { id: 'srv20-c2-title', type: 'heading', props: { content: 'Enterprise Ready', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '10px 0 6px 0' } },
        { id: 'srv20-c2-desc', type: 'text', props: { content: 'SOC2 compliant security with absolute data privacy.', fontSize: '14px', color: '#a5b4fc', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse" />
      <div className="relative max-w-5xl mx-auto text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-6">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="max-w-2xl mx-auto mt-12 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
