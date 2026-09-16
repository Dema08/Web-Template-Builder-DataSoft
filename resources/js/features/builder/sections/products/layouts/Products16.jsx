import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EMERALD — Eco Shop Products
 * Hijau eco + badge daun + kartu natural.
 */
export default function Products16({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod16-badge', type: 'badge', props: { content: '🌿 100% Natural', background: '#dcfce7', color: '#166534' } },
    { id: 'prod16-heading', type: 'heading', props: { content: 'Belanja Baik untuk Bumi', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod16-text', type: 'text', props: { content: 'Kemasan kompos, bahan organik tersertifikasi.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod16-cta', type: 'button', props: { label: 'Shop Sustainable →', href: '#shop', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    {
      id: 'prod16-card-1', type: 'card',
      props: { variant: 'product', background: '#f0fdf4', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod16-c1-image', type: 'image', props: { src: '', alt: 'Sabun', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod16-c1-title', type: 'heading', props: { content: 'Sabun Lerak Bar', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c1-price', type: 'heading', props: { content: 'Rp 39rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#16a34a', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c1-btn', type: 'button', props: { label: '＋ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#16a34a', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod16-card-2', type: 'card',
      props: { variant: 'product', background: '#f0fdf4', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod16-c2-image', type: 'image', props: { src: '', alt: 'Tote', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod16-c2-title', type: 'heading', props: { content: 'Tote Rami', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c2-price', type: 'heading', props: { content: 'Rp 129rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#16a34a', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c2-btn', type: 'button', props: { label: '＋ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#16a34a', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod16-card-3', type: 'card',
      props: { variant: 'product', background: '#064e3b', borderRadius: '20px', shadow: 'md', borderWidth: '0', borderColor: '#064e3b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod16-c3-title', type: 'heading', props: { content: 'Refill Station', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '16px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c3-desc', type: 'text', props: { content: 'Isi ulang hemat 40% + poin hijau.', fontSize: '13px', color: '#bbf7d0', align: 'center', margin: '6px 0 14px 0', padding: '0 16px' } },
        { id: 'prod16-c3-btn', type: 'button', props: { label: 'Cari Stasiun →', href: '#stasiun', variant: 'primary', size: 'small', radius: 'full', background: '#ffffff', color: '#064e3b' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
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
