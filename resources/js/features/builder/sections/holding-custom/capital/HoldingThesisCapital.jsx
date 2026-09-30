import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingThesisCapital
 * 4 Pillars of venture & growth equity investment philosophy.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingThesisCapital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ths-badge', type: 'badge', props: { content: '🎯 INVESTMENT THESIS & PHILOSOPHY', variant: 'primary', background: '#022c22', color: '#34d399', size: 'medium' } },
    { id: 'ths-title', type: 'heading', props: { content: 'Kriteria & Filosofi Investasi Vanguard Apex', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ths-desc', type: 'text', props: { content: 'Kami bukan sekadar penyedia modal, melainkan mitra strategis jangka panjang yang membuka akses pasar institusi global.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'ths-card-1',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tc1-num', type: 'badge', props: { content: 'PILAR 01', variant: 'primary', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'tc1-t', type: 'heading', props: { content: 'Founder-First & High Conviction', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'tc1-d', type: 'text', props: { content: 'Dukungan penuh kepada pendiri visioner dengan keberanian memimpin putaran pendanaan awal dan follow-on investasi berkelanjutan.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'ths-card-2',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tc2-num', type: 'badge', props: { content: 'PILAR 02', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'tc2-t', type: 'heading', props: { content: 'Deep Tech & Defensible Moats', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'tc2-d', type: 'text', props: { content: 'Fokus pada perusahaan yang memiliki keunggulan proprietary IP, efisiensi unit economics yang jelas, dan efek jaringan tak tertandingi.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'ths-card-3',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tc3-num', type: 'badge', props: { content: 'PILAR 03', variant: 'primary', background: 'rgba(167, 139, 250, 0.15)', color: '#a78bfa', size: 'small' } },
        { id: 'tc3-t', type: 'heading', props: { content: 'Global Capital Syndicate & Expansion', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'tc3-d', type: 'text', props: { content: 'Membawa startup lokal menembus pasar regional dan menghubungkan ke sindikasi investor sovereign wealth fund dunia.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'ths-card-4',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tc4-num', type: 'badge', props: { content: 'PILAR 04', variant: 'primary', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'tc4-t', type: 'heading', props: { content: 'Disciplined Exit & Governance', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'tc4-d', type: 'text', props: { content: 'Rencana likuiditas terstruktur melalui IPO bursa internasional, M&A korporat strategis, dan buyback dividen premium.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="thesis" className="py-24 px-4 sm:px-6 bg-[#030303] text-white relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
