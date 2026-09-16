import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Kioso — Playful Food — Gallery
 * Pola premium: header editable penuh + grid galeri + ornamen non-klik.
 */
export default function Gallery13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'gal13-badge', type: 'badge', props: { content: '✦ Galeri 13', background: '#fce7f3', color: '#ec4899' } },
    { id: 'gal13-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal13-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal13-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    {
      id: 'gal13-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal13-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 13', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal13-c1-title', type: 'heading', props: { content: 'Momen Studio 13', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal13-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal13-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal13-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 13', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal13-c2-title', type: 'heading', props: { content: 'Karya Terbaru 13', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal13-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal13-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal13-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 13', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal13-c3-title', type: 'heading', props: { content: 'Suasana Tim 13', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal13-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal13-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal13-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 13', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal13-c4-title', type: 'heading', props: { content: 'Detail Event 13', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal13-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-amber-50">
      
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
