/**
 * Professional Association Portal — Gradient purple, formal authority
 * Starter template for professional associations with formal structure.
 */
export default {
  id: 'org-association',
  name: 'Professional Association Portal',
  description: 'Template asosiasi profesi resmi dengan hero otoritatif, timeline sejarah, pengurus, dan manfaat keanggotaan terstruktur.',
  thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=80',
  tags: ['Association', 'Formal', 'Professional', 'Membership'],
  theme: { primaryColor: '#4f46e5', dark: false },
  animations: ['fade-up', 'slide-right', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'ASOSIASI PROFESI INDONESIA', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#0f172a' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-04', components: [
      { id: 'title', type: 'heading', props: { content: 'Standar Profesi Tertinggi Untuk Indonesia', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Menghimpun lebih dari 25.000 profesional bersertifikat dalam satu wadah yang kuat untuk kemajuan profesi dan bangsa.', fontSize: '18px', color: '#e0e7ff', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Daftarkan Keanggotaan', href: '#contact', variant: 'primary', background: '#ffffff', color: '#4338ca' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 't', type: 'heading', props: { content: 'Sejarah & Peran Asosiasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
    ]},
    { id: 'vision', type: 'vision', layout: 'vision-01', components: [
      { id: 't', type: 'heading', props: { content: 'Visi Strategis 2030', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
      { id: 't', type: 'heading', props: { content: 'Jejak Perjuangan Asosiasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 't', type: 'heading', props: { content: 'Dewan Pengurus Nasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Sekretariat Nasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Asosiasi Profesi Indonesia. Hak Cipta Dilindungi.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
