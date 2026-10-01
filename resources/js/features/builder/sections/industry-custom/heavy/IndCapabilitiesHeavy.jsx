import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndCapabilitiesHeavy
 * Heavy machinery and manufacturing capabilities showcase.
 * 3 rich cards each holding editable images, badges, headings, and spec paragraphs.
 */
export default function IndCapabilitiesHeavy({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cap-badge', type: 'badge', props: { text: '⚡ FASILITAS & KAPABILITAS PRODUKSI', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
    { id: 'cap-title', type: 'heading', props: { content: 'Lini Fabrikasi Presisi & Rekayasa Manufaktur Berat', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'cap-desc', type: 'paragraph', props: { content: 'Didukung permesinan terstandarisasi Jerman & Jepang untuk pengerjaan komponen berukuran masif dengan toleransi ultra-presisi.', fontSize: '16px', color: '#cbd5e1' } },

    // Capability 1: CNC Machining & Milling
    {
      id: 'card-cap1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #131929 0%, #0d121e 100%)', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'cap1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
            alt: 'CNC 5-Axis Heavy Machining Center',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'cap1-badge', type: 'badge', props: { text: 'TOLERANSI ±0.001 MM', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
        { id: 'cap1-title', type: 'heading', props: { content: 'CNC 5-Axis Machining Center & Milling', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'cap1-desc', type: 'paragraph', props: { content: 'Pemrosesan komponen turbine, impeller, housing gearbox industri berat, dan cetakan die-casting presisi hingga dimensi 6.000 x 3.500 mm.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'cap1-spec', type: 'heading', props: { content: 'Kapasitas: 35 Ton per unit | Mesin: DMG MORI & MAZAK', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fbbf24' } },
      ]
    },

    // Capability 2: Robot Welding & Heavy Fabrication
    {
      id: 'card-cap2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #131929 0%, #0d121e 100%)', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'cap2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
            alt: 'Automated Robot Welding & Heavy Steel Fabrication',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'cap2-badge', type: 'badge', props: { text: 'ASME SEC IX CERTIFIED WELDERS', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
        { id: 'cap2-title', type: 'heading', props: { content: 'Automated Robotic Welding & Pressure Vessels', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'cap2-desc', type: 'paragraph', props: { content: 'Fabrikasi struktur baja jembatan, pressure vessels, tangki minyak & gas, serta piping system bertekanan tinggi dengan uji Radiography 100%.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'cap2-spec', type: 'heading', props: { content: 'Standar: ASME U-Stamp, API 650, AWS D1.1', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fbbf24' } },
      ]
    },

    // Capability 3: Stamping, Forging & Heat Treatment
    {
      id: 'card-cap3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #131929 0%, #0d121e 100%)', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'cap3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
            alt: 'Heavy Hydraulic Stamping & Forging Plant',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'cap3-badge', type: 'badge', props: { text: 'PRESS 4.000 TON HYDRAULIC', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
        { id: 'cap3-title', type: 'heading', props: { content: 'Heavy Stamping, Forging & Heat Treatment', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'cap3-desc', type: 'paragraph', props: { content: 'Penempaan panas baja paduan khusus, quenching & tempering furnace berkapasitas 1.200°C dengan pengujian kekerasan Rockwell & Brinell.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'cap3-spec', type: 'heading', props: { content: 'Furnace: Kapasitas 20 Ton/Batch | Kontrol PID Otomatis', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fbbf24' } },
      ]
    },

    { id: 'cap-cta-btn', type: 'button', props: { label: 'Unduh Brosur Spesifikasi Teknis (PDF) 📄', href: '#rfq', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', fontWeight: '800' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'cap-badge');
  const titleC = lc.filter(c => c.id === 'cap-title');
  const descC = lc.filter(c => c.id === 'cap-desc');
  const card1 = lc.filter(c => c.id === 'card-cap1');
  const card2 = lc.filter(c => c.id === 'card-cap2');
  const card3 = lc.filter(c => c.id === 'card-cap3');
  const ctaBtn = lc.filter(c => c.id === 'cap-cta-btn');

  return (
    <section id="capabilities" className="relative bg-[#0a0d15] py-20 lg:py-28 overflow-hidden text-slate-100">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-800/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 3 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
        </div>

        {/* Bottom Download CTA */}
        <div className="text-center">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
