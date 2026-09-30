import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceTestimonialsConsulting
 * Client testimonials for executive consulting firm.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceTestimonialsConsulting({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ctst-badge', type: 'badge', props: { content: '💬 SUARA KLIEN TERPERCAYA', background: 'rgba(184,150,62,0.15)', color: '#d4af6a', size: 'medium' } },
    { id: 'ctst-title', type: 'heading', props: { content: 'Apa Kata Para Pemimpin Bisnis Tentang Kami', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', align: 'center' } },
    {
      id: 'tst-card-1',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '32px' },
      childrenComponents: [
        { id: 'tt1-quote', type: 'text', props: { content: '"Advanta Partners membantu kami mendefinisikan ulang strategi perusahaan dan meningkatkan EBITDA kami sebesar 34% dalam 18 bulan. Mereka benar-benar terlibat sebagai mitra, bukan sekadar konsultan eksternal."', fontSize: '15px', color: '#e2e8f0', lineHeight: '1.7', fontStyle: 'italic' } },
        { id: 'tt1-name', type: 'heading', props: { content: 'Ir. Bambang Hartono', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
        { id: 'tt1-role', type: 'text', props: { content: 'Direktur Utama, PT Mega Industri Persada Tbk', fontSize: '13px', color: '#d4af6a' } },
      ],
    },
    {
      id: 'tst-card-2',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '32px' },
      childrenComponents: [
        { id: 'tt2-quote', type: 'text', props: { content: '"Proyek transformasi digital kami berjalan jauh melebihi ekspektasi. Advanta membawa metodologi yang sangat terstruktur dan pemahaman industri yang dalam tentang perbankan ritel Indonesia."', fontSize: '15px', color: '#e2e8f0', lineHeight: '1.7', fontStyle: 'italic' } },
        { id: 'tt2-name', type: 'heading', props: { content: 'Dewi Kusumawardani, MBA', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
        { id: 'tt2-role', type: 'text', props: { content: 'Chief Transformation Officer, Bank Nusa Raya', fontSize: '13px', color: '#d4af6a' } },
      ],
    },
    {
      id: 'tst-card-3',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '32px' },
      childrenComponents: [
        { id: 'tt3-quote', type: 'text', props: { content: '"Tim Advanta memandu proses M&A kami dengan sangat profesional — mulai dari due diligence hingga integrasi pasca-akuisisi. Hasilnya jauh melampaui target sinergi yang kami tetapkan awalnya."', fontSize: '15px', color: '#e2e8f0', lineHeight: '1.7', fontStyle: 'italic' } },
        { id: 'tt3-name', type: 'heading', props: { content: 'Dr. Hendra Kusuma', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' } },
        { id: 'tt3-role', type: 'text', props: { content: 'President Director, Cakrawala Group', fontSize: '13px', color: '#d4af6a' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-[#0d1627] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
