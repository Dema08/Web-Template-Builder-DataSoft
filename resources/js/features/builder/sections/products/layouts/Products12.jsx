import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OBSIDIAN — Dark Split Enterprise Products
 * Split gelap enterprise + kartu metrik.
 */
export default function Products12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod12-badge', type: 'badge', props: { content: '● Enterprise Ready', background: '#0f172a', color: '#38bdf8' } },
    { id: 'prod12-heading', type: 'heading', props: { content: 'Infrastruktur Skala Enterprise', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod12-text', type: 'text', props: { content: 'Uptime 99.99% untuk finansial & pemerintahan.', fontSize: '15px', color: '#94a3b8', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod12-cta', type: 'button', props: { label: 'Talk to Sales →', href: '#sales', variant: 'primary', size: 'medium', radius: 'md', background: '#38bdf8', color: '#082f49' } },
    {
      id: 'prod12-card-1', type: 'card',
      props: { variant: 'product', background: '#1e293b', borderRadius: '16px', shadow: 'lg', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod12-c1-title', type: 'heading', props: { content: 'Cloud Core', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod12-c1-price', type: 'heading', props: { content: 'Rp 45jt/thn', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#38bdf8', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod12-c1-desc', type: 'text', props: { content: 'Multi-region, auto-failover.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod12-c1-btn', type: 'button', props: { label: 'Request Demo', href: '#demo', variant: 'ghost', size: 'small', background: 'transparent', color: '#38bdf8' } },
      ],
    },
    {
      id: 'prod12-card-2', type: 'card',
      props: { variant: 'product', background: '#1e293b', borderRadius: '16px', shadow: 'lg', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod12-c2-title', type: 'heading', props: { content: 'Secure Vault', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod12-c2-price', type: 'heading', props: { content: 'Rp 28jt/thn', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#38bdf8', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod12-c2-desc', type: 'text', props: { content: 'Enkripsi HSM, SOC2 ready.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod12-c2-btn', type: 'button', props: { label: 'Request Demo', href: '#demo', variant: 'ghost', size: 'small', background: 'transparent', color: '#38bdf8' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <div>
          {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}
          {renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}
          <div className="mt-6 flex gap-6 select-none pointer-events-none"><div><p className="text-2xl font-black text-white">99.99%</p><p className="text-xs text-slate-500">Uptime</p></div><div><p className="text-2xl font-black text-white">120+</p><p className="text-xs text-slate-500">Enterprise</p></div></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
