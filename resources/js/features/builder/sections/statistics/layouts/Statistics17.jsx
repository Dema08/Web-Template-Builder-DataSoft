import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Sport Full-Bleed — Statistics
 * Merah sporty + angka italic + strip marquee bawah.
 * Untuk otomotif / sport / eSports.
 */
export default function Statistics17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat17-badge', type: 'badge', props: { content: '🏁 GT SERIES 2026', background: '#fef2f2', color: '#dc2626' } },
    { id: 'stat17-heading', type: 'heading', props: { content: 'Built to outrun the numbers', level: 'h2', fontSize: '60px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat17-text', type: 'text', props: { content: '0–100 dalam 2,8 detik. 680HP hybrid powertrain. Angka dari Veloce tercepat yang pernah dibangun.', fontSize: '18px', color: '#fecaca', align: 'left', margin: '0 0 26px 0' } },
    { id: 'stat17-cta', type: 'button', props: { label: 'Book Test Drive →', href: '#test', variant: 'primary', size: 'medium', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    {
      id: 'stat17-card-1',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.35)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat17-c1-value', type: 'heading', props: { content: '2,8s', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat17-c1-label', type: 'text', props: { content: '0–100 KM/H', fontSize: '11px', color: '#f87171', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat17-card-2',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.35)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat17-c2-value', type: 'heading', props: { content: '680', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat17-c2-label', type: 'text', props: { content: 'Horsepower', fontSize: '11px', color: '#f87171', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat17-card-3',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.35)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat17-c3-value', type: 'heading', props: { content: '340', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat17-c3-label', type: 'text', props: { content: 'KM/H Top Speed', fontSize: '11px', color: '#f87171', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat17-card-4',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.35)', hoverEffect: 'glow', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat17-c4-value', type: 'heading', props: { content: '99,8%', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 6px 0' } },
        { id: 'stat17-c4-label', type: 'text', props: { content: 'Finish Rate', fontSize: '11px', color: '#f87171', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(239,68,68,0.25),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 py-20">
        <div className="italic">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
        </div>
        <div className="-skew-x-2 grid grid-cols-2 gap-4">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
      <div className="relative bg-red-600 text-white text-center text-xs font-black tracking-[0.3em] py-2 select-none pointer-events-none">
        VELOCE GT — UNLEASHED
      </div>
    </section>
  );
}
