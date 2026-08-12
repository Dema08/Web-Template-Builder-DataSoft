/**
 * Retail Premium Boutique — Indigo split, luxury retail
 * Starter template for premium retail boutiques with curated selection.
 */
export default {
  id: 'retail-premium',
  name: 'Retail Premium Boutique',
  description: 'Template retail premium kelas atas dengan split indigo hero, kurasi produk pilihan, dan pengalaman belanja yang eksklusif.',
  thumbnail: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Boutique', 'Luxury', 'Curated'],
  theme: { primaryColor: '#7c3aed', dark: false },
  animations: ['scale-in', 'hover-glow', 'fade-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'PRESTIGE RETAIL', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
      { id: 'cta', type: 'button', props: { label: 'Shop Premium', href: '#products', variant: 'primary', background: '#7c3aed', color: '#ffffff' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: '✦ Premium Selection — Kurasi Terbaik', variant: 'primary' } },
      { id: 'title', type: 'heading', props: { content: 'Di Sini Anda Menemukan Yang Terbaik', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left' } },
      { id: 'desc', type: 'text', props: { content: 'Koleksi premium yang dikurasi dari brand-brand terpilih dunia dan lokal terbaik untuk pelanggan yang menghargai kualitas.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
      { id: 'btn', type: 'button', props: { label: 'Eksplor Koleksi', href: '#products', variant: 'primary', background: '#ffffff', color: '#7c3aed' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&auto=format&fit=crop', alt: 'Premium Boutique', width: '100%', height: '380px', objectFit: 'cover' } },
    ]},
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 't', type: 'heading', props: { content: 'Koleksi Pilihan Prestige', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'clients', type: 'clients', layout: 'clients-01', components: [
      { id: 't', type: 'heading', props: { content: 'Brand Partner Eksklusif', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-04', components: [
      { id: 't', type: 'heading', props: { content: 'Layanan Pembelian Premium', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-02', components: [
      { id: 't', type: 'heading', props: { content: 'Personal Shopping Service', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Prestige Retail Indonesia. Excellence in Every Product.', fontSize: '14px', color: '#cbd5e1' } },
    ]},
  ],
};
