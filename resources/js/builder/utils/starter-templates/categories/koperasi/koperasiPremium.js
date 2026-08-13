/**
 * Koperasi Prima Utama — Gradient, enterprise cooperative
 * Starter template for large-scale premium cooperatives with investment products.
 */
export default {
  id: 'koperasi-premium',
  name: 'Koperasi Premium Enterprise',
  description: 'Template koperasi skala besar dengan hero gradient premium, produk investasi, dan profil pengurus yang impresif.',
  thumbnail: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Enterprise', 'Investment', 'Growth'],
  theme: { primaryColor: '#4f46e5', dark: false },
  animations: ['scale-in', 'fade-up', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
      { id: 'logo', type: 'heading', props: { content: 'KOPERASI PRIMA UTAMA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-04', components: [
      { id: 'title', type: 'heading', props: { content: 'Investasi Cerdas Bersama Koperasi Terpercaya', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Koperasi primer dengan aset Rp 250 Miliar, 15.000+ anggota aktif, dan return SHU kompetitif setiap tahun.', fontSize: '18px', color: '#e0e7ff', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Bergabung Sekarang', href: '#contact', variant: 'gradient', size: 'large', radius: 'full', background: '#4f46e5', color: '#ffffff', shadow: 'lg', fontSize: '15px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kekuatan Finansial Koperasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 't', type: 'heading', props: { content: 'Produk Simpanan & Investasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-04', components: [
      { id: 't', type: 'heading', props: { content: 'Tata Kelola & Kepatuhan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Konsultasi Keanggotaan Premium', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Koperasi Prima Utama. Diawasi Kemenkop & OJK.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
