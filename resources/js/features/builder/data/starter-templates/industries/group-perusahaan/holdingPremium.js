/**
 * Sovereign Industrial Group — Heavy Industry, Metallurgy & Advanced Manufacturing Holding
 * Exclusive Premium Starter Template untuk Grup Industri Berat, Hilirisasi Mineral & Energi Manufaktur.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'holding-premium',
  name: 'Sovereign Industrial Group Tbk',
  description: 'Template premium eksklusif untuk grup holding industri manufaktur berat, hilirisasi metalurgi, smelter nikel/tembaga ramah lingkungan, fabrikasi panel surya & robotika otomasi pabrik. Dilengkapi telemetry status pabrik live, 4 divisi manufaktur hulu-hilir, skala output produksi tahunan, pilar keselamatan kerja K3 Zero-Harm & sertifikasi ISO 9001/14001/45001, peta tapak pabrik & pelabuhan ekspor laut dalam, dewan direksi teknik manufaktur, portal e-procurement vendor B2B, serta direktori kepatuhan industri.',
  thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
  tags: ['Industrial Holding', 'Manufacturing', 'Heavy Industry', 'Metallurgy', 'Clean Energy', 'Procurement', 'B2B', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#0f172a',
    secondaryColor: '#1e293b',
    accentColor: '#f59e0b',
    industrialGold: '#d97706',
    dark: true,
    surface: '#020617',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#334155',
    radius: 'xl',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'slide-in', 'hover-lift', 'glow-amber'],
  sections: [
    {
      id: 'ind-nav',
      type: 'navbar',
      layout: 'holding-nav-industrial',
      components: [
        {
          id: 'ind-logo',
          type: 'heading',
          props: {
            content: 'SOVEREIGN INDUSTRIAL',
            level: 'h2',
            fontSize: '19px',
            fontWeight: '900',
            color: '#ffffff',
            letterSpacing: '0.1em',
          },
        },
        {
          id: 'i-nav-1',
          type: 'button',
          props: { label: 'Divisi Manufaktur', href: '#divisions', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'i-nav-2',
          type: 'button',
          props: { label: 'Kapasitas Produksi', href: '#scale', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'i-nav-3',
          type: 'button',
          props: { label: 'Standar K3 & ISO', href: '#safety', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'i-nav-4',
          type: 'button',
          props: { label: 'Jaringan Pabrik & Hub', href: '#footprint', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'i-nav-5',
          type: 'button',
          props: { label: 'Dewan Direksi', href: '#governance', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'i-cta-vendor',
          type: 'button',
          props: {
            label: 'Portal E-Procurement B2B →',
            href: '#procurement',
            variant: 'primary',
            size: 'small',
            radius: 'lg',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: '#020617',
            fontWeight: '800',
          },
        },
      ],
    },
    {
      id: 'ind-hero',
      type: 'hero',
      layout: 'holding-hero-industrial',
      components: [
        {
          id: 'ind-hero-badge',
          type: 'badge',
          props: {
            content: '⚙️ Fondasi Hilirisasi Industri & Kedaulatan Manufaktur Nasional',
            variant: 'primary',
            background: 'rgba(245, 158, 11, 0.15)',
            color: '#fbbf24',
            size: 'medium',
          },
        },
        {
          id: 'ind-hero-heading',
          type: 'heading',
          props: {
            content: 'Membangun Ketahanan Industri Berat Melalui Rekayasa Teknologi Terintegrasi',
            level: 'h1',
            fontSize: '54px',
            fontWeight: '900',
            color: '#ffffff',
            lineHeight: '1.15',
          },
        },
        {
          id: 'ind-hero-text',
          type: 'text',
          props: {
            content: 'Sovereign Industrial Group Tbk mengoperasikan 12 kawasan industri terpadu, 6 fasilitas smelter ramah lingkungan, manufaktur panel sel surya canggih, dan sistem robotika perakitan otomatis berstandar global.',
            fontSize: '18px',
            color: '#94a3b8',
            lineHeight: '1.7',
          },
        },
        {
          id: 'ind-hero-btn-1',
          type: 'button',
          props: {
            label: 'Jelajahi Divisi Manufaktur Kami →',
            href: '#divisions',
            variant: 'primary',
            size: 'large',
            radius: 'xl',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: '#020617',
            fontWeight: '800',
          },
        },
        {
          id: 'ind-hero-btn-2',
          type: 'button',
          props: {
            label: 'Unduh Industrial Capability Book (PDF)',
            href: '#procurement',
            variant: 'outline',
            size: 'large',
            radius: 'xl',
            border: '1px solid #475569',
            color: '#f8fafc',
            fontWeight: '600',
          },
        },
        {
          id: 'ind-hero-card-1',
          type: 'card',
          props: { background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(245, 158, 11, 0.3)', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'ihc1-badge', type: 'badge', props: { content: 'Total Kapasitas Terpasang', background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', size: 'small' } },
            { id: 'ihc1-head', type: 'heading', props: { content: 'Throughput Manufaktur Logam & Kimia', level: 'h4', fontSize: '14px', color: '#94a3b8' } },
            { id: 'ihc1-txt', type: 'text', props: { content: '8.4 Juta Ton/Tahun', fontSize: '28px', fontWeight: '800', color: '#ffffff' } },
          ],
        },
        {
          id: 'ind-hero-card-2',
          type: 'card',
          props: { background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(245, 158, 11, 0.3)', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'ihc2-badge', type: 'badge', props: { content: 'Standar K3 Internasional', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', size: 'small' } },
            { id: 'ihc2-head', type: 'heading', props: { content: 'Jam Kerja Aman Tanpa Kecelakaan Fatal', level: 'h4', fontSize: '14px', color: '#94a3b8' } },
            { id: 'ihc2-txt', type: 'text', props: { content: '42.6 Juta Man-Hours', fontSize: '28px', fontWeight: '800', color: '#4ade80' } },
          ],
        },
      ],
    },
    {
      id: 'ind-divisions',
      type: 'services',
      layout: 'holding-divisions-industrial',
      components: [
        {
          id: 'id-badge',
          type: 'badge',
          props: { content: '4 DIVISI UTAMA MANUFAKTUR HULU & HILIR', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'medium' },
        },
        {
          id: 'id-heading',
          type: 'heading',
          props: { content: 'Ekosistem Manufaktur Terpadu Dari Hulu Mineral Hingga Produk Presisi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'id-text',
          type: 'text',
          props: { content: 'Seluruh divisi beroperasi secara sinergis, memanfaatkan energi bersih dari gardu internal grup untuk menekan jejak karbon manufaktur ke tingkat terendah.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'id-card-1',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'idc1-icon', type: 'icon', props: { name: 'Flame', size: 32, color: '#fbbf24' } },
            { id: 'idc1-badge', type: 'badge', props: { content: 'Divisi 01: Metalurgi & Smelter', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'idc1-head', type: 'heading', props: { content: 'Sovereign Metal & Smelting Tbk', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'idc1-txt', type: 'text', props: { content: 'Fasilitas peleburan Nickel Pig Iron (NPI), Ferronickel, dan Copper Cathode berkemurnian 99.99% dengan teknologi High Pressure Acid Leach (HPAL).', fontSize: '14px', color: '#94a3b8' } },
            { id: 'idc1-btn', type: 'button', props: { label: 'Spesifikasi Material Logam →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
          ],
        },
        {
          id: 'id-card-2',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'idc2-icon', type: 'icon', props: { name: 'SunMedium', size: 32, color: '#fbbf24' } },
            { id: 'idc2-badge', type: 'badge', props: { content: 'Divisi 02: Energi & Sel Surya', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'idc2-head', type: 'heading', props: { content: 'Sovereign Solar Technologies', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'idc2-txt', type: 'text', props: { content: 'Giga-factory manufaktur sel fotovoltaik (PV N-Type TOPCon) dan perakitan panel surya monokristalin berkapasitas 3.2 GW per tahun.', fontSize: '14px', color: '#94a3b8' } },
            { id: 'idc2-btn', type: 'button', props: { label: 'Katalog Modul Solar PV →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
          ],
        },
        {
          id: 'id-card-3',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'idc3-icon', type: 'icon', props: { name: 'Bot', size: 32, color: '#fbbf24' } },
            { id: 'idc3-badge', type: 'badge', props: { content: 'Divisi 03: Otomasi & Robotika', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'idc3-head', type: 'heading', props: { content: 'Sovereign Robotics & Automation', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'idc3-txt', type: 'text', props: { content: 'Rekayasa lengan robot presisi tinggi, automated guided vehicles (AGV) pabrik, dan sistem integrasi lini konveyor cerdas untuk industri otomotif.', fontSize: '14px', color: '#94a3b8' } },
            { id: 'idc3-btn', type: 'button', props: { label: 'Solusi Otomasi Pabrik →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
          ],
        },
        {
          id: 'id-card-4',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'idc4-icon', type: 'icon', props: { name: 'Ship', size: 32, color: '#fbbf24' } },
            { id: 'idc4-badge', type: 'badge', props: { content: 'Divisi 04: Terminal Maritim & Logistik', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'idc4-head', type: 'heading', props: { content: 'Sovereign Port & Bulk Logistics', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'idc4-txt', type: 'text', props: { content: 'Pengelolaan 4 pelabuhan laut dalam berkedalaman -18 meter LWS yang mampu melayani sandar kapal kargo Capesize berbobot 180.000 DWT.', fontSize: '14px', color: '#94a3b8' } },
            { id: 'idc4-btn', type: 'button', props: { label: 'Fasilitas Terminal Maritim →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
          ],
        },
      ],
    },
    {
      id: 'ind-scale',
      type: 'about',
      layout: 'holding-scale-industrial',
      components: [
        {
          id: 'is-badge',
          type: 'badge',
          props: { content: 'KAPASITAS MANUFAKTUR & METRIK SKALA OPERASI', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'medium' },
        },
        {
          id: 'is-heading',
          type: 'heading',
          props: { content: 'Skala Output Pabrik & Daya Dukung Industri Nasional', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'is-stat-1',
          type: 'statistic',
          props: { value: '8.4M Ton', label: 'Output Logam & Kimia/Tahun', description: 'Memasok rantai pasok baterai EV & konstruksi global', color: '#fbbf24' },
        },
        {
          id: 'is-stat-2',
          type: 'statistic',
          props: { value: '3.2 GW', label: 'Produksi Panel Surya/Tahun', description: 'Diekspor ke Amerika Serikat, Eropa, dan Asia', color: '#ffffff' },
        },
        {
          id: 'is-stat-3',
          type: 'statistic',
          props: { value: '12 Kompleks', label: 'Kawasan Industri Terintegrasi', description: 'Total luas lahan industri aktif 14.500 Hektar', color: '#fbbf24' },
        },
        {
          id: 'is-stat-4',
          type: 'statistic',
          props: { value: '99.98%', label: 'Tingkat Akurasi Quality Control', description: 'Didukung laboratorium pengujian material ISO 17025', color: '#4ade80' },
        },
      ],
    },
    {
      id: 'ind-safety',
      type: 'about',
      layout: 'holding-safety-industrial',
      components: [
        {
          id: 'isaf-badge',
          type: 'badge',
          props: { content: 'OCCUPATIONAL HEALTH, SAFETY & QUALITY (K3)', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'medium' },
        },
        {
          id: 'isaf-heading',
          type: 'heading',
          props: { content: 'Standar Keselamatan Kerja K3 Kelas Dunia & Zero-Harm', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'isaf-text',
          type: 'text',
          props: { content: 'Bagi Sovereign Industrial Group, keselamatan setiap karyawan dan pelestarian ekosistem lingkungan sekitar pabrik adalah fondasi mutlak dari kelangsungan bisnis jangka panjang.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'isaf-btn',
          type: 'button',
          props: { label: 'Unduh Manual Kebijakan K3 & Lingkungan (PDF) →', href: '#', variant: 'outline', border: '1px solid #f59e0b', color: '#fbbf24', size: 'medium' },
        },
        {
          id: 'isaf-card-1',
          type: 'card',
          props: { background: '#020617', border: '1px solid rgba(245, 158, 11, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'sc1-icon', type: 'icon', props: { name: 'ShieldCheck', size: 28, color: '#fbbf24' } },
            { id: 'sc1-badge', type: 'badge', props: { content: 'ISO 45001 : 2018', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'small' } },
            { id: 'sc1-head', type: 'heading', props: { content: 'Sistem Manajemen K3 Terakreditasi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'sc1-txt', type: 'text', props: { content: 'Audit K3 harian berbasis sensor AI helm pelindung dan protokol permit-to-work digital untuk seluruh area panas smelter.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'isaf-card-2',
          type: 'card',
          props: { background: '#020617', border: '1px solid rgba(34, 197, 94, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'sc2-icon', type: 'icon', props: { name: 'Activity', size: 28, color: '#4ade80' } },
            { id: 'sc2-badge', type: 'badge', props: { content: 'ISO 14001 : 2015', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', size: 'small' } },
            { id: 'sc2-head', type: 'heading', props: { content: 'Pengelolaan Emisi & Limbah Sirkular', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'sc2-txt', type: 'text', props: { content: 'Fasilitas daur ulang tailing terak smelter menjadi bahan paving industri semen serta pemantauan kualitas udara continuous emission monitoring (CEMS).', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'isaf-card-3',
          type: 'card',
          props: { background: '#020617', border: '1px solid rgba(14, 165, 233, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'sc3-icon', type: 'icon', props: { name: 'CheckCircle2', size: 28, color: '#38bdf8' } },
            { id: 'sc3-badge', type: 'badge', props: { content: 'ISO 9001 & ISO 17025', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'small' } },
            { id: 'sc3-head', type: 'heading', props: { content: 'Laboratorium Metalurgi Terakreditasi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'sc3-txt', type: 'text', props: { content: 'Pengujian spektrometri emisi optik (OES) dan mikroskop elektron untuk memastikan toleransi kemurnian ingot logam sesuai standar ASTM internasional.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
      ],
    },
    {
      id: 'ind-footprint',
      type: 'about',
      layout: 'holding-global-footprint-industrial',
      components: [
        {
          id: 'igf-badge',
          type: 'badge',
          props: { content: 'JARINGAN MANUFAKTUR & HUB EKSPOR LAUT DALAM', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'medium' },
        },
        {
          id: 'igf-heading',
          type: 'heading',
          props: { content: 'Tapak Operasional Pabrik & Koridor Ekspor Terintegrasi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'igf-text',
          type: 'text',
          props: { content: 'Pabrik dan kawasan industri kami terhubung langsung dengan dermaga peti kemas laut dalam untuk mempercepat pengapalan kargo ke pasar ekspor Asia, Eropa, dan Amerika.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'igf-card-1',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'igc1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80', alt: 'Smelter Hub Morowali', radius: 'xl' } },
            { id: 'igc1-badge', type: 'badge', props: { content: 'Sulawesi Tengah', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'igc1-head', type: 'heading', props: { content: 'Morowali Eco-Industrial Park', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'igc1-txt', type: 'text', props: { content: 'Kompleks 8 smelter HPAL terintegrasi, pembangkit listrik internal 1.200 MW, dan dermaga laut dalam 100.000 DWT.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'igf-card-2',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'igc2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80', alt: 'Solar Gigafactory Batam', radius: 'xl' } },
            { id: 'igc2-badge', type: 'badge', props: { content: 'Kepulauan Riau', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'igc2-head', type: 'heading', props: { content: 'Batam Solar Cell & Module Gigafactory', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'igc2-txt', type: 'text', props: { content: 'Fasilitas cleanroom ISO-7 perakitan wafer fotovoltaik 3.2 GW berorientasi ekspor langsung ke pasar global.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'igf-card-3',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'igc3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80', alt: 'Robotics Plant Cikarang', radius: 'xl' } },
            { id: 'igc3-badge', type: 'badge', props: { content: 'Jawa Barat', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'igc3-head', type: 'heading', props: { content: 'Cikarang Advanced Robotics Tech Center', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'igc3-txt', type: 'text', props: { content: 'Pusat riset & perakitan mesin CNC 5-axis, sensor optik AI, dan integrasi PLC otomasi pabrik manufaktur.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
      ],
    },
    {
      id: 'ind-governance',
      type: 'team',
      layout: 'holding-governance-industrial',
      components: [
        {
          id: 'igov-badge',
          type: 'badge',
          props: { content: 'DEWAN DIREKSI & KOMITE REKAYASA TEKNIK', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'medium' },
        },
        {
          id: 'igov-heading',
          type: 'heading',
          props: { content: 'Kepemimpinan Eksekutif Sovereign Industrial Group', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'igov-text',
          type: 'text',
          props: { content: 'Dipimpin oleh pakar metalurgi, insinyur perkapalan terkemuka, dan eksekutif manufaktur dengan pengalaman puluhan tahun mengelola fasilitas industri berat.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'igov-card-1',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'igovc1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80', alt: 'Ir. Hendra Tanuwijaya', radius: 'xl' } },
            { id: 'igovc1-head', type: 'heading', props: { content: 'Ir. Hendra Tanuwijaya, M.Sc.', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'igovc1-badge', type: 'badge', props: { content: 'Presiden Direktur & Group CEO', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'igovc1-txt', type: 'text', props: { content: 'Doktor Metalurgi dari RWTH Aachen University dengan pengalaman 30 tahun merancang smelter ramah lingkungan.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'igovc1-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
          ],
        },
        {
          id: 'igov-card-2',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'igovc2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80', alt: 'Prof. Dr. Ratna Wulandari', radius: 'xl' } },
            { id: 'igovc2-head', type: 'heading', props: { content: 'Prof. Dr. Ratna Wulandari, B.Eng', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'igovc2-badge', type: 'badge', props: { content: 'Direktur Teknologi & Rekayasa Manufaktur', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'igovc2-txt', type: 'text', props: { content: 'Pelopor pengembangan sel surya fotovoltaik efisiensi tinggi dan ketua konsorsium energi bersih industri.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'igovc2-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
          ],
        },
        {
          id: 'igov-card-3',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'igovc3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80', alt: 'Gunawan Wicaksono', radius: 'xl' } },
            { id: 'igovc3-head', type: 'heading', props: { content: 'Gunawan Wicaksono, SE, MM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'igovc3-badge', type: 'badge', props: { content: 'Direktur Operasional & Supply Chain Holding', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'igovc3-txt', type: 'text', props: { content: 'Mengomandani pengadaan bahan baku kokas, asam sulfat, dan operasional logistik pelabuhan laut dalam grup.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'igovc3-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
          ],
        },
        {
          id: 'igov-card-4',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'igovc4-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80', alt: 'Dewi Kartika', radius: 'xl' } },
            { id: 'igovc4-head', type: 'heading', props: { content: 'Dewi Kartika, SH, LL.M', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'igovc4-badge', type: 'badge', props: { content: 'Direktur Kepatuhan Hukum & K3 Lingkungan', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'igovc4-txt', type: 'text', props: { content: 'Memastikan kepatuhan ketat seluruh pabrik terhadap baku mutu AMDAL, izin lingkungan, dan sertifikasi K3 internasional.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'igovc4-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
          ],
        },
      ],
    },
    {
      id: 'ind-procurement',
      type: 'contact',
      layout: 'holding-procurement-industrial',
      components: [
        {
          id: 'iproc-badge',
          type: 'badge',
          props: { content: 'B2B VENDOR & CONTRACTOR QUALIFICATION PORTAL', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'medium' },
        },
        {
          id: 'iproc-heading',
          type: 'heading',
          props: { content: 'Portal Pengadaan Barang & Jasa (E-Procurement) Holding', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'iproc-text',
          type: 'text',
          props: { content: 'Kami membuka peluang kemitraan bagi pemasok peralatan berat, bahan kimia industri, kontraktor EPC, dan penyedia logistik yang memenuhi standar integritas tinggi.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'iproc-btn-1',
          type: 'button',
          props: { label: 'Registrasi Vendor Rekanan Terdaftar →', href: '#', variant: 'primary', background: '#f59e0b', color: '#020617', size: 'large' },
        },
        {
          id: 'iproc-btn-2',
          type: 'button',
          props: { label: 'Unduh Dokumen Prakualifikasi Tender (PDF)', href: '#', variant: 'outline', border: '1px solid #475569', color: '#ffffff', size: 'large' },
        },
        {
          id: 'iproc-card-1',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: 'xl', padding: '20px' },
          childrenComponents: [
            { id: 'ipc1-icon', type: 'icon', props: { name: 'FileCheck', size: 24, color: '#fbbf24' } },
            { id: 'ipc1-head', type: 'heading', props: { content: 'Transparansi & Pakta Integritas Terverifikasi', level: 'h4', fontSize: '16px', color: '#ffffff' } },
            { id: 'ipc1-txt', type: 'text', props: { content: 'Seluruh proses tender dilakukan secara elektronik dan diawasi oleh komite pengadaan independen tanpa perantara.', fontSize: '13px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'iproc-card-2',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: 'xl', padding: '20px' },
          childrenComponents: [
            { id: 'ipc2-icon', type: 'icon', props: { name: 'Zap', size: 24, color: '#fbbf24' } },
            { id: 'ipc2-head', type: 'heading', props: { content: 'Term Pembayaran Tepat Waktu (Supply Chain Financing)', level: 'h4', fontSize: '16px', color: '#ffffff' } },
            { id: 'ipc2-txt', type: 'text', props: { content: 'Fasilitas early-payment invoice berkolaborasi dengan sindikasi perbankan BUMN bagi vendor UMKM terpilih.', fontSize: '13px', color: '#94a3b8' } },
          ],
        },
      ],
    },
    {
      id: 'ind-footer',
      type: 'footer',
      layout: 'holding-footer-industrial',
      components: [
        {
          id: 'ifoot-heading',
          type: 'heading',
          props: { content: 'SOVEREIGN INDUSTRIAL GROUP TBK', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'ifoot-text-1',
          type: 'text',
          props: { content: 'Sovereign Industrial Tower, Mega Kuningan Barat Lot 5, Jakarta Selatan 12950, Indonesia. Telp: +62 21 5790 9900 | E-Procurement: vendor.desk@sovereignindustrial.co.id', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'ifoot-card-1',
          type: 'card',
          props: { background: 'transparent' },
          childrenComponents: [
            { id: 'ifc-head-1', type: 'heading', props: { content: 'Divisi Industri Manufaktur', level: 'h5', fontSize: '15px', color: '#ffffff' } },
            { id: 'ifc-btn-1a', type: 'button', props: { label: 'Metalurgi & Smelter Nikel/Tembaga', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'ifc-btn-1b', type: 'button', props: { label: 'Pabrik Sel Surya & Modul PV', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'ifc-btn-1c', type: 'button', props: { label: 'Robotika & Otomasi CNC Pabrik', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'ifc-btn-1d', type: 'button', props: { label: 'Terminal Pelabuhan Laut Dalam', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
          ],
        },
        {
          id: 'ifc-card-2',
          type: 'card',
          props: { background: 'transparent' },
          childrenComponents: [
            { id: 'ifc-head-2', type: 'heading', props: { content: 'Kepatuhan & E-Procurement', level: 'h5', fontSize: '15px', color: '#ffffff' } },
            { id: 'ifc-btn-2a', type: 'button', props: { label: 'Portal Vendor & Syarat Tender', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'ifc-btn-2b', type: 'button', props: { label: 'Standar K3 & Manual ISO 45001', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'ifc-btn-2c', type: 'button', props: { label: 'Laporan AMDAL & Mutu Udara CEMS', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'ifc-btn-2d', type: 'button', props: { label: 'Whistleblower & Whistleblowing System', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
          ],
        },
        {
          id: 'ifoot-text-2',
          type: 'text',
          props: { content: '© 2026 PT Sovereign Industrial Group Tbk. Seluruh hak cipta dilindungi undang-undang. Sertifikasi ISO 9001, ISO 14001, ISO 45001, ISO 17025.', fontSize: '12px', color: '#64748b' },
        },
      ],
    },
  ],
};
