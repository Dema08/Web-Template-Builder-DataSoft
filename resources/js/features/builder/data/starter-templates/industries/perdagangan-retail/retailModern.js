/**
 * Retail Modern Wholesale — B2B FMCG Distribution Hub & Supply Chain
 * Starter template for modern wholesale distributors and B2B suppliers.
 * Full Right-Inspector support for all cards, images, badges, headings, and buttons.
 */
export default {
  id: 'retail-modern',
  name: 'Retail Modern Wholesale',
  description: 'Template B2B distributor grosir modern premium dengan live warehouse hub status, 4 KPI distribusi, katalog produk bertingkat, infrastruktur WMS, dan formulir kemitraan agen — khusus distributor dan retail modern.',
  thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
  tags: ['Wholesale', 'Distributor', 'B2B', 'FMCG', 'Supply Chain', 'Premium'],
  theme: {
    primaryColor: '#2563eb',
    secondaryColor: '#eff6ff',
    accentColor: '#1d4ed8',
    dark: true,
    surface: '#070d1e',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: 'rgba(59,130,246,0.3)',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'slide-left', 'hover-lift', 'scale-in'],
  sections: [
    {
      id: 'wh-nav-sec',
      type: 'navbar',
      layout: 'retail-nav-wholesale',
      components: [
        { id: 'wh-brand', type: 'heading', props: { content: 'MEGA DISTRIBUSI', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.04em' } },
        { id: 'wh-status-badge', type: 'badge', props: { text: '📦 15 HUB GUDANG REGIONAL AKTIF • MIN ORDER Rp 2.5 JUTA', variant: 'solid', background: 'rgba(37,99,235,0.25)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.3)' } },
        { id: 'wh-contact-btn', type: 'button', props: { label: 'Hubungi Sales B2B 📞', href: '#contact', variant: 'outline', size: 'small', radius: 'md', background: 'rgba(30,41,59,0.8)', color: '#cbd5e1', borderColor: 'rgba(100,116,139,0.4)', fontSize: '12px' } },
        { id: 'wh-portal-btn', type: 'button', props: { label: 'Portal Grosir Agen', href: '#catalog', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
      ]
    },
    {
      id: 'wh-hero-sec',
      type: 'hero',
      layout: 'retail-hero-wholesale',
      components: [
        { id: 'wh-badge', type: 'badge', props: { text: '📦 DISTRIBUTOR RESMI TIER-1 FMCG & SEMBAKO NASIONAL', variant: 'outline', background: 'rgba(37,99,235,0.15)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.4)' } },
        { id: 'wh-title', type: 'heading', props: { content: 'Pasokan Grosir Langsung Pabrik, Harga Terendah & SLA Pengiriman Tercepat', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
        { id: 'wh-desc', type: 'text', props: { content: 'Pusat distribusi grosir terpercaya menyuplai 4.850+ toko retail, minimarket mandiri, dan agen se-Indonesia. Didukung 15 warehouse modern dengan 50.000+ SKU siap kirim.', fontSize: '17px', color: '#94a3b8' } },
        { id: 'wh-btn1', type: 'button', props: { label: 'Lihat Daftar Harga Grosir 📑', href: '#catalog', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: '#ffffff', fontWeight: '700' } },
        { id: 'wh-btn2', type: 'button', props: { label: 'Ajukan Limit Tempo 30 Hari', href: '#contact', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.7)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.4)' } },

        // 4 Wholesale KPI Cards
        {
          id: 'wh-stat1-card',
          type: 'card',
          props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'wh-stat1-num', type: 'heading', props: { content: '50.000+ SKU', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#60a5fa' } },
            { id: 'wh-stat1-lbl', type: 'text', props: { content: 'Produk Ready Stock', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'wh-stat2-card',
          type: 'card',
          props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'wh-stat2-num', type: 'heading', props: { content: '24 - 48 Jam', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#38bdf8' } },
            { id: 'wh-stat2-lbl', type: 'text', props: { content: 'SLA Dispatch Pengiriman', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'wh-stat3-card',
          type: 'card',
          props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'wh-stat3-num', type: 'heading', props: { content: '4.850+ Mitra', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#38bdf8' } },
            { id: 'wh-stat3-lbl', type: 'text', props: { content: 'Toko & Agen Aktif', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'wh-stat4-card',
          type: 'card',
          props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'wh-stat4-num', type: 'heading', props: { content: 's/d 35%', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#60a5fa' } },
            { id: 'wh-stat4-lbl', type: 'text', props: { content: 'Margin Keuntungan Toko', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Warehouse Dispatch Showroom Card
        {
          id: 'wh-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderColor: 'rgba(59,130,246,0.35)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'wh-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80',
                alt: 'Automated Logistics Warehouse Hub Distribution Center',
                borderRadius: '14px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'wh-card-badge', type: 'badge', props: { text: '🏭 WAREHOUSE HUB AUTOMATION 24/7', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#93c5fd' } },
            { id: 'wh-card-title', type: 'heading', props: { content: 'Sistem Barcode Picking Cepat & Armada Truk Terjadwal', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'wh-card-desc', type: 'text', props: { content: 'Semua pesanan diproses melalui WMS otomatis untuk memastikan akurasi barang 99.98% tanpa risiko retur atau selisih stok.', fontSize: '13px', color: '#94a3b8' } },
          ]
        }
      ]
    },
    {
      id: 'wh-catalog-sec',
      type: 'products',
      layout: 'retail-catalog-wholesale',
      components: [
        { id: 'cat-badge', type: 'badge', props: { text: '📦 KATALOG GROSIR & TIER VOLUME', variant: 'outline', background: 'rgba(37,99,235,0.1)', color: '#2563eb', borderColor: 'rgba(37,99,235,0.3)' } },
        { id: 'cat-title', type: 'heading', props: { content: 'Kategori Produk Fast-Moving & Skema Diskon Grosir Bertingkat', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
        { id: 'cat-desc', type: 'text', props: { content: 'Pilihan produk esensial dengan perputaran tercepat di pasar retail. Dapatkan potongan harga ekstra hingga 15% untuk pembelian per karton/pallet.', fontSize: '16px', color: '#64748b' } },

        // Card 1: Sembako
        {
          id: 'card-cat1',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'cat1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
                alt: 'Sembako Beras Minyak Gula Grosir',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'cat1-badge', type: 'badge', props: { text: '🌾 SEMBAKO & BAHAN POKOK', variant: 'solid', background: '#eff6ff', color: '#1d4ed8' } },
            { id: 'cat1-title', type: 'heading', props: { content: 'Minyak Goreng, Gula Pasir, Beras & Terigu', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'cat1-desc', type: 'text', props: { content: 'Suplai komoditas pangan pokok bersertifikasi SNI & Halal. Pasokan stabil tanpa fluktuasi harga mendadak, siap kirim per kontainer/truk.', fontSize: '14px', color: '#64748b' } },
            { id: 'cat1-btn', type: 'button', props: { label: 'Order Pallet Sembako 🛒', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '600' } },
          ]
        },

        // Card 2: FMCG
        {
          id: 'card-cat2',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'cat2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281704?w=800&auto=format&fit=crop&q=80',
                alt: 'Minuman Kemasan dan Snack Grosir FMCG',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'cat2-badge', type: 'badge', props: { text: '🥤 MINUMAN & MAKANAN RINGAN', variant: 'solid', background: '#eff6ff', color: '#1d4ed8' } },
            { id: 'cat2-title', type: 'heading', props: { content: 'Snack, Biskuit, RTD Tea & Minuman Isotonik', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'cat2-desc', type: 'text', props: { content: 'Distributor resmi dari produsen FMCG top nasional. Expired date dijamin masih sangat panjang (> 12 bulan) dengan margin hingga 28%.', fontSize: '14px', color: '#64748b' } },
            { id: 'cat2-btn', type: 'button', props: { label: 'Lihat Pricelist Karton 📋', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '600' } },
          ]
        },

        // Card 3: Home & Personal Care
        {
          id: 'card-cat3',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'cat3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
                alt: 'Perawatan Rumah dan Sabun Kebersihan',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'cat3-badge', type: 'badge', props: { text: '🧼 HOME & PERSONAL CARE', variant: 'solid', background: '#eff6ff', color: '#1d4ed8' } },
            { id: 'cat3-title', type: 'heading', props: { content: 'Deterjen, Sabun, Pasta Gigi & Sanitasi', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'cat3-desc', type: 'text', props: { content: 'Produk kebersihan rumah tangga dan perlengkapan mandi terlengkap untuk toko kelontong modern dan supermarket ritel mandiri.', fontSize: '14px', color: '#64748b' } },
            { id: 'cat3-btn', type: 'button', props: { label: 'Minta Paket Buka Toko 📦', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '600' } },
          ]
        }
      ]
    },
    {
      id: 'wh-network-sec',
      type: 'services',
      layout: 'retail-network-wholesale',
      components: [
        { id: 'net-badge', type: 'badge', props: { text: '🚚 INFRASTRUKTUR & SUPPLY CHAIN', variant: 'outline', background: 'rgba(37,99,235,0.15)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.4)' } },
        { id: 'net-title', type: 'heading', props: { content: 'Fondasi Distribusi Terintegrasi Untuk Kelancaran Bisnis Anda', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'net-desc', type: 'text', props: { content: 'Sistem operasional berstandar enterprise menjamin pesanan datang tepat waktu, utuh, dan terlindungi asuransi pengiriman penuh.', fontSize: '16px', color: '#94a3b8' } },

        // 4 Distribution Advantage Cards
        {
          id: 'card-net1',
          type: 'card',
          props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'net1-badge', type: 'badge', props: { text: '🏭 PRINCIPAL DIRECT', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#60a5fa' } },
            { id: 'net1-title', type: 'heading', props: { content: 'Harga Tangan Pertama Dari Pabrik', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'net1-desc', type: 'text', props: { content: 'Kontrak langsung dengan 50+ produsen FMCG memastikan harga termurah tanpa perantara ganda sehingga margin Anda maksimal.', fontSize: '14px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-net2',
          type: 'card',
          props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'net2-badge', type: 'badge', props: { text: '💳 CASH FLOW BUFFER', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#60a5fa' } },
            { id: 'net2-title', type: 'heading', props: { content: 'Fasilitas Pembayaran Tempo 14-30 Hari', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'net2-desc', type: 'text', props: { content: 'Dukungan modal kerja untuk toko mitra aktif dengan plafon kredit fleksibel hingga Rp 500 Juta untuk perputaran stok.', fontSize: '14px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-net3',
          type: 'card',
          props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'net3-badge', type: 'badge', props: { text: '🚛 ARMADA SENDIRI', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#60a5fa' } },
            { id: 'net3-title', type: 'heading', props: { content: '120+ Truk CDD & Blindvan Terjadwal', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'net3-desc', type: 'text', props: { content: 'Rute pengiriman harian teratur ke seluruh area retail kota dan pelosok kabupaten dengan jaminan barang tidak rusak.', fontSize: '14px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-net4',
          type: 'card',
          props: { background: '#0f172a', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'net4-badge', type: 'badge', props: { text: '🛡️ GARANSI 100%', variant: 'solid', background: 'rgba(37,99,235,0.2)', color: '#60a5fa' } },
            { id: 'net4-title', type: 'heading', props: { content: 'Klaim Retur & Rusak Ganti 1x24 Jam', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'net4-desc', type: 'text', props: { content: 'Sistem proteksi retur mudah langsung melalui dashboard aplikasi grosir tanpa birokrasi berbelit-belit.', fontSize: '14px', color: '#94a3b8' } },
          ]
        },

        // WMS Guarantee Banner Card
        {
          id: 'wms-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', borderColor: 'rgba(59,130,246,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
          childrenComponents: [
            { id: 'wms-banner-badge', type: 'badge', props: { text: '📊 SISTEM LOGISTIK TERPADU ISO 9001:2015', variant: 'solid', background: 'rgba(59,130,246,0.3)', color: '#bfdbfe' } },
            { id: 'wms-banner-title', type: 'heading', props: { content: 'Real-Time Inventory Tracking & Auto Restock Untuk Mitra Toko', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
            { id: 'wms-banner-desc', type: 'text', props: { content: 'Integrasikan sistem kasir/POS toko Anda dengan API Mega Distribusi untuk pemesanan otomatis ketika stok mendekati batas minimum.', fontSize: '14px', color: '#cbd5e1' } },
            { id: 'wms-banner-btn', type: 'button', props: { label: 'Integrasi POS Toko Sekarang ⚡', href: '#contact', variant: 'primary', size: 'medium', radius: 'md', background: '#3b82f6', color: '#ffffff', fontWeight: '700' } },
          ]
        }
      ]
    },
    {
      id: 'wh-cta-sec',
      type: 'contact',
      layout: 'retail-cta-wholesale',
      components: [
        {
          id: 'cta-wholesale-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)', borderColor: 'rgba(59,130,246,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'cta-wh-badge', type: 'badge', props: { text: '🤝 KEMITRAAN AGEN & TOKO GROSIR', variant: 'solid', background: 'rgba(59,130,246,0.3)', color: '#93c5fd' } },
            { id: 'cta-wh-title', type: 'heading', props: { content: 'Tingkatkan Omset & Hemat Biaya Pasokan Toko Retail Anda Sekarang', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
            { id: 'cta-wh-desc', type: 'text', props: { content: 'Daftarkan toko atau minimarket Anda hari ini untuk langsung mendapatkan akses pricelist khusus distributor, cashback volume bulanan, dan program rak display gratis.', fontSize: '16px', color: '#cbd5e1' } },
            { id: 'cta-wh-btn1', type: 'button', props: { label: 'Daftar Mitra Agen Sekarang 🚀', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#3b82f6', color: '#ffffff', fontWeight: '800' } },
            { id: 'cta-wh-btn2', type: 'button', props: { label: 'Konsultasi Tim Key Account', href: '#contact', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#93c5fd', borderColor: 'rgba(59,130,246,0.4)' } },
          ]
        }
      ]
    },
    {
      id: 'wh-footer-sec',
      type: 'footer',
      layout: 'retail-footer-wholesale',
      components: [
        { id: 'wh-ft-title', type: 'heading', props: { content: 'PT MEGA DISTRIBUSI LOGISTIK UTAMA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
        { id: 'wh-ft-desc', type: 'text', props: { content: 'Holding Distributor FMCG, Komoditas Pangan & Sembako Terintegrasi. Izin Usaha Distribusi Dagang Nasional No. SIUP/DIS-FMCG/2026.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'wh-ft-copy', type: 'text', props: { content: '© 2026 PT Mega Distribusi Logistik Utama. Seluruh Hak Cipta Dilindungi Undang-Undang.', fontSize: '12px', color: '#64748b' } },
      ]
    }
  ],
};
