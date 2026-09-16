import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Obsidian — Dark Split Enterprise — Clients
 * Pola premium: logo klien + CTA studi kasus + ornamen non-klik.
 */
export default function Clients12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cli12-badge', type: 'badge', props: { content: '✦ Klien 12', background: '#0f172a', color: '#38bdf8' } },
    { id: 'cli12-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli12-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli12-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    {
      id: 'cli12-card-1',
      type: 'card',
      props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli12-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#38bdf8', align: 'center' } },
        { id: 'cli12-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli12-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli12-card-2',
      type: 'card',
      props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli12-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#38bdf8', align: 'center' } },
        { id: 'cli12-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli12-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli12-card-3',
      type: 'card',
      props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli12-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#38bdf8', align: 'center' } },
        { id: 'cli12-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli12-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli12-card-4',
      type: 'card',
      props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli12-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#38bdf8', align: 'center' } },
        { id: 'cli12-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli12-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="mt-6 flex gap-6 select-none pointer-events-none"><div><p className="text-2xl font-black text-white">99.99%</p><p className="text-xs text-slate-500">Uptime</p></div><div><p className="text-2xl font-black text-white">120+</p><p className="text-xs text-slate-500">Klien</p></div></div>
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
