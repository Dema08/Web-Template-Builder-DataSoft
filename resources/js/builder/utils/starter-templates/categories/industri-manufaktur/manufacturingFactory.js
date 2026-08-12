/**
 * Factory Corporate — Dark, heavy industrial
 * Starter template for heavy industry manufacturers with ISO certifications.
 */
export default {
  id: 'manufacturing-factory',
  name: 'Factory Corporate Heavy',
  description: 'Template industri berat dengan dark hero, katalog produksi, sertifikasi ISO, dan RFQ form langsung di halaman utama.',
  thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
  tags: ['Factory', 'Heavy Industry', 'ISO', 'B2B'],
  theme: { primaryColor: '#334155', dark: true },
  animations: ['fade-up', 'counter-up', 'scroll-reveal'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'NUSANTARA INDUSTRIAL', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#334155' } },
      { id: 'cta', type: 'button', props: { label: 'Request RFQ', href: '#contact', variant: 'primary', background: '#334155', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🏭 ISO 9001:2015 Certified', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Manufaktur Presisi Tinggi, Standar Mutu Internasional', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Kapasitas produksi 50.000 unit/bulan didukung otomatisasi pabrik CNC dan sistem quality control berlapis.', fontSize: '18px', color: '#cbd5e1', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Kapasitas Produksi', href: '#products', variant: 'primary', background: '#f59e0b', color: '#0f172a' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Katalog Hasil Manufaktur Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
      { id: 't', type: 'heading', props: { content: 'Sertifikasi Mutu & Keselamatan Kerja', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 't', type: 'heading', props: { content: 'Fasilitas Pabrik & Kapasitas', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Produksi & Kinerja Operasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Kirim Permintaan Penawaran (RFQ)', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 PT Nusantara Industrial Tbk. Precision Manufacturing.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
