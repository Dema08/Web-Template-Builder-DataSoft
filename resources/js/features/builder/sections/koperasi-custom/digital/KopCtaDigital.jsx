import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopCtaDigital
 * SuperApp Download & Digital Cooperative Member Registration CTA Card.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function KopCtaDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-digital-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #09334c 0%, #041d2c 50%, #020f18 100%)', borderColor: 'rgba(6,182,212,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'cta-dig-badge', type: 'badge', props: { text: '⚡ DOWNLOAD SUPERAPP SEKARANG', variant: 'outline', background: 'rgba(6,182,212,0.2)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.5)' } },
        { id: 'cta-dig-title', type: 'heading', props: { content: 'Mulai Pengalaman Koperasi Modern, Cepat & Bebas Ribet Hari Ini', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'cta-dig-desc', type: 'paragraph', props: { content: 'Unduh aplikasi Koperasi Digital ID di Google Play Store atau Apple App Store. Daftar hanya 3 menit dan dapatkan bonus welcome reward saldo tabungan Rp 50.000.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
        { id: 'cta-dig-btn1', type: 'button', props: { label: 'Download di Google Play Store 📱', href: '#download', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #06b6d4, #059669)', color: '#ffffff', fontWeight: '700' } },
        { id: 'cta-dig-btn2', type: 'button', props: { label: 'Buka Web App Portal Anggota', href: 'https://app.koperasidigital.id', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(6,27,38,0.8)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-digital-card');

  return (
    <section id="download" className="relative bg-[#020b12] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
