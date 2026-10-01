import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopCtaAgri
 * Farmer Partnership & B2B Commodity Supply CTA Card.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function KopCtaAgri({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'cta-agri-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #38240c 0%, #201305 50%, #120902 100%)', borderColor: 'rgba(217,119,6,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'cta-agri-badge', type: 'badge', props: { text: '🌾 KEMITRAAN KELOMPOK TANI & OFF-TAKER KOMODITAS', variant: 'outline', background: 'rgba(217,119,6,0.2)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.5)' } },
        { id: 'cta-agri-title', type: 'heading', props: { content: 'Waktunya Petani Berdaulat & Menguasai Pasar dengan Koperasi', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.02em', textAlign: 'center' } },
        { id: 'cta-agri-desc', type: 'paragraph', props: { content: 'Daftarkan kelompok tani (Poktan/Gapoktan) Anda untuk mendapatkan pasokan pupuk bersubsidi, akses sewa alat panen, dan kepastian kontrak pembelian hasil bumi.', fontSize: '16px', color: '#fde68a', textAlign: 'center' } },
        { id: 'cta-agri-btn1', type: 'button', props: { label: 'Daftar Kemitraan Poktan 🌾', href: 'mailto:kemitraan@koperasitani.id', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
        { id: 'cta-agri-btn2', type: 'button', props: { label: 'Kontak Tim Pengadaan B2B (WhatsApp)', href: 'https://wa.me/6281188990011', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(35,22,6,0.8)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.4)' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const ctaCard = lc.filter(c => c.id === 'cta-agri-card');

  return (
    <section id="partner" className="relative bg-[#130b03] py-20 lg:py-28 overflow-hidden text-amber-50">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>{renderLayoutComponents(ctaCard, sectionId)}</div>
      </div>
    </section>
  );
}
