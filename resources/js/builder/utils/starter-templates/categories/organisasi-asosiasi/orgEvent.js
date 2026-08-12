/**
 * Event Organization Center — Bold indigo split, event-forward
 * Starter template for event organization companies with registration focus.
 */
export default {
  id: 'org-event',
  name: 'Event Organization Center',
  description: 'Template penyelenggara event dengan split hero bold, showcase kegiatan, tim panitia, dan formulir pendaftaran acara.',
  thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
  tags: ['Events', 'Organization', 'Community', 'Registration'],
  theme: { primaryColor: '#7c3aed', dark: false },
  animations: ['scale-in', 'fade-up', 'slide-left'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'EVENT NUSANTARA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#7c3aed' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: '📅 Jadwal Event 2026 — Segera Daftar', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Momen Luar Biasa Dimulai Dari Sini', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Kami menghadirkan konferensi nasional, seminar, workshop, dan gathering eksklusif yang menginspirasi ribuan peserta setiap tahunnya.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Daftar Event Terdekat', href: '#registration', variant: 'primary', background: '#ffffff', color: '#7c3aed' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop', alt: 'Event', width: '100%', height: '360px', objectFit: 'cover' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 't', type: 'heading', props: { content: 'Jenis Kegiatan Yang Kami Selenggarakan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Angka Kesuksesan Event Kami', level: 'h2', fontSize: '30px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 't', type: 'heading', props: { content: 'Tim Panitia Inti', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Daftarkan Diri ke Event Berikutnya', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Event Nusantara. Creating Unforgettable Moments.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
    ]},
  ],
};
