/**
 * Online Learning Platform — Soft split, LMS-forward
 * Starter template for modern e-learning platform with course catalog.
 */
export default {
  id: 'education-online',
  name: 'Online Learning Platform',
  description: 'Template platform e-learning modern dengan soft-split hero, course catalog, tutor profiles, dan call-to-action pendaftaran yang efektif.',
  thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
  tags: ['Online', 'E-Learning', 'Platform', 'Digital'],
  theme: { primaryColor: '#0ea5e9', dark: false },
  animations: ['scale-in', 'fade-in', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'BELAJAR.ID', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#0369a1' } },
      { id: 'cta', type: 'button', props: { label: 'Daftar Gratis', href: '#registration', variant: 'primary', background: '#0ea5e9', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '📱 Belajar Kapan Saja, Di Mana Saja', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Platform Belajar Online Terlengkap di Indonesia', level: 'h1', fontSize: '48px', fontWeight: '800', color: '#0f172a', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: '1.000+ kursus video berkualitas tinggi dari instruktur top Indonesia dan internasional. Belajar sesuai jadwal Anda.', fontSize: '18px', color: '#64748b', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Mulai Belajar Gratis', href: '#programs', variant: 'primary', background: '#0ea5e9', color: '#ffffff' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop', alt: 'Online Learning', width: '100%', height: '380px', objectFit: 'cover' } },
    ]},
    { id: 'programs', type: 'programs', layout: 'programs-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kursus Populer & Trending', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Komunitas Pelajar Belajar.ID', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
      { id: 't', type: 'heading', props: { content: 'Tutor & Mentor Terbaik', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 't', type: 'heading', props: { content: 'Pertanyaan Seputar Platform', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'registration', type: 'registration', layout: 'registration-01', components: [
      { id: 't', type: 'heading', props: { content: 'Daftar & Akses 7 Hari Trial Gratis', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Belajar.ID. Learning Without Limits.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
    ]},
  ],
};
