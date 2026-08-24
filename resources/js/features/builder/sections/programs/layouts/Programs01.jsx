import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Programs01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'prg1-badge',
      type: 'badge',
      props: { content: 'Program Studi', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'prg1-heading',
      type: 'heading',
      props: { content: 'Program Akademik Unggulan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'prg1-subtext',
      type: 'text',
      props: { content: 'Pilih jalur pendidikan terbaik yang sesuai dengan cita-cita dan karir Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'prg1-card-1',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'prg1-c1-icon', type: 'icon', props: { icon: 'FaGraduationCap', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'prg1-c1-title', type: 'heading', props: { content: 'Sarjana (S1)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'prg1-c1-desc', type: 'text', props: { content: 'Program sarjana 4 tahun dengan kurikulum berbasis kompetensi dan sertifikasi profesional.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'prg1-c1-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
      ],
    },
    {
      id: 'prg1-card-2',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'prg1-c2-icon', type: 'icon', props: { icon: 'FaUniversity', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'prg1-c2-title', type: 'heading', props: { content: 'Magister (S2)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'prg1-c2-desc', type: 'text', props: { content: 'Program magister 2 tahun dengan fokus penelitian terapan dan kemitraan industri global.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'prg1-c2-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
      ],
    },
    {
      id: 'prg1-card-3',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'prg1-c3-icon', type: 'icon', props: { icon: 'FaMicroscope', size: '36px', color: '#4f46e5', align: 'left' } },
        { id: 'prg1-c3-title', type: 'heading', props: { content: 'Doktor (S3)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
        { id: 'prg1-c3-desc', type: 'text', props: { content: 'Program doktor riset mendalam dengan laboratorium riset berstandar internasional.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
        { id: 'prg1-c3-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
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