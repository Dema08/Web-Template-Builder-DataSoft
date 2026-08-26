/**
 * Retail Modern Wholesale — Premium product-forward, wholesale distributor
 * Starter template for modern distributors and wholesale retailers.
 */
export default {
  id: 'retail-modern',
  name: 'Retail Modern Wholesale',
  description: 'Template distributor modern premium dengan split-light hero, katalog produk terlaris, partner brand, dan formulir pemesanan grosir — untuk distributor dan retail modern.',
  thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
  tags: ['Wholesale', 'Distributor', 'Modern', 'B2B', 'Premium'],
  theme: {
    primaryColor: '#2563eb',
    secondaryColor: '#eff6ff',
    accentColor: '#1d4ed8',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#dbeafe',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'slide-left', 'hover-lift', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'MEGA DISTRIBUSI', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#1d4ed8', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Order Grosir', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📦 Distributor Resmi 50+ Brand', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Distributor Terpercaya Untuk Kebutuhan Bisnis Anda', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: '50.000+ SKU produk siap stok, harga grosir kompetitif, dan pengiriman ke seluruh Indonesia.', fontSize: '18px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '520px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Katalog Produk', href: '#products', variant: 'primary', size: 'large', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop', alt: 'Retail Store', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Jaringan Distribusi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Jaringan Distribusi Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jaringan yang menjangkau ribuan pelanggan dan partner bisnis', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📦 Katalog Produk', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produk & Kategori Terlaris', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kategori produk yang paling banyak diminati pelanggan grosir', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Mitra', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Mitra Bisnis Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari mitra bisnis yang telah bekerja sama dengan kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'clients', type: 'clients', layout: 'clients-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🤝 Brand Partner', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Brand Partner Resmi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kemitraan resmi dengan brand-brand ternama nasional dan internasional', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tentang Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Tentang Mega Distribusi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Berdiri sejak 2012, Mega Distribusi telah menjadi distributor FMCG terdepan di Indonesia dengan armada logistik sendiri dan warehouse di 15 kota besar.', fontSize: '17px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Unduh Katalog', href: '#', variant: 'primary', size: 'medium', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Pemesanan Grosir', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pemesanan Grosir & Partnership', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Hubungi tim kami untuk negosiasi harga dan partnership', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Mega Distribusi Indonesia.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
