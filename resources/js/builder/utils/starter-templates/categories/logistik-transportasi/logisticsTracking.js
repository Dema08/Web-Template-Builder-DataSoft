/**
 * Logistics Tracking Focus — Premium dark tech, tracking UI prominent
 * Starter template for tech-forward logistics companies emphasizing real-time tracking.
 */
export default {
  id: 'logistics-tracking',
  name: 'Logistics Tracking Focus',
  description: 'Template tech-forward premium dengan dark hero dan tracking UI sebagai inti — untuk perusahaan logistik berbasis teknologi yang ingin menonjolkan inovasi.',
  thumbnail: 'https://images.unsplash.com/photo-1565793979680-9f10ae673e58?w=800&auto=format&fit=crop&q=80',
  tags: ['Technology', 'Tracking', 'Real-Time', 'Dark Tech', 'Innovation'],
  theme: {
    primaryColor: '#0ea5e9',
    secondaryColor: '#082f49',
    accentColor: '#38bdf8',
    dark: true,
    surface: '#0c4a6e',
    text: '#f0f9ff',
    muted: '#7dd3fc',
    border: '#0e7490',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-in', 'counter-up', 'scroll-reveal', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'TRACKFAST ID', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#0ea5e9', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Track Now', href: '#', variant: 'primary', size: 'small', radius: 'full', background: '#0ea5e9', color: '#ffffff', shadow: 'md', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-03', components: [
      { id: 'badge', type: 'badge', props: { content: '⚡ Real-Time Visibility Platform', variant: 'glass', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Pantau Kiriman Anda Kapanpun, Dimanapun', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Platform pelacakan kiriman berbasis AI dengan update posisi setiap 30 detik dan notifikasi otomatis WhatsApp.', fontSize: '19px', color: '#e2e8f0', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Mulai Lacak Sekarang', href: '#', variant: 'primary', size: 'large', radius: 'full', background: '#0ea5e9', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Platform Performance', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Platform Terpercaya — Datanya Bicara', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Performa platform yang membuktikan keandalan dan skala operasional', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 'badge', type: 'badge', props: { content: '⚙️ Fitur Unggulan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Fitur Pelacakan & Distribusi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Teknologi terkini untuk visibilitas penuh atas supply chain Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Teknologi Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Teknologi TrackFast di Balik Layar', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Platform kami dibangun dengan arsitektur microservices, real-time streaming, dan AI prediction engine yang dapat menangani 1 juta+ event tracking per hari tanpa hambatan.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'fleet', type: 'fleet', layout: 'fleet-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🚛 Armada Berteknologi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Armada Berteknologi GPS-IoT', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kendaraan yang dilengkapi sensor IoT dan GPS untuk tracking akurat', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Pengguna', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya oleh Pelaku Usaha', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Apa kata mereka tentang pengalaman menggunakan TrackFast', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 FAQ', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pertanyaan Seputar Pelacakan & Pengiriman', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jawaban cepat untuk pertanyaan yang paling sering diajukan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Hubungi Tim Support', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Hubungi Tim Support 24/7', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim support kami siap membantu Anda kapan saja', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 TrackFast ID. Powered by IoT & AI Technology.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
