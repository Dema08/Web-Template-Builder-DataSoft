import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Iris — Gradient Mesh Playground — Clients
 * Pola premium: logo klien + CTA studi kasus + ornamen non-klik.
 */
export default function Clients11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cli11-badge', type: 'badge', props: { content: '✦ Klien 11', background: '#ffffff', color: '#7c3aed' } },
    { id: 'cli11-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli11-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli11-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    {
      id: 'cli11-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli11-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#ffffff', align: 'center' } },
        { id: 'cli11-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli11-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli11-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli11-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#ffffff', align: 'center' } },
        { id: 'cli11-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli11-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli11-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli11-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#ffffff', align: 'center' } },
        { id: 'cli11-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli11-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli11-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli11-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#ffffff', align: 'center' } },
        { id: 'cli11-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli11-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-indigo-600">
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/20 blur-3xl animate-pulse" />
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
