import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PULSE — Search-First Marketplace Products
 * Command-bar search + grid marketplace 3 kolom.
 */
export default function Products10({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod10-badge', type: 'badge', props: { content: '🔥 12.480 terjual hari ini', background: '#fef2f2', color: '#dc2626' } },
    { id: 'prod10-heading', type: 'heading', props: { content: 'Find anything, fast', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod10-text', type: 'text', props: { content: '2M+ produk dari 40.000 seller terpercaya.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod10-cta', type: 'button', props: { label: 'Start Selling →', href: '#sell', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'prod10-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod10-c1-image', type: 'image', props: { src: '', alt: 'Sneakers', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod10-c1-title', type: 'heading', props: { content: 'Flash Sneakers', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c1-price', type: 'heading', props: { content: 'Rp 799rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#dc2626', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c1-btn', type: 'button', props: { label: '+ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#dc2626', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod10-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod10-c2-image', type: 'image', props: { src: '', alt: 'Audio', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod10-c2-title', type: 'heading', props: { content: 'Audio Pro Max', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c2-price', type: 'heading', props: { content: 'Rp 1.299rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#dc2626', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c2-btn', type: 'button', props: { label: '+ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#dc2626', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod10-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod10-c3-image', type: 'image', props: { src: '', alt: 'Watch', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod10-c3-title', type: 'heading', props: { content: 'Watch S2', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c3-price', type: 'heading', props: { content: 'Rp 1.999rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#dc2626', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c3-btn', type: 'button', props: { label: '+ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#dc2626', color: '#ffffff' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="w-full max-w-xl mt-2 flex items-center gap-2 bg-white border rounded-full px-5 py-3 shadow-sm select-none pointer-events-none"><span className="text-slate-400">⌕</span><span className="text-sm text-slate-400 flex-1 text-left">Cari produk…</span><span className="text-[11px] font-bold bg-slate-100 rounded-md px-2 py-1 text-slate-500">/</span></div>
        <div className="mt-4">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
