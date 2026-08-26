/**
 * Logistics Premium Supply Chain — Premium dark luxury, air & sea cargo
 * Starter template for premium logistics with dark premium aesthetics.
 */
export default {
  id: 'logistics-premium',
  name: 'Logistics Premium Supply Chain',
  description: 'Desain dark premium untuk penyedia logistik kelas atas: kargo udara, laut, dan integrasi rantai pasok internasional — mewah dan tegas.',
  thumbnail: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Air Cargo', 'International', 'Dark', 'Enterprise'],
  theme: {
    primaryColor: '#0f172a',
    secondaryColor: '#1e293b',
    accentColor: '#f59e0b',
    dark: true,
    surface: '#1e293b',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#334155',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['slide-left', 'fade-up', 'hover-glow', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'NEXUS CARGO GLOBAL', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#f59e0b', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Minta Penawaran B2B', href: '#contact', variant: 'premium', size: 'small', radius: 'full', background: '#f59e0b', color: '#0f172a', shadow: 'sm', fontSize: '13px', fontWeight: '700' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: 'Freight Excellence Since 2009', variant: 'premium', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Intelligent Global Freight & Supply Chain System', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Kargo udara ekspres, laut bulking, pergudangan dingin & pelacakan berbasis AI untuk industri skala enterprise.', fontSize: '19px', color: '#e0e7ff', align: 'left', lineHeight: '1.8', maxWidth: '540px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Minta Penawaran B2B', href: '#contact', variant: 'premium', size: 'large', radius: 'full', background: '#ffffff', color: '#0f172a', shadow: 'lg', fontSize: '16px', fontWeight: '700', letterSpacing: '0.02em' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop', alt: 'Cargo', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Jangkauan Global', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Jangkauan Global Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jaringan operasional yang menjangkau lebih dari 120 negara', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Layanan Premium', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Layanan Premium Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Solusi logistik end-to-end yang terintegrasi dan dapat diandalkan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Teknologi & Keunggulan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Teknologi & Keunggulan Nexus', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Platform logistik kami menggabungkan AI, IoT, dan big data untuk memberikan visibility penuh dan kontrol atas setiap shipment — dari warehouse hingga doorstep.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Partner', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya Klien Premium', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari mitra korporat yang mempercayakan logistik mereka kepada kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'clients', type: 'clients', layout: 'clients-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🤝 Global Partners', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Global Partners', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jaringan global yang dipercaya oleh perusahaan ternama', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Enterprise Inquiry', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Enterprise Partnership Inquiry', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim enterprise kami siap menyusun solusi logistik terbaik untuk Anda', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Nexus Cargo Global. All Rights Reserved.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
