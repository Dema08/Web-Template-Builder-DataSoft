/**
 * UMKM Creative — Bold, asymmetric, expressive
 * Starter template for artisan & creative UMKM businesses.
 */
export default {
  id: 'umkm-creative',
  name: 'UMKM Creative',
  description: 'Desain ekspresif dan asimetris untuk brand UMKM kreatif, artisan, dan seniman — tampil beda dari kompetitor.',
  thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80',
  tags: ['Creative', 'Bold', 'Asymmetric', 'Artisan'],
  theme: { primaryColor: '#7c3aed', accent: '#ec4899', dark: false },
  animations: ['slide-right', 'scale-in', 'counter-up', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-04', components: [
      { id: 'logo', type: 'heading', props: { content: 'KREASI KITA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#7c3aed' } },
      { id: 'cta', type: 'button', props: { label: 'Mulai Berkreasi', href: '#contact', variant: 'primary', background: '#7c3aed', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: '🎨 Koleksi Handmade 2026', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Ekspresikan Dirimu Lewat Produk Kreatif Lokal', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Dari tangan pengrajin kreatif Indonesia untuk jiwa-jiwa yang menghargai keunikan.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Eksplorasi Karya', href: '#gallery', variant: 'primary', background: '#ffffff', color: '#7c3aed' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop', alt: 'Creative Products', width: '100%', height: '380px', objectFit: 'cover' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 't', type: 'heading', props: { content: 'Apa Yang Bisa Kami Buat Untuk Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-03', components: [
      { id: 't', type: 'heading', props: { content: 'Portfolio Karya Terbaik', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kreativitas Kami Dalam Angka', level: 'h2', fontSize: '30px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Wujudkan Ide Kreatif Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Kreasi Kita. Seni Untuk Semua.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
    ]},
  ],
};
