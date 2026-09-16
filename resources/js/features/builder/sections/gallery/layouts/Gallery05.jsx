import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Serenity — Minimal Zen — Gallery
 * Pola premium: header editable penuh + grid galeri + ornamen non-klik.
 */
export default function Gallery05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'gal5-badge', type: 'badge', props: { content: '✦ Galeri 05', background: '#ffffff', color: '#78716c' } },
    { id: 'gal5-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal5-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal5-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } },
    {
      id: 'gal5-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal5-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 05', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal5-c1-title', type: 'heading', props: { content: 'Momen Studio 05', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal5-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#78716c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal5-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal5-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 05', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal5-c2-title', type: 'heading', props: { content: 'Karya Terbaru 05', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal5-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#78716c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal5-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal5-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 05', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal5-c3-title', type: 'heading', props: { content: 'Suasana Tim 05', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal5-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#78716c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal5-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal5-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 05', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal5-c4-title', type: 'heading', props: { content: 'Detail Event 05', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal5-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#78716c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-28 px-6 bg-[#faf9f7]">
      <div className="flex items-center justify-center gap-2 my-4 select-none pointer-events-none"><div className="w-12 h-px bg-stone-300" /><div className="w-1.5 h-1.5 rotate-45 bg-stone-400" /><div className="w-12 h-px bg-stone-300" /></div>
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
