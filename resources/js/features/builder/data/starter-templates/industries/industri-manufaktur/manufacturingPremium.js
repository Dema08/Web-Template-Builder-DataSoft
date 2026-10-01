/**
 * Manufaktur FMCG & Green Eco-Plant — Premium Sustainable Manufacturing Template
 * Exclusive Starter Template untuk Pabrik FMCG, Maklon Organik/Kosmetik, & Kemasan Biodegradable.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'manufacturing-premium',
  name: 'Manufaktur FMCG & Eco-Plant',
  description: 'Template premium bernuansa hijau botani & clean metallic emerald untuk pabrik FMCG ramah lingkungan, maklon/OEM kosmetik organik, cleanroom aseptic bottling, dan produsen kemasan biodegradable. Dilengkapi Net-Zero announcement bar, hero split dengan 4 KPI keberlanjutan (1.5 Juta Pcs/Hari, 100% Solar, 0% Landfill Waste) & cleanroom showcase card, 4 kartu lini produk OEM/kemasan kompos dengan gambar terpisah, 4 kartu performa ESG & audit emisi karbon, klaim sample kit B2B CTA card, serta footer manufaktur hijau terverifikasi.',
  thumbnail: 'https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=800&auto=format&fit=crop&q=80',
  tags: ['FMCG', 'Eco Plant', 'Green Manufacturing', 'Maklon', 'OEM', 'Cleanroom', 'Biodegradable', 'ESG', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#10b981',
    secondaryColor: '#021f15',
    accentColor: '#6ee7b7',
    dark: true,
    surface: '#01160e',
    text: '#f0fdf4',
    muted: '#94a3b8',
    border: 'rgba(16,185,129,0.25)',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-eco-nav',
      type: 'navbar',
      layout: 'ind-nav-eco',
      components: [
        { id: 'eco-nav-logo', type: 'heading', props: { content: 'ECOPLANT NUSANTARA', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
        { id: 'eco-nav-badge', type: 'badge', props: { text: '🌱 100% SOLAR POWERED & BPOM GRADE A', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
        { id: 'eco-nav-1', type: 'button', props: { label: 'Katalog Produk', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'eco-nav-2', type: 'button', props: { label: 'Private Label & OEM', href: '#oem', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'eco-nav-3', type: 'button', props: { label: 'Sertifikasi ESG', href: '#esg', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'eco-nav-4', type: 'button', props: { label: 'Fasilitas Cleanroom', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'eco-nav-cta', type: 'button', props: { label: 'Request Sample Kit 🌱', href: '#oem', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-eco-hero',
      type: 'hero',
      layout: 'ind-hero-eco',
      components: [
        { id: 'eco-badge', type: 'badge', props: { text: '🌱 GREEN SUSTAINABLE FMCG & PACKAGING PLANT', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
        { id: 'eco-title', type: 'heading', props: { content: 'Manufaktur FMCG Ramah Lingkungan & Kemasan Biodegradable', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.025em' } },
        { id: 'eco-desc', type: 'paragraph', props: { content: 'Pabrik manufaktur kontrak (OEM/ODM) berstandar Cleanroom ISO Class 8 bertenaga 100% panel surya untuk produk makanan minuman, kosmetik organik, dan kemasan daur ulang ramah bumi.', fontSize: '17px', color: '#a7f3d0' } },
        { id: 'eco-btn1', type: 'button', props: { label: 'Konsultasi OEM / Private Label 🌱', href: '#oem', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
        { id: 'eco-btn2', type: 'button', props: { label: 'Lihat Katalog Kemasan Hijau', href: '#products', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.7)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },

        // 4 Eco KPI Stat Cards
        {
          id: 'eco-stat1-card',
          type: 'card',
          props: { background: '#032c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'eco-stat1-num', type: 'heading', props: { content: '1.5 Juta', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'eco-stat1-lbl', type: 'paragraph', props: { content: 'Kapasitas Produksi / Hari', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'eco-stat2-card',
          type: 'card',
          props: { background: '#032c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'eco-stat2-num', type: 'heading', props: { content: '100% Solar', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#86efac' } },
            { id: 'eco-stat2-lbl', type: 'paragraph', props: { content: 'Energi Terbarukan Atap Pabrik', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'eco-stat3-card',
          type: 'card',
          props: { background: '#032c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'eco-stat3-num', type: 'heading', props: { content: '0% Landfill', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#a7f3d0' } },
            { id: 'eco-stat3-lbl', type: 'paragraph', props: { content: 'Zero Waste Circular Economy', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'eco-stat4-card',
          type: 'card',
          props: { background: '#032c1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'eco-stat4-num', type: 'heading', props: { content: 'BPOM & Halal', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'eco-stat4-lbl', type: 'paragraph', props: { content: 'Grade A CPPOB & CPKB', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Eco Plant Showcase Card
        {
          id: 'eco-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #033a28 0%, #012419 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'eco-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=1000&auto=format&fit=crop&q=80',
                alt: 'Automated Sustainable Eco Cleanroom Manufacturing Plant',
                borderRadius: '14px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'eco-card-badge', type: 'badge', props: { text: '🍃 CLEANROOM ISO CLASS 8 · KARAWANG PLANT', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
            { id: 'eco-card-title', type: 'heading', props: { content: 'Fasilitas Manufaktur Steril & Packaging Otomatis', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'eco-card-desc', type: 'paragraph', props: { content: 'Dilengkapi automated filling & sealing berkecepatan tinggi, sistem HEPA filter 99.97%, dan lini packaging biodegradable non-plastik.', fontSize: '13px', color: '#a7f3d0' } },
          ]
        }
      ],
    },
    {
      id: 'sec-eco-products',
      type: 'products',
      layout: 'ind-products-eco',
      components: [
        { id: 'ecoprod-badge', type: 'badge', props: { text: '🍃 LINI PRODUKSI & OEM MANUFAKTUR', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
        { id: 'ecoprod-title', type: 'heading', props: { content: 'Solusi OEM & Manufaktur Berkelanjutan Skala Besar', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em' } },
        { id: 'ecoprod-desc', type: 'paragraph', props: { content: 'Dari formulasi bahan organik tersertifikasi hingga kemasan ramah lingkungan yang dapat terurai alami dalam waktu 180 hari.', fontSize: '16px', color: '#a7f3d0' } },

        // Category 1: Biodegradable Packaging
        {
          id: 'card-eco1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #02291c 0%, #011810 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'eco1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&auto=format&fit=crop&q=80',
                alt: 'Biodegradable Eco-Friendly Food Packaging',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'eco1-badge', type: 'badge', props: { text: '100% COMPOSTABLE', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'eco1-title', type: 'heading', props: { content: 'Kemasan Makanan Biodegradable & Box Daur Ulang', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'eco1-desc', type: 'paragraph', props: { content: 'Kemasan food-grade berbahan serat tebu (bagasse) dan pati jagung (PLA) tahan panas hingga 120°C, microwave safe, dan bebas racun mikroplastik.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'eco1-moq', type: 'heading', props: { content: 'MOQ: 10.000 Pcs | Sertifikasi: ASTM D6400, EN 13432', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
          ]
        },

        // Category 2: Botanical & Organic FMCG OEM
        {
          id: 'card-eco2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #02291c 0%, #011810 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'eco2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80',
                alt: 'Organic Cosmetics Cleanroom Contract Manufacturing',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'eco2-badge', type: 'badge', props: { text: 'CPKB GRADE A & HALAL', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'eco2-title', type: 'heading', props: { content: 'Kontrak Manufaktur Kosmetik & Skincare Organik', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'eco2-desc', type: 'paragraph', props: { content: 'Layanan maklon kosmetik bersih dari formulasi bahan botani lokal, uji efikasi klinis, pendaftaran izin edar BPOM, hingga pengemasan botol ramah lingkungan.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'eco2-moq', type: 'heading', props: { content: 'MOQ: 1.000 Unit | Layanan Full OEM Formulasi Custom', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
          ]
        },

        // Category 3: Cleanroom Beverage & Liquid Bottling
        {
          id: 'card-eco3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #02291c 0%, #011810 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'eco3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop&q=80',
                alt: 'Aseptic Beverage Bottling & Eco Glass Packaging',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'eco3-badge', type: 'badge', props: { text: 'ASEPTIC HOT-FILL 12.000 BPH', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'eco3-title', type: 'heading', props: { content: 'Bottling & Packaging Minuman Fungsional Steril', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'eco3-desc', type: 'paragraph', props: { content: 'Lini pengisian aseptik otomatis untuk RTD kombucha, cold-pressed juice, dan suplemen herbal cair dengan kemasan botol kaca daur ulang dan aluminium kaleng.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'eco3-moq', type: 'heading', props: { content: 'Kapasitas: 50.000 Botol/Hari | Sertifikasi: FSSC 22000', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
          ]
        },

        // Category 4: Industrial Eco Thermoforming
        {
          id: 'card-eco4',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #02291c 0%, #011810 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'eco4-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800&auto=format&fit=crop&q=80',
                alt: 'Industrial Thermoforming & Molded Fiber Cushioning',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'eco4-badge', type: 'badge', props: { text: 'MOLDED PULP FIBER', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'eco4-title', type: 'heading', props: { content: 'Molded Pulp Cushioning & Industrial Blister', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'eco4-desc', type: 'paragraph', props: { content: 'Pelindung kemasan elektronik, botol parfum, dan kosmetik berbahan bubur kertas daur ulang 100% menggantikan styrofoam dan plastik bubble wrap.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'eco4-moq', type: 'heading', props: { content: 'Custom Mold Design 3D | Kekuatan Beban Uji Drop-Test', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
          ]
        },

        { id: 'ecoprod-cta-btn', type: 'button', props: { label: 'Request Sample Box & Katalog Lengkap (Gratis) 🌱', href: '#oem', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-eco-esg',
      type: 'esg',
      layout: 'ind-esg-eco',
      components: [
        { id: 'esg-badge', type: 'badge', props: { text: '🌱 KOMITMEN KEBERLANJUTAN & ESG PERFORMANCE', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
        { id: 'esg-title', type: 'heading', props: { content: 'Standar Pabrik Hijau Ramah Lingkungan Masa Depan', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em' } },
        { id: 'esg-desc', type: 'paragraph', props: { content: 'Kami membuktikan bahwa efisiensi manufaktur skala besar dapat berjalan selaras dengan pelestarian alam dan pengurangan jejak karbon global.', fontSize: '16px', color: '#a7f3d0' } },

        // Metric 1: Solar PV Rooftop
        {
          id: 'card-esg1',
          type: 'card',
          props: { background: '#022b1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'esg1-tag', type: 'badge', props: { text: 'CLEAN ENERGY', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'esg1-title', type: 'heading', props: { content: '2.4 MWp Panel Surya Atap Pabrik Terpasang', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'esg1-desc', type: 'paragraph', props: { content: 'Menghasilkan 3.200 MWh energi bersih per tahun, menyuplai 100% kebutuhan listrik lini produksi utama di siang hari.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Metric 2: Zero Liquid Discharge Water
        {
          id: 'card-esg2',
          type: 'card',
          props: { background: '#022b1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'esg2-tag', type: 'badge', props: { text: 'WATER STEWARDSHIP', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'esg2-title', type: 'heading', props: { content: 'Daur Ulang Air 85% dengan Sistem Ultrafiltrasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'esg2-desc', type: 'paragraph', props: { content: 'Instalasi pengolahan air limbah terpadu (WWTP) dengan teknologi membrane bioreactor memastikan zero-liquid harmful contamination.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Metric 3: Carbon Offset Reduction
        {
          id: 'card-esg3',
          type: 'card',
          props: { background: '#022b1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'esg3-tag', type: 'badge', props: { text: 'CARBON OFFSET', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'esg3-title', type: 'heading', props: { content: '14.000 Ton Emisi Karbon Berhasil Direduksi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'esg3-desc', type: 'paragraph', props: { content: 'Setara dengan menanam 250.000 pohon produktif di hutan konservasi tropis bersama mitra petani lokal.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Metric 4: 100% Recyclable Packaging Loop
        {
          id: 'card-esg4',
          type: 'card',
          props: { background: '#022b1e', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'esg4-tag', type: 'badge', props: { text: 'CIRCULAR PACKAGING', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'esg4-title', type: 'heading', props: { content: 'Sertifikasi FSC & Kompos Alami Rumah Tangga', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdf4' } },
            { id: 'esg4-desc', type: 'paragraph', props: { content: 'Semua bahan baku karton dan kertas kemasan bersertifikat Forest Stewardship Council (FSC) dari hutan tanaman industri lestari.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // ESG Statement Banner
        {
          id: 'esg-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #023826 0%, #012217 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'esgb-badge', type: 'badge', props: { text: '📋 AUDITED ESG REPORT 2026', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
            { id: 'esgb-title', type: 'heading', props: { content: 'Transparansi Penuh untuk Mitra Brand Korporasi Global', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f0fdf4' } },
            { id: 'esgb-desc', type: 'paragraph', props: { content: 'Dapatkan laporan audit jejak karbon (Scope 1, 2, 3 GHG Protocol) dan sertifikat keberlanjutan resmi untuk setiap batch produksi produk private label brand Anda.', fontSize: '14px', color: '#a7f3d0' } },
          ]
        }
      ],
    },
    {
      id: 'sec-eco-cta',
      type: 'cta',
      layout: 'ind-cta-eco',
      components: [
        {
          id: 'cta-eco-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #023826 0%, #012419 50%, #01140e 100%)', borderColor: 'rgba(16,185,129,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'cta-eco-badge', type: 'badge', props: { text: '🌱 KERJASAMA KONTRAK OEM & PRIVATE LABEL', variant: 'outline', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
            { id: 'cta-eco-title', type: 'heading', props: { content: 'Wujudkan Produk Ramah Lingkungan untuk Brand Anda Bersama Kami', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'cta-eco-desc', type: 'paragraph', props: { content: 'Dapatkan sample kit kemasan biodegradable gratis dan konsultasi formulasi produk bersama tim R&D ahli kami. Proses cepat, legalitas BPOM terjamin, dan kapasitas produksi masif.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
            { id: 'cta-eco-btn1', type: 'button', props: { label: 'Klaim Sample Kit & Penawaran OEM 🌱', href: 'mailto:oem@ecoplant.id', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
            { id: 'cta-eco-btn2', type: 'button', props: { label: 'Chat R&D Specialist (WhatsApp)', href: 'https://wa.me/6281144556677', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.8)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-eco-footer',
      type: 'footer',
      layout: 'ind-footer-eco',
      components: [
        { id: 'eco-foot-logo', type: 'heading', props: { content: 'ECOPLANT NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
        { id: 'eco-foot-desc', type: 'paragraph', props: { content: 'Pionir manufaktur kontrak FMCG dan kemasan ramah lingkungan berskala industri di Indonesia. Berkomitmen mencapai Net-Zero Emission dengan standar kualitas global.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'eco-foot-plant', type: 'paragraph', props: { content: 'Eco Plant & Cleanroom: Kawasan Industri KIIC Lot B-15, Karawang Barat, Jawa Barat 41361', fontSize: '13px', color: '#a7f3d0' } },
        { id: 'eco-foot-contact', type: 'paragraph', props: { content: 'B2B Hotline: (0267) 840-5500 | Email: oem@ecoplant.id | Web: www.ecoplant.id', fontSize: '13px', color: '#6ee7b7' } },
      ],
    },
  ],
};
