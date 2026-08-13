/**
 * Investor Relations Portal — Premium clean, stats-forward
 * Starter template for investor-facing corporate sites with financial highlights.
 */
export default {
  id: 'holding-investor',
  name: 'Investor Relations Portal',
  description: 'Template bersih premium dengan statistik keuangan terdepan, laporan tahunan, dan profil kepemimpinan — dirancang untuk menarik investor.',
  thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
  tags: ['Investor', 'Finance', 'Annual Report', 'Clean', 'Premium'],
  theme: {
    primaryColor: '#0369a1',
    secondaryColor: '#f0f9ff',
    accentColor: '#0284c7',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e0f2fe',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-in', 'counter-up', 'slide-left', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'NUSANTARA CAPITAL GROUP', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#0369a1', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Unduh Annual Report', href: '#', variant: 'primary', size: 'small', radius: 'md', background: '#0369a1', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Laporan Tahunan 2025 Tersedia', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Investasi Cerdas, Masa Depan Kokoh', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Nusantara Capital Group mengelola portofolio aset senilai Rp 47 Triliun dengan diversifikasi strategis di 8 sektor industri primer.', fontSize: '19px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn1', type: 'button', props: { label: 'Unduh Annual Report 2025', href: '#', variant: 'primary', size: 'large', radius: 'md', background: '#0369a1', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Financial Performance', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Financial Performance Highlights', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kinerja keuangan yang membuktikan pertumbuhan dan keandalan investasi', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-04', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tentang Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Tentang Nusantara Capital Group', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Sebagai konglomerasi investasi terdepan, kami memegang portofolio di sektor energi, infrastruktur, keuangan, properti, teknologi, kesehatan, konsumsi, dan pertambangan — dengan komitmen penuh pada Tata Kelola Perusahaan yang Baik (GCG).', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🎯 Strategi & Roadmap', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Strategi & Roadmap 2026–2030', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Arah strategis yang akan membawa perusahaan ke level berikutnya', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👥 Leadership Team', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Senior Leadership Team', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim kepemimpinan yang membawa visi dan strategi perusahaan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Investor', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Para Investor Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari investor yang telah mempercayakan modal mereka', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Investor Relations', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Investor Relations Office', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim IR kami siap menjawab pertanyaan Anda seputar investasi', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Nusantara Capital Group Tbk. IDX: NCG.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
