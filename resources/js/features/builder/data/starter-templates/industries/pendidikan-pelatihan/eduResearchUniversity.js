/**
 * Nusantara Institute of Technology (NIT) — Premier Research University
 * Exclusive Premium Starter Template untuk Perguruan Tinggi, Universitas Riset, & Institut Teknologi.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'edu-research-university',
  name: 'Nusantara Institute of Technology',
  description: 'Template premium eksklusif bergaya akademis prestisius & riset global untuk universitas riset terkemuka, institut teknologi tinggi, dan politeknik unggulan. Dilengkapi running ticker akreditasi BAN-PT & QS Asia, split hero dengan statistik serapan kerja 96.4% & dana riset tahunan, fakultas program sarjana/magister terakreditasi internasional, pusat riset Quantum & AI supercomputing, fasilitas kampus 60 hektar, dan portal pendaftaran mahasiswa baru (PMB).',
  thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
  tags: ['Universitas', 'Perguruan Tinggi', 'Institut Teknologi', 'Pendidikan Tinggi', 'Riset', 'Akademik', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#1e3a8a',
    secondaryColor: '#0f172a',
    accentColor: '#d97706',
    goldAccent: '#f59e0b',
    dark: true,
    surface: '#070e1c',
    text: '#ffffff',
    muted: '#94a3b8',
    border: '#1e293b',
    radius: 'xl',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-uni-nav',
      type: 'navbar',
      layout: 'edu-nav-university',
      components: [
        {
          id: 'uni-logo',
          type: 'heading',
          props: { content: 'NUSANTARA INSTITUTE OF TECH', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.04em' },
        },
        {
          id: 'nav-u1',
          type: 'button',
          props: { label: 'Program Studi', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-u2',
          type: 'button',
          props: { label: 'Pusat Riset', href: '#research', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-u3',
          type: 'button',
          props: { label: 'Kehidupan Kampus', href: '#campus', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-u4',
          type: 'button',
          props: { label: 'Penerimaan Mahasiswa', href: '#admission', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'cta-uni',
          type: 'button',
          props: { label: 'Daftar PMB 2026/2027 🎓', href: '#admission', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-uni-hero',
      type: 'hero',
      layout: 'edu-hero-university',
      components: [
        {
          id: 'uni-badge',
          type: 'badge',
          props: { text: 'PUSAT KEUNGGULAN RISET & TEKNOLOGI ASIA', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' },
        },
        {
          id: 'uni-title',
          type: 'heading',
          props: { content: 'Membentuk Generasi Pemimpin Inovasi & Rekayasa Masa Depan', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' },
        },
        {
          id: 'uni-desc',
          type: 'paragraph',
          props: { content: 'Universitas riset berstandar internasional dengan kurikulum berbasis industri mutakhir, laboratorium canggih, dan kemitraan global di 30+ negara.', fontSize: '17px', color: '#cbd5e1' },
        },
        {
          id: 'uni-btn-pri',
          type: 'button',
          props: { label: 'Pendaftaran Mahasiswa Baru 🎓', href: '#admission', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'uni-btn-sec',
          type: 'button',
          props: { label: 'Unduh Prospektus Akademik (PDF)', href: '#programs', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' },
        },
        {
          id: 'uni-stat1-num',
          type: 'heading',
          props: { content: '96.4%', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fbbf24' },
        },
        {
          id: 'uni-stat1-lbl',
          type: 'paragraph',
          props: { content: 'Serapan Kerja Lulusan < 3 Bulan', fontSize: '12px', color: '#94a3b8' },
        },
        {
          id: 'uni-stat2-num',
          type: 'heading',
          props: { content: 'Rp 45 M+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fbbf24' },
        },
        {
          id: 'uni-stat2-lbl',
          type: 'paragraph',
          props: { content: 'Dana Riset & Beasiswa Tahunan', fontSize: '12px', color: '#94a3b8' },
        },
        {
          id: 'uni-hero-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', alt: 'University students on campus library', width: '100%', height: '460px', objectFit: 'cover', borderRadius: '0' },
        },
      ],
    },
    {
      id: 'sec-uni-programs',
      type: 'programs',
      layout: 'edu-programs-university',
      components: [
        {
          id: 'prog-badge',
          type: 'badge',
          props: { text: 'PROGRAM STUDI & FAKULTAS', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' },
        },
        {
          id: 'prog-title',
          type: 'heading',
          props: { content: 'Pilihan Jenjang Sarjana, Magister & Doktoral Berkelas Dunia', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'prog-desc',
          type: 'paragraph',
          props: { content: 'Kurikulum berbasis proyek industri riil dengan sertifikasi kompetensi internasional dari Microsoft, AWS, dan Cisco.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'pr1-title',
          type: 'heading',
          props: { content: 'S1 Teknik Informatika & Kecerdasan Buatan (AI)', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'pr1-desc',
          type: 'paragraph',
          props: { content: 'Spesialisasi machine learning, computer vision, deep neural network, dan scalable cloud engineering.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'pr1-tag',
          type: 'badge',
          props: { text: 'Akreditasi Internasional ABET', variant: 'solid', background: '#1e3a8a', color: '#93c5fd' },
        },
        {
          id: 'pr2-title',
          type: 'heading',
          props: { content: 'S1 Robotika & Sistem Otomasi Industri', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'pr2-desc',
          type: 'paragraph',
          props: { content: 'Fokus pada Internet of Things (IoT), autonomous vehicles, mekatronika presisi, dan smart manufacturing.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'pr2-tag',
          type: 'badge',
          props: { text: 'Laboratorium Jerman Berstandar DIN', variant: 'solid', background: '#1e3a8a', color: '#93c5fd' },
        },
        {
          id: 'pr3-title',
          type: 'heading',
          props: { content: 'S1 Bisnis Digital & Financial Technology', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'pr3-desc',
          type: 'paragraph',
          props: { content: 'Mengintegrasikan manajemen strategi, blockchain analytics, algoritma kuantitatif trading, dan venture capital.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'pr3-tag',
          type: 'badge',
          props: { text: 'Kerjasama Bloomberg Terminal', variant: 'solid', background: '#1e3a8a', color: '#93c5fd' },
        },
        {
          id: 'pr4-title',
          type: 'heading',
          props: { content: 'S2 Magister Keamanan Siber & Kriptografi', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'pr4-desc',
          type: 'paragraph',
          props: { content: 'Program pascasarjana pertahanan siber, post-quantum cryptography, dan audit kepatuhan keamanan infrastruktur vital.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'pr4-tag',
          type: 'badge',
          props: { text: 'ISO 27001 Security Center', variant: 'solid', background: '#1e3a8a', color: '#93c5fd' },
        },
        {
          id: 'prog-cta-btn',
          type: 'button',
          props: { label: 'Lihat Seluruh 24 Program Studi ➔', href: '#admission', variant: 'primary', size: 'medium', radius: 'lg', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-uni-research',
      type: 'research',
      layout: 'edu-research-university',
      components: [
        {
          id: 'res-badge',
          type: 'badge',
          props: { text: 'PUSAT RISET & INOVASI GLOBAL', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' },
        },
        {
          id: 'res-title',
          type: 'heading',
          props: { content: 'Mendorong Batas Ilmu Pengetahuan dengan Riset Berdampak Tinggi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'res-desc',
          type: 'paragraph',
          props: { content: 'NIT mengelola 8 pusat riset interdisipliner dengan pendanaan internasional dan fasilitas supercomputing untuk memecahkan tantangan energi, kesehatan, dan kecerdasan buatan.', fontSize: '16px', color: '#cbd5e1' },
        },
        {
          id: 'r1-title',
          type: 'heading',
          props: { content: 'Supercomputing & Quantum AI Lab', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'r1-desc',
          type: 'paragraph',
          props: { content: 'Klaster GPU H100 berkapasitas tinggi untuk komputasi model bahasa besar dan simulasi molekuler obat.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'r2-title',
          type: 'heading',
          props: { content: 'Renewable Energy & Battery Storage Center', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'r2-desc',
          type: 'paragraph',
          props: { content: 'Pengembangan sel baterai sodium-ion generasi baru dan optimasi pembangkit smart grid tenaga surya.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'r3-title',
          type: 'heading',
          props: { content: 'Autonomous Robotics & Aerospace Facility', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'r3-desc',
          type: 'paragraph',
          props: { content: 'Riset wahana nirawak (drone otonom) dan satelit mikro nano bekerja sama dengan badan antariksa.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'res-cta-btn',
          type: 'button',
          props: { label: 'Jelajahi Publikasi & Paten Riset ➔', href: '#research', variant: 'outline', size: 'medium', radius: 'lg', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: '#d97706' },
        },
      ],
    },
    {
      id: 'sec-uni-campus',
      type: 'campus',
      layout: 'edu-campus-university',
      components: [
        {
          id: 'cmp-badge',
          type: 'badge',
          props: { text: 'FASILITAS KAMPUS CERDAS', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' },
        },
        {
          id: 'cmp-title',
          type: 'heading',
          props: { content: 'Ekosistem Belajar Modern Berkelanjutan Seluas 60 Hektar', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'cmp-desc',
          type: 'paragraph',
          props: { content: 'Lingkungan kampus hijau berteknologi tinggi yang dirancang untuk mendukung kreativitas, kolaborasi, dan kesejahteraan mahasiswa.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'f1-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', alt: 'Digital Smart Library 24/7', width: '100%', height: '240px', objectFit: 'cover' },
        },
        {
          id: 'f1-title',
          type: 'heading',
          props: { content: 'Digital Smart Library 24/7', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'f1-desc',
          type: 'paragraph',
          props: { content: 'Akses ke 500.000+ e-journal internasional, pod studi hening, dan ruang kolaborasi multimedia.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 'f2-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', alt: 'Innovation & Startup Incubator', width: '100%', height: '240px', objectFit: 'cover' },
        },
        {
          id: 'f2-title',
          type: 'heading',
          props: { content: 'Innovation & Startup Incubator', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'f2-desc',
          type: 'paragraph',
          props: { content: 'Co-working space, makerspace 3D printing, dan pendanaan awal (seed fund) untuk proyek rintisan mahasiswa.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 'f3-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', alt: 'Green Dormitory & Sports Arena', width: '100%', height: '240px', objectFit: 'cover' },
        },
        {
          id: 'f3-title',
          type: 'heading',
          props: { content: 'Green Dormitory & Sports Arena', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'f3-desc',
          type: 'paragraph',
          props: { content: 'Asrama mahasiswa mandiri energi bertenaga surya, kolam renang olympic, dan lapangan indoor berstandar KONI.', fontSize: '13px', color: '#cbd5e1' },
        },
      ],
    },
    {
      id: 'sec-uni-admission',
      type: 'admission',
      layout: 'edu-admission-university',
      components: [
        {
          id: 'adm-badge',
          type: 'badge',
          props: { text: 'PENERIMAAN MAHASISWA BARU 2026/2027', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' },
        },
        {
          id: 'adm-title',
          type: 'heading',
          props: { content: 'Wujudkan Impian Menjadi Insinyur & Peneliti Berdaya Saing Global', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'adm-desc',
          type: 'paragraph',
          props: { content: 'Pilih jalur seleksi yang sesuai dengan minat dan potensimu. Dapatkan kesempatan beasiswa bebas biaya kuliah penuh hingga lulus.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'adm-btn1',
          type: 'button',
          props: { label: 'Daftar Online Sekarang (PMB) 🎓', href: '#admission', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'adm-btn2',
          type: 'button',
          props: { label: 'Konsultasi Tim Admisi Kampus', href: '#admission', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' },
        },
      ],
    },
    {
      id: 'sec-uni-footer',
      type: 'footer',
      layout: 'edu-footer-university',
      components: [
        {
          id: 'ftr-uni-brand',
          type: 'heading',
          props: { content: 'NUSANTARA INSTITUTE OF TECH', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.04em' },
        },
        {
          id: 'ftr-uni-tagline',
          type: 'paragraph',
          props: { content: 'Pusat Keunggulan Riset, Rekayasa Teknologi, dan Kepemimpinan Inovatif Indonesia Berkelas Dunia.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'ftr-uni-copy',
          type: 'paragraph',
          props: { content: '© 2026 Nusantara Institute of Technology. Terakreditasi Unggul BAN-PT.', fontSize: '12px', color: '#64748b' },
        },
        {
          id: 'ftr-uni-lnk1',
          type: 'button',
          props: { label: 'Fakultas Teknik Informatika & AI', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-uni-lnk2',
          type: 'button',
          props: { label: 'Fakultas Robotika & Otomasi', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-uni-lnk3',
          type: 'button',
          props: { label: 'Pusat Riset Quantum & Supercomputer', href: '#research', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-uni-lnk4',
          type: 'button',
          props: { label: 'Biro Admisi & Beasiswa', href: '#admission', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
      ],
    },
  ],
};
