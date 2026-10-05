/**
 * Retail Commerce Promo — Omnichannel Supermart & Fast Retail
 * Starter template for high-energy supermarkets, flash deals, and omnichannel retail.
 * Full Right-Inspector support for all cards, images, badges, headings, and buttons.
 */
export default {
  id: 'retail-commerce',
  name: 'Retail Commerce Promo',
  description: 'Template omnichannel mega retail premium dengan countdown flash deal, 4 metrik promo kilat, etalase diskon mingguan, layanan Click & Collect 2 jam, dan voucher member baru — untuk supermarket dan retail cepat.',
  thumbnail: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=80',
  tags: ['Commerce', 'Supermart', 'Omnichannel', 'Flash Deals', 'Grocery', 'Electronics'],
  theme: {
    primaryColor: '#e11d48',
    secondaryColor: '#fff1f2',
    accentColor: '#f43f5e',
    dark: true,
    surface: '#0d0307',
    text: '#fff1f2',
    muted: '#fda4af',
    border: 'rgba(244,63,94,0.4)',
    radius: 'lg',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-in', 'scale-in', 'slide-right', 'hover-glow'],
  sections: [
    {
      id: 'omni-nav-sec',
      type: 'navbar',
      layout: 'retail-nav-omni',
      components: [
        { id: 'omni-brand', type: 'heading', props: { content: 'SUPERMART', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' } },
        { id: 'omni-deal-badge', type: 'badge', props: { text: '⚡ FLASH DEAL TODAY: DISKON S/D 70% + GRATIS ONGKIR', variant: 'solid', background: '#e11d48', color: '#ffffff' } },
        { id: 'omni-collect-btn', type: 'button', props: { label: 'Click & Collect 2 Jam 🛒', href: '#deals', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(30,10,18,0.8)', color: '#fda4af', borderColor: 'rgba(244,63,94,0.4)', fontSize: '12px' } },
        { id: 'omni-app-btn', type: 'button', props: { label: 'Download SuperApp 📱', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #e11d48, #be123c)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
      ]
    },
    {
      id: 'omni-hero-sec',
      type: 'hero',
      layout: 'retail-hero-omni',
      components: [
        { id: 'omni-badge', type: 'badge', props: { text: '⚡ OMNICHANNEL RETAIL DENGAN 250+ GERAI & APLIKASI BELANJA', variant: 'solid', background: '#be123c', color: '#ffffff' } },
        { id: 'omni-title', type: 'heading', props: { content: 'Belanja Cepat, Harga Lebih Hemat, Kirim Instan Sampai Depan Pintu', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#fff1f2', letterSpacing: '-0.025em' } },
        { id: 'omni-desc', type: 'text', props: { content: 'Pilihan 100.000+ produk kebutuhan harian, sembako segar, elektronik, hingga gadget terkini. Pesan via web/aplikasi dan ambil langsung di gerai terdekat dalam 2 jam.', fontSize: '17px', color: '#fda4af' } },
        { id: 'omni-btn1', type: 'button', props: { label: 'Serbu Flash Sale Sekarang 🔥', href: '#deals', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #e11d48, #be123c)', color: '#ffffff', fontWeight: '800' } },
        { id: 'omni-btn2', type: 'button', props: { label: 'Cek Lokasi Gerai Terdekat 📍', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(26,6,15,0.7)', color: '#fecdd3', borderColor: 'rgba(244,63,94,0.4)' } },

        // 4 Flash Promo Metric Cards
        {
          id: 'omni-stat1-card',
          type: 'card',
          props: { background: '#260a16', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'omni-stat1-num', type: 'heading', props: { content: 'Diskon 70%', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fb7185' } },
            { id: 'omni-stat1-lbl', type: 'text', props: { content: 'Flash Sale Tiap Hari', fontSize: '12px', color: '#fda4af' } },
          ]
        },
        {
          id: 'omni-stat2-card',
          type: 'card',
          props: { background: '#260a16', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'omni-stat2-num', type: 'heading', props: { content: '2 Jam', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fecdd3' } },
            { id: 'omni-stat2-lbl', type: 'text', props: { content: 'Click & Collect Express', fontSize: '12px', color: '#fda4af' } },
          ]
        },
        {
          id: 'omni-stat3-card',
          type: 'card',
          props: { background: '#260a16', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'omni-stat3-num', type: 'heading', props: { content: '250+ Gerai', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fecdd3' } },
            { id: 'omni-stat3-lbl', type: 'text', props: { content: 'Tersebar di 45 Kota', fontSize: '12px', color: '#fda4af' } },
          ]
        },
        {
          id: 'omni-stat4-card',
          type: 'card',
          props: { background: '#260a16', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'omni-stat4-num', type: 'heading', props: { content: '100% Ori', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fb7185' } },
            { id: 'omni-stat4-lbl', type: 'text', props: { content: 'Jaminan Uang Kembali', fontSize: '12px', color: '#fda4af' } },
          ]
        },

        // Mobile Showcase Card
        {
          id: 'omni-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #3f0d22 0%, #1a0610 100%)', borderColor: 'rgba(244,63,94,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'omni-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1000&auto=format&fit=crop&q=80',
                alt: 'Supermart Retail Storefront and Mobile Omnichannel Shopping App',
                borderRadius: '16px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'omni-card-badge', type: 'badge', props: { text: '🛍️ BELANJA MUDAH VIA APLIKASI & GERAI FISIK', variant: 'solid', background: '#be123c', color: '#ffffff' } },
            { id: 'omni-card-title', type: 'heading', props: { content: 'Pengalaman Belanja Terintegrasi Seamless', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#fff1f2' } },
            { id: 'omni-card-desc', type: 'text', props: { content: 'Kumpulkan poin SuperPoin di setiap transaksi online dan offline untuk ditukarkan dengan kupon diskon langsung di kasir.', fontSize: '13px', color: '#fda4af' } },
          ]
        }
      ]
    },
    {
      id: 'omni-deals-sec',
      type: 'products',
      layout: 'retail-deals-omni',
      components: [
        { id: 'deal-badge', type: 'badge', props: { text: '🔥 FLASH SALE DEAL TERBATAS HARI INI', variant: 'solid', background: '#e11d48', color: '#ffffff' } },
        { id: 'deal-title', type: 'heading', props: { content: 'Penawaran Spesial Dengan Potongan Harga Terbesar Minggu Ini', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
        { id: 'deal-desc', type: 'text', props: { content: 'Stok promo terbatas dan diperbarui setiap 24 jam. Klaim voucher sebelum kehabisan kuota!', fontSize: '16px', color: '#64748b' } },

        // Card 1: Gadgets
        {
          id: 'card-deal1',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ffe4e6', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'deal1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
                alt: 'Smartphone Smartwatch & Gadget Promo',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'deal1-badge', type: 'badge', props: { text: '📱 GADGET & ELECTRONIC • DISKON 45%', variant: 'solid', background: '#ffe4e6', color: '#e11d48' } },
            { id: 'deal1-title', type: 'heading', props: { content: 'Smartphone, TWS Earphone & Smartwatch', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'deal1-desc', type: 'text', props: { content: 'Garansi resmi TAM/SEIN 1 tahun, gratis proteksi layar, dan cicilan 0% hingga 12 bulan menggunakan berbagai kartu bank.', fontSize: '14px', color: '#64748b' } },
            { id: 'deal1-btn', type: 'button', props: { label: 'Beli Promo Gadget ⚡', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#e11d48', color: '#ffffff', fontWeight: '700' } },
          ]
        },

        // Card 2: Fresh
        {
          id: 'card-deal2',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ffe4e6', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'deal2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&auto=format&fit=crop&q=80',
                alt: 'Buah dan Sayuran Segar Supermart Fresh',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'deal2-badge', type: 'badge', props: { text: '🍎 FRESH MARKET • PANEN PAGI INI', variant: 'solid', background: '#ffe4e6', color: '#e11d48' } },
            { id: 'deal2-title', type: 'heading', props: { content: 'Buah Impor, Sayur Organik & Daging Segar', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'deal2-desc', type: 'text', props: { content: 'Dijamin kesegarannya dengan kontrol cold storage ketat. Pengantaran menggunakan thermal bag es untuk menjaga kualitas prima.', fontSize: '14px', color: '#64748b' } },
            { id: 'deal2-btn', type: 'button', props: { label: 'Belanja Segar Sekarang 🥗', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#e11d48', color: '#ffffff', fontWeight: '700' } },
          ]
        },

        // Card 3: Home & Kitchen
        {
          id: 'card-deal3',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ffe4e6', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'deal3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80',
                alt: 'Peralatan Dapur Airfryer Blender Microwave',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'deal3-badge', type: 'badge', props: { text: '🍳 HOME APPLIANCES • BUNDLE HEMAT', variant: 'solid', background: '#ffe4e6', color: '#e11d48' } },
            { id: 'deal3-title', type: 'heading', props: { content: 'Air Fryer, Blender, Rice Cooker & Panci', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'deal3-desc', type: 'text', props: { content: 'Paket bundling perlengkapan dapur pintar hemat hingga 50%. Free ongkir ke seluruh area jabodetabek.', fontSize: '14px', color: '#64748b' } },
            { id: 'deal3-btn', type: 'button', props: { label: 'Klaim Promo Dapur 🍳', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#e11d48', color: '#ffffff', fontWeight: '700' } },
          ]
        }
      ]
    },
    {
      id: 'omni-advantage-sec',
      type: 'services',
      layout: 'retail-omnichannel-omni',
      components: [
        { id: 'adv-badge', type: 'badge', props: { text: '⚡ KEMUDAHAN BELANJA MULTI-CHANNEL', variant: 'solid', background: '#be123c', color: '#ffffff' } },
        { id: 'adv-title', type: 'heading', props: { content: 'Solusi Belanja Terintegrasi: Toko Fisik, Website, & SuperApp', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#fff1f2', letterSpacing: '-0.02em' } },
        { id: 'adv-desc', type: 'text', props: { content: 'Nikmati fleksibilitas tanpa batas berbelanja di mana saja dengan harga, promo, dan poin yang selalu terhubung.', fontSize: '16px', color: '#fda4af' } },

        // 4 Omnichannel Advantage Cards
        {
          id: 'card-adv1',
          type: 'card',
          props: { background: '#220813', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'adv1-badge', type: 'badge', props: { text: '🏪 DRIVE-THRU / PICKUP', variant: 'solid', background: 'rgba(225,29,72,0.25)', color: '#fb7185' } },
            { id: 'adv1-title', type: 'heading', props: { content: 'Ambil di Gerai Tanpa Antre', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fff1f2' } },
            { id: 'adv1-desc', type: 'text', props: { content: 'Pesan dari rumah, staff kami siapkan kantong belanjaan Anda. Datang langsung ambil di loket express tanpa perlu antre di kasir.', fontSize: '14px', color: '#fda4af' } },
          ]
        },
        {
          id: 'card-adv2',
          type: 'card',
          props: { background: '#220813', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'adv2-badge', type: 'badge', props: { text: '🛵 KURIR INSTAN', variant: 'solid', background: 'rgba(225,29,72,0.25)', color: '#fb7185' } },
            { id: 'adv2-title', type: 'heading', props: { content: 'Kirim Cepat Sampai dalam 2 Jam', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fff1f2' } },
            { id: 'adv2-desc', type: 'text', props: { content: 'Didukung armada kurir gerai dan mitra kurir instan terpercaya untuk pengiriman sembako, sayur, dan daging super cepat.', fontSize: '14px', color: '#fda4af' } },
          ]
        },
        {
          id: 'card-adv3',
          type: 'card',
          props: { background: '#220813', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'adv3-badge', type: 'badge', props: { text: '💳 QRIS & PAYLATER', variant: 'solid', background: 'rgba(225,29,72,0.25)', color: '#fb7185' } },
            { id: 'adv3-title', type: 'heading', props: { content: 'Pembayaran Lengkap & Cicilan 0%', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fff1f2' } },
            { id: 'adv3-desc', type: 'text', props: { content: 'Mendukung QRIS semua e-wallet, kartu kredit cicilan 0% hingga 12 bulan, COD, serta paylater dengan bunga ringan.', fontSize: '14px', color: '#fda4af' } },
          ]
        },
        {
          id: 'card-adv4',
          type: 'card',
          props: { background: '#220813', borderColor: 'rgba(244,63,94,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'adv4-badge', type: 'badge', props: { text: '🎁 REWARD POIN', variant: 'solid', background: 'rgba(225,29,72,0.25)', color: '#fb7185' } },
            { id: 'adv4-title', type: 'heading', props: { content: 'SuperPoin Cashback Hingga 10%', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fff1f2' } },
            { id: 'adv4-desc', type: 'text', props: { content: 'Setiap belanja Rp 10.000 dapat 100 poin yang bisa langsung digunakan untuk memotong total tagihan belanja berikutnya.', fontSize: '14px', color: '#fda4af' } },
          ]
        },

        // Cashback Banner Card
        {
          id: 'cashback-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #881337 0%, #260a16 100%)', borderColor: 'rgba(244,63,94,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
          childrenComponents: [
            { id: 'cashback-banner-badge', type: 'badge', props: { text: '🎉 BONUS MEMBER BARU SUPERMART', variant: 'solid', background: '#e11d48', color: '#ffffff' } },
            { id: 'cashback-banner-title', type: 'heading', props: { content: 'Daftar Jadi Member Hari Ini & Klaim Voucher Diskon Rp 150.000!', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
            { id: 'cashback-banner-desc', type: 'text', props: { content: 'Plus gratis biaya pengiriman untuk 5 kali transaksi pertama tanpa minimum pembelian. Unduh aplikasinya sekarang.', fontSize: '14px', color: '#fecdd3' } },
            { id: 'cashback-banner-btn', type: 'button', props: { label: 'Klaim Voucher Rp 150.000 🎁', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #f43f5e, #e11d48)', color: '#ffffff', fontWeight: '800' } },
          ]
        }
      ]
    },
    {
      id: 'omni-cta-sec',
      type: 'contact',
      layout: 'retail-cta-omni',
      components: [
        {
          id: 'cta-omni-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #9f1239 0%, #3f0d22 100%)', borderColor: 'rgba(244,63,94,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'cta-omni-badge', type: 'badge', props: { text: '📱 SUPERMART MOBILE SUPERAPP', variant: 'solid', background: '#e11d48', color: '#ffffff' } },
            { id: 'cta-omni-title', type: 'heading', props: { content: 'Belanja Lebih Cepat, Lebih Hemat, dan Lebih Praktis dari Genggaman', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
            { id: 'cta-omni-desc', type: 'text', props: { content: 'Tersedia di Google Play Store & Apple App Store. Dapatkan update flash deal harian, live tracking kurir, dan kupon diskon eksklusif pengguna aplikasi.', fontSize: '16px', color: '#ffe4e6' } },
            { id: 'cta-omni-btn1', type: 'button', props: { label: 'Download di App Store / Play Store 📲', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#be123c', fontWeight: '800' } },
            { id: 'cta-omni-btn2', type: 'button', props: { label: 'Daftar Member Online Gratis', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(26,6,15,0.7)', color: '#fecdd3', borderColor: 'rgba(255,255,255,0.4)' } },
          ]
        }
      ]
    },
    {
      id: 'omni-footer-sec',
      type: 'footer',
      layout: 'retail-footer-omni',
      components: [
        { id: 'omni-ft-title', type: 'heading', props: { content: 'PT SUPERMART RETAIL NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
        { id: 'omni-ft-desc', type: 'text', props: { content: 'Jaringan Pasar Swalayan & Retail Omnichannel Terbesar di Indonesia. Solusi Belanja Hemat, Segar & Terpercaya Untuk Keluarga Sejak 2010.', fontSize: '13px', color: '#fda4af' } },
        { id: 'omni-ft-copy', type: 'text', props: { content: '© 2026 PT Supermart Retail Nusantara. Belanja Lebih, Hemat Lebih.', fontSize: '12px', color: '#fb7185' } },
      ]
    }
  ],
};
