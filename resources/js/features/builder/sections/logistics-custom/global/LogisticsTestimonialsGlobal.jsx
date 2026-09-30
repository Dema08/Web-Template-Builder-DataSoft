import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsTestimonialsGlobal
 * Executive testimonials from global enterprise supply chain directors.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsTestimonialsGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'test-badge', type: 'badge', props: { content: '💬 EXECUTIVE TESTIMONIALS', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'test-title', type: 'heading', props: { content: 'Dipercaya Direktur Rantai Pasok Multinasional', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 12px 0' } },
    { id: 'test-desc', type: 'text', props: { content: 'Testimoni dari pimpinan divisi logistik korporasi global yang mengandalkan Nexus Global Cargo untuk pengiriman lintas negara.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'gtest-card-1',
      type: 'card',
      props: { variant: 'testimonial', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gt1-stars', type: 'text', props: { content: '★★★★★', fontSize: '18px', color: '#e7c873', margin: '0 0 14px 0' } },
        { id: 'gt1-quote', type: 'text', props: { content: '"Nexus Global berhasil mengatasi krisis distribusi semikonduktor kami dengan mencarter Boeing 777F dari Taipei ke Cengkareng dalam waktu kurang dari 24 jam. Kinerja mereka luar biasa."', fontSize: '14px', color: '#e7e5e4', lineHeight: '1.7', margin: '0 0 20px 0' } },
        { id: 'gt1-author', type: 'heading', props: { content: 'Marcus Vance', level: 'h4', fontSize: '15px', fontWeight: '800', color: '#ffffff', margin: '0 0 2px 0' } },
        { id: 'gt1-role', type: 'text', props: { content: 'VP Supply Chain — Vance Semiconductor AG (Zurich)', fontSize: '12px', color: '#e7c873', margin: '0' } },
      ],
    },
    {
      id: 'gtest-card-2',
      type: 'card',
      props: { variant: 'testimonial', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gt2-stars', type: 'text', props: { content: '★★★★★', fontSize: '18px', color: '#e7c873', margin: '0 0 14px 0' } },
        { id: 'gt2-quote', type: 'text', props: { content: '"Status AEO Customs Green Lane dari Nexus mempercepat proses pengeluaran kontainer bahan baku farmasi kami di Tanjung Priok dari 4 hari menjadi hanya 6 jam."', fontSize: '14px', color: '#e7e5e4', lineHeight: '1.7', margin: '0 0 20px 0' } },
        { id: 'gt2-author', type: 'heading', props: { content: 'Dr. Helena Kusuma', level: 'h4', fontSize: '15px', fontWeight: '800', color: '#ffffff', margin: '0 0 2px 0' } },
        { id: 'gt2-role', type: 'text', props: { content: 'Director of Operations — BioPharma International', fontSize: '12px', color: '#e7c873', margin: '0' } },
      ],
    },
    {
      id: 'gtest-card-3',
      type: 'card',
      props: { variant: 'testimonial', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gt3-stars', type: 'text', props: { content: '★★★★★', fontSize: '18px', color: '#e7c873', margin: '0 0 14px 0' } },
        { id: 'gt3-quote', type: 'text', props: { content: '"Pergudangan berikat (PLB) Cikarang Nexus sangat menghemat cash-flow bea masuk kami hingga miliaran rupiah setiap kuartal dengan kepatuhan audit yang sempurna."', fontSize: '14px', color: '#e7e5e4', lineHeight: '1.7', margin: '0 0 20px 0' } },
        { id: 'gt3-author', type: 'heading', props: { content: 'Kenji Takahashi', level: 'h4', fontSize: '15px', fontWeight: '800', color: '#ffffff', margin: '0 0 2px 0' } },
        { id: 'gt3-role', type: 'text', props: { content: 'Head of Global Logistics — Nippon Automotive Parts', fontSize: '12px', color: '#e7c873', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0c0a09] text-white relative">
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
