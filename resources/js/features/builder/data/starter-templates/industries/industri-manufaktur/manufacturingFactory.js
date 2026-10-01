/**
 * Pabrik & Rekayasa Industri Berat — Premium Heavy Industry & Precision Engineering Template
 * Exclusive Starter Template untuk Pabrik, Manufaktur Berat, dan Fabrikasi Baja Presisi.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'manufacturing-factory',
  name: 'Pabrik & Rekayasa Industri Berat',
  description: 'Template industri berat dan manufaktur presisi premium dengan dark steel & amber gold aesthetic. Dilengkapi topbar status 24/7 CNC & ISO 9001, hero split dengan 3 metric cards (50.000 Ton/Bulan, ±0.001mm toleransi) & machinery photo card, 3 kartu kapabilitas fabrikasi & robot welding dengan gambar terpisah, 4 kartu standar ISO/ASME & lab testing CMM Zeiss, fast-track B2B RFQ card, serta footer industri terintegrasi.',
  thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
  tags: ['Pabrik', 'Industri Berat', 'Manufaktur Presisi', 'CNC', 'ISO 9001', 'ASME', 'B2B', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#f59e0b',
    secondaryColor: '#0a0d14',
    accentColor: '#fbbf24',
    dark: true,
    surface: '#07090e',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: 'rgba(245,158,11,0.25)',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-heavy-nav',
      type: 'navbar',
      layout: 'ind-nav-heavy',
      components: [
        { id: 'heavy-nav-logo', type: 'heading', props: { content: 'PT NUSANTARA HEAVY INDUSTRY', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.05em' } },
        { id: 'heavy-nav-badge', type: 'badge', props: { text: '⚙️ ISO 9001:2015 & ASME CERTIFIED', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
        { id: 'heavy-nav-1', type: 'button', props: { label: 'Kapasitas Pabrik', href: '#capabilities', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
        { id: 'heavy-nav-2', type: 'button', props: { label: 'Standar Mutu', href: '#standards', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
        { id: 'heavy-nav-3', type: 'button', props: { label: 'Fasilitas CNC', href: '#capabilities', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
        { id: 'heavy-nav-4', type: 'button', props: { label: 'Kontak & Lokasi', href: '#rfq', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
        { id: 'heavy-nav-cta', type: 'button', props: { label: 'Request RFQ 🏭', href: '#rfq', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', fontWeight: '800' } },
      ],
    },
    {
      id: 'sec-heavy-hero',
      type: 'hero',
      layout: 'ind-hero-heavy',
      components: [
        { id: 'heavy-badge', type: 'badge', props: { text: '⚙️ HEAVY PRECISION MANUFACTURING & ENGINEERING', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
        { id: 'heavy-title', type: 'heading', props: { content: 'Manufaktur Presisi Tinggi & Fabrikasi Baja Berat Berstandar Global', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
        { id: 'heavy-desc', type: 'paragraph', props: { content: 'Kapasitas fabrikasi 50.000 ton/bulan didukung fasilitas CNC 5-axis mutakhir, robot welding otomatis, dan sertifikasi ASME & ISO 9001 untuk sektor pertambangan, energi, dan infrastruktur.', fontSize: '17px', color: '#cbd5e1' } },
        { id: 'heavy-btn1', type: 'button', props: { label: 'Minta Penawaran (RFQ) ⚡', href: '#rfq', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', fontWeight: '800' } },
        { id: 'heavy-btn2', type: 'button', props: { label: 'Lihat Spesifikasi Fasilitas', href: '#capabilities', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(30,41,59,0.7)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },

        // 3 Metric Cards
        {
          id: 'heavy-stat1-card',
          type: 'card',
          props: { background: '#111624', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'heavy-stat1-num', type: 'heading', props: { content: '50.000 Ton', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'heavy-stat1-lbl', type: 'paragraph', props: { content: 'Kapasitas Produksi / Bulan', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'heavy-stat2-card',
          type: 'card',
          props: { background: '#111624', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'heavy-stat2-num', type: 'heading', props: { content: '±0.001 mm', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'heavy-stat2-lbl', type: 'paragraph', props: { content: 'Toleransi Presisi CNC', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'heavy-stat3-card',
          type: 'card',
          props: { background: '#111624', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'heavy-stat3-num', type: 'heading', props: { content: '25.000 m²', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'heavy-stat3-lbl', type: 'paragraph', props: { content: 'Luas Area Plant & Pabrik', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Hero Machinery Showcase Card
        {
          id: 'heavy-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #161d2f 0%, #0d121e 100%)', borderColor: 'rgba(245,158,11,0.35)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'heavy-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=80',
                alt: 'Heavy Precision CNC Industrial Plant',
                borderRadius: '14px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'heavy-card-badge', type: 'badge', props: { text: '🏭 PLANT CILEGON INDONESIA · LINE A-01 ACTIVE', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
            { id: 'heavy-card-title', type: 'heading', props: { content: 'Fasilitas Fabrikasi & Robot Welding 5-Axis', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'heavy-card-desc', type: 'paragraph', props: { content: 'Dilengkapi overhead crane 50 Ton, heat treatment furnace, dan laboratorium uji NDT (Non-Destructive Testing) bersertifikasi internasional.', fontSize: '13px', color: '#94a3b8' } },
          ]
        }
      ],
    },
    {
      id: 'sec-heavy-capabilities',
      type: 'capabilities',
      layout: 'ind-capabilities-heavy',
      components: [
        { id: 'cap-badge', type: 'badge', props: { text: '⚡ FASILITAS & KAPABILITAS PRODUKSI', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
        { id: 'cap-title', type: 'heading', props: { content: 'Lini Fabrikasi Presisi & Rekayasa Manufaktur Berat', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'cap-desc', type: 'paragraph', props: { content: 'Didukung permesinan terstandarisasi Jerman & Jepang untuk pengerjaan komponen berukuran masif dengan toleransi ultra-presisi.', fontSize: '16px', color: '#cbd5e1' } },

        // Capability 1: CNC Machining & Milling
        {
          id: 'card-cap1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #131929 0%, #0d121e 100%)', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'cap1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
                alt: 'CNC 5-Axis Heavy Machining Center',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'cap1-badge', type: 'badge', props: { text: 'TOLERANSI ±0.001 MM', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
            { id: 'cap1-title', type: 'heading', props: { content: 'CNC 5-Axis Machining Center & Milling', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'cap1-desc', type: 'paragraph', props: { content: 'Pemrosesan komponen turbine, impeller, housing gearbox industri berat, dan cetakan die-casting presisi hingga dimensi 6.000 x 3.500 mm.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'cap1-spec', type: 'heading', props: { content: 'Kapasitas: 35 Ton per unit | Mesin: DMG MORI & MAZAK', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fbbf24' } },
          ]
        },

        // Capability 2: Robot Welding & Heavy Fabrication
        {
          id: 'card-cap2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #131929 0%, #0d121e 100%)', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'cap2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
                alt: 'Automated Robot Welding & Heavy Steel Fabrication',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'cap2-badge', type: 'badge', props: { text: 'ASME SEC IX CERTIFIED WELDERS', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
            { id: 'cap2-title', type: 'heading', props: { content: 'Automated Robotic Welding & Pressure Vessels', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'cap2-desc', type: 'paragraph', props: { content: 'Fabrikasi struktur baja jembatan, pressure vessels, tangki minyak & gas, serta piping system bertekanan tinggi dengan uji Radiography 100%.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'cap2-spec', type: 'heading', props: { content: 'Standar: ASME U-Stamp, API 650, AWS D1.1', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fbbf24' } },
          ]
        },

        // Capability 3: Stamping, Forging & Heat Treatment
        {
          id: 'card-cap3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #131929 0%, #0d121e 100%)', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'cap3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
                alt: 'Heavy Hydraulic Stamping & Forging Plant',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'cap3-badge', type: 'badge', props: { text: 'PRESS 4.000 TON HYDRAULIC', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
            { id: 'cap3-title', type: 'heading', props: { content: 'Heavy Stamping, Forging & Heat Treatment', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'cap3-desc', type: 'paragraph', props: { content: 'Penempaan panas baja paduan khusus, quenching & tempering furnace berkapasitas 1.200°C dengan pengujian kekerasan Rockwell & Brinell.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'cap3-spec', type: 'heading', props: { content: 'Furnace: Kapasitas 20 Ton/Batch | Kontrol PID Otomatis', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fbbf24' } },
          ]
        },

        { id: 'cap-cta-btn', type: 'button', props: { label: 'Unduh Brosur Spesifikasi Teknis (PDF) 📄', href: '#rfq', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', fontWeight: '800' } },
      ],
    },
    {
      id: 'sec-heavy-standards',
      type: 'standards',
      layout: 'ind-standards-heavy',
      components: [
        { id: 'std-badge', type: 'badge', props: { text: '🏅 SERTIFIKASI MUTU & KESELAMATAN INTERNASIONAL', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
        { id: 'std-title', type: 'heading', props: { content: 'Standar Mutu Berlapis & Sistem Quality Control Ketat', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'std-desc', type: 'paragraph', props: { content: 'Setiap komponen melewati pengujian ultrasonik, spektrometri material, dan CMM (Coordinate Measuring Machine) sebelum dikirim ke klien.', fontSize: '16px', color: '#cbd5e1' } },

        // Standard 1: ISO 9001:2015
        {
          id: 'card-std1',
          type: 'card',
          props: { background: '#0e1320', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'std1-tag', type: 'badge', props: { text: 'QUALITY SYSTEM', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
            { id: 'std1-title', type: 'heading', props: { content: 'ISO 9001:2015 Quality Management', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'std1-desc', type: 'paragraph', props: { content: 'Sistem manajemen mutu terakreditasi internasional yang menjamin ketelitian pengerjaan dan ketertelusuran nomor seri material.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Standard 2: ASME Boiler & Pressure Vessel
        {
          id: 'card-std2',
          type: 'card',
          props: { background: '#0e1320', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'std2-tag', type: 'badge', props: { text: 'U & S STAMP', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
            { id: 'std2-title', type: 'heading', props: { content: 'ASME Section VIII Div 1 & 2', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'std2-desc', type: 'paragraph', props: { content: 'Sertifikasi bejana tekan dan tangki bertekanan tinggi untuk proyek migas, petrokimia, dan pembangkit listrik tenaga uap.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Standard 3: ISO 14001:2015 Green Plant
        {
          id: 'card-std3',
          type: 'card',
          props: { background: '#0e1320', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'std3-tag', type: 'badge', props: { text: 'ENVIRONMENTAL', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'std3-title', type: 'heading', props: { content: 'ISO 14001:2015 Environmental', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'std3-desc', type: 'paragraph', props: { content: 'Pengelolaan limbah industri, filter emisi udara, dan pemulihan cairan pendingin CNC dengan sistem zero-liquid discharge.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Standard 4: ISO 45001:2018 Safety
        {
          id: 'card-std4',
          type: 'card',
          props: { background: '#0e1320', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'std4-tag', type: 'badge', props: { text: 'ZERO ACCIDENT', variant: 'solid', background: 'rgba(245,158,11,0.2)', color: '#fbbf24' } },
            { id: 'std4-title', type: 'heading', props: { content: 'ISO 45001:2018 K3 Keselamatan Kerja', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'std4-desc', type: 'paragraph', props: { content: 'Penerapan protokol keselamatan kerja ketat dengan pencapaian 5.000.000+ jam kerja bebas kecelakaan fatal (Zero LTI).', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Testing Lab Verification Banner Card
        {
          id: 'lab-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #182033 0%, #0d1322 100%)', borderColor: 'rgba(245,158,11,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'lab-badge', type: 'badge', props: { text: '🔬 IN-HOUSE QUALITY ASSURANCE LABORATORY', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fbbf24' } },
            { id: 'lab-title', type: 'heading', props: { content: 'Laboratorium Pengujian Material & CMM Zeiss 3D Inspection', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f8fafc' } },
            { id: 'lab-desc', type: 'paragraph', props: { content: 'Setiap pesanan dilengkapi dengan Mill Test Certificate (MTC) 3.1, Laporan Inspeksi Dimensi CMM Zeiss, Ultrasonic Testing (UT), Magnetic Particle Inspection (MPI), dan uji tarik material hidrolik.', fontSize: '14px', color: '#cbd5e1' } },
          ]
        }
      ],
    },
    {
      id: 'sec-heavy-rfq',
      type: 'rfq',
      layout: 'ind-rfq-heavy',
      components: [
        {
          id: 'rfq-heavy-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #182238 0%, #0d1322 50%, #080c16 100%)', borderColor: 'rgba(245,158,11,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'rfq-badge', type: 'badge', props: { text: '⚙️ FAST-TRACK B2B RFQ ESTIMATION', variant: 'outline', background: 'rgba(245,158,11,0.2)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.5)' } },
            { id: 'rfq-title', type: 'heading', props: { content: 'Kirim Gambar Teknik & Dapatkan Penawaran Harga dalam 24 Jam', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'rfq-desc', type: 'paragraph', props: { content: 'Tim Engineering kami siap mereview file CAD/STEP/DWG Anda, memberikan analisa manufacturability (DFM), dan menghitung estimasi biaya produksi terbaik.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
            { id: 'rfq-btn1', type: 'button', props: { label: 'Submit File CAD & Permintaan RFQ ⚡', href: 'mailto:rfq@nusantaraindustrial.co.id', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#0f172a', fontWeight: '800' } },
            { id: 'rfq-btn2', type: 'button', props: { label: 'Konsultasi Tim Lead Engineer (WhatsApp)', href: 'https://wa.me/6281122334455', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-heavy-footer',
      type: 'footer',
      layout: 'ind-footer-heavy',
      components: [
        { id: 'heavy-foot-logo', type: 'heading', props: { content: 'PT NUSANTARA HEAVY INDUSTRY', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
        { id: 'heavy-foot-desc', type: 'paragraph', props: { content: 'Perusahaan manufaktur presisi dan rekayasa baja berat terintegrasi. Berpengalaman lebih dari 25 tahun melayani proyek strategis energi, pertambangan, dan infrastruktur nasional.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'heavy-foot-plant', type: 'paragraph', props: { content: 'Main Plant: Kawasan Industri Krakatau Steel Kav. C-12, Cilegon, Banten 42435', fontSize: '13px', color: '#cbd5e1' } },
        { id: 'heavy-foot-contact', type: 'paragraph', props: { content: 'Tel: (021) 8990-2026 / 2027 | Email: rfq@nusantaraindustrial.co.id | Web: www.nusantaraindustrial.co.id', fontSize: '13px', color: '#fbbf24' } },
      ],
    },
  ],
};
