/**
 * Academy Excellence Hub — Premium gradient hero, courses showcase
 * Starter template for educational institutions and training academies.
 */
export default {
  id: 'education-academy',
  name: 'Academy Excellence Hub',
  description: 'Template sekolah/akademi premium dengan hero gradient, program kursus, instruktur, fasilitas, dan pendaftaran online — mewah dan inspiratif.',
  thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
  tags: ['Academy', 'Courses', 'Instructors', 'Certification', 'Premium'],
  theme: {
    primaryColor: '#10b981',
    secondaryColor: '#f0fdf4',
    accentColor: '#059669',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#d1fae5',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'slide-right', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'GLOBAL ACADEMY', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#065f46', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Daftar Sekarang', href: '#registration', variant: 'primary', size: 'small', radius: 'full', background: '#10b981', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🎓 Lembaga Pelatihan Tersertifikasi Nasional', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Kembangkan Potensi & Percepat Karier Anda', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Kurikulum berbasis industri terkini, instruktur praktisi berpengalaman, dan sertifikasi yang diakui 500+ perusahaan.', fontSize: '19px', color: '#d1fae5', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Program Kursus', href: '#programs', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#065f46', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Dampak Akademi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dampak & Prestasi Akademi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang menggambarkan dampak dan pencapaian kami dalam pendidikan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'programs', type: 'programs', layout: 'programs-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📚 Program Unggulan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Program Unggulan Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Program pelatihan yang dirancang untuk menghasilkan lulusan siap kerja', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👨‍🏫 Instruktur Berpengalaman', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Instruktur Berpengalaman', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Belajar langsung dari praktisi dan akademisi terbaik di bidangnya', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tentang Global Academy', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Profil Global Academy', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Didirikan pada 2008, Global Academy telah meluluskan lebih dari 25.000 peserta dari berbagai latar belakang. Kami percaya pendidikan berkualitas adalah hak setiap orang yang mau belajar.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Alumni', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Alumni Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kisah sukses alumni yang telah berkembang setelah mengikuti program kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'facilities', type: 'facilities', layout: 'facilities-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🏢 Fasilitas', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Fasilitas Pembelajaran Modern', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Lingkungan belajar yang nyaman dan mendukung proses pembelajaran', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'achievements', type: 'achievements', layout: 'achievements-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🏅 Prestasi & Sertifikasi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Sertifikasi & Penghargaan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pengakuan resmi dari lembaga pendidikan dan industri', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'registration', type: 'registration', layout: 'registration-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📝 Daftar Sekarang', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Daftar Angkatan Baru — Kuota Terbatas', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Amankan tempat Anda di angkatan berikutnya — hanya 30 slot tersedia', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Global Academy Indonesia. Shaping Future Leaders.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
