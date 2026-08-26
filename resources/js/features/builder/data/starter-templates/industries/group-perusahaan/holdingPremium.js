/**
 * Corporate Premium Executive — Premium dark glow, refined luxury corporate
 * Starter template for ultra-premium corporate sites with executive branding.
 */
export default {
  id: 'holding-premium',
  name: 'Corporate Premium Executive',
  description: 'Desain korporat ultra-premium dengan dark glow hero dan layout eksekutif — menampilkan wibawa dan kepercayaan perusahaan skala besar.',
  thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Executive', 'Dark', 'Power', 'Luxury'],
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
  animations: ['scale-in', 'fade-up', 'hover-glow', 'slide-left'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
      { id: 'logo', type: 'heading', props: { content: 'PRIMA GLOBAL HOLDINGS', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#f59e0b', letterSpacing: '0.02em' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-06', components: [
      { id: 'title', type: 'heading', props: { content: 'The Power of Strategic Diversification', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: "Prima Global Holdings builds long-term wealth through disciplined capital allocation across Asia's fastest-growing sectors.", fontSize: '20px', color: '#e2e8f0', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Our Portfolio', href: '#about', variant: 'premium', size: 'large', radius: 'full', background: '#f59e0b', color: '#0f172a', shadow: 'lg', fontSize: '16px', fontWeight: '700', letterSpacing: '0.02em' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Portfolio Scale', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Scale & Performance', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka operasional yang membuktikan skala dan kinerja grup', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Company Overview', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Company Overview', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: "Konglomerasi investasi kelas dunia dengan portofolio tersebar di energi, infrastruktur, properti, dan teknologi — mengelola aset senilai USD 12 Miliar di 6 negara.", fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🎯 Strategic Vision', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Strategic Vision 2030', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Menjadi konglomerasi investasi terdepan di Asia Pasifik', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Business Sectors', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Business Sectors & Portfolio', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Diversifikasi strategis di sektor-sektor dengan pertumbuhan tercepat', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📜 Corporate History', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Corporate History', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Perjalanan membangun nilai jangka panjang sejak 1987', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👥 Board of Directors', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Board of Directors', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pemimpin strategis yang membawa visi global perusahaan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Stakeholder Quotes', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'What Our Partners Say', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari rekanan dan stakeholder global', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Head Office', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Head Office & Corporate Desk', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kantor pusat yang menjadi pusat koordinasi seluruh operasional grup', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Prima Global Holdings. Excellence in Every Venture.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
      { id: 'social', type: 'social', props: { platforms: ['linkedin', 'twitter'], size: 'medium' } },
    ]},
  ],
};
