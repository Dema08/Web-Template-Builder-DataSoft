/**
 * Agency Modern Studio — Soft split hero, gallery-forward
 * Starter template for modern creative agencies with portfolio showcase.
 */
export default {
  id: 'service-agency-modern',
  name: 'Agency Modern Studio',
  description: 'Template agensi modern dengan split hero gradient, portfolio galeri, dan pricing transparent — cocok untuk agensi digital & kreatif.',
  thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80',
  tags: ['Agency', 'Creative', 'Portfolio', 'Modern'],
  theme: { primaryColor: '#7c3aed', dark: false },
  animations: ['slide-left', 'fade-up', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
      { id: 'logo', type: 'heading', props: { content: 'STUDIO PRIMA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#7c3aed' } },
      { id: 'cta', type: 'button', props: { label: 'Mulai Proyek', href: '#contact', variant: 'gradient', size: 'medium', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'md', fontSize: '14px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '🏆 Top Agency Indonesia 2026', variant: 'premium', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Kami Mengubah Ide Bisnis Anda Menjadi Pengalaman Digital Yang Luar Biasa', level: 'h1', fontSize: '46px', fontWeight: '800', color: '#0f172a', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Agensi full-service dengan spesialisasi branding, web development, dan digital marketing untuk bisnis ambisius.', fontSize: '18px', color: '#64748b', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Portfolio Kami', href: '#gallery', variant: 'gradient', size: 'large', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'lg', fontSize: '15px', fontWeight: '600' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop', alt: 'Agency Team', width: '100%', height: '380px', objectFit: 'cover' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 't', type: 'heading', props: { content: 'Layanan Unggulan Studio Prima', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 't', type: 'heading', props: { content: 'Mengapa Studio Prima?', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-03', components: [
      { id: 't', type: 'heading', props: { content: 'Portofolio Proyek Terbaik', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'pricing', type: 'pricing', layout: 'pricing-01', components: [
      { id: 't', type: 'heading', props: { content: 'Paket Harga Transparant', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Mulai Diskusi Proyek Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Studio Prima. We Build Digital Excellence.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
    ]},
  ],
};
