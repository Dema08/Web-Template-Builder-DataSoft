/**
 * Koperasi Susu Perah Fresh — Farm-to-Table Fresh Dairy & Cold Chain
 * Starter template for dairy farmer cooperatives with cold chain collection centers.
 * Full Right-Inspector support for all cards, images, badges, headings, and buttons.
 */
export default {
  id: 'dairy-coop',
  name: 'Koperasi Susu Perah Fresh',
  description: 'Template koperasi susu segar perah premium dengan status pos penampungan 4°C, 4 KPI peternak, etalase olahan susu pasteurisasi, standar SNI pengujian lab, dan formulir langganan harian.',
  thumbnail: 'https://images.unsplash.com/photo-1527153857715-33282435658a?w=800&auto=format&fit=crop&q=80',
  tags: ['Dairy', 'Fresh Milk', 'Farmer Network', 'Cold Chain', 'SNI', 'Premium'],
  theme: {
    primaryColor: '#0d9488',
    secondaryColor: '#f0fdfa',
    accentColor: '#14b8a6',
    dark: true,
    surface: '#021a17',
    text: '#f0fdfa',
    muted: '#99f6e4',
    border: 'rgba(20,184,166,0.3)',
    radius: 'lg',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-in', 'counter-up', 'hover-lift', 'scale-in'],
  sections: [
    {
      id: 'fresh-nav-sec',
      type: 'navbar',
      layout: 'dairy-nav-fresh',
      components: [
        { id: 'fresh-brand', type: 'heading', props: { content: 'KOPERASI SUSU MURNI', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.04em' } },
        { id: 'fresh-status-badge', type: 'badge', props: { text: '🥛 12 POS PENAMPUNGAN SUHU 4°C AKTIF • STANDAR SNI 3141.1', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4', borderColor: 'rgba(20,184,166,0.3)' } },
        { id: 'fresh-member-btn', type: 'button', props: { label: 'Kemitraan Peternak 🐄', href: '#contact', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(4,47,44,0.8)', color: '#99f6e4', borderColor: 'rgba(20,184,166,0.4)', fontSize: '12px' } },
        { id: 'fresh-order-btn', type: 'button', props: { label: 'Order Susu Segar', href: '#products', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #0d9488, #0f766e)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
      ]
    },
    {
      id: 'fresh-hero-sec',
      type: 'hero',
      layout: 'dairy-hero-fresh',
      components: [
        { id: 'fresh-badge', type: 'badge', props: { text: '🌿 100% MURNI DARI PETERNAKAN RAKYAT BERSTANDAR SNI', variant: 'outline', background: 'rgba(13,148,136,0.15)', color: '#5eead4', borderColor: 'rgba(20,184,166,0.4)' } },
        { id: 'fresh-title', type: 'heading', props: { content: 'Susu Sapi Segar Perahan Pagi, Murni Tanpa Campuran & Higienis', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f0fdfa', letterSpacing: '-0.025em' } },
        { id: 'fresh-desc', type: 'text', props: { content: 'Wadah gotong royong 1.850+ peternak sapi perah rakyat. Menjaga kualitas susu murni melalui pendinginan cepat 4°C dan uji laboratorium ketat setiap pagi.', fontSize: '17px', color: '#99f6e4' } },
        { id: 'fresh-btn1', type: 'button', props: { label: 'Beli Susu Segar Harian 🥛', href: '#products', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #0d9488, #0f766e)', color: '#ffffff', fontWeight: '700' } },
        { id: 'fresh-btn2', type: 'button', props: { label: 'Gabung Peternak Binaan', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(4,47,44,0.7)', color: '#ccfbf1', borderColor: 'rgba(20,184,166,0.4)' } },

        // 4 Farm KPI Cards
        {
          id: 'fresh-stat1-card',
          type: 'card',
          props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'fresh-stat1-num', type: 'heading', props: { content: '25.000 L', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#5eead4' } },
            { id: 'fresh-stat1-lbl', type: 'text', props: { content: 'Produksi Susu Harian', fontSize: '12px', color: '#99f6e4' } },
          ]
        },
        {
          id: 'fresh-stat2-card',
          type: 'card',
          props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'fresh-stat2-num', type: 'heading', props: { content: '1.850+', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#a7f3d0' } },
            { id: 'fresh-stat2-lbl', type: 'text', props: { content: 'Peternak Anggota Aktif', fontSize: '12px', color: '#99f6e4' } },
          ]
        },
        {
          id: 'fresh-stat3-card',
          type: 'card',
          props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'fresh-stat3-num', type: 'heading', props: { content: '4°C Suhu', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#a7f3d0' } },
            { id: 'fresh-stat3-lbl', type: 'text', props: { content: 'Rantai Dingin Terjaga', fontSize: '12px', color: '#99f6e4' } },
          ]
        },
        {
          id: 'fresh-stat4-card',
          type: 'card',
          props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'fresh-stat4-num', type: 'heading', props: { content: '100% Alami', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#5eead4' } },
            { id: 'fresh-stat4-lbl', type: 'text', props: { content: 'Bebas Pengawet & Aditif', fontSize: '12px', color: '#99f6e4' } },
          ]
        },

        // Farmstead Showroom Card
        {
          id: 'fresh-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0b453f 0%, #032421 100%)', borderColor: 'rgba(20,184,166,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'fresh-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1527153857715-33282435658a?w=1000&auto=format&fit=crop&q=80',
                alt: 'Peternakan Sapi Perah Dataran Tinggi Koperasi Susu',
                borderRadius: '16px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'fresh-card-badge', type: 'badge', props: { text: '🐄 PEMERAHAN HIGIENIS PAGI & SORE HARI', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#99f6e4' } },
            { id: 'fresh-card-title', type: 'heading', props: { content: 'Standarisasi Pakan Alami & Kesehatan Hewan Terjamin', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f0fdfa' } },
            { id: 'fresh-card-desc', type: 'text', props: { content: 'Tim dokter hewan koperasi melakukan pengecekan kesehatan berkala pada setiap sapi perah untuk menjamin kualitas gizi susu terbaik bagi keluarga Anda.', fontSize: '13px', color: '#99f6e4' } },
          ]
        }
      ]
    },
    {
      id: 'fresh-products-sec',
      type: 'products',
      layout: 'dairy-products-fresh',
      components: [
        { id: 'prod-badge', type: 'badge', props: { text: '🥛 OLAHAN SUSU SEGAR BERKUALITAS', variant: 'outline', background: 'rgba(13,148,136,0.1)', color: '#0d9488', borderColor: 'rgba(13,148,136,0.3)' } },
        { id: 'prod-title', type: 'heading', props: { content: 'Produk Susu & Olahan Segar Bernutrisi Tinggi Dari Peternak Lokal', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
        { id: 'prod-desc', type: 'text', props: { content: 'Diproses dari 100% susu sapi murni tanpa perasa sintetis dan bahan pengawet. Tersedia untuk konsumsi rumah tangga dan pasokan bisnis kuliner.', fontSize: '16px', color: '#64748b' } },

        // Card 1: Susu Botol
        {
          id: 'card-prod1',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ccfbf1', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prod1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80',
                alt: 'Susu Sapi Segar Botol Kaca Pasteurisasi Dingin',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'prod1-badge', type: 'badge', props: { text: '🥛 BEST SELLER • BOTOL 1 LITER', variant: 'solid', background: '#f0fdfa', color: '#0f766e' } },
            { id: 'prod1-title', type: 'heading', props: { content: 'Susu Pasteurisasi Segar Murni', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'prod1-desc', type: 'text', props: { content: 'Dipasteurisasi suhu rendah 72°C selama 15 detik untuk mempertahankan kebaikan kalsium, protein alami, dan rasa gurih asli susu.', fontSize: '14px', color: '#64748b' } },
            { id: 'prod1-btn', type: 'button', props: { label: 'Pesan Susu Botol 🥛', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0d9488', color: '#ffffff', fontWeight: '700' } },
          ]
        },

        // Card 2: Yogurt
        {
          id: 'card-prod2',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ccfbf1', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prod2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80',
                alt: 'Greek Yogurt Probiotik Alami Buah Asli',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'prod2-badge', type: 'badge', props: { text: '🍓 KAYA PROBIOTIK • BEBAS GULA', variant: 'solid', background: '#f0fdfa', color: '#0f766e' } },
            { id: 'prod2-title', type: 'heading', props: { content: 'Yogurt Plain & Buah Asli', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'prod2-desc', type: 'text', props: { content: 'Fermentasi kultur bakteri baik Lactobacillus bulgaricus dan Streptococcus thermophilus untuk menjaga kesehatan saluran cerna.', fontSize: '14px', color: '#64748b' } },
            { id: 'prod2-btn', type: 'button', props: { label: 'Beli Yogurt Sehat 🍓', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0d9488', color: '#ffffff', fontWeight: '700' } },
          ]
        },

        // Card 3: Keju
        {
          id: 'card-prod3',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#ccfbf1', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prod3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=800&auto=format&fit=crop&q=80',
                alt: 'Keju Mozzarella Segar Artisan Peternak',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'prod3-badge', type: 'badge', props: { text: '🧀 ARTISAN CHEESE • MULUR LEMBUT', variant: 'solid', background: '#f0fdfa', color: '#0f766e' } },
            { id: 'prod3-title', type: 'heading', props: { content: 'Keju Mozzarella & Ricotta Peternak', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'prod3-desc', type: 'text', props: { content: 'Dibuat secara tradisional dari susu segar hari yang sama. Menghasilkan tekstur mulur sempurna dan rasa milky khas untuk pizza dan pasta.', fontSize: '14px', color: '#64748b' } },
            { id: 'prod3-btn', type: 'button', props: { label: 'Order Keju Mozzarella 🧀', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0d9488', color: '#ffffff', fontWeight: '700' } },
          ]
        }
      ]
    },
    {
      id: 'fresh-process-sec',
      type: 'services',
      layout: 'dairy-process-fresh',
      components: [
        { id: 'proc-badge', type: 'badge', props: { text: '🧪 PROSES PASTEURISASI & STANDAR MUTU', variant: 'outline', background: 'rgba(13,148,136,0.15)', color: '#5eead4', borderColor: 'rgba(20,184,166,0.4)' } },
        { id: 'proc-title', type: 'heading', props: { content: 'Rantai Pasok Higienis Dari Kandang Hingga Botol Siap Konsumsi', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#f0fdfa', letterSpacing: '-0.02em' } },
        { id: 'proc-desc', type: 'text', props: { content: 'Setiap tetes susu melewati pengujian ketat di laboratorium koperasi untuk memastikan bebas antibiotik, bebas bakteri patogen, dan memiliki kadar lemak optimal.', fontSize: '16px', color: '#99f6e4' } },

        // 4 Quality Cards
        {
          id: 'card-proc1',
          type: 'card',
          props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'proc1-badge', type: 'badge', props: { text: '🔬 UJI ALKOHOL & BJ', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4' } },
            { id: 'proc1-title', type: 'heading', props: { content: 'Uji Kualitas Langsung Saat Diterima', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdfa' } },
            { id: 'proc1-desc', type: 'text', props: { content: 'Pemeriksaan berat jenis (min. 1.028), uji reduktase, dan keasaman untuk menolak susu yang tidak memenuhi standar mutu tinggi.', fontSize: '14px', color: '#99f6e4' } },
          ]
        },
        {
          id: 'card-proc2',
          type: 'card',
          props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'proc2-badge', type: 'badge', props: { text: '❄️ COOLING 4°C', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4' } },
            { id: 'proc2-title', type: 'heading', props: { content: 'Pendinginan Cepat Dalam 1 Jam', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdfa' } },
            { id: 'proc2-desc', type: 'text', props: { content: 'Susu langsung dimasukkan ke tanki pendingin stainless steel SUS 304 food-grade untuk menghentikan pertumbuhan bakteri alami.', fontSize: '14px', color: '#99f6e4' } },
          ]
        },
        {
          id: 'card-proc3',
          type: 'card',
          props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'proc3-badge', type: 'badge', props: { text: '🌡️ HTST PASTEURISASI', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4' } },
            { id: 'proc3-title', type: 'heading', props: { content: 'Pasteurisasi Presisi Menjaga Gizi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdfa' } },
            { id: 'proc3-desc', type: 'text', props: { content: 'Pemanasan 72°C selama 15 detik membunuh mikroba jahat tanpa merusak enzim baik dan struktur rasa susu segar.', fontSize: '14px', color: '#99f6e4' } },
          ]
        },
        {
          id: 'card-proc4',
          type: 'card',
          props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'proc4-badge', type: 'badge', props: { text: '🚛 THERMAL LOGISTICS', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4' } },
            { id: 'proc4-title', type: 'heading', props: { content: 'Distribusi Termo-Isolasi Harian', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdfa' } },
            { id: 'proc4-desc', type: 'text', props: { content: 'Pengiriman ke pelanggan rumah tangga, kedai kopi, dan supermarket menggunakan armada box berpendingin.', fontSize: '14px', color: '#99f6e4' } },
          ]
        },

        // SNI Banner
        {
          id: 'sni-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0f766e 0%, #042f2c 100%)', borderColor: 'rgba(20,184,166,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
          childrenComponents: [
            { id: 'sni-banner-badge', type: 'badge', props: { text: '🏆 SERTIFIKASI RESMI SNI, BPOM & HALAL MUI', variant: 'solid', background: 'rgba(13,148,136,0.3)', color: '#ccfbf1' } },
            { id: 'sni-banner-title', type: 'heading', props: { content: 'Jaminan Kesejahteraan Peternak & Transparansi Harga Bagi Hasil', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
            { id: 'sni-banner-desc', type: 'text', props: { content: 'Koperasi membeli susu peternak dengan harga terbaik di atas rata-rata pasar dan membagikan SHU secara transparan di setiap Rapat Anggota Tahunan.', fontSize: '14px', color: '#99f6e4' } },
            { id: 'sni-banner-btn', type: 'button', props: { label: 'Pelajari Sistem Kemitraan Koperasi 🤝', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#14b8a6', color: '#ffffff', fontWeight: '700' } },
          ]
        }
      ]
    },
    {
      id: 'fresh-cta-sec',
      type: 'contact',
      layout: 'dairy-cta-fresh',
      components: [
        {
          id: 'cta-fresh-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0f766e 0%, #042f2c 100%)', borderColor: 'rgba(20,184,166,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'cta-fr-badge', type: 'badge', props: { text: '🥛 BERLANGGANAN SUSU SEGAR & KEMITRAAN KOPERASI', variant: 'solid', background: 'rgba(13,148,136,0.3)', color: '#ccfbf1' } },
            { id: 'cta-fr-title', type: 'heading', props: { content: 'Nikmati Kebaikan Susu Segar Murni Setiap Pagi Langsung di Depan Rumah Anda', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
            { id: 'cta-fr-desc', type: 'text', props: { content: 'Daftar paket langganan mingguan/bulanan atau ajukan pendaftaran peternak baru untuk mendapatkan pasokan pakan konsentrat bersubsidi dan bantuan permodalan sapi perah.', fontSize: '16px', color: '#ccfbf1' } },
            { id: 'cta-fr-btn1', type: 'button', props: { label: 'Mulai Langganan Harian 🥛', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: '#14b8a6', color: '#ffffff', fontWeight: '800' } },
            { id: 'cta-fr-btn2', type: 'button', props: { label: 'Daftar Jadi Peternak Anggota', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(4,47,44,0.8)', color: '#5eead4', borderColor: 'rgba(20,184,166,0.4)' } },
          ]
        }
      ]
    },
    {
      id: 'fresh-footer-sec',
      type: 'footer',
      layout: 'dairy-footer-fresh',
      components: [
        { id: 'fr-ft-title', type: 'heading', props: { content: 'KOPERASI PETERNAK SUSU MURNI NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
        { id: 'fr-ft-desc', type: 'text', props: { content: 'Badan Hukum Koperasi Produsen Susu No. AHU-0014820.AH.01.26. Menghubungkan peternak lokal dengan rantai pasok industri dan konsumen keluarga Indonesia.', fontSize: '13px', color: '#99f6e4' } },
        { id: 'fr-ft-copy', type: 'text', props: { content: '© 2026 Koperasi Peternak Susu Murni Nusantara. Bersama Peternak Membangun Gizi Bangsa.', fontSize: '12px', color: '#5eead4' } },
      ]
    }
  ],
};
