/**
 * Dairy Farmer Network Hub — Dark hero, supply chain focus
 * Starter template for dairy farmer network cooperatives with dark hero focus.
 */
export default {
  id: 'dairy-farmer-network',
  name: 'Dairy Farmer Network Hub',
  description: 'Template jaringan peternak susu dengan dark hero tegas, peta sentra produksi, proses rantai pasok, dan galeri peternakan.',
  thumbnail: 'https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?w=800&auto=format&fit=crop&q=80',
  tags: ['Farmers', 'Network', 'Supply Chain', 'Community'],
  theme: { primaryColor: '#1e293b', dark: true },
  animations: ['slide-right', 'fade-up', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
      { id: 'logo', type: 'heading', props: { content: 'JARINGAN PETERNAK SUSU NUSANTARA', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#1e293b' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🐄 Menghubungkan 5.000+ Peternak Lokal', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Platform Koperasi Susu Untuk Peternak Indonesia', level: 'h1', fontSize: '50px', fontWeight: '900', color: '#ffffff', align: 'center' } },
      { id: 'desc', type: 'text', props: { content: 'Ekosistem terintegrasi: pendampingan peternak, kumpul susu, pengolahan, dan pemasaran langsung ke industri F&B nasional.', fontSize: '18px', color: '#e2e8f0', align: 'center' } },
      { id: 'btn', type: 'button', props: { label: 'Bergabung Sebagai Peternak Mitra', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: '#10b981', color: '#ffffff', shadow: 'lg', fontSize: '15px', fontWeight: '600' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 't', type: 'heading', props: { content: 'Ekosistem Peternak Susu Nusantara', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 't', type: 'heading', props: { content: 'Program Dukungan Peternak', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-03', components: [
      { id: 't', type: 'heading', props: { content: 'Sentra Peternakan Mitra', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 't', type: 'heading', props: { content: 'Daftar Sebagai Peternak Mitra', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Jaringan Peternak Susu Nusantara. Empowering Farmers.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
    ]},
  ],
};
