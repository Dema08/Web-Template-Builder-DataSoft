import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsHeroGlobal
 * Noir Dark Luxury hero for international freight forwarding with champagne gold accents.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsHeroGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'global-badge', type: 'badge', props: { content: '🌐 GLOBAL AIR CHARTER & OCEAN FREIGHT FORWARDER', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'global-title', type: 'heading', props: { content: 'Excellence in Cross-Border Freight & Global Supply Chain', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 18px 0' } },
    { id: 'global-desc', type: 'text', props: { content: 'Penyedia kargo internasional kelas atas: Air Charter Boeing 777F, konsolidasi kontainer laut (FCL/LCL), kepabeanan jalur hijau (Customs Brokerage), dan pergudangan berikat berstandar keamanan internasional.', fontSize: '18px', color: '#a8a29e', align: 'center', lineHeight: '1.8', margin: '0 0 32px 0' } },
    { id: 'btn-inquiry', type: 'button', props: { label: 'Book International Freight Space →', href: '#inquiry', variant: 'primary', size: 'large', radius: 'full', background: '#e7c873', color: '#0c0a09', shadow: 'lg', fontWeight: '700' } },
    {
      id: 'g-stat-1',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '16px' },
      childrenComponents: [
        { id: 'gs1-v', type: 'heading', props: { content: '140+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#e7c873', align: 'center', margin: '0' } },
        { id: 'gs1-l', type: 'text', props: { content: 'Negara Terjangkau', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'g-stat-2',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '16px' },
      childrenComponents: [
        { id: 'gs2-v', type: 'heading', props: { content: '850K', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#38bdf8', align: 'center', margin: '0' } },
        { id: 'gs2-l', type: 'text', props: { content: 'TEUs Kontainer/Tahun', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'g-stat-3',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '16px' },
      childrenComponents: [
        { id: 'gs3-v', type: 'heading', props: { content: '24/7', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#4ade80', align: 'center', margin: '0' } },
        { id: 'gs3-l', type: 'text', props: { content: 'Customs Green Lane', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'g-stat-4',
      type: 'card',
      props: { variant: 'stat', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '16px' },
      childrenComponents: [
        { id: 'gs4-v', type: 'heading', props: { content: '99.9%', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#f59e0b', align: 'center', margin: '0' } },
        { id: 'gs4-l', type: 'text', props: { content: 'Cargo Security Index', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '4px 0 0 0' } },
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
    <section className="relative py-28 px-4 sm:px-6 bg-[#0c0a09] text-white overflow-hidden">
      {/* Background Noir Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(231,200,115,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(badgeComps, sectionId)}
        <div className="mt-6 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>

        {/* Decorative Gold Divider */}
        <div className="flex items-center gap-3 my-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#e7c873]" />
          <div className="w-2 h-2 rotate-45 bg-[#e7c873]" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#e7c873]" />
        </div>

        <div className="w-full max-w-3xl">{renderLayoutComponents(textComps, sectionId)}</div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {renderLayoutComponents(btnComps, sectionId)}
        </div>

        {/* Floating Global Network Cards */}
        {cardComps.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-[#292524] w-full max-w-4xl">
            {renderLayoutComponents(cardComps, sectionId)}
          </div>
        )}
      </div>
    </section>
  );
}
