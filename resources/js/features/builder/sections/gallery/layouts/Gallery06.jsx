import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Nebula — Glass Space Stats — Gallery
 * Pola premium: header editable penuh + grid galeri + ornamen non-klik.
 */
export default function Gallery06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'gal6-badge', type: 'badge', props: { content: '✦ Galeri 06', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'gal6-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal6-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal6-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    {
      id: 'gal6-card-1',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal6-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 06', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal6-c1-title', type: 'heading', props: { content: 'Momen Studio 06', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal6-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal6-card-2',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal6-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 06', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal6-c2-title', type: 'heading', props: { content: 'Karya Terbaru 06', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal6-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal6-card-3',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal6-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 06', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal6-c3-title', type: 'heading', props: { content: 'Suasana Tim 06', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal6-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal6-card-4',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal6-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 06', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal6-c4-title', type: 'heading', props: { content: 'Detail Event 06', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal6-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet-600/30 via-indigo-500/25 to-transparent blur-3xl animate-pulse" />
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
