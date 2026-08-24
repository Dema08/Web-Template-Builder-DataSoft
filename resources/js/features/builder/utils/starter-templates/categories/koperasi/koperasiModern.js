/**
 * Koperasi Digital Modern — Premium digital-forward, trust-first
 * Starter template for digital cooperatives with online services and mobile app focus.
 */
export default {
  id: 'koperasi-modern',
  name: 'Koperasi Digital Modern',
  description: 'Template koperasi digital premium dengan soft-split hero, layanan online, statistik pertumbuhan, dan FAQ transparan untuk anggota — modern dan terpercaya.',
  thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
  tags: ['Modern', 'Digital', 'Online', 'Transparent', 'Premium'],
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
  animations: ['fade-up', 'slide-right', 'counter-up', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'KOPERASI DIGITAL ID', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#065f46', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Daftar Online', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#10b981', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '🌐 Koperasi Berbasis Digital Pertama di Indonesia', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Kelola Simpanan & Pinjaman Anda Dari Mana Saja', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Aplikasi mobile koperasi terintegrasi untuk cek saldo, ajukan pinjaman, dan pantau SHU — 24/7 tanpa antre.', fontSize: '18px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '540px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Unduh Aplikasi', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: '#10b981', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop', alt: 'Digital Koperasi', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Pertumbuhan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pertumbuhan Koperasi Digital', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pertumbuhan anggota dan aset yang membuktikan kepercayaan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📱 Produk & Layanan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produk & Layanan Koperasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Layanan lengkap untuk memenuhi kebutuhan keuangan anggota', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tata Kelola', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Tata Kelola & Transparansi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Kami berkomitmen pada tata kelola yang transparan, akuntabilitas yang jelas, dan pelayanan prima bagi seluruh anggota — digital-first tanpa mengurangi kehangatan nilai koperasi.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Anggota', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Anggota Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari anggota yang telah merasakan kemudahan layanan digital kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 FAQ', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'FAQ Keanggotaan & Produk', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum seputar keanggotaan dan layanan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Daftar Anggota', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Daftar Anggota Atau Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Bergabung dengan ribuan anggota yang telah merasakan manfaat layanan digital kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Koperasi Digital Indonesia. Terdaftar & Diawasi OJK.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
      { id: 'social', type: 'social', props: { platforms: ['instagram', 'facebook', 'twitter'], size: 'medium' } },
    ]},
  ],
};
