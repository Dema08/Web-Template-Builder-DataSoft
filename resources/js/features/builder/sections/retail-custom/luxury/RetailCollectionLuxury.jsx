import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailCollectionLuxury
 * 3 Signature Luxury Collection Cards with editable images, authenticity badges, and inquiry buttons.
 */
export default function RetailCollectionLuxury({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'col-badge', type: 'badge', props: { text: '✨ MAISON CURATED PIECES', variant: 'outline', background: 'rgba(124,58,237,0.1)', color: '#7c3aed', borderColor: 'rgba(124,58,237,0.3)' } },
    { id: 'col-title', type: 'heading', props: { content: 'Koleksi Mahakarya Pilihan Untuk Kolektor & Penikmat Kemewahan', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
    { id: 'col-desc', type: 'paragraph', props: { content: 'Setiap karya melewati proses inspeksi keaslian 10 langkah oleh ahli kami dengan sertifikasi legal dan garansi internasional.', fontSize: '16px', color: '#64748b' } },

    // Card 1: Haute Horlogerie
    {
      id: 'card-col1',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ede9fe', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'col1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
            alt: 'Haute Horlogerie Swiss Luxury Timepiece Watch',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'col1-badge', type: 'badge', props: { text: '⌚ HAUTE HORLOGERIE', variant: 'solid', background: '#f5f3ff', color: '#6d28d9' } },
        { id: 'col1-title', type: 'heading', props: { content: 'Swiss Luxury Timepieces & Tourbillon', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'col1-desc', type: 'paragraph', props: { content: 'Koleksi jam tangan mewah limited edition dengan presisi mekanis tingkat tinggi, boks original pabrikan, dan garansi resmi global.', fontSize: '14px', color: '#64748b' } },
        { id: 'col1-btn', type: 'button', props: { label: 'Inquire Timepiece ⚜️', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontWeight: '600' } },
      ]
    },

    // Card 2: Artisanal Leathergoods
    {
      id: 'card-col2',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ede9fe', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'col2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
            alt: 'Artisanal Handcrafted Exotic Leather Bags and Goods',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'col2-badge', type: 'badge', props: { text: '👜 ARTISANAL LEATHER', variant: 'solid', background: '#f5f3ff', color: '#6d28d9' } },
        { id: 'col2-title', type: 'heading', props: { content: 'Rare Leathergoods & Exotic Handbags', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'col2-desc', type: 'paragraph', props: { content: 'Tas kulit eksklusif buatan tangan artisan Eropa dengan material kulit terbaik, hardware berlapis emas, dan histori kepemilikan terverifikasi.', fontSize: '14px', color: '#64748b' } },
        { id: 'col2-btn', type: 'button', props: { label: 'Explore Leatherwork ⚜️', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontWeight: '600' } },
      ]
    },

    // Card 3: Designer High Fashion
    {
      id: 'card-col3',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#ede9fe', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'col3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80',
            alt: 'Designer Runway High Fashion Apparel',
            borderRadius: '12px',
            width: '100%',
            height: '220px',
            objectFit: 'cover',
          }
        },
        { id: 'col3-badge', type: 'badge', props: { text: '👗 RUNWAY APPAREL', variant: 'solid', background: '#f5f3ff', color: '#6d28d9' } },
        { id: 'col3-title', type: 'heading', props: { content: 'Haute Couture & Runway Apparel', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'col3-desc', type: 'paragraph', props: { content: 'Busana perancang busana ternama langsung dari panggung fashion week Milan dan Paris. Disediakan layanan fitting eksklusif di private room.', fontSize: '14px', color: '#64748b' } },
        { id: 'col3-btn', type: 'button', props: { label: 'Book Private Fitting ⚜️', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontWeight: '600' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'col-badge');
  const titleC = lc.filter(c => c.id === 'col-title');
  const descC = lc.filter(c => c.id === 'col-desc');
  const card1 = lc.filter(c => c.id === 'card-col1');
  const card2 = lc.filter(c => c.id === 'card-col2');
  const card3 = lc.filter(c => c.id === 'card-col3');

  return (
    <section id="collection" className="py-20 lg:py-24 bg-[#faf5ff] text-slate-900">
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
