/**
 * Industrial Premium Enterprise — Dark glow, enterprise B2B
 * Starter template for enterprise manufacturing with global scale.
 */
export default {
  id: 'manufacturing-premium',
  name: 'Industrial Premium Enterprise',
  description: 'Template premium untuk manufaktur enterprise dengan dark glow hero, layanan engineering, statistik kapasitas, dan partner trust.',
  thumbnail: 'https://images.unsplash.com/photo-1565793979680-9f10ae673e58?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Enterprise', 'Engineering', 'Export'],
  theme: { primaryColor: '#0f172a', dark: true },
  animations: ['slide-left', 'fade-up', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'PRIMA ENGINEERING CORP', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-06', components: [
      { id: 'title', type: 'heading', props: { content: 'Engineering Excellence — Built to Last', level: 'h1', fontSize: '54px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Custom precision engineering solutions for aerospace, automotive, and heavy industry sectors across Southeast Asia.', fontSize: '20px', color: '#e2e8f0', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Technical Partnership', href: '#contact', variant: 'premium', size: 'large', radius: 'full', background: '#f59e0b', color: '#0f172a', shadow: 'lg', fontSize: '15px', fontWeight: '700', letterSpacing: '0.02em' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-04', components: [
      { id: 't', type: 'heading', props: { content: 'Our Engineering Capabilities', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 't', type: 'heading', props: { content: 'Manufacturing Services Portfolio', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Global Manufacturing Scale', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
      { id: 't', type: 'heading', props: { content: 'International Certifications', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Technical & Commercial Inquiries', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Prima Engineering Corp. ISO 9001 | ISO 14001.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
