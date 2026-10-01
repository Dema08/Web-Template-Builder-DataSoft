/**
 * Koperasi Produsen & Agribisnis Terpadu — Premium Agri & Producers Cooperative Template
 * Exclusive Starter Template untuk Koperasi Pertanian, Agribisnis, Resi Gudang, dan Produsen UMKM.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'koperasi-premium',
  name: 'Koperasi Produsen & Agribisnis Terpadu',
  description: 'Template premium bernuansa earthy warm amber & golden harvest untuk Koperasi Produsen, sentra agribisnis terpadu, kelompok tani (Poktan), dan eksportir hasil bumi. Dilengkapi topbar komoditas ekspor, hero split dengan 4 KPI pertanian (12.000 Ha Lahan Tani, 350+ Ton Panen/Hari, 100% Kepastian Beli, 85 Mitra Ekspor) & fasilitas sentra cold storage showcase card, 3 kartu program pemberdayaan produsen (Subsidi Pupuk, Resi Gudang Bappebti, Kontrak Off-Taker Ekspor) dengan foto terpisah, 4 kartu dampak kesejahteraan tani & sertifikasi Indo-GAP, kemitraan kelompok tani CTA card, serta footer logistik pangan terpadu.',
  thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80',
  tags: ['Koperasi', 'Produsen', 'Agribisnis', 'Pertanian', 'Resi Gudang', 'Cold Storage', 'Ekspor Komoditas', 'Petani', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#d97706',
    secondaryColor: '#130b03',
    accentColor: '#fbbf24',
    dark: true,
    surface: '#190f05',
    text: '#fef3c7',
    muted: '#94a3b8',
    border: 'rgba(217,119,6,0.25)',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-agri-nav',
      type: 'navbar',
      layout: 'kop-nav-agri',
      components: [
        { id: 'agri-nav-logo', type: 'heading', props: { content: 'KOPERASI TANI NUSANTARA', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#fef3c7', letterSpacing: '0.04em' } },
        { id: 'agri-nav-badge', type: 'badge', props: { text: '🌾 KOPERASI PRODUSEN & AGRIBISNIS TERPADU', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.45)' } },
        { id: 'agri-nav-1', type: 'button', props: { label: 'Program Kemitraan', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#fde68a' } },
        { id: 'agri-nav-2', type: 'button', props: { label: 'Cold Storage & Logistik', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#fde68a' } },
        { id: 'agri-nav-3', type: 'button', props: { label: 'Katalog Komoditas Ekspor', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#fde68a' } },
        { id: 'agri-nav-4', type: 'button', props: { label: 'Dampak Petani', href: '#impact', variant: 'ghost', size: 'small', background: 'transparent', color: '#fde68a' } },
        { id: 'agri-nav-cta', type: 'button', props: { label: 'Gabung Mitra Tani 🌾', href: '#partner', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-agri-hero',
      type: 'hero',
      layout: 'kop-hero-agri',
      components: [
        { id: 'agri-badge', type: 'badge', props: { text: '🌾 KOPERASI PRODUSEN & AGRIBISNIS TERPADU', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.45)' } },
        { id: 'agri-title', type: 'heading', props: { content: 'Dari Lahan Petani Hingga Pasar Ekspor — Sejahtera Melalui Gotong Royong', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.025em' } },
        { id: 'agri-desc', type: 'paragraph', props: { content: 'Koperasi produsen pertanian dan perkebunan terintegrasi. Menjamin ketersediaan pupuk berkualitas, fasilitas cold-storage modern, dan kepastian harga beli panen langsung dari 8.500+ petani anggota.', fontSize: '17px', color: '#fde68a' } },
        { id: 'agri-btn1', type: 'button', props: { label: 'Gabung Mitra Kelompok Tani 🌾', href: '#partner', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
        { id: 'agri-btn2', type: 'button', props: { label: 'Lihat Komoditas & Pasokan B2B', href: '#programs', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(35,22,6,0.7)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.4)' } },

        // 4 Agri KPI Stat Cards
        {
          id: 'agri-stat1-card',
          type: 'card',
          props: { background: '#251707', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'agri-stat1-num', type: 'heading', props: { content: '12.000 Ha', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'agri-stat1-lbl', type: 'paragraph', props: { content: 'Luas Lahan Tani Terkelola', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'agri-stat2-card',
          type: 'card',
          props: { background: '#251707', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'agri-stat2-num', type: 'heading', props: { content: '350+ Ton', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde68a' } },
            { id: 'agri-stat2-lbl', type: 'paragraph', props: { content: 'Distribusi Panen per Hari', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'agri-stat3-card',
          type: 'card',
          props: { background: '#251707', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'agri-stat3-num', type: 'heading', props: { content: '100% Fair', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#86efac' } },
            { id: 'agri-stat3-lbl', type: 'paragraph', props: { content: 'Kepastian Pembelian Panen', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'agri-stat4-card',
          type: 'card',
          props: { background: '#251707', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'agri-stat4-num', type: 'heading', props: { content: '85 Mitra', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'agri-stat4-lbl', type: 'paragraph', props: { content: 'Off-taker Ekspor & Supermarket', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Harvest & Warehouse Showcase Card
        {
          id: 'agri-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #301f0b 0%, #170e04 100%)', borderColor: 'rgba(217,119,6,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'agri-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&auto=format&fit=crop&q=80',
                alt: 'Agricultural Producers Cooperative Harvest & Processing Facility',
                borderRadius: '14px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'agri-card-badge', type: 'badge', props: { text: '🌾 SENTRA LOGISTIK PANGAN & COLD STORAGE', variant: 'solid', background: 'rgba(217,119,6,0.25)', color: '#fbbf24' } },
            { id: 'agri-card-title', type: 'heading', props: { content: 'Fasilitas Pasca Panen Berkapasitas 2.500 Ton', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#fef3c7' } },
            { id: 'agri-card-desc', type: 'paragraph', props: { content: 'Dilengkapi mesin pengering gabah otomatis, grading sortasi digital, dan cold storage terkontrol suhu untuk menjaga kesegaran komoditas ekspor.', fontSize: '13px', color: '#fde68a' } },
          ]
        }
      ],
    },
    {
      id: 'sec-agri-programs',
      type: 'programs',
      layout: 'kop-programs-agri',
      components: [
        { id: 'prog-badge', type: 'badge', props: { text: '🌾 PROGRAM PEMBERDAYAAN & LOGISTIK TANI', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.45)' } },
        { id: 'prog-title', type: 'heading', props: { content: 'Ekosistem Terintegrasi dari Hulu Tani hingga Hilir Pasar Global', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.02em' } },
        { id: 'prog-desc', type: 'paragraph', props: { content: 'Kami memutus rantai tengkulak yang merugikan dengan menyediakan sarana produksi bersubsidi, fasilitas resi gudang resmi, dan kontrak pembelian panen pasti.', fontSize: '16px', color: '#fde68a' } },

        // Program 1: Saprotan & Pupuk Bersubsidi
        {
          id: 'card-prog1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #2a1b08 0%, #170d03 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prog1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80',
                alt: 'Penyediaan Pupuk Organik dan Bibit Unggul Bersubsidi',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'prog1-badge', type: 'badge', props: { text: 'SUBSIDI BIBIT & PUPUK', variant: 'solid', background: 'rgba(217,119,6,0.2)', color: '#fbbf24' } },
            { id: 'prog1-title', type: 'heading', props: { content: 'Penyediaan Sarana Produksi Tani (Saprotan)', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#fef3c7' } },
            { id: 'prog1-desc', type: 'paragraph', props: { content: 'Akses pupuk organik kualitas tinggi, bibit unggul bersertifikasi BPSB, dan sewa traktor mekanis modern dengan skema bayar saat panen (Yarnen).', fontSize: '13px', color: '#94a3b8' } },
            { id: 'prog1-spec', type: 'heading', props: { content: 'Skema: Bayar Pasca Panen (Yarnen) | Diskon Pupuk: s/d 25%', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fbbf24' } },
          ]
        },

        // Program 2: Resi Gudang & Cold Storage
        {
          id: 'card-prog2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #2a1b08 0%, #170d03 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prog2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
                alt: 'Sistem Resi Gudang dan Cold Storage Komoditas',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'prog2-badge', type: 'badge', props: { text: 'RESI GUDANG BAPPEBTI', variant: 'solid', background: 'rgba(22,163,74,0.2)', color: '#86efac' } },
            { id: 'prog2-title', type: 'heading', props: { content: 'Fasilitas Cold Storage & Sistem Resi Gudang (SRG)', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#fef3c7' } },
            { id: 'prog2-desc', type: 'paragraph', props: { content: 'Cegah anjloknya harga saat panen raya dengan menyimpan gabah, jagung, cabai, dan kopi di cold storage berpendingin, serta jadikan resi gudang jaminan pinjaman.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'prog2-spec', type: 'heading', props: { content: 'Kapasitas: 2.500 Ton | Pembiayaan SRG s/d 70% Nilai Komoditas', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#86efac' } },
          ]
        },

        // Program 3: Off-Taker & Ekspor B2B
        {
          id: 'card-prog3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #2a1b08 0%, #170d03 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prog3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
                alt: 'Distribusi Komoditas Pertanian Ekspor B2B',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'prog3-badge', type: 'badge', props: { text: 'JARINGAN EKSPOR B2B', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'prog3-title', type: 'heading', props: { content: 'Kontrak Pembelian Off-Taker Pasar Modern & Ekspor', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#fef3c7' } },
            { id: 'prog3-desc', type: 'paragraph', props: { content: 'Koperasi menjadi jembatan langsung pasokan komoditas pertanian ke jaringan supermarket nasional, industri pengolahan makanan, dan buyer ekspor Timur Tengah & Asia.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'prog3-spec', type: 'heading', props: { content: 'Mitra: 85+ Korporasi & Eksportir | Garansi Pembayaran Tepat Waktu', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fde047' } },
          ]
        },

        { id: 'prog-cta-btn', type: 'button', props: { label: 'Ajukan Kemitraan Kelompok Tani / Supplier Komoditas 🌾', href: '#partner', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-agri-impact',
      type: 'impact',
      layout: 'kop-impact-agri',
      components: [
        { id: 'imp-badge', type: 'badge', props: { text: '📈 DAMPAK KESEJAHTERAAN PETANI ANGGOTA', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.45)' } },
        { id: 'imp-title', type: 'heading', props: { content: 'Meningkatkan Taraf Hidup Komunitas Petani Indonesia', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.02em' } },
        { id: 'imp-desc', type: 'paragraph', props: { content: 'Melalui pembagian SHU usaha perdagangan hasil bumi, jaminan asuransi tani, dan edukasi pertanian modern berkelanjutan.', fontSize: '16px', color: '#fde68a' } },

        // Impact 1: Peningkatan Pendapatan
        {
          id: 'card-imp1',
          type: 'card',
          props: { background: '#261807', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'imp1-tag', type: 'badge', props: { text: 'PENDAPATAN NAIK +65%', variant: 'solid', background: 'rgba(217,119,6,0.2)', color: '#fbbf24' } },
            { id: 'imp1-title', type: 'heading', props: { content: 'Penghapusan Margin Tengkulak Non-Resmi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7' } },
            { id: 'imp1-desc', type: 'paragraph', props: { content: 'Petani anggota menerima harga beli di tingkat kebun 25-40% lebih tinggi dibandingkan sistem tengkulak konvensional.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Impact 2: Asuransi Gagal Panen
        {
          id: 'card-imp2',
          type: 'card',
          props: { background: '#261807', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'imp2-tag', type: 'badge', props: { text: 'PROTEKSI PETANI', variant: 'solid', background: 'rgba(22,163,74,0.2)', color: '#86efac' } },
            { id: 'imp2-title', type: 'heading', props: { content: 'Dana Perlindungan Gagal Panen (AUTP)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7' } },
            { id: 'imp2-desc', type: 'paragraph', props: { content: 'Fasilitas asuransi usaha tani bekerjasama dengan BUMN untuk mengganti kerugian saat terjadi bencana banjir, kekeringan, atau hama wereng.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Impact 3: SHU Unit Usaha Perdagangan
        {
          id: 'card-imp3',
          type: 'card',
          props: { background: '#261807', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'imp3-tag', type: 'badge', props: { text: 'DIVIDEN SHU RAT', variant: 'solid', background: 'rgba(234,179,8,0.2)', color: '#fde047' } },
            { id: 'imp3-title', type: 'heading', props: { content: 'SHU Ekspor Dibagi Rata ke Seluruh Anggota', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7' } },
            { id: 'imp3-desc', type: 'paragraph', props: { content: 'Keuntungan dari perdagangan komoditas ekspor dan sewa cold storage dikembalikan sebagai dividen SHU tahunan yang ditransfer langsung.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Impact 4: Sertifikasi Organik & Smart Farming
        {
          id: 'card-imp4',
          type: 'card',
          props: { background: '#261807', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'imp4-tag', type: 'badge', props: { text: 'SMART FARMING', variant: 'solid', background: 'rgba(217,119,6,0.2)', color: '#fbbf24' } },
            { id: 'imp4-title', type: 'heading', props: { content: 'Pelatihan IoT Drone Semprot & Sensor Tanah', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7' } },
            { id: 'imp4-desc', type: 'paragraph', props: { content: 'Modernisasi pertanian dengan drone sprayer pupuk organik, sensor kelembapan tanah, dan sertifikasi Good Agricultural Practices (GAP).', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // GAP Banner Card
        {
          id: 'gap-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #38240c 0%, #1c1105 100%)', borderColor: 'rgba(217,119,6,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'gap-badge', type: 'badge', props: { text: '🏅 SERTIFIKASI INDO-GAP & ORGANIK INTERNASIONAL', variant: 'solid', background: 'rgba(217,119,6,0.25)', color: '#fbbf24' } },
            { id: 'gap-title', type: 'heading', props: { content: 'Standar Mutu Komoditas Ekspor Berdaya Saing Global', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#fef3c7' } },
            { id: 'gap-desc', type: 'paragraph', props: { content: 'Seluruh komoditas beras organik, kopi arabika specialty, kakao fermentasi, dan vanili yang dikelola koperasi teruji bebas residu pestisida kimia berbahaya dan bersertifikasi organik resmi.', fontSize: '14px', color: '#fde68a' } },
          ]
        }
      ],
    },
    {
      id: 'sec-agri-cta',
      type: 'cta',
      layout: 'kop-cta-agri',
      components: [
        {
          id: 'cta-agri-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #38240c 0%, #201305 50%, #120902 100%)', borderColor: 'rgba(217,119,6,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'cta-agri-badge', type: 'badge', props: { text: '🌾 KEMITRAAN KELOMPOK TANI & OFF-TAKER KOMODITAS', variant: 'outline', background: 'rgba(217,119,6,0.2)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.5)' } },
            { id: 'cta-agri-title', type: 'heading', props: { content: 'Waktunya Petani Berdaulat & Menguasai Pasar dengan Koperasi', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#fef3c7', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'cta-agri-desc', type: 'paragraph', props: { content: 'Daftarkan kelompok tani (Poktan/Gapoktan) Anda untuk mendapatkan pasokan pupuk bersubsidi, akses sewa alat panen, dan kepastian kontrak pembelian hasil bumi.', fontSize: '16px', color: '#fde68a', textAlign: 'center' } },
            { id: 'cta-agri-btn1', type: 'button', props: { label: 'Daftar Kemitraan Poktan 🌾', href: 'mailto:kemitraan@koperasitani.id', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
            { id: 'cta-agri-btn2', type: 'button', props: { label: 'Kontak Tim Pengadaan B2B (WhatsApp)', href: 'https://wa.me/6281188990011', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(35,22,6,0.8)', color: '#fbbf24', borderColor: 'rgba(217,119,6,0.4)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-agri-footer',
      type: 'footer',
      layout: 'kop-footer-agri',
      components: [
        { id: 'agri-foot-logo', type: 'heading', props: { content: 'KOPERASI TANI NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#fef3c7', letterSpacing: '0.04em' } },
        { id: 'agri-foot-desc', type: 'paragraph', props: { content: 'Koperasi produsen pertanian terpadu skala nasional. Menghubungkan ribuan petani dengan teknologi pasca panen modern, resi gudang, dan rantai pasok pasar global berkeadilan.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'agri-foot-addr', type: 'paragraph', props: { content: 'Sentra Logistik & Cold Storage: Jl. Raya Agribisnis KM 14, Malang, Jawa Timur 65152', fontSize: '13px', color: '#fde68a' } },
        { id: 'agri-foot-contact', type: 'paragraph', props: { content: 'Hotline Kemitraan: (0341) 789-2233 | WA Poktan: 0811-8899-0011 | Email: kemitraan@koperasitani.id', fontSize: '13px', color: '#fbbf24' } },
      ],
    },
  ],
};
