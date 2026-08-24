/**
 * Event Organization Center — Premium bold indigo split, event-forward
 * Starter template for event organization companies with registration focus.
 */
export default {
  id: 'org-event',
  name: 'Event Organization Center',
  description: 'Template penyelenggara event premium dengan split hero bold, showcase kegiatan, tim panitia, dan formulir pendaftaran acara — dinamis dan menginspirasi.',
  thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
  tags: ['Events', 'Organization', 'Community', 'Registration', 'Premium'],
  theme: {
    primaryColor: '#7c3aed',
    secondaryColor: '#f5f3ff',
    accentColor: '#8b5cf6',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#ede9fe',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['scale-in', 'fade-up', 'slide-left', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'EVENT NUSANTARA', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#7c3aed', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Daftar Event Terdekat', href: '#registration', variant: 'gradient', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'md', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: '📅 Jadwal Event 2026 — Segera Daftar', variant: 'warning', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Momen Luar Biasa Dimulai Dari Sini', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Kami menghadirkan konferensi nasional, seminar, workshop, dan gathering eksklusif yang menginspirasi ribuan peserta setiap tahunnya.', fontSize: '18px', color: '#e0e7ff', align: 'left', lineHeight: '1.8', maxWidth: '540px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Daftar Event Terdekat', href: '#registration', variant: 'gradient', size: 'large', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop', alt: 'Event', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Angka Kesuksesan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Angka Kesuksesan Event Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Bukti nyata komitmen kami terhadap event berkualitas', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📋 Jenis Kegiatan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Jenis Kegiatan Yang Kami Selenggarakan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Berbagai format event yang dapat disesuaikan dengan kebutuhan Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📸 Portfolio Event', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Portfolio Event Terbaik', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Galeri momen-momen terbaik dari event yang telah kami selenggarakan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Klien', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Klien Event Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari klien yang telah mempercayakan event kepada kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👥 Tim Panitia', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Tim Panitia Inti', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim profesional yang akan mewujudkan event impian Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Daftar Event', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Daftarkan Diri ke Event Berikutnya', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jangan lewatkan event-event eksklusif yang akan kami selenggarakan', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Event Nusantara. Creating Unforgettable Moments.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
      { id: 'social', type: 'social', props: { platforms: ['instagram', 'facebook', 'twitter'], size: 'medium' } },
    ]},
  ],
};
