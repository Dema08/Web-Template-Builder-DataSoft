/**
 * Corporate Premium Executive — Dark glow, refined luxury corporate
 * Starter template for ultra-premium corporate sites with executive branding.
 */
export default {
  id: 'holding-premium',
  name: 'Corporate Premium Executive',
  description: 'Desain korporat ultra-premium dengan dark glow hero dan layout eksekutif — menampilkan wibawa dan kepercayaan perusahaan skala besar.',
  thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Executive', 'Dark', 'Power'],
  theme: { primaryColor: '#1e293b', dark: true },
  animations: ['scale-in', 'fade-up', 'hover-glow'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
      { id: 'logo', type: 'heading', props: { content: 'PRIMA GLOBAL HOLDINGS', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-06', components: [
      { id: 'title', type: 'heading', props: { content: 'The Power of Strategic Diversification', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: "Prima Global Holdings builds long-term wealth through disciplined capital allocation across Asia's fastest-growing sectors.", fontSize: '20px', color: '#e2e8f0', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Our Portfolio', href: '#about', variant: 'primary', background: '#f59e0b', color: '#0f172a' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 't', type: 'heading', props: { content: 'Company Overview', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-01', components: [
      { id: 't', type: 'heading', props: { content: 'Business Sectors & Portfolio', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 't', type: 'heading', props: { content: 'Board of Directors', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
      { id: 't', type: 'heading', props: { content: 'Corporate History', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Head Office & Corporate Desk', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Prima Global Holdings. Excellence in Every Venture.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
    ]},
  ],
};
