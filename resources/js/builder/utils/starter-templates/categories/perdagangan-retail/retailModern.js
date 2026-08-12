/**
 * Retail Modern Wholesale — Split light, product-forward
 * Starter template for modern distributors and wholesale retailers.
 */
export default {
  id: 'retail-modern',
  name: 'Retail Modern Wholesale',
  description: 'Template distributor modern dengan split-light hero, katalog produk terlaris, partner brand, dan formulir pemesanan grosir.',
  thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
  tags: ['Wholesale', 'Distributor', 'Modern', 'B2B'],
  theme: { primaryColor: '#2563eb', dark: false },
  animations: ['fade-up', 'slide-left', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-04', components: [
      { id: 'logo', type: 'heading', props: { content: 'MEGA DISTRIBUSI', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#1d4ed8' } },
      { id: 'cta', type: 'button', props: { label: 'Order Grosir', href: '#contact', variant: 'primary', background: '#2563eb', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-02', components: [
      { id: 'title', type: 'heading', props: { content: 'Distributor Terpercaya Untuk Kebutuhan Bisnis Anda', level: 'h1', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: '50.000+ SKU produk siap stok, harga grosir kompetitif, dan pengiriman ke seluruh Indonesia.', fontSize: '16px', color: '#64748b', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Katalog Produk', href: '#products', variant: 'primary', background: '#2563eb', color: '#ffffff' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop', alt: 'Retail Store', width: '100%', height: '360px', objectFit: 'cover' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Produk & Kategori Terlaris', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Jaringan Distribusi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'clients', type: 'clients', layout: 'clients-01', components: [
      { id: 't', type: 'heading', props: { content: 'Brand Partner Resmi', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Pemesanan Grosir & Partnership', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Mega Distribusi Indonesia.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
