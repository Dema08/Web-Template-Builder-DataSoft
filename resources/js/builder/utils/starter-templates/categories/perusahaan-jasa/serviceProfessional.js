/**
 * Service Professional Classic — Clean white, pricing-first
 * Starter template for professional service companies with structured offerings.
 */
export default {
  id: 'service-professional',
  name: 'Service Professional Classic',
  description: 'Layout profesional klasik dengan hero putih bersih, layanan terstruktur, pricing paket, dan kontak yang mudah diakses.',
  thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80',
  tags: ['Professional', 'Classic', 'Services', 'Pricing'],
  theme: { primaryColor: '#0f172a', dark: false },
  animations: ['fade-in', 'hover-lift', 'slide-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'JASA PROFESIONAL ID', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'title', type: 'heading', props: { content: 'Layanan Profesional Terpercaya Untuk Kebutuhan Bisnis Anda', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Didukung tenaga ahli bersertifikasi, proses terstruktur, dan jaminan kepuasan 100% atau uang kembali.', fontSize: '18px', color: '#64748b', align: 'center' } },
      { id: 'btn1', type: 'button', props: { label: 'Lihat Layanan', href: '#services', variant: 'primary', size: 'large', radius: 'md', background: '#0f172a', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 't', type: 'heading', props: { content: 'Apa Yang Kami Kerjakan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kenapa Klien Memilih Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'pricing', type: 'pricing', layout: 'pricing-01', components: [
      { id: 't', type: 'heading', props: { content: 'Paket Layanan & Biaya', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Hubungi Kami Sekarang', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Jasa Profesional Indonesia.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
