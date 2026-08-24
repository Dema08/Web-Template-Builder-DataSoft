import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Gallery02({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'gal2-heading',
      type: 'heading',
      props: { content: 'Galeri Portfolio & Proyek', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'gal2-subtext',
      type: 'text',
      props: { content: 'Kumpulan foto hasil karya dan portofolio proyek unggulan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'gal2-img-1',
      type: 'card',
      props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal2-img1-image', type: 'image', props: { src: '', alt: 'Proyek 1', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } },
      ],
    },
    {
      id: 'gal2-img-2',
      type: 'card',
      props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal2-img2-image', type: 'image', props: { src: '', alt: 'Proyek 2', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } },
      ],
    },
    {
      id: 'gal2-img-3',
      type: 'card',
      props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal2-img3-image', type: 'image', props: { src: '', alt: 'Proyek 3', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } },
      ],
    },
    {
      id: 'gal2-img-4',
      type: 'card',
      props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal2-img4-image', type: 'image', props: { src: '', alt: 'Proyek 4', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } },
      ],
    },
    {
      id: 'gal2-img-5',
      type: 'card',
      props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal2-img5-image', type: 'image', props: { src: '', alt: 'Proyek 5', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } },
      ],
    },
    {
      id: 'gal2-img-6',
      type: 'card',
      props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal2-img6-image', type: 'image', props: { src: '', alt: 'Proyek 6', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } },
      ],
    },
    {
      id: 'gal2-img-7',
      type: 'card',
      props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal2-img7-image', type: 'image', props: { src: '', alt: 'Proyek 7', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } },
      ],
    },
    {
      id: 'gal2-img-8',
      type: 'card',
      props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' },
      childrenComponents: [
        { id: 'gal2-img8-image', type: 'image', props: { src: '', alt: 'Proyek 8', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}