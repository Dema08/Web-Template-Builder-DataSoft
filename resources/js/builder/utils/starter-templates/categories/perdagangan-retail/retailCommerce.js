/**
 * Retail Commerce Promo — Gradient, promotional campaign
 * Starter template for promotional retail with flash sales and multi-channel focus.
 */
export default {
  id: 'retail-commerce',
  name: 'Retail Commerce Promo',
  description: 'Template promosi retail dengan gradient hero, galeri promosi, statistik penjualan, dan kontak multi-channel.',
  thumbnail: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80',
  tags: ['Commerce', 'Promotions', 'Sales', 'Multi-Channel'],
  theme: { primaryColor: '#e11d48', dark: false },
  animations: ['fade-in', 'scale-in', 'slide-right'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'SUPERMART INDONESIA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#9f1239' } },
      { id: 'cta', type: 'button', props: { label: '🔥 Promo Hari Ini', href: '#products', variant: 'gradient', size: 'small', radius: 'full', background: '#e11d48', color: '#ffffff', shadow: 'md', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-01', components: [
      { id: 'badge', type: 'badge', props: { content: '⚡ Flash Sale — 24 Jam Setiap Hari', variant: 'danger', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Harga Terbaik, Pilihan Terlengkap, Pengiriman Tercepat', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: '100.000+ produk tersedia di seluruh gerai dan platform online kami. Belanja mudah, hemat, dan terpercaya.', fontSize: '18px', color: '#ffe4e6', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Belanja Sekarang', href: '#products', variant: 'gradient', size: 'large', radius: 'full', background: '#e11d48', color: '#ffffff', shadow: 'lg', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Penawaran Spesial & Best Sellers', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Supermart Dalam Angka', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-02', components: [
      { id: 't', type: 'heading', props: { content: 'Gerai & Outlet Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Hubungi Kami / Temukan Gerai Terdekat', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Supermart Indonesia. Belanja Lebih, Hemat Lebih.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
