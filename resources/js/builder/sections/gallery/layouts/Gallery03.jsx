import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Gallery03({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'gal3-heading',
      type: 'heading',
      props: { content: 'Galeri Eksklusif', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'gal3-subtext',
      type: 'text',
      props: { content: 'Dokumentasi visual proyek eksklusif dan pencapaian bermakna kami', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'gal3-img-1',
      type: 'card',
      props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'gal3-img1-image', type: 'image', props: { src: '', alt: 'Eksklusif 1', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal3-img-2',
      type: 'card',
      props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'gal3-img2-image', type: 'image', props: { src: '', alt: 'Eksklusif 2', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal3-img-3',
      type: 'card',
      props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'gal3-img3-image', type: 'image', props: { src: '', alt: 'Eksklusif 3', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal3-img-4',
      type: 'card',
      props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'gal3-img4-image', type: 'image', props: { src: '', alt: 'Eksklusif 4', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal3-img-5',
      type: 'card',
      props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'gal3-img5-image', type: 'image', props: { src: '', alt: 'Eksklusif 5', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
    {
      id: 'gal3-img-6',
      type: 'card',
      props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
      childrenComponents: [
        { id: 'gal3-img6-image', type: 'image', props: { src: '', alt: 'Eksklusif 6', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}