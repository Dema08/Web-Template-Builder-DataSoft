/**
 * Sekar Arum Botanicals — Indonesian Herbal Skincare & Wellness
 * Exclusive Premium Starter Template untuk UMKM Skincare Organik, Herbal & Aromaterapi Alam.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'umkm-organic-wellness',
  name: 'Sekar Arum Botanicals',
  description: 'Template premium eksklusif bernuansa botanical sage & forest emerald untuk UMKM skincare organik, produk herbal jamu modern, aromaterapi alami, dan spa wellness. Dilengkapi baris sertifikasi BPOM & Halal, split hero dengan garansi clean ingredients, 4 produk rekomendasi alami berharga & berating, komitmen kebersihan formula tanpa kimiawi, ulasan hasil nyata pelanggan, formulir konsultasi kulit gratis via WhatsApp, serta footer ramah lingkungan.',
  thumbnail: 'https://images.unsplash.com/photo-1608248597359-25f0a6d1b71d?w=800&auto=format&fit=crop&q=80',
  tags: ['UMKM', 'Skincare', 'Organik', 'Herbal', 'Beauty', 'Wellness', 'Botanical', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#10b981',
    secondaryColor: '#059669',
    accentColor: '#34d399',
    dark: true,
    surface: '#05160f',
    text: '#ecfdf5',
    muted: '#a7f3d0',
    border: '#064e3b',
    radius: '2xl',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-wellness-nav',
      type: 'navbar',
      layout: 'umkm-nav-wellness',
      components: [
        {
          id: 'wel-logo',
          type: 'heading',
          props: { content: 'SEKAR ARUM', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#ecfdf5', letterSpacing: '0.08em' },
        },
        {
          id: 'nav-wl1',
          type: 'button',
          props: { label: 'Produk Herbal', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' },
        },
        {
          id: 'nav-wl2',
          type: 'button',
          props: { label: 'Kandungan Alami', href: '#benefits', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' },
        },
        {
          id: 'nav-wl3',
          type: 'button',
          props: { label: 'Ulasan Pelanggan', href: '#reviews', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' },
        },
        {
          id: 'nav-wl4',
          type: 'button',
          props: { label: 'Konsultasi Kulit', href: '#consultation', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' },
        },
        {
          id: 'cta-wel',
          type: 'button',
          props: { label: 'Belanja Sekarang 🌿', href: '#products', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-wellness-hero',
      type: 'hero',
      layout: 'umkm-hero-wellness',
      components: [
        {
          id: 'wel-badge',
          type: 'badge',
          props: { text: 'INDONESIAN BOTANICAL WELLNESS', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' },
        },
        {
          id: 'wel-title',
          type: 'heading',
          props: { content: 'Kemurnian Khasiat Tanaman Herbal untuk Kulit Sehat Alami', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ecfdf5', letterSpacing: '-0.02em' },
        },
        {
          id: 'wel-desc',
          type: 'paragraph',
          props: { content: 'Diformulasikan dari ekstrak kunyit, temulawak, bunga kenanga, dan minyak kelapa murni (VCO) yang dipanen secara lestari dari kebun organik lereng Gunung Merapi.', fontSize: '17px', color: '#a7f3d0' },
        },
        {
          id: 'wel-btn-pri',
          type: 'button',
          props: { label: 'Beli Produk Organik 🌿', href: '#products', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'wel-btn-sec',
          type: 'button',
          props: { label: 'Konsultasi Masalah Kulit', href: '#consultation', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.05)', color: '#ecfdf5', borderColor: '#34d399' },
        },
        {
          id: 'wel-stat1-num',
          type: 'heading',
          props: { content: '100%', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#34d399' },
        },
        {
          id: 'wel-stat1-lbl',
          type: 'paragraph',
          props: { content: 'Bahan Baku Alami Nabati', fontSize: '12px', color: '#cbd5e1' },
        },
        {
          id: 'wel-stat2-num',
          type: 'heading',
          props: { content: 'BPOM & Halal', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#34d399' },
        },
        {
          id: 'wel-stat2-lbl',
          type: 'paragraph',
          props: { content: 'Uji Klinis Dermatologis', fontSize: '12px', color: '#cbd5e1' },
        },
      ],
    },
    {
      id: 'sec-wellness-products',
      type: 'products',
      layout: 'umkm-products-wellness',
      components: [
        {
          id: 'prd-wl-badge',
          type: 'badge',
          props: { text: 'REKOMENDASI PRODUK ALAMI', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' },
        },
        {
          id: 'prd-wl-title',
          type: 'heading',
          props: { content: 'Rangkaian Perawatan Alami untuk Segala Jenis Kulit', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ecfdf5', textAlign: 'center' },
        },
        {
          id: 'prd-wl-desc',
          type: 'paragraph',
          props: { content: 'Dirancang aman untuk kulit sensitif, ibu hamil & menyusui, dengan aroma relaksasi alami tanaman nusantara.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' },
        },
        {
          id: 'wl1-title',
          type: 'heading',
          props: { content: 'Merapi Radiance Bakuchiol Face Oil', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'wl1-desc',
          type: 'paragraph',
          props: { content: 'Alternatif retinol alami nabati untuk menyamarkan garis halus, mencerahkan, dan mengunci kelembapan kulit.', fontSize: '13px', color: '#a7f3d0' },
        },
        {
          id: 'wl1-price',
          type: 'badge',
          props: { text: 'Rp 139.000', variant: 'solid', background: '#10b981', color: '#ffffff' },
        },
        {
          id: 'wl2-title',
          type: 'heading',
          props: { content: 'Sabun Castille Calendula & Madu Hutan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'wl2-desc',
          type: 'paragraph',
          props: { content: 'Sabun cair murni minyak zaitun & VCO, lembut membersihkan tanpa membuat kulit kering atau iritasi.', fontSize: '13px', color: '#a7f3d0' },
        },
        {
          id: 'wl2-price',
          type: 'badge',
          props: { text: 'Rp 79.000', variant: 'solid', background: '#10b981', color: '#ffffff' },
        },
        {
          id: 'wl3-title',
          type: 'heading',
          props: { content: 'Minyak Aromaterapi Ketenangan Kenanga', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'wl3-desc',
          type: 'paragraph',
          props: { content: 'Essential oil roll-on murni bunga kenanga Jawa & lavender untuk meredakan stres dan tidur lebih lelap.', fontSize: '13px', color: '#a7f3d0' },
        },
        {
          id: 'wl3-price',
          type: 'badge',
          props: { text: 'Rp 59.000', variant: 'solid', background: '#10b981', color: '#ffffff' },
        },
        {
          id: 'wl4-title',
          type: 'heading',
          props: { content: 'Masker Detoks Temulawak & Kaolin Clay', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'wl4-desc',
          type: 'paragraph',
          props: { content: 'Masker bilas pembersih pori mendalam untuk meredakan jerawat meradang dan memudarkan bekas noda.', fontSize: '13px', color: '#a7f3d0' },
        },
        {
          id: 'wl4-price',
          type: 'badge',
          props: { text: 'Rp 65.000', variant: 'solid', background: '#10b981', color: '#ffffff' },
        },
        {
          id: 'prd-wl-cta-btn',
          type: 'button',
          props: { label: 'Beli via WhatsApp / Official Store 🛒', href: '#consultation', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-wellness-benefits',
      type: 'benefits',
      layout: 'umkm-benefits-wellness',
      components: [
        {
          id: 'ben-badge',
          type: 'badge',
          props: { text: 'STANDAR KEBERSIHAN FORMULA', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' },
        },
        {
          id: 'ben-title',
          type: 'heading',
          props: { content: 'Komitmen Kami untuk Kecantikan yang Aman & Berkelanjutan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ecfdf5' },
        },
        {
          id: 'ben-desc',
          type: 'paragraph',
          props: { content: 'Kami percaya bahwa perawatan terbaik berasal dari alam yang diolah dengan integritas sains dermatologi modern tanpa merusak bumi.', fontSize: '16px', color: '#a7f3d0' },
        },
        {
          id: 'b1-title',
          type: 'heading',
          props: { content: '100% Cold-Pressed & Fresh Extracts', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'b1-desc',
          type: 'paragraph',
          props: { content: 'Minyak alami diekstraksi tanpa pemanasan berlebih untuk menjaga nutrisi dan antioksidan tetap utuh.', fontSize: '13px', color: '#a7f3d0' },
        },
        {
          id: 'b2-title',
          type: 'heading',
          props: { content: 'Bebas 20+ Bahan Kimia Berbahaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'b2-desc',
          type: 'paragraph',
          props: { content: 'Formula bebas paraben, sulfat (SLS/SLES), pewangi sintetis, alkohol kering, dan pewarna buatan.', fontSize: '13px', color: '#a7f3d0' },
        },
        {
          id: 'b3-title',
          type: 'heading',
          props: { content: 'Kemasan Kaca Daur Ulang & Eco-Refill', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'b3-desc',
          type: 'paragraph',
          props: { content: 'Botol kaca amber pelindung UV yang dapat diisi ulang (refillable) untuk mengurangi limbah plastik.', fontSize: '13px', color: '#a7f3d0' },
        },
      ],
    },
    {
      id: 'sec-wellness-reviews',
      type: 'reviews',
      layout: 'umkm-reviews-wellness',
      components: [
        {
          id: 'rev-wl-badge',
          type: 'badge',
          props: { text: 'PENGALAMAN & HASIL NYATA', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' },
        },
        {
          id: 'rev-wl-title',
          type: 'heading',
          props: { content: 'Cerita Kulit Sehat Alami dari Sahabat Sekar Arum', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ecfdf5', textAlign: 'center' },
        },
        {
          id: 'rev-wl-desc',
          type: 'paragraph',
          props: { content: 'Lebih dari 10.000 pelanggan telah beralih ke perawatan kulit organik yang ramah kulit dan lingkungan.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' },
        },
        {
          id: 'rv1-quote',
          type: 'paragraph',
          props: { content: '"Bakuchiol Face Oil-nya penyelamat kulit sensitifku saat hamil! Tidak bikin breakout sama sekali, teksturnya cepat meresap dan bekas jerawat cepat memudar."', fontSize: '14px', color: '#a7f3d0' },
        },
        {
          id: 'rv1-name',
          type: 'heading',
          props: { content: 'Nadya Larasati', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'rv1-tag',
          type: 'paragraph',
          props: { content: 'Pemilik Kulit Sensitif (Jakarta)', fontSize: '12px', color: '#34d399' },
        },
        {
          id: 'rv2-quote',
          type: 'paragraph',
          props: { content: '"Sabun Castille Calendula-nya sangat lembut, anak saya yang ada eksim kulitnya jadi tenang dan tidak gatal lagi. Aroma alaminya sangat menenangkan."', fontSize: '14px', color: '#a7f3d0' },
        },
        {
          id: 'rv2-name',
          type: 'heading',
          props: { content: 'dr. Anissa Rahma', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'rv2-tag',
          type: 'paragraph',
          props: { content: 'Dokter Umum & Ibu Rumah Tangga', fontSize: '12px', color: '#34d399' },
        },
        {
          id: 'rv3-quote',
          type: 'paragraph',
          props: { content: '"Minyak roll-on Kenanga selalu ada di tas kerja. Saat pusing atau lelah meeting, tinggal oles di pelipis langsung rileks seketika. Sangat rekomen!"', fontSize: '14px', color: '#a7f3d0' } },
        {
          id: 'rv3-name',
          type: 'heading',
          props: { content: 'Citra Permatasari', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'rv3-tag',
          type: 'paragraph',
          props: { content: 'Corporate Professional (Bandung)', fontSize: '12px', color: '#34d399' },
        },
      ],
    },
    {
      id: 'sec-wellness-cta',
      type: 'cta',
      layout: 'umkm-cta-wellness',
      components: [
        {
          id: 'cta-wl-badge',
          type: 'badge',
          props: { text: 'KONSULTASI KULIT BEBAS BIAYA', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' },
        },
        {
          id: 'cta-wl-title',
          type: 'heading',
          props: { content: 'Bingung Memilih Produk yang Tepat untuk Kondisi Kulit Anda?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ecfdf5', textAlign: 'center' },
        },
        {
          id: 'cta-wl-desc',
          type: 'paragraph',
          props: { content: 'Konsultasikan keluhan kulit Anda secara personal dengan Beauty & Herbalist Advisor kami via WhatsApp. Dapatkan rekomendasi produk sesuai jenis kulit dan panduan pemakaian rutin.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' },
        },
        {
          id: 'cta-wl-btn1',
          type: 'button',
          props: { label: 'Konsultasi via WhatsApp (Gratis) 💬', href: '#consultation', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'cta-wl-btn2',
          type: 'button',
          props: { label: 'Belanja di Shopee / Tokopedia', href: '#products', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.05)', color: '#ecfdf5', borderColor: '#34d399' },
        },
      ],
    },
    {
      id: 'sec-wellness-footer',
      type: 'footer',
      layout: 'umkm-footer-wellness',
      components: [
        {
          id: 'ftr-wl-brand',
          type: 'heading',
          props: { content: 'SEKAR ARUM BOTANICALS', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ecfdf5', letterSpacing: '0.08em' },
        },
        {
          id: 'ftr-wl-tagline',
          type: 'paragraph',
          props: { content: 'Perawatan kulit alami berbasis kearifan botani herbal Indonesia. Menghidupkan kembali rahasia kecantikan tradisional yang teruji secara sains.', fontSize: '13px', color: '#a7f3d0' },
        },
        {
          id: 'ftr-wl-copy',
          type: 'paragraph',
          props: { content: '© 2026 PT Sekar Arum Nusantara. All rights reserved.', fontSize: '12px', color: '#6ee7b7' },
        },
        {
          id: 'ftr-wl-lnk1',
          type: 'button',
          props: { label: 'Face Oils & Serums', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' },
        },
        {
          id: 'ftr-wl-lnk2',
          type: 'button',
          props: { label: 'Body Care & Soaps', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' },
        },
        {
          id: 'ftr-wl-lnk3',
          type: 'button',
          props: { label: 'Aromatherapy Mists', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' },
        },
        {
          id: 'ftr-wl-lnk4',
          type: 'button',
          props: { label: 'Herbal Clay Masks', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' },
        },
      ],
    },
  ],
};
