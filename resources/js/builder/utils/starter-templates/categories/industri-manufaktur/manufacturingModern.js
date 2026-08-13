/**
 * Manufacturing Modern Process — Premium light split, process-centric
 * Starter template for modern manufacturing SMEs with process showcase.
 */
export default {
  id: 'manufacturing-modern',
  name: 'Manufacturing Modern Process',
  description: 'Template manufaktur modern premium dengan split-light hero, proses produksi step-by-step, dan katalog produk yang menonjol — untuk industri manufaktur yang ingin tampil modern.',
  thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80',
  tags: ['Modern', 'Process', 'Light', 'SME', 'Premium'],
  theme: {
    primaryColor: '#2563eb',
    secondaryColor: '#f8fafc',
    accentColor: '#3b82f6',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e2e8f0',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'slide-right', 'hover-lift', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'MAJU INDUSTRI', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#1d4ed8', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Minta Penawaran', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🏭 Manufaktur Presisi Tinggi', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Produksi Tepat, Pengiriman Tepat Waktu', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Didukung mesin CNC terkini dan tenaga ahli berpengalaman untuk kebutuhan manufaktur komponen presisi Anda.', fontSize: '18px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '520px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Konsultasi Produksi', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop', alt: 'Factory', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Kapasitas Produksi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kapasitas & Kinerja Operasional', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka operasional yang mencerminkan keandalan dan konsistensi', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 'badge', type: 'badge', props: { content: '⚙️ Proses Produksi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Proses Produksi & Quality Control', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Standar mutu internasional di setiap tahapan produksi', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📦 Produk & Komponen', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produk & Komponen Unggulan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Katalog produk yang tersedia untuk pesanan grosir dan custom', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Fasilitas Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Fasilitas Pabrik & Kapasitas', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Pabrik seluas 12.000 m2 dengan 3 lini produksi CNC, presisi machining center, dan sistem quality control berlapis yang memastikan setiap produk yang keluar memenuhi standar tertinggi.', fontSize: '17px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Unduh Kapasitas Produksi', href: '#', variant: 'primary', size: 'medium', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🏅 Sertifikasi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Sertifikasi Mutu & Standar', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Komitmen terhadap standar mutu yang diakui secara internasional', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Kirim Permintaan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kirim Spesifikasi Produk Anda', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kami akan merespon dalam 1x24 jam dengan penawaran terbaik', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 PT Maju Industri Indonesia. Precision Manufacturing.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
