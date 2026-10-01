import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndSolutionsSmart
 * 3 Smart Factory 4.0 automation solution cards with editable images, specs, and badges.
 * Fully supports right-inspector selection and property editing for all components.
 */
export default function IndSolutionsSmart({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'sol-badge', type: 'badge', props: { text: '🤖 SOLUSI INTEGRASI INDUSTRI 4.0', variant: 'outline', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.45)' } },
    { id: 'sol-title', type: 'heading', props: { content: 'Ekosistem Otomasi Robotik & Intelligent Manufacturing', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'sol-desc', type: 'paragraph', props: { content: 'Solusi modular end-to-end mulai dari logistik intra-pabrik otonom, inspeksi kualitas berbasis AI, hingga kontrol digital twin terpusat.', fontSize: '16px', color: '#cbd5e1' } },

    // Solution 1: Autonomous Mobile Robots (AMR/AGV)
    {
      id: 'card-sol1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0d1733 0%, #060c1d 100%)', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'sol1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=80',
            alt: 'Autonomous Mobile Robots AGV Warehouse Automation',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'sol1-badge', type: 'badge', props: { text: 'LIDAR SLAM NAVIGATION', variant: 'solid', background: 'rgba(59,130,246,0.2)', color: '#60a5fa' } },
        { id: 'sol1-title', type: 'heading', props: { content: 'Autonomous Mobile Robots (AMR) & AGV Fleet', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sol1-desc', type: 'paragraph', props: { content: 'Armada robot pemindah material otomatis tanpa rel fisik dengan kapasitas angkut 500kg - 2 Ton, tersinkronisasi langsung dengan WMS pabrik.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'sol1-spec', type: 'heading', props: { content: 'Payload: 2.000 kg | Navigasi: LiDAR 3D + AI Obstacle Bypass', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#60a5fa' } },
      ]
    },

    // Solution 2: AI Computer Vision Inspection
    {
      id: 'card-sol2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0d1733 0%, #060c1d 100%)', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'sol2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=80',
            alt: 'AI Computer Vision Surface Defect Inspection',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'sol2-badge', type: 'badge', props: { text: 'ZERO DEFECT 99.98%', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'sol2-title', type: 'heading', props: { content: 'AI Computer Vision Quality Inspection', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sol2-desc', type: 'paragraph', props: { content: 'Kamera industri multi-spektral dengan deep learning untuk mendeteksi cacat mikro, retakan permukaan, dan ketidaksesuaian dimensi dalam milidetik.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'sol2-spec', type: 'heading', props: { content: 'Kecepatan: 600 Parts/Menit | Resolusi Defect: 10 Mikron', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#67e8f9' } },
      ]
    },

    // Solution 3: Digital Twin & Predictive Maintenance
    {
      id: 'card-sol3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0d1733 0%, #060c1d 100%)', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'sol3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop&q=80',
            alt: 'Digital Twin Factory Telemetry Dashboard',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'sol3-badge', type: 'badge', props: { text: 'PREDICTIVE AI MES', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'sol3-title', type: 'heading', props: { content: 'Digital Twin & AI Predictive Maintenance', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sol3-desc', type: 'paragraph', props: { content: 'Simulasi 3D real-time seluruh lantai pabrik dengan sensor getaran dan suhu IoT untuk memprediksi kerusakan mesin 14 hari sebelum terjadi.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'sol3-spec', type: 'heading', props: { content: 'Protokol: OPC-UA, MQTT | Integrasi: SAP, Oracle ERP', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
      ]
    },

    { id: 'sol-cta-btn', type: 'button', props: { label: 'Konsultasikan Kebutuhan Otomasi Pabrik 🚀', href: '#audit', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'sol-badge');
  const titleC = lc.filter(c => c.id === 'sol-title');
  const descC = lc.filter(c => c.id === 'sol-desc');
  const card1 = lc.filter(c => c.id === 'card-sol1');
  const card2 = lc.filter(c => c.id === 'card-sol2');
  const card3 = lc.filter(c => c.id === 'card-sol3');
  const ctaBtn = lc.filter(c => c.id === 'sol-cta-btn');

  return (
    <section id="solutions" className="relative bg-[#040817] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 3 Solutions Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
