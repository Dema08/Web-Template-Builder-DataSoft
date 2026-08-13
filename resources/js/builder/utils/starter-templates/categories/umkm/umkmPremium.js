/**
 * UMKM Premium — Luxury dark, glassmorphism, premium branding
 * Starter template for high-end / kelas-dunia small businesses.
 */
export default {
  id: 'umkm-premium',
  name: 'UMKM Premium',
  description: 'Desain luxury brand premium dengan dark hero berglow, glassmorphism cards, dan visual hierarchy premium — untuk UMKM yang ingin tampil kelas dunia.',
  thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Luxury', 'Dark', 'Glassmorphism', 'Exclusive'],
  theme: {
    primaryColor: '#0f172a',
    secondaryColor: '#1e293b',
    accentColor: '#f59e0b',
    dark: true,
    surface: '#1e293b',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#334155',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['scale-in', 'fade-up', 'floating-elements', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'ÉLITE CRAFT', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#f59e0b', letterSpacing: '0.05em' } },
      { id: 'cta', type: 'button', props: { label: 'Exclusive Access', href: '#contact', variant: 'premium', size: 'medium', radius: 'full', background: '#f59e0b', color: '#0f172a', shadow: 'md', fontSize: '13px', fontWeight: '700', letterSpacing: '0.02em' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-06', components: [
      { id: 'badge', type: 'badge', props: { content: '✦ Edisi Premium — Terbatas', variant: 'premium', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Keistimewaan Yang Hanya Ada Di Sini', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Dibuat dari bahan pilihan terbaik dunia oleh tangan-tangan maestro kerajinan Indonesia.', fontSize: '20px', color: '#e2e8f0', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Koleksi Eksklusif', href: '#products', variant: 'premium', size: 'large', radius: 'full', background: '#f59e0b', color: '#0f172a', shadow: 'lg', fontSize: '16px', fontWeight: '700', letterSpacing: '0.02em' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Keunggulan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Keunggulan Élite Craft', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang menggambarkan keunggulan dan kepercayaan pelanggan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-04', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Cerita Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Keunggulan Élite Craft', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Kami adalah maison kerajinan premium yang menggabungkan teknik tradisional Indonesia dengan desain kontemporer. Setiap produk adalah karya seni yang dapat dikoleksi — bukan sekadar barang.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🛍️ Koleksi Signature', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Koleksi Signature 2026', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Produk-produk eksklusif yang hanya tersedia dalam jumlah terbatas', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Layanan Premium', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Layanan Premium Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pengalaman berbelanja yang personal dan eksklusif untuk Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-04', components: [
      { id: 'badge', type: 'badge', props: { content: '🖼️ Lookbook', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Lookbook Koleksi Terbaru', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Dokumentasi visual karya-karya terbaik kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Klien', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Klien Premium Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari kolektor dan connoisseur yang menghargai keindahan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Pemesanan Eksklusif', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Hubungi Kami Untuk Pemesanan Eksklusif', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Konciurir personal akan membantu Anda menemukan karya yang sempurna', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Élite Craft Indonesia. Premium Quality Since 2012.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
