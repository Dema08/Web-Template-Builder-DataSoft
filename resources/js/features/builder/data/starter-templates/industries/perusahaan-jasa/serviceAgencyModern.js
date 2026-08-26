/**
 * Agency Modern Studio — Premium refined, gallery-forward
 * Starter template for modern creative agencies with portfolio showcase.
 */
export default {
  id: 'service-agency-modern',
  name: 'Agency Modern Studio',
  description: 'Template agensi modern premium dengan split hero gradient, portfolio galeri eksklusif, dan pricing transparan — cocok untuk agensi digital & kreatif yang ingin tampil beda.',
  thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80',
  tags: ['Agency', 'Creative', 'Portfolio', 'Modern', 'Premium'],
  theme: {
    primaryColor: '#7c3aed',
    secondaryColor: '#f8fafc',
    accentColor: '#ec4899',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e2e8f0',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'slide-left', 'hover-lift', 'scale-in'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'STUDIO PRIMA', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#7c3aed', letterSpacing: '-0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Mulai Proyek', href: '#contact', variant: 'gradient', size: 'medium', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'md', fontSize: '14px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '🏆 Top Agency Indonesia 2026', variant: 'premium', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Kami Mengubah Ide Bisnis Anda Menjadi Pengalaman Digital Yang Luar Biasa', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Agensi full-service dengan spesialisasi branding, web development, dan digital marketing untuk bisnis ambisius.', fontSize: '19px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '560px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Portfolio Kami', href: '#gallery', variant: 'gradient', size: 'large', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'btn2', type: 'button', props: { label: 'Konsultasi Gratis', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: '#ffffff', color: '#7c3aed', shadow: 'none', fontSize: '16px', fontWeight: '600', borderWidth: '2px', borderColor: '#7c3aed' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop', alt: 'Agency Team', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Layanan Unggulan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Layanan Unggulan Studio Prima', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Solusi kreatif lengkap untuk mengangkat brand Anda ke level berikutnya', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Mengapa Studio Prima', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Mengapa Studio Prima?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Kami menggabungkan strategi, desain, dan teknologi untuk menghasilkan karya yang tidak hanya indah dipandang — tapi juga efektif dalam mencapai tujuan bisnis Anda.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Pencapaian Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Hasil Yang Terbukti', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang menggambarkan dedikasi dan kepercayaan klien kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'gallery', type: 'gallery', layout: 'gallery-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🖼️ Portofolio Proyek', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Portofolio Proyek Terbaik', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kumpulan karya terbaik yang telah kami realisasikan untuk klien terpercaya', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Klien', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya Oleh Perusahaan Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Apa kata mereka tentang pengalaman bekerja bersama Studio Prima', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'pricing', type: 'pricing', layout: 'pricing-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💎 Paket Harga', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Paket Harga Transparant', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pilih paket yang paling sesuai dengan kebutuhan dan skala proyek Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Mulai Diskusi', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Mulai Diskusi Proyek Anda', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Ceritakan kebutuhan Anda, tim kami siap membantu mewujudkannya', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Studio Prima. We Build Digital Excellence.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
      { id: 'social', type: 'social', props: { platforms: ['instagram', 'facebook', 'twitter'], size: 'medium' } },
    ]},
  ],
};
