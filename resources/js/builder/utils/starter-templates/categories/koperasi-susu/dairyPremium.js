/**
 * Dairy Premium Brand — Elegant emerald & gold, luxury organic dairy
 * Starter template for ultra-premium organic dairy brands with certifications.
 * Distinct design system: deep teal + amber accents, refined typography, and premium storytelling flow.
 */
export default {
  id: 'dairy-premium',
  name: 'Dairy Premium Brand',
  description: 'Template premium untuk brand susu organik mewah — split hero dengan trust indicator, profil peternakan eksklusif, lini produk premium, statistik kapasitas, sertifikasi resmi, dan FAQ langganan.',
  thumbnail: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Organic', 'Luxury', 'Halal', 'BPOM'],
  theme: { primaryColor: '#0f766e', accent: '#d97706', dark: false },
  animations: ['fade-up', 'scale-in', 'hover-lift', 'counter-up'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'SUSU PREMIUM ALAMI', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0f766e', letterSpacing: '0.08em', margin: '0' } },
      { id: 'cta', type: 'button', props: { label: 'Order Langganan', href: '#contact', variant: 'premium', size: 'medium', radius: 'full', background: '#0f766e', color: '#ffffff', shadow: 'md', fontSize: '14px', fontWeight: '700' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '🥛 Organik • Halal MUI • BPOM Certified', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Susu Organik Premium Tanpa Bahan Pengawet', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '8px 0 20px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Dari 120 hektar padang rumput organik di kaki Gunung Kawi, langsung ke pintu rumah Anda dalam 24 jam. Fresh, bergizi, dan bebas hormon sintetis.', fontSize: '18px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 28px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Mulai Berlangganan', href: '#contact', variant: 'premium', size: 'large', radius: 'full', background: '#0f766e', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'btn2', type: 'button', props: { label: 'Lihat Produk', href: '#services', variant: 'outline', size: 'large', radius: 'full', background: '#0f766e', color: '#0f766e', shadow: 'md', fontSize: '16px', fontWeight: '700' } },
      { id: 'trust', type: 'text', props: { content: '⭐ 4.9/5 — Dipercaya 12.000+ keluarga Indonesia', fontSize: '15px', fontWeight: '600', color: '#0f766e', align: 'left', letterSpacing: '0.02em', margin: '12px 0 0 0' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=800&auto=format&fit=crop', alt: 'Premium Organic Dairy Products', width: '100%', height: '460px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🌿 Peternakan Kami', variant: 'success', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Dari Padang Rumput Organik, Untuk Kesehatan Keluarga Anda', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'desc', type: 'text', props: { content: 'Berawal dari 120 hektar padang rumput organik yang dirawat dengan cinta, kami memelihara 2.500+ sapi Frisian Holstein dan Jersey berstandar kesejahteraan hewan tertinggi. Setiap botol susu adalah hasil proses teliti — dari pakan organik, pemerahan higienis, hingga rantai dingin modern.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
      { id: 'f1', type: 'text', props: { content: '✓ Pakan organik 100% tanpa GMO dan bebas hormon', fontSize: '15px', fontWeight: '600', color: '#0f766e', align: 'left', margin: '0 0 12px 0' } },
      { id: 'f2', type: 'text', props: { content: '✓ Sapi Frisian Holstein & Jersey pilihan terbaik', fontSize: '15px', fontWeight: '600', color: '#0f766e', align: 'left', margin: '0 0 12px 0' } },
      { id: 'f3', type: 'text', props: { content: '✓ Diperah pagi hari, dikirim segar dalam 24 jam', fontSize: '15px', fontWeight: '600', color: '#0f766e', align: 'left', margin: '0 0 28px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Lihat Sertifikasi Resmi', href: '#certifications', variant: 'premium', size: 'medium', radius: 'full', background: '#0f766e', color: '#ffffff', shadow: 'md', fontSize: '14px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1527153857715-33282435658a?w=800&auto=format&fit=crop', alt: 'Organic Premium Dairy Farm', width: '100%', height: '460px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'services', type: 'services', layout: 'services-02', components: [
      { id: 'badge', type: 'badge', props: { content: '🥛 Lini Produk Premium', variant: 'success', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Koleksi Susu Premium Pilihan', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Setiap produk dibuat dari susu organik murni dengan proses yang menjaga keaslian nutrisi', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
      { id: 'card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px' },
        childrenComponents: [
          { id: 'c1-icon', type: 'icon', props: { icon: 'FaTint', size: '40px', color: '#0f766e', align: 'left', margin: '0 0 16px 0' } },
          { id: 'c1-title', type: 'heading', props: { content: 'Susu Fresh Harian', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'c1-desc', type: 'text', props: { content: 'Susu murni 100% dari perahan pagi. Pasteurisasi lembut menjaga nutrisi alami — tanpa pengawet, tanpa gula tambahan.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px' },
        childrenComponents: [
          { id: 'c2-icon', type: 'icon', props: { icon: 'FaGlassWhiskey', size: '40px', color: '#d97706', align: 'left', margin: '0 0 16px 0' } },
          { id: 'c2-title', type: 'heading', props: { content: 'Yogurt Greek Premium', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'c2-desc', type: 'text', props: { content: 'Fermentasi 8 jam dengan kultur probiotik premium. Tekstur kental, creamy alami, kaya protein dan bakteri baik.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px' },
        childrenComponents: [
          { id: 'c3-icon', type: 'icon', props: { icon: 'FaLeaf', size: '40px', color: '#10b981', align: 'left', margin: '0 0 16px 0' } },
          { id: 'c3-title', type: 'heading', props: { content: 'Keju Artisan Organik', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'c3-desc', type: 'text', props: { content: 'Dibuat dengan metode tradisional dan dimatangkan 6 bulan. Cita rasa kompleks dari susu organik murni pilihan.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Kapasitas & Jangkauan', variant: 'success', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kualitas Terukur, Dipercaya Ribuan Keluarga', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang mencerminkan komitmen kami terhadap mutu dan keterjangkauan', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
      { id: 'card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's1-value', type: 'heading', props: { content: '2.500+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0f766e', align: 'center', margin: '0 0 8px 0' } },
          { id: 's1-label', type: 'text', props: { content: 'Sapi Perah Organik', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
        ]},
      { id: 'card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's2-value', type: 'heading', props: { content: '12.000+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#d97706', align: 'center', margin: '0 0 8px 0' } },
          { id: 's2-label', type: 'text', props: { content: 'Keluarga Pelanggan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
        ]},
      { id: 'card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's3-value', type: 'heading', props: { content: '34', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#10b981', align: 'center', margin: '0 0 8px 0' } },
          { id: 's3-label', type: 'text', props: { content: 'Kota Terjangkau', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
        ]},
      { id: 'card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 's4-value', type: 'heading', props: { content: '100%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0f766e', align: 'center', margin: '0 0 8px 0' } },
          { id: 's4-label', type: 'text', props: { content: 'Bebas Bahan Pengawet', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
        ]},
    ]},
    { id: 'certifications', type: 'certifications', layout: 'certifications-01', components: [
      { id: 'badge', type: 'badge', props: { content: '🏅 Sertifikasi Resmi', variant: 'success', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Mutu Terjamin, Diakui Secara Resmi', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Seluruh rangkaian produksi kami diawasi dan disertifikasi oleh lembaga berwenang', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
      { id: 'card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 'cert1-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '44px', color: '#0f766e', align: 'center', margin: '0 0 16px 0' } },
          { id: 'cert1-title', type: 'heading', props: { content: 'Halal MUI', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
          { id: 'cert1-desc', type: 'text', props: { content: 'Sertifikasi halal resmi dari Majelis Ulama Indonesia untuk seluruh lini produk dan rantai produksi.', fontSize: '14px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 'cert2-icon', type: 'icon', props: { icon: 'FaMedal', size: '44px', color: '#d97706', align: 'center', margin: '0 0 16px 0' } },
          { id: 'cert2-title', type: 'heading', props: { content: 'BPOM RI', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
          { id: 'cert2-desc', type: 'text', props: { content: 'Terdaftar dan diawasi Badan Pengawas Obat dan Makanan RI — menjamin keamanan dan mutu produk.', fontSize: '14px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'lift', padding: '32px 24px' },
        childrenComponents: [
          { id: 'cert3-icon', type: 'icon', props: { icon: 'FaAward', size: '44px', color: '#10b981', align: 'center', margin: '0 0 16px 0' } },
          { id: 'cert3-title', type: 'heading', props: { content: 'ISO 22000', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
          { id: 'cert3-desc', type: 'text', props: { content: 'Sistem Manajemen Keamanan Pangan berstandar internasional — dari peternakan hingga ke meja Anda.', fontSize: '14px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0' } },
        ]},
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Pertanyaan Umum', variant: 'success', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Seputar Langganan Susu Premium', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jawaban atas pertanyaan paling sering ditanyakan pelanggan kami', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
      { id: 'item-1', type: 'card', props: { variant: 'faq', background: '#f0fdfa', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'none', padding: '24px' },
        childrenComponents: [
          { id: 'f1-q', type: 'heading', props: { content: 'Bagaimana cara berlangganan susu premium?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'f1-a', type: 'text', props: { content: 'Cukup pilih paket langganan, tentukan jadwal pengiriman, dan susu segar akan tiba di pintu rumah Anda setiap pagi sebelum jam 06.00.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'item-2', type: 'card', props: { variant: 'faq', background: '#f0fdfa', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'none', padding: '24px' },
        childrenComponents: [
          { id: 'f2-q', type: 'heading', props: { content: 'Bagaimana susu dikirim agar tetap segar?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'f2-a', type: 'text', props: { content: 'Semua pengiriman menggunakan kendaraan berpendingin (cold chain) dengan suhu 4°C. Botol susu dikemas kedap udara untuk menjaga kesegaran optimal.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'item-3', type: 'card', props: { variant: 'faq', background: '#f0fdfa', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'none', padding: '24px' },
        childrenComponents: [
          { id: 'f3-q', type: 'heading', props: { content: 'Apakah ada paket langganan fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'f3-a', type: 'text', props: { content: 'Ya, kami menyediakan paket mingguan, 2 minggu, dan bulanan. Anda dapat pause atau berhenti berlangganan kapan saja tanpa penalti.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
      { id: 'item-4', type: 'card', props: { variant: 'faq', background: '#f0fdfa', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ccfbf1', hoverEffect: 'none', padding: '24px' },
        childrenComponents: [
          { id: 'f4-q', type: 'heading', props: { content: 'Apa perbedaan dengan susu biasa?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
          { id: 'f4-a', type: 'text', props: { content: 'Kami menggunakan susu organik bersertifikat dari sapi pakan alami tanpa GMO, bebas hormon, dan dipasteurisasi lembut agar nutrisi tetap terjaga.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
        ]},
    ]},
    { id: 'contact', type: 'contact', layout: 'contact-03', components: [
      { id: 'badge', type: 'badge', props: { content: '🌅 Mulai Langganan Hari Ini', variant: 'success', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Rasakan Susu Premium Setiap Pagi', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Gabung bersama 12.000+ keluarga yang telah menikmati kemurnian susu organik dari peternakan kami', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.8', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Hubungi Tim Kami', href: '#', variant: 'primary', size: 'large', radius: 'full', background: '#0f766e', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-04', components: [
      { id: 'logo', type: 'heading', props: { content: 'SUSU PREMIUM ALAMI', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.08em', margin: '0 0 12px 0' } },
      { id: 'c', type: 'text', props: { content: '© 2026 Susu Premium Alami Indonesia. Pure. Natural. Nourishing.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
      { id: 'social', type: 'social', props: { platforms: ['instagram', 'facebook', 'twitter'], size: 'medium' } },
    ]},
  ],
};
