import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Teachers01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'tch1-badge',
      type: 'badge',
      props: { content: 'Tenaga Pengajar', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'tch1-heading',
      type: 'heading',
      props: { content: 'Dosen & Instruktur Berpengalaman', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'tch1-subtext',
      type: 'text',
      props: { content: 'Didukung oleh akademisi dan praktisi terbaik dari dalam dan luar negeri', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'tch1-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'tch1-c1-avatar', type: 'image', props: { src: '', alt: 'Dr. Ahmad Fauzi', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
        { id: 'tch1-c1-name', type: 'heading', props: { content: 'Dr. Ahmad Fauzi', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
        { id: 'tch1-c1-role', type: 'text', props: { content: 'Kepala Program Teknik Informatika', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
        { id: 'tch1-c1-desc', type: 'text', props: { content: 'Ph.D dari MIT, 15 tahun pengalaman riset AI dan Machine Learning.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'tch1-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'tch1-c2-avatar', type: 'image', props: { src: '', alt: 'Prof. Siti Rahayu', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
        { id: 'tch1-c2-name', type: 'heading', props: { content: 'Prof. Siti Rahayu', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
        { id: 'tch1-c2-role', type: 'text', props: { content: 'Guru Besar Ekonomi Manajemen', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
        { id: 'tch1-c2-desc', type: 'text', props: { content: 'Konsultan senior Bank Indonesia, penulis 3 buku manajemen keuangan.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'tch1-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'tch1-c3-avatar', type: 'image', props: { src: '', alt: 'Dr. Reza Mahendra', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
        { id: 'tch1-c3-name', type: 'heading', props: { content: 'Dr. Reza Mahendra', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
        { id: 'tch1-c3-role', type: 'text', props: { content: 'Dosen Hukum Bisnis Internasional', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
        { id: 'tch1-c3-desc', type: 'text', props: { content: 'Advokat senior, 12 tahun pengalaman hukum bisnis internasional di Asia.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'tch1-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'tch1-c4-avatar', type: 'image', props: { src: '', alt: 'Prof. Linda Kartika', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
        { id: 'tch1-c4-name', type: 'heading', props: { content: 'Prof. Linda Kartika', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
        { id: 'tch1-c4-role', type: 'text', props: { content: 'Koordinator Jurusan Desain Komunikasi', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
        { id: 'tch1-c4-desc', type: 'text', props: { content: 'Creative Director berpengalaman 18 tahun di industri periklanan global.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}