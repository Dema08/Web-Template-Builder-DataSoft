import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Facilities01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'fac1-heading',
      type: 'heading',
      props: { content: 'Fasilitas Kampus Kelas Dunia', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'fac1-subtext',
      type: 'text',
      props: { content: 'Lingkungan belajar modern yang mendukung inovasi dan kreativitas mahasiswa', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'fac1-card-1',
      type: 'card',
      props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' },
      childrenComponents: [
        { id: 'fac1-c1-icon', type: 'icon', props: { icon: 'FaBook', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'fac1-c1-title', type: 'heading', props: { content: 'Perpustakaan Digital', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'fac1-c1-desc', type: 'text', props: { content: 'Koleksi lebih dari 50.000 jurnal dan buku digital terakreditasi internasional.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'fac1-card-2',
      type: 'card',
      props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' },
      childrenComponents: [
        { id: 'fac1-c2-icon', type: 'icon', props: { icon: 'FaFlask', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'fac1-c2-title', type: 'heading', props: { content: 'Laboratorium Riset', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'fac1-c2-desc', type: 'text', props: { content: 'Fasilitas laboratorium canggih untuk riset sains, teknologi, dan rekayasa.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'fac1-card-3',
      type: 'card',
      props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' },
      childrenComponents: [
        { id: 'fac1-c3-icon', type: 'icon', props: { icon: 'FaRunning', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'fac1-c3-title', type: 'heading', props: { content: 'Pusat Olahraga', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'fac1-c3-desc', type: 'text', props: { content: 'Kompleks olahraga indoor & outdoor lengkap untuk aktivitas fisik mahasiswa.', fontSize: '14px', color: '#64748b', margin: '0' } },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}