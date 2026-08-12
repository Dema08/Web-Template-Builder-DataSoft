/**
 * Investor Relations Portal — White clean, stats-forward
 * Starter template for investor-facing corporate sites with financial highlights.
 */
export default {
  id: 'holding-investor',
  name: 'Investor Relations Portal',
  description: 'Template bersih dengan statistik keuangan terdepan, laporan tahunan, dan profil kepemimpinan — dirancang untuk menarik investor.',
  thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
  tags: ['Investor', 'Finance', 'Annual Report', 'Clean'],
  theme: { primaryColor: '#0369a1', dark: false },
  animations: ['fade-in', 'counter-up', 'slide-left'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'NUSANTARA CAPITAL GROUP', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#0369a1' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'title', type: 'heading', props: { content: 'Investasi Cerdas, Masa Depan Kokoh', level: 'h1', fontSize: '56px', fontWeight: '800', color: '#0f172a', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Nusantara Capital Group mengelola portofolio aset senilai Rp 47 Triliun dengan diversifikasi strategis di 8 sektor industri primer.', fontSize: '18px', color: '#64748b', align: 'center' } },
      { id: 'btn1', type: 'button', props: { label: 'Unduh Annual Report 2025', href: '#', variant: 'primary', background: '#0369a1', color: '#ffffff' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Financial Performance Highlights', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-04', components: [
      { id: 't', type: 'heading', props: { content: 'Tentang Nusantara Capital Group', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 't', type: 'heading', props: { content: 'Strategi & Roadmap 2026–2030', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 't', type: 'heading', props: { content: 'Senior Leadership Team', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Investor Relations Office', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Nusantara Capital Group Tbk. IDX: NCG.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
