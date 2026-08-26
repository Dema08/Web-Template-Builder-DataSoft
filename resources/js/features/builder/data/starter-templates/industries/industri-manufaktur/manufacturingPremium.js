/**
 * Manufacturing Premium Enterprise — Premium dark glow, enterprise B2B
 * Starter template for enterprise manufacturing with global scale.
 */
export default {
  id: 'manufacturing-premium',
  name: 'Industrial Premium Enterprise',
  description: 'Template premium untuk manufaktur enterprise dengan dark glow hero, layanan engineering, statistik kapasitas, dan partner trust — untuk industri skala besar.',
  thumbnail: 'https://images.unsplash.com/photo-1565793979680-9f10ae673e58?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Enterprise', 'Engineering', 'Export', 'B2B'],
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
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'PRIMA ENGINEERING CORP', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#f59e0b', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Request RFQ', href: '#contact', variant: 'premium', size: 'small', radius: 'md', background: '#f59e0b', color: '#0f172a', shadow: 'sm', fontSize: '13px', fontWeight: '700' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-06', components: [
      { id: 'title', type: 'heading', props: { content: 'Engineering Excellence — Built to Last', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Custom precision engineering solutions for aerospace, automotive, and heavy industry sectors across Southeast Asia.', fontSize: '20px', color: '#cbd5e1', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Technical Partnership', href: '#contact', variant: 'premium', size: 'large', radius: 'full', background: '#f59e0b', color: '#0f172a', shadow: 'lg', fontSize: '16px', fontWeight: '700', letterSpacing: '0.02em' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-04', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Engineering Capabilities', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Our Engineering Capabilities', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Kami menggabungkan teknik presisi, material premium, dan proses terkontrol untuk menghasilkan komponen dan sistem yang diandalkan industri terkemuka dunia.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Services Portfolio', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Manufacturing Services Portfolio', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jasa manufaktur lengkap — dari prototype hingga mass production', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Global Scale', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Global Manufacturing Scale', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kinerja operasional yang membuktikan kapasitas dan keandalan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🏅 International Certifications', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'International Certifications', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Diakui dan diawasi oleh lembaga internasional terkemuka', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Partner Testimonials', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya Partner Global', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari mitra bisnis dan klien global kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Technical Inquiry', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Technical & Commercial Inquiries', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim engineering kami siap mendiskusikan kebutuhan spesifik Anda', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Prima Engineering Corp. ISO 9001 | ISO 14001.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
