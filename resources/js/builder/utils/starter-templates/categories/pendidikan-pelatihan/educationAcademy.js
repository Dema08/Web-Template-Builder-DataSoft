/**
 * Academy Excellence Hub — Gradient hero, courses showcase
 * Starter template for educational institutions and training academies.
 */
export default {
  id: 'education-academy',
  name: 'Academy Excellence Hub',
  description: 'Template sekolah/akademi dengan hero gradient, program kursus, instruktur, fasilitas, dan pendaftaran online.',
  thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
  tags: ['Academy', 'Courses', 'Instructors', 'Certification'],
  theme: { primaryColor: '#10b981', dark: false },
  animations: ['fade-up', 'counter-up', 'slide-right'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-04', components: [
      { id: 'logo', type: 'heading', props: { content: 'GLOBAL ACADEMY', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#065f46' } },
      { id: 'cta', type: 'button', props: { label: 'Daftar Sekarang', href: '#registration', variant: 'primary', size: 'small', radius: 'full', background: '#10b981', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🎓 Lembaga Pelatihan Tersertifikasi Nasional', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Kembangkan Potensi & Percepat Karier Anda', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Kurikulum berbasis industri terkini, instruktur praktisi berpengalaman, dan sertifikasi yang diakui 500+ perusahaan.', fontSize: '18px', color: '#d1fae5', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Program Kursus', href: '#programs', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#065f46', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'programs', type: 'programs', layout: 'programs-01', components: [
      { id: 't', type: 'heading', props: { content: 'Program Unggulan Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
      { id: 't', type: 'heading', props: { content: 'Instruktur Berpengalaman', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Dampak & Prestasi Akademi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'facilities', type: 'facilities', layout: 'facilities-01', components: [
      { id: 't', type: 'heading', props: { content: 'Fasilitas Pembelajaran Modern', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'achievements', type: 'achievements', layout: 'achievements-01', components: [
      { id: 't', type: 'heading', props: { content: 'Sertifikasi & Penghargaan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'registration', type: 'registration', layout: 'registration-01', components: [
      { id: 't', type: 'heading', props: { content: 'Daftar Angkatan Baru — Kuota Terbatas', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Global Academy Indonesia. Shaping Future Leaders.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
