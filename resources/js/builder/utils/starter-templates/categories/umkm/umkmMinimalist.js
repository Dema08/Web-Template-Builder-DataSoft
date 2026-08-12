/**
 * UMKM Minimalist — Ultra clean, large whitespace
 * Starter template with spacious white layout and elegant typography.
 */
export default {
  id: 'umkm-minimalist',
  name: 'UMKM Minimalist',
  description: 'Layout putih bersih dengan whitespace lebar dan tipografi elegan — fokus pada produk, bukan dekorasi.',
  thumbnail: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
  tags: ['Minimalist', 'Clean', 'Typography', 'Whitespace'],
  theme: { primaryColor: '#1e293b', accent: '#64748b', dark: false },
  animations: ['fade-in', 'slide-up', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
      { id: 'logo', type: 'heading', props: { content: 'BENING STUDIO', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'title', type: 'heading', props: { content: 'Sederhana. Berkualitas. Bermakna.', level: 'h1', fontSize: '60px', fontWeight: '800', color: '#0f172a', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Produk minimalis yang dirancang untuk menemani hari-hari Anda dengan keindahan yang tak lekang waktu.', fontSize: '18px', color: '#64748b', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Koleksi', href: '#products', variant: 'primary', background: '#0f172a', color: '#ffffff' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Koleksi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 't', type: 'heading', props: { content: 'Tentang Bening Studio', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
      { id: 'd', type: 'text', props: { content: 'Kami percaya kesederhanaan adalah kemewahan tertinggi. Setiap produk dirancang dengan fungsi yang jelas dan estetika yang tahan waktu.', fontSize: '16px', color: '#64748b', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Bening Studio.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
