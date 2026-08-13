/**
 * Logistics Tracking Focus — Dark tech, tracking UI prominent
 * Starter template for tech-forward logistics companies emphasizing real-time tracking.
 */
export default {
  id: 'logistics-tracking',
  name: 'Logistics Tracking Focus',
  description: 'Template tech-forward dengan dark hero dan statistik real-time sebagai inti — ideal untuk perusahaan yang menonjolkan teknologi pelacakan.',
  thumbnail: 'https://images.unsplash.com/photo-1565793979680-9f10ae673e58?w=800&auto=format&fit=crop&q=80',
  tags: ['Technology', 'Tracking', 'Real-Time', 'Dark Tech'],
  theme: { primaryColor: '#0ea5e9', dark: true },
  animations: ['fade-in', 'counter-up', 'scroll-reveal'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
      { id: 'logo', type: 'heading', props: { content: 'TRACKFAST ID', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0ea5e9' } },
      { id: 'cta', type: 'button', props: { label: 'Track Now', href: '#', variant: 'primary', size: 'small', radius: 'full', background: '#0ea5e9', color: '#ffffff', shadow: 'md', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-03', components: [
      { id: 'badge', type: 'badge', props: { content: '⚡ Real-Time Visibility Platform', variant: 'glass', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Pantau Kiriman Anda Kapanpun, Dimanapun', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Platform pelacakan kiriman berbasis AI dengan update posisi setiap 30 detik dan notifikasi otomatis WhatsApp.', fontSize: '18px', color: '#e2e8f0', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Mulai Lacak Sekarang', href: '#', variant: 'primary', size: 'large', radius: 'full', background: '#0ea5e9', color: '#ffffff', shadow: 'lg', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Platform Terpercaya — Datanya Bicara', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 't', type: 'heading', props: { content: 'Fitur Pelacakan & Distribusi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'fleet', type: 'fleet', layout: 'fleet-01', components: [
      { id: 't', type: 'heading', props: { content: 'Armada Berteknologi GPS-IoT', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 't', type: 'heading', props: { content: 'Pertanyaan Seputar Pelacakan & Pengiriman', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Hubungi Tim Support 24/7', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 TrackFast ID. Powered by IoT & AI Technology.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
