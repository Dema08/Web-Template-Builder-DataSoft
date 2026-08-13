/**
 * Professional Association Portal — Premium gradient purple, formal authority
 * Starter template for professional associations with formal structure.
 */
export default {
  id: 'org-association',
  name: 'Professional Association Portal',
  description: 'Template asosiasi profesi resmi premium dengan hero otoritatif, timeline sejarah, pengurus, dan manfaat keanggotaan terstruktur — berwibawa dan terpercaya.',
  thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=80',
  tags: ['Association', 'Formal', 'Professional', 'Membership', 'Premium'],
  theme: {
    primaryColor: '#4f46e5',
    secondaryColor: '#eef2ff',
    accentColor: '#6366f1',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e0e7ff',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'slide-right', 'counter-up', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'ASOSIASI PROFESI INDONESIA', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#0f172a', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Daftarkan Keanggotaan', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#4f46e5', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-04', components: [
      { id: 'title', type: 'heading', props: { content: 'Standar Profesi Tertinggi Untuk Indonesia', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Menghimpun lebih dari 25.000 profesional bersertifikat dalam satu wadah yang kuat untuk kemajuan profesi dan bangsa.', fontSize: '19px', color: '#e0e7ff', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Daftarkan Keanggotaan', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#4338ca', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Dampak Asosiasi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Angka yang Membuktikan Dampak Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Statistik anggota, program, dan pencapaian asosiasi', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Sejarah & Peran', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Sejarah & Peran Asosiasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Didirikan pada 1998, Asosiasi Profesi Indonesia telah menjadi wadah konsolidasi profesi terbesar di Asia Tenggara. Kami bekerja sama dengan pemerintah, industri, dan lembaga internasional untuk menetapkan standar kompetensi dan etika profesi.', fontSize: '17px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Unduh Profil Asosiasi', href: '#', variant: 'primary', size: 'medium', radius: 'md', background: '#4f46e5', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🎯 Visi & Misi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Visi Strategis 2030', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Menuju asosiasi profesi yang terdepan di kawasan Asia-Pasifik', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📜 Jejak Perjuangan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Jejak Perjuangan Asosiasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Perjalanan panjang membangun standar profesi bangsa', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👥 Dewan Pengurus', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dewan Pengurus Nasional', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tokoh-tokoh terkemuka yang memimpin asosiasi periode 2024-2029', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Anggota', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Anggota Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari profesional yang telah bergabung dengan asosiasi', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Sekretariat Nasional', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Sekretariat Nasional', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Hubungi kami untuk informasi keanggotaan dan program', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Asosiasi Profesi Indonesia. Hak Cipta Dilindungi.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
