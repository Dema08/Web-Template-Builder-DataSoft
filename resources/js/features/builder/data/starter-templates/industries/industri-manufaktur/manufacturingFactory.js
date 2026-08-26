/**
 * Manufacturing Factory Heavy — Premium dark industrial
 * Starter template for heavy industry manufacturers with ISO certifications.
 */
export default {
  id: 'manufacturing-factory',
  name: 'Factory Corporate Heavy',
  description: 'Template industri berat premium dengan dark hero tegas, katalog produksi, sertifikasi ISO, dan RFQ form langsung di halaman utama — untuk pabrik dan manufaktur skala besar.',
  thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
  tags: ['Factory', 'Heavy Industry', 'ISO', 'B2B', 'Dark'],
  theme: {
    primaryColor: '#334155',
    secondaryColor: '#1e293b',
    accentColor: '#f59e0b',
    dark: true,
    surface: '#1e293b',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#475569',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'scroll-reveal', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'NUSANTARA INDUSTRIAL', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#f59e0b', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Request RFQ', href: '#contact', variant: 'premium', size: 'small', radius: 'md', background: '#f59e0b', color: '#0f172a', shadow: 'sm', fontSize: '13px', fontWeight: '700' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🏭 ISO 9001:2015 Certified', variant: 'premium', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Manufaktur Presisi Tinggi, Standar Mutu Internasional', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Kapasitas produksi 50.000 unit/bulan didukung otomatisasi pabrik CNC dan sistem quality control berlapis.', fontSize: '19px', color: '#cbd5e1', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Kapasitas Produksi', href: '#products', variant: 'premium', size: 'large', radius: 'md', background: '#f59e0b', color: '#0f172a', shadow: 'lg', fontSize: '16px', fontWeight: '700', letterSpacing: '0.02em' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Produksi & Kinerja', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produksi & Kinerja Operasional', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kinerja operasional yang membuktikan keandalan dan konsistensi', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 'badge', type: 'badge', props: { content: '⚙️ Layanan Manufaktur', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Layanan Manufaktur Terpadu', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jasa manufaktur komprehensif untuk kebutuhan industri Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📦 Katalog Produksi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Katalog Hasil Manufaktur Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Produk-produk unggulan yang tersedia untuk pesanan besar', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🏅 Sertifikasi Mutu', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Sertifikasi Mutu & Keselamatan Kerja', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Komitmen terhadap standar mutu dan keselamatan kerja terbaik', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Fasilitas Pabrik', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Fasilitas Pabrik & Kapasitas', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Pabrik terpadu dengan area produksi 25.000 m2, dilengkapi mesin CNC 5-axis, robot welding, dan sistem ERP untuk kontrol produksi yang presisi.', fontSize: '17px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '640px', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Fasilitas', href: '#', variant: 'primary', size: 'medium', radius: 'md', background: '#334155', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Kirim RFQ', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kirim Permintaan Penawaran (RFQ)', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kirim spesifikasi teknis Anda, dapatkan penawaran terbaik dalam 24 jam', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 PT Nusantara Industrial Tbk. Precision Manufacturing.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
