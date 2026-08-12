/**
 * UMKM Creative Premium — Bold, expressive, artisan
 * Starter template for artisan & creative UMKM businesses.
 * Premium UI/UX: rich gradients, glassmorphism, hover effects, and smooth animations.
 */
export default {
  id: 'umkm-creative',
  name: 'UMKM Creative Premium',
  description: 'Desain ekspresif dan premium untuk brand UMKM kreatif, artisan, dan seniman — tampil beda dengan gradient mewah, glassmorphism, dan animasi halus.',
  thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80',
  tags: ['Creative', 'Premium', 'Bold', 'Artisan', 'Gradient'],
  theme: { primaryColor: '#7c3aed', accent: '#ec4899', dark: false },
  animations: ['fade-up', 'scale-in', 'slide-right', 'hover-glow', 'counter-up'],
  sections: [
    // ============================================================
    // NAVBAR — Transparent, absolute, premium glass
    // ============================================================
    { id: 'nav', type: 'navbar', layout: 'navbar-04', components: [
      { id: 'logo', type: 'heading', props: { content: 'KREASI KITA', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.05em' } },
      { id: 'cta', type: 'button', props: { label: 'Mulai Berkreasi', href: '#contact', variant: 'gradient', size: 'medium', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'lg', fontSize: '14px', fontWeight: '700' } },
    ]},

    // ============================================================
    // HERO — Split layout, dark gradient, floating image
    // ============================================================
    { id: 'hero', type: 'hero', layout: 'hero-08', components: [
      { id: 'badge', type: 'badge', props: { content: '🎨 Koleksi Handmade 2026', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Ekspresikan Dirimu Lewat Produk Kreatif Lokal', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Dari tangan pengrajin kreatif Indonesia untuk jiwa-jiwa yang menghargai keunikan. Setiap karya adalah cerita, setiap detail adalah passion.', fontSize: '18px', color: '#c4b5fd', align: 'left', lineHeight: '1.8', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Eksplorasi Karya', href: '#gallery', variant: 'gradient', size: 'large', radius: 'full', background: '#ec4899', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop', alt: 'Creative Products', width: '100%', height: '480px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},

    // ============================================================
    // ABOUT — Story section with image
    // ============================================================
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Cerita Kami', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Kreativitas Tanpa Batas, Karya Tanpa Kompromi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Kami adalah kolektif pengrajin, desainer, dan seniman lokal yang percaya bahwa setiap produk handmade membawa jiwa dan cerita. Dari bahan pilihan hingga sentuhan akhir, setiap detail dikerjakan dengan cinta dan ketelitian.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Kenali Kami Lebih Dekat', href: '#services', variant: 'primary', size: 'medium', radius: 'full', background: '#7c3aed', color: '#ffffff', shadow: 'md', fontSize: '14px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&auto=format&fit=crop', alt: 'Artisan at work', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},

    // ============================================================
    // SERVICES — 3 premium cards with icons
    // ============================================================
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🛠️ Layanan Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Apa Yang Bisa Kami Buat Untuk Anda', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Solusi kreatif lengkap untuk kebutuhan personal dan bisnis Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
      { id: 'card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'glow', padding: '32px' },
        childrenComponents: [
          { id: 'c1-icon', type: 'icon', props: { icon: 'FaPalette', size: '40px', color: '#7c3aed', align: 'left', margin: '0 0 16px 0' } },
          { id: 'c1-title', type: 'heading', props: { content: 'Desain Custom', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'c1-desc', type: 'text', props: { content: 'Desain eksklusif yang dibuat khusus sesuai visi dan karakter brand Anda.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'glow', padding: '32px' },
        childrenComponents: [
          { id: 'c2-icon', type: 'icon', props: { icon: 'FaHands', size: '40px', color: '#ec4899', align: 'left', margin: '0 0 16px 0' } },
          { id: 'c2-title', type: 'heading', props: { content: 'Handmade Premium', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'c2-desc', type: 'text', props: { content: 'Produk handmade berkualitas tinggi dengan bahan pilihan dan detail presisi.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'glow', padding: '32px' },
        childrenComponents: [
          { id: 'c3-icon', type: 'icon', props: { icon: 'FaLightbulb', size: '40px', color: '#f59e0b', align: 'left', margin: '0 0 16px 0' } },
          { id: 'c3-title', type: 'heading', props: { content: 'Konsultasi Kreatif', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'c3-desc', type: 'text', props: { content: 'Pendampingan ide dan konsep kreatif untuk mengembangkan brand Anda.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
    ]},

    // ============================================================
    // PRODUCTS — 3 premium product cards
    // ============================================================
    { id: 'products', type: 'products', layout: 'products-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🛍️ Koleksi Unggulan', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Produk Paling Dicintai', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Karya terbaik yang paling banyak dipesan oleh pelanggan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
      { id: 'card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
        childrenComponents: [
          { id: 'p1-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop', alt: 'Produk Kerajinan', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
          { id: 'p1-title', type: 'heading', props: { content: 'Kerajinan Tangan Eksklusif', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0', padding: '20px 20px 0 20px' } },
          { id: 'p1-desc', type: 'text', props: { content: 'Kerajinan tangan unik dengan sentuhan artistik dan bahan premium.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '8px 0 20px 0', padding: '0 20px' } },
          { id: 'p1-btn', type: 'button', props: { label: 'Lihat Detail', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: '0 0 20px 20px' } },
        ]},
      { id: 'card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
        childrenComponents: [
          { id: 'p2-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop', alt: 'Produk Fashion', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
          { id: 'p2-title', type: 'heading', props: { content: 'Fashion Artisan', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0', padding: '20px 20px 0 20px' } },
          { id: 'p2-desc', type: 'text', props: { content: 'Koleksi fashion artisan dengan desain modern dan bahan berkualitas.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '8px 0 20px 0', padding: '0 20px' } },
          { id: 'p2-btn', type: 'button', props: { label: 'Lihat Detail', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: '0 0 20px 20px' } },
        ]},
      { id: 'card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
        childrenComponents: [
          { id: 'p3-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop', alt: 'Produk Dekorasi', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
          { id: 'p3-title', type: 'heading', props: { content: 'Dekorasi Rumah', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0', padding: '20px 20px 0 20px' } },
          { id: 'p3-desc', type: 'text', props: { content: 'Dekorasi rumah artistik yang menghadirkan kehangatan dan karakter.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '8px 0 20px 0', padding: '0 20px' } },
          { id: 'p3-btn', type: 'button', props: { label: 'Lihat Detail', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontSize: '13px', fontWeight: '700', margin: '0 0 20px 20px' } },
        ]},
    ]},

    // ============================================================
    // GALLERY — Dark premium grid
    // ============================================================
    { id: 'gallery', type: 'gallery', layout: 'gallery-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🖼️ Galeri Karya', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Portfolio Karya Terbaik', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Dokumentasi visual karya-karya terbaik yang telah kami buat', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 48px 0' } },
      { id: 'img-1', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
        childrenComponents: [
          { id: 'g1-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop', alt: 'Karya 1', width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px' } },
        ]},
      { id: 'img-2', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
        childrenComponents: [
          { id: 'g2-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop', alt: 'Karya 2', width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px' } },
        ]},
      { id: 'img-3', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
        childrenComponents: [
          { id: 'g3-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop', alt: 'Karya 3', width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px' } },
        ]},
      { id: 'img-4', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
        childrenComponents: [
          { id: 'g4-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&auto=format&fit=crop', alt: 'Karya 4', width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px' } },
        ]},
      { id: 'img-5', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
        childrenComponents: [
          { id: 'g5-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop', alt: 'Karya 5', width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px' } },
        ]},
      { id: 'img-6', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' },
        childrenComponents: [
          { id: 'g6-image', type: 'image', props: { src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop', alt: 'Karya 6', width: '100%', height: '260px', objectFit: 'cover', borderRadius: '20px' } },
        ]},
    ]},

    // ============================================================
    // STATISTICS — Premium stats with gradient accents
    // ============================================================
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Pencapaian Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kreativitas Kami Dalam Angka', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang mencerminkan dedikasi dan kepercayaan pelanggan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
      { id: 'card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's1-value', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#7c3aed', align: 'center', margin: '0 0 8px 0' } },
          { id: 's1-label', type: 'text', props: { content: 'Karya Terjual', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
        ]},
      { id: 'card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's2-value', type: 'heading', props: { content: '200+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 8px 0' } },
          { id: 's2-label', type: 'text', props: { content: 'Klien Bahagia', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
        ]},
      { id: 'card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's3-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#f59e0b', align: 'center', margin: '0 0 8px 0' } },
          { id: 's3-label', type: 'text', props: { content: 'Pengrajin Lokal', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
        ]},
      { id: 'card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's4-value', type: 'heading', props: { content: '98%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#10b981', align: 'center', margin: '0 0 8px 0' } },
          { id: 's4-label', type: 'text', props: { content: 'Kepuasan Pelanggan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
        ]},
    ]},

    // ============================================================
    // TEAM — Creative team showcase
    // ============================================================
    { id: 'team', type: 'team', layout: 'team-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👥 Tim Kreatif', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Para Seniman Di Balik Karya', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pengrajin dan desainer berbakat yang menghidupkan setiap karya', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
      { id: 'card-1', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
        childrenComponents: [
          { id: 't1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', shadow: 'md' } },
          { id: 't1-name', type: 'heading', props: { content: 'Raka Pratama', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
          { id: 't1-role', type: 'text', props: { content: 'Founder & Creative Director', fontSize: '14px', fontWeight: '600', color: '#7c3aed', align: 'center', margin: '0 0 16px 0' } },
        ]},
      { id: 'card-2', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
        childrenComponents: [
          { id: 't2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', shadow: 'md' } },
          { id: 't2-name', type: 'heading', props: { content: 'Maya Anggraini', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
          { id: 't2-role', type: 'text', props: { content: 'Head of Design', fontSize: '14px', fontWeight: '600', color: '#ec4899', align: 'center', margin: '0 0 16px 0' } },
        ]},
      { id: 'card-3', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
        childrenComponents: [
          { id: 't3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', shadow: 'md' } },
          { id: 't3-name', type: 'heading', props: { content: 'Dimas Saputra', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
          { id: 't3-role', type: 'text', props: { content: 'Master Artisan', fontSize: '14px', fontWeight: '600', color: '#f59e0b', align: 'center', margin: '0 0 16px 0' } },
        ]},
      { id: 'card-4', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
        childrenComponents: [
          { id: 't4-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', shadow: 'md' } },
          { id: 't4-name', type: 'heading', props: { content: 'Sari Wulandari', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
          { id: 't4-role', type: 'text', props: { content: 'Marketing & Branding', fontSize: '14px', fontWeight: '600', color: '#10b981', align: 'center', margin: '0 0 16px 0' } },
        ]},
    ]},

    // ============================================================
    // FAQ — Premium accordion-style
    // ============================================================
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 FAQ', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
      { id: 'item-1', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
        childrenComponents: [
          { id: 'f1-q', type: 'heading', props: { content: 'Apakah produk bisa dipesan custom?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'f1-a', type: 'text', props: { content: 'Tentu! Kami menerima pesanan custom dengan desain yang disesuaikan dengan kebutuhan dan preferensi Anda. Proses konsultasi gratis.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'item-2', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
        childrenComponents: [
          { id: 'f2-q', type: 'heading', props: { content: 'Berapa lama waktu produksi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'f2-a', type: 'text', props: { content: 'Waktu produksi bervariasi antara 3-14 hari kerja tergantung kompleksitas produk. Produk ready stock bisa dikirim dalam 1-2 hari.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'item-3', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
        childrenComponents: [
          { id: 'f3-q', type: 'heading', props: { content: 'Apakah bisa kirim ke luar kota?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'f3-a', type: 'text', props: { content: 'Ya, kami melayani pengiriman ke seluruh Indonesia dengan packing yang aman dan terjamin. Gratis ongkir untuk pembelian di atas Rp500.000.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'item-4', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
        childrenComponents: [
          { id: 'f4-q', type: 'heading', props: { content: 'Apakah ada garansi produk?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'f4-a', type: 'text', props: { content: 'Setiap produk kami dilengkapi garansi kualitas 30 hari. Jika ada kerusakan saat pengiriman, kami akan mengganti dengan produk baru.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
    ]},

    // ============================================================
    // CONTACT — Premium dark contact section
    // ============================================================
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '📬 Hubungi Kami', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Wujudkan Ide Kreatif Anda', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Ceritakan kebutuhan Anda, kami siap membantu mewujudkannya', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 32px 0' } },
    ]},

    // ============================================================
    // FOOTER — Premium footer with social
    // ============================================================
    { id: 'footer', type: 'footer', layout: 'footer-03', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Kreasi Kita. Seni Untuk Semua.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
      { id: 'social', type: 'social', props: { platforms: ['instagram', 'facebook', 'twitter'], size: 'medium' } },
    ]},
  ],
};