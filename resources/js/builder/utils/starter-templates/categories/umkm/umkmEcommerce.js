/**
 * UMKM E-Commerce — Promo banner, commerce-first layout
 * Starter template for online store / toko online UMKM.
 */
export default {
  id: 'umkm-ecommerce',
  name: 'UMKM E-Commerce',
  description: 'Layout toko online dengan promo banner besar, kategori produk, best sellers, dan shopping-style CTA — siap jualan langsung.',
  thumbnail: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80',
  tags: ['E-Commerce', 'Shopping', 'Promo', 'Catalog'],
  theme: { primaryColor: '#f59e0b', accent: '#d97706', dark: false },
  animations: ['scale-in', 'hover-glow', 'fade-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'TOKO NUSANTARA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#92400e' } },
      { id: 'cta', type: 'button', props: { label: '🛒 Keranjang', href: '#', variant: 'primary', background: '#f59e0b', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🔥 Promo Akhir Tahun — Diskon s/d 50%', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Belanja Produk Lokal Terpercaya, Hemat & Cepat Sampai', level: 'h1', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Ribuan produk UMKM asli Indonesia tersedia. Gratis ongkir ke seluruh wilayah.', fontSize: '16px', color: '#64748b', align: 'left' } },
      { id: 'btn1', type: 'button', props: { label: 'Belanja Sekarang', href: '#products', variant: 'primary', background: '#f59e0b', color: '#ffffff' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop', alt: 'Shop Banner', width: '100%', height: '360px', objectFit: 'cover' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Produk Best Seller Minggu Ini', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
      { id: 'd', type: 'text', props: { content: 'Dipilih oleh lebih dari 50.000 pembeli happy di Indonesia.', fontSize: '16px', color: '#64748b', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Toko Kami Dalam Angka', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'clients', type: 'clients', layout: 'clients-01', components: [
      { id: 't', type: 'heading', props: { content: 'Dipercaya Brand & Mitra Ternama', level: 'h2', fontSize: '24px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-01', components: [
      { id: 't', type: 'heading', props: { content: 'Koleksi Terbaru', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Butuh Bantuan? Hubungi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Toko Nusantara. Produk Lokal, Kualitas Global.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
