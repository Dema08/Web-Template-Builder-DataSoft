/**
 * Community Hub — Clean white, warm & accessible
 * Starter template for community organizations with welcoming design.
 */
export default {
  id: 'org-community',
  name: 'Community Hub',
  description: 'Template komunitas yang hangat dan terbuka dengan hero putih bersih, visi-misi, kepemimpinan, dan ajakan bergabung.',
  thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80',
  tags: ['Community', 'Welcoming', 'Membership', 'Social'],
  theme: { primaryColor: '#0284c7', dark: false },
  animations: ['fade-in', 'hover-lift', 'slide-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
      { id: 'logo', type: 'heading', props: { content: 'KOMUNITAS INDONESIA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0369a1' } },
      { id: 'cta', type: 'button', props: { label: 'Gabung Sekarang', href: '#contact', variant: 'primary', background: '#0284c7', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'title', type: 'heading', props: { content: 'Bersama Kita Lebih Kuat, Lebih Bermakna', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Wadah bertemunya individu-individu berdedikasi yang bersatu untuk menciptakan perubahan positif bagi masyarakat Indonesia.', fontSize: '18px', color: '#64748b', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Pelajari Komunitas Kami', href: '#about', variant: 'primary', background: '#0284c7', color: '#ffffff' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 't', type: 'heading', props: { content: 'Tentang Komunitas', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 't', type: 'heading', props: { content: 'Visi & Misi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 't', type: 'heading', props: { content: 'Pengurus & Relawan Aktif', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Hubungi Sekretariat', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Komunitas Indonesia. Bersatu Untuk Negeri.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
