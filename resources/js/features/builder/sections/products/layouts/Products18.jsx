import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — App Download Products
 * Oranye aplikasi + kartu langganan digital.
 */
export default function Products18({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod18-badge', type: 'badge', props: { content: '◉ 4.9 — 2M downloads', background: '#fff7ed', color: '#ea580c' } },
    { id: 'prod18-heading', type: 'heading', props: { content: 'Pilih Paket Solstice', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod18-text', type: 'text', props: { content: 'Gratis 14 hari, batal kapan saja.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod18-cta', type: 'button', props: { label: 'Download App →', href: '#download', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } },
    {
      id: 'prod18-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod18-c1-title', type: 'heading', props: { content: 'Starter', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c1-price', type: 'heading', props: { content: 'Gratis', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#f97316', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c1-desc', type: 'text', props: { content: '3 proyek, 1GB storage.', fontSize: '13px', color: '#64748b', align: 'center', margin: '6px 0 14px 0', padding: '0 16px' } },
        { id: 'prod18-c1-btn', type: 'button', props: { label: 'Mulai Gratis', href: '#free', variant: 'ghost', size: 'small', background: 'transparent', color: '#f97316' } },
      ],
    },
    {
      id: 'prod18-card-2', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '20px', shadow: 'lg', borderWidth: '0', borderColor: '#0f172a', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod18-c2-title', type: 'heading', props: { content: 'Pro ★ Populer', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#fdba74', align: 'center', margin: '16px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c2-price', type: 'heading', props: { content: 'Rp 99rb/bln', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c2-desc', type: 'text', props: { content: 'Unlimited proyek + AI.', fontSize: '13px', color: '#fdba74', align: 'center', margin: '6px 0 14px 0', padding: '0 16px' } },
        { id: 'prod18-c2-btn', type: 'button', props: { label: 'Upgrade Pro →', href: '#pro', variant: 'primary', size: 'small', radius: 'full', background: '#f97316', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod18-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod18-c3-title', type: 'heading', props: { content: 'Team', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c3-price', type: 'heading', props: { content: 'Rp 249rb/bln', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#f97316', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c3-desc', type: 'text', props: { content: '10 kursi, admin panel.', fontSize: '13px', color: '#64748b', align: 'center', margin: '6px 0 14px 0', padding: '0 16px' } },
        { id: 'prod18-c3-btn', type: 'button', props: { label: 'Hubungi Tim', href: '#team', variant: 'ghost', size: 'small', background: 'transparent', color: '#f97316' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-orange-50">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
