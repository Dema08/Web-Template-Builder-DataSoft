import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NOIR — Full Dark Cinematic — Statistics
 * Gelap sinematik + serif besar + garis emas + kartu gold-on-black.
 * Untuk luxury / fashion / properti premium.
 */
export default function Statistics02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat2-badge', type: 'badge', props: { content: 'EST. 1987 — JAKARTA • PARIS', background: '#1c1917', color: '#e7c873' } },
    { id: 'stat2-heading', type: 'heading', props: { content: 'A legacy measured in gold', level: 'h2', fontSize: '52px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '0 0 18px 0' } },
    { id: 'stat2-text', type: 'text', props: { content: 'Empat dekade kepercayaan — angka yang hanya bisa dibangun oleh konsistensi dan ketelitian.', fontSize: '17px', color: '#a8a29e', align: 'center', margin: '0 0 30px 0' } },
    { id: 'stat2-cta', type: 'button', props: { label: 'Reserve Private View →', href: '#reserve', variant: 'primary', size: 'medium', radius: 'full', background: '#c9a227', color: '#0c0a09' } },
    {
      id: 'stat2-card-1',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.35)', hoverEffect: 'border', padding: '36px 24px' },
      childrenComponents: [
        { id: 'stat2-c1-value', type: 'heading', props: { content: '38', level: 'h3', fontSize: '52px', fontWeight: '700', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
        { id: 'stat2-c1-label', type: 'text', props: { content: 'Years of Heritage', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat2-card-2',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.35)', hoverEffect: 'border', padding: '36px 24px' },
      childrenComponents: [
        { id: 'stat2-c2-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '52px', fontWeight: '700', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
        { id: 'stat2-c2-label', type: 'text', props: { content: 'Private Boutiques', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat2-card-3',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.35)', hoverEffect: 'border', padding: '36px 24px' },
      childrenComponents: [
        { id: 'stat2-c3-value', type: 'heading', props: { content: '40K', level: 'h3', fontSize: '52px', fontWeight: '700', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
        { id: 'stat2-c3-label', type: 'text', props: { content: 'Patrons Worldwide', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
    {
      id: 'stat2-card-4',
      type: 'card',
      props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.35)', hoverEffect: 'border', padding: '36px 24px' },
      childrenComponents: [
        { id: 'stat2-c4-value', type: 'heading', props: { content: '3', level: 'h3', fontSize: '52px', fontWeight: '700', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
        { id: 'stat2-c4-label', type: 'text', props: { content: 'Generations of Craft', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="relative py-28 px-6 bg-[#0c0a09] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,39,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative max-w-6xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="flex flex-col items-center text-center">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-6 w-full">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          <div className="flex items-center gap-3 my-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
            <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>
          <div className="w-full max-w-xl">{renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}</div>
          <div className="flex flex-wrap justify-center gap-3 mt-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <p className="text-center text-[11px] tracking-[0.4em] text-[#7a6a3a] mt-10 select-none pointer-events-none">
          M A I S O N &nbsp; N O I R &nbsp; — &nbsp; S I N C E &nbsp; 1 9 8 7
        </p>
      </div>
    </section>
  );
}
