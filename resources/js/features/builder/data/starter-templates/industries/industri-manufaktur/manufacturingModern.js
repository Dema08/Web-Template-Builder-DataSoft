/**
 * Smart Factory & Otomasi Manufaktur 4.0 — Premium Industrial Robotics Template
 * Exclusive Starter Template untuk Pabrik Pintar, Integrator Otomasi, dan Industri IoT.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'manufacturing-modern',
  name: 'Smart Factory & Otomasi 4.0',
  description: 'Template modern canggih dengan dark cyber blue & neon electric cyan aesthetic untuk Smart Factory, robotika industri, IoT telemetry, dan AI quality control. Dilengkapi live IoT status bar, hero telemetry dengan 4 KPI metric cards (94.8% OEE, 120+ Robots) & robotic arm showcase card, 3 kartu solusi otomasi (AMR/AGV, AI Vision, Digital Twin) dengan gambar terpisah, 4 kartu performa telemetri energi & keamanan IEC 62443, booking audit kesiapan industri 4.0 card, dan footer berteknologi tinggi.',
  thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
  tags: ['Smart Factory', 'Otomasi', 'Robotika', 'Industri 4.0', 'IoT', 'AI Vision', 'Digital Twin', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#3b82f6',
    secondaryColor: '#02050f',
    accentColor: '#06b6d4',
    dark: true,
    surface: '#030712',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: 'rgba(59,130,246,0.25)',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-smart-nav',
      type: 'navbar',
      layout: 'ind-nav-smart',
      components: [
        { id: 'smart-nav-logo', type: 'heading', props: { content: 'NEXUS AUTOMATION 4.0', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.05em' } },
        { id: 'smart-nav-badge', type: 'badge', props: { text: '⚡ SMART FACTORY & ROBOTICS', variant: 'outline', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.45)' } },
        { id: 'smart-nav-1', type: 'button', props: { label: 'Robotika & AGV', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#93c5fd' } },
        { id: 'smart-nav-2', type: 'button', props: { label: 'AI Quality Control', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#93c5fd' } },
        { id: 'smart-nav-3', type: 'button', props: { label: 'Live Telemetri', href: '#telemetry', variant: 'ghost', size: 'small', background: 'transparent', color: '#93c5fd' } },
        { id: 'smart-nav-4', type: 'button', props: { label: 'Audit Industri 4.0', href: '#audit', variant: 'ghost', size: 'small', background: 'transparent', color: '#93c5fd' } },
        { id: 'smart-nav-cta', type: 'button', props: { label: 'Jadwalkan Live Demo 🚀', href: '#audit', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-smart-hero',
      type: 'hero',
      layout: 'ind-hero-smart',
      components: [
        { id: 'smart-badge', type: 'badge', props: { text: '⚡ SMART FACTORY & INDUSTRIAL IOT 4.0', variant: 'outline', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.45)' } },
        { id: 'smart-title', type: 'heading', props: { content: 'Transformasi Pabrik Cerdas dengan Otomasi Robotik & AI Vision', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
        { id: 'smart-desc', type: 'text', props: { content: 'Integrasi sistem manufaktur cerdas dengan Autonomous Mobile Robots (AMR), computer vision quality inspection real-time, dan digital twin analytics untuk efisiensi produksi maksimal.', fontSize: '17px', color: '#cbd5e1' } },
        { id: 'smart-btn1', type: 'button', props: { label: 'Konsultasi Solusi Otomasi 🚀', href: '#audit', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: '#ffffff', fontWeight: '700' } },
        { id: 'smart-btn2', type: 'button', props: { label: 'Eksplorasi Solusi Robotik', href: '#solutions', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },

        // 4 Telemetry KPI Stat Cards
        {
          id: 'smart-stat1-card',
          type: 'card',
          props: { background: '#0b1329', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'smart-stat1-num', type: 'heading', props: { content: '94.8%', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#60a5fa' } },
            { id: 'smart-stat1-lbl', type: 'text', props: { content: 'Overall Equipment Effectiveness', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'smart-stat2-card',
          type: 'card',
          props: { background: '#0b1329', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'smart-stat2-num', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
            { id: 'smart-stat2-lbl', type: 'text', props: { content: 'Robotik & AGV Terintegrasi', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'smart-stat3-card',
          type: 'card',
          props: { background: '#0b1329', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'smart-stat3-num', type: 'heading', props: { content: '-35%', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#34d399' } },
            { id: 'smart-stat3-lbl', type: 'text', props: { content: 'Reduksi Biaya Downtime', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'smart-stat4-card',
          type: 'card',
          props: { background: '#0b1329', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'smart-stat4-num', type: 'heading', props: { content: '99.98%', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#a78bfa' } },
            { id: 'smart-stat4-lbl', type: 'text', props: { content: 'Akurasi Inspeksi AI Vision', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Robot Cell Showcase Card
        {
          id: 'smart-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0d1938 0%, #060b1c 100%)', borderColor: 'rgba(59,130,246,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'smart-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&auto=format&fit=crop&q=80',
                alt: 'Smart Factory Robotic Assembly Line',
                borderRadius: '14px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'smart-card-badge', type: 'badge', props: { text: '🤖 CELL 04 · HIGH-SPEED PICK & PLACE', variant: 'solid', background: 'rgba(59,130,246,0.2)', color: '#60a5fa' } },
            { id: 'smart-card-title', type: 'heading', props: { content: 'Sistem Robotik Fleksibel 6-Axis dengan Computer Vision', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'smart-card-desc', type: 'text', props: { content: 'Mendeteksi dan merakit komponen mikro dengan kecepatan 120 cycle/menit, terhubung langsung ke ERP dan cloud MES platform.', fontSize: '13px', color: '#94a3b8' } },
          ]
        }
      ],
    },
    {
      id: 'sec-smart-solutions',
      type: 'solutions',
      layout: 'ind-solutions-smart',
      components: [
        { id: 'sol-badge', type: 'badge', props: { text: '🤖 SOLUSI INTEGRASI INDUSTRI 4.0', variant: 'outline', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.45)' } },
        { id: 'sol-title', type: 'heading', props: { content: 'Ekosistem Otomasi Robotik & Intelligent Manufacturing', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'sol-desc', type: 'text', props: { content: 'Solusi modular end-to-end mulai dari logistik intra-pabrik otonom, inspeksi kualitas berbasis AI, hingga kontrol digital twin terpusat.', fontSize: '16px', color: '#cbd5e1' } },

        // Solution 1: Autonomous Mobile Robots (AMR/AGV)
        {
          id: 'card-sol1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0d1733 0%, #060c1d 100%)', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'sol1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=80',
                alt: 'Autonomous Mobile Robots AGV Warehouse Automation',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'sol1-badge', type: 'badge', props: { text: 'LIDAR SLAM NAVIGATION', variant: 'solid', background: 'rgba(59,130,246,0.2)', color: '#60a5fa' } },
            { id: 'sol1-title', type: 'heading', props: { content: 'Autonomous Mobile Robots (AMR) & AGV Fleet', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sol1-desc', type: 'text', props: { content: 'Armada robot pemindah material otomatis tanpa rel fisik dengan kapasitas angkut 500kg - 2 Ton, tersinkronisasi langsung dengan WMS pabrik.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'sol1-spec', type: 'heading', props: { content: 'Payload: 2.000 kg | Navigasi: LiDAR 3D + AI Obstacle Bypass', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#60a5fa' } },
          ]
        },

        // Solution 2: AI Computer Vision Inspection
        {
          id: 'card-sol2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0d1733 0%, #060c1d 100%)', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'sol2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop&q=80',
                alt: 'AI Computer Vision Surface Defect Inspection',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'sol2-badge', type: 'badge', props: { text: 'ZERO DEFECT 99.98%', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'sol2-title', type: 'heading', props: { content: 'AI Computer Vision Quality Inspection', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sol2-desc', type: 'text', props: { content: 'Kamera industri multi-spektral dengan deep learning untuk mendeteksi cacat mikro, retakan permukaan, dan ketidaksesuaian dimensi dalam milidetik.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'sol2-spec', type: 'heading', props: { content: 'Kecepatan: 600 Parts/Menit | Resolusi Defect: 10 Mikron', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#67e8f9' } },
          ]
        },

        // Solution 3: Digital Twin & Predictive Maintenance
        {
          id: 'card-sol3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0d1733 0%, #060c1d 100%)', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '18px', padding: '20px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'sol3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop&q=80',
                alt: 'Digital Twin Factory Telemetry Dashboard',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'sol3-badge', type: 'badge', props: { text: 'PREDICTIVE AI MES', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'sol3-title', type: 'heading', props: { content: 'Digital Twin & AI Predictive Maintenance', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sol3-desc', type: 'text', props: { content: 'Simulasi 3D real-time seluruh lantai pabrik dengan sensor getaran dan suhu IoT untuk memprediksi kerusakan mesin 14 hari sebelum terjadi.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'sol3-spec', type: 'heading', props: { content: 'Protokol: OPC-UA, MQTT | Integrasi: SAP, Oracle ERP', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#6ee7b7' } },
          ]
        },

        { id: 'sol-cta-btn', type: 'button', props: { label: 'Konsultasikan Kebutuhan Otomasi Pabrik 🚀', href: '#audit', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-smart-telemetry',
      type: 'telemetry',
      layout: 'ind-telemetry-smart',
      components: [
        { id: 'tel-badge', type: 'badge', props: { text: '📊 REAL-TIME SMART FACTORY TELEMETRY', variant: 'outline', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.45)' } },
        { id: 'tel-title', type: 'heading', props: { content: 'Visibilitas Operasional Penuh dengan Data Telemetri Real-Time', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'tel-desc', type: 'text', props: { content: 'Pantau status permesinan, konsumsi daya listrik per stasiun, dan tingkat cacat produk secara langsung dari dashboard cloud terpusat.', fontSize: '16px', color: '#cbd5e1' } },

        // Metric 1: Energy Reduction
        {
          id: 'card-tel1',
          type: 'card',
          props: { background: '#0a1226', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'tel1-tag', type: 'badge', props: { text: 'ENERGY MANAGEMENT', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'tel1-title', type: 'heading', props: { content: 'Efisiensi Energi -30% dengan AI Load Balancing', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'tel1-desc', type: 'text', props: { content: 'Optimasi konsumsi listrik otomatis saat beban puncak (peak load) yang menghemat biaya operasional hingga miliaran rupiah per tahun.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Metric 2: MTBF & Reliability
        {
          id: 'card-tel2',
          type: 'card',
          props: { background: '#0a1226', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'tel2-tag', type: 'badge', props: { text: 'RELIABILITY INDEX', variant: 'solid', background: 'rgba(59,130,246,0.2)', color: '#60a5fa' } },
            { id: 'tel2-title', type: 'heading', props: { content: 'MTBF (Mean Time Between Failures) 4.200 Jam', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'tel2-desc', type: 'text', props: { content: 'Ketahanan sistem robotik dengan protokol pemeliharaan preventif yang menjaga lini produksi tetap beroperasi tanpa henti.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Metric 3: Cycle Time Speed
        {
          id: 'card-tel3',
          type: 'card',
          props: { background: '#0a1226', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'tel3-tag', type: 'badge', props: { text: 'SPEED OPTIMIZATION', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'tel3-title', type: 'heading', props: { content: 'Percepatan Cycle Time Produksi hingga 45%', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'tel3-desc', type: 'text', props: { content: 'Sinkronisasi pergerakan robotik multi-sumbu mengurangi waktu tunggu (idle time) antar stasiun kerja perakitan.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Metric 4: Cyber Security IEC 62443
        {
          id: 'card-tel4',
          type: 'card',
          props: { background: '#0a1226', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'tel4-tag', type: 'badge', props: { text: 'CYBER SECURITY', variant: 'solid', background: 'rgba(168,85,247,0.2)', color: '#c084fc' } },
            { id: 'tel4-title', type: 'heading', props: { content: 'Keamanan Data Industri Berstandar IEC 62443', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'tel4-desc', type: 'text', props: { content: 'Enkripsi jaringan kontrol SCADA/PLC tingkat militer untuk melindungi formula manufaktur dan data produksi dari ancaman siber.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        // Smart Control Center Banner
        {
          id: 'control-center-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0d1e44 0%, #060e22 100%)', borderColor: 'rgba(59,130,246,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'ctrl-badge', type: 'badge', props: { text: '🕹 INTEGRATED COMMAND CENTER 24/7', variant: 'solid', background: 'rgba(59,130,246,0.25)', color: '#60a5fa' } },
            { id: 'ctrl-title', type: 'heading', props: { content: 'Centralized Manufacturing Execution System (MES) & Cloud SCADA', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f8fafc' } },
            { id: 'ctrl-desc', type: 'text', props: { content: 'Terintegrasi secara seamless dengan API ERP (SAP/Oracle/Microsoft Dynamics), barcode QR traceability per batch produk, dan automated alert WhatsApp/Email saat terjadi anomali produksi.', fontSize: '14px', color: '#cbd5e1' } },
          ]
        }
      ],
    },
    {
      id: 'sec-smart-cta',
      type: 'cta',
      layout: 'ind-cta-smart',
      components: [
        {
          id: 'cta-smart-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0e1c3e 0%, #060e22 50%, #020614 100%)', borderColor: 'rgba(59,130,246,0.45)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'cta-smart-badge', type: 'badge', props: { text: '⚡ MODERNISASI PABRIK & AUDIT OTOMASI 4.0', variant: 'outline', background: 'rgba(59,130,246,0.2)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.5)' } },
            { id: 'cta-smart-title', type: 'heading', props: { content: 'Siap Mengubah Pabrik Anda Menjadi Smart Factory Cerdas & Efisien?', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'cta-smart-desc', type: 'text', props: { content: 'Jadwalkan audit kesiapan otomasi gratis bersama Principal Automation Engineer kami. Dapatkan blueprint integrasi robotik dan estimasi ROI dalam 5 hari kerja.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
            { id: 'cta-smart-btn1', type: 'button', props: { label: 'Jadwalkan Kunjungan Audit & Live Demo 🚀', href: 'mailto:automation@nexus4.id', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', color: '#ffffff', fontWeight: '700' } },
            { id: 'cta-smart-btn2', type: 'button', props: { label: 'Diskusi Teknis WhatsApp', href: 'https://wa.me/6281133445566', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(10,18,38,0.8)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-smart-footer',
      type: 'footer',
      layout: 'ind-footer-smart',
      components: [
        { id: 'smart-foot-logo', type: 'heading', props: { content: 'NEXUS AUTOMATION 4.0', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
        { id: 'smart-foot-desc', type: 'text', props: { content: 'Penyedia solusi otomasi industri, robotika manufaktur, dan sistem AI quality control terdepan di Asia Tenggara. Menghubungkan sensor cerdas, robotik, dan cloud MES.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'smart-foot-center', type: 'text', props: { content: 'Robotics Center: Kawasan Industri Jababeka V Blok G-8, Cikarang, Bekasi 17530', fontSize: '13px', color: '#cbd5e1' } },
        { id: 'smart-foot-contact', type: 'text', props: { content: 'Support: (021) 8934-4000 | Email: connect@nexus4.id | API Portal: dev.nexus4.id', fontSize: '13px', color: '#67e8f9' } },
      ],
    },
  ],
};
