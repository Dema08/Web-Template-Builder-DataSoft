import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 01 — AURORA Centered Gradient Glow
 * Mirrors Hero01 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v1-badge', type: 'badge', props: { content: '✦ 01 LUMIÈRE — VISION', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'v1-heading', type: 'heading', props: { content: 'Membentuk Masa Depan Digital Berkelanjutan', level: 'h2', fontSize: '56px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v1-text', type: 'text', props: { content: 'Menjadi pionir terdepan dalam ekosistem teknologi digital yang mengintegrasikan inovasi tanpa batas dengan standar integritas tertinggi.', fontSize: '18px', color: '#64748b', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'v1-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'v1-c1-icon', type: 'icon', props: { icon: 'FaLightbulb', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'v1-c1-title', type: 'heading', props: { content: 'Inovasi Tanpa Henti', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'v1-c1-desc', type: 'text', props: { content: 'Selalu menghadirkan solusi terdepan yang mendahului kebutuhan zaman.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'v1-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'v1-c2-icon', type: 'icon', props: { icon: 'FaGlobe', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'v1-c2-title', type: 'heading', props: { content: 'Jangkauan Global', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'v1-c2-desc', type: 'text', props: { content: 'Menghubungkan bisnis lokal ke kancah internasional dengan mulus.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-200/60 via-fuchsia-200/50 to-cyan-200/60 blur-3xl animate-pulse" />
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(heading, sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(text, sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center gap-4 mt-12 text-xs text-slate-400">
          <span className="select-none">★★★★★ Visi 2026</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="select-none">Inovasi Berkelanjutan</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="select-none">Standar Global</span>
        </div>
      </div>
    </section>
  );
}
