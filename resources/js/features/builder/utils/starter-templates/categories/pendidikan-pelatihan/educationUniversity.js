/**
 * University Campus Portal — Premium gradient purple, campus authority
 * Starter template for formal university/institutional profiles.
 */
export default {
  id: 'education-university',
  name: 'University Campus Portal',
  description: 'Profil institusi pendidikan formal premium dengan hero otoritatif, profil program studi, staf pengajar, dan pencapaian akademik — mewah dan berwibawa.',
  thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
  tags: ['University', 'Campus', 'Academic', 'Formal', 'Premium'],
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
  animations: ['fade-up', 'slide-left', 'hover-lift', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'UNIVERSITAS NUSANTARA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#4c1d95', letterSpacing: '0.02em' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-04', components: [
      { id: 'badge', type: 'badge', props: { content: 'Akreditasi A — BAN-PT', variant: 'premium', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Mencetak Pemimpin Bangsa Melalui Pendidikan Berkualitas', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Universitas terkemuka dengan 42 program studi, 1.200 dosen berpengalaman, dan jaringan alumni di 50+ negara.', fontSize: '19px', color: '#ede9fe', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Seleksi Penerimaan Mahasiswa', href: '#registration', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#4c1d95', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Prestasi Akademik', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Prestasi & Pencapaian Akademik', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Bukti nyata komitmen kami terhadap excellence dalam pendidikan tinggi', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Profil Universitas', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Profil Universitas Nusantara', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Didirikan pada 1985, Universitas Nusantara telah berkembang menjadi salah satu institusi pendidikan tinggi terkemuka di Indonesia. Visi kami adalah mencetak pemimpin bangsa yang berintegritas, inovatif, dan berwawasan global.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'programs', type: 'programs', layout: 'programs-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📚 Program Studi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Fakultas & Program Studi Unggulan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pilih program studi yang sesuai dengan passion dan tujuan karier Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👨‍🏫 Dosen & Staf Pengajar', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Guru Besar & Dosen Senior', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Belajar langsung dari para akademisi terkemuka di bidangnya', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Alumni', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Alumni Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kisah sukses alumni yang telah berkarya di berbagai bidang', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'achievements', type: 'achievements', layout: 'achievements-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🏅 Prestasi & Akreditasi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Prestasi & Akreditasi Internasional', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pengakuan resmi dari lembaga pendidikan dan akreditasi internasional', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Penerimaan Mahasiswa', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Penerimaan Mahasiswa Baru', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Bergabung dengan komunitas akademik terbaik di Indonesia', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Universitas Nusantara. Established 1985.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
