import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsServicesTech
 * On-demand express, instant, and next-day e-commerce logistics services.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsServicesTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv-badge', type: 'badge', props: { content: '⚡ LAYANAN ON-DEMAND & EXPRESS', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'medium' } },
    { id: 'srv-title', type: 'heading', props: { content: 'Pilihan Pengiriman Fleksibel untuk Seller Modern', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'srv-desc', type: 'text', props: { content: 'Kirim makanan, pakaian, barang elektronik hingga dokumen berharga dengan opsi kecepatan sesuai kebutuhan Anda.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'ts-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ts1-icon', type: 'icon', props: { icon: 'FaBolt', size: '36px', color: '#0284c7', align: 'left', margin: '0 0 14px 0' } },
        { id: 'ts1-title', type: 'heading', props: { content: 'Instant Delivery 1 - 2 Jam', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'ts1-desc', type: 'text', props: { content: 'Kurir dedicated langsung menjemput dan mengantar paket ke titik tujuan tanpa singgah, khusus radius hingga 30 km.', fontSize: '14px', color: '#64748b', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'ts1-btn', type: 'button', props: { label: 'Pesan Kurir Instant →', href: '#pricing', variant: 'primary', size: 'small', radius: 'full', background: '#0284c7', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'ts-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ts2-icon', type: 'icon', props: { icon: 'FaClock', size: '36px', color: '#10b981', align: 'left', margin: '0 0 14px 0' } },
        { id: 'ts2-title', type: 'heading', props: { content: 'Same-Day City Express (Tiba Hari Ini)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'ts2-desc', type: 'text', props: { content: 'Paket di-pickup sebelum jam 14:00 diantar sampai di tangan pembeli sebelum jam 20:00 dengan ongkir super hemat.', fontSize: '14px', color: '#64748b', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'ts2-btn', type: 'button', props: { label: 'Pesan Same-Day →', href: '#pricing', variant: 'primary', size: 'small', radius: 'full', background: '#10b981', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'ts-card-3',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ts3-icon', type: 'icon', props: { icon: 'FaMoneyBillWave', size: '36px', color: '#8b5cf6', align: 'left', margin: '0 0 14px 0' } },
        { id: 'ts3-title', type: 'heading', props: { content: 'Layanan COD Kilat & Auto Pencairan', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'ts3-desc', type: 'text', props: { content: 'Tingkatkan konversi jualan online dengan bayar di tempat. Uang COD otomatis cair ke rekening bank Anda dalam 1x24 jam kerja.', fontSize: '14px', color: '#64748b', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'ts3-btn', type: 'button', props: { label: 'Aktifkan COD Seller →', href: '#pricing', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'ts-card-4',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '32px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ts4-icon', type: 'icon', props: { icon: 'FaCode', size: '36px', color: '#f59e0b', align: 'left', margin: '0 0 14px 0' } },
        { id: 'ts4-title', type: 'heading', props: { content: 'Automated REST API & Webhook', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'ts4-desc', type: 'text', props: { content: 'Generate resi otomatis, auto print shipping label, dan live tracking update langsung di website checkout atau aplikasi toko Anda.', fontSize: '14px', color: '#64748b', margin: '0 0 20px 0', lineHeight: '1.6' } },
        { id: 'ts4-btn', type: 'button', props: { label: 'Lihat Dokumentasi API →', href: '#engine', variant: 'primary', size: 'small', radius: 'full', background: '#f59e0b', color: '#ffffff', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
