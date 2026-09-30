/**
 * Pusaka Heritage — Handcrafted Indonesian Wastra & Craft Studio
 * Exclusive Premium Starter Template untuk UMKM Kriya, Batik Tulis, Tenun Ikat, & Fashion Nusantara.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'umkm-heritage-craft',
  name: 'Pusaka Heritage Studio',
  description: 'Template premium eksklusif bernuansa terakota & kain linen hangat untuk UMKM kriya nusantara, butik batik tulis sutra, tenun ikat tradisional, dan pengrajin lokal. Dilengkapi notice pewarna alami, split hero dengan nomor seri terbatas, 4 katalog karya unggulan berharga, filosofi makna sakral motif tradisi, profil dampak sosial ibu pengrajin desa, formulir pesanan khusus kriya/souvenir korporasi, dan footer studio.',
  thumbnail: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop&q=80',
  tags: ['UMKM', 'Batik', 'Tenun', 'Fashion', 'Handcrafted', 'Kriya', 'Heritage', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#c2410c',
    secondaryColor: '#9a3412',
    accentColor: '#fb923c',
    dark: true,
    surface: '#150d09',
    text: '#ffedd5',
    muted: '#fed7aa',
    border: '#7c2d12',
    radius: 'none',
    font: 'Cinzel, Plus Jakarta Sans, serif',
  },
  animations: ['fade-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-craft-nav',
      type: 'navbar',
      layout: 'umkm-nav-craft',
      components: [
        {
          id: 'crf-logo',
          type: 'heading',
          props: { content: 'PUSAKA HERITAGE', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#ffedd5', letterSpacing: '0.12em' },
        },
        {
          id: 'nav-cr1',
          type: 'button',
          props: { label: 'Koleksi Karya', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'nav-cr2',
          type: 'button',
          props: { label: 'Filosofi Motif', href: '#heritage', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'nav-cr3',
          type: 'button',
          props: { label: 'Kisah Pengrajin', href: '#artisan', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'nav-cr4',
          type: 'button',
          props: { label: 'Katalog & Custom', href: '#catalog', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'cta-crf',
          type: 'button',
          props: { label: 'Koleksi Eksklusif ✦', href: '#products', variant: 'primary', size: 'small', radius: 'none', background: '#c2410c', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-craft-hero',
      type: 'hero',
      layout: 'umkm-hero-craft',
      components: [
        {
          id: 'crf-badge',
          type: 'badge',
          props: { text: 'WARISAN BUDAYA & KRIYA MODERN', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' },
        },
        {
          id: 'crf-title',
          type: 'heading',
          props: { content: 'Merajut Nilai Luhur Nusantara dalam Siluet Kontemporer', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffedd5', letterSpacing: '-0.01em' },
        },
        {
          id: 'crf-desc',
          type: 'paragraph',
          props: { content: 'Setiap lembar kain tenun ikat dan batik tulis kami dikerjakan secara manual oleh perempuan perajin di pelosok desa, melestarikan motif sakral dengan sentuhan busana modern siap pakai.', fontSize: '17px', color: '#fed7aa' } },
        {
          id: 'crf-btn-pri',
          type: 'button',
          props: { label: 'Lihat Koleksi Terbaru ✦', href: '#products', variant: 'primary', size: 'large', radius: 'none', background: '#c2410c', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'crf-btn-sec',
          type: 'button',
          props: { label: 'Filosofi Motif Tradisi', href: '#heritage', variant: 'outline', size: 'large', radius: 'none', background: 'transparent', color: '#ffedd5', borderColor: '#fb923c' },
        },
        {
          id: 'crf-stat1-num',
          type: 'heading',
          props: { content: '120+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fb923c' },
        },
        {
          id: 'crf-stat1-lbl',
          type: 'paragraph',
          props: { content: 'Ibu Pengrajin Desa Binaan', fontSize: '12px', color: '#cbd5e1' },
        },
        {
          id: 'crf-stat2-num',
          type: 'heading',
          props: { content: '100%', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fb923c' },
        },
        {
          id: 'crf-stat2-lbl',
          type: 'paragraph',
          props: { content: 'Pewarna Alami Ekologis', fontSize: '12px', color: '#cbd5e1' },
        },
      ],
    },
    {
      id: 'sec-craft-products',
      type: 'products',
      layout: 'umkm-products-craft',
      components: [
        {
          id: 'prd-badge',
          type: 'badge',
          props: { text: 'KOLEKSI MAHA KARYA', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' },
        },
        {
          id: 'prd-title',
          type: 'heading',
          props: { content: 'Karya Eksklusif Ditenun & Dibatik dengan Ketulusan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffedd5', textAlign: 'center' },
        },
        {
          id: 'prd-desc',
          type: 'paragraph',
          props: { content: 'Setiap helai kain dibuat dalam jumlah sangat terbatas (limited edition) dengan sertifikat keaslian dan nomor seri pengrajin.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' },
        },
        {
          id: 'p1-title',
          type: 'heading',
          props: { content: 'Outer Tenun Ikat Sikka Indigo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'p1-desc',
          type: 'paragraph',
          props: { content: 'Tenun tradisional Flores dengan pewarna alami daun Indigofera, siluet modern long outer.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'p1-price',
          type: 'badge',
          props: { text: 'Rp 650.000', variant: 'solid', background: '#c2410c', color: '#ffffff' },
        },
        {
          id: 'p2-title',
          type: 'heading',
          props: { content: 'Kemeja Batik Tulis Sutra Parang Kusumo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'p2-desc',
          type: 'paragraph',
          props: { content: 'Batik tulis canting malam halus di atas sutra ATBM dengan motif agung Parang Kusumo.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'p2-price',
          type: 'badge',
          props: { text: 'Rp 1.250.000', variant: 'solid', background: '#c2410c', color: '#ffffff' },
        },
        {
          id: 'p3-title',
          type: 'heading',
          props: { content: 'Selendang Sutra Pewarna Tingi & Secang', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'p3-desc',
          type: 'paragraph',
          props: { content: 'Scarf lembut bernuansa terakota hangat dari rebusan kulit kayu tingi dan kayu secang.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'p3-price',
          type: 'badge',
          props: { text: 'Rp 380.000', variant: 'solid', background: '#c2410c', color: '#ffffff' },
        },
        {
          id: 'p4-title',
          type: 'heading',
          props: { content: 'Tas Anyaman Rotan & Kulit Nabati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'p4-desc',
          type: 'paragraph',
          props: { content: 'Kombinasi rotan lulubang halus dengan aksen vegetable tanned leather buatan perajin Yogyakarta.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'p4-price',
          type: 'badge',
          props: { text: 'Rp 490.000', variant: 'solid', background: '#c2410c', color: '#ffffff' },
        },
        {
          id: 'prd-cta-btn',
          type: 'button',
          props: { label: 'Lihat Katalog Lengkap & Pre-Order ➔', href: '#catalog', variant: 'primary', size: 'medium', radius: 'none', background: '#c2410c', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-craft-heritage',
      type: 'heritage',
      layout: 'umkm-heritage-craft',
      components: [
        {
          id: 'hrt-badge',
          type: 'badge',
          props: { text: 'FILOSOFI & MAKNA SAKRAL', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' },
        },
        {
          id: 'hrt-title',
          type: 'heading',
          props: { content: 'Setiap Goresan Canting Mengandung Doa & Kebijaksanaan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffedd5' },
        },
        {
          id: 'hrt-desc',
          type: 'paragraph',
          props: { content: 'Di balik keindahan visual sehelai kain tradisional, tersimpan narasi peradaban leluhur yang mengajarkan keselarasan antara manusia, alam semesta, dan Sang Pencipta.', fontSize: '16px', color: '#fed7aa' },
        },
        {
          id: 'm1-name',
          type: 'heading',
          props: { content: 'Motif Parang Rusak Barong', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm1-desc',
          type: 'paragraph',
          props: { content: 'Melambangkan ombak samudera yang pantang menyerah, keteguhan hati, dan kepemimpinan yang adil.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'm2-name',
          type: 'heading',
          props: { content: 'Motif Kawung Suci', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm2-desc',
          type: 'paragraph',
          props: { content: 'Terinspirasi buah kolang-kaling yang melambangkan kemurnian hati, kesederhanaan, dan pengendalian diri.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'm3-name',
          type: 'heading',
          props: { content: 'Tenun Ikat Kuda Flores', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'm3-desc',
          type: 'paragraph',
          props: { content: 'Simbol status kehormatan, kekuatan fisik, serta persaudaraan erat antarsuku di Nusa Tenggara Timur.', fontSize: '13px', color: '#fed7aa' },
        },
      ],
    },
    {
      id: 'sec-craft-artisan',
      type: 'artisan',
      layout: 'umkm-artisan-craft',
      components: [
        {
          id: 'art-badge',
          type: 'badge',
          props: { text: 'DAMPAK SOSIAL & PEMBERDAYAAN', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' },
        },
        {
          id: 'art-title',
          type: 'heading',
          props: { content: 'Di Balik Setiap Helai Kain, Ada Senyum Ibu Pengrajin', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffedd5', textAlign: 'center' },
        },
        {
          id: 'art-desc',
          type: 'paragraph',
          props: { content: 'Kami bekerja langsung bersama 120+ perempuan penenun dan pembatik di 4 sentra desa binaan Jawa dan NTT untuk kemandirian ekonomi keluarga.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' },
        },
        {
          id: 'a1-name',
          type: 'heading',
          props: { content: 'Ibu Ningsih (54 Tahun)', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'a1-role',
          type: 'paragraph',
          props: { content: 'Master Batik Tulis Halus — Giriloyo, Bantul', fontSize: '12px', color: '#fb923c', fontWeight: '600' },
        },
        {
          id: 'a1-bio',
          type: 'paragraph',
          props: { content: 'Telah mencanting selama 35 tahun, mewariskan keahlian pola pakem keraton kepada generasi muda di desanya.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'a2-name',
          type: 'heading',
          props: { content: 'Mama Maria (48 Tahun)', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'a2-role',
          type: 'paragraph',
          props: { content: 'Ketua Kelompok Tenun Ikat — Sikka, NTT', fontSize: '12px', color: '#fb923c', fontWeight: '600' },
        },
        {
          id: 'a2-bio',
          type: 'paragraph',
          props: { content: 'Memimpin 40 perajin tenun ikat pewarna alam yang kini produknya menembus pameran internasional di Tokyo & Paris.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'a3-name',
          type: 'heading',
          props: { content: 'Pak Wayan Sudarma (51 Tahun)', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'a3-role',
          type: 'paragraph',
          props: { content: 'Perajin Kriya Kayu & Aksen Perak — Celuk, Bali', fontSize: '12px', color: '#fb923c', fontWeight: '600' },
        },
        {
          id: 'a3-bio',
          type: 'paragraph',
          props: { content: 'Membuat handle tas dan ornamen kriya ukir dari kayu jati bekas kapal nelayan dengan finishing ramah lingkungan.', fontSize: '13px', color: '#fed7aa' },
        },
      ],
    },
    {
      id: 'sec-craft-cta',
      type: 'cta',
      layout: 'umkm-cta-craft',
      components: [
        {
          id: 'cta-cr-badge',
          type: 'badge',
          props: { text: 'PESANAN KHUSUS & SOUVENIR KORPORASI', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' },
        },
        {
          id: 'cta-cr-title',
          type: 'heading',
          props: { content: 'Ingin Merancang Busana Custom atau Hampers Eksklusif?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffedd5', textAlign: 'center' },
        },
        {
          id: 'cta-cr-desc',
          type: 'paragraph',
          props: { content: 'Kami melayani pembuatan busana seragam tenun custom, gift set cinderamata instansi, dan pesanan motif batik khusus bernilai tinggi.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' },
        },
        {
          id: 'cta-cr-btn1',
          type: 'button',
          props: { label: 'Konsultasi Custom Order via WhatsApp 💬', href: '#contact', variant: 'primary', size: 'large', radius: 'none', background: '#c2410c', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'cta-cr-btn2',
          type: 'button',
          props: { label: 'Unduh Buku Portofolio (PDF)', href: '#catalog', variant: 'outline', size: 'large', radius: 'none', background: 'transparent', color: '#ffedd5', borderColor: '#fb923c' },
        },
      ],
    },
    {
      id: 'sec-craft-footer',
      type: 'footer',
      layout: 'umkm-footer-craft',
      components: [
        {
          id: 'ftr-cr-brand',
          type: 'heading',
          props: { content: 'PUSAKA HERITAGE', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffedd5', letterSpacing: '0.12em' },
        },
        {
          id: 'ftr-cr-tagline',
          type: 'paragraph',
          props: { content: 'Rumah Kriya & Wastra Nusantara. Melestarikan tradisi tenun ikat dan batik tulis pewarna alam untuk generasi masa depan.', fontSize: '13px', color: '#fed7aa' },
        },
        {
          id: 'ftr-cr-copy',
          type: 'paragraph',
          props: { content: '© 2026 Pusaka Heritage Studio. Dilindungi Hak Cipta & Kebudayaan Nasional.', fontSize: '12px', color: '#a8a29e' },
        },
        {
          id: 'ftr-cr-lnk1',
          type: 'button',
          props: { label: 'Outer & Busana Tenun', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'ftr-cr-lnk2',
          type: 'button',
          props: { label: 'Kain Batik Tulis Sutra', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'ftr-cr-lnk3',
          type: 'button',
          props: { label: 'Scarf Pewarna Alam', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
        {
          id: 'ftr-cr-lnk4',
          type: 'button',
          props: { label: 'Kriya Rotan & Kulit', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' },
        },
      ],
    },
  ],
};
