import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 12 — OBSIDIAN Video-Style Dark Split
 * Mirrors Hero12 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v12-badge', type: 'badge', props: { content: '◆ SOC2 • ISO 27001 • ENTERPRISE VISION', background: '#0f172a', color: '#67e8f9' } },
    { id: 'v12-heading', type: 'heading', props: { content: 'Infrastructure that scales your vision', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'v12-text', type: 'text', props: { content: 'Global edge network across 40 regions. Deploy strategies in seconds, scale to millions securely.', fontSize: '17px', color: '#94a3b8', align: 'left', margin: '0 0 26px 0' } },
    {
      id: 'v12-card-1',
      type: 'card',
      props: { variant: 'service-dark', background: 'rgba(15,23,42,0.8)', borderRadius: '16px', padding: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)' },
      childrenComponents: [
        { id: 'v12-c1-title', type: 'heading', props: { content: 'High Availability', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' } },
        { id: 'v12-c1-desc', type: 'text', props: { content: 'Uptime garansi 99.99% untuk operasional tanpa henti.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
    { id: 'v12-img', type: 'image', props: { src: '', alt: 'Enterprise Vision', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="relative py-20 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="mt-4">
            {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_-20px_rgba(56,189,248,0.35)] bg-slate-900">
          {renderLayoutComponents(img, sectionId)}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5 pt-12 pointer-events-none select-none">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <p className="text-xs font-bold text-white">ALL VISION SYSTEMS OPERATIONAL — 40/40 REGIONS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
