import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyCollectionArtisan
 * 3 Artisan Organic Dairy Collection Cards with editable images, organic badges, and subscription buttons.
 */
export default function DairyCollectionArtisan({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'art-col-badge', type: 'badge', props: { text: '✨ FARMSTEAD ARTISAN SELECTION', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#d97706', borderColor: 'rgba(217,119,6,0.3)' } },
    { id: 'art-col-title', type: 'heading', props: { content: 'Koleksi Olahan Susu Organik Pilihan Untuk Gaya Hidup Sehat Alami', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
    { id: 'art-col-desc', type: 'paragraph', props: { content: 'Diproduksi dalam jumlah terbatas setiap minggu dengan metode artisan tradisional Eropa dan dikemas dalam botol kaca ramah lingkungan.', fontSize: '16px', color: '#64748b' } },

    // Card 1: A2 Organic Gold Milk
    {
      id: 'card-art-col1',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#fef3c7', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'art-col1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=80',
            alt: 'Susu Organik A2 Botol Kaca Mewah Gold Cap',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'art-col1-badge', type: 'badge', props: { text: '🥛 A2 ORGANIC • GOLD CAP', variant: 'solid', background: '#fef3c7', color: '#b45309' } },
        { id: 'art-col1-title', type: 'heading', props: { content: 'A2 Grass-Fed Pure Gold Milk 1L', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'art-col1-desc', type: 'paragraph', props: { content: 'Susu organik segar dengan lapisan creamline alami di atasnya. Mengandung beta-kasein A2 murni yang sangat lembut bagi lambung sensitif.', fontSize: '14px', color: '#64748b' } },
        { id: 'art-col1-btn', type: 'button', props: { label: 'Langganan Mingguan 🥛', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#d97706', color: '#ffffff', fontWeight: '600' } },
      ]
    },

    // Card 2: Aged Gouda Cheese
    {
      id: 'card-art-col2',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#fef3c7', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'art-col2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&auto=format&fit=crop&q=80',
            alt: 'Keju Artisan Aged Gouda Cheese Wheel Natural Wax',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'art-col2-badge', type: 'badge', props: { text: '🧀 AGED 12 BULAN • NATURAL WAX', variant: 'solid', background: '#fef3c7', color: '#b45309' } },
        { id: 'art-col2-title', type: 'heading', props: { content: 'Artisan Farmhouse Gouda Wheel', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'art-col2-desc', type: 'paragraph', props: { content: 'Keju keras matang dengan kristal kalsium renyah dan aroma nutty yang kaya. Dibuat tanpa pewarna buatan dari 100% susu mentah perahan sendiri.', fontSize: '14px', color: '#64748b' } },
        { id: 'art-col2-btn', type: 'button', props: { label: 'Beli Cheese Wheel 🧀', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#d97706', color: '#ffffff', fontWeight: '600' } },
      ]
    },

    // Card 3: Grass-Fed Ghee Butter
    {
      id: 'card-art-col3',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#fef3c7', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'art-col3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&auto=format&fit=crop&q=80',
            alt: 'Organic Grass Fed Golden Ghee Clarified Butter',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'art-col3-badge', type: 'badge', props: { text: '🧈 KETO & KETO-FRIENDLY • 0% LAKTOSA', variant: 'solid', background: '#fef3c7', color: '#b45309' } },
        { id: 'art-col3-title', type: 'heading', props: { content: 'Traditional Golden Grass-Fed Ghee', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'art-col3-desc', type: 'paragraph', props: { content: 'Minyak samin organik murni yang dimasak perlahan dari krim susu segar. Memiliki smoke point tinggi 250°C, kaya vitamin A, D, E, dan K2.', fontSize: '14px', color: '#64748b' } },
        { id: 'art-col3-btn', type: 'button', props: { label: 'Order Golden Ghee 🧈', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#d97706', color: '#ffffff', fontWeight: '600' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'art-col-badge');
  const titleC = lc.filter(c => c.id === 'art-col-title');
  const descC = lc.filter(c => c.id === 'art-col-desc');
  const card1 = lc.filter(c => c.id === 'card-art-col1');
  const card2 = lc.filter(c => c.id === 'card-art-col2');
  const card3 = lc.filter(c => c.id === 'card-art-col3');

  return (
    <section id="collection" className="py-20 lg:py-24 bg-[#fffbeb] text-slate-900">
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
