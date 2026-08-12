import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Products01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'prod1-badge',
      type: 'badge',
      props: { content: 'Produk Unggulan', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'prod1-heading',
      type: 'heading',
      props: { content: 'Produk & Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'prod1-subtext',
      type: 'text',
      props: { content: 'Solusi inovatif yang dirancang khusus untuk kebutuhan bisnis modern Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'prod1-card-1',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c1-image', type: 'image', props: { src: '', alt: 'Produk Enterprise', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c1-body', type: 'text', props: { content: '', fontSize: '14px', color: '#64748b', padding: '20px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c1-title', type: 'heading', props: { content: 'DataSoft Enterprise', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c1-desc', type: 'text', props: { content: 'Sistem manajemen bisnis terintegrasi untuk perusahaan skala besar.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c1-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
      ],
    },
    {
      id: 'prod1-card-2',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c2-image', type: 'image', props: { src: '', alt: 'Produk UMKM', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c2-body', type: 'text', props: { content: '', fontSize: '14px', color: '#64748b', padding: '20px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c2-title', type: 'heading', props: { content: 'DataSoft UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c2-desc', type: 'text', props: { content: 'Platform kasir dan stok digital yang mudah digunakan untuk UMKM.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c2-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
      ],
    },
    {
      id: 'prod1-card-3',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c3-image', type: 'image', props: { src: '', alt: 'Produk Akademik', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c3-body', type: 'text', props: { content: '', fontSize: '14px', color: '#64748b', padding: '20px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c3-title', type: 'heading', props: { content: 'DataSoft Akademik', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c3-desc', type: 'text', props: { content: 'Sistem informasi manajemen akademik lengkap untuk kampus dan sekolah.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c3-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}