/**
 * UMKM Modern — Premium SaaS-inspired split hero, clean cards
 * Starter template for digital-first small businesses (UMKM).
 */
export default {
  id: 'umkm-modern',
  name: 'UMKM Modern',
  description: 'Desain SaaS-inspired premium dengan split hero elegan, product showcase modern, dan clean card grid — cocok untuk UMKM digital-first yang ingin tampil profesional.',
  thumbnail: 'https://images.unsplash.com/photo-1556742049-0a670fc0a727?w=800&auto=format&fit=crop&q=80',
  tags: ['Modern', 'SaaS Style', 'Split Hero', 'Clean', 'Premium'],
  theme: {
    primaryColor: '#4f46e5',
    secondaryColor: '#f8fafc',
    accentColor: '#6366f1',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e2e8f0',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'slide-right', 'hover-lift', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'KARYA LOKAL', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#4f46e5', letterSpacing: '-0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Order Sekarang', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#4f46e5', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '🇮🇩 UMKM Unggulan 2026', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Produk Lokal Terbaik, Dibuat Dengan Hati', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Kami menghadirkan produk berkualitas tinggi buatan tangan pengrajin lokal Indonesia yang berpengalaman lebih dari satu dekade.', fontSize: '19px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '540px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Produk Unggulan', href: '#products', variant: 'primary', size: 'large', radius: 'md', background: '#4f46e5', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1556742049-0a670fc0a727?w=800&auto=format&fit=crop', alt: 'Product Showcase', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Angka Kepercayaan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya Pelanggan Di Seluruh Indonesia', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kisah sukses dan kepercayaan yang terus bertumbuh setiap harinya', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🛍️ Produk Unggulan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produk Terlaris & Pilihan Pelanggan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'd', type: 'text', props: { content: 'Dipesan ribuan kali — kualitas terjamin, harga terjangkau.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Cerita Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Cerita Di Balik Produk Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Didirikan pada 2014 oleh pengrajin lokal Jawa Tengah, kami tumbuh dari industri rumahan menjadi brand UMKM nasional yang dikenal di 30+ provinsi Indonesia.', fontSize: '17px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Kenali Kami Lebih Dekat', href: '#gallery', variant: 'primary', size: 'medium', radius: 'md', background: '#4f46e5', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Pelanggan Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni nyata dari pelanggan setia yang telah merasakan kualitas produk kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📸 Galeri', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Galeri Produk & Proses Pembuatan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Lihat bagaimana produk kami dibuat dari nol sampai jadi karya siap pakai', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Pesan Sekarang', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pesan Produk atau Tanya-Tanya Dulu', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim kami siap membantu dan menjawab pertanyaan Anda dalam 1x24 jam', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Karya Lokal UMKM. Bangga Buatan Indonesia.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
      { id: 'social', type: 'social', props: { platforms: ['instagram', 'facebook', 'twitter'], size: 'medium' } },
    ]},
  ],
};
