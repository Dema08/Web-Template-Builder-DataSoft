/**
 * KSPPS BMT Amanah — Premium Sharia Microfinance & Savings Cooperative Template
 * Exclusive Starter Template untuk Koperasi Simpan Pinjam Syariah, BMT, dan Lembaga Keuangan Mikro Ummat.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'koperasi-classic',
  name: 'KSPPS Simpan Pinjam Syariah',
  description: 'Template premium bernuansa hijau islami & aksen emas untuk Koperasi Simpan Pinjam Syariah (KSPPS) dan BMT. Dilengkapi topbar legalitas Dewan Pengawas Syariah (DPS) & Kemenkop, hero split dengan 4 kartu metrik keuangan syariah (Aset Rp 180 Miliar, 24.000+ Anggota, 0.42% NPF, Bebas Riba) & kantor cabang showcase card, 3 kartu produk akad mudharabah/murabahah dengan foto terpisah, 4 kartu transparansi RAT/SHU & dana ZISWAF produktif, form pendaftaran anggota baru, serta footer resmi BMT.',
  thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
  tags: ['Koperasi', 'KSPPS', 'BMT', 'Syariah', 'Mudharabah', 'Murabahah', 'Bagi Hasil', 'Bebas Riba', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#059669',
    secondaryColor: '#011a11',
    accentColor: '#fde047',
    dark: true,
    surface: '#022116',
    text: '#f0fdf4',
    muted: '#94a3b8',
    border: 'rgba(16,185,129,0.25)',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-syariah-nav',
      type: 'navbar',
      layout: 'kop-nav-syariah',
      components: [
        { id: 'syariah-nav-logo', type: 'heading', props: { content: 'KSPPS BMT AMANAH NUSANTARA', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
        { id: 'syariah-nav-badge', type: 'badge', props: { text: '⚖️ DIAWASI DEWAN PENGAWAS SYARIAH & KEMENKOP', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
        { id: 'syariah-nav-1', type: 'button', props: { label: 'Simpanan Syariah', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'syariah-nav-2', type: 'button', props: { label: 'Pembiayaan Usaha', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'syariah-nav-3', type: 'button', props: { label: 'Laporan SHU & Zakat', href: '#shu', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'syariah-nav-4', type: 'button', props: { label: 'Kantor Cabang', href: '#register', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'syariah-nav-cta', type: 'button', props: { label: 'Portal Anggota 🕌', href: '#register', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-syariah-hero',
      type: 'hero',
      layout: 'kop-hero-syariah',
      components: [
        { id: 'syariah-badge', type: 'badge', props: { text: '🕌 KOPERASI SIMPAN PINJAM & PEMBIAYAAN SYARIAH (KSPPS)', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
        { id: 'syariah-title', type: 'heading', props: { content: 'Membangun Kesejahteraan Finansial Ummat Berlandaskan Syariat Islam', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.025em' } },
        { id: 'syariah-desc', type: 'paragraph', props: { content: 'Wadah muamalah keuangan adil, transparan, dan bebas riba. Menghubungkan 24.000+ anggota aktif dengan akad mudharabah & murabahah terpercaya sejak 2002.', fontSize: '17px', color: '#a7f3d0' } },
        { id: 'syariah-btn1', type: 'button', props: { label: 'Daftar Jadi Anggota 🕌', href: '#register', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
        { id: 'syariah-btn2', type: 'button', props: { label: 'Simulasi Pembiayaan Usaha', href: '#products', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(4,47,30,0.7)', color: '#fde047', borderColor: 'rgba(234,179,8,0.4)' } },

        // 4 Sharia Metric Cards
        {
          id: 'syariah-stat1-card',
          type: 'card',
          props: { background: '#022d1d', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'syariah-stat1-num', type: 'heading', props: { content: 'Rp 180 Miliar', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde047' } },
            { id: 'syariah-stat1-lbl', type: 'paragraph', props: { content: 'Total Aset Kelolaan Ummat', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'syariah-stat2-card',
          type: 'card',
          props: { background: '#022d1d', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'syariah-stat2-num', type: 'heading', props: { content: '24.500+', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'syariah-stat2-lbl', type: 'paragraph', props: { content: 'Anggota Aktif Terdaftar', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'syariah-stat3-card',
          type: 'card',
          props: { background: '#022d1d', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'syariah-stat3-num', type: 'heading', props: { content: '0.42%', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'syariah-stat3-lbl', type: 'paragraph', props: { content: 'Tingkat NPF Sehat Terjaga', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'syariah-stat4-card',
          type: 'card',
          props: { background: '#022d1d', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'syariah-stat4-num', type: 'heading', props: { content: '100% Syariah', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde047' } },
            { id: 'syariah-stat4-lbl', type: 'paragraph', props: { content: 'Bebas Riba, Gharar, Maysir', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Branch & Member Showcase Card
        {
          id: 'syariah-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #033a25 0%, #012216 100%)', borderColor: 'rgba(234,179,8,0.35)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'syariah-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1000&auto=format&fit=crop&q=80',
                alt: 'Islamic Sharia Microfinance Cooperative Office',
                borderRadius: '14px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'syariah-card-badge', type: 'badge', props: { text: '🕌 KANTOR PUSAT & 35 JARINGAN CABANG', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'syariah-card-title', type: 'heading', props: { content: 'Pelayanan Ramah, Amanah & Teruji Puluhan Tahun', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'syariah-card-desc', type: 'paragraph', props: { content: 'Setiap transaksi keuangan diawasi langsung oleh Dewan Pengawas Syariah (DPS) bersertifikasi DSN-MUI untuk menjamin keberkahan usaha.', fontSize: '13px', color: '#a7f3d0' } },
          ]
        }
      ],
    },
    {
      id: 'sec-syariah-products',
      type: 'products',
      layout: 'kop-products-syariah',
      components: [
        { id: 'prods-badge', type: 'badge', props: { text: '⚖️ PRODUK SIMPANAN & PEMBIAYAAN SYARIAH', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
        { id: 'prods-title', type: 'heading', props: { content: 'Pilihan Akad Syariah yang Menenteramkan & Menguntungkan', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em' } },
        { id: 'prods-desc', type: 'paragraph', props: { content: 'Dirancang untuk membantu permodalan usaha anggota, tabungan masa depan, dan perencanaan ibadah dengan sistem bagi hasil murni tanpa riba.', fontSize: '16px', color: '#a7f3d0' } },

        // Product 1: Simpanan Berjangka Mudharabah
        {
          id: 'card-prod1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #022a1d 0%, #011910 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prod1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80',
                alt: 'Simpanan Berjangka Syariah Mudharabah',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'prod1-badge', type: 'badge', props: { text: 'AKAD MUDHARABAH MUTHLAQAH', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'prod1-title', type: 'heading', props: { content: 'Simpanan Berjangka Mudharabah (Deposito Syariah)', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'prod1-desc', type: 'paragraph', props: { content: 'Investasi dana amanah dengan jangka waktu 3, 6, 12 bulan. Pembagian bagi hasil nisbah kompetitif yang ditransfer langsung ke rekening tabungan anggota setiap bulan.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'prod1-nisbah', type: 'heading', props: { content: 'Nisbah: 65% Anggota : 35% BMT | Minimal Rp 1.000.000', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fde047' } },
          ]
        },

        // Product 2: Pembiayaan Usaha Murabahah
        {
          id: 'card-prod2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #022a1d 0%, #011910 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prod2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80',
                alt: 'Pembiayaan Modal Usaha UMKM Murabahah',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'prod2-badge', type: 'badge', props: { text: 'AKAD MURABAHAH JUAL-BELI', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'prod2-title', type: 'heading', props: { content: 'Pembiayaan Modal Usaha & Pengadaan Barang', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'prod2-desc', type: 'paragraph', props: { content: 'Bantuan modal pengadaan stok dagang, mesin produksi, dan inventaris usaha toko dengan skema cicilan margin transparan yang disepakati bersama tanpa denda berlipat.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'prod2-nisbah', type: 'heading', props: { content: 'Plafon: s/d Rp 250 Juta | Tenor Fleksibel 6 - 36 Bulan', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
          ]
        },

        // Product 3: Tabungan Qurban & Haji
        {
          id: 'card-prod3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #022a1d 0%, #011910 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prod3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&auto=format&fit=crop&q=80',
                alt: 'Tabungan Rencana Haji Umroh dan Qurban',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'prod3-badge', type: 'badge', props: { text: 'AKAD WADI\'AH YAD DHAMANAH', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'prod3-title', type: 'heading', props: { content: 'Tabungan Rencana Haji, Umroh & Qurban', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'prod3-desc', type: 'paragraph', props: { content: 'Simpanan titipan aman tanpa biaya administrasi bulanan untuk mewujudkan niat suci ibadah ke tanah suci dan ibadah qurban tahunan dengan pendampingan bimbingan resmi.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'prod3-nisbah', type: 'heading', props: { content: 'Bebas Biaya Admin | Bonus Hadiah & Pendampingan Porsi', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fde047' } },
          ]
        },

        { id: 'prods-cta-btn', type: 'button', props: { label: 'Ajukan Pembiayaan & Konsultasi Akad (Gratis) 🕌', href: '#register', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-syariah-shu',
      type: 'shu',
      layout: 'kop-shu-syariah',
      components: [
        { id: 'shu-badge', type: 'badge', props: { text: '📊 TRANSPARANSI SHU & KEPATUHAN SYARIAH', variant: 'outline', background: 'rgba(234,179,8,0.15)', color: '#fde047', borderColor: 'rgba(234,179,8,0.45)' } },
        { id: 'shu-title', type: 'heading', props: { content: 'Distribusi Sisa Hasil Usaha (SHU) Adil & Audit Terbuka', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em' } },
        { id: 'shu-desc', type: 'paragraph', props: { content: 'Prinsip dari anggota, oleh anggota, untuk anggota dijalankan dengan akuntabilitas laporan keuangan WTP (Wajar Tanpa Pengecualian) setiap tahun.', fontSize: '16px', color: '#a7f3d0' } },

        // Card 1: Pembagian SHU Tepat Waktu
        {
          id: 'card-shu1',
          type: 'card',
          props: { background: '#022c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'shu1-tag', type: 'badge', props: { text: 'BAGI HASIL SHU', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'shu1-title', type: 'heading', props: { content: 'Pembagian SHU Rutin Setiap RAT Tahunan', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'shu1-desc', type: 'paragraph', props: { content: 'SHU dibagikan secara proporsional berdasarkan kontribusi simpanan dan keaktifan transaksi pembiayaan masing-masing anggota.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Card 2: Audit Akuntan Publik WTP
        {
          id: 'card-shu2',
          type: 'card',
          props: { background: '#022c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'shu2-tag', type: 'badge', props: { text: 'AUDIT INDEPENDEN', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'shu2-title', type: 'heading', props: { content: 'Predikat Opini WTP (Wajar Tanpa Pengecualian)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'shu2-desc', type: 'paragraph', props: { content: 'Laporan keuangan diaudit berkala oleh Kantor Akuntan Publik (KAP) terdaftar OJK dan Kemenkop secara independen.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Card 3: ZISWAF Produktif & Sosial
        {
          id: 'card-shu3',
          type: 'card',
          props: { background: '#022c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'shu3-tag', type: 'badge', props: { text: 'BAITUL MAAL ZISWAF', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'shu3-title', type: 'heading', props: { content: 'Pemberdayaan Dana ZISWAF Produktif', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'shu3-desc', type: 'paragraph', props: { content: 'Penyaluran zakat, infaq, sedekah, dan wakaf untuk beasiswa anak anggota kurang mampu dan modal bergulir mustahik tanpa bunga (Qardhul Hasan).', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Card 4: Pelatihan Kewirausahaan Anggota
        {
          id: 'card-shu4',
          type: 'card',
          props: { background: '#022c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'shu4-tag', type: 'badge', props: { text: 'EDUKASI & CAPACITY BUILDING', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'shu4-title', type: 'heading', props: { content: 'Inkubasi Bisnis & Pelatihan Usaha Mikro', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'shu4-desc', type: 'paragraph', props: { content: 'Fasilitas bimbingan pembukuan digital, sertifikasi halal gratis, dan temu bisnis antar-anggota koperasi setiap triwulan.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // DPS Banner Card
        {
          id: 'dps-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #033a26 0%, #012217 100%)', borderColor: 'rgba(234,179,8,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'dps-badge', type: 'badge', props: { text: '📜 DEWAN PENGAWAS SYARIAH (DPS)', variant: 'solid', background: 'rgba(234,179,8,0.25)', color: '#fde047' } },
            { id: 'dps-title', type: 'heading', props: { content: 'Jaminan Kepatuhan Syariah Sepenuhnya (Sharia Compliance)', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f0fdf4' } },
            { id: 'dps-desc', type: 'paragraph', props: { content: 'Dewan Pengawas Syariah kami memastikan setiap akad, alur perputaran dana simpanan, dan margin pembiayaan bebas dari unsur maysir (judi), gharar (ketidakjelasan), dan riba (bunga terlarang).', fontSize: '14px', color: '#a7f3d0' } },
          ]
        }
      ],
    },
    {
      id: 'sec-syariah-cta',
      type: 'cta',
      layout: 'kop-cta-syariah',
      components: [
        {
          id: 'cta-syariah-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #033a27 0%, #012419 50%, #01130d 100%)', borderColor: 'rgba(234,179,8,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'cta-syariah-badge', type: 'badge', props: { text: '🕌 PENDAFTARAN ANGGOTA BARU 2026', variant: 'outline', background: 'rgba(234,179,8,0.2)', color: '#fde047', borderColor: 'rgba(234,179,8,0.5)' } },
            { id: 'cta-syariah-title', type: 'heading', props: { content: 'Mari Bergabung & Rasakan Berkah Berkeuangan Bersama Koperasi Syariah', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'cta-syariah-desc', type: 'paragraph', props: { content: 'Buka rekening simpanan atau ajukan pembiayaan usaha Anda dengan mudah. Nikmati kemudahan layanan digital dan bagi hasil yang menenteramkan hati.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
            { id: 'cta-syariah-btn1', type: 'button', props: { label: 'Daftar Jadi Anggota Sekarang 🕌', href: 'mailto:daftar@bmtamanah.id', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #059669, #047857)', color: '#ffffff', fontWeight: '700' } },
            { id: 'cta-syariah-btn2', type: 'button', props: { label: 'Konsultasi Petugas Layanan (WhatsApp)', href: 'https://wa.me/6281155667788', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(4,47,30,0.8)', color: '#fde047', borderColor: 'rgba(234,179,8,0.4)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-syariah-footer',
      type: 'footer',
      layout: 'kop-footer-syariah',
      components: [
        { id: 'syariah-foot-logo', type: 'heading', props: { content: 'KSPPS BMT AMANAH NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
        { id: 'syariah-foot-desc', type: 'paragraph', props: { content: 'Koperasi Simpan Pinjam dan Pembiayaan Syariah terpercaya. Berkhidmat memberdayakan ekonomi ummat melalui permodalan mikro, simpanan berkah, dan tata kelola profesional berlandaskan syariat Islam.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'syariah-foot-addr', type: 'paragraph', props: { content: 'Kantor Pusat: Gedung Graha BMT, Jl. KH. Ahmad Dahlan No. 45, Yogyakarta 55262', fontSize: '13px', color: '#a7f3d0' } },
        { id: 'syariah-foot-contact', type: 'paragraph', props: { content: 'Call Center: (0274) 556-7890 | WA Anggota: 0811-5566-7788 | Email: layanan@bmtamanah.id', fontSize: '13px', color: '#fde047' } },
      ],
    },
  ],
};
