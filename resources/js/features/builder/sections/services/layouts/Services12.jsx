import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 12 — OBSIDIAN Video-Style Dark Split
 * Mirrors Hero12 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv12-badge', type: 'badge', props: { content: '◆ SOC2 • ISO 27001 • 99.99%', background: '#0f172a', color: '#67e8f9' } },
    { id: 'srv12-heading', type: 'heading', props: { content: 'Infrastructure services that never sleep', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'srv12-text', type: 'text', props: { content: 'Global edge network services across 40 regions. Deploy in seconds, scale to millions — sleep easy.', fontSize: '17px', color: '#94a3b8', align: 'left', margin: '0 0 26px 0' } },
    {
      id: 'srv12-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '24px' },
      childrenComponents: [
        { id: 'srv12-c1-icon', type: 'icon', props: { icon: 'FaServer', size: '32px', color: '#67e8f9', align: 'left' } },
        { id: 'srv12-c1-title', type: 'heading', props: { content: 'Global Edge Cloud', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'srv12-c1-desc', type: 'text', props: { content: 'Instant deployment across 40 edge regions.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'srv12-card-2',
      type: 'card',
      props: { variant: 'service-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '24px' },
      childrenComponents: [
        { id: 'srv12-c2-icon', type: 'icon', props: { icon: 'FaLock', size: '32px', color: '#67e8f9', align: 'left' } },
        { id: 'srv12-c2-title', type: 'heading', props: { content: 'Zero-Trust Security', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'srv12-c2-desc', type: 'text', props: { content: 'End-to-end encryption and SOC2 compliance.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-20 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
