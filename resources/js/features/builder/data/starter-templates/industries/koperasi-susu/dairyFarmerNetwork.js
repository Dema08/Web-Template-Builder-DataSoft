/**
 * Dairy Farmer Network Hub — Premium dark hero, supply chain focus
 * Starter template for dairy farmer network cooperatives with dark hero focus.
 */
export default {
  id: 'dairy-farmer-network',
  name: 'Dairy Farmer Network Hub',
  description: 'Template jaringan peternak susu premium dengan dark hero tegas, peta sentra produksi, proses rantai pasok, dan galeri peternakan — kuat dan terstruktur.',
  thumbnail: 'https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?w=800&auto=format&fit=crop&q=80',
  tags: ['Farmers', 'Network', 'Supply Chain', 'Community', 'Premium'],
  theme: {
    primaryColor: '#1e293b',
    secondaryColor: '#0f172a',
    accentColor: '#10b981',
    dark: true,
    surface: '#1e293b',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#334155',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['slide-right', 'fade-up', 'counter-up', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'JARINGAN PETERNAK SUSU NUSANTARA', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#10b981', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Bergabung Sebagai Peternak Mitra', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#10b981', color: '#ffffff', shadow: 'md', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🐄 Menghubungkan 5.000+ Peternak Lokal', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Platform Koperasi Susu Untuk Peternak Indonesia', level: 'h1', fontSize: '50px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Ekosistem terintegrasi: pendampingan peternak, kumpul susu, pengolahan, dan pemasaran langsung ke industri F&B nasional.', fontSize: '19px', color: '#e2e8f0', align: 'center', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn', type: 'button', props: { label: 'Bergabung Sebagai Peternak Mitra', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: '#10b981', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Ekosistem Peternak', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Ekosistem Peternak Susu Nusantara', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jaringan yang menghubungkan peternak dengan pasar secara adil dan berkelanjutan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🤝 Program Dukungan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Program Dukungan Peternak', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pendampingan lengkap untuk meningkatkan produktivitas dan kesejahteraan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Rantai Pasok', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Rantai Pasok Terintegrasi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Dari pembibitan sapi, pembinaan peternak, pengumpulan susu, pengolahan, hingga distribusi ke pabrik F&B — semua tersistem dalam satu ekosistem yang adil dan berkelanjutan.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Peternak', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Suara dari Peternak Mitra', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kisah sukses peternak yang telah berkembang bersama jaringan kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📸 Sentra Peternakan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Sentra Peternakan Mitra', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Galeri kegiatan dan fasilitas peternakan mitra kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Daftar Sebagai Mitra', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Daftar Sebagai Peternak Mitra', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Bergabung dengan ribuan peternak yang telah merasakan manfaat jaringan kami', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Jaringan Peternak Susu Nusantara. Empowering Farmers.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
      { id: 'social', type: 'social', props: { platforms: ['instagram', 'facebook', 'twitter'], size: 'medium' } },
    ]},
  ],
};
