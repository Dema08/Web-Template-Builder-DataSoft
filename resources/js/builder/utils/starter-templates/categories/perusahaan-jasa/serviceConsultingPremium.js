/**
 * Consulting Premium Hub — Premium indigo split, team-forward
 * Starter template for premium consulting firms with certified specialists.
 */
export default {
  id: 'service-consulting-premium',
  name: 'Consulting Premium Hub',
  description: 'Template konsultan premium dengan split indigo hero, tim spesialis terdepan, statistik kredibilitas, dan FAQ profesional — dirancang untuk firm konsultan yang ingin tampil otoritatif.',
  thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
  tags: ['Consulting', 'Premium', 'B2B', 'Strategy', 'Authority'],
  theme: {
    primaryColor: '#4f46e5',
    secondaryColor: '#f8fafc',
    accentColor: '#6366f1',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e2e8f0',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'slide-right', 'scale-in', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'PRIMA CONSULTING', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#0f172a', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Free Consultation', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#4f46e5', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: '15+ Tahun Pengalaman Konsultasi', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Strategi Bisnis Yang Menghasilkan Pertumbuhan Nyata', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Tim konsultan bersertifikat internasional mendampingi perusahaan Anda dari perencanaan strategi hingga eksekusi terukur.', fontSize: '19px', color: '#e0e7ff', align: 'left', lineHeight: '1.8', maxWidth: '540px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Konsultasi Gratis 30 Menit', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#4f46e5', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'btn2', type: 'button', props: { label: 'Lihat Studi Kasus', href: '#about', variant: 'outline', size: 'large', radius: 'md', background: 'transparent', color: '#ffffff', shadow: 'none', fontSize: '16px', fontWeight: '600', borderWidth: '2px', borderColor: '#ffffff' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop', alt: 'Consulting', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Metodologi Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Metodologi Konsultasi Terstruktur & Terbukti', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Kami menggabungkan analisis data keras, wajar manajerial, dan template berulang yang terverifikasi untuk menghasilkan rekomendasi strategis yang actionable dan terukur.', fontSize: '17px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Unduh White Paper', href: '#', variant: 'primary', size: 'medium', radius: 'md', background: '#4f46e5', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Bidang Keahlian', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Bidang Keahlian Spesialis', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Dukungan profesional di seluruh lini strategi, operasional, dan transformasi digital', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Rekam Jejak', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Hasil Nyata Yang Terbukti', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Setiap angka adalah jujur dari proyek-proyek yang telah kami selesaikan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👥 Tim Spesialis', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Konsultan Bersertifikat Terdepan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Mendampingi Anda dengan kompetensi dan pengalaman internasional', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Klien', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Klien Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari CEO dan founder yang telah merasakan dampak konsultasi kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 FAQ', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari calon klien', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Jadwalkan Sesi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Jadwalkan Sesi Konsultasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Sesi konsultasi awal 30 menit — tanpa biaya, tanpa komitmen', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Prima Consulting Indonesia. Transforming Business Through Strategy.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
