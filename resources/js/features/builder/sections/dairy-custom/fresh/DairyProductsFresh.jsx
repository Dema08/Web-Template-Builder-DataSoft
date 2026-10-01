import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyProductsFresh
 * 3 Fresh Dairy Product Cards with editable images, freshness badges, and order buttons.
 */
export default function DairyProductsFresh({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod-badge', type: 'badge', props: { text: '🥛 OLAHAN SUSU SEGAR BERKUALITAS', variant: 'outline', background: 'rgba(13,148,136,0.1)', color: '#0d9488', borderColor: 'rgba(13,148,136,0.3)' } },
    { id: 'prod-title', type: 'heading', props: { content: 'Produk Susu & Olahan Segar Bernutrisi Tinggi Dari Peternak Lokal', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
    { id: 'prod-desc', type: 'paragraph', props: { content: 'Diproses dari 100% susu sapi murni tanpa perasa sintetis dan bahan pengawet. Tersedia untuk konsumsi rumah tangga dan pasokan bisnis kuliner.', fontSize: '16px', color: '#64748b' } },

    // Card 1: Susu Pasteurisasi Botol Kaca
    {
      id: 'card-prod1',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ccfbf1', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prod1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80',
            alt: 'Susu Sapi Segar Botol Kaca Pasteurisasi Dingin',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'prod1-badge', type: 'badge', props: { text: '🥛 BEST SELLER • BOTOL 1 LITER', variant: 'solid', background: '#f0fdfa', color: '#0f766e' } },
        { id: 'prod1-title', type: 'heading', props: { content: 'Susu Pasteurisasi Segar Murni', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'prod1-desc', type: 'paragraph', props: { content: 'Dipasteurisasi suhu rendah 72°C selama 15 detik untuk mempertahankan kebaikan kalsium, protein alami, dan rasa gurih asli susu.', fontSize: '14px', color: '#64748b' } },
        { id: 'prod1-btn', type: 'button', props: { label: 'Pesan Susu Botol 🥛', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0d9488', color: '#ffffff', fontWeight: '700' } },
      ]
    },

    // Card 2: Yogurt Probiotik
    {
      id: 'card-prod2',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ccfbf1', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prod2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
            alt: 'Greek Yogurt Probiotik Alami Buah Asli',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'prod2-badge', type: 'badge', props: { text: '🍓 KAYA PROBIOTIK • BEBAS GULA', variant: 'solid', background: '#f0fdfa', color: '#0f766e' } },
        { id: 'prod2-title', type: 'heading', props: { content: 'Yogurt Plain & Buah Asli', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'prod2-desc', type: 'paragraph', props: { content: 'Fermentasi kultur bakteri baik Lactobacillus bulgaricus dan Streptococcus thermophilus untuk menjaga kesehatan saluran cerna.', fontSize: '14px', color: '#64748b' } },
        { id: 'prod2-btn', type: 'button', props: { label: 'Beli Yogurt Sehat 🍓', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0d9488', color: '#ffffff', fontWeight: '700' } },
      ]
    },

    // Card 3: Keju Mozzarella Peternak
    {
      id: 'card-prod3',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ccfbf1', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prod3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=800&auto=format&fit=crop&q=80',
            alt: 'Keju Mozzarella Segar Artisan Peternak',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'prod3-badge', type: 'badge', props: { text: '🧀 ARTISAN CHEESE • MULUR LEMBUT', variant: 'solid', background: '#f0fdfa', color: '#0f766e' } },
        { id: 'prod3-title', type: 'heading', props: { content: 'Keju Mozzarella & Ricotta Peternak', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'prod3-desc', type: 'paragraph', props: { content: 'Dibuat secara tradisional dari susu segar hari yang sama. Menghasilkan tekstur mulur sempurna dan rasa milky khas untuk pizza dan pasta.', fontSize: '14px', color: '#64748b' } },
        { id: 'prod3-btn', type: 'button', props: { label: 'Order Keju Mozzarella 🧀', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0d9488', color: '#ffffff', fontWeight: '700' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'prod-badge');
  const titleC = lc.filter(c => c.id === 'prod-title');
  const descC = lc.filter(c => c.id === 'prod-desc');
  const card1 = lc.filter(c => c.id === 'card-prod1');
  const card2 = lc.filter(c => c.id === 'card-prod2');
  const card3 = lc.filter(c => c.id === 'card-prod3');

  return (
    <section id="products" className="py-20 lg:py-24 bg-[#f0fdfa] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
        </div>
      </div>
    </section>
  );
}
