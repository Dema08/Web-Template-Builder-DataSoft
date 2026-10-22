import { DOMPETKITA_DEFAULTS } from './dompetkitaDefaults';

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
    primaryColor: '#0D9488',
    secondaryColor: '#0F2942',
    accentColor: '#F59E0B',
    dark: false,
    surface: '#FFFFFF',
    text: '#0F172A',
    muted: '#475569',
    border: '#E2E8F0',
    radius: 'lg',
    font: 'Bricolage Grotesque, Source Sans 3, system-ui, sans-serif',
  },
  animations: ['fade-up', 'hover-lift'],
  sections: [
    {
      id: 'sec-dompet-nav',
      type: 'navbar',
      layout: 'kop-nav-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-nav-dompetkita'],
    },
    {
      id: 'sec-dompet-hero',
      type: 'hero',
      layout: 'kop-hero-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-hero-dompetkita'],
    },
    {
      id: 'sec-dompet-visimisi',
      type: 'about',
      layout: 'kop-visimisi-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-visimisi-dompetkita'],
    },
    {
      id: 'sec-dompet-lambang',
      type: 'feature',
      layout: 'kop-lambang-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-lambang-dompetkita'],
    },
    {
      id: 'sec-dompet-unitusaha',
      type: 'services',
      layout: 'kop-unitusaha-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-unitusaha-dompetkita'],
    },
    {
      id: 'sec-dompet-keanggotaan',
      type: 'feature',
      layout: 'kop-keanggotaan-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-keanggotaan-dompetkita'],
    },
    {
      id: 'sec-dompet-permodalan',
      type: 'stats',
      layout: 'kop-permodalan-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-permodalan-dompetkita'],
    },
    {
      id: 'sec-dompet-rapat',
      type: 'content',
      layout: 'kop-rapat-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-rapat-dompetkita'],
    },
    {
      id: 'sec-dompet-shu',
      type: 'stats',
      layout: 'kop-shu-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-shu-dompetkita'],
    },
    {
      id: 'sec-dompet-struktur',
      type: 'team',
      layout: 'kop-struktur-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-struktur-dompetkita'],
    },
    {
      id: 'sec-dompet-faq',
      type: 'faq',
      layout: 'kop-faq-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-faq-dompetkita'],
    },
    {
      id: 'sec-dompet-footer',
      type: 'footer',
      layout: 'kop-footer-dompetkita',
      components: DOMPETKITA_DEFAULTS['kop-footer-dompetkita'],
    },
  ],
};
