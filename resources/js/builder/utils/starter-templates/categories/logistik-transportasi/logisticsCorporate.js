/**
 * Logistics Corporate Express — Premium trust-forward, fleet & coverage
 * Starter template for large logistics companies with fleet, coverage, and B2B focus.
 */
export default {
  id: 'logistics-corporate',
  name: 'Logistics Corporate Express',
  description: 'Template premium untuk perusahaan logistik besar: statistik armada, jangkauan peta, layanan lengkap, dan klien trust signal — untuk perusahaan logistik nasional.',
  thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
  tags: ['Corporate', 'Fleet', 'Supply Chain', 'B2B', 'National'],
  theme: {
    primaryColor: '#2563eb',
    secondaryColor: '#eff6ff',
    accentColor: '#1d4ed8',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#dbeafe',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'logo-carousel', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'TRANSGO LOGISTICS', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#1e293b', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Lacak Kiriman', href: '#tracking', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🚚 Jaringan Nasional & Internasional', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Solusi Logistik Terintegrasi Untuk Bisnis Skala Nasional', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Armada modern, pelacakan real-time, dan jaringan gudang di 50+ kota Indonesia. Pengiriman tepat waktu dijamin.', fontSize: '19px', color: '#bfdbfe', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 32px 0' } },
      { id: 'btn1', type: 'button', props: { label: 'Cek Tarif Pengiriman', href: '#services', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#1d4ed8', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Kapasitas & Jangkauan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kapasitas & Jangkauan Operasional', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jaringan yang menjangkau seluruh Indonesia dan lintas batas', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Layanan Pengiriman', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Layanan Pengiriman & Pergudangan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Solusi logistik lengkap untuk semua kebutuhan pengiriman Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'fleet', type: 'fleet', layout: 'fleet-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🚛 Armada Modern', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Armada Kendaraan & Fasilitas', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Armada berteknologi tinggi yang siap mengirimkan barang Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Klien', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kepercayaan dari perusahaan besar yang telah mempercayakan logistik mereka', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'coverage', type: 'coverage', layout: 'coverage-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🗺️ Area Jangkauan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Area Jangkauan Distribusi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jaringan distribusi yang menjangkau seluruh Indonesia', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Konsultasikan Kebutuhan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Konsultasikan Kebutuhan Logistik Anda', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim kami siap membantu menyusun solusi logistik terbaik untuk bisnis Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 TransGo Logistics Indonesia.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
