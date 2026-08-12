import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Services03({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'srv3-badge',
      type: 'badge',
      props: { content: 'SOLUSI DIGITAL', background: 'rgba(255,255,255,0.15)', color: '#ffffff', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'srv3-heading',
      type: 'heading',
      props: { content: 'Layanan Teknologi Masa Depan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'srv3-subtext',
      type: 'text',
      props: { content: 'Mentransformasi ide-ide hebat menjadi produk digital berkinerja tinggi', fontSize: '16px', color: '#c7d2fe', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'srv3-card-1',
      type: 'card',
      props: { variant: 'glass', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '24px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255, 255, 255, 0.2)', hoverEffect: 'glow', padding: '32px' },
      childrenComponents: [
        { id: 'srv3-c1-icon', type: 'icon', props: { icon: 'FaBolt', size: '40px', color: '#818cf8', align: 'left' } },
        { id: 'srv3-c1-title', type: 'heading', props: { content: 'High Speed Cloud', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '20px 0 10px 0' } },
        { id: 'srv3-c1-desc', type: 'text', props: { content: 'Server berperforma tinggi dengan latensi super rendah dan ketersediaan 99.99%.', fontSize: '14px', color: '#e0e7ff', margin: '0' } },
      ],
    },
    {
      id: 'srv3-card-2',
      type: 'card',
      props: { variant: 'glass', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '24px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255, 255, 255, 0.2)', hoverEffect: 'glow', padding: '32px' },
      childrenComponents: [
        { id: 'srv3-c2-icon', type: 'icon', props: { icon: 'FaUserTie', size: '40px', color: '#a78bfa', align: 'left' } },
        { id: 'srv3-c2-title', type: 'heading', props: { content: 'Konsultasi IT Expert', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '20px 0 10px 0' } },
        { id: 'srv3-c2-desc', type: 'text', props: { content: 'Pendampingan arsitektur perangkat lunak dari insinyur sistem berpengalaman.', fontSize: '14px', color: '#e0e7ff', margin: '0' } },
      ],
    },
    {
      id: 'srv3-card-3',
      type: 'card',
      props: { variant: 'glass', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '24px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255, 255, 255, 0.2)', hoverEffect: 'glow', padding: '32px' },
      childrenComponents: [
        { id: 'srv3-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '40px', color: '#38bdf8', align: 'left' } },
        { id: 'srv3-c3-title', type: 'heading', props: { content: 'Cyber Security Audits', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '20px 0 10px 0' } },
        { id: 'srv3-c3-desc', type: 'text', props: { content: 'Pengujian penetrasi komprehensif dan enkripsi data berlapis standar ISO.', fontSize: '14px', color: '#e0e7ff', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white backdrop-blur">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}