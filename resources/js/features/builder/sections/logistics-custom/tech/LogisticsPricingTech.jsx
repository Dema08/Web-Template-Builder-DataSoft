import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsPricingTech
 * Transparent pricing tiers for UMKM Sellers, Pro Merchants, and Enterprise APIs.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsPricingTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prc-badge', type: 'badge', props: { content: '💳 TARIF ONGKIR TRANSPARAN', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'medium' } },
    { id: 'prc-title', type: 'heading', props: { content: 'Paket Pengiriman Sesuai Skala Bisnis Anda', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc-desc', type: 'text', props: { content: 'Mulai kirim tanpa deposit dan nikmati potongan ongkir hingga 20% bagi seller bervolume tinggi.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'price-card-1',
      type: 'card',
      props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pc1-badge', type: 'badge', props: { content: 'Tanpa Minimum Order', variant: 'primary', background: '#f1f5f9', color: '#475569', size: 'small' } },
        { id: 'pc1-title', type: 'heading', props: { content: 'Starter UMKM', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '14px 0 6px 0' } },
        { id: 'pc1-price', type: 'heading', props: { content: 'Mulai Rp 8.000 / paket', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#0284c7', margin: '0 0 14px 0' } },
        { id: 'pc1-desc', type: 'text', props: { content: 'Pickup gratis 1 paket pun dijemput, dashboard web seller sederhana, pencairan COD H+1, dan garansi standar.', fontSize: '13px', color: '#64748b', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'pc1-btn', type: 'button', props: { label: 'Mulai Kirim Sekarang →', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'price-card-2',
      type: 'card',
      props: { variant: 'pricing', background: '#f0f9ff', borderRadius: '24px', borderWidth: '2px', borderColor: '#0284c7', shadow: 'xl', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pc2-badge', type: 'badge', props: { content: '🔥 Paling Populer', variant: 'primary', background: '#0284c7', color: '#ffffff', size: 'small' } },
        { id: 'pc2-title', type: 'heading', props: { content: 'Pro Merchant D2C', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '14px 0 6px 0' } },
        { id: 'pc2-price', type: 'heading', props: { content: 'Diskon Ongkir s/d 15%', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#0284c7', margin: '0 0 14px 0' } },
        { id: 'pc2-desc', type: 'text', props: { content: 'Free dedicated pickup jam tetap, pencairan COD sore hari otomatis, integrasi Shopify / WooCommerce, dan proteksi 100%.', fontSize: '13px', color: '#64748b', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'pc2-btn', type: 'button', props: { label: 'Daftar Akun Merchant →', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#0284c7', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'price-card-3',
      type: 'card',
      props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pc3-badge', type: 'badge', props: { content: 'Volume > 500 Paket/Hari', variant: 'primary', background: '#f1f5f9', color: '#475569', size: 'small' } },
        { id: 'pc3-title', type: 'heading', props: { content: 'Enterprise API', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '14px 0 6px 0' } },
        { id: 'pc3-price', type: 'heading', props: { content: 'Custom SLA & Tarif', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#0284c7', margin: '0 0 14px 0' } },
        { id: 'pc3-desc', type: 'text', props: { content: 'Custom REST API & Webhook dedicated, Account Manager khusus 24/7, kurir EV standby, dan SLA kompensasi.', fontSize: '13px', color: '#64748b', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'pc3-btn', type: 'button', props: { label: 'Hubungi Tim Enterprise →', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-white relative">
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
