import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndHeroSmart
 * Smart Factory 4.0 & Industrial Robotics Hero with live telemetry metrics.
 * Fully supports right-inspector selection and property editing for cards, images, badges, buttons, and texts.
 */
export default function IndHeroSmart({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'smart-badge', type: 'badge', props: { text: '⚡ SMART FACTORY & INDUSTRIAL IOT 4.0', variant: 'outline', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.45)' } },
    { id: 'smart-title', type: 'heading', props: { content: 'Transformasi Pabrik Cerdas dengan Otomasi Robotik & AI Vision', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
    { id: 'smart-desc', type: 'paragraph', props: { content: 'Integrasi sistem manufaktur cerdas dengan Autonomous Mobile Robots (AMR), computer vision quality inspection real-time, dan digital twin analytics untuk efisiensi produksi maksimal.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'smart-btn1', type: 'button', props: { label: 'Konsultasi Solusi Otomasi 🚀', href: '#audit', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: '#ffffff', fontWeight: '700' } },
    { id: 'smart-btn2', type: 'button', props: { label: 'Eksplorasi Solusi Robotik', href: '#solutions', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },

    // 4 Telemetry KPI Stat Cards
    {
      id: 'smart-stat1-card',
      type: 'card',
      props: { background: '#0b1329', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'smart-stat1-num', type: 'heading', props: { content: '94.8%', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#60a5fa' } },
        { id: 'smart-stat1-lbl', type: 'paragraph', props: { content: 'Overall Equipment Effectiveness', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'smart-stat2-card',
      type: 'card',
      props: { background: '#0b1329', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'smart-stat2-num', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
        { id: 'smart-stat2-lbl', type: 'paragraph', props: { content: 'Robotik & AGV Terintegrasi', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'smart-stat3-card',
      type: 'card',
      props: { background: '#0b1329', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'smart-stat3-num', type: 'heading', props: { content: '-35%', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#34d399' } },
        { id: 'smart-stat3-lbl', type: 'paragraph', props: { content: 'Reduksi Biaya Downtime', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'smart-stat4-card',
      type: 'card',
      props: { background: '#0b1329', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'smart-stat4-num', type: 'heading', props: { content: '99.98%', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#a78bfa' } },
        { id: 'smart-stat4-lbl', type: 'paragraph', props: { content: 'Akurasi Inspeksi AI Vision', fontSize: '12px', color: '#94a3b8' } },
      ]
    },

    // Robot Cell Showcase Card
    {
      id: 'smart-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0d1938 0%, #060b1c 100%)', borderColor: 'rgba(59,130,246,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'smart-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&auto=format&fit=crop&q=80',
            alt: 'Smart Factory Robotic Assembly Line',
            borderRadius: '14px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'smart-card-badge', type: 'badge', props: { text: '🤖 CELL 04 · HIGH-SPEED PICK & PLACE', variant: 'solid', background: 'rgba(59,130,246,0.2)', color: '#60a5fa' } },
        { id: 'smart-card-title', type: 'heading', props: { content: 'Sistem Robotik Fleksibel 6-Axis dengan Computer Vision', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'smart-card-desc', type: 'paragraph', props: { content: 'Mendeteksi dan merakit komponen mikro dengan kecepatan 120 cycle/menit, terhubung langsung ke ERP dan cloud MES platform.', fontSize: '13px', color: '#94a3b8' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'smart-badge');
  const titleC = lc.filter(c => c.id === 'smart-title');
  const descC = lc.filter(c => c.id === 'smart-desc');
  const btn1C = lc.filter(c => c.id === 'smart-btn1');
  const btn2C = lc.filter(c => c.id === 'smart-btn2');
  const stat1 = lc.filter(c => c.id === 'smart-stat1-card');
  const stat2 = lc.filter(c => c.id === 'smart-stat2-card');
  const stat3 = lc.filter(c => c.id === 'smart-stat3-card');
  const stat4 = lc.filter(c => c.id === 'smart-stat4-card');
  const heroCard = lc.filter(c => c.id === 'smart-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#02050f] text-slate-100 overflow-hidden py-20 lg:py-24">
      {/* High-tech Neon Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Telemetry Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
            
            <div className="space-y-4">
              <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
              <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {renderLayoutComponents(btn1C, sectionId)}
              {renderLayoutComponents(btn2C, sectionId)}
            </div>

            {/* 4 Telemetry KPI Cards */}
            <div className="pt-8 border-t border-blue-500/20 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>{renderLayoutComponents(stat1, sectionId)}</div>
              <div>{renderLayoutComponents(stat2, sectionId)}</div>
              <div>{renderLayoutComponents(stat3, sectionId)}</div>
              <div>{renderLayoutComponents(stat4, sectionId)}</div>
            </div>
          </div>

          {/* Right Column Showcase Card */}
          <div className="lg:col-span-6">
            <div>{renderLayoutComponents(heroCard, sectionId)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
