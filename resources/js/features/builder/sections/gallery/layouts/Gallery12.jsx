import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Obsidian — Dark Split Enterprise — Gallery
 * Pola premium: header editable penuh + grid galeri + ornamen non-klik.
 */
export default function Gallery12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'gal12-badge', type: 'badge', props: { content: '✦ Galeri 12', background: '#0f172a', color: '#38bdf8' } },
    { id: 'gal12-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal12-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal12-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    {
      id: 'gal12-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#1e293b', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal12-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 12', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal12-c1-title', type: 'heading', props: { content: 'Momen Studio 12', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal12-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal12-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#1e293b', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal12-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 12', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal12-c2-title', type: 'heading', props: { content: 'Karya Terbaru 12', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal12-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal12-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#1e293b', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal12-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 12', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal12-c3-title', type: 'heading', props: { content: 'Suasana Tim 12', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal12-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal12-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#1e293b', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal12-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 12', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal12-c4-title', type: 'heading', props: { content: 'Detail Event 12', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal12-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="mt-6 flex gap-6 select-none pointer-events-none"><div><p className="text-2xl font-black text-white">99.99%</p><p className="text-xs text-slate-500">Uptime</p></div><div><p className="text-2xl font-black text-white">120+</p><p className="text-xs text-slate-500">Klien</p></div></div>
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
