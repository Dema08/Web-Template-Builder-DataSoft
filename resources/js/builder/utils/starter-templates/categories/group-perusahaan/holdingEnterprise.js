/**
 * Enterprise Executive Group — Premium timeline, board, subsidiaries
 * Starter template for large holding companies with corporate journey and strategic vision.
 */
export default {
  id: 'holding-enterprise',
  name: 'Enterprise Executive Group',
  description: 'Profil korporat penuh premium dengan corporate journey timeline, susunan direksi, dan visi strategis jangka panjang — mewah dan berwibawa.',
  thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
  tags: ['Enterprise', 'Board', 'Timeline', 'Corporate', 'Premium'],
  theme: {
    primaryColor: '#1e293b',
    secondaryColor: '#f8fafc',
    accentColor: '#f59e0b',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e2e8f0',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'slide-right', 'counter-up', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'ASTRA WIRA GROUP', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Investor Relations', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#1e293b', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-04', components: [
      { id: 'badge', type: 'badge', props: { content: 'Synergy • Growth • Governance', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Membangun Ekosistem Bisnis Berkelanjutan Lintas Generasi', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Konglomerasi terkemuka mengelola 12 anak perusahaan di sektor energi, infrastruktur, keuangan, dan teknologi.', fontSize: '19px', color: '#e0e7ff', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Pelajari Portofolio Kami', href: '#about', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#4f46e5', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Skala Grup', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Skala & Jangkauan Grup', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang menggambarkan skala dan jangkauan operasional grup', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Profil Group', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Profil Group Astra Wira', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Lebih dari 35 tahun memimpin industri dengan komitmen penuh pada GCG, keberlanjutan ESG, dan penciptaan nilai jangka panjang bagi seluruh pemangku kepentingan.', fontSize: '17px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Portofolio', href: '#vision', variant: 'primary', size: 'medium', radius: 'md', background: '#1e293b', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🎯 Visi & Misi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Visi & Misi Korporasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Arah strategis jangka panjang yang menjadi kompas grup', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📜 Milestones', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Milestones Perjalanan Korporat', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Perjalanan panjang membangun ekosistem bisnis yang kokoh', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👥 Dewan Direksi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dewan Direksi & Komisaris', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pemimpin strategis yang membawa grup ke era berikutnya', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Stakeholder', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya Stakeholder', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari mitra strategis dan stakeholder penting', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Investor & Media', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Investor & Media Relations', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Hubungi kami untuk pertanyaan investor dan media', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Astra Wira Group Tbk. All Rights Reserved.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
