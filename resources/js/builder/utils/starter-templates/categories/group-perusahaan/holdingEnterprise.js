/**
 * Enterprise Executive Group — Timeline, Board, Subsidiaries
 * Starter template for large holding companies with corporate journey and strategic vision.
 */
export default {
  id: 'holding-enterprise',
  name: 'Enterprise Executive Group',
  description: 'Profil korporat penuh dengan corporate journey timeline, susunan direksi, dan visi strategis jangka panjang.',
  thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
  tags: ['Enterprise', 'Board', 'Timeline', 'Corporate'],
  theme: { primaryColor: '#1e293b', dark: false },
  animations: ['fade-up', 'slide-right', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'ASTRA WIRA GROUP', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
      { id: 'cta', type: 'button', props: { label: 'Investor Relations', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#1e293b', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-04', components: [
      { id: 'badge', type: 'badge', props: { content: 'Synergy • Growth • Governance', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Membangun Ekosistem Bisnis Berkelanjutan Lintas Generasi', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Konglomerasi terkemuka mengelola 12 anak perusahaan di sektor energi, infrastruktur, keuangan, dan teknologi.', fontSize: '18px', color: '#e0e7ff', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Pelajari Portofolio Kami', href: '#about', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#4f46e5', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 't', type: 'heading', props: { content: 'Profil Group Astra Wira', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
      { id: 'd', type: 'text', props: { content: 'Lebih dari 35 tahun memimpin industri dengan komitmen penuh pada GCG, keberlanjutan ESG, dan penciptaan nilai jangka panjang bagi seluruh pemangku kepentingan.', fontSize: '16px', color: '#64748b' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 't', type: 'heading', props: { content: 'Visi & Misi Korporasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
      { id: 't', type: 'heading', props: { content: 'Milestones Perjalanan Korporat', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 't', type: 'heading', props: { content: 'Dewan Direksi & Komisaris', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Investor & Media Relations', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Astra Wira Group Tbk. All Rights Reserved.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
