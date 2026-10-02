/**
 * Kopi Karsa Roastery & Artisan Kitchen
 * Exclusive Premium Starter Template untuk UMKM Kuliner, Coffee Roastery, & Artisan Cafe Nusantara.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'umkm-artisan-culinary',
  name: 'Kopi Karsa Roastery & Cafe',
  description: 'Template premium eksklusif bergaya warm ambient espresso & kayu jati untuk UMKM kuliner, cafe roastery, bakery homemade, dan resto lokal. Dilengkapi announcement batch sangrai segar, split hero dengan live rating Google, 6 menu signature favorit berfoto & berharga, cerita direct-trade kemitraan petani kopi, ulasan foodie, info jam operasional & reservasi meja WhatsApp, serta footer hangat.',
  thumbnail: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
  tags: ['UMKM', 'Kuliner', 'Coffee Shop', 'Roastery', 'Cafe', 'Bakery', 'Artisan', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#d97706',
    secondaryColor: '#92400e',
    accentColor: '#f59e0b',
    dark: true,
    surface: '#150d08',
    text: '#fef3c7',
    muted: '#fed7aa',
    border: '#78350f',
    radius: '2xl',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-culinary-nav',
      type: 'navbar',
      layout: 'umkm-nav-culinary',
      components: [
        {
          id: 'cul-logo',
          type: 'heading',
          props: { content: 'KOPI KARSA', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#fef3c7', letterSpacing: '0.1em' },
        },
        {
          id: 'nav-cul1',
          type: 'button',
          props: { label: 'Signature Menu', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'nav-cul2',
          type: 'button',
          props: { label: 'Cerita Kopi', href: '#story', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'nav-cul3',
          type: 'button',
          props: { label: 'Ulasan Rasa', href: '#reviews', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'nav-cul4',
          type: 'button',
          props: { label: 'Lokasi & Jam Buka', href: '#location', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'cta-cul',
          type: 'button',
          props: { label: 'Pesan Meja / Beans ☕', href: '#order', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-culinary-hero',
      type: 'hero',
      layout: 'umkm-hero-culinary',
      components: [
        {
          id: 'cul-badge',
          type: 'badge',
          props: { text: 'ROASTERY & ARTISAN KITCHEN', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' },
        },
        {
          id: 'cul-title',
          type: 'heading',
          props: { content: 'Cita Rasa Kopi Nusantara yang Dipanggang Sepenuh Jiwa', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.02em' },
        },
        {
          id: 'cul-desc',
          type: 'paragraph',
          props: { content: 'Biji kopi single-origin pilihan langsung dari petani lokal, disangrai dengan presisi tinggi dan disajikan bersama pastry hangat buatan dapur sendiri.', fontSize: '17px', color: '#fed7aa' },
        },
        {
          id: 'cul-btn-pri',
          type: 'button',
          props: { label: 'Lihat Daftar Menu ☕', href: '#menu', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '800' },
        },
        {
          id: 'cul-btn-sec',
          type: 'button',
          props: { label: 'Pesan Biji Kopi (Beans)', href: '#order', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.05)', color: '#fef3c7', borderColor: '#d97706' },
        },
        {
          id: 'cul-stat1-num',
          type: 'heading',
          props: { content: '100%', level: 'h3', fontSize: '26px', fontWeight: '800', color: '#f59e0b' },
        },
        {
          id: 'cul-stat1-lbl',
          type: 'paragraph',
          props: { content: 'Single Origin Lokal', fontSize: '12px', color: '#d6d3d1' },
        },
        {
          id: 'cul-stat2-num',
          type: 'heading',
          props: { content: '4.9 ★', level: 'h3', fontSize: '26px', fontWeight: '800', color: '#f59e0b' },
        },
        {
          id: 'cul-stat2-lbl',
          type: 'paragraph',
          props: { content: '1,500+ Ulasan Google', fontSize: '12px', color: '#d6d3d1' },
        },
        {
          id: 'cul-hero-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80', alt: 'Artisan coffee bar interior', width: '100%', height: '450px', objectFit: 'cover', borderRadius: '0' },
        },
      ],
    },
    {
      id: 'sec-culinary-menu',
      type: 'menu',
      layout: 'umkm-menu-culinary',
      components: [
        {
          id: 'menu-badge',
          type: 'badge',
          props: { text: 'PILIHAN MENU TERFAVORIT', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' },
        },
        {
          id: 'menu-title',
          type: 'heading',
          props: { content: 'Kreasi Rasa Autentik dari Barista & Chef Kami', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fef3c7', textAlign: 'center' },
        },
        {
          id: 'menu-desc',
          type: 'paragraph',
          props: { content: 'Setiap cangkir kopi dan hidangan disiapkan segar dengan bahan baku alami berkualitas tinggi tanpa pengawet.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' },
        },
        {
          id: 'm1-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80', alt: 'Karsa Aren Cremoso', width: '100%', height: '208px', objectFit: 'cover' },
        },
        {
          id: 'm1-title',
          type: 'heading',
          props: { content: 'Karsa Aren Cremoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm1-desc',
          type: 'paragraph',
          props: { content: 'Espresso blend khas dengan gula aren organik murni dan fresh milk creamy.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'm1-price',
          type: 'badge',
          props: { text: 'Rp 28.000', variant: 'solid', background: '#d97706', color: '#ffffff' },
        },
        {
          id: 'm2-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80', alt: 'Manual Brew V60 Specialty', width: '100%', height: '208px', objectFit: 'cover' },
        },
        {
          id: 'm2-title',
          type: 'heading',
          props: { content: 'Manual Brew V60 Specialty', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm2-desc',
          type: 'paragraph',
          props: { content: 'Pilihan single-origin Gayo Wine, Flores Bajawa, atau Toraja Sapan dengan tasting notes floral & fruity.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'm2-price',
          type: 'badge',
          props: { text: 'Rp 35.000', variant: 'solid', background: '#d97706', color: '#ffffff' },
        },
        {
          id: 'm3-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80', alt: 'Croissant Butter Almond', width: '100%', height: '208px', objectFit: 'cover' },
        },
        {
          id: 'm3-title',
          type: 'heading',
          props: { content: 'Croissant Butter Almond', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm3-desc',
          type: 'paragraph',
          props: { content: 'Pastry renyah berlapis dengan isian krim almond manis dan taburan almond panggang renyah.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'm3-price',
          type: 'badge',
          props: { text: 'Rp 32.000', variant: 'solid', background: '#d97706', color: '#ffffff' },
        },
        {
          id: 'm4-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80', alt: 'Nasi Goreng Kecombrang Iga', width: '100%', height: '208px', objectFit: 'cover' },
        },
        {
          id: 'm4-title',
          type: 'heading',
          props: { content: 'Nasi Goreng Kecombrang Iga', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm4-desc',
          type: 'paragraph',
          props: { content: 'Nasi goreng harum rempah bunga kecombrang dengan suwiran iga sapi empuk dan emping gurih.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'm4-price',
          type: 'badge',
          props: { text: 'Rp 55.000', variant: 'solid', background: '#d97706', color: '#ffffff' },
        },
        {
          id: 'm5-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80', alt: 'Matcha Oat Latte Kyoto', width: '100%', height: '208px', objectFit: 'cover' },
        },
        {
          id: 'm5-title',
          type: 'heading',
          props: { content: 'Matcha Oat Latte Kyoto', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm5-desc',
          type: 'paragraph',
          props: { content: 'Ceremonial grade matcha Jepang berpadu lembut dengan susu gandum (oat milk) bebas laktosa.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'm5-price',
          type: 'badge',
          props: { text: 'Rp 36.000', variant: 'solid', background: '#d97706', color: '#ffffff' },
        },
        {
          id: 'm6-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80', alt: 'Spaghetti Tuna Sambal Matah', width: '100%', height: '208px', objectFit: 'cover' },
        },
        {
          id: 'm6-title',
          type: 'heading',
          props: { content: 'Spaghetti Tuna Sambal Matah', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm6-desc',
          type: 'paragraph',
          props: { content: 'Pasta al dente ditumis dengan potongan tuna segar, bawang merah, serai, dan irisan cabai rawit khas Bali.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'm6-price',
          type: 'badge',
          props: { text: 'Rp 48.000', variant: 'solid', background: '#d97706', color: '#ffffff' },
        },
        {
          id: 'menu-cta-btn',
          type: 'button',
          props: { label: 'Unduh E-Menu Lengkap (PDF) 📄', href: '#order', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-culinary-story',
      type: 'story',
      layout: 'umkm-story-culinary',
      components: [
        {
          id: 'sty-badge',
          type: 'badge',
          props: { text: 'CERITA DARI HULU KE HILIR', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' },
        },
        {
          id: 'sty-title',
          type: 'heading',
          props: { content: 'Bermula dari Cinta pada Petani Kopi Nusantara', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fef3c7' },
        },
        {
          id: 'sty-desc',
          type: 'paragraph',
          props: { content: 'Didirikan pada tahun 2019 di sudut kota Yogyakarta, Kopi Karsa bertekad menjembatani kerja keras kelompok tani lokal di pelosok Sumatra, Jawa, Bali, hingga Flores langsung ke meja Anda dengan skema Direct-Trade berkeadilan.', fontSize: '16px', color: '#fed7aa' },
        },
        {
          id: 'v1-title',
          type: 'heading',
          props: { content: 'Fair Trade & Kemitraan Petani', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'v1-desc',
          type: 'paragraph',
          props: { content: 'Kami membeli biji kopi di atas harga pasar untuk mendukung kesejahteraan keluarga petani kopi binaan.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'v2-title',
          type: 'heading',
          props: { content: 'Small Batch Artisan Roasting', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'v2-desc',
          type: 'paragraph',
          props: { content: 'Disangrai dalam jumlah kecil maksimal 5kg per batch menggunakan mesin buatan anak bangsa untuk profil rasa optimal.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'v3-title',
          type: 'heading',
          props: { content: 'Bahan Baku Alami Tanpa Kimiawi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'v3-desc',
          type: 'paragraph',
          props: { content: 'Semua sirup, saus karamel, dan adonan bakery dibuat secara manual (from scratch) setiap pagi.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'sty-cta-btn',
          type: 'button',
          props: { label: 'Kunjungi Kedai Roastery Kami ➔', href: '#location', variant: 'outline', size: 'medium', radius: 'full', background: 'rgba(217,119,6,0.1)', color: '#f59e0b', borderColor: '#d97706' },
        },
      ],
    },
    {
      id: 'sec-culinary-testimonials',
      type: 'testimonials',
      layout: 'umkm-testimonials-culinary',
      components: [
        {
          id: 'rev-badge',
          type: 'badge',
          props: { text: 'ULASAN KOMUNITAS & FOODIE', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' },
        },
        {
          id: 'rev-title',
          type: 'heading',
          props: { content: 'Kata Mereka Tentang Secangkir Karsa', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fef3c7', textAlign: 'center' },
        },
        {
          id: 'rev-desc',
          type: 'paragraph',
          props: { content: 'Pengalaman nyata dari para pecinta kopi, remote worker, dan pelanggan setia kami.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' },
        },
        {
          id: 'r1-quote',
          type: 'paragraph',
          props: { content: '"V60 Gayo Wine-nya luar biasa! Profil acidity-nya pas dan aftertaste floral yang lembut. Suasana tempatnya sangat nyaman untuk WFC berjam-jam."', fontSize: '14px', color: '#fed7aa' },
        },
        {
          id: 'r1-author',
          type: 'heading',
          props: { content: 'Dimas Wicaksono', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'r1-role',
          type: 'paragraph',
          props: { content: 'Coffee Enthusiast & UI Designer', fontSize: '12px', color: '#f59e0b' },
        },
        {
          id: 'r2-quote',
          type: 'paragraph',
          props: { content: '"Karsa Aren Cremoso dan Croissant Almond-nya perpaduan juara. Selalu mampir ke sini setiap akhir pekan bareng keluarga. Pelayanannya sangat ramah!"', fontSize: '14px', color: '#fed7aa' },
        },
        {
          id: 'r2-author',
          type: 'heading',
          props: { content: 'Siti Sarah Anindita', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'r2-role',
          type: 'paragraph',
          props: { content: 'Pelanggan Setia Karsa', fontSize: '12px', color: '#f59e0b' },
        },
        {
          id: 'r3-quote',
          type: 'paragraph',
          props: { content: '"Biji kopi sangrai mereka (beans) selalu saya stok di kantor. Packaging rapi dengan degas valve berkualitas dan roasting date selalu fresh < 7 hari."', fontSize: '14px', color: '#fed7aa' },
        },
        {
          id: 'r3-author',
          type: 'heading',
          props: { content: 'Reza Pratama', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'r3-role',
          type: 'paragraph',
          props: { content: 'Founder Startup & Home Brewer', fontSize: '12px', color: '#f59e0b' },
        },
      ],
    },
    {
      id: 'sec-culinary-location',
      type: 'location',
      layout: 'umkm-location-culinary',
      components: [
        {
          id: 'loc-badge',
          type: 'badge',
          props: { text: 'KUNJUNGI KEDAI KAMI', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#f59e0b', borderColor: '#d97706' },
        },
        {
          id: 'loc-title',
          type: 'heading',
          props: { content: 'Temukan Suasana Hangat & Nyaman di Kopi Karsa', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fef3c7' },
        },
        {
          id: 'loc-desc',
          type: 'paragraph',
          props: { content: 'Tersedia area indoor ber-AC bebas asap rokok, outdoor garden yang rindang, stopkontak di setiap meja, dan WiFi berkecepatan tinggi.', fontSize: '16px', color: '#fed7aa' },
        },
        {
          id: 'loc-addr-title',
          type: 'heading',
          props: { content: 'Alamat & Titik Temu', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'loc-addr-desc',
          type: 'paragraph',
          props: { content: 'Jl. Prawirotaman No. 42, Brontokusuman, Mergangsan, Kota Yogyakarta, D.I. Yogyakarta 55153', fontSize: '14px', color: '#fed7aa' },
        },
        {
          id: 'loc-hrs-title',
          type: 'heading',
          props: { content: 'Jam Operasional Kedai', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'loc-hrs-desc',
          type: 'paragraph',
          props: { content: 'Senin - Minggu: 07.00 - 23.00 WIB (Dapur tutup pukul 22.00 WIB)', fontSize: '14px', color: '#fed7aa' },
        },
        {
          id: 'loc-btn-wa',
          type: 'button',
          props: { label: 'Reservasi Meja / WhatsApp 💬', href: '#order', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'loc-btn-map',
          type: 'button',
          props: { label: 'Buka di Google Maps 📍', href: '#location', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(217,119,6,0.1)', color: '#fef3c7', borderColor: '#d97706' },
        },
        {
          id: 'loc-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', alt: 'Cozy coffee shop atmosphere', width: '100%', height: '460px', objectFit: 'cover', borderRadius: '24px' },
        },
      ],
    },
    {
      id: 'sec-culinary-footer',
      type: 'footer',
      layout: 'umkm-footer-culinary',
      components: [
        {
          id: 'ftr-cul-brand',
          type: 'heading',
          props: { content: 'KOPI KARSA', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#fef3c7', letterSpacing: '0.1em' },
        },
        {
          id: 'ftr-cul-tagline',
          type: 'paragraph',
          props: { content: 'Artisan Coffee Roastery & Homemade Kitchen. Menghargai setiap proses dari biji kopi hingga cangkir Anda.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'ftr-cul-copy',
          type: 'paragraph',
          props: { content: '© 2026 Kopi Karsa Nusantara. Bangga Buatan Indonesia.', fontSize: '12px', color: '#a8a29e' },
        },
        {
          id: 'ftr-cul-lnk1',
          type: 'button',
          props: { label: 'Signature Coffee', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'ftr-cul-lnk2',
          type: 'button',
          props: { label: 'Artisan Bakery', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'ftr-cul-lnk3',
          type: 'button',
          props: { label: 'Biji Kopi Roastery', href: '#order', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'ftr-cul-lnk4',
          type: 'button',
          props: { label: 'Kemitraan & Wholesale', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
      ],
    },
  ],
};
