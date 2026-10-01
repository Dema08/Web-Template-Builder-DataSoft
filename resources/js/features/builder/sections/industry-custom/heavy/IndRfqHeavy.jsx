import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndRfqHeavy
 * Heavy Industrial RFQ (Request for Quotation) estimation & engineering contact card.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function IndRfqHeavy({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'rfq-heavy-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #182238 0%, #0d1322 50%, #080c16 100%)', borderColor: 'rgba(245,158,11,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'rfq-badge', type: 'badge', props: { text: '⚙️ FAST-TRACK B2B RFQ ESTIMATION', variant: 'outline', background: 'rgba(245,158,11,0.2)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.5)' } },
        { id: 'rfq-title', type: 'heading', props: { content: 'Kirim Gambar Teknik & Dapatkan Penawaran Harga dalam 24 Jam', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'rfq-desc', type: 'paragraph', props: { content: 'Tim Engineering kami siap mereview file CAD/STEP/DWG Anda, memberikan analisa manufacturability (DFM), dan menghitung estimasi biaya produksi terbaik.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
        { id: 'rfq-btn1', type: 'button', props: { label: 'Submit File CAD & Permintaan RFQ ⚡', href: 'mailto:rfq@nusantaraindustrial.co.id', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', fontWeight: '800' } },
        { id: 'rfq-btn2', type: 'button', props: { label: 'Konsultasi Tim Lead Engineer (WhatsApp)', href: 'https://wa.me/6281122334455', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const rfqCard = lc.filter(c => c.id === 'rfq-heavy-card');

  return (
    <section id="rfq" className="relative bg-[#07090e] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(rfqCard, sectionId)}</div>
      </div>
    </section>
  );
}
