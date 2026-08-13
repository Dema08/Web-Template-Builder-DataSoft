/**
 * Manufacturing Modern Process — Split light, process-centric
 * Starter template for modern manufacturing SMEs with process showcase.
 */
export default {
  id: 'manufacturing-modern',
  name: 'Manufacturing Modern Process',
  description: 'Template manufaktur modern dengan split-light hero, proses produksi step-by-step, dan katalog produk yang menonjol.',
  thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80',
  tags: ['Modern', 'Process', 'Light', 'SME'],
  theme: { primaryColor: '#2563eb', dark: false },
  animations: ['fade-in', 'slide-right', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
      { id: 'logo', type: 'heading', props: { content: 'MAJU INDUSTRI', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#1d4ed8' } },
      { id: 'cta', type: 'button', props: { label: 'Minta Penawaran', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-02', components: [
      { id: 'title', type: 'heading', props: { content: 'Produksi Tepat, Pengiriman Tepat Waktu', level: 'h1', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Didukung mesin CNC terkini dan tenaga ahli berpengalaman untuk kebutuhan manufaktur komponen presisi Anda.', fontSize: '16px', color: '#64748b', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Konsultasi Produksi', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#2563eb', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop', alt: 'Factory', width: '100%', height: '360px', objectFit: 'cover' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Produk & Komponen Unggulan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 't', type: 'heading', props: { content: 'Proses Produksi & QC', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kapasitas & Hasil Produksi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kirim Spesifikasi Produk Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 PT Maju Industri Indonesia.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
