import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Gallery01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'gal1-heading',
      type: 'heading',
      props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'gal1-subtext',
      type: 'text',
      props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'gal1-img-1',
      type: 'card',
      props: { variant: 'gallery', background: 'linear-gradient(135deg,#c7d2fe,#a5b4fc)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal1-img1-image', type: 'image', props: { src: '', alt: 'Foto Galeri 1', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal1-img-2',
      type: 'card',
      props: { variant: 'gallery', background: 'linear-gradient(135deg,#ddd6fe,#c4b5fd)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal1-img2-image', type: 'image', props: { src: '', alt: 'Foto Galeri 2', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal1-img-3',
      type: 'card',
      props: { variant: 'gallery', background: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal1-img3-image', type: 'image', props: { src: '', alt: 'Foto Galeri 3', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal1-img-4',
      type: 'card',
      props: { variant: 'gallery', background: 'linear-gradient(135deg,#f0fdf4,#bbf7d0)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal1-img4-image', type: 'image', props: { src: '', alt: 'Foto Galeri 4', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal1-img-5',
      type: 'card',
      props: { variant: 'gallery', background: 'linear-gradient(135deg,#fef9c3,#fef08a)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal1-img5-image', type: 'image', props: { src: '', alt: 'Foto Galeri 5', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal1-img-6',
      type: 'card',
      props: { variant: 'gallery', background: 'linear-gradient(135deg,#fce7f3,#fbcfe8)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal1-img6-image', type: 'image', props: { src: '', alt: 'Foto Galeri 6', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}