import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Noir — Full Dark Cinematic — Gallery
 * Pola premium: header editable penuh + grid galeri + ornamen non-klik.
 */
export default function Gallery02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'gal2-badge', type: 'badge', props: { content: '✦ Galeri 02', background: '#1c1917', color: '#e7c873' } },
    { id: 'gal2-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal2-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal2-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } },
    {
      id: 'gal2-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#1c1917', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal2-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 02', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal2-c1-title', type: 'heading', props: { content: 'Momen Studio 02', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal2-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#a8a29e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal2-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#1c1917', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal2-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 02', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal2-c2-title', type: 'heading', props: { content: 'Karya Terbaru 02', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal2-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#a8a29e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal2-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#1c1917', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal2-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 02', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal2-c3-title', type: 'heading', props: { content: 'Suasana Tim 02', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal2-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#a8a29e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal2-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#1c1917', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal2-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 02', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal2-c4-title', type: 'heading', props: { content: 'Detail Event 02', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal2-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#a8a29e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-[#0c0a09] relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#e7c873]/60 to-transparent" />
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
