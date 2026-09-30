import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingPortfolioCapital
 * Unicorn and growth-stage portfolio showcase with valuation multipliers and funding stages.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingPortfolioCapital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'port-badge', type: 'badge', props: { content: '🦄 UNICORN & GROWTH PORTFOLIO', variant: 'primary', background: '#022c22', color: '#34d399', size: 'medium' } },
    { id: 'port-title', type: 'heading', props: { content: 'Portofolio Perusahaan Teknologi Unggulan', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'port-desc', type: 'text', props: { content: 'Kami berinvestasi pada para pendiri luar biasa yang membangun produk transformatif di Asia Tenggara & global.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'vp-card-1',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'vc1-tag', type: 'badge', props: { content: 'Valuation $3.2B • Series D Lead', variant: 'primary', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'vc1-icon', type: 'icon', props: { icon: 'FaBrain', size: '36px', color: '#34d399', align: 'left', margin: '16px 0 12px 0' } },
        { id: 'vc1-title', type: 'heading', props: { content: 'NeuroScale AI — Enterprise LLM & GPU Cloud', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'vc1-desc', type: 'text', props: { content: 'Infrastruktur cloud komputasi AI berdaulat melayani 400+ perbankan dan korporasi telekomunikasi di Asia Pasifik.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'vc1-btn', type: 'button', props: { label: 'Case Study Investasi AI →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#34d399', borderColor: '#34d399', fontWeight: '700' } },
      ],
    },
    {
      id: 'vp-card-2',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'vc2-tag', type: 'badge', props: { content: 'Valuation $1.8B • Pre-IPO Stage', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'vc2-icon', type: 'icon', props: { icon: 'FaWallet', size: '36px', color: '#38bdf8', align: 'left', margin: '16px 0 12px 0' } },
        { id: 'vc2-title', type: 'heading', props: { content: 'PayNusantara — Open Banking & Merchant Rails', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'vc2-desc', type: 'text', props: { content: 'Gerbang pembayaran digital dan kredit B2B memproses $12 Miliar GMV tahunan untuk 1.8 juta merchant UMKM.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'vc2-btn', type: 'button', props: { label: 'Case Study FinTech →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
      ],
    },
    {
      id: 'vp-card-3',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'vc3-tag', type: 'badge', props: { content: 'Valuation $950M • Series C', variant: 'primary', background: 'rgba(167, 139, 250, 0.15)', color: '#a78bfa', size: 'small' } },
        { id: 'vc3-icon', type: 'icon', props: { icon: 'FaDna', size: '36px', color: '#a78bfa', align: 'left', margin: '16px 0 12px 0' } },
        { id: 'vc3-title', type: 'heading', props: { content: 'GenomiQ Health — Precision Genomic Testing', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'vc3-desc', type: 'text', props: { content: 'Platform bioteknologi pengurutan DNA presisi untuk deteksi dini onkologi dan terapi medis personalisasi.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'vc3-btn', type: 'button', props: { label: 'Case Study BioTech →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#a78bfa', borderColor: '#a78bfa', fontWeight: '700' } },
      ],
    },
    {
      id: 'vp-card-4',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'vc4-tag', type: 'badge', props: { content: 'Valuation $1.2B • Growth Equity', variant: 'primary', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'vc4-icon', type: 'icon', props: { icon: 'FaChargingStation', size: '36px', color: '#fbbf24', align: 'left', margin: '16px 0 12px 0' } },
        { id: 'vc4-title', type: 'heading', props: { content: 'VoltMobility — Battery Swap EV Ecosystem', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'vc4-desc', type: 'text', props: { content: 'Jaringan stasiun penukaran baterai motor listrik terbesar di Indonesia dengan 4.500+ titik swap aktif.', fontSize: '14px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'vc4-btn', type: 'button', props: { label: 'Case Study CleanTech →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#fbbf24', borderColor: '#fbbf24', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 bg-[#060608] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
