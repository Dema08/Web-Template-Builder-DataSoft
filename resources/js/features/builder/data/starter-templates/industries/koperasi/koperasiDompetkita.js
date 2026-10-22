/**
 * Koperasi Dompetkita Bersama — Starter Template
 * Template resmi untuk KOPERASI DOMPETKITA BERSAMA (koperasi umum karyawan berbasis Dompetkita.id).
 *
 * Menggunakan modular sections independen (setiap section menjadi layer tersendiri di builder):
 *  - 1. Navigasi (Navbar)
 *  - 2. Hero Banner & 4 Stat Cards
 *  - 3. Visi & Misi 4 Pilar
 *  - 4. Tujuan & Makna Lambang 9 Elemen
 *  - 5. 6 Unit Usaha
 *  - 6. Alur Keanggotaan & Accordion Hak/Kewajiban
 *  - 7. Permodalan (Bar Chart & Accordion)
 *  - 8. Rapat Anggota (Tabel Kuorum, Wewenang & Bentuk Rapat)
 *  - 9. Sisa Hasil Usaha (SHU Donut & Stacked Bar)
 *  - 10. Struktur Organisasi & Tugas
 *  - 11. Pertanyaan Umum (FAQ Accordion)
 *  - 12. CTA Banner & Footer Disclaimer
 *
 * Tema Warna: Deep Navy Teal & Gold
 *   - Navy Tua  : #123B52
 *   - Teal      : #147D92
 *   - Emas      : #F4B544
 *   - Hijau Daun: #2F8878
 *   - Muted     : #627783
 */
export default {
  id: 'koperasi-dompetkita',
  name: 'Dompetkita Bersama (Koperasi Umum Karyawan)',
  description: 'Template profesional bernuansa biru navy & emas untuk KOPERASI DOMPETKITA BERSAMA — koperasi umum bagi karyawan perusahaan yang memiliki akun Dompetkita.id. Modular per-section sebagai layer individual di builder: Navbar, Hero gradient navy dengan SVG ilustrasi 3 karyawan + koin, Visi & Misi 4 pilar, Makna Lambang 9 elemen, 6 Unit Usaha, Alur Keanggotaan 4 langkah bernomor emas, Permodalan bar chart SVG + accordion, Rapat Anggota tabel kuorum + wewenang, SHU donut chart + stacked bar, Struktur Organisasi org-tree berwarna, 6 FAQ accordion, CTA gradient, dan Footer.',
  thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
  tags: ['Koperasi', 'Dompetkita', 'Karyawan', 'Simpan Pinjam', 'SHU', 'Keanggotaan', 'Umum', 'Premium'],
  theme: {
    primaryColor: '#147D92',
    secondaryColor: '#123B52',
    accentColor: '#F4B544',
    dark: false,
    surface: '#FFFFFF',
    text: '#173042',
    muted: '#627783',
    border: '#DCE7EC',
    radius: 'lg',
    font: 'Bricolage Grotesque, Source Sans 3, system-ui, sans-serif',
  },
  animations: ['fade-up', 'hover-lift'],
  sections: [
    {
      id: 'sec-dompet-nav',
      type: 'navbar',
      layout: 'kop-nav-dompetkita',
      components: [
        { id: 'dompet-nav-logo', type: 'heading', props: { content: 'KOPERASI DOMPETKITA BERSAMA', level: 'h2', fontSize: '15px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.03em' } },
        { id: 'dompet-nav-1', type: 'button', props: { label: 'Visi', href: '#misi', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-2', type: 'button', props: { label: 'Lambang', href: '#lambang', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-3', type: 'button', props: { label: 'Usaha', href: '#usaha', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-4', type: 'button', props: { label: 'Modal', href: '#modal', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-5', type: 'button', props: { label: 'Anggota', href: '#anggota', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-6', type: 'button', props: { label: 'Rapat', href: '#rapat', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-7', type: 'button', props: { label: 'SHU', href: '#shu', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-8', type: 'button', props: { label: 'Struktur', href: '#struktur', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-9', type: 'button', props: { label: 'Tugas', href: '#tugas', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-10', type: 'button', props: { label: 'Kerja sama', href: '#kerjasama', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
        { id: 'dompet-nav-11', type: 'button', props: { label: 'FAQ', href: '#faq', variant: 'ghost', size: 'small', background: 'transparent', color: '#D7F1F3', fontWeight: '600' } },
      ],
    },
    {
      id: 'sec-dompet-hero',
      type: 'hero',
      layout: 'kop-hero-dompetkita',
      components: [
        { id: 'dompet-hero-eyebrow', type: 'badge', props: { text: 'Koperasi untuk tumbuh bersama', variant: 'outline', background: 'rgba(244,181,68,0.15)', color: '#D7F1F3', borderColor: 'rgba(244,181,68,0.4)' } },
        { id: 'dompet-hero-title', type: 'heading', props: { content: 'Koperasi DOMPETKITA BERSAMA.', level: 'h1', fontSize: 'clamp(42px,5.5vw,72px)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.045em' } },
        { id: 'dompet-hero-desc', type: 'paragraph', props: { content: 'KOPERASI DOMPETKITA BERSAMA adalah koperasi umum yang menghimpun anggota dari kalangan karyawan perusahaan yang telah memiliki akun Dompetkita.id. Koperasi mengembangkan usaha dan layanan berdasarkan kebutuhan anggota, dengan tata kelola yang transparan, bertanggung jawab, dan berorientasi pada kesejahteraan bersama.', fontSize: '17px', color: '#E5F5F7' } },
        { id: 'dompet-hero-btn1', type: 'button', props: { label: 'Pelajari keanggotaan ↗', href: '#anggota', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#123B52', fontWeight: '700' } },
        { id: 'dompet-hero-btn2', type: 'button', props: { label: 'Jelajahi unit usaha →', href: '#usaha', variant: 'outline', size: 'large', radius: 'full', background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.55)', fontWeight: '600' } },
        {
          id: 'dompet-stat1-card', type: 'card',
          props: { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', borderWidth: '1px', borderRadius: '13px', padding: '19px 17px 18px' },
          childrenComponents: [
            { id: 'dompet-stat1-val', type: 'heading', props: { content: '1 orang = 1 suara', level: 'h3', fontSize: 'clamp(18px,2vw,24px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' } },
            { id: 'dompet-stat1-lbl', type: 'paragraph', props: { content: 'di Rapat Anggota', fontSize: '14px', color: '#D7F1F3', fontWeight: '500' } },
          ]
        },
        {
          id: 'dompet-stat2-card', type: 'card',
          props: { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', borderWidth: '1px', borderRadius: '13px', padding: '19px 17px 18px' },
          childrenComponents: [
            { id: 'dompet-stat2-val', type: 'heading', props: { content: '5 tahun', level: 'h3', fontSize: 'clamp(18px,2vw,24px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' } },
            { id: 'dompet-stat2-lbl', type: 'paragraph', props: { content: 'masa jabatan pengurus', fontSize: '14px', color: '#D7F1F3', fontWeight: '500' } },
          ]
        },
        {
          id: 'dompet-stat3-card', type: 'card',
          props: { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', borderWidth: '1px', borderRadius: '13px', padding: '19px 17px 18px' },
          childrenComponents: [
            { id: 'dompet-stat3-val', type: 'heading', props: { content: 'Min. 1×/tahun', level: 'h3', fontSize: 'clamp(18px,2vw,24px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' } },
            { id: 'dompet-stat3-lbl', type: 'paragraph', props: { content: 'Rapat Anggota Tahunan', fontSize: '14px', color: '#D7F1F3', fontWeight: '500' } },
          ]
        },
        {
          id: 'dompet-stat4-card', type: 'card',
          props: { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', borderWidth: '1px', borderRadius: '13px', padding: '19px 17px 18px' },
          childrenComponents: [
            { id: 'dompet-stat4-val', type: 'heading', props: { content: '5 bagian', level: 'h3', fontSize: 'clamp(18px,2vw,24px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' } },
            { id: 'dompet-stat4-lbl', type: 'paragraph', props: { content: 'pembagian SHU', fontSize: '14px', color: '#D7F1F3', fontWeight: '500' } },
          ]
        },
      ],
    },
    {
      id: 'sec-dompet-visimisi',
      type: 'about',
      layout: 'kop-visimisi-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-lambang',
      type: 'feature',
      layout: 'kop-lambang-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-unitusaha',
      type: 'services',
      layout: 'kop-unitusaha-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-keanggotaan',
      type: 'feature',
      layout: 'kop-keanggotaan-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-permodalan',
      type: 'stats',
      layout: 'kop-permodalan-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-rapat',
      type: 'content',
      layout: 'kop-rapat-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-shu',
      type: 'stats',
      layout: 'kop-shu-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-struktur',
      type: 'team',
      layout: 'kop-struktur-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-faq',
      type: 'faq',
      layout: 'kop-faq-dompetkita',
      components: [],
    },
    {
      id: 'sec-dompet-footer',
      type: 'footer',
      layout: 'kop-footer-dompetkita',
      components: [],
    },
  ],
};
