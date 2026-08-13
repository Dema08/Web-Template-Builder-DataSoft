/**
 * UMKM Minimalist — Premium refined whitespace, elegant typography
 * Starter template with spacious white layout and premium typography.
 */
export default {
  id: 'umkm-minimalist',
  name: 'UMKM Minimalist',
  description: 'Layout putih bersih premium dengan whitespace lebar, tipografi elegan, dan fokus pada produk — minimalis yang tetap terasa mahal.',
  thumbnail: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
  tags: ['Minimalist', 'Clean', 'Typography', 'Whitespace', 'Premium'],
  theme: {
    primaryColor: '#1e293b',
    secondaryColor: '#f8fafc',
    accentColor: '#475569',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e2e8f0',
    radius: 'sm',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'scale-in', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
      { id: 'logo', type: 'heading', props: { content: 'BENING STUDIO', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a', letterSpacing: '0.05em' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'title', type: 'heading', props: { content: 'Sederhana. Berkualitas. Bermakna.', level: 'h1', fontSize: '64px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.1', letterSpacing: '-0.03em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Produk minimalis yang dirancang untuk menemani hari-hari Anda dengan keindahan yang tak lekang waktu.', fontSize: '20px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 36px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Koleksi', href: '#products', variant: 'primary', size: 'medium', radius: 'sm', background: '#0f172a', color: '#ffffff', shadow: 'md', fontSize: '14px', fontWeight: '600' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Jejak Karya', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka kecil yang menggambarkan dedikasi besar', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '✦ Koleksi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Koleksi Pilihan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Setiap produk dirancang dengan fungsi yang jelas dan estetika yang tahan waktu', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tentang', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Tentang Bening Studio', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Kami percaya kesederhanaan adalah kemewahan tertinggi. Setiap produk dirancang dengan fungsi yang jelas dan estetika yang tahan waktu — tanpa ornamen yang tidak perlu.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Mereka', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Suara dari pelanggan yang menghargai kualitas dan keindahan sederhana', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Hubungi Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Bening Studio. Minimalis Bermakna.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
