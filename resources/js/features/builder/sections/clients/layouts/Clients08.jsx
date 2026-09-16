import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Sakura — Centered Floral — Clients
 * Pola premium: logo klien + CTA studi kasus + ornamen non-klik.
 */
export default function Clients08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cli8-badge', type: 'badge', props: { content: '✦ Klien 08', background: '#fce7f3', color: '#be185d' } },
    { id: 'cli8-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli8-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli8-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    {
      id: 'cli8-card-1',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli8-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'cli8-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli8-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } },
      ],
    },
    {
      id: 'cli8-card-2',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli8-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'cli8-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli8-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } },
      ],
    },
    {
      id: 'cli8-card-3',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli8-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'cli8-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli8-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } },
      ],
    },
    {
      id: 'cli8-card-4',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli8-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'cli8-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli8-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="flex items-center justify-center gap-2 my-1 select-none pointer-events-none"><div className="w-12 h-px bg-pink-300" /><span className="text-pink-400">✦</span><div className="w-12 h-px bg-pink-300" /></div>
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-2xl">{renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-10 text-center">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
