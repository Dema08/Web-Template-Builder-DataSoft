import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingHeroIndustrial
 * Cinematic dark hero for heavy industry holding — deep slate with amber/gold foundry accents.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingHeroIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ind-badge', type: 'badge', props: { content: '⚙️ Fondasi Hilirisasi Industri & Kedaulatan Manufaktur Nasional', variant: 'primary', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'medium' } },
    { id: 'ind-title', type: 'heading', props: { content: 'Membangun Ketahanan Industri Berat Melalui Rekayasa Teknologi Terintegrasi', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', lineHeight: '1.15' } },
    { id: 'ind-desc', type: 'text', props: { content: 'Sovereign Industrial Group Tbk mengoperasikan 12 kawasan industri terpadu, 6 fasilitas smelter ramah lingkungan, manufaktur panel sel surya canggih, dan sistem robotika perakitan otomatis berstandar global.', fontSize: '18px', color: '#94a3b8', align: 'left', lineHeight: '1.7' } },
    { id: 'btn-divs', type: 'button', props: { label: 'Jelajahi Divisi Manufaktur Kami →', href: '#divisions', variant: 'primary', size: 'large', radius: 'xl', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#020617', fontWeight: '800' } },
    { id: 'btn-b2b', type: 'button', props: { label: 'Unduh Industrial Capability Book (PDF)', href: '#procurement', variant: 'outline', size: 'large', radius: 'xl', border: '1px solid #475569', color: '#f8fafc', fontWeight: '600' } },
    // Right Showcase Card with Industrial Plant Image & Smart Factory Status
    {
      id: 'ind-hero-card',
      type: 'card',
      props: {
        background: '#091322',
        borderColor: '#1e293b',
        borderWidth: '1px',
        borderRadius: '24px',
        padding: '0px',
        shadow: '2xl',
      },
      childrenComponents: [
        {
          id: 'ind-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=80',
            alt: 'Sovereign Industrial Smart Plant',
            width: '100%',
            height: '440px',
            objectFit: 'cover',
            borderRadius: '24px 24px 0 0',
          },
        },
        {
          id: 'ind-smart-card',
          type: 'card',
          props: {
            background: 'rgba(15, 23, 42, 0.95)',
            borderColor: 'rgba(245, 158, 11, 0.4)',
            borderWidth: '1px',
            borderRadius: '16px',
            padding: '16px',
            margin: '-70px 16px 16px 16px',
            shadow: 'xl',
          },
          childrenComponents: [
            {
              id: 'ind-smart-header',
              type: 'card',
              props: { background: 'transparent', borderWidth: '0px', padding: '0px', margin: '0 0 8px 0' },
              childrenComponents: [
                { id: 'ind-smart-title', type: 'heading', props: { content: 'SMART FACTORY AUTOMATION 4.0', level: 'h4', fontSize: '13px', fontWeight: '900', color: '#fbbf24', margin: '0' } },
                { id: 'ind-smart-badge', type: 'badge', props: { text: '99.8% OEE Efficiency', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#34d399' } },
              ],
            },
            { id: 'ind-cap-txt', type: 'text', props: { content: 'Kapasitas Smelter Nikel: 120.000 MT/Tahun', fontSize: '12px', color: '#ffffff', fontWeight: '600' } },
            { id: 'ind-cert-txt', type: 'text', props: { content: 'Sertifikasi Manajemen Aset: ISO 55001:2014', fontSize: '12px', color: '#fbbf24', fontWeight: '600' } },
          ],
        },
      ],
    },
    {
      id: 'ind-stat-1',
      type: 'card',
      props: { background: 'rgba(15, 23, 42, 0.85)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.3)', padding: '20px' },
      childrenComponents: [
        { id: 'is1-val', type: 'heading', props: { content: '8.4 Juta Ton', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#ffffff' } },
        { id: 'is1-lbl', type: 'text', props: { content: 'Throughput Manufaktur / Tahun', fontSize: '12px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'ind-stat-2',
      type: 'card',
      props: { background: 'rgba(15, 23, 42, 0.85)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.3)', padding: '20px' },
      childrenComponents: [
        { id: 'is2-val', type: 'heading', props: { content: '42.6M Man-Hours', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#4ade80' } },
        { id: 'is2-lbl', type: 'text', props: { content: 'Jam Kerja Aman Zero-Harm', fontSize: '12px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'ind-stat-3',
      type: 'card',
      props: { background: 'rgba(15, 23, 42, 0.85)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(245, 158, 11, 0.3)', padding: '20px' },
      childrenComponents: [
        { id: 'is3-val', type: 'heading', props: { content: '42 Negara', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fbbf24' } },
        { id: 'is3-lbl', type: 'text', props: { content: 'Tujuan Ekspor Komoditas', fontSize: '12px', color: '#94a3b8' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading');
  const textComps = layoutComponents.filter(c => c.type === 'text');
  const buttonComps = layoutComponents.filter(c => c.type === 'button');
  const statComps = layoutComponents.filter(c => c.id === 'ind-stat-1' || c.id === 'ind-stat-2' || c.id === 'ind-stat-3' || c.props?.variant === 'stat');
  const heroCard = layoutComponents.filter(c => c.id === 'ind-hero-card');
  const fallbackImageComps = layoutComponents.filter(c => c.type === 'image' || c.id === 'ind-hero-img');

  return (
    <section className="relative py-28 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden text-slate-100">
      {/* Ambient Industrial Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(to right, #f59e0b 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {renderLayoutComponents(badgeComps, sectionId)}
          <div className="mt-6 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>
          <div className="w-full mt-4">{renderLayoutComponents(textComps, sectionId)}</div>

          <div className="flex flex-wrap gap-4 mt-8">
            {renderLayoutComponents(buttonComps, sectionId)}
          </div>

          {/* Key Metrics Cards */}
          {statComps.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-800 w-full">
              {renderLayoutComponents(statComps, sectionId)}
            </div>
          )}
        </div>

        {/* Right Visual Industrial Plant */}
        <div className="lg:col-span-5 relative">
          {heroCard.length > 0 ? (
            renderLayoutComponents(heroCard, sectionId)
          ) : fallbackImageComps.length > 0 ? (
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
              {renderLayoutComponents(fallbackImageComps, sectionId)}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
