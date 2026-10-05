/**
 * Forum Profesi Nusantara — Premium Professional Association Portal
 * Exclusive Premium Starter Template untuk Asosiasi Profesi, Forum Profesi, & Ikatan Profesional.
 * Fully compatible with Right Inspector selection and property editing for all components, cards, and images.
 */
export default {
  id: 'org-professional-forum',
  name: 'Forum Profesi Nusantara',
  description: 'Template premium eksklusif bergaya otoritatif navy & gold untuk asosiasi profesi resmi, forum profesional, dan ikatan profesi nasional. Dilengkapi prestige top-bar berdiri sejak 1985, hero formal dengan statistik 35.000+ anggota, 3 tier keanggotaan (Associate/Full/Corporate), kalender event & kongres nasional, CTA keanggotaan, dan footer multi-kolom bertanda Kemenkumham & ISO.',
  thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=80',
  tags: ['Organisasi', 'Asosiasi Profesi', 'Forum Profesi', 'Ikatan Profesional', 'Formal', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#d97706',
    secondaryColor: '#060d1a',
    accentColor: '#fbbf24',
    dark: true,
    surface: '#040812',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: 'rgba(217,119,6,0.25)',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-pro-nav',
      type: 'navbar',
      layout: 'org-nav-professional',
      components: [
        { id: 'pro-logo', type: 'heading', props: { content: 'FORUM PROFESI NUSANTARA', level: 'h2', fontSize: '16px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.06em' } },
        { id: 'nav-pro1', type: 'button', props: { label: 'Tentang Forum', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#fbbf24' } },
        { id: 'nav-pro2', type: 'button', props: { label: 'Keanggotaan', href: '#membership', variant: 'ghost', size: 'small', background: 'transparent', color: '#fbbf24' } },
        { id: 'nav-pro3', type: 'button', props: { label: 'Agenda & Event', href: '#events', variant: 'ghost', size: 'small', background: 'transparent', color: '#fbbf24' } },
        { id: 'nav-pro4', type: 'button', props: { label: 'Publikasi', href: '#publications', variant: 'ghost', size: 'small', background: 'transparent', color: '#fbbf24' } },
        { id: 'cta-pro', type: 'button', props: { label: 'Daftar Anggota ⚜', href: '#join', variant: 'primary', size: 'small', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-pro-hero',
      type: 'hero',
      layout: 'org-hero-professional',
      components: [
        { id: 'pro-badge', type: 'badge', props: { text: '⚜ DEWAN PENGURUS PUSAT FORUM PROFESI NUSANTARA', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
        { id: 'pro-title', type: 'heading', props: { content: 'Membangun Standar Profesi Unggul, Memajukan Bangsa Indonesia', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
        { id: 'pro-desc', type: 'text', props: { content: 'Forum Profesi Nusantara adalah wadah resmi bagi 35.000+ profesional lintas disiplin terbaik Indonesia — menegakkan kode etik, akreditasi kompetensi, dan memperluas kolaborasi strategis nasional.', fontSize: '17px', color: '#cbd5e1' } },
        { id: 'pro-btn1', type: 'button', props: { label: 'Daftar Keanggotaan ⚜', href: '#join', variant: 'primary', size: 'large', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
        { id: 'pro-btn2', type: 'button', props: { label: 'Unduh Profil Organisasi (PDF)', href: '#about', variant: 'outline', size: 'large', radius: 'sm', background: 'rgba(15,23,42,0.8)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
        // Stat Cards (Editable Card Components)
        {
          id: 'pro-stat1-card',
          type: 'card',
          props: { background: '#0b162c', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pro-stat1-num', type: 'heading', props: { content: '35.000+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'pro-stat1-lbl', type: 'text', props: { content: 'Anggota Aktif di 34 Provinsi', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'pro-stat2-card',
          type: 'card',
          props: { background: '#0b162c', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pro-stat2-num', type: 'heading', props: { content: '38 Tahun', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'pro-stat2-lbl', type: 'text', props: { content: 'Dedikasi & Integritas Sejak 1985', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'pro-stat3-card',
          type: 'card',
          props: { background: '#0b162c', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pro-stat3-num', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'pro-stat3-lbl', type: 'text', props: { content: 'Kongres & Seminar Tahunan', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        // Hero Image (Editable Image Component)
        {
          id: 'pro-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=80',
            alt: 'Annual National Professional Congress',
            width: '100%',
            height: '460px',
            objectFit: 'cover',
            borderRadius: '16px',
            shadow: 'xl',
          }
        },
        {
          id: 'pro-hero-float-card',
          type: 'card',
          props: { background: 'rgba(11,22,44,0.95)', borderColor: 'rgba(217,119,6,0.4)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'xl' },
          childrenComponents: [
            { id: 'pro-float-tag', type: 'badge', props: { text: '⚜ KONGRES NASIONAL XXV 2026', variant: 'outline', background: 'transparent', color: '#fbbf24', borderColor: 'transparent' } },
            { id: 'pro-float-title', type: 'heading', props: { content: 'Jakarta International Convention Center', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#ffffff' } },
          ]
        }
      ],
    },
    {
      id: 'sec-pro-membership',
      type: 'membership',
      layout: 'org-membership-professional',
      components: [
        { id: 'memb-badge', type: 'badge', props: { text: '⚜ KEANGGOTAAN RESMI 2026', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
        { id: 'memb-title', type: 'heading', props: { content: 'Bergabunglah, Bangun Reputasi & Jaringan Profesionalmu', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'memb-desc', type: 'text', props: { content: 'Pilih jalur keanggotaan yang sesuai dengan jenjang karier dan kebutuhan institusi Anda. Dapatkan sertifikasi terakreditasi dan akses jejaring eksklusif.', fontSize: '16px', color: '#cbd5e1' } },
        // Tier 1 Card
        {
          id: 'card-m1',
          type: 'card',
          props: { background: '#0a1424', borderColor: 'rgba(217,119,6,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '28px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'm1-tag', type: 'badge', props: { text: 'PILIHAN PEMULA', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
            { id: 'm1-title', type: 'heading', props: { content: 'Anggota Muda (Associate)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'm1-price', type: 'heading', props: { content: 'Rp 500.000 / tahun', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'm1-desc', type: 'text', props: { content: 'Bagi fresh graduate & praktisi pemula (<5 tahun). Dapatkan kartu anggota digital, buletin bulanan, dan 4 webinar kompetensi gratis.', fontSize: '14px', color: '#94a3b8' } },
            { id: 'm1-btn', type: 'button', props: { label: 'Daftar Associate', href: '#join', variant: 'outline', size: 'medium', radius: 'sm', background: 'rgba(15,23,42,0.6)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
          ]
        },
        // Tier 2 Card
        {
          id: 'card-m2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #132238 0%, #0a1424 100%)', borderColor: '#d97706', borderWidth: '2px', borderRadius: '16px', padding: '28px', shadow: '2xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'm2-tag', type: 'badge', props: { text: 'REKOMENDASI UTAMA', variant: 'solid', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff' } },
            { id: 'm2-title', type: 'heading', props: { content: 'Anggota Penuh (Full Member)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'm2-price', type: 'heading', props: { content: 'Rp 1.500.000 / tahun', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'm2-desc', type: 'text', props: { content: 'Untuk profesional senior berpengalaman (>5 tahun). Sertifikat resmi fisik, hak suara penuh pada Kongres Nasional, dan program mentoring privat.', fontSize: '14px', color: '#cbd5e1' } },
            { id: 'm2-btn', type: 'button', props: { label: 'Daftar Full Member ⚜', href: '#join', variant: 'primary', size: 'medium', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
          ]
        },
        // Tier 3 Card
        {
          id: 'card-m3',
          type: 'card',
          props: { background: '#0a1424', borderColor: 'rgba(217,119,6,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '28px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'm3-tag', type: 'badge', props: { text: 'UNTUK PERUSAHAAN', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
            { id: 'm3-title', type: 'heading', props: { content: 'Mitra Korporasi (Corporate)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'm3-price', type: 'heading', props: { content: 'Rp 10.000.000 / tahun', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#fbbf24' } },
            { id: 'm3-desc', type: 'text', props: { content: 'Bagi institusi, firma & korporasi. Sertifikasi hingga 10 staf, prioritas booth pameran, akses talenta terverifikasi, dan co-branding acara.', fontSize: '14px', color: '#94a3b8' } },
            { id: 'm3-btn', type: 'button', props: { label: 'Hubungi Tim Kemitraan', href: '#contact', variant: 'outline', size: 'medium', radius: 'sm', background: 'rgba(15,23,42,0.6)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
          ]
        },
      ],
    },
    {
      id: 'sec-pro-events',
      type: 'events',
      layout: 'org-events-professional',
      components: [
        { id: 'evt-badge', type: 'badge', props: { text: '📅 AGENDA & EVENT NASIONAL 2026', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
        { id: 'evt-title', type: 'heading', props: { content: 'Kalender Kegiatan, Seminar & Kongres Nasional', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
        { id: 'evt-desc', type: 'text', props: { content: 'Ikuti rangkaian agenda ilmiah, rapat kerja nasional, dan forum sertifikasi kompetensi bersama para pakar dan regulator terkemuka di Indonesia.', fontSize: '16px', color: '#cbd5e1' } },
        // Event 1 Card
        {
          id: 'card-e1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0e1b30 0%, #081120 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'e1-tag', type: 'badge', props: { text: 'KONGRES UTAMA · 15 SKP RESMI', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
            { id: 'e1-title', type: 'heading', props: { content: 'Kongres Nasional XXV — Masa Depan Standar Profesi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'e1-date', type: 'heading', props: { content: '12–14 Maret 2026 · Jakarta Convention Center', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#fbbf24' } },
            { id: 'e1-desc', type: 'text', props: { content: 'Forum tahunan akbar penetapan arah regulasi industri, sertifikasi standar kompetensi baru 2026, dan pemilihan dewan pengurus pusat periode 2026–2030.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },
        // Event 2 Card
        {
          id: 'card-e2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0e1b30 0%, #081120 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'e2-tag', type: 'badge', props: { text: 'SIMPOSIUM NASIONAL · 8 SKP RESMI', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
            { id: 'e2-title', type: 'heading', props: { content: 'Simposium Nasional: Integrasi AI & Etika Profesi Modern', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'e2-date', type: 'heading', props: { content: '8 Mei 2026 · Grand City Surabaya & Hybrid', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#fbbf24' } },
            { id: 'e2-desc', type: 'text', props: { content: 'Panel diskusi bersama 12 narasumber dari kementerian, praktisi global, dan akademisi mengenai otomatisasi serta perlindungan standar etika kerja.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },
        // Event 3 Card
        {
          id: 'card-e3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0e1b30 0%, #081120 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'e3-tag', type: 'badge', props: { text: 'ANUGERAH & GALA · EKSKLUSIF ANGGOTA', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
            { id: 'e3-title', type: 'heading', props: { content: 'Gala Dinner & Malam Anugerah Insan Profesi 2026', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
            { id: 'e3-date', type: 'heading', props: { content: '20 Desember 2026 · Nusa Dua Convention Center Bali', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#fbbf24' } },
            { id: 'e3-desc', type: 'text', props: { content: 'Malam penganugerahan penghargaan prestisius bagi tokoh berprestasi, inovator muda teladan, dan mitra korporasi teladan sepanjang tahun 2026.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },
        { id: 'evt-cta-btn', type: 'button', props: { label: 'Lihat Semua Agenda 2026 ⚜', href: '#events', variant: 'primary', size: 'large', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-pro-cta',
      type: 'cta',
      layout: 'org-cta-professional',
      components: [
        {
          id: 'pro-cta-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #122038 0%, #0c1626 50%, #08101e 100%)', borderColor: 'rgba(245,158,11,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'cta-badge', type: 'badge', props: { text: '⚜ PENDAFTARAN ANGGOTA PERIODE 2026', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
            { id: 'cta-title', type: 'heading', props: { content: 'Waktunya Mengukir Prestasi Bersama Komunitas Profesional Terbaik', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'cta-desc', type: 'text', props: { content: 'Dapatkan pengakuan resmi, kembangkan kompetensi berskala internasional, dan perluas jejaring strategis dengan 35.000+ anggota di seluruh Indonesia.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
            { id: 'cta-btn1', type: 'button', props: { label: 'Daftar Sekarang ⚜', href: '#join', variant: 'primary', size: 'large', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
            { id: 'cta-btn2', type: 'button', props: { label: 'Konsultasi Sekretariat DPP', href: '#contact', variant: 'outline', size: 'large', radius: 'sm', background: 'rgba(15,23,42,0.8)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-pro-footer',
      type: 'footer',
      layout: 'org-footer-professional',
      components: [
        { id: 'pro-foot-logo', type: 'heading', props: { content: 'FORUM PROFESI NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
        { id: 'pro-foot-desc', type: 'text', props: { content: 'Organisasi profesi berbadan hukum resmi Republik Indonesia. Berdedikasi memajukan standar profesi, kompetensi, dan etika kerja nasional sejak 1985.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'pro-foot-addr', type: 'text', props: { content: 'Gedung Graha Profesi Lt. 8, Jl. Jend. Sudirman Kav. 52-53, SCBD, Jakarta Selatan 12190', fontSize: '13px', color: '#94a3b8' } },
        { id: 'pro-foot-phone', type: 'text', props: { content: 'Hotline DPP: +62 21 5289 8800 | sekretariat@forumprofesi.or.id', fontSize: '13px', color: '#fbbf24' } },
      ],
    },
  ],
};
