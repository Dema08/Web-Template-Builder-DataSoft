/**
 * University Campus Portal — Gradient purple, campus authority
 * Starter template for formal university/institutional profiles.
 */
export default {
  id: 'education-university',
  name: 'University Campus Portal',
  description: 'Profil institusi pendidikan formal dengan hero otoritatif, profil program studi, staf pengajar, dan pencapaian akademik.',
  thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
  tags: ['University', 'Campus', 'Academic', 'Formal'],
  theme: { primaryColor: '#7c3aed', dark: false },
  animations: ['fade-up', 'slide-left', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
      { id: 'logo', type: 'heading', props: { content: 'UNIVERSITAS NUSANTARA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#4c1d95' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-04', components: [
      { id: 'badge', type: 'badge', props: { content: 'Akreditasi A — BAN-PT', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Mencetak Pemimpin Bangsa Melalui Pendidikan Berkualitas', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Universitas terkemuka dengan 42 program studi, 1.200 dosen berpengalaman, dan jaringan alumni di 50+ negara.', fontSize: '18px', color: '#ede9fe', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Seleksi Penerimaan Mahasiswa', href: '#registration', variant: 'primary', background: '#ffffff', color: '#4c1d95' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 't', type: 'heading', props: { content: 'Profil Universitas Nusantara', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'programs', type: 'programs', layout: 'programs-01', components: [
      { id: 't', type: 'heading', props: { content: 'Fakultas & Program Studi Unggulan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
      { id: 't', type: 'heading', props: { content: 'Guru Besar & Dosen Senior', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'achievements', type: 'achievements', layout: 'achievements-01', components: [
      { id: 't', type: 'heading', props: { content: 'Prestasi & Akreditasi Internasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Penerimaan Mahasiswa Baru', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Universitas Nusantara. Established 1985.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
