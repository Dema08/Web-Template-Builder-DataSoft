/**
 * Koperasi Susu Perah Fresh — Premium clean farm-fresh narrative
 * Starter template for dairy cooperatives with farm-to-table focus.
 */
export default {
  id: 'dairy-coop',
  name: 'Koperasi Susu Perah Fresh',
  description: 'Template koperasi susu premium dengan hero bersih, jaringan peternak, proses pasteurisasi, dan distribusi susu segar berkualitas — alami dan terpercaya.',
  thumbnail: 'https://images.unsplash.com/photo-1527153857715-33282435658a?w=800&auto=format&fit=crop&q=80',
  tags: ['Dairy', 'Fresh Milk', 'Farmer Network', 'Quality', 'Premium'],
  theme: {
    primaryColor: '#0d9488',
    secondaryColor: '#f0fdfa',
    accentColor: '#14b8a6',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#ccfbf1',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-in', 'counter-up', 'hover-lift', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'KOPTAN SUSU MURNI', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#115e59', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Kemitraan Peternak', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#0d9488', color: '#ffffff', shadow: 'md', fontSize: '14px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'badge', type: 'badge', props: { content: '🥛 100% Susu Segar Peternak Lokal', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Susu Segar Murni Dari Peternak Lokal Pilihan', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Mengintegrasikan 2.500+ peternak sapi perah dengan standar pasteurisasi higienis dan rantai dingin modern dari ladang ke meja makan Anda.', fontSize: '19px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Pelajari Program Kemitraan', href: '#about', variant: 'primary', size: 'large', radius: 'full', background: '#0d9488', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Kapasitas & Jaringan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kapasitas Produksi & Jaringan Peternak', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Skala operasional yang menjamin ketersediaan susu segar setiap hari', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🥛 Produk Olahan Susu', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produk Olahan Susu Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Berbagai produk olahan susu dari peternak lokal pilihan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Proses Pasteurisasi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Proses Pasteurisasi & Quality Control', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Setiap liter susu melewati proses pasteurisasi berkontrol ketat dengan standar SNI dan sistem cold chain 24/7 untuk memastikan kesegaran dan keamanan pangan hingga ke tangan konsumen.', fontSize: '17px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Proses', href: '#', variant: 'primary', size: 'medium', radius: 'md', background: '#0d9488', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Peternak', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Peternak Mitra Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari peternak yang telah bergabung dalam jaringan kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Kemitraan Peternak', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pos Penampungan & Kemitraan Peternak', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Bergabung sebagai peternak mitra dan nikmati manfaat kemitraan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Koperasi Peternak Susu Murni Indonesia. Farm to Table.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
