import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

export default function Products01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'prod1-badge',
      type: 'badge',
      props: { content: '✦ Koleksi Unggulan', background: '#eef2ff', color: '#4f46e5' },
    },
    {
      id: 'prod1-heading',
      type: 'heading',
      props: { content: 'Produk & Layanan Kami', level: 'h2', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'prod1-subtext',
      type: 'text',
      props: { content: 'Solusi inovatif yang dirancang khusus untuk kebutuhan bisnis modern Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 28px 0' },
    },
    { id: 'prod1-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#produk', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    {
      id: 'prod1-card-1',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c1-image', type: 'image', props: { src: '', alt: 'Produk Enterprise', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c1-body', type: 'text', props: { content: '★ 4.9 · Terlaris', fontSize: '12px', color: '#4f46e5', padding: '14px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c1-title', type: 'heading', props: { content: 'Microdata Enterprise', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c1-desc', type: 'text', props: { content: 'Sistem manajemen bisnis terintegrasi untuk perusahaan skala besar.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c1-btn', type: 'button', props: { label: 'Lihat Detail', href: '#detail', variant: 'primary', size: 'small', background: '#4f46e5', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod1-card-2',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c2-image', type: 'image', props: { src: '', alt: 'Produk UMKM', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c2-body', type: 'text', props: { content: '★ 4.8 · Favorit UMKM', fontSize: '12px', color: '#4f46e5', padding: '14px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c2-title', type: 'heading', props: { content: 'Microdata UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c2-desc', type: 'text', props: { content: 'Platform kasir dan stok digital yang mudah digunakan untuk UMKM.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c2-btn', type: 'button', props: { label: 'Lihat Detail', href: '#detail', variant: 'primary', size: 'small', background: '#4f46e5', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod1-card-3',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c3-image', type: 'image', props: { src: '', alt: 'Produk Akademik', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c3-body', type: 'text', props: { content: '★ 5.0 · Rekomendasi', fontSize: '12px', color: '#4f46e5', padding: '14px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c3-title', type: 'heading', props: { content: 'Microdata Akademik', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c3-desc', type: 'text', props: { content: 'Sistem informasi manajemen akademik lengkap untuk kampus dan sekolah.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c3-btn', type: 'button', props: { label: 'Lihat Detail', href: '#detail', variant: 'primary', size: 'small', background: '#4f46e5', color: '#ffffff' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-200/60 via-fuchsia-200/50 to-cyan-200/60 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto space-y-0">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-5 w-full">{renderLayoutComponents(headerComponents.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full max-w-2xl">{renderLayoutComponents(headerComponents.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-1">{renderLayoutComponents(headerComponents.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
        <div className="flex items-center justify-center gap-4 mt-10 text-xs text-slate-400 select-none pointer-events-none">
          <span>★★★★★ 4.9/5</span><span className="w-1 h-1 rounded-full bg-slate-300" /><span>Gratis konsultasi</span><span className="w-1 h-1 rounded-full bg-slate-300" /><span>Garansi 30 hari</span>
        </div>
      </div>
    </section>
  );
}
