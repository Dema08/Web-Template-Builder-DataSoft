/**
 * Retail Commerce Promo — Premium gradient, promotional campaign
 * Starter template for promotional retail with flash sales and multi-channel focus.
 */
export default {
  id: 'retail-commerce',
  name: 'Retail Commerce Promo',
  description: 'Template promosi retail premium dengan gradient hero, galeri promosi, statistik penjualan, dan kontak multi-channel — untuk retail yang fokus pada promosi besar.',
  thumbnail: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80',
  tags: ['Commerce', 'Promotions', 'Sales', 'Multi-Channel', 'Premium'],
  theme: {
    primaryColor: '#e11d48',
    secondaryColor: '#fff1f2',
    accentColor: '#f43f5e',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#ffe4e6',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-in', 'scale-in', 'slide-right', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'SUPERMART INDONESIA', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#9f1239', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: '🔥 Promo Hari Ini', href: '#products', variant: 'gradient', size: 'small', radius: 'full', background: '#e11d48', color: '#ffffff', shadow: 'md', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-01', components: [
      { id: 'badge', type: 'badge', props: { content: '⚡ Flash Sale — 24 Jam Setiap Hari', variant: 'danger', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Harga Terbaik, Pilihan Terlengkap, Pengiriman Tercepat', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: '100.000+ produk tersedia di seluruh gerai dan platform online kami. Belanja mudah, hemat, dan terpercaya.', fontSize: '19px', color: '#ffe4e6', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Belanja Sekarang', href: '#products', variant: 'gradient', size: 'large', radius: 'full', background: '#e11d48', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Supermart Dalam Angka', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Supermart Dalam Angka', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang menggambarkan skala dan kepercayaan pelanggan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🛍️ Penawaran Spesial', variant: 'danger', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Penawaran Spesial & Best Sellers', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Produk terbaik dengan harga spesial setiap hari', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Pelanggan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Pelanggan Setia Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari jutaan pelanggan yang telah merasakan manfaat Supermart', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'categories', type: 'categories', layout: 'categories-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📂 Kategori', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Jelajahi Berdasarkan Kategori', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Temukan produk favorit Anda dengan mudah', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Hubungi Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Hubungi Kami / Temukan Gerai Terdekat', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim customer service kami siap membantu Anda 7 hari seminggu', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Supermart Indonesia. Belanja Lebih, Hemat Lebih.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
