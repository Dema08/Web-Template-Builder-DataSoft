import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OBSIDIAN — Dark Split Enterprise — Statistics
 * Gelap + radial cyan + strip status operasional + kartu kaca tipis.
 * Untuk SaaS enterprise / cloud / fintech.
 */
export default function Statistics12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat12-badge', type: 'badge', props: { content: '◆ SOC2 • ISO 27001 • 99,99%', background: '#0f172a', color: '#67e8f9' } },
    { id: 'stat12-heading', type: 'heading', props: { content: 'Infrastructure that never sleeps', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'stat12-text', type: 'text', props: { content: 'Global edge network di 40 region. Deploy dalam detik, scale ke jutaan pengguna — tidur tetap tenang.', fontSize: '17px', color: '#94a3b8', align: 'left', margin: '0 0 26px 0' } },
    { id: 'stat12-cta', type: 'button', props: { label: 'Start Free Trial →', href: '#trial', variant: 'primary', size: 'medium', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    {
      id: 'stat12-card-1',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat12-c1-value', type: 'heading', props: { content: '99,99%', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#67e8f9', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat12-c1-label', type: 'text', props: { content: 'Uptime SLA', fontSize: '13px', fontWeight: '600', color: '#94a3b8', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat12-card-2',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat12-c2-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#67e8f9', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat12-c2-label', type: 'text', props: { content: 'Edge Regions', fontSize: '13px', fontWeight: '600', color: '#94a3b8', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat12-card-3',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat12-c3-value', type: 'heading', props: { content: '12ms', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#67e8f9', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat12-c3-label', type: 'text', props: { content: 'P95 Latency', fontSize: '13px', fontWeight: '600', color: '#94a3b8', align: 'left', margin: '0' } },
      ],
    },
    {
      id: 'stat12-card-4',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat12-c4-value', type: 'heading', props: { content: '2.400+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#67e8f9', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat12-c4-label', type: 'text', props: { content: 'Enterprise Teams', fontSize: '13px', fontWeight: '600', color: '#94a3b8', align: 'left', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="relative py-20 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
          <div className="flex items-center gap-4 mt-6 text-xs text-slate-500 select-none pointer-events-none">
            <span>✓ 99.99% uptime</span>
            <span>✓ SOC2 Type II</span>
            <span>✓ 40+ regions</span>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderLayoutComponents(cards, sectionId)}
          </div>
          <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80">
            <div className="bg-gradient-to-r from-slate-950/90 to-transparent p-5">
              <div className="flex items-center gap-3 select-none pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <p className="text-xs font-bold text-white">ALL SYSTEMS OPERATIONAL — 40/40 REGIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
