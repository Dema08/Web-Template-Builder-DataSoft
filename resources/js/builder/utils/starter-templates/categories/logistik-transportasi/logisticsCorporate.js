/**
 * Logistics Corporate Express — Full ecosystem, trust signals
 * Starter template for large logistics companies with fleet, coverage, and B2B focus.
 */
export default {
  id: 'logistics-corporate',
  name: 'Logistics Corporate Express',
  description: 'Template penuh untuk perusahaan logistik besar: statistik armada, jangkauan peta, layanan lengkap, dan klien trust signal.',
  thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
  tags: ['Corporate', 'Fleet', 'Supply Chain', 'B2B'],
  theme: { primaryColor: '#2563eb', dark: false },
  animations: ['fade-up', 'counter-up', 'logo-carousel'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'TRANSGO LOGISTICS', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#1e293b' } },
      { id: 'cta', type: 'button', props: { label: 'Lacak Kiriman', href: '#tracking', variant: 'primary', background: '#2563eb', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🚚 Jaringan Nasional & Internasional', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Solusi Logistik Terintegrasi Untuk Bisnis Skala Nasional', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Armada modern, pelacakan real-time, dan jaringan gudang di 50+ kota Indonesia. Pengiriman tepat waktu dijamin.', fontSize: '18px', color: '#bfdbfe', align: 'center' } },
      { id: 'btn1', type: 'button', props: { label: 'Cek Tarif Pengiriman', href: '#services', variant: 'primary', background: '#ffffff', color: '#1d4ed8' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kapasitas & Jangkauan Operasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'fleet', type: 'fleet', layout: 'fleet-01', components: [
      { id: 't', type: 'heading', props: { content: 'Armada Kendaraan & Fasilitas', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 't', type: 'heading', props: { content: 'Layanan Pengiriman & Pergudangan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'coverage', type: 'coverage', layout: 'coverage-01', components: [
      { id: 't', type: 'heading', props: { content: 'Area Jangkauan Distribusi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'clients', type: 'clients', layout: 'clients-01', components: [
      { id: 't', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Konsultasikan Kebutuhan Logistik Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 TransGo Logistics Indonesia.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
