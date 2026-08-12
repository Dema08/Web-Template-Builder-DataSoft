/**
 * Industry Starter Templates Registry — v2.0
 * 32 professionally distinct starter templates across 10 Indonesian industry categories.
 *
 * Each template uses a genuinely different:
 *  - Hero layout (hero-01 through hero-08)
 *  - Section order & composition
 *  - Navbar & Footer variant
 *  - Visual hierarchy & CTA placement
 *  - Content tone & industry framing
 *
 * Hero layout reference:
 *  hero-01 → Indigo gradient, centered, white text
 *  hero-02 → White split (text left, image right), light
 *  hero-03 → Dark slate-900, centered, white text
 *  hero-04 → Indigo-to-purple gradient, centered, white text
 *  hero-05 → Soft indigo/purple gradient, split (CTA left, visual right)
 *  hero-06 → Dark with radial glow (glassmorphism feel), centered
 *  hero-07 → Pure white, centered, dark text — ultra minimal
 *  hero-08 → Solid indigo + radial light, split layout
 */

// ─────────────────────────────────────────────────────────────
// HELPER: generate unique section IDs
const sid = (prefix, tpl) => `${prefix}-${tpl}-${Date.now()}`;

export const INDUSTRY_STARTER_TEMPLATES = {

  // ═══════════════════════════════════════════════════════════
  // 1. UMKM — 5 templates
  // ═══════════════════════════════════════════════════════════
  'umkm': {
    categoryName: 'UMKM',
    templates: [

      // ──────────────────────────────────────────────────────
      // 1.1 UMKM Modern — SaaS-inspired split hero, clean cards
      // ──────────────────────────────────────────────────────
      {
        id: 'umkm-modern',
        name: 'UMKM Modern',
        description: 'Desain SaaS-inspired dengan split hero elegan, product showcase modern, dan clean card grid — cocok untuk UMKM digital-first.',
        thumbnail: 'https://images.unsplash.com/photo-1556742049-0a670fc0a727?w=800&auto=format&fit=crop&q=80',
        tags: ['Modern', 'SaaS Style', 'Split Hero', 'Clean'],
        theme: { primaryColor: '#4f46e5', accent: '#6366f1', dark: false },
        animations: ['fade-up', 'slide-right', 'hover-lift'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
            { id: 'logo', type: 'heading', props: { content: 'KARYA LOKAL', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#4f46e5' } },
            { id: 'cta', type: 'button', props: { label: 'Order Sekarang', href: '#contact', variant: 'primary', background: '#4f46e5', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-05', components: [
            { id: 'badge', type: 'badge', props: { content: '🇮🇩 UMKM Unggulan 2026', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Produk Lokal Terbaik, Dibuat Dengan Hati', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Kami menghadirkan produk berkualitas tinggi buatan tangan pengrajin lokal Indonesia yang berpengalaman lebih dari satu dekade.', fontSize: '18px', color: '#64748b', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Lihat Produk Unggulan', href: '#products', variant: 'primary', background: '#4f46e5', color: '#ffffff' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1556742049-0a670fc0a727?w=600&auto=format&fit=crop', alt: 'Product Showcase', width: '100%', height: '380px', objectFit: 'cover' } },
          ]},
          { id: 'products', type: 'products', layout: 'products-01', components: [
            { id: 't', type: 'heading', props: { content: 'Produk Terlaris & Pilihan Pelanggan', level: 'h2', fontSize: '34px', fontWeight: '800', color: '#0f172a', align: 'center' } },
            { id: 'd', type: 'text', props: { content: 'Dipesan ribuan kali — kualitas terjamin, harga terjangkau.', fontSize: '16px', color: '#64748b', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-02', components: [
            { id: 't', type: 'heading', props: { content: 'Cerita Di Balik Produk Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
            { id: 'd', type: 'text', props: { content: 'Didirikan pada 2014 oleh pengrajin lokal Jawa Tengah, kami tumbuh dari industri rumahan menjadi brand UMKM nasional yang dikenal di 30+ provinsi Indonesia.', fontSize: '16px', color: '#64748b' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Angka Kepercayaan Pelanggan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'gallery', type: 'gallery', layout: 'gallery-02', components: [
            { id: 't', type: 'heading', props: { content: 'Galeri Produk & Proses Pembuatan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-02', components: [
            { id: 't', type: 'heading', props: { content: 'Pesan Produk atau Tanya-Tanya Dulu', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-03', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Karya Lokal UMKM. Bangga Buatan Indonesia.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
          ]},
        ]
      },

      // ──────────────────────────────────────────────────────
      // 1.2 UMKM E-Commerce — Promo banner, commerce-first layout
      // ──────────────────────────────────────────────────────
      {
        id: 'umkm-ecommerce',
        name: 'UMKM E-Commerce',
        description: 'Layout toko online dengan promo banner besar, kategori produk, best sellers, dan shopping-style CTA — siap jualan langsung.',
        thumbnail: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80',
        tags: ['E-Commerce', 'Shopping', 'Promo', 'Catalog'],
        theme: { primaryColor: '#f59e0b', accent: '#d97706', dark: false },
        animations: ['scale-in', 'hover-glow', 'fade-in'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'TOKO NUSANTARA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#92400e' } },
            { id: 'cta', type: 'button', props: { label: '🛒 Keranjang', href: '#', variant: 'primary', background: '#f59e0b', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-02', components: [
            { id: 'badge', type: 'badge', props: { content: '🔥 Promo Akhir Tahun — Diskon s/d 50%', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Belanja Produk Lokal Terpercaya, Hemat & Cepat Sampai', level: 'h1', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Ribuan produk UMKM asli Indonesia tersedia. Gratis ongkir ke seluruh wilayah.', fontSize: '16px', color: '#64748b', align: 'left' } },
            { id: 'btn1', type: 'button', props: { label: 'Belanja Sekarang', href: '#products', variant: 'primary', background: '#f59e0b', color: '#ffffff' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&auto=format&fit=crop', alt: 'Shop Banner', width: '100%', height: '360px', objectFit: 'cover' } },
          ]},
          { id: 'products', type: 'products', layout: 'products-01', components: [
            { id: 't', type: 'heading', props: { content: 'Produk Best Seller Minggu Ini', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
            { id: 'd', type: 'text', props: { content: 'Dipilih oleh lebih dari 50.000 pembeli happy di Indonesia.', fontSize: '16px', color: '#64748b', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Toko Kami Dalam Angka', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'clients', type: 'clients', layout: 'clients-01', components: [
            { id: 't', type: 'heading', props: { content: 'Dipercaya Brand & Mitra Ternama', level: 'h2', fontSize: '24px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'gallery', type: 'gallery', layout: 'gallery-01', components: [
            { id: 't', type: 'heading', props: { content: 'Koleksi Terbaru', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-01', components: [
            { id: 't', type: 'heading', props: { content: 'Butuh Bantuan? Hubungi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-01', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Toko Nusantara. Produk Lokal, Kualitas Global.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
          ]},
        ]
      },

      // ──────────────────────────────────────────────────────
      // 1.3 UMKM Premium — Luxury dark, glassmorphism, premium branding
      // ──────────────────────────────────────────────────────
      {
        id: 'umkm-premium',
        name: 'UMKM Premium',
        description: 'Desain luxury brand dengan dark hero berglow, glassmorphism cards, dan visual hierarchy premium — untuk UMKM yang ingin tampil kelas dunia.',
        thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
        tags: ['Premium', 'Luxury', 'Dark', 'Glassmorphism'],
        theme: { primaryColor: '#0f172a', accent: '#f59e0b', dark: true },
        animations: ['scale-in', 'fade-up', 'floating-elements'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
            { id: 'logo', type: 'heading', props: { content: 'ÉLITE CRAFT', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0f172a' } },
            { id: 'cta', type: 'button', props: { label: 'Exclusive Access', href: '#contact', variant: 'primary', background: '#f59e0b', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-06', components: [
            { id: 'badge', type: 'badge', props: { content: '✦ Edisi Premium — Terbatas', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Keistimewaan Yang Hanya Ada Di Sini', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Dibuat dari bahan pilihan terbaik dunia oleh tangan-tangan maestro kerajinan Indonesia.', fontSize: '20px', color: '#e2e8f0', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Koleksi Eksklusif', href: '#products', variant: 'primary', background: '#f59e0b', color: '#0f172a' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-04', components: [
            { id: 't', type: 'heading', props: { content: 'Keunggulan Élite Craft', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'products', type: 'products', layout: 'products-01', components: [
            { id: 't', type: 'heading', props: { content: 'Koleksi Signature 2026', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-04', components: [
            { id: 't', type: 'heading', props: { content: 'Layanan Premium Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'gallery', type: 'gallery', layout: 'gallery-04', components: [
            { id: 't', type: 'heading', props: { content: 'Lookbook Koleksi Terbaru', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Hubungi Kami Untuk Pemesanan Eksklusif', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-04', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Élite Craft Indonesia. Premium Quality Since 2012.', fontSize: '14px', color: '#cbd5e1' } },
          ]},
        ]
      },

      // ──────────────────────────────────────────────────────
      // 1.4 UMKM Minimalist — Ultra clean, large whitespace
      // ──────────────────────────────────────────────────────
      {
        id: 'umkm-minimalist',
        name: 'UMKM Minimalist',
        description: 'Layout putih bersih dengan whitespace lebar dan tipografi elegan — fokus pada produk, bukan dekorasi.',
        thumbnail: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
        tags: ['Minimalist', 'Clean', 'Typography', 'Whitespace'],
        theme: { primaryColor: '#1e293b', accent: '#64748b', dark: false },
        animations: ['fade-in', 'slide-up', 'hover-lift'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
            { id: 'logo', type: 'heading', props: { content: 'BENING STUDIO', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-07', components: [
            { id: 'title', type: 'heading', props: { content: 'Sederhana. Berkualitas. Bermakna.', level: 'h1', fontSize: '60px', fontWeight: '800', color: '#0f172a', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Produk minimalis yang dirancang untuk menemani hari-hari Anda dengan keindahan yang tak lekang waktu.', fontSize: '18px', color: '#64748b', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Lihat Koleksi', href: '#products', variant: 'primary', background: '#0f172a', color: '#ffffff' } },
          ]},
          { id: 'products', type: 'products', layout: 'products-01', components: [
            { id: 't', type: 'heading', props: { content: 'Koleksi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-01', components: [
            { id: 't', type: 'heading', props: { content: 'Tentang Bening Studio', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
            { id: 'd', type: 'text', props: { content: 'Kami percaya kesederhanaan adalah kemewahan tertinggi. Setiap produk dirancang dengan fungsi yang jelas dan estetika yang tahan waktu.', fontSize: '16px', color: '#64748b', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-01', components: [
            { id: 't', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-02', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Bening Studio.', fontSize: '14px', color: '#94a3b8' } },
          ]},
        ]
      },

      // ──────────────────────────────────────────────────────
      // 1.5 UMKM Creative — Bold, asymmetric, expressive
      // ──────────────────────────────────────────────────────
      {
        id: 'umkm-creative',
        name: 'UMKM Creative',
        description: 'Desain ekspresif dan asimetris untuk brand UMKM kreatif, artisan, dan seniman — tampil beda dari kompetitor.',
        thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80',
        tags: ['Creative', 'Bold', 'Asymmetric', 'Artisan'],
        theme: { primaryColor: '#7c3aed', accent: '#ec4899', dark: false },
        animations: ['slide-right', 'scale-in', 'counter-up', 'hover-glow'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-04', components: [
            { id: 'logo', type: 'heading', props: { content: 'KREASI KITA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#7c3aed' } },
            { id: 'cta', type: 'button', props: { label: 'Mulai Berkreasi', href: '#contact', variant: 'primary', background: '#7c3aed', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-08', components: [
            { id: 'badge', type: 'badge', props: { content: '🎨 Koleksi Handmade 2026', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Ekspresikan Dirimu Lewat Produk Kreatif Lokal', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Dari tangan pengrajin kreatif Indonesia untuk jiwa-jiwa yang menghargai keunikan.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Eksplorasi Karya', href: '#gallery', variant: 'primary', background: '#ffffff', color: '#7c3aed' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop', alt: 'Creative Products', width: '100%', height: '380px', objectFit: 'cover' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-02', components: [
            { id: 't', type: 'heading', props: { content: 'Apa Yang Bisa Kami Buat Untuk Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'gallery', type: 'gallery', layout: 'gallery-03', components: [
            { id: 't', type: 'heading', props: { content: 'Portfolio Karya Terbaik', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Kreativitas Kami Dalam Angka', level: 'h2', fontSize: '30px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Wujudkan Ide Kreatif Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-03', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Kreasi Kita. Seni Untuk Semua.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
          ]},
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 2. LOGISTIK & TRANSPORTASI — 3 templates
  // ═══════════════════════════════════════════════════════════
  'logistik-transportasi': {
    categoryName: 'Logistik & Transportasi',
    templates: [

      // 2.1 Logistics Corporate — Full ecosystem, trust signals
      {
        id: 'logistics-corporate',
        name: 'Logistics Corporate Express',
        description: 'Template penuh untuk perusahaan logistik besar: statistik armada, jangkauan peta, layanan lengkap, dan klien trust signal.',
        thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
        tags: ['Corporate', 'Fleet', 'Supply Chain', 'B2B'],
        theme: { primaryColor: '#2563eb', dark: false },
        animations: ['fade-up', 'counter-up', 'logo-carousel'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
            { id: 'logo', type: 'heading', props: { content: 'TRANSGO LOGISTICS', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#1e293b' } },
            { id: 'cta', type: 'button', props: { label: 'Lacak Kiriman', href: '#tracking', variant: 'primary', background: '#2563eb', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-01', components: [
            { id: 'badge', type: 'badge', props: { content: '🚚 Jaringan Nasional & Internasional', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Solusi Logistik Terintegrasi Untuk Bisnis Skala Nasional', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Armada modern, pelacakan real-time, dan jaringan gudang di 50+ kota Indonesia. Pengiriman tepat waktu dijamin.', fontSize: '18px', color: '#bfdbfe', align: 'center' } },
            { id: 'btn1', type: 'button', props: { label: 'Cek Tarif Pengiriman', href: '#services', variant: 'primary', background: '#ffffff', color: '#1d4ed8' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Kapasitas & Jangkauan Operasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'fleet', type: 'fleet', layout: 'fleet-01', components: [
            { id: 't', type: 'heading', props: { content: 'Armada Kendaraan & Fasilitas', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-02', components: [
            { id: 't', type: 'heading', props: { content: 'Layanan Pengiriman & Pergudangan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'coverage', type: 'coverage', layout: 'coverage-01', components: [
            { id: 't', type: 'heading', props: { content: 'Area Jangkauan Distribusi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'clients', type: 'clients', layout: 'clients-01', components: [
            { id: 't', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-02', components: [
            { id: 't', type: 'heading', props: { content: 'Konsultasikan Kebutuhan Logistik Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-02', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 TransGo Logistics Indonesia.', fontSize: '14px', color: '#94a3b8' } },
          ]},
        ]
      },

      // 2.2 Logistics Premium — Dark luxury, air & sea cargo focus
      {
        id: 'logistics-premium',
        name: 'Logistics Premium Supply Chain',
        description: 'Desain dark premium untuk penyedia logistik kelas atas: kargo udara, laut, dan integrasi rantai pasok internasional.',
        thumbnail: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80',
        tags: ['Premium', 'Air Cargo', 'International', 'Dark'],
        theme: { primaryColor: '#0f172a', dark: true },
        animations: ['slide-left', 'fade-up', 'hover-glow'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'NEXUS CARGO GLOBAL', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-08', components: [
            { id: 'badge', type: 'badge', props: { content: 'Freight Excellence Since 2009', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Intelligent Global Freight & Supply Chain System', level: 'h1', fontSize: '50px', fontWeight: '900', color: '#ffffff', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Kargo udara ekspres, laut bulking, pergudangan dingin & pelacakan berbasis AI untuk industri skala enterprise.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Minta Penawaran B2B', href: '#contact', variant: 'primary', background: '#ffffff', color: '#0f172a' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop', alt: 'Cargo', width: '100%', height: '380px', objectFit: 'cover' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-04', components: [
            { id: 't', type: 'heading', props: { content: 'Layanan Premium Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Jangkauan Global Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-03', components: [
            { id: 't', type: 'heading', props: { content: 'Teknologi & Keunggulan Nexus', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'clients', type: 'clients', layout: 'clients-01', components: [
            { id: 't', type: 'heading', props: { content: 'Global Partners', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Enterprise Partnership Inquiry', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-04', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Nexus Cargo Global. All Rights Reserved.', fontSize: '14px', color: '#cbd5e1' } },
          ]},
        ]
      },

      // 2.3 Logistics Tracking Focus — Dark tech, tracking UI prominent
      {
        id: 'logistics-tracking',
        name: 'Logistics Tracking Focus',
        description: 'Template tech-forward dengan dark hero dan statistik real-time sebagai inti — ideal untuk perusahaan yang menonjolkan teknologi pelacakan.',
        thumbnail: 'https://images.unsplash.com/photo-1565793979680-9f10ae673e58?w=800&auto=format&fit=crop&q=80',
        tags: ['Technology', 'Tracking', 'Real-Time', 'Dark Tech'],
        theme: { primaryColor: '#0ea5e9', dark: true },
        animations: ['fade-in', 'counter-up', 'scroll-reveal'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
            { id: 'logo', type: 'heading', props: { content: 'TRACKFAST ID', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0ea5e9' } },
            { id: 'cta', type: 'button', props: { label: 'Track Now', href: '#', variant: 'primary', background: '#0ea5e9', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-03', components: [
            { id: 'badge', type: 'badge', props: { content: '⚡ Real-Time Visibility Platform', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Pantau Kiriman Anda Kapanpun, Dimanapun', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Platform pelacakan kiriman berbasis AI dengan update posisi setiap 30 detik dan notifikasi otomatis WhatsApp.', fontSize: '18px', color: '#e2e8f0', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Mulai Lacak Sekarang', href: '#', variant: 'primary', background: '#0ea5e9', color: '#ffffff' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Platform Terpercaya — Datanya Bicara', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-03', components: [
            { id: 't', type: 'heading', props: { content: 'Fitur Pelacakan & Distribusi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'fleet', type: 'fleet', layout: 'fleet-01', components: [
            { id: 't', type: 'heading', props: { content: 'Armada Berteknologi GPS-IoT', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'faq', type: 'faq', layout: 'faq-01', components: [
            { id: 't', type: 'heading', props: { content: 'Pertanyaan Seputar Pelacakan & Pengiriman', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-01', components: [
            { id: 't', type: 'heading', props: { content: 'Hubungi Tim Support 24/7', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-01', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 TrackFast ID. Powered by IoT & AI Technology.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
          ]},
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 3. GROUP PERUSAHAAN / HOLDING COMPANY — 3 templates
  // ═══════════════════════════════════════════════════════════
  'group-perusahaan': {
    categoryName: 'Group Perusahaan / Holding Company',
    templates: [

      // 3.1 Enterprise Corporate — Timeline, Board, Subsidiaries
      {
        id: 'holding-enterprise',
        name: 'Enterprise Executive Group',
        description: 'Profil korporat penuh dengan corporate journey timeline, susunan direksi, dan visi strategis jangka panjang.',
        thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
        tags: ['Enterprise', 'Board', 'Timeline', 'Corporate'],
        theme: { primaryColor: '#1e293b', dark: false },
        animations: ['fade-up', 'slide-right', 'counter-up'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
            { id: 'logo', type: 'heading', props: { content: 'ASTRA WIRA GROUP', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
            { id: 'cta', type: 'button', props: { label: 'Investor Relations', href: '#contact', variant: 'primary', background: '#1e293b', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-04', components: [
            { id: 'badge', type: 'badge', props: { content: 'Synergy • Growth • Governance', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Membangun Ekosistem Bisnis Berkelanjutan Lintas Generasi', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Konglomerasi terkemuka mengelola 12 anak perusahaan di sektor energi, infrastruktur, keuangan, dan teknologi.', fontSize: '18px', color: '#e0e7ff', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Pelajari Portofolio Kami', href: '#about', variant: 'primary', background: '#ffffff', color: '#4f46e5' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-02', components: [
            { id: 't', type: 'heading', props: { content: 'Profil Group Astra Wira', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
            { id: 'd', type: 'text', props: { content: 'Lebih dari 35 tahun memimpin industri dengan komitmen penuh pada GCG, keberlanjutan ESG, dan penciptaan nilai jangka panjang bagi seluruh pemangku kepentingan.', fontSize: '16px', color: '#64748b' } },
          ]},
          { id: 'vision', type: 'vision', layout: 'vision-01', components: [
            { id: 't', type: 'heading', props: { content: 'Visi & Misi Korporasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
            { id: 't', type: 'heading', props: { content: 'Milestones Perjalanan Korporat', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'team', type: 'team', layout: 'team-01', components: [
            { id: 't', type: 'heading', props: { content: 'Dewan Direksi & Komisaris', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-02', components: [
            { id: 't', type: 'heading', props: { content: 'Investor & Media Relations', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-04', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Astra Wira Group Tbk. All Rights Reserved.', fontSize: '14px', color: '#cbd5e1' } },
          ]},
        ]
      },

      // 3.2 Investor Relations — White clean, stats-forward
      {
        id: 'holding-investor',
        name: 'Investor Relations Portal',
        description: 'Template bersih dengan statistik keuangan terdepan, laporan tahunan, dan profil kepemimpinan — dirancang untuk menarik investor.',
        thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
        tags: ['Investor', 'Finance', 'Annual Report', 'Clean'],
        theme: { primaryColor: '#0369a1', dark: false },
        animations: ['fade-in', 'counter-up', 'slide-left'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'NUSANTARA CAPITAL GROUP', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#0369a1' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-07', components: [
            { id: 'title', type: 'heading', props: { content: 'Investasi Cerdas, Masa Depan Kokoh', level: 'h1', fontSize: '56px', fontWeight: '800', color: '#0f172a', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Nusantara Capital Group mengelola portofolio aset senilai Rp 47 Triliun dengan diversifikasi strategis di 8 sektor industri primer.', fontSize: '18px', color: '#64748b', align: 'center' } },
            { id: 'btn1', type: 'button', props: { label: 'Unduh Annual Report 2025', href: '#', variant: 'primary', background: '#0369a1', color: '#ffffff' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Financial Performance Highlights', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-04', components: [
            { id: 't', type: 'heading', props: { content: 'Tentang Nusantara Capital Group', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'vision', type: 'vision', layout: 'vision-01', components: [
            { id: 't', type: 'heading', props: { content: 'Strategi & Roadmap 2026–2030', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'team', type: 'team', layout: 'team-01', components: [
            { id: 't', type: 'heading', props: { content: 'Senior Leadership Team', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Investor Relations Office', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-02', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Nusantara Capital Group Tbk. IDX: NCG.', fontSize: '14px', color: '#94a3b8' } },
          ]},
        ]
      },

      // 3.3 Corporate Premium — Dark glow, refined luxury corporate
      {
        id: 'holding-premium',
        name: 'Corporate Premium Executive',
        description: 'Desain korporat ultra-premium dengan dark glow hero dan layout eksekutif — menampilkan wibawa dan kepercayaan perusahaan skala besar.',
        thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
        tags: ['Premium', 'Executive', 'Dark', 'Power'],
        theme: { primaryColor: '#1e293b', dark: true },
        animations: ['scale-in', 'fade-up', 'hover-glow'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
            { id: 'logo', type: 'heading', props: { content: 'PRIMA GLOBAL HOLDINGS', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-06', components: [
            { id: 'title', type: 'heading', props: { content: 'The Power of Strategic Diversification', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Prima Global Holdings builds long-term wealth through disciplined capital allocation across Asia\'s fastest-growing sectors.', fontSize: '20px', color: '#e2e8f0', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Our Portfolio', href: '#about', variant: 'primary', background: '#f59e0b', color: '#0f172a' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-01', components: [
            { id: 't', type: 'heading', props: { content: 'Company Overview', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-01', components: [
            { id: 't', type: 'heading', props: { content: 'Business Sectors & Portfolio', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'team', type: 'team', layout: 'team-01', components: [
            { id: 't', type: 'heading', props: { content: 'Board of Directors', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
            { id: 't', type: 'heading', props: { content: 'Corporate History', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-01', components: [
            { id: 't', type: 'heading', props: { content: 'Head Office & Corporate Desk', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-03', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Prima Global Holdings. Excellence in Every Venture.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
          ]},
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 4. PERUSAHAAN JASA — 3 templates
  // ═══════════════════════════════════════════════════════════
  'perusahaan-jasa': {
    categoryName: 'Perusahaan Jasa',
    templates: [

      // 4.1 Agency Modern — Soft split hero, gallery-forward
      {
        id: 'service-agency-modern',
        name: 'Agency Modern Studio',
        description: 'Template agensi modern dengan split hero gradient, portfolio galeri, dan pricing transparent — cocok untuk agensi digital & kreatif.',
        thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80',
        tags: ['Agency', 'Creative', 'Portfolio', 'Modern'],
        theme: { primaryColor: '#7c3aed', dark: false },
        animations: ['slide-left', 'fade-up', 'hover-lift'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
            { id: 'logo', type: 'heading', props: { content: 'STUDIO PRIMA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#7c3aed' } },
            { id: 'cta', type: 'button', props: { label: 'Mulai Proyek', href: '#contact', variant: 'primary', background: '#7c3aed', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-05', components: [
            { id: 'badge', type: 'badge', props: { content: '🏆 Top Agency Indonesia 2026', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Kami Mengubah Ide Bisnis Anda Menjadi Pengalaman Digital Yang Luar Biasa', level: 'h1', fontSize: '46px', fontWeight: '800', color: '#0f172a', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Agensi full-service dengan spesialisasi branding, web development, dan digital marketing untuk bisnis ambisius.', fontSize: '18px', color: '#64748b', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Lihat Portfolio Kami', href: '#gallery', variant: 'primary', background: '#7c3aed', color: '#ffffff' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop', alt: 'Agency Team', width: '100%', height: '380px', objectFit: 'cover' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-02', components: [
            { id: 't', type: 'heading', props: { content: 'Layanan Unggulan Studio Prima', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-03', components: [
            { id: 't', type: 'heading', props: { content: 'Mengapa Studio Prima?', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'gallery', type: 'gallery', layout: 'gallery-03', components: [
            { id: 't', type: 'heading', props: { content: 'Portofolio Proyek Terbaik', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'pricing', type: 'pricing', layout: 'pricing-01', components: [
            { id: 't', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-02', components: [
            { id: 't', type: 'heading', props: { content: 'Mulai Diskusi Proyek Anda', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-03', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Studio Prima. We Build Digital Excellence.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
          ]},
        ]
      },

      // 4.2 Consulting Premium — Indigo split, team-forward, stats
      {
        id: 'service-consulting-premium',
        name: 'Consulting Premium Hub',
        description: 'Template konsultan premium dengan split indigo hero, tim spesialis terdepan, statistik kredibilitas, dan FAQ profesional.',
        thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
        tags: ['Consulting', 'Premium', 'B2B', 'Strategy'],
        theme: { primaryColor: '#4f46e5', dark: false },
        animations: ['fade-up', 'counter-up', 'slide-right'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
            { id: 'logo', type: 'heading', props: { content: 'PRIMA CONSULTING', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#0f172a' } },
            { id: 'cta', type: 'button', props: { label: 'Free Consultation', href: '#contact', variant: 'primary', background: '#4f46e5', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-08', components: [
            { id: 'badge', type: 'badge', props: { content: '15+ Tahun Pengalaman Konsultasi', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Strategi Bisnis Yang Menghasilkan Pertumbuhan Nyata', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Tim konsultan bersertifikat internasional mendampingi perusahaan Anda dari perencanaan strategi hingga eksekusi terukur.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Konsultasi Gratis 30 Menit', href: '#contact', variant: 'primary', background: '#ffffff', color: '#4f46e5' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop', alt: 'Consulting', width: '100%', height: '380px', objectFit: 'cover' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-02', components: [
            { id: 't', type: 'heading', props: { content: 'Metodologi Konsultasi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-04', components: [
            { id: 't', type: 'heading', props: { content: 'Bidang Keahlian Spesialis', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Rekam Jejak Hasil Nyata', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'team', type: 'team', layout: 'team-01', components: [
            { id: 't', type: 'heading', props: { content: 'Tim Konsultan Bersertifikat', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'faq', type: 'faq', layout: 'faq-01', components: [
            { id: 't', type: 'heading', props: { content: 'FAQ Layanan Konsultasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Jadwalkan Sesi Konsultasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-04', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Prima Consulting Indonesia. Transforming Business Through Strategy.', fontSize: '14px', color: '#cbd5e1' } },
          ]},
        ]
      },

      // 4.3 Service Professional — Clean white, pricing-first
      {
        id: 'service-professional',
        name: 'Service Professional Classic',
        description: 'Layout profesional klasik dengan hero putih bersih, layanan terstruktur, pricing paket, dan kontak yang mudah diakses.',
        thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80',
        tags: ['Professional', 'Classic', 'Services', 'Pricing'],
        theme: { primaryColor: '#0f172a', dark: false },
        animations: ['fade-in', 'hover-lift', 'slide-up'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'JASA PROFESIONAL ID', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-07', components: [
            { id: 'title', type: 'heading', props: { content: 'Layanan Profesional Terpercaya Untuk Kebutuhan Bisnis Anda', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Didukung tenaga ahli bersertifikasi, proses terstruktur, dan jaminan kepuasan 100% atau uang kembali.', fontSize: '18px', color: '#64748b', align: 'center' } },
            { id: 'btn1', type: 'button', props: { label: 'Lihat Layanan', href: '#services', variant: 'primary', background: '#0f172a', color: '#ffffff' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-03', components: [
            { id: 't', type: 'heading', props: { content: 'Apa Yang Kami Kerjakan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-01', components: [
            { id: 't', type: 'heading', props: { content: 'Kenapa Klien Memilih Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'pricing', type: 'pricing', layout: 'pricing-01', components: [
            { id: 't', type: 'heading', props: { content: 'Paket Layanan & Biaya', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-01', components: [
            { id: 't', type: 'heading', props: { content: 'Hubungi Kami Sekarang', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-01', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Jasa Profesional Indonesia.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
          ]},
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 5. PENDIDIKAN & PELATIHAN — 3 templates
  // ═══════════════════════════════════════════════════════════
  'pendidikan-pelatihan': {
    categoryName: 'Pendidikan & Pelatihan',
    templates: [

      // 5.1 Academy — Gradient hero, courses showcase
      {
        id: 'education-academy',
        name: 'Academy Excellence Hub',
        description: 'Template sekolah/akademi dengan hero gradient, program kursus, instruktur, fasilitas, dan pendaftaran online.',
        thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
        tags: ['Academy', 'Courses', 'Instructors', 'Certification'],
        theme: { primaryColor: '#10b981', dark: false },
        animations: ['fade-up', 'counter-up', 'slide-right'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-04', components: [
            { id: 'logo', type: 'heading', props: { content: 'GLOBAL ACADEMY', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#065f46' } },
            { id: 'cta', type: 'button', props: { label: 'Daftar Sekarang', href: '#registration', variant: 'primary', background: '#10b981', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-01', components: [
            { id: 'badge', type: 'badge', props: { content: '🎓 Lembaga Pelatihan Tersertifikasi Nasional', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Kembangkan Potensi & Percepat Karier Anda', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Kurikulum berbasis industri terkini, instruktur praktisi berpengalaman, dan sertifikasi yang diakui 500+ perusahaan.', fontSize: '18px', color: '#d1fae5', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Lihat Program Kursus', href: '#programs', variant: 'primary', background: '#ffffff', color: '#065f46' } },
          ]},
          { id: 'programs', type: 'programs', layout: 'programs-01', components: [
            { id: 't', type: 'heading', props: { content: 'Program Unggulan Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
            { id: 't', type: 'heading', props: { content: 'Instruktur Berpengalaman', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Dampak & Prestasi Akademi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'facilities', type: 'facilities', layout: 'facilities-01', components: [
            { id: 't', type: 'heading', props: { content: 'Fasilitas Pembelajaran Modern', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'achievements', type: 'achievements', layout: 'achievements-01', components: [
            { id: 't', type: 'heading', props: { content: 'Sertifikasi & Penghargaan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'registration', type: 'registration', layout: 'registration-01', components: [
            { id: 't', type: 'heading', props: { content: 'Daftar Angkatan Baru — Kuota Terbatas', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-02', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Global Academy Indonesia. Shaping Future Leaders.', fontSize: '14px', color: '#94a3b8' } },
          ]},
        ]
      },

      // 5.2 University — Gradient purple, campus authority
      {
        id: 'education-university',
        name: 'University Campus Portal',
        description: 'Profil institusi pendidikan formal dengan hero otoritatif, profil program studi, staf pengajar, dan pencapaian akademik.',
        thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
        tags: ['University', 'Campus', 'Academic', 'Formal'],
        theme: { primaryColor: '#7c3aed', dark: false },
        animations: ['fade-up', 'slide-left', 'hover-lift'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
            { id: 'logo', type: 'heading', props: { content: 'UNIVERSITAS NUSANTARA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#4c1d95' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-04', components: [
            { id: 'badge', type: 'badge', props: { content: 'Akreditasi A — BAN-PT', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Mencetak Pemimpin Bangsa Melalui Pendidikan Berkualitas', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Universitas terkemuka dengan 42 program studi, 1.200 dosen berpengalaman, dan jaringan alumni di 50+ negara.', fontSize: '18px', color: '#ede9fe', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Seleksi Penerimaan Mahasiswa', href: '#registration', variant: 'primary', background: '#ffffff', color: '#4c1d95' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-03', components: [
            { id: 't', type: 'heading', props: { content: 'Profil Universitas Nusantara', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'programs', type: 'programs', layout: 'programs-01', components: [
            { id: 't', type: 'heading', props: { content: 'Fakultas & Program Studi Unggulan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
            { id: 't', type: 'heading', props: { content: 'Guru Besar & Dosen Senior', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'achievements', type: 'achievements', layout: 'achievements-01', components: [
            { id: 't', type: 'heading', props: { content: 'Prestasi & Akreditasi Internasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-02', components: [
            { id: 't', type: 'heading', props: { content: 'Penerimaan Mahasiswa Baru', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-04', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Universitas Nusantara. Established 1985.', fontSize: '14px', color: '#cbd5e1' } },
          ]},
        ]
      },

      // 5.3 Online Learning — Soft split, LMS-forward
      {
        id: 'education-online',
        name: 'Online Learning Platform',
        description: 'Template platform e-learning modern dengan soft-split hero, course catalog, tutor profiles, dan call-to-action pendaftaran yang efektif.',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
        tags: ['Online', 'E-Learning', 'Platform', 'Digital'],
        theme: { primaryColor: '#0ea5e9', dark: false },
        animations: ['scale-in', 'fade-in', 'counter-up'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
            { id: 'logo', type: 'heading', props: { content: 'BELAJAR.ID', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#0369a1' } },
            { id: 'cta', type: 'button', props: { label: 'Daftar Gratis', href: '#registration', variant: 'primary', background: '#0ea5e9', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-05', components: [
            { id: 'badge', type: 'badge', props: { content: '📱 Belajar Kapan Saja, Di Mana Saja', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Platform Belajar Online Terlengkap di Indonesia', level: 'h1', fontSize: '48px', fontWeight: '800', color: '#0f172a', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: '1.000+ kursus video berkualitas tinggi dari instruktur top Indonesia dan internasional. Belajar sesuai jadwal Anda.', fontSize: '18px', color: '#64748b', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Mulai Belajar Gratis', href: '#programs', variant: 'primary', background: '#0ea5e9', color: '#ffffff' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop', alt: 'Online Learning', width: '100%', height: '380px', objectFit: 'cover' } },
          ]},
          { id: 'programs', type: 'programs', layout: 'programs-01', components: [
            { id: 't', type: 'heading', props: { content: 'Kursus Populer & Trending', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Komunitas Pelajar Belajar.ID', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
            { id: 't', type: 'heading', props: { content: 'Tutor & Mentor Terbaik', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'faq', type: 'faq', layout: 'faq-01', components: [
            { id: 't', type: 'heading', props: { content: 'Pertanyaan Seputar Platform', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'registration', type: 'registration', layout: 'registration-01', components: [
            { id: 't', type: 'heading', props: { content: 'Daftar & Akses 7 Hari Trial Gratis', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-03', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Belajar.ID. Learning Without Limits.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
          ]},
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 6. ORGANISASI & ASOSIASI — 3 templates
  // ═══════════════════════════════════════════════════════════
  'organisasi-asosiasi': {
    categoryName: 'Organisasi & Asosiasi',
    templates: [

      // 6.1 Community — Clean white, warm & accessible
      {
        id: 'org-community',
        name: 'Community Hub',
        description: 'Template komunitas yang hangat dan terbuka dengan hero putih bersih, visi-misi, kepemimpinan, dan ajakan bergabung.',
        thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80',
        tags: ['Community', 'Welcoming', 'Membership', 'Social'],
        theme: { primaryColor: '#0284c7', dark: false },
        animations: ['fade-in', 'hover-lift', 'slide-up'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-03', components: [
            { id: 'logo', type: 'heading', props: { content: 'KOMUNITAS INDONESIA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0369a1' } },
            { id: 'cta', type: 'button', props: { label: 'Gabung Sekarang', href: '#contact', variant: 'primary', background: '#0284c7', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-07', components: [
            { id: 'title', type: 'heading', props: { content: 'Bersama Kita Lebih Kuat, Lebih Bermakna', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Wadah bertemunya individu-individu berdedikasi yang bersatu untuk menciptakan perubahan positif bagi masyarakat Indonesia.', fontSize: '18px', color: '#64748b', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Pelajari Komunitas Kami', href: '#about', variant: 'primary', background: '#0284c7', color: '#ffffff' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-01', components: [
            { id: 't', type: 'heading', props: { content: 'Tentang Komunitas', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'vision', type: 'vision', layout: 'vision-01', components: [
            { id: 't', type: 'heading', props: { content: 'Visi & Misi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'team', type: 'team', layout: 'team-01', components: [
            { id: 't', type: 'heading', props: { content: 'Pengurus & Relawan Aktif', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-01', components: [
            { id: 't', type: 'heading', props: { content: 'Hubungi Sekretariat', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-01', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Komunitas Indonesia. Bersatu Untuk Negeri.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
          ]},
        ]
      },

      // 6.2 Association — Gradient purple, formal authority
      {
        id: 'org-association',
        name: 'Professional Association Portal',
        description: 'Template asosiasi profesi resmi dengan hero otoritatif, timeline sejarah, pengurus, dan manfaat keanggotaan terstruktur.',
        thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=80',
        tags: ['Association', 'Formal', 'Professional', 'Membership'],
        theme: { primaryColor: '#4f46e5', dark: false },
        animations: ['fade-up', 'slide-right', 'counter-up'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
            { id: 'logo', type: 'heading', props: { content: 'ASOSIASI PROFESI INDONESIA', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#0f172a' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-04', components: [
            { id: 'title', type: 'heading', props: { content: 'Standar Profesi Tertinggi Untuk Indonesia', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Menghimpun lebih dari 25.000 profesional bersertifikat dalam satu wadah yang kuat untuk kemajuan profesi dan bangsa.', fontSize: '18px', color: '#e0e7ff', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Daftarkan Keanggotaan', href: '#contact', variant: 'primary', background: '#ffffff', color: '#4338ca' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-02', components: [
            { id: 't', type: 'heading', props: { content: 'Sejarah & Peran Asosiasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a' } },
          ]},
          { id: 'vision', type: 'vision', layout: 'vision-01', components: [
            { id: 't', type: 'heading', props: { content: 'Visi Strategis 2030', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'timeline', type: 'timeline', layout: 'timeline-01', components: [
            { id: 't', type: 'heading', props: { content: 'Jejak Perjuangan Asosiasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'team', type: 'team', layout: 'team-01', components: [
            { id: 't', type: 'heading', props: { content: 'Dewan Pengurus Nasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-02', components: [
            { id: 't', type: 'heading', props: { content: 'Sekretariat Nasional', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-02', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Asosiasi Profesi Indonesia. Hak Cipta Dilindungi.', fontSize: '14px', color: '#94a3b8' } },
          ]},
        ]
      },

      // 6.3 Event Organization — Bold indigo split, event-forward
      {
        id: 'org-event',
        name: 'Event Organization Center',
        description: 'Template penyelenggara event dengan split hero bold, showcase kegiatan, tim panitia, dan formulir pendaftaran acara.',
        thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
        tags: ['Events', 'Organization', 'Community', 'Registration'],
        theme: { primaryColor: '#7c3aed', dark: false },
        animations: ['scale-in', 'fade-up', 'slide-left'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'EVENT NUSANTARA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#7c3aed' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-08', components: [
            { id: 'badge', type: 'badge', props: { content: '📅 Jadwal Event 2026 — Segera Daftar', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Momen Luar Biasa Dimulai Dari Sini', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Kami menghadirkan konferensi nasional, seminar, workshop, dan gathering eksklusif yang menginspirasi ribuan peserta setiap tahunnya.', fontSize: '18px', color: '#e0e7ff', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Daftar Event Terdekat', href: '#registration', variant: 'primary', background: '#ffffff', color: '#7c3aed' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop', alt: 'Event', width: '100%', height: '360px', objectFit: 'cover' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-02', components: [
            { id: 't', type: 'heading', props: { content: 'Jenis Kegiatan Yang Kami Selenggarakan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Angka Kesuksesan Event Kami', level: 'h2', fontSize: '30px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'team', type: 'team', layout: 'team-01', components: [
            { id: 't', type: 'heading', props: { content: 'Tim Panitia Inti', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Daftarkan Diri ke Event Berikutnya', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-03', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Event Nusantara. Creating Unforgettable Moments.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
          ]},
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 7. INDUSTRI & MANUFAKTUR — 3 templates
  // ═══════════════════════════════════════════════════════════
  'industri-manufaktur': {
    categoryName: 'Industri & Manufaktur',
    templates: [

      // 7.1 Factory Corporate — Dark, heavy industrial
      {
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
        ]
      },

      // 7.2 Industrial Premium — Dark glow, enterprise B2B
      {
        id: 'manufacturing-premium',
        name: 'Industrial Premium Enterprise',
        description: 'Template premium untuk manufaktur enterprise dengan dark glow hero, layanan engineering, statistik kapasitas, dan partner trust.',
        thumbnail: 'https://images.unsplash.com/photo-1565793979680-9f10ae673e58?w=800&auto=format&fit=crop&q=80',
        tags: ['Premium', 'Enterprise', 'Engineering', 'Export'],
        theme: { primaryColor: '#0f172a', dark: true },
        animations: ['slide-left', 'fade-up', 'hover-glow'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'PRIMA ENGINEERING CORP', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-06', components: [
            { id: 'title', type: 'heading', props: { content: 'Engineering Excellence — Built to Last', level: 'h1', fontSize: '54px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Custom precision engineering solutions for aerospace, automotive, and heavy industry sectors across Southeast Asia.', fontSize: '20px', color: '#e2e8f0', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Technical Partnership', href: '#contact', variant: 'primary', background: '#f59e0b', color: '#0f172a' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-04', components: [
            { id: 't', type: 'heading', props: { content: 'Our Engineering Capabilities', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-04', components: [
            { id: 't', type: 'heading', props: { content: 'Manufacturing Services Portfolio', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Global Manufacturing Scale', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
            { id: 't', type: 'heading', props: { content: 'International Certifications', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Technical & Commercial Inquiries', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-04', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Prima Engineering Corp. ISO 9001 | ISO 14001.', fontSize: '14px', color: '#cbd5e1' } },
          ]},
        ]
      },

      // 7.3 Manufacturing Modern — Split light, process-centric
      {
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
            { id: 'cta', type: 'button', props: { label: 'Minta Penawaran', href: '#contact', variant: 'primary', background: '#2563eb', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-02', components: [
            { id: 'title', type: 'heading', props: { content: 'Produksi Tepat, Pengiriman Tepat Waktu', level: 'h1', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Didukung mesin CNC terkini dan tenaga ahli berpengalaman untuk kebutuhan manufaktur komponen presisi Anda.', fontSize: '16px', color: '#64748b', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Konsultasi Produksi', href: '#contact', variant: 'primary', background: '#2563eb', color: '#ffffff' } },
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
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 8. KOPERASI — 3 templates
  // ═══════════════════════════════════════════════════════════
  'koperasi': {
    categoryName: 'Koperasi',
    templates: [

      // 8.1 Cooperative Classic — Trusted green, member-first
      {
        id: 'koperasi-classic',
        name: 'Koperasi Sejahtera Classic',
        description: 'Template koperasi klasik terpercaya dengan hero hijau, program simpan-pinjam terstruktur, dan tampilan legalitas resmi.',
        thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
        tags: ['Classic', 'Trusted', 'KSP', 'Members'],
        theme: { primaryColor: '#059669', dark: false },
        animations: ['fade-in', 'counter-up', 'hover-lift'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'KSP SEJAHTERA BERSAMA', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#065f46' } },
            { id: 'cta', type: 'button', props: { label: 'Portal Anggota', href: '#contact', variant: 'primary', background: '#059669', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-01', components: [
            { id: 'title', type: 'heading', props: { content: 'Keuangan Bersama Yang Adil, Transparan, Dan Mensejahterakan', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Layanan simpanan, pinjaman usaha berbunga ringan, dan pembagian SHU yang adil bagi seluruh anggota aktif.', fontSize: '18px', color: '#d1fae5', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Daftar Anggota Baru', href: '#contact', variant: 'primary', background: '#ffffff', color: '#065f46' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Perkembangan Koperasi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-01', components: [
            { id: 't', type: 'heading', props: { content: 'Program Simpanan & Pinjaman', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-01', components: [
            { id: 't', type: 'heading', props: { content: 'Profil & Legalitas Koperasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-01', components: [
            { id: 't', type: 'heading', props: { content: 'Kantor Pelayanan Anggota', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-01', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 KSP Sejahtera Bersama. Terdaftar Kemendag & Kemenkop.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
          ]},
        ]
      },

      // 8.2 Cooperative Modern — Soft split, digital-forward
      {
        id: 'koperasi-modern',
        name: 'Koperasi Digital Modern',
        description: 'Template koperasi digital dengan soft-split hero, layanan online, statistik pertumbuhan, dan FAQ transparan untuk anggota.',
        thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
        tags: ['Modern', 'Digital', 'Online', 'Transparent'],
        theme: { primaryColor: '#10b981', dark: false },
        animations: ['fade-up', 'slide-right', 'counter-up'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
            { id: 'logo', type: 'heading', props: { content: 'KOPERASI DIGITAL ID', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#065f46' } },
            { id: 'cta', type: 'button', props: { label: 'Daftar Online', href: '#contact', variant: 'primary', background: '#10b981', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-05', components: [
            { id: 'badge', type: 'badge', props: { content: '🌐 Koperasi Berbasis Digital Pertama di Indonesia', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Kelola Simpanan & Pinjaman Anda Dari Mana Saja', level: 'h1', fontSize: '46px', fontWeight: '800', color: '#0f172a', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Aplikasi mobile koperasi terintegrasi untuk cek saldo, ajukan pinjaman, dan pantau SHU — 24/7 tanpa antre.', fontSize: '18px', color: '#64748b', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Unduh Aplikasi', href: '#contact', variant: 'primary', background: '#10b981', color: '#ffffff' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop', alt: 'Digital Koperasi', width: '100%', height: '360px', objectFit: 'cover' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-03', components: [
            { id: 't', type: 'heading', props: { content: 'Produk & Layanan Koperasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Pertumbuhan Koperasi Digital', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-03', components: [
            { id: 't', type: 'heading', props: { content: 'Tata Kelola & Transparansi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'faq', type: 'faq', layout: 'faq-01', components: [
            { id: 't', type: 'heading', props: { content: 'FAQ Keanggotaan & Produk', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-02', components: [
            { id: 't', type: 'heading', props: { content: 'Daftar Anggota Atau Hubungi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-03', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Koperasi Digital Indonesia. Terdaftar & Diawasi OJK.', fontSize: '14px', color: '#94a3b8', align: 'center' } },
          ]},
        ]
      },

      // 8.3 Cooperative Premium — Gradient, enterprise cooperative
      {
        id: 'koperasi-premium',
        name: 'Koperasi Premium Enterprise',
        description: 'Template koperasi skala besar dengan hero gradient premium, produk investasi, dan profil pengurus yang impresif.',
        thumbnail: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format&fit=crop&q=80',
        tags: ['Premium', 'Enterprise', 'Investment', 'Growth'],
        theme: { primaryColor: '#4f46e5', dark: false },
        animations: ['scale-in', 'fade-up', 'hover-glow'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-02', components: [
            { id: 'logo', type: 'heading', props: { content: 'KOPERASI PRIMA UTAMA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f172a' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-04', components: [
            { id: 'title', type: 'heading', props: { content: 'Investasi Cerdas Bersama Koperasi Terpercaya', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Koperasi primer dengan aset Rp 250 Miliar, 15.000+ anggota aktif, dan return SHU kompetitif setiap tahun.', fontSize: '18px', color: '#e0e7ff', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Bergabung Sekarang', href: '#contact', variant: 'primary', background: '#ffffff', color: '#4338ca' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Kekuatan Finansial Koperasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-04', components: [
            { id: 't', type: 'heading', props: { content: 'Produk Simpanan & Investasi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-04', components: [
            { id: 't', type: 'heading', props: { content: 'Tata Kelola & Kepatuhan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Konsultasi Keanggotaan Premium', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-04', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Koperasi Prima Utama. Diawasi Kemenkop & OJK.', fontSize: '14px', color: '#cbd5e1' } },
          ]},
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 9. PERDAGANGAN / RETAIL — 3 templates
  // ═══════════════════════════════════════════════════════════
  'perdagangan-retail': {
    categoryName: 'Perdagangan / Retail',
    templates: [

      // 9.1 Retail Modern — Split light, product-forward
      {
        id: 'retail-modern',
        name: 'Retail Modern Wholesale',
        description: 'Template distributor modern dengan split-light hero, katalog produk terlaris, partner brand, dan formulir pemesanan grosir.',
        thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
        tags: ['Wholesale', 'Distributor', 'Modern', 'B2B'],
        theme: { primaryColor: '#2563eb', dark: false },
        animations: ['fade-up', 'slide-left', 'hover-lift'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-04', components: [
            { id: 'logo', type: 'heading', props: { content: 'MEGA DISTRIBUSI', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#1d4ed8' } },
            { id: 'cta', type: 'button', props: { label: 'Order Grosir', href: '#contact', variant: 'primary', background: '#2563eb', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-02', components: [
            { id: 'title', type: 'heading', props: { content: 'Distributor Terpercaya Untuk Kebutuhan Bisnis Anda', level: 'h1', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: '50.000+ SKU produk siap stok, harga grosir kompetitif, dan pengiriman ke seluruh Indonesia.', fontSize: '16px', color: '#64748b', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Lihat Katalog Produk', href: '#products', variant: 'primary', background: '#2563eb', color: '#ffffff' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop', alt: 'Retail Store', width: '100%', height: '360px', objectFit: 'cover' } },
          ]},
          { id: 'products', type: 'products', layout: 'products-01', components: [
            { id: 't', type: 'heading', props: { content: 'Produk & Kategori Terlaris', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Jaringan Distribusi Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'clients', type: 'clients', layout: 'clients-01', components: [
            { id: 't', type: 'heading', props: { content: 'Brand Partner Resmi', level: 'h2', fontSize: '28px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-01', components: [
            { id: 't', type: 'heading', props: { content: 'Pemesanan Grosir & Partnership', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-01', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Mega Distribusi Indonesia.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
          ]},
        ]
      },

      // 9.2 Retail Premium — Indigo split, luxury retail
      {
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
        ]
      },

      // 9.3 Retail Commerce — Gradient, promotional campaign
      {
        id: 'retail-commerce',
        name: 'Retail Commerce Promo',
        description: 'Template promosi retail dengan gradient hero, galeri promosi, statistik penjualan, dan kontak multi-channel.',
        thumbnail: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80',
        tags: ['Commerce', 'Promotions', 'Sales', 'Multi-Channel'],
        theme: { primaryColor: '#e11d48', dark: false },
        animations: ['fade-in', 'scale-in', 'slide-right'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'SUPERMART INDONESIA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#9f1239' } },
            { id: 'cta', type: 'button', props: { label: '🔥 Promo Hari Ini', href: '#products', variant: 'primary', background: '#e11d48', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-01', components: [
            { id: 'badge', type: 'badge', props: { content: '⚡ Flash Sale — 24 Jam Setiap Hari', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Harga Terbaik, Pilihan Terlengkap, Pengiriman Tercepat', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: '100.000+ produk tersedia di seluruh gerai dan platform online kami. Belanja mudah, hemat, dan terpercaya.', fontSize: '18px', color: '#ffe4e6', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Belanja Sekarang', href: '#products', variant: 'primary', background: '#ffffff', color: '#9f1239' } },
          ]},
          { id: 'products', type: 'products', layout: 'products-01', components: [
            { id: 't', type: 'heading', props: { content: 'Penawaran Spesial & Best Sellers', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Supermart Dalam Angka', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'gallery', type: 'gallery', layout: 'gallery-02', components: [
            { id: 't', type: 'heading', props: { content: 'Gerai & Outlet Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-03', components: [
            { id: 't', type: 'heading', props: { content: 'Hubungi Kami / Temukan Gerai Terdekat', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-02', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Supermart Indonesia. Belanja Lebih, Hemat Lebih.', fontSize: '14px', color: '#94a3b8' } },
          ]},
        ]
      },
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // 10. KOPERASI SUSU — 3 templates
  // ═══════════════════════════════════════════════════════════
  'koperasi-susu': {
    categoryName: 'Koperasi Susu',
    templates: [

      // 10.1 Dairy Cooperative — Clean white, farm-fresh narrative
      {
        id: 'dairy-coop',
        name: 'Koperasi Susu Perah Fresh',
        description: 'Template koperasi susu dengan hero bersih, jaringan peternak, proses pasteurisasi, dan distribusi susu segar berkualitas.',
        thumbnail: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80',
        tags: ['Dairy', 'Fresh Milk', 'Farmer Network', 'Quality'],
        theme: { primaryColor: '#0d9488', dark: false },
        animations: ['fade-in', 'counter-up', 'hover-lift'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-01', components: [
            { id: 'logo', type: 'heading', props: { content: 'KOPTAN SUSU MURNI', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#115e59' } },
            { id: 'cta', type: 'button', props: { label: 'Kemitraan Peternak', href: '#contact', variant: 'primary', background: '#0d9488', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-07', components: [
            { id: 'title', type: 'heading', props: { content: 'Susu Segar Murni Dari Peternak Lokal Pilihan', level: 'h1', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Mengintegrasikan 2.500+ peternak sapi perah dengan standar pasteurisasi higienis dan rantai dingin modern dari ladang ke meja makan Anda.', fontSize: '18px', color: '#64748b', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Pelajari Program Kemitraan', href: '#about', variant: 'primary', background: '#0d9488', color: '#ffffff' } },
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
        ]
      },

      // 10.2 Dairy Premium — Soft split, premium brand
      {
        id: 'dairy-premium',
        name: 'Dairy Premium Brand',
        description: 'Template brand susu premium dengan split hero tenang, profil pertanian terintegrasi, sertifikasi halal & BPOM, dan distribusi modern.',
        thumbnail: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&auto=format&fit=crop&q=80',
        tags: ['Premium', 'Organic', 'Halal', 'BPOM'],
        theme: { primaryColor: '#0f766e', dark: false },
        animations: ['fade-up', 'slide-left', 'hover-glow'],
        sections: [
          { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
            { id: 'logo', type: 'heading', props: { content: 'SUSU PREMIUM ALAMI', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#0f766e' } },
            { id: 'cta', type: 'button', props: { label: 'Order Langganan', href: '#contact', variant: 'primary', background: '#0f766e', color: '#ffffff' } },
          ]},
          { id: 'hero', type: 'hero', layout: 'hero-05', components: [
            { id: 'badge', type: 'badge', props: { content: '🥛 Organik • Halal MUI • BPOM Certified', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Susu Organik Premium Tanpa Bahan Pengawet', level: 'h1', fontSize: '48px', fontWeight: '800', color: '#0f172a', align: 'left' } },
            { id: 'desc', type: 'text', props: { content: 'Dari peternakan organik bersertifikat langsung ke pintu rumah Anda. Fresh, bergizi, dan bebas hormon sintetis.', fontSize: '18px', color: '#64748b', align: 'left' } },
            { id: 'btn', type: 'button', props: { label: 'Mulai Berlangganan', href: '#contact', variant: 'primary', background: '#0f766e', color: '#ffffff' } },
            { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=600&auto=format&fit=crop', alt: 'Premium Dairy', width: '100%', height: '380px', objectFit: 'cover' } },
          ]},
          { id: 'about', type: 'about', layout: 'about-03', components: [
            { id: 't', type: 'heading', props: { content: 'Peternakan Sapi Perah Premium Kami', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'services', type: 'services', layout: 'services-04', components: [
            { id: 't', type: 'heading', props: { content: 'Lini Produk Premium', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
            { id: 't', type: 'heading', props: { content: 'Kapasitas & Jangkauan Distribusi', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
            { id: 't', type: 'heading', props: { content: 'Sertifikasi Resmi & Penghargaan', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'contact', type: 'contact', layout: 'contact-02', components: [
            { id: 't', type: 'heading', props: { content: 'Langganan Susu Premium Harian', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', align: 'center' } },
          ]},
          { id: 'footer', type: 'footer', layout: 'footer-04', components: [
            { id: 'c', type: 'text', props: { content: '© 2026 Susu Premium Alami Indonesia. Pure. Natural. Nourishing.', fontSize: '14px', color: '#cbd5e1' } },
          ]},
        ]
      },

      // 10.3 Farmer Network — Dark hero, supply chain focus
      {
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
            { id: 'badge', type: 'badge', props: { content: '🐄 Menghubungkan 5.000+ Peternak Lokal', variant: 'primary' } },
            { id: 'title', type: 'heading', props: { content: 'Platform Koperasi Susu Untuk Peternak Indonesia', level: 'h1', fontSize: '50px', fontWeight: '900', color: '#ffffff', align: 'center' } },
            { id: 'desc', type: 'text', props: { content: 'Ekosistem terintegrasi: pendampingan peternak, kumpul susu, pengolahan, dan pemasaran langsung ke industri F&B nasional.', fontSize: '18px', color: '#e2e8f0', align: 'center' } },
            { id: 'btn', type: 'button', props: { label: 'Bergabung Sebagai Peternak Mitra', href: '#contact', variant: 'primary', background: '#10b981', color: '#ffffff' } },
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
        ]
      },
    ]
  },
};

// ─────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────

/** Get all starter templates for a given industry category slug */
export const getCategoryStarterTemplates = (categorySlug) => {
  if (!categorySlug) return [];
  // Normalize slug: map Str::slug-generated slug to INDUSTRY_STARTER_TEMPLATES key
  const slugMap = {
    'group-perusahaan-holding-company': 'group-perusahaan',
    'logistik-transportasi': 'logistik-transportasi',
    'perusahaan-jasa': 'perusahaan-jasa',
    'umkm': 'umkm',
    'pendidikan-pelatihan': 'pendidikan-pelatihan',
    'organisasi-asosiasi': 'organisasi-asosiasi',
    'industri-manufaktur': 'industri-manufaktur',
    'koperasi': 'koperasi',
    'perdagangan-retail': 'perdagangan-retail',
    'perdagangan-retail': 'perdagangan-retail',
    'koperasi-susu': 'koperasi-susu',
  };
  const normalizedSlug = slugMap[categorySlug] || categorySlug;
  const categoryData = INDUSTRY_STARTER_TEMPLATES[normalizedSlug];
  return categoryData ? categoryData.templates : [];
};

/** Get a single template by id */
export const getStarterTemplateById = (templateId) => {
  for (const category of Object.values(INDUSTRY_STARTER_TEMPLATES)) {
    const found = category.templates.find(t => t.id === templateId);
    if (found) return found;
  }
  return null;
};

/** Get total template count */
export const getTotalStarterTemplateCount = () => {
  return Object.values(INDUSTRY_STARTER_TEMPLATES).reduce(
    (count, category) => count + category.templates.length,
    0
  );
};
