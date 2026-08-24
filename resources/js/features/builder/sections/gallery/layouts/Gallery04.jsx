import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Gallery04({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'gal4-heading',
      type: 'heading',
      props: { content: 'Galeri Aktivitas & Acara', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'gal4-subtext',
      type: 'text',
      props: { content: 'Momen-momen berharga dari berbagai event dan aktivitas kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'gal4-img-1',
      type: 'card',
      props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gal4-img1-image', type: 'image', props: { src: '', alt: 'Acara 1', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal4-img-2',
      type: 'card',
      props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gal4-img2-image', type: 'image', props: { src: '', alt: 'Acara 2', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal4-img-3',
      type: 'card',
      props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gal4-img3-image', type: 'image', props: { src: '', alt: 'Acara 3', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal4-img-4',
      type: 'card',
      props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gal4-img4-image', type: 'image', props: { src: '', alt: 'Acara 4', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal4-img-5',
      type: 'card',
      props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gal4-img5-image', type: 'image', props: { src: '', alt: 'Acara 5', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal4-img-6',
      type: 'card',
      props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gal4-img6-image', type: 'image', props: { src: '', alt: 'Acara 6', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal4-img-7',
      type: 'card',
      props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gal4-img7-image', type: 'image', props: { src: '', alt: 'Acara 7', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal4-img-8',
      type: 'card',
      props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gal4-img8-image', type: 'image', props: { src: '', alt: 'Acara 8', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}