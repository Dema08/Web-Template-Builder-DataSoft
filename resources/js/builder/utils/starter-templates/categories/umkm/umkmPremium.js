/**
 * UMKM Premium — Luxury dark, glassmorphism, premium branding
 * Starter template for high-end / kelas-dunia small businesses.
 */
export default {
  id: 'umkm-premium',
  name: 'UMKM Premium',
  description: 'Desain luxury brand dengan dark hero berglow, glassmorphism cards, dan visual hierarchy premium — untuk UMKM yang ingin tampil kelas dunia.',
  thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Luxury', 'Dark', 'Glassmorphism'],
  theme: { primaryColor: '#0f172a', accent: '#f59e0b', dark: true },
  animations: ['scale-in', 'fade-up', 'floating-elements'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'ÉLITE CRAFT', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0f172a' } },
      { id: 'cta', type: 'button', props: { label: 'Exclusive Access', href: '#contact', variant: 'premium', size: 'medium', radius: 'full', background: '#f59e0b', color: '#0f172a', shadow: 'md', fontSize: '13px', fontWeight: '700', letterSpacing: '0.02em' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-06', components: [
      { id: 'badge', type: 'badge', props: { content: '✦ Edisi Premium — Terbatas', variant: 'premium', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Keistimewaan Yang Hanya Ada Di Sini', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Dibuat dari bahan pilihan terbaik dunia oleh tangan-tangan maestro kerajinan Indonesia.', fontSize: '20px', color: '#e2e8f0', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Koleksi Eksklusif', href: '#products', variant: 'premium', size: 'large', radius: 'full', background: '#f59e0b', color: '#0f172a', shadow: 'lg', fontSize: '15px', fontWeight: '700', letterSpacing: '0.02em' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-04', components: [
      { id: 't', type: 'heading', props: { content: 'Keunggulan Élite Craft', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Koleksi Signature 2026', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 't', type: 'heading', props: { content: 'Layanan Premium Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-04', components: [
      { id: 't', type: 'heading', props: { content: 'Lookbook Koleksi Terbaru', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Hubungi Kami Untuk Pemesanan Eksklusif', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Élite Craft Indonesia. Premium Quality Since 2012.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
