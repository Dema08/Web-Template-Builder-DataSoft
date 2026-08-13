/**
 * Consulting Premium Hub — Indigo split, team-forward, stats
 * Starter template for premium consulting firms with certified specialists.
 */
export default {
  id: 'service-consulting-premium',
  name: 'Consulting Premium Hub',
  description: 'Template konsultan premium dengan split indigo hero, tim spesialis terdepan, statistik kredibilitas, dan FAQ profesional.',
  thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
  tags: ['Consulting', 'Premium', 'B2B', 'Strategy'],
  theme: { primaryColor: '#4f46e5', dark: false },
  animations: ['fade-up', 'counter-up', 'slide-right'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'PRIMA CONSULTING', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#0f172a' } },
      { id: 'cta', type: 'button', props: { label: 'Free Consultation', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#4f46e5', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: '15+ Tahun Pengalaman Konsultasi', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Strategi Bisnis Yang Menghasilkan Pertumbuhan Nyata', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Tim konsultan bersertifikat internasional mendampingi perusahaan Anda dari perencanaan strategi hingga eksekusi terukur.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Konsultasi Gratis 30 Menit', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#4f46e5', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop', alt: 'Consulting', width: '100%', height: '380px', objectFit: 'cover' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 't', type: 'heading', props: { content: 'Metodologi Konsultasi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 't', type: 'heading', props: { content: 'Bidang Keahlian Spesialis', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Rekam Jejak Hasil Nyata', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 't', type: 'heading', props: { content: 'Tim Konsultan Bersertifikat', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 't', type: 'heading', props: { content: 'FAQ Layanan Konsultasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Jadwalkan Sesi Konsultasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Prima Consulting Indonesia. Transforming Business Through Strategy.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
