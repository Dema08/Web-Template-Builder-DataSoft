/**
 * Koperasi Sejahtera Classic — Premium trusted green, member-first
 * Starter template for traditional cooperatives with green trust branding.
 */
export default {
  id: 'koperasi-classic',
  name: 'Koperasi Sejahtera Classic',
  description: 'Template koperasi klasik premium dengan hero hijau, program simpan-pinjam terstruktur, dan tampilan legalitas resmi — terpercaya dan berwibawa.',
  thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
  tags: ['Classic', 'Trusted', 'KSP', 'Members', 'Premium'],
  theme: {
    primaryColor: '#059669',
    secondaryColor: '#ecfdf5',
    accentColor: '#10b981',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#a7f3d0',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-in', 'counter-up', 'hover-lift', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'KSP SEJAHTERA BERSAMA', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#065f46', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Portal Anggota', href: '#contact', variant: 'primary', size: 'medium', radius: 'md', background: '#059669', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🏆 Koperasi Terpercaya Sejak 1998', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Keuangan Bersama Yang Adil, Transparan, Dan Mensejahterakan', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Layanan simpanan, pinjaman usaha berbunga ringan, dan pembagian SHU yang adil bagi seluruh anggota aktif.', fontSize: '19px', color: '#d1fae5', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Daftar Anggota Baru', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#065f46', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Perkembangan Koperasi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Perkembangan Koperasi Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pertumbuhan anggota dan aset yang membuktikan kepercayaan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💰 Program Keuangan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Program Simpanan & Pinjaman', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Produk keuangan yang dirancang untuk kesejahteraan anggota', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Profil & Legalitas', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Profil & Legalitas Koperasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Berdiri sejak 1998, KSP Sejahtera Bersama telah berkembang menjadi koperasi terpercaya dengan ribuan anggota dan jaringan cabang di 8 kota. Kami berkomitmen penuh pada prinsip transparansi dan keadilan dalam setiap transaksi.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Anggota', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Anggota Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni nyata dari anggota yang telah merasakan manfaat bergabung', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Kantor Pelayanan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kantor Pelayanan Anggota', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kunjungi kantor terdekat atau hubungi kami untuk informasi lebih lanjut', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 KSP Sejahtera Bersama. Terdaftar Kemendag & Kemenkop.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
