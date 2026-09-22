import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IRIS — Gradient Mesh Playground — Statistics
 * Mesh gradient warna-warni + badge kaca + kartu statistik glow.
 * Untuk agency kreatif / portfolio / AI produktivitas.
 */
export default function Statistics11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat11-badge', type: 'badge', props: { content: '✦ Iris AI Canvas', background: '#ffffff', color: '#7c3aed' } },
    { id: 'stat11-heading', type: 'heading', props: { content: 'Momentum at the speed of thought', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat11-text', type: 'text', props: { content: 'Iris mengubah ide kasar menjadi antarmuka rapi — dan angkanya tumbuh secepat desainnya.', fontSize: '18px', color: '#ddd6fe', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat11-cta', type: 'button', props: { label: 'Try Iris Free ✦', href: '#try', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    {
      id: 'stat11-card-1',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat11-c1-value', type: 'heading', props: { content: '40.000', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat11-c1-label', type: 'text', props: { content: 'Designers', fontSize: '12px', color: '#ddd6fe', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat11-card-2',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat11-c2-value', type: 'heading', props: { content: '1,2M', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat11-c2-label', type: 'text', props: { content: 'Canvas Dibuat', fontSize: '12px', color: '#ddd6fe', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat11-card-3',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat11-c3-value', type: 'heading', props: { content: '320K', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat11-c3-label', type: 'text', props: { content: 'Template', fontSize: '12px', color: '#ddd6fe', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat11-card-4',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat11-c4-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat11-c4-label', type: 'text', props: { content: 'Rating Komunitas', fontSize: '12px', color: '#ddd6fe', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#1e1b4b]">
      <div className="pointer-events-none absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-fuchsia-500/50 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-400/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-400/30 blur-3xl" />
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="inline-block rounded-full bg-white/15 backdrop-blur border border-white/25 px-1 py-1">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
        </div>
        <div className="mt-6">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
        <div className="flex justify-center mt-1">
          {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center justify-center gap-2 mt-8 select-none pointer-events-none">
          {['#f0abfc', '#67e8f9', '#fcd34d', '#a5b4fc'].map((c, i) => (
            <span key={i} className="w-8 h-8 rounded-full border-2 border-white/60 -ml-3 first:ml-0" style={{ background: c }} />
          ))}
          <span className="ml-2 text-xs text-violet-200">Dipakai 40.000 desainer</span>
        </div>
      </div>
    </section>
  );
}
