/**
 * Service Professional Classic — Premium refined, trust-first
 * Starter template for professional service companies with structured offerings.
 */
export default {
  id: 'service-professional',
  name: 'Service Professional Classic',
  description: 'Layout profesional premium dengan hero refined, layanan terstruktur, pricing paket, dan kontak yang mudah diakses — cocok untuk perusahaan jasa yang ingin tampil terpercaya.',
  thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80',
  tags: ['Professional', 'Classic', 'Services', 'Pricing', 'Trust'],
  theme: {
    primaryColor: '#0f172a',
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
  animations: ['fade-up', 'scale-in', 'hover-lift', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'JASA PROFESIONAL ID', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.01em' } },
      { id: 'cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#0f172a', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-07', components: [
      { id: 'badge', type: 'badge', props: { content: '✔ Layanan Profesional Terpercaya Sejak 2010', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Layanan Profesional Terpercaya Untuk Kebutuhan Bisnis Anda', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Didukung tenaga ahli bersertifikasi, proses terstruktur, dan jaminan kepuasan 100% atau uang kembali.', fontSize: '20px', color: '#64748b', align: 'center', lineHeight: '1.7', maxWidth: '640px', margin: '0 auto 32px auto' } },
      { id: 'btn1', type: 'button', props: { label: 'Lihat Layanan', href: '#services', variant: 'primary', size: 'large', radius: 'md', background: '#0f172a', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'btn2', type: 'button', props: { label: 'Hubungi Kami', href: '#contact', variant: 'outline', size: 'large', radius: 'md', background: '#ffffff', color: '#0f172a', shadow: 'none', fontSize: '16px', fontWeight: '600', borderWidth: '2px', borderColor: '#0f172a' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Angka Kepercayaan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya Ratusan Perusahaan Di Indonesia', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Statistik yang mencerminkan komitmen kami terhadap kualitas dan hasil terukur', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
      { id: 'card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's1-value', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
          { id: 's1-label', type: 'text', props: { content: 'Proyek Selesai', fontSize: '15px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
        ]},
      { id: 'card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's2-value', type: 'heading', props: { content: '98%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
          { id: 's2-label', type: 'text', props: { content: 'Kepuasan Klien', fontSize: '15px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
        ]},
      { id: 'card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's3-value', type: 'heading', props: { content: '15+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
          { id: 's3-label', type: 'text', props: { content: 'Tahun Pengalaman', fontSize: '15px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
        ]},
      { id: 'card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's4-value', type: 'heading', props: { content: '24/7', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
          { id: 's4-label', type: 'text', props: { content: 'Dukungan Support', fontSize: '15px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
        ]},
    ]},
    { id: 'services', type: 'services', layout: 'services-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Layanan Unggulan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Yang Bisa Kami Kerjakan Untuk Anda', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Solusi lengkap yang disesuaikan dengan kebutuhan spesifik bisnis Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-01', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tentang Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kenapa Klien Memilih Jasa Profesional ID', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Kami menggabungkan keahlian teknis, standar operasional profesional, dan komitmen layanan prima untuk menghasilkan solusi yang tidak hanya memenuhi ekspektasi — tapi melampauinya.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'pricing', type: 'pricing', layout: 'pricing-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💎 Paket Layanan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pilih Paket Sesuai Kebutuhan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Harga transparan, tanpa biaya tersembunyi — investasi terbaik untuk pertumbuhan bisnis', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Klien', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Mereka Tentang Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni nyata dari klien yang telah merasakan manfaat layanan kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Hubungi Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Mulai Konsultasi Gratis Hari Ini', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Tim kami siap membantu menganalisis kebutuhan Anda dan menyusun solusi terbaik', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Jasa Profesional Indonesia. Hak Cipta Dilindungi.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
