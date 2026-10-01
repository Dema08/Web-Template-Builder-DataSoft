/**
 * Koperasi Digital SuperApp — Premium Digital Fintech Cooperative Template
 * Exclusive Starter Template untuk Koperasi Digital, FinTech Koperasi, dan SuperApp Keuangan Modern.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'koperasi-modern',
  name: 'Koperasi Digital SuperApp',
  description: 'Template modern bernuansa neon cyan & emerald fintech untuk Koperasi Digital, SuperApp keuangan, dan platform simpan pinjam online. Dilengkapi live core banking status bar 24/7, hero split dengan 4 KPI metric cards (Pencairan 5 Menit, Rp 0 Biaya Admin, 50.000+ App Users, 9.8% SHU) & smartphone mobile app mockup card, 3 kartu fitur superapp (e-KYC 3 menit, Pinjaman Kilat AI, QRIS & PPOB) dengan foto terpisah, 4 kartu keamanan ISO 27001 & enkripsi AES-256, CTA download app di Google Play/AppStore, dan footer berteknologi tinggi.',
  thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80',
  tags: ['Koperasi', 'Digital', 'Fintech', 'SuperApp', 'Pinjaman Online', 'QRIS', 'e-KYC', 'ISO 27001', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#06b6d4',
    secondaryColor: '#020b12',
    accentColor: '#10b981',
    dark: true,
    surface: '#031522',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: 'rgba(6,182,212,0.25)',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-dig-nav',
      type: 'navbar',
      layout: 'kop-nav-digital',
      components: [
        { id: 'dig-kop-logo', type: 'heading', props: { content: 'KOPERASI DIGITAL ID', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
        { id: 'dig-kop-badge', type: 'badge', props: { text: '⚡ DIGITAL COOPERATIVE SUPERAPP', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
        { id: 'dig-nav-1', type: 'button', props: { label: 'Fitur SuperApp', href: '#features', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5f3fc' } },
        { id: 'dig-nav-2', type: 'button', props: { label: 'Pinjaman Kilat AI', href: '#features', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5f3fc' } },
        { id: 'dig-nav-3', type: 'button', props: { label: 'Keamanan ISO 27001', href: '#security', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5f3fc' } },
        { id: 'dig-nav-4', type: 'button', props: { label: 'Simulasi SHU', href: '#features', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5f3fc' } },
        { id: 'dig-nav-cta', type: 'button', props: { label: 'Download SuperApp 📱', href: '#download', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #06b6d4, #059669)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-dig-hero',
      type: 'hero',
      layout: 'kop-hero-digital',
      components: [
        { id: 'dig-badge', type: 'badge', props: { text: '⚡ KOPERASI BERBASIS DIGITAL & FINTECH SUPERAPP', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
        { id: 'dig-title', type: 'heading', props: { content: 'Kelola Simpanan, Pinjaman & Dividen SHU Langsung dari Smartphone', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
        { id: 'dig-desc', type: 'paragraph', props: { content: 'Koperasi modern tanpa antrean kantor cabang. Pendaftaran e-KYC 3 menit, pinjaman usaha modal kerja disetujui instan berbasis AI, dan pembayaran QRIS bebas biaya.', fontSize: '17px', color: '#cbd5e1' } },
        { id: 'dig-btn1', type: 'button', props: { label: 'Download SuperApp Gratis 📲', href: '#download', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #06b6d4, #059669)', color: '#ffffff', fontWeight: '700' } },
        { id: 'dig-btn2', type: 'button', props: { label: 'Lihat Fitur Tabungan Digital', href: '#features', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(6,27,38,0.7)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },

        // 4 Digital FinTech KPI Stat Cards
        {
          id: 'dig-stat1-card',
          type: 'card',
          props: { background: '#051d29', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'dig-stat1-num', type: 'heading', props: { content: '5 Menit', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
            { id: 'dig-stat1-lbl', type: 'paragraph', props: { content: 'Pencairan Pinjaman Kilat AI', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'dig-stat2-card',
          type: 'card',
          props: { background: '#051d29', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'dig-stat2-num', type: 'heading', props: { content: 'Rp 0,-', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#34d399' } },
            { id: 'dig-stat2-lbl', type: 'paragraph', props: { content: 'Biaya Admin Transfer & QRIS', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'dig-stat3-card',
          type: 'card',
          props: { background: '#051d29', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'dig-stat3-num', type: 'heading', props: { content: '50.000+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
            { id: 'dig-stat3-lbl', type: 'paragraph', props: { content: 'Pengguna SuperApp Aktif', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'dig-stat4-card',
          type: 'card',
          props: { background: '#051d29', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'dig-stat4-num', type: 'heading', props: { content: '9.8% p.a.', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#a78bfa' } },
            { id: 'dig-stat4-lbl', type: 'paragraph', props: { content: 'Estimasi Dividen SHU / Tahun', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Smartphone App Showcase Card
        {
          id: 'dig-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #072737 0%, #03141f 100%)', borderColor: 'rgba(6,182,212,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'dig-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&auto=format&fit=crop&q=80',
                alt: 'Digital Cooperative Mobile App Dashboard',
                borderRadius: '14px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'dig-card-badge', type: 'badge', props: { text: '📱 SUPERAPP V3.4 · ANDROID & IOS READY', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'dig-card-title', type: 'heading', props: { content: 'Satu Aplikasi untuk Seluruh Kebutuhan Finansial Anggota', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'dig-card-desc', type: 'paragraph', props: { content: 'Fitur auto-debet simpanan wajib, simulasi pinjaman instan, tarik tunai tanpa kartu di ribuan ATM mitra, dan voting RAT online secara transparan.', fontSize: '13px', color: '#cbd5e1' } },
          ]
        }
      ],
    },
    {
      id: 'sec-dig-features',
      type: 'features',
      layout: 'kop-features-digital',
      components: [
        { id: 'feat-badge', type: 'badge', props: { text: '📱 FITUR UNGGULAN SUPERAPP FINTECH', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
        { id: 'feat-title', type: 'heading', props: { content: 'Kemudahan Finansial Lengkap dalam Satu Genggaman', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'feat-desc', type: 'paragraph', props: { content: 'Dari pembukaan rekening instan, pinjaman modal usaha dengan persetujuan AI dalam hitungan menit, hingga pembayaran tagihan bulanan bebas biaya.', fontSize: '16px', color: '#cbd5e1' } },

        // Feature 1: e-KYC Onboarding
        {
          id: 'card-feat1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #072233 0%, #03141f 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'feat1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
                alt: 'Digital e-KYC Online Member Registration',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'feat1-badge', type: 'badge', props: { text: 'REGISTRASI e-KYC 3 MENIT', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'feat1-title', type: 'heading', props: { content: 'Buka Tabungan Koperasi Online 100% Paperless', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'feat1-desc', type: 'paragraph', props: { content: 'Cukup siapkan e-KTP dan selfie biometrik. Buku tabungan digital langsung aktif dan terhubung ke nomor rekening virtual bank utama.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'feat1-spec', type: 'heading', props: { content: 'Setoran Awal: Mulai Rp 20.000 | Bunga Tabungan: 5.5% p.a.', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#67e8f9' } },
          ]
        },

        // Feature 2: AI Credit Scoring Instant Loan
        {
          id: 'card-feat2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #072233 0%, #03141f 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'feat2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80',
                alt: 'Instant Micro Business Loan Approval AI',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'feat2-badge', type: 'badge', props: { text: 'PENCAIRAN 5 MENIT', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'feat2-title', type: 'heading', props: { content: 'Pinjaman Modal Usaha Kilat Berbasis AI', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'feat2-desc', type: 'paragraph', props: { content: 'Algoritma credit-scoring otomatis mengevaluasi kelayakan usaha Anda tanpa jaminan rumit, dengan bunga flat koperasi yang sangat terjangkau.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'feat2-spec', type: 'heading', props: { content: 'Plafon: Rp 1 Juta - Rp 100 Juta | Bunga Ringan: 0.75% / Bulan', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
          ]
        },

        // Feature 3: QRIS & PPOB Bill Payment
        {
          id: 'card-feat3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #072233 0%, #03141f 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'feat3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&auto=format&fit=crop&q=80',
                alt: 'QRIS Merchant & PPOB Bill Payment Integration',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'feat3-badge', type: 'badge', props: { text: 'BEBAS BIAYA ADMIN', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'feat3-title', type: 'heading', props: { content: 'Merchant QRIS Usaha & Pembayaran Tagihan', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'feat3-desc', type: 'paragraph', props: { content: 'Terima pembayaran QRIS di toko Anda tanpa potongan MDR, beli token PLN, pulsa, dan bayar BPJS langsung dengan saldo tabungan koperasi.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'feat3-spec', type: 'heading', props: { content: 'Settlement Real-time | Cashback PPOB 2.5% per Transaksi', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fde047' } },
          ]
        },

        { id: 'feat-cta-btn', type: 'button', props: { label: 'Download SuperApp & Dapatkan Saldo Bonus Rp 50.000 📲', href: '#download', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #06b6d4, #059669)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-dig-security',
      type: 'security',
      layout: 'kop-security-digital',
      components: [
        { id: 'sec-badge', type: 'badge', props: { text: '🔒 KEAMANAN DIGITAL BERSTANDAR BANK INTERNASIONAL', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
        { id: 'sec-title', type: 'heading', props: { content: 'Perlindungan Saldo Dana & Data Privasi Anggota Terjamin', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'sec-desc', type: 'paragraph', props: { content: 'Infrastruktur cloud berstandar industri dengan enkripsi multi-layer, otentikasi dua faktor (2FA), dan audit kepatuhan siber berkala.', fontSize: '16px', color: '#cbd5e1' } },

        // Card 1: Enkripsi AES-256
        {
          id: 'card-sec1',
          type: 'card',
          props: { background: '#041d2a', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'sec1-tag', type: 'badge', props: { text: 'END-TO-END ENCRYPTION', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'sec1-title', type: 'heading', props: { content: 'Enkripsi Data 256-Bit SSL & Tokenisasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sec1-desc', type: 'paragraph', props: { content: 'Setiap transmisi data transaksi perbankan dan data identitas anggota dilindungi algoritma enkripsi tingkat perbankan komersial.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Card 2: Biometrik Face Recognition
        {
          id: 'card-sec2',
          type: 'card',
          props: { background: '#041d2a', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'sec2-tag', type: 'badge', props: { text: 'BIOMETRIC AUTH', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'sec2-title', type: 'heading', props: { content: 'Biometrik Face Recognition & Fingerprint', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sec2-desc', type: 'paragraph', props: { content: 'Login instan dan verifikasi transaksi sensitif menggunakan sensor sidik jari atau pemindai wajah yang anti-spoofing.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Card 3: Sertifikasi ISO 27001
        {
          id: 'card-sec3',
          type: 'card',
          props: { background: '#041d2a', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'sec3-tag', type: 'badge', props: { text: 'ISO 27001 CERTIFIED', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'sec3-title', type: 'heading', props: { content: 'Manajemen Keamanan Informasi ISO 27001', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sec3-desc', type: 'paragraph', props: { content: 'Sertifikasi internasional tata kelola keamanan data digital yang menjamin kerahasiaan dan integritas data simpan pinjam.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Card 4: Legalitas Kemenkop & OJK
        {
          id: 'card-sec4',
          type: 'card',
          props: { background: '#041d2a', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'sec4-tag', type: 'badge', props: { text: 'REGULASI RESMI', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'sec4-title', type: 'heading', props: { content: 'Terdaftar Resmi Kemenkop & Diawasi Satgas Koperasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sec4-desc', type: 'paragraph', props: { content: 'Beroperasi sesuai regulasi UU Perkoperasian Indonesia dengan audit kepatuhan dan pelaporan keuangan berkala kepada kementerian terkait.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Core Banking Banner
        {
          id: 'core-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #093149 0%, #041a27 100%)', borderColor: 'rgba(6,182,212,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'core-badge', type: 'badge', props: { text: '☁️ CLOUD NATIVE MICROSERVICES CORE BANKING', variant: 'solid', background: 'rgba(6,182,212,0.25)', color: '#67e8f9' } },
            { id: 'core-title', type: 'heading', props: { content: 'Infrastruktur Server Multi-Data Center dengan SLA Uptime 99.98%', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f8fafc' } },
            { id: 'core-desc', type: 'paragraph', props: { content: 'Sistem komputasi awan terdistribusi dengan auto-scaling otomatis, memastikan akses transaksi anggota tetap lancar tanpa gangguan bahkan saat lonjakan hari gajian.', fontSize: '14px', color: '#cbd5e1' } },
          ]
        }
      ],
    },
    {
      id: 'sec-dig-cta',
      type: 'cta',
      layout: 'kop-cta-digital',
      components: [
        {
          id: 'cta-digital-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #09334c 0%, #041d2c 50%, #020f18 100%)', borderColor: 'rgba(6,182,212,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'cta-dig-badge', type: 'badge', props: { text: '⚡ DOWNLOAD SUPERAPP SEKARANG', variant: 'outline', background: 'rgba(6,182,212,0.2)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.5)' } },
            { id: 'cta-dig-title', type: 'heading', props: { content: 'Mulai Pengalaman Koperasi Modern, Cepat & Bebas Ribet Hari Ini', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'cta-dig-desc', type: 'paragraph', props: { content: 'Unduh aplikasi Koperasi Digital ID di Google Play Store atau Apple App Store. Daftar hanya 3 menit dan dapatkan bonus welcome reward saldo tabungan Rp 50.000.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
            { id: 'cta-dig-btn1', type: 'button', props: { label: 'Download di Google Play Store 📱', href: '#download', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #06b6d4, #059669)', color: '#ffffff', fontWeight: '700' } },
            { id: 'cta-dig-btn2', type: 'button', props: { label: 'Buka Web App Portal Anggota', href: 'https://app.koperasidigital.id', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(6,27,38,0.8)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-dig-footer',
      type: 'footer',
      layout: 'kop-footer-digital',
      components: [
        { id: 'dig-foot-logo', type: 'heading', props: { content: 'KOPERASI DIGITAL ID', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
        { id: 'dig-foot-desc', type: 'paragraph', props: { content: 'Pionir koperasi simpan pinjam berbasis teknologi digital pertama di Indonesia. Menghubungkan puluhan ribu anggota UMKM dengan layanan perbankan digital aman dan inklusif.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'dig-foot-addr', type: 'paragraph', props: { content: 'Head Office: Cyber 2 Tower Lantai 18, Jl. HR Rasuna Said Blok X-5, Jakarta Selatan 12950', fontSize: '13px', color: '#cbd5e1' } },
        { id: 'dig-foot-contact', type: 'paragraph', props: { content: 'Helpdesk 24/7: 1500-888 | WhatsApp CS: 0811-9988-7766 | Email: support@koperasidigital.id', fontSize: '13px', color: '#67e8f9' } },
      ],
    },
  ],
};
