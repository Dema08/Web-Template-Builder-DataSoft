/**
 * Gerakan Berdaya Indonesia — Premium NGO / Social Movement Template
 * Exclusive Premium Starter Template untuk NGO, Yayasan Sosial, Lembaga Nirlaba, & Gerakan Komunitas.
 * Fully compatible with Right Inspector selection and property editing for all components, cards, and images.
 */
export default {
  id: 'org-social-movement',
  name: 'Gerakan Berdaya Indonesia',
  description: 'Template premium eksklusif bergaya warm emerald & vibrant orange untuk NGO, yayasan sosial, lembaga nirlaba, dan gerakan komunitas pemberdayaan. Dilengkapi impact ticker 150.000+ jiwa, hero emosional dengan foto background komunitas, 4 program pemberdayaan (pendidikan/kesehatan/ekonomi/lingkungan), dashboard dampak transparan, CTA volunteer & donasi dengan foto, dan footer hijau bertanda NGO verified.',
  thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80',
  tags: ['Organisasi', 'NGO', 'Yayasan Sosial', 'Gerakan Komunitas', 'Nirlaba', 'Pemberdayaan', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#10b981',
    secondaryColor: '#022c22',
    accentColor: '#f97316',
    dark: true,
    surface: '#011a12',
    text: '#ffffff',
    muted: '#a7f3d0',
    border: 'rgba(16,185,129,0.25)',
    radius: 'full',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-soc-nav',
      type: 'navbar',
      layout: 'org-nav-social',
      components: [
        { id: 'soc-logo', type: 'heading', props: { content: 'GERAKAN BERDAYA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' } },
        { id: 'nav-soc1', type: 'button', props: { label: 'Misi & Nilai', href: '#mission', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'nav-soc2', type: 'button', props: { label: 'Program Sosial', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'nav-soc3', type: 'button', props: { label: 'Dampak Nyata', href: '#impact', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'nav-soc4', type: 'button', props: { label: 'Relawan', href: '#volunteer', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
        { id: 'cta-soc', type: 'button', props: { label: 'Bergabung Sekarang 💚', href: '#join', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-soc-hero',
      type: 'hero',
      layout: 'org-hero-social',
      components: [
        { id: 'soc-badge', type: 'badge', props: { text: '🌿 GERAKAN SOSIAL YANG BERDAMPAK NYATA', variant: 'outline', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
        { id: 'soc-title', type: 'heading', props: { content: 'Bersatu, Bergerak, Mengubah Hidup Jutaan Saudara Kita', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.025em' } },
        { id: 'soc-desc', type: 'text', props: { content: 'Gerakan Berdaya hadir untuk menghadirkan keadilan akses pendidikan, layanan kesehatan cuma-cuma, dan kemandirian ekonomi bagi keluarga di pelosok Nusantara.', fontSize: '17px', color: '#a7f3d0' } },
        { id: 'soc-btn1', type: 'button', props: { label: 'Bergabung Jadi Relawan 💚', href: '#join', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#ffffff', fontWeight: '700' } },
        { id: 'soc-btn2', type: 'button', props: { label: 'Lihat Laporan Dampak Kami', href: '#impact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.7)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
        { id: 'soc-stat1-num', type: 'heading', props: { content: '150.000+', level: 'h3', fontSize: '30px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'soc-stat1-lbl', type: 'text', props: { content: 'Penerima Manfaat Program', fontSize: '12px', color: '#34d399' } },
        { id: 'soc-stat2-num', type: 'heading', props: { content: '12.000+', level: 'h3', fontSize: '30px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'soc-stat2-lbl', type: 'text', props: { content: 'Relawan Aktif di 34 Provinsi', fontSize: '12px', color: '#34d399' } },
        { id: 'soc-stat3-num', type: 'heading', props: { content: '320', level: 'h3', fontSize: '30px', fontWeight: '900', color: '#6ee7b7' } },
        { id: 'soc-stat3-lbl', type: 'text', props: { content: 'Desa Binaan Berkelanjutan', fontSize: '12px', color: '#34d399' } },
        { id: 'soc-hero-bg', type: 'image', props: { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80', alt: 'Komunitas Relawan Gerakan Berdaya', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0' } },
      ],
    },
    {
      id: 'sec-soc-programs',
      type: 'programs',
      layout: 'org-programs-social',
      components: [
        { id: 'prog-badge', type: 'badge', props: { text: '💚 4 PILAR PROGRAM UTAMA', variant: 'outline', background: 'rgba(16,185,129,0.18)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
        { id: 'prog-title', type: 'heading', props: { content: 'Program Berkelanjutan untuk Perubahan Nyata di Lapangan', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
        { id: 'prog-desc', type: 'text', props: { content: 'Kami merancang program berbasis kebutuhan riil masyarakat dengan pendampingan intensif dari para relawan ahli dan donatur terpercaya.', fontSize: '16px', color: '#a7f3d0' } },
        // Card 1
        {
          id: 'card-p1',
          type: 'card',
          props: { background: '#032e22', borderColor: 'rgba(16,185,129,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '0px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'p1-img',
              type: 'image',
              props: { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80', alt: 'Beasiswa Anak Bangsa', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }
            },
            { id: 'p1-tag', type: 'badge', props: { text: '🎓 PENDIDIKAN', variant: 'solid', background: 'rgba(1,26,18,0.9)', color: '#6ee7b7' } },
            { id: 'p1-title', type: 'heading', props: { content: 'Beasiswa Pelajar Nusantara', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
            { id: 'p1-desc', type: 'text', props: { content: 'Bantuan biaya SPP, buku, dan mentoring persiapan perguruan tinggi untuk 2.500 anak berprestasi dari keluarga prasejahtera.', fontSize: '13px', color: '#a7f3d0' } },
            { id: 'p1-stat', type: 'heading', props: { content: '2.500 Pelajar / Tahun', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#f97316' } },
          ]
        },
        // Card 2
        {
          id: 'card-p2',
          type: 'card',
          props: { background: '#032e22', borderColor: 'rgba(16,185,129,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '0px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'p2-img',
              type: 'image',
              props: { src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80', alt: 'Klinik Apung Medis', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }
            },
            { id: 'p2-tag', type: 'badge', props: { text: '🏥 KESEHATAN', variant: 'solid', background: 'rgba(1,26,18,0.9)', color: '#6ee7b7' } },
            { id: 'p2-title', type: 'heading', props: { content: 'Klinik Apung & Keliling Medis', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
            { id: 'p2-desc', type: 'text', props: { content: 'Armada ambulans dan kapal medis menjangkau pulau terluar untuk pemeriksaan kesehatan cuma-cuma, USG ibu hamil, dan obat gratis.', fontSize: '13px', color: '#a7f3d0' } },
            { id: 'p2-stat', type: 'heading', props: { content: '48.000 Pasien Terlayani', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#f97316' } },
          ]
        },
        // Card 3
        {
          id: 'card-p3',
          type: 'card',
          props: { background: '#032e22', borderColor: 'rgba(16,185,129,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '0px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'p3-img',
              type: 'image',
              props: { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80', alt: 'Pemberdayaan UMKM Desa', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }
            },
            { id: 'p3-tag', type: 'badge', props: { text: '🌾 EKONOMI KERAKYATAN', variant: 'solid', background: 'rgba(1,26,18,0.9)', color: '#6ee7b7' } },
            { id: 'p3-title', type: 'heading', props: { content: 'Pemberdayaan UMKM Desa', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
            { id: 'p3-desc', type: 'text', props: { content: 'Pelatihan literasi digital, akses modal mikro tanpa bunga, dan pendampingan pemasaran produk olahan tani dan kerajinan ibu-ibu desa.', fontSize: '13px', color: '#a7f3d0' } },
            { id: 'p3-stat', type: 'heading', props: { content: '8.400 Usaha Mandiri', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#f97316' } },
          ]
        },
        // Card 4
        {
          id: 'card-p4',
          type: 'card',
          props: { background: '#032e22', borderColor: 'rgba(16,185,129,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '0px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'p4-img',
              type: 'image',
              props: { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80', alt: 'Hutan & Pesisir Lestari', width: '100%', height: '176px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }
            },
            { id: 'p4-tag', type: 'badge', props: { text: '🌱 LINGKUNGAN HIDUP', variant: 'solid', background: 'rgba(1,26,18,0.9)', color: '#6ee7b7' } },
            { id: 'p4-title', type: 'heading', props: { content: 'Hutan & Pesisir Lestari', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
            { id: 'p4-desc', type: 'text', props: { content: 'Gerakan restorasi 1 juta bibit mangrove dan reboisasi sumber mata air desa untuk menahan abrasi dan memitigasi krisis iklim lokal.', fontSize: '13px', color: '#a7f3d0' } },
            { id: 'p4-stat', type: 'heading', props: { content: '1.200 Ha Kawasan Hijau', level: 'h4', fontSize: '13px', fontWeight: '800', color: '#f97316' } },
          ]
        },
        { id: 'prog-cta-btn', type: 'button', props: { label: 'Ajukan Program / Jadi Mitra Komunitas 💚', href: '#volunteer', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-soc-impact',
      type: 'impact',
      layout: 'org-impact-social',
      components: [
        { id: 'imp-badge', type: 'badge', props: { text: '🏆 TRANSPARANSI & AKUNTABILITAS', variant: 'outline', background: 'rgba(16,185,129,0.18)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.45)' } },
        { id: 'imp-title', type: 'heading', props: { content: 'Setiap Rupiah Berubah Menjadi Senyuman & Harapan Nyata', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
        { id: 'imp-desc', type: 'text', props: { content: 'Kami menjunjung tinggi tata kelola nirlaba yang profesional. Laporan keuangan diaudit berkala oleh Kantor Akuntan Publik independen dengan opini Wajar Tanpa Pengecualian (WTP).', fontSize: '16px', color: '#a7f3d0' } },
        // KPI Cards
        {
          id: 'card-i1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #033a2b 0%, #02261c 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'i1-tag', type: 'badge', props: { text: '❤️ PENERIMA MANFAAT', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'i1-num', type: 'heading', props: { content: '150.000+', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'i1-lbl', type: 'text', props: { content: 'Jiwa tersentuh langsung melalui 4 program utama', fontSize: '13px', color: '#34d399' } },
          ]
        },
        {
          id: 'card-i2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #033a2b 0%, #02261c 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'i2-tag', type: 'badge', props: { text: '💎 PENYALURAN AMANAH', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'i2-num', type: 'heading', props: { content: 'Rp 48,2 Miliar', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'i2-lbl', type: 'text', props: { content: 'Dana amanah masyarakat tersalurkan 92,4% ke program riil', fontSize: '13px', color: '#34d399' } },
          ]
        },
        {
          id: 'card-i3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #033a2b 0%, #02261c 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'i3-tag', type: 'badge', props: { text: '🤝 GERAKAN KERELAWANAN', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'i3-num', type: 'heading', props: { content: '12.500', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'i3-lbl', type: 'text', props: { content: 'Relawan terlatih aktif di 34 provinsi Nusantara', fontSize: '13px', color: '#34d399' } },
          ]
        },
        {
          id: 'card-i4',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #033a2b 0%, #02261c 100%)', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'i4-tag', type: 'badge', props: { text: '🏡 WILAYAH JANGKAUAN', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
            { id: 'i4-num', type: 'heading', props: { content: '320 Desa', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#6ee7b7' } },
            { id: 'i4-lbl', type: 'text', props: { content: 'Komunitas & desa mandiri binaan berkelanjutan', fontSize: '13px', color: '#34d399' } },
          ]
        },
        // Banner Card
        {
          id: 'imp-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(90deg, #023124 0%, #044432 50%, #023124 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '1px', borderRadius: '16px', padding: '32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'imp-tag', type: 'badge', props: { text: '✨ LAPORAN TATA KELOLA KEUANGAN 2025', variant: 'outline', background: 'transparent', color: '#fb923c', borderColor: 'transparent' } },
            { id: 'imp-sub', type: 'heading', props: { content: 'Transparansi 100% — Diaudit oleh KAP Independen (Opini WTP)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff' } },
            { id: 'imp-cta-btn', type: 'button', props: { label: 'Unduh Laporan Audit Tahunan 2025 (PDF)', href: '#report', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.8)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-soc-cta',
      type: 'cta',
      layout: 'org-cta-social',
      components: [
        {
          id: 'cta-soc-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, rgba(1,34,23,0.95) 0%, rgba(1,53,36,0.9) 50%, rgba(2,44,34,0.95) 100%)', borderColor: 'rgba(16,185,129,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'cta-badge', type: 'badge', props: { text: '🌱 MARI BERGABUNG DALAM PERUBAHAN', variant: 'outline', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
            { id: 'cta-title', type: 'heading', props: { content: 'Satu Kebaikan Kecilmu Adalah Harapan Besar Bagi Mereka', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'cta-desc', type: 'text', props: { content: 'Bergabunglah bersama 12.000+ relawan dan ratusan donatur setia. Jadilah bagian dari gerakan nyata yang menyalakan harapan di pelosok Indonesia.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
            { id: 'cta-btn1', type: 'button', props: { label: 'Daftar Jadi Relawan 💚', href: '#volunteer', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#ffffff', fontWeight: '700' } },
            { id: 'cta-btn2', type: 'button', props: { label: 'Salurkan Donasi Program', href: '#donate', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.8)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-soc-footer',
      type: 'footer',
      layout: 'org-footer-social',
      components: [
        { id: 'soc-foot-logo', type: 'heading', props: { content: 'GERAKAN BERDAYA INDONESIA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' } },
        { id: 'soc-foot-desc', type: 'text', props: { content: 'Yayasan nirlaba pemberdayaan masyarakat terdaftar di Kementerian Sosial RI. Berkomitmen mewujudkan keadilan akses pendidikan, kesehatan, dan kemandirian ekonomi.', fontSize: '13px', color: '#a7f3d0' } },
        { id: 'soc-foot-addr', type: 'text', props: { content: 'Rumah Pemberdayaan DPP: Jl. Tebet Timur Raya No. 45, Jakarta Selatan 12820', fontSize: '13px', color: '#a7f3d0' } },
        { id: 'soc-foot-phone', type: 'text', props: { content: 'Call Center Relawan: +62 21 8370 5522 | halo@gerakanberdaya.id', fontSize: '13px', color: '#6ee7b7' } },
      ],
    },
  ],
};
