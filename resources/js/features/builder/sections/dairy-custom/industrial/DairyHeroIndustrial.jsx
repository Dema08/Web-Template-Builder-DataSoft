import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyHeroIndustrial
 * Heavy Industrial Dairy Supply Chain Hero with 4 B2B KPI Cards and Processing Plant Showroom.
 */
export default function DairyHeroIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ind-badge', type: 'badge', props: { text: '🏭 MITRA UTAMA 12 PABRIK PENGOLAHAN SUSU (IPS) NASIONAL', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },
    { id: 'ind-title', type: 'heading', props: { content: 'Pasokan Bahan Baku Susu Segar Skala Industri & Pabrik Pakan Ternak Terpadu', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
    { id: 'ind-desc', type: 'paragraph', props: { content: 'Menyuplai 85 ton susu segar per hari ke industri FMCG, pabrik susu bubuk, dan manufaktur keju nasional. Didukung 45 armada truk tangki berinsulasi termal dan pabrik pakan mandiri.', fontSize: '17px', color: '#94a3b8' } },
    { id: 'ind-btn1', type: 'button', props: { label: 'Ajukan Kontrak Pasokan B2B 📑', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
    { id: 'ind-btn2', type: 'button', props: { label: 'Katalog Pakan Konsentrat', href: '#programs', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.7)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },

    // 4 Supply Chain Metric Cards
    {
      id: 'ind-stat1-card',
      type: 'card',
      props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ind-stat1-num', type: 'heading', props: { content: '85 Ton / Hari', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'ind-stat1-lbl', type: 'paragraph', props: { content: 'Kapasitas Pasokan Pabrik', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'ind-stat2-card',
      type: 'card',
      props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ind-stat2-num', type: 'heading', props: { content: '45 Unit', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#34d399' } },
        { id: 'ind-stat2-lbl', type: 'paragraph', props: { content: 'Armada Truk Tangki Dingin', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'ind-stat3-card',
      type: 'card',
      props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ind-stat3-num', type: 'heading', props: { content: 'Min. 3.8%', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#34d399' } },
        { id: 'ind-stat3-lbl', type: 'paragraph', props: { content: 'Kadar Lemak (Fat Content)', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'ind-stat4-card',
      type: 'card',
      props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ind-stat4-num', type: 'heading', props: { content: 'ISO 22000', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'ind-stat4-lbl', type: 'paragraph', props: { content: 'Sistem Keamanan Pangan', fontSize: '12px', color: '#94a3b8' } },
      ]
    },

    // Processing Plant Showroom Card
    {
      id: 'ind-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0e2e28 0%, #061714 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'ind-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80',
            alt: 'Industrial Dairy Processing Plant and Stainless Storage Silos',
            borderRadius: '14px',
            width: '100%',
            height: '380px',
            objectFit: 'cover',
          }
        },
        { id: 'ind-card-badge', type: 'badge', props: { text: '🏭 SILO BUFFER KAPASITAS 250.000 LITER', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
        { id: 'ind-card-title', type: 'heading', props: { content: 'Sistem Rantai Dingin Terpusat & Jalur Truk Khusus', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'ind-card-desc', type: 'paragraph', props: { content: 'Setiap pengiriman dilengkapi sertifikat analisa laboratorium (CoA) real-time dengan data keasaman, berat jenis, dan bebas antibiotik.', fontSize: '13px', color: '#94a3b8' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'ind-badge');
  const titleC = lc.filter(c => c.id === 'ind-title');
  const descC = lc.filter(c => c.id === 'ind-desc');
  const btn1C = lc.filter(c => c.id === 'ind-btn1');
  const btn2C = lc.filter(c => c.id === 'ind-btn2');
  const stat1 = lc.filter(c => c.id === 'ind-stat1-card');
  const stat2 = lc.filter(c => c.id === 'ind-stat2-card');
  const stat3 = lc.filter(c => c.id === 'ind-stat3-card');
  const stat4 = lc.filter(c => c.id === 'ind-stat4-card');
  const heroCard = lc.filter(c => c.id === 'ind-hero-card');

  return (
    <section className="relative min-h-[88vh] flex items-center bg-[#05100e] text-slate-100 overflow-hidden py-20 lg:py-24">
      {/* Industrial Emerald Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column Text & Supply Chain Metrics */}
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

            {/* 4 Supply Chain Metric Cards */}
            <div className="pt-8 border-t border-emerald-900/40 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>{renderLayoutComponents(stat1, sectionId)}</div>
              <div>{renderLayoutComponents(stat2, sectionId)}</div>
              <div>{renderLayoutComponents(stat3, sectionId)}</div>
              <div>{renderLayoutComponents(stat4, sectionId)}</div>
            </div>
          </div>

          {/* Right Column Factory Showroom Card */}
          <div className="lg:col-span-6">
            <div>{renderLayoutComponents(heroCard, sectionId)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
