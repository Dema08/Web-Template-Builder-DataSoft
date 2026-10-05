/**
 * Dairy Farmer Network Hub — B2B Industrial Dairy Supply Chain & Feed Mill Hub
 * Starter template for industrial dairy supply networks and agricultural cooperatives.
 * Full Right-Inspector support for all cards, images, badges, headings, and buttons.
 */
export default {
  id: 'dairy-farmer-network',
  name: 'Dairy Farmer Network Hub',
  description: 'Template B2B rantai pasok industri susu & pabrik pakan terpadu dengan status armada truk tangki, 4 metrik pasokan industri (85 Ton/Hari), program pakan konsentrat mandiri, standar mutu IPS, dan formulir RFQ B2B.',
  thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
  tags: ['Industrial', 'Dairy', 'Supply Chain', 'Feed Mill', 'B2B', 'FMCG', 'Premium'],
  theme: {
    primaryColor: '#10b981',
    secondaryColor: '#ecfdf5',
    accentColor: '#059669',
    dark: true,
    surface: '#05100e',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: 'rgba(16,185,129,0.3)',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['slide-right', 'fade-up', 'counter-up', 'scale-in'],
  sections: [
    {
      id: 'ind-nav-sec',
      type: 'navbar',
      layout: 'dairy-nav-industrial',
      components: [
        { id: 'ind-brand', type: 'heading', props: { content: 'AGRO DAIRY SUPPLY HUB', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.04em' } },
        { id: 'ind-status-badge', type: 'badge', props: { text: '🚛 45 TRUK TANGKI ISOTHERMAL DISPATCH • 85 TON / HARI KAPASITAS PASOK', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },
        { id: 'ind-rfq-btn', type: 'button', props: { label: 'Permintaan Pasokan B2B 📑', href: '#contact', variant: 'outline', size: 'small', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: 'rgba(100,116,139,0.4)', fontSize: '12px' } },
        { id: 'ind-portal-btn', type: 'button', props: { label: 'Portal Industri F&B', href: '#programs', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
      ]
    },
    {
      id: 'ind-hero-sec',
      type: 'hero',
      layout: 'dairy-hero-industrial',
      components: [
        { id: 'ind-badge', type: 'badge', props: { text: '🏭 MITRA UTAMA 12 PABRIK PENGOLAHAN SUSU (IPS) NASIONAL', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },
        { id: 'ind-title', type: 'heading', props: { content: 'Pasokan Bahan Baku Susu Segar Skala Industri & Pabrik Pakan Ternak Terpadu', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
        { id: 'ind-desc', type: 'text', props: { content: 'Menyuplai 85 ton susu segar per hari ke industri FMCG, pabrik susu bubuk, dan manufaktur keju nasional. Didukung 45 armada truk tangki berinsulasi termal dan pabrik pakan mandiri.', fontSize: '17px', color: '#94a3b8' } },
        { id: 'ind-btn1', type: 'button', props: { label: 'Ajukan Kontrak Pasokan B2B 📑', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
        { id: 'ind-btn2', type: 'button', props: { label: 'Katalog Pakan Konsentrat', href: '#programs', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.7)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },

        // 4 Supply Chain Metrics Cards
        {
          id: 'ind-stat1-card',
          type: 'card',
          props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'ind-stat1-num', type: 'heading', props: { content: '85 Ton / Hari', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'ind-stat1-lbl', type: 'text', props: { content: 'Kapasitas Pasokan Pabrik', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'ind-stat2-card',
          type: 'card',
          props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'ind-stat2-num', type: 'heading', props: { content: '45 Unit', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#34d399' } },
            { id: 'ind-stat2-lbl', type: 'text', props: { content: 'Armada Truk Tangki Dingin', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'ind-stat3-card',
          type: 'card',
          props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'ind-stat3-num', type: 'heading', props: { content: 'Min. 3.8%', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#34d399' } },
            { id: 'ind-stat3-lbl', type: 'text', props: { content: 'Kadar Lemak (Fat Content)', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'ind-stat4-card',
          type: 'card',
          props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'ind-stat4-num', type: 'heading', props: { content: 'ISO 22000', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'ind-stat4-lbl', type: 'text', props: { content: 'Sistem Keamanan Pangan', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Factory Showroom Card
        {
          id: 'ind-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0e2e28 0%, #061714 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'ind-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80',
                alt: 'Industrial Dairy Processing Plant and Stainless Storage Silos',
                borderRadius: '14px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'ind-card-badge', type: 'badge', props: { text: '🏭 SILO BUFFER KAPASITAS 250.000 LITER', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
            { id: 'ind-card-title', type: 'heading', props: { content: 'Sistem Rantai Dingin Terpusat & Jalur Truk Khusus', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'ind-card-desc', type: 'text', props: { content: 'Setiap pengiriman dilengkapi sertifikat analisa laboratorium (CoA) real-time dengan data keasaman, berat jenis, dan bebas antibiotik.', fontSize: '13px', color: '#94a3b8' } },
          ]
        }
      ]
    },
    {
      id: 'ind-programs-sec',
      type: 'services',
      layout: 'dairy-programs-industrial',
      components: [
        { id: 'prog-badge', type: 'badge', props: { text: '🏭 HULU KE HILIR • EKOSISTEM PETERNAKAN B2B', variant: 'outline', background: 'rgba(16,185,129,0.1)', color: '#059669', borderColor: 'rgba(16,185,129,0.3)' } },
        { id: 'prog-title', type: 'heading', props: { content: 'Infrastruktur Hulu Peternakan & Pengolahan Pakan Mandiri', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
        { id: 'prog-desc', type: 'text', props: { content: 'Membangun ketahanan pasokan susu melalui produksi pakan konsentrat protein tinggi, bibit sapi unggul, dan otomatisasi pendingin desa.', fontSize: '16px', color: '#64748b' } },

        // Card 1: Feed Mill
        {
          id: 'card-prog1',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prog1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80',
                alt: 'Pabrik Pengolahan Pakan Ternak Konsentrat Sapi Perah',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'prog1-badge', type: 'badge', props: { text: '🌾 PABRIK PAKAN • 120 TON/HARI', variant: 'solid', background: '#ecfdf5', color: '#047857' } },
            { id: 'prog1-title', type: 'heading', props: { content: 'Pabrik Pakan Konsentrat Protein 18%', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'prog1-desc', type: 'text', props: { content: 'Formulasi nutrisi seimbang dari jagung, bungkil kedelai, dan mineral mikro untuk mendongkrak produksi susu harian dan kadar solid non-fat (SNF).', fontSize: '14px', color: '#64748b' } },
            { id: 'prog1-btn', type: 'button', props: { label: 'Order Pakan Ternak 🌾', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#059669', color: '#ffffff', fontWeight: '600' } },
          ]
        },

        // Card 2: Breeding
        {
          id: 'card-prog2',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prog2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80',
                alt: 'Sapi Perah Frisian Holstein Unggul Genetik',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'prog2-badge', type: 'badge', props: { text: '🧬 GENETIK UNGGUL • INSEMINASI', variant: 'solid', background: '#ecfdf5', color: '#047857' } },
            { id: 'prog2-title', type: 'heading', props: { content: 'Pemuliaan Genetik Sapi FH Pedigree', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'prog2-desc', type: 'text', props: { content: 'Semen beku bersertifikasi dari pejantan unggul dunia untuk menghasilkan anakan sapi perah dengan kapasitas laktasi di atas 25 liter per hari.', fontSize: '14px', color: '#64748b' } },
            { id: 'prog2-btn', type: 'button', props: { label: 'Konsultasi Genetik Ternak 🧬', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#059669', color: '#ffffff', fontWeight: '600' } },
          ]
        },

        // Card 3: Logistics
        {
          id: 'card-prog3',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'prog3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80',
                alt: 'Armada Truk Tangki Susu Stainless Isothermal',
                borderRadius: '12px',
                width: '100%',
                height: '210px',
                objectFit: 'cover',
              }
            },
            { id: 'prog3-badge', type: 'badge', props: { text: '🚛 LOGISTIK • TANGKI 10-25 KL', variant: 'solid', background: '#ecfdf5', color: '#047857' } },
            { id: 'prog3-title', type: 'heading', props: { content: 'Armada Tangki Susu Isothermal B2B', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'prog3-desc', type: 'text', props: { content: 'Layanan sewa dan kontrak angkutan susu segar curah untuk rute antar-kota/antar-provinsi dengan isolasi ganda (kenaikan suhu < 0.5°C/24 jam).', fontSize: '14px', color: '#64748b' } },
            { id: 'prog3-btn', type: 'button', props: { label: 'Sewa Armada Tangki 🚛', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#059669', color: '#ffffff', fontWeight: '600' } },
          ]
        }
      ]
    },
    {
      id: 'ind-supply-sec',
      type: 'coverage',
      layout: 'dairy-supply-industrial',
      components: [
        { id: 'sup-badge', type: 'badge', props: { text: '📊 STANDAR MUTU BAHAN BAKU INDUSTRI', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },
        { id: 'sup-title', type: 'heading', props: { content: 'Kepatuhan Spesifikasi Teknis Pabrik Pengolahan Susu (IPS)', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'sup-desc', type: 'text', props: { content: 'Kami menjamin setiap liter susu yang dikirim memenuhi kriteria mikrobiologi dan kimiawi sesuai persyaratan industri multinasional.', fontSize: '16px', color: '#94a3b8' } },

        // 4 Quality Cards
        {
          id: 'card-sup1',
          type: 'card',
          props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'sup1-badge', type: 'badge', props: { text: '🔬 TPC < 1 JUTA', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
            { id: 'sup1-title', type: 'heading', props: { content: 'Total Plate Count Rendah Grade A', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sup1-desc', type: 'text', props: { content: 'Sanitasi kandang dan sistem perahan otomatis menghasilkan angka kuman sangat rendah, ideal untuk proses UHT dan keju keras.', fontSize: '14px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-sup2',
          type: 'card',
          props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'sup2-badge', type: 'badge', props: { text: '🛡️ 100% BEBAS ANTIBIOTIK', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
            { id: 'sup2-title', type: 'heading', props: { content: 'Uji Residu Antibiotik Negatif', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sup2-desc', type: 'text', props: { content: 'Protokol karantina sapi yang sedang dalam masa pengobatan medis menjamin tidak ada residu beta-laktam yang masuk ke tanki pasok.', fontSize: '14px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-sup3',
          type: 'card',
          props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'sup3-badge', type: 'badge', props: { text: '🥛 SNF > 8.25%', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
            { id: 'sup3-title', type: 'heading', props: { content: 'Kadar Bahan Kering Tanpa Lemak Tinggi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sup3-desc', type: 'text', props: { content: 'Nutrisi pakan silase jagung dan konsentrat seimbang menghasilkan rendemen olahan tinggi untuk pabrik susu kental manis dan mentega.', fontSize: '14px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-sup4',
          type: 'card',
          props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'sup4-badge', type: 'badge', props: { text: '📋 KONTRAK TAHUNAN', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
            { id: 'sup4-title', type: 'heading', props: { content: 'Jaminan Kepastian Pasokan 365 Hari', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'sup4-desc', type: 'text', props: { content: 'Perjanjian kerja sama terikat volume dengan sistem kompensasi penalti jika terjadi keterlambatan atau kegagalan spesifikasi mutu.', fontSize: '14px', color: '#94a3b8' } },
          ]
        },

        // Supply Assurance Banner
        {
          id: 'supply-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #064e3b 0%, #031c17 100%)', borderColor: 'rgba(16,185,129,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
          childrenComponents: [
            { id: 'supply-banner-badge', type: 'badge', props: { text: '📜 SERTIFIKASI SISTEM MANAJEMEN KEAMANAN PANGAN', variant: 'solid', background: 'rgba(16,185,129,0.3)', color: '#a7f3d0' } },
            { id: 'supply-banner-title', type: 'heading', props: { content: 'Audit Berkala & Keterlacakan Sumber Susu (Farm Traceability)', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
            { id: 'supply-banner-desc', type: 'text', props: { content: 'Sistem barcode RFID pada ternak memungkinkan pelacakan asal susu hingga ke kelompok peternak di tingkat desa.', fontSize: '14px', color: '#cbd5e1' } },
            { id: 'supply-banner-btn', type: 'button', props: { label: 'Jadwalkan Audit Pabrik Koperasi 🏭', href: '#contact', variant: 'primary', size: 'medium', radius: 'md', background: '#10b981', color: '#ffffff', fontWeight: '700' } },
          ]
        }
      ]
    },
    {
      id: 'ind-cta-sec',
      type: 'contact',
      layout: 'dairy-cta-industrial',
      components: [
        {
          id: 'cta-ind-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #064e3b 0%, #061714 100%)', borderColor: 'rgba(16,185,129,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'cta-ind-badge', type: 'badge', props: { text: '🏭 KEMITRAAN PASOKAN SUSU INDUSTRI (B2B)', variant: 'solid', background: 'rgba(16,185,129,0.3)', color: '#6ee7b7' } },
            { id: 'cta-ind-title', type: 'heading', props: { content: 'Amankan Pasokan Bahan Baku Susu Segar Berkualitas Pabrik Anda Sekarang', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
            { id: 'cta-ind-desc', type: 'text', props: { content: 'Hubungi divisi B2B Key Account kami untuk negosiasi kontrak volume, penyesuaian jadwal armada tangki, serta pengujian sampel laboratorium gratis.', fontSize: '16px', color: '#cbd5e1' } },
            { id: 'cta-ind-btn1', type: 'button', props: { label: 'Ajukan Penawaran Pasokan (RFQ) 📑', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: '#10b981', color: '#ffffff', fontWeight: '800' } },
            { id: 'cta-ind-btn2', type: 'button', props: { label: 'Unduh Company Profile & CoA', href: '#contact', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },
          ]
        }
      ]
    },
    {
      id: 'ind-footer-sec',
      type: 'footer',
      layout: 'dairy-footer-industrial',
      components: [
        { id: 'ind-ft-title', type: 'heading', props: { content: 'PT AGRO DAIRY NUSANTARA (KOPERASI INDUK)', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
        { id: 'ind-ft-desc', type: 'text', props: { content: 'Penyedia Bahan Baku Susu Segar Curah & Pabrik Pakan Ternak Berstandar Internasional. Izin Usaha Industri Pengolahan Susu No. IU-IND/DAIRY/2026.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'ind-ft-copy', type: 'text', props: { content: '© 2026 PT Agro Dairy Nusantara. Integrating Farmers with National Industry.', fontSize: '12px', color: '#64748b' } },
      ]
    }
  ],
};
