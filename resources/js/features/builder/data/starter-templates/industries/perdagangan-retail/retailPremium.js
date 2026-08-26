/**
 * Retail Premium Boutique — Premium indigo split, luxury retail
 * Starter template for premium retail boutiques with curated selection.
 */
export default {
  id: 'retail-premium',
  name: 'Retail Premium Boutique',
  description: 'Template retail premium kelas atas dengan split indigo hero, kurasi produk pilihan, dan pengalaman belanja yang eksklusif — mewah dan eksklusif.',
  thumbnail: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Boutique', 'Luxury', 'Curated', 'Exclusive'],
  theme: {
    primaryColor: '#7c3aed',
    secondaryColor: '#f5f3ff',
    accentColor: '#8b5cf6',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#ede9fe',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['scale-in', 'hover-glow', 'fade-up', 'slide-right'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'PRESTIGE RETAIL', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0f172a', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Shop Premium', href: '#products', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: '✦ Premium Selection — Kurasi Terbaik', variant: 'premium', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Di Sini Anda Menemukan Yang Terbaik', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Koleksi premium yang dikurasi dari brand-brand terpilih dunia dan lokal terbaik untuk pelanggan yang menghargai kualitas.', fontSize: '18px', color: '#e0e7ff', align: 'left', lineHeight: '1.8', maxWidth: '540px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Eksplor Koleksi', href: '#products', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#7c3aed', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop', alt: 'Premium Boutique', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Kepercayaan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Dipercaya Pelanggan Premium', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang menggambarkan kepercayaan dan pertumbuhan pelanggan setia', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🛍️ Koleksi Pilihan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Koleksi Pilihan Prestige', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Produk premium yang dikurasi dengan teliti untuk Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Klien', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Kata Klien Premium Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni dari pelanggan premium yang menghargai kualitas', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'clients', type: 'clients', layout: 'clients-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🤝 Brand Partner', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Brand Partner Eksklusif', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Kemitraan eksklusif dengan brand-brand ternama dunia', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Layanan Premium', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Layanan Pembelian Premium', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pengalaman belanja yangpersonal dan eksklusif untuk Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Personal Shopping', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Personal Shopping Service', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Layanan personal shopper untuk memenuhi kebutuhan gaya Anda', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Prestige Retail Indonesia. Excellence in Every Product.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
