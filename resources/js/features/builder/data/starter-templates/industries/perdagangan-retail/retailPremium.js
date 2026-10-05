/**
 * Retail Premium Boutique — Haute Horlogerie & Curated Luxury Maison
 * Starter template for luxury fashion, fine timepieces, and exclusive boutique retailers.
 * Full Right-Inspector support for all cards, images, badges, headings, and buttons.
 */
export default {
  id: 'retail-premium',
  name: 'Retail Premium Boutique',
  description: 'Template retail butik mewah kelas atas dengan private concierge navigation, 4 metrik prestise, kurasi koleksi eksklusif, bespoke white-glove experience, dan undangan klien VIP — untuk luxury boutique dan flagship brand.',
  thumbnail: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Boutique', 'Luxury', 'Fashion', 'Watches', 'Exclusive'],
  theme: {
    primaryColor: '#7c3aed',
    secondaryColor: '#f5f3ff',
    accentColor: '#8b5cf6',
    dark: true,
    surface: '#0a0414',
    text: '#faf5ff',
    muted: '#cbd5e1',
    border: 'rgba(168,85,247,0.4)',
    radius: 'lg',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['scale-in', 'hover-glow', 'fade-up', 'slide-right'],
  sections: [
    {
      id: 'lux-nav-sec',
      type: 'navbar',
      layout: 'retail-nav-luxury',
      components: [
        { id: 'lux-brand', type: 'heading', props: { content: 'MAISON PRESTIGE', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.15em' } },
        { id: 'lux-status-badge', type: 'badge', props: { text: '✦ PRIVATE CONCIERGE & 100% AUTHENTICITY GUARANTEE', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#d8b4fe', borderColor: 'rgba(168,85,247,0.4)' } },
        { id: 'lux-vip-btn', type: 'button', props: { label: 'Private VIP Lounge ✨', href: '#experience', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(24,15,46,0.8)', color: '#e9d5ff', borderColor: 'rgba(168,85,247,0.5)', fontSize: '12px' } },
        { id: 'lux-book-btn', type: 'button', props: { label: 'Book Private Appointment', href: '#collection', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
      ]
    },
    {
      id: 'lux-hero-sec',
      type: 'hero',
      layout: 'retail-hero-luxury',
      components: [
        { id: 'lux-badge', type: 'badge', props: { text: '💎 CURATED WORLDWIDE LUXURY & HAUTE COUTURE', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#d8b4fe', borderColor: 'rgba(168,85,247,0.45)' } },
        { id: 'lux-title', type: 'heading', props: { content: 'Simbol Keanggunan Tanpa Kompromi & Kurasi Karya Seni Bernilai Tinggi', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#faf5ff', letterSpacing: '-0.025em' } },
        { id: 'lux-desc', type: 'text', props: { content: 'Destinasi eksklusif bagi penikmat kemewahan otentik. Menghadirkan mahakarya horologi Swiss, kerajinan kulit Prancis, dan busana adibusana terbatas dengan sertifikat keaslian internasional.', fontSize: '17px', color: '#cbd5e1' } },
        { id: 'lux-btn1', type: 'button', props: { label: 'Jelajahi Koleksi Eksklusif ✨', href: '#collection', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', color: '#ffffff', fontWeight: '700' } },
        { id: 'lux-btn2', type: 'button', props: { label: 'Jadwalkan Private Viewing', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(24,15,46,0.7)', color: '#f5d0fe', borderColor: 'rgba(192,132,252,0.4)' } },

        // 4 Luxury Metric Cards
        {
          id: 'lux-stat1-card',
          type: 'card',
          props: { background: '#190e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'lux-stat1-num', type: 'heading', props: { content: '100% Original', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#f0abfc' } },
            { id: 'lux-stat1-lbl', type: 'text', props: { content: 'Garansi Keaslian Seumur Hidup', fontSize: '12px', color: '#a855f7' } },
          ]
        },
        {
          id: 'lux-stat2-card',
          type: 'card',
          props: { background: '#190e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'lux-stat2-num', type: 'heading', props: { content: '60+ Brand', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#e9d5ff' } },
            { id: 'lux-stat2-lbl', type: 'text', props: { content: 'Maison Mewah Terkemuka', fontSize: '12px', color: '#a855f7' } },
          ]
        },
        {
          id: 'lux-stat3-card',
          type: 'card',
          props: { background: '#190e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'lux-stat3-num', type: 'heading', props: { content: 'VIP Suite', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#e9d5ff' } },
            { id: 'lux-stat3-lbl', type: 'text', props: { content: 'Lounge Private Shopping', fontSize: '12px', color: '#a855f7' } },
          ]
        },
        {
          id: 'lux-stat4-card',
          type: 'card',
          props: { background: '#190e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'lux-stat4-num', type: 'heading', props: { content: 'Doorstep', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#f0abfc' } },
            { id: 'lux-stat4-lbl', type: 'text', props: { content: 'White-Glove Delivery Aman', fontSize: '12px', color: '#a855f7' } },
          ]
        },

        // Boutique Showroom Showcase Card
        {
          id: 'luxury-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #241242 0%, #120724 100%)', borderColor: 'rgba(168,85,247,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'luxury-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1000&auto=format&fit=crop&q=80',
                alt: 'Haute Horlogerie and Luxury Fashion Boutique Flagship Suite',
                borderRadius: '16px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'lux-card-badge', type: 'badge', props: { text: '🥂 PRIVATE SHOPPING APPOINTMENT ONLY', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#e9d5ff' } },
            { id: 'lux-card-title', type: 'heading', props: { content: 'Pengalaman Berbelanja Personal & Intimate', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#faf5ff' } },
            { id: 'lux-card-desc', type: 'text', props: { content: 'Ditemani oleh certified luxury advisor kami dalam suasana mewah nan privat dengan sajian champagne dan presentasi koleksi langka.', fontSize: '13px', color: '#cbd5e1' } },
          ]
        }
      ]
    },
    {
      id: 'lux-collection-sec',
      type: 'products',
      layout: 'retail-collection-luxury',
      components: [
        { id: 'col-badge', type: 'badge', props: { text: '✨ MAISON CURATED PIECES', variant: 'outline', background: 'rgba(124,58,237,0.1)', color: '#7c3aed', borderColor: 'rgba(124,58,237,0.3)' } },
        { id: 'col-title', type: 'heading', props: { content: 'Koleksi Mahakarya Pilihan Untuk Kolektor & Penikmat Kemewahan', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
        { id: 'col-desc', type: 'text', props: { content: 'Setiap karya melewati proses inspeksi keaslian 10 langkah oleh ahli kami dengan sertifikasi legal dan garansi internasional.', fontSize: '16px', color: '#64748b' } },

        // Card 1: Watches
        {
          id: 'card-col1',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ede9fe', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'col1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
                alt: 'Haute Horlogerie Swiss Luxury Timepiece Watch',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'col1-badge', type: 'badge', props: { text: '⌚ HAUTE HORLOGERIE', variant: 'solid', background: '#f5f3ff', color: '#6d28d9' } },
            { id: 'col1-title', type: 'heading', props: { content: 'Swiss Luxury Timepieces & Tourbillon', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'col1-desc', type: 'text', props: { content: 'Koleksi jam tangan mewah limited edition dengan presisi mekanis tingkat tinggi, boks original pabrikan, dan garansi resmi global.', fontSize: '14px', color: '#64748b' } },
            { id: 'col1-btn', type: 'button', props: { label: 'Inquire Timepiece ⚜️', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontWeight: '600' } },
          ]
        },

        // Card 2: Leather
        {
          id: 'card-col2',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ede9fe', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'col2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
                alt: 'Artisanal Handcrafted Exotic Leather Bags and Goods',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'col2-badge', type: 'badge', props: { text: '👜 ARTISANAL LEATHER', variant: 'solid', background: '#f5f3ff', color: '#6d28d9' } },
            { id: 'col2-title', type: 'heading', props: { content: 'Rare Leathergoods & Exotic Handbags', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'col2-desc', type: 'text', props: { content: 'Tas kulit eksklusif buatan tangan artisan Eropa dengan material kulit terbaik, hardware berlapis emas, dan histori kepemilikan terverifikasi.', fontSize: '14px', color: '#64748b' } },
            { id: 'col2-btn', type: 'button', props: { label: 'Explore Leatherwork ⚜️', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontWeight: '600' } },
          ]
        },

        // Card 3: Apparel
        {
          id: 'card-col3',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ede9fe', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'col3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80',
                alt: 'Designer Runway High Fashion Apparel',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'col3-badge', type: 'badge', props: { text: '👗 RUNWAY APPAREL', variant: 'solid', background: '#f5f3ff', color: '#6d28d9' } },
            { id: 'col3-title', type: 'heading', props: { content: 'Haute Couture & Runway Apparel', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'col3-desc', type: 'text', props: { content: 'Busana perancang busana ternama langsung dari panggung fashion week Milan dan Paris. Disediakan layanan fitting eksklusif di private room.', fontSize: '14px', color: '#64748b' } },
            { id: 'col3-btn', type: 'button', props: { label: 'Book Private Fitting ⚜️', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff', fontWeight: '600' } },
          ]
        }
      ]
    },
    {
      id: 'lux-experience-sec',
      type: 'services',
      layout: 'retail-experience-luxury',
      components: [
        { id: 'exp-badge', type: 'badge', props: { text: '⚜️ BESPOKE WHITE-GLOVE SERVICE', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#d8b4fe', borderColor: 'rgba(168,85,247,0.4)' } },
        { id: 'exp-title', type: 'heading', props: { content: 'Layanan Eksklusif Yang Dirancang Khusus Untuk Kenyamanan Anda', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#faf5ff', letterSpacing: '-0.02em' } },
        { id: 'exp-desc', type: 'text', props: { content: 'Kami menjamin setiap transaksi berbelanja di Maison Prestige memberikan pengalaman tak tertandingi dengan standar privasi tertinggi.', fontSize: '16px', color: '#cbd5e1' } },

        // 4 White-Glove Advantage Cards
        {
          id: 'card-exp1',
          type: 'card',
          props: { background: '#180e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'exp1-badge', type: 'badge', props: { text: '🤵 1-ON-1 ADVISOR', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#d8b4fe' } },
            { id: 'exp1-title', type: 'heading', props: { content: 'Personal Luxury Concierge 24/7', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#faf5ff' } },
            { id: 'exp1-desc', type: 'text', props: { content: 'Konsultan gaya pribadi yang berdedikasi mencari produk langka, mengurus reservasi salon boutique, dan pengiriman VIP.', fontSize: '14px', color: '#a855f7' } },
          ]
        },
        {
          id: 'card-exp2',
          type: 'card',
          props: { background: '#180e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'exp2-badge', type: 'badge', props: { text: '🥂 PRIVATE SUITE', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#d8b4fe' } },
            { id: 'exp2-title', type: 'heading', props: { content: 'Ruang VIP Pribadi Kedap Suara', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#faf5ff' } },
            { id: 'exp2-desc', type: 'text', props: { content: 'Nikmati belanja secara privat tanpa gangguan di suite mewah kami yang dilengkapi sofa Chesterfield dan sajian beverage premium.', fontSize: '14px', color: '#a855f7' } },
          ]
        },
        {
          id: 'card-exp3',
          type: 'card',
          props: { background: '#180e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'exp3-badge', type: 'badge', props: { text: '🚗 WHITE-GLOVE FLEET', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#d8b4fe' } },
            { id: 'exp3-title', type: 'heading', props: { content: 'Pengantaran Khusus Bersarung Tangan Putih', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#faf5ff' } },
            { id: 'exp3-desc', type: 'text', props: { content: 'Kurir berseragam resmi dengan kendaraan khusus dan asuransi all-risk 100% mengantarkan langsung ke kediaman Anda.', fontSize: '14px', color: '#a855f7' } },
          ]
        },
        {
          id: 'card-exp4',
          type: 'card',
          props: { background: '#180e2e', borderColor: 'rgba(168,85,247,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'exp4-badge', type: 'badge', props: { text: '📜 BLOCKCHAIN PASSPORT', variant: 'solid', background: 'rgba(124,58,237,0.25)', color: '#d8b4fe' } },
            { id: 'exp4-title', type: 'heading', props: { content: 'Sertifikat Digital NFT & Kartu Garansi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#faf5ff' } },
            { id: 'exp4-desc', type: 'text', props: { content: 'Setiap barang dilengkapi paspor digital kriptografis yang membuktikan keaslian serta riwayat servis seumur hidup.', fontSize: '14px', color: '#a855f7' } },
          ]
        },

        // Maison Heritage Banner Card
        {
          id: 'heritage-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #2e1065 0%, #120724 100%)', borderColor: 'rgba(168,85,247,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
          childrenComponents: [
            { id: 'heritage-banner-badge', type: 'badge', props: { text: '👑 GLOBAL LUXURY NETWORK ALLIANCE', variant: 'solid', background: 'rgba(168,85,247,0.3)', color: '#f5d0fe' } },
            { id: 'heritage-banner-title', type: 'heading', props: { content: 'Akses Eksklusif Ke Auction House & Peluncuran Koleksi Dunia', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
            { id: 'heritage-banner-desc', type: 'text', props: { content: 'Sebagai member Maison Prestige Club, Anda mendapatkan prioritas pemesanan (allocation priority) untuk model jam dan tas yang masuk daftar tunggu global.', fontSize: '14px', color: '#cbd5e1' } },
            { id: 'heritage-banner-btn', type: 'button', props: { label: 'Ajukan Undangan VIP Member ✨', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', color: '#ffffff', fontWeight: '700' } },
          ]
        }
      ]
    },
    {
      id: 'lux-cta-sec',
      type: 'contact',
      layout: 'retail-cta-luxury',
      components: [
        {
          id: 'cta-luxury-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #2e1065 0%, #120724 100%)', borderColor: 'rgba(168,85,247,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'cta-lux-badge', type: 'badge', props: { text: '👑 MAISON PRESTIGE PRIVATE CLIENT', variant: 'solid', background: 'rgba(168,85,247,0.3)', color: '#f5d0fe' } },
            { id: 'cta-lux-title', type: 'heading', props: { content: 'Mulai Pengalaman Eksklusif & Dapatkan Akses Kurasi Private', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
            { id: 'cta-lux-desc', type: 'text', props: { content: 'Hubungi Private Client Concierge kami untuk konsultasi koleksi, pemesanan kustom, atau reservasi waktu kunjungan di VIP Salon.', fontSize: '16px', color: '#e9d5ff' } },
            { id: 'cta-lux-btn1', type: 'button', props: { label: 'Hubungi Private Concierge 💬', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #9333ea, #7c3aed)', color: '#ffffff', fontWeight: '800' } },
            { id: 'cta-lux-btn2', type: 'button', props: { label: 'Unduh Lookbook Musim Ini 📖', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(18,7,36,0.8)', color: '#f5d0fe', borderColor: 'rgba(168,85,247,0.4)' } },
          ]
        }
      ]
    },
    {
      id: 'lux-footer-sec',
      type: 'footer',
      layout: 'retail-footer-luxury',
      components: [
        { id: 'lux-ft-title', type: 'heading', props: { content: 'MAISON PRESTIGE INDONESIA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.1em' } },
        { id: 'lux-ft-desc', type: 'text', props: { content: 'Boutique Curator Resmi untuk Haute Horlogerie, Fine Leathergoods, dan Limited Runway Collections. Terdaftar di Asosiasi Ritel Mewah Internasional.', fontSize: '13px', color: '#a855f7' } },
        { id: 'lux-ft-copy', type: 'text', props: { content: '© 2026 Maison Prestige Indonesia. All Rights Reserved. Luxury Reimagined.', fontSize: '12px', color: '#7e22ce' } },
      ]
    }
  ],
};
