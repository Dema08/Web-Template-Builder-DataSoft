/**
 * UMKM Modern — SaaS-inspired split hero, clean cards
 * Starter template for digital-first small businesses (UMKM).
 */
export default {
  id: 'umkm-modern',
  name: 'UMKM Modern',
  description: 'Desain SaaS-inspired dengan split hero elegan, product showcase modern, dan clean card grid — cocok untuk UMKM digital-first.',
  thumbnail: 'https://images.unsplash.com/photo-1556742049-0a670fc0a727?w=800&auto=format&fit=crop&q=80',
  tags: ['Modern', 'SaaS Style', 'Split Hero', 'Clean'],
  theme: { primaryColor: '#4f46e5', accent: '#6366f1', dark: false },
  animations: ['fade-up', 'slide-right', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
      { id: 'logo', type: 'heading', props: { content: 'KARYA LOKAL', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#4f46e5' } },
      { id: 'cta', type: 'button', props: { label: 'Order Sekarang', href: '#contact', variant: 'primary', background: '#4f46e5', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '🇮🇩 UMKM Unggulan 2026', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Produk Lokal Terbaik, Dibuat Dengan Hati', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Kami menghadirkan produk berkualitas tinggi buatan tangan pengrajin lokal Indonesia yang berpengalaman lebih dari satu dekade.', fontSize: '18px', color: '#64748b', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Produk Unggulan', href: '#products', variant: 'primary', background: '#4f46e5', color: '#ffffff' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1556742049-0a670fc0a727?w=600&auto=format&fit=crop', alt: 'Product Showcase', width: '100%', height: '380px', objectFit: 'cover' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Produk Terlaris & Pilihan Pelanggan', level: 'h2', fontSize: '34px', fontWeight: '800', color: '#0f172a', align: 'center' } },
      { id: 'd', type: 'text', props: { content: 'Dipesan ribuan kali — kualitas terjamin, harga terjangkau.', fontSize: '16px', color: '#64748b', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 't', type: 'heading', props: { content: 'Cerita Di Balik Produk Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
      { id: 'd', type: 'text', props: { content: 'Didirikan pada 2014 oleh pengrajin lokal Jawa Tengah, kami tumbuh dari industri rumahan menjadi brand UMKM nasional yang dikenal di 30+ provinsi Indonesia.', fontSize: '16px', color: '#64748b' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Angka Kepercayaan Pelanggan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-02', components: [
      { id: 't', type: 'heading', props: { content: 'Galeri Produk & Proses Pembuatan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Pesan Produk atau Tanya-Tanya Dulu', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Karya Lokal UMKM. Bangga Buatan Indonesia.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
    ]},
  ],
};
