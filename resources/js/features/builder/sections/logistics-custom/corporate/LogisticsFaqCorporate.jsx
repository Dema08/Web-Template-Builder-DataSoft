import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFaqCorporate
 * B2B logistics compliance, contract terms, insurance & SLA FAQs.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsFaqCorporate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'faq-badge', type: 'badge', props: { content: '❓ Informasi & Pertanyaan Umum', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'faq-title', type: 'heading', props: { content: 'Pertanyaan Seputar Layanan Logistik TransGo', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq-desc', type: 'text', props: { content: 'Segala hal yang perlu diketahui perusahaan Anda sebelum menjalin kontrak armada dan kerja sama distribusi kargo.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'faq-card-1',
      type: 'card',
      props: { variant: 'faq', background: '#0f223d', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'f1-title', type: 'heading', props: { content: 'Bagaimana jaminan keamanan kargo dan asuransi selama pengiriman?', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'f1-desc', type: 'text', props: { content: 'Setiap pengiriman dilindungi Asuransi Marine & Cargo All-Risk hingga Rp 5 Miliar per muatan, segel GPS Smart Lock, dan verifikasi identitas pengemudi tersertifikasi.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'faq-card-2',
      type: 'card',
      props: { variant: 'faq', background: '#0f223d', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'f2-title', type: 'heading', props: { content: 'Apakah TransGo menyediakan sistem integrasi API ERP / TMS?', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'f2-desc', type: 'text', props: { content: 'Ya, kami memiliki tim teknologi yang menyediakan Webhook & REST API untuk integrasi langsung dengan SAP, Oracle, Odoo, atau TMS internal perusahaan Anda.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'faq-card-3',
      type: 'card',
      props: { variant: 'faq', background: '#0f223d', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'f3-title', type: 'heading', props: { content: 'Bagaimana mekanisme kontrak armada dedicated bulanan atau tahunan?', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'f3-desc', type: 'text', props: { content: 'Kami menyediakan skema Dedicated Fleet Contract (1-5 tahun) lengkap dengan armada baru bermerek, driver tetap, perawatan berkala, dan armada cadangan siaga.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'faq-card-4',
      type: 'card',
      props: { variant: 'faq', background: '#0f223d', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'f4-title', type: 'heading', props: { content: 'Berapa lead-time pengiriman rute Jakarta ke Surabaya & Luar Jawa?', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'f4-desc', type: 'text', props: { content: 'Untuk Jakarta-Surabaya lead-time FTL adalah 24 jam door-to-door. Untuk rute Sumatera (Medan) 36-48 jam, serta rute laut Kalimantan & Sulawesi 3-4 hari jadwal tetap.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#08152b] relative">
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
