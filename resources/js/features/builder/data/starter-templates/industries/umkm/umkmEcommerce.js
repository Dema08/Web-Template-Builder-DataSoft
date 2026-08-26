/**
 * UMKM E-Commerce — Premium promo-forward, commerce-focused
 * Starter template for online store / toko online UMKM.
 */
export default {
  id: 'umkm-ecommerce',
  name: 'UMKM E-Commerce',
  description: 'Layout toko online premium dengan promo banner besar, kategori produk, best sellers, dan shopping-style CTA — siap jualan langsung.',
  thumbnail: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80',
  tags: ['E-Commerce', 'Shopping', 'Promo', 'Catalog', 'Premium'],
  theme: {
    primaryColor: '#f59e0b',
    secondaryColor: '#fffbeb',
    accentColor: '#d97706',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#fef3c7',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['scale-in', 'hover-glow', 'fade-up', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'TOKO NUSANTARA', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#92400e', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: '🛒 Keranjang', href: '#', variant: 'primary', size: 'small', radius: 'full', background: '#f59e0b', color: '#ffffff', shadow: 'md', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🔥 Promo Akhir Tahun — Diskon s/d 50%', variant: 'warning', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Belanja Produk Lokal Terpercaya, Hemat & Cepat Sampai', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Ribuan produk UMKM asli Indonesia tersedia. Gratis ongkir ke seluruh wilayah.', fontSize: '18px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '520px', margin: '0 0 32px 0' } },
      { id: 'btn1', type: 'button', props: { label: 'Belanja Sekarang', href: '#products', variant: 'gradient', size: 'large', radius: 'full', background: '#f59e0b', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop', alt: 'Shop Banner', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Kepercayaan Pelanggan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Toko Kami Dalam Angka', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang menggambarkan kepercayaan dan pertumbuhan bersama pelanggan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🛍️ Best Seller Minggu Ini', variant: 'warning', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produk Best Seller Minggu Ini', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'd', type: 'text', props: { content: 'Dipilih oleh lebih dari 50.000 pembeli happy di Indonesia.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'categories', type: 'categories', layout: 'categories-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📂 Kategori Produk', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Jelajahi Berdasarkan Kategori', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Temukan produk favorit Anda dengan mudah', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Review Pelanggan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Pelanggan Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dan review jujur dari pembeli setia kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Butuh Bantuan?', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Butuh Bantuan? Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim support kami siap membantu Anda 7 hari seminggu', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Toko Nusantara. Produk Lokal, Kualitas Global.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
