/**
 * Koperasi Sejahtera Classic — Trusted green, member-first
 * Starter template for traditional cooperatives with green trust branding.
 */
export default {
  id: 'koperasi-classic',
  name: 'Koperasi Sejahtera Classic',
  description: 'Template koperasi klasik terpercaya dengan hero hijau, program simpan-pinjam terstruktur, dan tampilan legalitas resmi.',
  thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
  tags: ['Classic', 'Trusted', 'KSP', 'Members'],
  theme: { primaryColor: '#059669', dark: false },
  animations: ['fade-in', 'counter-up', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'KSP SEJAHTERA BERSAMA', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#065f46' } },
      { id: 'cta', type: 'button', props: { label: 'Portal Anggota', href: '#contact', variant: 'primary', background: '#059669', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-01', components: [
      { id: 'title', type: 'heading', props: { content: 'Keuangan Bersama Yang Adil, Transparan, Dan Mensejahterikan', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Layanan simpanan, pinjaman usaha berbunga ringan, dan pembagian SHU yang adil bagi seluruh anggota aktif.', fontSize: '18px', color: '#d1fae5', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Daftar Anggota Baru', href: '#contact', variant: 'primary', background: '#ffffff', color: '#065f46' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Perkembangan Koperasi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-01', components: [
      { id: 't', type: 'heading', props: { content: 'Program Simpanan & Pinjaman', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 't', type: 'heading', props: { content: 'Profil & Legalitas Koperasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kantor Pelayanan Anggota', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 KSP Sejahtera Bersama. Terdaftar Kemendag & Kemenkop.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
