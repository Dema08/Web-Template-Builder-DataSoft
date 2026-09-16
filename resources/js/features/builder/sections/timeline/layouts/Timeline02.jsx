import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

export default function Timeline02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tm02-heading', type: 'heading', props: { content: 'Alur Proses Pengiriman Cargo', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tm02-desc', type: 'text', props: { content: 'Standar operasional pengiriman 4 tahap yang terintegrasi penuh dengan sistem digital kami.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    {
      id: 'tm02-card-1', type: 'card', props: { variant: 'default', background: 'rgba(249,115,22,0.08)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(249,115,22,0.2)', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tm02-c1-badge', type: 'badge', props: { content: '01', variant: 'warning', size: 'small' } },
        { id: 'tm02-c1-title', type: 'heading', props: { content: 'Pickup Cargo', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
        { id: 'tm02-c1-desc', type: 'text', props: { content: 'Pengambilan langsung dari gudang pengirim menggunakan armada penjemput khusus.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
      ]
    },
    {
      id: 'tm02-card-2', type: 'card', props: { variant: 'default', background: 'rgba(37,99,235,0.08)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(37,99,235,0.2)', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tm02-c2-badge', type: 'badge', props: { content: '02', variant: 'primary', size: 'small' } },
        { id: 'tm02-c2-title', type: 'heading', props: { content: 'Smart Sorting', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
        { id: 'tm02-c2-desc', type: 'text', props: { content: 'Penyaringan dan pengelompokan muatan otomatis dengan sistem WMS di hub.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
      ]
    },
    {
      id: 'tm02-card-3', type: 'card', props: { variant: 'default', background: 'rgba(8,145,178,0.08)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(8,145,178,0.2)', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tm02-c3-badge', type: 'badge', props: { content: '03', variant: 'secondary', size: 'small' } },
        { id: 'tm02-c3-title', type: 'heading', props: { content: 'Secure Transit', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
        { id: 'tm02-c3-desc', type: 'text', props: { content: 'Pengiriman lintas pulau dengan rute tercepat dan GPS pelacakan aktif.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
      ]
    },
    {
      id: 'tm02-card-4', type: 'card', props: { variant: 'default', background: 'rgba(5,150,105,0.08)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(5,150,105,0.2)', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tm02-c4-badge', type: 'badge', props: { content: '04', variant: 'success', size: 'small' } },
        { id: 'tm02-c4-title', type: 'heading', props: { content: 'Handover & Confirm', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
        { id: 'tm02-c4-desc', type: 'text', props: { content: 'Pengantaran ke alamat tujuan dengan verifikasi penerima digital POD real-time.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
      ]
    }
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}
