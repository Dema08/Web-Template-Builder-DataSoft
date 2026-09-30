import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFaqTech
 * E-commerce seller FAQ, COD terms, and pickup policies.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsFaqTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tfaq-badge', type: 'badge', props: { content: '❓ PANDUAN & PERTANYAAN UMUM', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'medium' } },
    { id: 'tfaq-title', type: 'heading', props: { content: 'Hal yang Sering Ditanyakan Seller', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tfaq-desc', type: 'text', props: { content: 'Pelajari mekanisme pickup gratis, jadwal pencairan COD, dan asuransi proteksi paket TrackFast.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'tfaq-card-1',
      type: 'card',
      props: { variant: 'faq', background: '#ffffff', borderRadius: '20px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'sm', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tf1-title', type: 'heading', props: { content: 'Apakah ada biaya minimum untuk request pickup?', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'tf1-desc', type: 'text', props: { content: 'Tidak ada! Kurir TrackFast siap menjemput paket Anda secara gratis meski hanya kirim 1 paket saja.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tfaq-card-2',
      type: 'card',
      props: { variant: 'faq', background: '#ffffff', borderRadius: '20px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'sm', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tf2-title', type: 'heading', props: { content: 'Kapan uang hasil COD ditransfer ke rekening toko saya?', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'tf2-desc', type: 'text', props: { content: 'Uang COD otomatis dicairkan H+1 kerja setelah status paket berhasil terkirim dan diverifikasi oleh pembeli.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tfaq-card-3',
      type: 'card',
      props: { variant: 'faq', background: '#ffffff', borderRadius: '20px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'sm', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tf3-title', type: 'heading', props: { content: 'Bagaimana jika paket terlambat atau mengalami kerusakan?', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'tf3-desc', type: 'text', props: { content: 'Kami memberikan jaminan Garansi Ongkir Kembali 100% jika terjadi keterlambatan dan klaim asuransi barang senilai hingga Rp 10 Juta per paket.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tfaq-card-4',
      type: 'card',
      props: { variant: 'faq', background: '#ffffff', borderRadius: '20px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'sm', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tf4-title', type: 'heading', props: { content: 'Apakah TrackFast bisa diintegrasikan ke toko online saya?', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'tf4-desc', type: 'text', props: { content: 'Bisa! Kami memiliki plugin siap pakai untuk Shopify, WooCommerce (WordPress), dan REST API untuk custom web/mobile app.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="space-y-4">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
