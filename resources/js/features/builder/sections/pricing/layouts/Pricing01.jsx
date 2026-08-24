import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Pricing01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'prc1-heading',
      type: 'heading',
      props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'prc1-subtext',
      type: 'text',
      props: { content: 'Pilih paket yang paling sesuai dengan skala dan kebutuhan bisnis Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'prc1-card-1',
      type: 'card',
      props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' },
      childrenComponents: [
        { id: 'prc1-c1-badge', type: 'badge', props: { content: 'STARTER', color: '#64748b', background: '#f1f5f9' } },
        { id: 'prc1-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } },
        { id: 'prc1-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } },
        { id: 'prc1-c1-desc', type: 'text', props: { content: '✓ Website Profil Standar\n✓ Domestik Domain .ID\n✓ Hosting 1 Tahun\n✓ Support WhatsApp', fontSize: '14px', color: '#475569', margin: '0 0 24px 0' } },
        { id: 'prc1-c1-btn', type: 'button', props: { label: 'Pilih Paket UMKM', variant: 'outline', color: '#4f46e5' } },
      ],
    },
    {
      id: 'prc1-card-2',
      type: 'card',
      props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'xl', borderWidth: '2px', borderColor: '#4f46e5', hoverEffect: 'glow', padding: '32px' },
      childrenComponents: [
        { id: 'prc1-c2-badge', type: 'badge', props: { content: 'PALING POPULER', color: '#ffffff', background: '#4f46e5' } },
        { id: 'prc1-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } },
        { id: 'prc1-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#4f46e5', margin: '8px 0 16px 0' } },
        { id: 'prc1-c2-desc', type: 'text', props: { content: '✓ Custom Multi-Template\n✓ SEO & Speed Optimization\n✓ Integrasi Payment Gateway\n✓ Priority Support 24/7', fontSize: '14px', color: '#475569', margin: '0 0 24px 0' } },
        { id: 'prc1-c2-btn', type: 'button', props: { label: 'Pilih Paket Pro 🔥', variant: 'solid', background: '#4f46e5', color: '#ffffff' } },
      ],
    },
    {
      id: 'prc1-card-3',
      type: 'card',
      props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' },
      childrenComponents: [
        { id: 'prc1-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', color: '#64748b', background: '#f1f5f9' } },
        { id: 'prc1-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } },
        { id: 'prc1-c3-price', type: 'heading', props: { content: 'Custom Quote', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } },
        { id: 'prc1-c3-desc', type: 'text', props: { content: '✓ Sistem Khusus Enterprise\n✓ Dedicated Cloud Server\n✓ SLA Guarantees 99.9%\n✓ Dedicated Account Mgr', fontSize: '14px', color: '#475569', margin: '0 0 24px 0' } },
        { id: 'prc1-c3-btn', type: 'button', props: { label: 'Hubungi Tim Sales', variant: 'outline', color: '#4f46e5' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}