import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IRIS — Gradient Mesh Playground
 * Mesh gradient warna-warni + kartu kaca + tombol putih.
 * Untuk agency kreatif / portfolio / AI produktivitas.
 */
export default function Hero11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-11', type: 'badge', props: { content: '✦ New: Iris AI Canvas', background: '#ffffff', color: '#7c3aed' } },
    { id: 'heading-11', type: 'heading', props: { content: 'Design at the speed of thought', level: 'h1', fontSize: '60px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-11', type: 'text', props: { content: 'Iris turns rough ideas into polished interfaces — colors, type, and layout in seconds.', fontSize: '18px', color: '#ddd6fe', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-try', type: 'button', props: { label: 'Try Iris Free ✦', href: '#try', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#1e1b4b]">
      <div className="pointer-events-none absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full bg-fuchsia-500/50 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-400/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-400/30 blur-3xl" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block rounded-full bg-white/15 backdrop-blur border border-white/25 px-1 py-1">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        </div>
        <div className="mt-6">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
        <div className="flex justify-center mt-2">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {['#f0abfc', '#67e8f9', '#fcd34d', '#a5b4fc'].map((c, i) => (
            <span key={i} className="w-8 h-8 rounded-full border-2 border-white/60 -ml-3 first:ml-0" style={{ background: c }} />
          ))}
          <span className="ml-2 text-xs text-violet-200 select-none">Joined by 40,000 designers</span>
        </div>
      </div>
    </section>
  );
}
