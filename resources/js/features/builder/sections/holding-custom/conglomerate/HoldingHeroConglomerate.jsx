import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingHeroConglomerate
 * Grand conglomerate hero with multi-industry asset highlights, valuation summary, and dual IR CTAs.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingHeroConglomerate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'hero-badge', type: 'badge', props: { content: '🏛️ Konglomerasi Strategis Nasional Lintas Sektor', variant: 'primary', background: '#fffbeb', color: '#b45309', size: 'medium' } },
    { id: 'hero-title', type: 'heading', props: { content: 'Membangun Nilai Berkelanjutan & Kemandirian Ekonomi Indonesia', level: 'h1', fontSize: '50px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 18px 0' } },
    { id: 'hero-desc', type: 'text', props: { content: 'Nusantara Strategic Holdings mengelola 16 anak perusahaan terkemuka di sektor Transisi Energi, Pelabuhan & Infrastruktur, Agribisnis Berkelanjutan, dan Ekosistem Finansial Digital dengan tata kelola kelas dunia.', fontSize: '18px', color: '#cbd5e1', align: 'left', lineHeight: '1.8', margin: '0 0 32px 0' } },
    { id: 'btn-annual', type: 'button', props: { label: 'Unduh Laporan Tahunan 2025 (PDF) →', href: '#financials', variant: 'primary', size: 'large', radius: 'lg', background: '#d97706', color: '#ffffff', shadow: 'lg', fontWeight: '700' } },
    { id: 'btn-subs', type: 'button', props: { label: 'Eksplorasi Pilar Bisnis Kami', href: '#portfolio', variant: 'outline', size: 'large', radius: 'lg', background: 'transparent', color: '#fbbf24', borderColor: '#fbbf24', fontWeight: '700' } },
    // Right Showcase Card with Conglomerate Tower Image & Governance Summary
    {
      id: 'conglom-hero-card',
      type: 'card',
      props: {
        background: '#091b33',
        borderColor: '#334155',
        borderWidth: '1px',
        borderRadius: '24px',
        padding: '0px',
        shadow: '2xl',
      },
      childrenComponents: [
        {
          id: 'conglom-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80',
            alt: 'Nusantara Strategic Holdings Tower',
            width: '100%',
            height: '440px',
            objectFit: 'cover',
            borderRadius: '24px 24px 0 0',
          },
        },
        {
          id: 'conglom-gov-card',
          type: 'card',
          props: {
            background: 'rgba(15, 23, 42, 0.95)',
            borderColor: 'rgba(51, 65, 85, 0.8)',
            borderWidth: '1px',
            borderRadius: '16px',
            padding: '16px',
            margin: '-70px 16px 16px 16px',
            shadow: 'xl',
          },
          childrenComponents: [
            {
              id: 'conglom-gov-header',
              type: 'card',
              props: { background: 'transparent', borderWidth: '0px', padding: '0px', margin: '0 0 8px 0' },
              childrenComponents: [
                { id: 'cg-title', type: 'heading', props: { content: 'CORPORATE GOVERNANCE SUMMARY', level: 'h4', fontSize: '13px', fontWeight: '900', color: '#fbbf24', margin: '0' } },
                { id: 'cg-badge', type: 'badge', props: { text: 'GCG Score 96.8 / 100', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#34d399' } },
              ],
            },
            { id: 'cg-auditor', type: 'text', props: { content: 'Auditor Independen: PricewaterhouseCoopers (PwC)', fontSize: '12px', color: '#cbd5e1', fontWeight: '600' } },
            { id: 'cg-rating', type: 'text', props: { content: 'Peringkat Kredit: idAAA (Pefindo) / Baa2 (Moody\'s)', fontSize: '12px', color: '#fbbf24', fontWeight: '600' } },
          ],
        },
      ],
    },
    {
      id: 'hero-stat-1',
      type: 'card',
      props: { variant: 'stat', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px' },
      childrenComponents: [
        { id: 'hs1-val', type: 'heading', props: { content: 'IDR 142.8 T', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#fbbf24', margin: '0' } },
        { id: 'hs1-lbl', type: 'text', props: { content: 'Kapitalisasi Pasar Grup', fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'hero-stat-2',
      type: 'card',
      props: { variant: 'stat', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px' },
      childrenComponents: [
        { id: 'hs2-val', type: 'heading', props: { content: '48.500+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#ffffff', margin: '0' } },
        { id: 'hs2-lbl', type: 'text', props: { content: 'Tenaga Kerja Profesional', fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'hero-stat-3',
      type: 'card',
      props: { variant: 'stat', background: 'rgba(15, 23, 42, 0.7)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px' },
      childrenComponents: [
        { id: 'hs3-val', type: 'heading', props: { content: '16 Entitas', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#34d399', margin: '0' } },
        { id: 'hs3-lbl', type: 'text', props: { content: 'Anak Usaha & Joint Venture', fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading');
  const textComps = layoutComponents.filter(c => c.type === 'text');
  const buttonComps = layoutComponents.filter(c => c.type === 'button');
  const statComps = layoutComponents.filter(c => c.id === 'hero-stat-1' || c.id === 'hero-stat-2' || c.id === 'hero-stat-3' || c.props?.variant === 'stat');
  const heroCard = layoutComponents.filter(c => c.id === 'conglom-hero-card');
  const fallbackImageComps = layoutComponents.filter(c => c.type === 'image' || c.id === 'conglom-hero-img');

  return (
    <section className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-[#061427] via-[#091b33] to-[#061427] overflow-hidden text-white">
      {/* Background Graphic Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(217,119,6,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {renderLayoutComponents(badgeComps, sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(textComps, sectionId)}</div>

          <div className="flex flex-wrap gap-4 mt-2">
            {renderLayoutComponents(buttonComps, sectionId)}
          </div>

          {/* Key Metrics Cards */}
          {statComps.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-800 w-full">
              {renderLayoutComponents(statComps, sectionId)}
            </div>
          )}
        </div>

        {/* Right Visual Conglomerate Headquarters */}
        <div className="lg:col-span-5 relative">
          {heroCard.length > 0 ? (
            renderLayoutComponents(heroCard, sectionId)
          ) : fallbackImageComps.length > 0 ? (
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-[0_30px_90px_-20px_rgba(217,119,6,0.25)]">
              {renderLayoutComponents(fallbackImageComps, sectionId)}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
