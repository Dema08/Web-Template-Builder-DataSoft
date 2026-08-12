/**
 * Koperasi Digital Modern — Soft split, digital-forward
 * Starter template for digital cooperatives with online services and mobile app focus.
 */
export default {
  id: 'koperasi-modern',
  name: 'Koperasi Digital Modern',
  description: 'Template koperasi digital dengan soft-split hero, layanan online, statistik pertumbuhan, dan FAQ transparan untuk anggota.',
  thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
  tags: ['Modern', 'Digital', 'Online', 'Transparent'],
  theme: { primaryColor: '#10b981', dark: false },
  animations: ['fade-up', 'slide-right', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'KOPERASI DIGITAL ID', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#065f46' } },
      { id: 'cta', type: 'button', props: { label: 'Daftar Online', href: '#contact', variant: 'primary', background: '#10b981', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '🌐 Koperasi Berbasis Digital Pertama di Indonesia', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Kelola Simpanan & Pinjaman Anda Dari Mana Saja', level: 'h1', fontSize: '46px', fontWeight: '800', color: '#0f172a', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Aplikasi mobile koperasi terintegrasi untuk cek saldo, ajukan pinjaman, dan pantau SHU — 24/7 tanpa antre.', fontSize: '18px', color: '#64748b', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Unduh Aplikasi', href: '#contact', variant: 'primary', background: '#10b981', color: '#ffffff' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop', alt: 'Digital Koperasi', width: '100%', height: '360px', objectFit: 'cover' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 't', type: 'heading', props: { content: 'Produk & Layanan Koperasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Pertumbuhan Koperasi Digital', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 't', type: 'heading', props: { content: 'Tata Kelola & Transparansi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 't', type: 'heading', props: { content: 'FAQ Keanggotaan & Produk', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Daftar Anggota Atau Hubungi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Koperasi Digital Indonesia. Terdaftar & Diawasi OJK.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
    ]},
  ],
};
