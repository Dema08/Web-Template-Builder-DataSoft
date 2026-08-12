/**
 * Dairy Premium Brand — Soft split, premium brand
 * Starter template for premium organic dairy brands with certifications.
 */
export default {
  id: 'dairy-premium',
  name: 'Dairy Premium Brand',
  description: 'Template brand susu premium dengan split hero tenang, profil pertanian terintegrasi, sertifikasi halal & BPOM, dan distribusi modern.',
  thumbnail: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Organic', 'Halal', 'BPOM'],
  theme: { primaryColor: '#0f766e', dark: false },
  animations: ['fade-up', 'slide-left', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'SUSU PREMIUM ALAMI', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f766e' } },
      { id: 'cta', type: 'button', props: { label: 'Order Langganan', href: '#contact', variant: 'primary', background: '#0f766e', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '🥛 Organik • Halal MUI • BPOM Certified', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Susu Organik Premium Tanpa Bahan Pengawet', level: 'h1', fontSize: '48px', fontWeight: '800', color: '#0f172a', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Dari peternakan organik bersertifikat langsung ke pintu rumah Anda. Fresh, bergizi, dan bebas hormon sintetis.', fontSize: '18px', color: '#64748b', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Mulai Berlangganan', href: '#contact', variant: 'primary', background: '#0f766e', color: '#ffffff' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=600&auto=format&fit=crop', alt: 'Premium Dairy', width: '100%', height: '380px', objectFit: 'cover' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 't', type: 'heading', props: { content: 'Peternakan Sapi Perah Premium Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 't', type: 'heading', props: { content: 'Lini Produk Premium', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kapasitas & Jangkauan Distribusi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
      { id: 't', type: 'heading', props: { content: 'Sertifikasi Resmi & Penghargaan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Langganan Susu Premium Harian', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Susu Premium Alami Indonesia. Pure. Natural. Nourishing.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
