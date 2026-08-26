/**
 * Community Hub — Premium warm & accessible
 * Starter template for community organizations with welcoming design.
 */
export default {
  id: 'org-community',
  name: 'Community Hub',
  description: 'Template komunitas premium yang hangat dan terbuka dengan hero putih bersih, visi-misi, kepemimpinan, dan ajakan bergabung — ramah dan inklusif.',
  thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80',
  tags: ['Community', 'Welcoming', 'Membership', 'Social', 'Premium'],
  theme: {
    primaryColor: '#0284c7',
    secondaryColor: '#f0f9ff',
    accentColor: '#0ea5e9',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e0f2fe',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-in', 'hover-lift', 'slide-up', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'KOMUNITAS INDONESIA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0369a1', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Gabung Sekarang', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0284c7', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'badge', type: 'badge', props: { content: '🤝 Komunitas Terbuka Untuk Semua', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Bersama Kita Lebih Kuat, Lebih Bermakna', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Wadah bertemunya individu-individu berdedikasi yang bersatu untuk menciptakan perubahan positif bagi masyarakat Indonesia.', fontSize: '19px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Pelajari Komunitas Kami', href: '#about', variant: 'primary', size: 'large', radius: 'full', background: '#0284c7', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Dampak Komunitas', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dampak Yang Kami Ciptakan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang menggambarkan dampak positif komunitas kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tentang Komunitas', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Tentang Komunitas', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Komunitas Indonesia adalah wadah untuk orang-orang yang ingin berkontribusi positively bagi masyarakat. Kami percaya bahwa perubahan besar dimulai dari aksi kecil — dan bersama, kita bisa mencapainya.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🎯 Visi & Misi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Visi & Misi Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Arah dan tujuan yang menjadi kompas kegiatan komunitas', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Anggota', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Anggota Komunitas', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kisah dan pengalaman anggota dalam komunitas kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👥 Pengurus & Relawan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pengurus & Relawan Aktif', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Orang-orang hebat yang menggerakkan komunitas ini', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Hubungi Sekretariat', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Hubungi Sekretariat', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim kami siap membantu dan menjawab pertanyaan Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Komunitas Indonesia. Bersatu Untuk Negeri.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
