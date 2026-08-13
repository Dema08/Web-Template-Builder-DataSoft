/**
 * Koperasi Premium Enterprise — Premium gradient, enterprise cooperative
 * Starter template for large-scale premium cooperatives with investment products.
 */
export default {
  id: 'koperasi-premium',
  name: 'Koperasi Premium Enterprise',
  description: 'Template koperasi skala besar premium dengan hero gradient premium, produk investasi, dan profil pengurus yang impresif — untuk koperasi enterprise.',
  thumbnail: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Enterprise', 'Investment', 'Growth', 'Trust'],
  theme: {
    primaryColor: '#4f46e5',
    secondaryColor: '#eef2ff',
    accentColor: '#6366f1',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e0e7ff',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['scale-in', 'fade-up', 'hover-glow', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'KOPERASI PRIMA UTAMA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Bergabung Sekarang', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#4f46e5', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-04', components: [
      { id: 'title', type: 'heading', props: { content: 'Investasi Cerdas Bersama Koperasi Terpercaya', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Koperasi primer dengan aset Rp 250 Miliar, 15.000+ anggota aktif, dan return SHU kompetitif setiap tahun.', fontSize: '19px', color: '#e0e7ff', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Bergabung Sekarang', href: '#contact', variant: 'gradient', size: 'large', radius: 'full', background: '#4f46e5', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Kekuatan Finansial', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kekuatan Finansial Koperasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka keuangan yang membuktikan kepercayaan dan kinerja', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 'badge', type: 'badge', props: { content: '💎 Produk Investasi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produk Simpanan & Investasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pilihan produk keuangan untuk mencapai tujuan finansial Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-04', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tata Kelola & Kepatuhan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Tata Kelola & Kepatuhan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Diatur oleh Dewan Pengawas dan Dewan Pengurus yang kompeten, dengan akuntabilitas penuh dan transparansi laporan keuangan yang diterbitkan setiap triwulan.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Anggota', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Anggota Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari anggota yang telah merasakan pertumbuhan bersama koperasi', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Konsultasi Keanggotaan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Konsultasi Keanggotaan Premium', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim kami siap membantu Anda memulai perjalanan investasi bersama', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Koperasi Prima Utama. Diawasi Kemenkop & OJK.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
