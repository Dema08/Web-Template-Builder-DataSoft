/**
 * Logistics Premium Supply Chain — Dark luxury, air & sea cargo focus
 * Starter template for premium logistics with dark premium aesthetics.
 */
export default {
  id: 'logistics-premium',
  name: 'Logistics Premium Supply Chain',
  description: 'Desain dark premium untuk penyedia logistik kelas atas: kargo udara, laut, dan integrasi rantai pasok internasional.',
  thumbnail: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Air Cargo', 'International', 'Dark'],
  theme: { primaryColor: '#0f172a', dark: true },
  animations: ['slide-left', 'fade-up', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'NEXUS CARGO GLOBAL', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: 'Freight Excellence Since 2009', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Intelligent Global Freight & Supply Chain System', level: 'h1', fontSize: '50px', fontWeight: '900', color: '#ffffff', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Kargo udara ekspres, laut bulking, pergudangan dingin & pelacakan berbasis AI untuk industri skala enterprise.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Minta Penawaran B2B', href: '#contact', variant: 'primary', background: '#ffffff', color: '#0f172a' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop', alt: 'Cargo', width: '100%', height: '380px', objectFit: 'cover' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 't', type: 'heading', props: { content: 'Layanan Premium Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Jangkauan Global Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 't', type: 'heading', props: { content: 'Teknologi & Keunggulan Nexus', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'clients', type: 'clients', layout: 'clients-01', components: [
      { id: 't', type: 'heading', props: { content: 'Global Partners', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Enterprise Partnership Inquiry', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Nexus Cargo Global. All Rights Reserved.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
