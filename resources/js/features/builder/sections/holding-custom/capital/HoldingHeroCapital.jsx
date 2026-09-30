import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingHeroCapital
 * Futuristic Noir PE Hero with AUM valuation radar and dual founder/LP CTAs.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingHeroCapital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cap-badge', type: 'badge', props: { content: '⚡ BACKING GENERATIONAL TECH GIANTS', variant: 'primary', background: '#022c22', color: '#34d399', size: 'medium' } },
    { id: 'cap-title', type: 'heading', props: { content: 'Membiayai & Membangun Ekosistem Unicorn Masa Depan', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 18px 0' } },
    { id: 'cap-desc', type: 'text', props: { content: 'Vanguard Apex Capital Group mengelola $4.2 Miliar AUM untuk mendanai startup teknologi tahap pertumbuhan (Series B hingga Pre-IPO) di sektor AI, Fintech, CleanTech, dan Deep-Tech Asia Tenggara.', fontSize: '18px', color: '#94a3b8', align: 'center', lineHeight: '1.8', margin: '0 0 32px 0' } },
    { id: 'btn-pitch', type: 'button', props: { label: 'Submit Pitch Deck Startup →', href: '#inquiry', variant: 'primary', size: 'large', radius: 'full', background: '#10b981', color: '#042f2e', shadow: 'lg', fontWeight: '800' } },
    { id: 'btn-thesis', type: 'button', props: { label: 'Lihat Portofolio Unicorn & Tesis', href: '#portfolio', variant: 'outline', size: 'large', radius: 'full', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
    {
      id: 'c-stat-1',
      type: 'card',
      props: { variant: 'stat', background: '#09090b', borderRadius: '20px', borderWidth: '1px', borderColor: '#27272a', padding: '20px' },
      childrenComponents: [
        { id: 'cs1-v', type: 'heading', props: { content: '$4.2B', level: 'h3', fontSize: '32px', fontWeight: '900', color: '#10b981', align: 'center', margin: '0' } },
        { id: 'cs1-l', type: 'text', props: { content: 'Assets Under Management', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'c-stat-2',
      type: 'card',
      props: { variant: 'stat', background: '#09090b', borderRadius: '20px', borderWidth: '1px', borderColor: '#27272a', padding: '20px' },
      childrenComponents: [
        { id: 'cs2-v', type: 'heading', props: { content: '3.8x', level: 'h3', fontSize: '32px', fontWeight: '900', color: '#38bdf8', align: 'center', margin: '0' } },
        { id: 'cs2-l', type: 'text', props: { content: 'Historic Net Fund MOIC', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'c-stat-3',
      type: 'card',
      props: { variant: 'stat', background: '#09090b', borderRadius: '20px', borderWidth: '1px', borderColor: '#27272a', padding: '20px' },
      childrenComponents: [
        { id: 'cs3-v', type: 'heading', props: { content: '18 IPOs', level: 'h3', fontSize: '32px', fontWeight: '900', color: '#a78bfa', align: 'center', margin: '0' } },
        { id: 'cs3-l', type: 'text', props: { content: 'NYSE, NASDAQ & IDX Exits', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'c-stat-4',
      type: 'card',
      props: { variant: 'stat', background: '#09090b', borderRadius: '20px', borderWidth: '1px', borderColor: '#27272a', padding: '20px' },
      childrenComponents: [
        { id: 'cs4-v', type: 'heading', props: { content: '84 Tech', level: 'h3', fontSize: '32px', fontWeight: '900', color: '#f59e0b', align: 'center', margin: '0' } },
        { id: 'cs4-l', type: 'text', props: { content: 'Active Portfolio Companies', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '4px 0 0 0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading');
  const textComps = layoutComponents.filter(c => c.type === 'text');
  const btnComps = layoutComponents.filter(c => c.type === 'button');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-28 px-4 sm:px-6 bg-[#030303] text-white overflow-hidden">
      {/* Dark Cyber Emerald Grid Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(badgeComps, sectionId)}
        <div className="mt-6 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>
        <div className="w-full max-w-3xl">{renderLayoutComponents(textComps, sectionId)}</div>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {renderLayoutComponents(btnComps, sectionId)}
        </div>

        {/* Floating Fund Performance Cards */}
        {cardComps.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800 w-full max-w-4xl">
            {renderLayoutComponents(cardComps, sectionId)}
          </div>
        )}
      </div>
    </section>
  );
}
