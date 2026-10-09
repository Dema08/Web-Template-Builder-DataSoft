/**
 * Puskopolda (Pusat Koperasi Kepolisian Daerah) — Starter Template Resmi
 * Exclusive Starter Template untuk Pusat Koperasi Kepolisian Daerah (PUSKOPOLDA).
 * Tema Warna: Biru & Putih (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc)
 * Dilengkapi 11 Halaman / Section Terpadu:
 * 1. Beranda (Hero & Stats)
 * 2. Tentang Kami (Profil, Sejarah, Visi, Misi, 6 Nilai)
 * 3. Struktur Organisasi (Bagan, Pengurus, Pengawas, Bidang)
 * 4. Unit Usaha / Layanan (Simpan Pinjam, Perdagangan, Jasa, Unit Usaha Lain)
 * 5. Keanggotaan (Kriteria, Hak/Kewajiban, Syarat, Alur, CTA)
 * 6. Berita & Kegiatan (Tabs Filter, Grid 6 Berita)
 * 7. Galeri Foto (Filter Tabs, Grid 9 Foto)
 * 8. Legalitas (Tabel Badan Hukum/NIK/NIB/NPWP & Unduhan PDF)
 * 9. Mitra Kerja Sama (Grid 8 Logo Institusi & Bank)
 * 10. Dokumen Publik (5 Kategori Unduhan & SOP)
 * 11. Kontak & Sekretariat (4 Info, Form Pengaduan, Maps, Sosmed, Footer)
 */
export default {
  id: 'koperasi-puskopolda',
  name: 'Puskopolda (Koperasi Kepolisian)',
  description: 'Template resmi bernuansa biru & putih khusus untuk PUSKOPOLDA (Pusat Koperasi Kepolisian Daerah). Dilengkapi 11 section terpadu: Beranda dengan 5 KPI stats, profil & sejarah timeline 1998-2026, struktur pengurus & pengawas, 4 unit usaha lengkap (simpan pinjam, perdagangan sembako, jasa PPOB, unit lain), keanggotaan & formulir, berita RAT, galeri kegiatan, legalitas badan hukum, 8 mitra strategis, serta pusat dokumen publik.',
  thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
  tags: ['Koperasi', 'Puskopolda', 'Kepolisian', 'Simpan Pinjam', 'Sembako', 'RAT', 'Keanggotaan', 'Resmi', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#2563eb',
    secondaryColor: '#1e40af',
    accentColor: '#3b82f6',
    dark: false,
    surface: '#ffffff',
    text: '#0f172a',
    muted: '#64748b',
    border: '#e2e8f0',
    radius: 'md',
    font: 'Inter, Plus Jakarta Sans, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-puskopolda-nav',
      type: 'navbar',
      layout: 'kop-nav-puskopolda',
      components: [
        { id: 'puskopolda-nav-logo', type: 'heading', props: { content: 'PUSKOPOLDA', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#1e40af', letterSpacing: '0.06em' } },
        { id: 'puskopolda-nav-badge', type: 'badge', props: { text: 'PUSAT KOPERASI KEPOLISIAN DAERAH', variant: 'outline', background: '#dbeafe', color: '#1e40af', borderColor: '#bfdbfe' } },
        { id: 'puskopolda-nav-1', type: 'button', props: { label: 'Beranda', href: '#beranda', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
        { id: 'puskopolda-nav-2', type: 'button', props: { label: 'Tentang Kami', href: '#tentang', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
        { id: 'puskopolda-nav-3', type: 'button', props: { label: 'Struktur', href: '#struktur', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
        { id: 'puskopolda-nav-4', type: 'button', props: { label: 'Unit Usaha', href: '#unit-usaha', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
        { id: 'puskopolda-nav-5', type: 'button', props: { label: 'Keanggotaan', href: '#keanggotaan', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
        { id: 'puskopolda-nav-6', type: 'button', props: { label: 'Berita', href: '#berita', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
        { id: 'puskopolda-nav-7', type: 'button', props: { label: 'Dokumen', href: '#dokumen', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
        { id: 'puskopolda-nav-cta', type: 'button', props: { label: 'Daftar Anggota 👮‍♂️', href: '#keanggotaan', variant: 'primary', size: 'small', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-puskopolda-hero',
      type: 'hero',
      layout: 'kop-hero-puskopolda',
      components: [
        { id: 'puskopolda-hero-badge', type: 'badge', props: { text: 'PUSAT KOPERASI KEPOLISIAN DAERAH', variant: 'outline', background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.35)' } },
        { id: 'puskopolda-hero-title', type: 'heading', props: { content: 'PUSKOPOLDA', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
        { id: 'puskopolda-hero-desc', type: 'paragraph', props: { content: 'Membangun Kesejahteraan Anggota Melalui Koperasi yang Profesional, Transparan, dan Berkelanjutan', fontSize: '18px', color: '#f8fafc' } },
        { id: 'puskopolda-hero-btn1', type: 'button', props: { label: 'Tentang Kami', href: '#tentang', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#1e40af', fontWeight: '700' } },
        { id: 'puskopolda-hero-btn2', type: 'button', props: { label: 'Layanan Kami', href: '#unit-usaha', variant: 'outline', size: 'large', radius: 'md', background: 'transparent', color: '#ffffff', borderColor: '#ffffff', fontWeight: '600' } },

        // 5 Metric Stat Cards
        {
          id: 'puskopolda-stat1-card',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
          childrenComponents: [
            { id: 'puskopolda-stat1-num', type: 'heading', props: { content: '2.500+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
            { id: 'puskopolda-stat1-lbl', type: 'paragraph', props: { content: 'Jumlah Anggota', fontSize: '13px', color: '#475569', fontWeight: '600' } },
          ]
        },
        {
          id: 'puskopolda-stat2-card',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
          childrenComponents: [
            { id: 'puskopolda-stat2-num', type: 'heading', props: { content: '8', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
            { id: 'puskopolda-stat2-lbl', type: 'paragraph', props: { content: 'Jumlah Unit Usaha', fontSize: '13px', color: '#475569', fontWeight: '600' } },
          ]
        },
        {
          id: 'puskopolda-stat3-card',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
          childrenComponents: [
            { id: 'puskopolda-stat3-num', type: 'heading', props: { content: '1998', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
            { id: 'puskopolda-stat3-lbl', type: 'paragraph', props: { content: 'Tahun Berdiri', fontSize: '13px', color: '#475569', fontWeight: '600' } },
          ]
        },
        {
          id: 'puskopolda-stat4-card',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
          childrenComponents: [
            { id: 'puskopolda-stat4-num', type: 'heading', props: { content: '25+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
            { id: 'puskopolda-stat4-lbl', type: 'paragraph', props: { content: 'Jumlah Mitra', fontSize: '13px', color: '#475569', fontWeight: '600' } },
          ]
        },
        {
          id: 'puskopolda-stat5-card',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
          childrenComponents: [
            { id: 'puskopolda-stat5-num', type: 'heading', props: { content: '12', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
            { id: 'puskopolda-stat5-lbl', type: 'paragraph', props: { content: 'Cabang / Unit Kerja', fontSize: '13px', color: '#475569', fontWeight: '600' } },
          ]
        },

        // Hero Visual Showcase Card
        {
          id: 'puskopolda-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #1e40af 0%, #172554 100%)', borderColor: '#60a5fa', borderWidth: '2px', borderRadius: '20px', padding: '20px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'puskopolda-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80',
                alt: 'Gedung Pusat Koperasi Kepolisian Daerah',
                borderRadius: '14px',
                width: '100%',
                height: '340px',
                objectFit: 'cover',
              }
            },
            { id: 'puskopolda-card-badge', type: 'badge', props: { text: '🏛️ GRAHA PUSKOPOLDA TERPADU', variant: 'solid', background: 'rgba(255,255,255,0.2)', color: '#ffffff' } },
            { id: 'puskopolda-card-title', type: 'heading', props: { content: 'Pusat Pelayanan & Tata Kelola Usaha Koperasi Modern', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
          ]
        }
      ],
    },
    {
      id: 'sec-puskopolda-about',
      type: 'about',
      layout: 'kop-about-puskopolda',
      components: [
        { id: 'kop-about-badge', type: 'badge', props: { text: 'TENTANG KAMI', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-about-title', type: 'heading', props: { content: 'Membangun Masa Depan Sejahtera Bersama Koperasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
        { id: 'kop-about-profile', type: 'paragraph', props: { content: 'Pusat Koperasi Kepolisian Daerah merupakan wadah koperasi yang berperan dalam mendukung peningkatan kesejahteraan anggota melalui pengelolaan usaha yang profesional, transparan, dan berorientasi pada pelayanan.', fontSize: '16px', color: '#475569' } },
      ],
    },
    {
      id: 'sec-puskopolda-structure',
      type: 'team',
      layout: 'kop-structure-puskopolda',
      components: [
        { id: 'kop-org-badge', type: 'badge', props: { text: 'STRUKTUR ORGANISASI', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-org-title', type: 'heading', props: { content: 'Susunan Pengurus & Dewan Pengawas Periode 2024–2029', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-services',
      type: 'services',
      layout: 'kop-services-puskopolda',
      components: [
        { id: 'kop-srv-badge', type: 'badge', props: { text: 'UNIT USAHA & LAYANAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-srv-title', type: 'heading', props: { content: 'Portofolio Layanan Unggulan Puskopolda', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-membership',
      type: 'features',
      layout: 'kop-membership-puskopolda',
      components: [
        { id: 'kop-mem-badge', type: 'badge', props: { text: 'KEANGGOTAAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-mem-title', type: 'heading', props: { content: 'Bergabung Bersama Keluarga Besar Puskopolda', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-news',
      type: 'news',
      layout: 'kop-news-puskopolda',
      components: [
        { id: 'kop-news-badge', type: 'badge', props: { text: 'BERITA & KEGIATAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-news-title', type: 'heading', props: { content: 'Warta Resmi & Agenda Puskopolda', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-gallery',
      type: 'gallery',
      layout: 'kop-gallery-puskopolda',
      components: [
        { id: 'kop-gal-badge', type: 'badge', props: { text: 'GALERI FOTO', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-gal-title', type: 'heading', props: { content: 'Dokumentasi Visual Kegiatan & Kantor', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-legality',
      type: 'features',
      layout: 'kop-legality-puskopolda',
      components: [
        { id: 'kop-leg-badge', type: 'badge', props: { text: 'LEGALITAS & PERIZINAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-leg-title', type: 'heading', props: { content: 'Legalitas Kelembagaan Resmi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-partners',
      type: 'partners',
      layout: 'kop-partners-puskopolda',
      components: [
        { id: 'kop-ptr-badge', type: 'badge', props: { text: 'MITRA KERJA SAMA', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-ptr-title', type: 'heading', props: { content: 'Jejaring Kemitraan Strategis', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-documents',
      type: 'features',
      layout: 'kop-documents-puskopolda',
      components: [
        { id: 'kop-doc-badge', type: 'badge', props: { text: 'DOKUMEN PUBLIK & UNDUHAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-doc-title', type: 'heading', props: { content: 'Pusat Unduhan Berkas & Formulir', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-contact',
      type: 'contact',
      layout: 'kop-contact-puskopolda',
      components: [
        { id: 'kop-cnt-badge', type: 'badge', props: { text: 'HUBUNGI KAMI', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
        { id: 'kop-cnt-title', type: 'heading', props: { content: 'Informasi Kontak & Sekretariat', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
      ],
    },
    {
      id: 'sec-puskopolda-footer',
      type: 'footer',
      layout: 'kop-footer-puskopolda',
      components: [
        { id: 'kop-ft-logo', type: 'heading', props: { content: 'PUSKOPOLDA', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.06em' } },
        { id: 'kop-ft-desc', type: 'paragraph', props: { content: 'Pusat Koperasi Kepolisian Daerah yang profesional, transparan, dan akuntabel dalam mewujudkan kemandirian ekonomi anggota.', fontSize: '13px', color: '#94a3b8' } },
      ],
    },
  ],
};
