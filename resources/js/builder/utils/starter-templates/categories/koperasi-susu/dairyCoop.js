/**
 * Koperasi Susu Perah Fresh — Clean white, farm-fresh narrative
 * Starter template for dairy cooperatives with farm-to-table focus.
 */
export default {
  id: 'dairy-coop',
  name: 'Koperasi Susu Perah Fresh',
  description: 'Template koperasi susu dengan hero bersih, jaringan peternak, proses pasteurisasi, dan distribusi susu segar berkualitas.',
  thumbnail: 'https://images.unsplash.com/photo-1527153857715-33282435658a?w=800&auto=format&fit=crop&q=80',
  tags: ['Dairy', 'Fresh Milk', 'Farmer Network', 'Quality'],
  theme: { primaryColor: '#0d9488', dark: false },
  animations: ['fade-in', 'counter-up', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
      { id: 'logo', type: 'heading', props: { content: 'KOPTAN SUSU MURNI', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#115e59' } },
      { id: 'cta', type: 'button', props: { label: 'Kemitraan Peternak', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#0d9488', color: '#ffffff', shadow: 'md', fontSize: '14px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'title', type: 'heading', props: { content: 'Susu Segar Murni Dari Peternak Lokal Pilihan', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Mengintegrasikan 2.500+ peternak sapi perah dengan standar pasteurisasi higienis dan rantai dingin modern dari ladang ke meja makan Anda.', fontSize: '18px', color: '#64748b', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Pelajari Program Kemitraan', href: '#about', variant: 'primary', size: 'large', radius: 'full', background: '#0d9488', color: '#ffffff', shadow: 'md', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Kapasitas Produksi & Jaringan Peternak', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 't', type: 'heading', props: { content: 'Produk Olahan Susu Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 't', type: 'heading', props: { content: 'Proses Pasteurisasi & Quality Control', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-01', components: [
      { id: 't', type: 'heading', props: { content: 'Pos Penampungan & Kemitraan Peternak', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-01', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Koperasi Peternak Susu Murni Indonesia. Farm to Table.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    ]},
  ],
};
