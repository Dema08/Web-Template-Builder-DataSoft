import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Pulse — Search-First Marketplace — Gallery
 * Pola premium: header editable penuh + grid galeri + ornamen non-klik.
 */
export default function Gallery10({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'gal10-badge', type: 'badge', props: { content: '✦ Galeri 10', background: '#fef2f2', color: '#dc2626' } },
    { id: 'gal10-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal10-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal10-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'gal10-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal10-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 10', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal10-c1-title', type: 'heading', props: { content: 'Momen Studio 10', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal10-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal10-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal10-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 10', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal10-c2-title', type: 'heading', props: { content: 'Karya Terbaru 10', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal10-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal10-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal10-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 10', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal10-c3-title', type: 'heading', props: { content: 'Suasana Tim 10', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal10-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal10-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal10-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 10', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal10-c4-title', type: 'heading', props: { content: 'Detail Event 10', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal10-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="w-full max-w-xl mt-2 flex items-center gap-2 bg-white border rounded-full px-5 py-3 shadow-sm select-none pointer-events-none"><span className="text-slate-400">⌕</span><span className="text-sm text-slate-400 flex-1 text-left">Cari…</span></div>
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-2xl">{renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
