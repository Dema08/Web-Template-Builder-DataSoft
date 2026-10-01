import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyCtaIndustrial
 * B2B Industrial Supply Contract & Food Manufacturer Partnership Card.
 */
export default function DairyCtaIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-ind-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #064e3b 0%, #061714 100%)', borderColor: 'rgba(16,185,129,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'cta-ind-badge', type: 'badge', props: { text: '🏭 KEMITRAAN PASOKAN SUSU INDUSTRI (B2B)', variant: 'solid', background: 'rgba(16,185,129,0.3)', color: '#6ee7b7' } },
        { id: 'cta-ind-title', type: 'heading', props: { content: 'Amankan Pasokan Bahan Baku Susu Segar Berkualitas Pabrik Anda Sekarang', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
        { id: 'cta-ind-desc', type: 'paragraph', props: { content: 'Hubungi divisi B2B Key Account kami untuk negosiasi kontrak volume, penyesuaian jadwal armada tangki, serta pengujian sampel laboratorium gratis.', fontSize: '16px', color: '#cbd5e1' } },
        { id: 'cta-ind-btn1', type: 'button', props: { label: 'Ajukan Penawaran Pasokan (RFQ) 📑', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#10b981', color: '#ffffff', fontWeight: '800' } },
        { id: 'cta-ind-btn2', type: 'button', props: { label: 'Unduh Company Profile & CoA', href: '#contact', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-ind-card');

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#05100e] text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
