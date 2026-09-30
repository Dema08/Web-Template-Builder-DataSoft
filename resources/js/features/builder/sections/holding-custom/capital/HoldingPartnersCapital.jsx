import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingPartnersCapital
 * General Partners and Investment Committee showcase.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingPartnersCapital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'part-badge', type: 'badge', props: { content: '👥 GENERAL PARTNERS & INVESTMENT COMMITTEE', variant: 'primary', background: '#022c22', color: '#34d399', size: 'medium' } },
    { id: 'part-title', type: 'heading', props: { content: 'Managing Partners & Dewan Komite Investasi', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'part-desc', type: 'text', props: { content: 'Kombinasi mantan operator teknologi sukses, pimpinan venture capital Tier-1 global, dan pakar pasar modal.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'partner-card-1',
      type: 'card',
      props: { variant: 'team', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pc1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80', alt: 'Adrian Tan, Managing Partner', borderRadius: '16px', height: '220px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'pc1-badge', type: 'badge', props: { content: 'Founding Managing Partner', variant: 'primary', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'pc1-name', type: 'heading', props: { content: 'Adrian Tan, M.Sc.', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 4px 0' } },
        { id: 'pc1-bio', type: 'text', props: { content: 'Ex-Partner Sequoia Capital Asia & 2x Unicorn Angel Investor dengan 15+ tahun pengalaman investasi.', fontSize: '12px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'partner-card-2',
      type: 'card',
      props: { variant: 'team', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pc2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80', alt: 'Clarissa Hartono, Partner', borderRadius: '16px', height: '220px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'pc2-badge', type: 'badge', props: { content: 'General Partner — AI & Fintech', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'pc2-name', type: 'heading', props: { content: 'Clarissa Hartono, MBA', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 4px 0' } },
        { id: 'pc2-bio', type: 'text', props: { content: 'Alumni Stanford GSB, memimpin deal Series B-D sektor AI enterprise dan perbankan digital regional.', fontSize: '12px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'partner-card-3',
      type: 'card',
      props: { variant: 'team', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pc3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80', alt: 'Kevin Wardhana, General Partner', borderRadius: '16px', height: '220px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'pc3-badge', type: 'badge', props: { content: 'General Partner — Deep Tech & Climate', variant: 'primary', background: 'rgba(167, 139, 250, 0.15)', color: '#a78bfa', size: 'small' } },
        { id: 'pc3-name', type: 'heading', props: { content: 'Kevin Wardhana, Ph.D.', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 4px 0' } },
        { id: 'pc3-bio', type: 'text', props: { content: 'MIT Doctorate in Energy Systems, mantan VP Operasi Tesla Global & penasihat dana transisi iklim.', fontSize: '12px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="partners" className="py-24 px-4 sm:px-6 bg-[#030303] text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
