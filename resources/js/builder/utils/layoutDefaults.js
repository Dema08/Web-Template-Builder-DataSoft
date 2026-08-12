// Layout Defaults Registry
// Maps layout IDs to their default component definitions
// Used to seed sections with initial components when added to the canvas

export const LAYOUT_DEFAULTS = {
  // === NAVBAR LAYOUTS ===
  'navbar-01': [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#000000' } },
  ],
  'navbar-02': [
    { id: 'logo-1', type: 'image', props: { src: '', alt: 'Logo', width: '120px', height: '40px', objectFit: 'contain' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Brand Name', level: 'h2', fontSize: '18px', fontWeight: '700', color: '#0f172a' } },
  ],
  'navbar-03': [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
  ],
  'navbar-04': [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#0f172a' } },
  ],
  'navbar-05': [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#0f172a' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'medium', background: '#4f46e5', color: '#ffffff' } },
  ],

  // === HERO LAYOUTS ===
  'hero-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ],
  'hero-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ],
  'hero-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ],
  'hero-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#64748b', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ],
  'hero-05': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '56px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ],
  'hero-06': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ],
  'hero-07': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#64748b', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ],
  'hero-08': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'left', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ],

  // === ABOUT LAYOUTS ===
  'about-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'about-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8' } },
    { id: 'button-1', type: 'button', props: { label: 'Learn More', href: '#', variant: 'primary', size: 'medium', background: '#4f46e5', color: '#ffffff' } },
  ],
  'about-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'about-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#cbd5e1', align: 'center', lineHeight: '1.8' } },
  ],

  // === SERVICES LAYOUTS ===
  'services-01': [
    { id: 'svc1-heading', type: 'heading', props: { content: 'Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc1-subtext', type: 'text', props: { content: 'Solusi terbaik yang kami sediakan untuk pertumbuhan bisnis Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc1-card-1', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc1-c1-icon', type: 'icon', props: { icon: 'FaRocket', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc1-c1-title', type: 'heading', props: { content: 'Konsultasi Bisnis', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc1-c1-desc', type: 'text', props: { content: 'Panduan strategis dari para ahli berpengalaman untuk membantu bisnis Anda berkembang pesat.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc1-card-2', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc1-c2-icon', type: 'icon', props: { icon: 'FaCogs', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc1-c2-title', type: 'heading', props: { content: 'Implementasi Sistem', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc1-c2-desc', type: 'text', props: { content: 'Integrasi teknologi mutakhir yang seamless dan terukur sesuai kebutuhan unik Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc1-card-3', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc1-c3-icon', type: 'icon', props: { icon: 'FaHeadset', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc1-c3-title', type: 'heading', props: { content: 'Dukungan 24/7', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc1-c3-desc', type: 'text', props: { content: 'Tim dukungan teknis siap membantu Anda kapanpun dan dimanapun Anda membutuhkan.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'services-02': [
    { id: 'svc2-heading', type: 'heading', props: { content: 'Layanan Unggulan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc2-subtext', type: 'text', props: { content: 'Kami menyediakan layanan terbaik untuk kebutuhan bisnis Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc2-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc2-c1-icon', type: 'icon', props: { icon: 'FaChartLine', size: '36px', color: '#4f46e5', align: 'center' } },
      { id: 'svc2-c1-title', type: 'heading', props: { content: 'Analitik & Laporan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc2-c1-desc', type: 'text', props: { content: 'Dashboard analitik real-time untuk memantau kinerja bisnis secara komprehensif.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'svc2-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc2-c2-icon', type: 'icon', props: { icon: 'FaCloud', size: '36px', color: '#4f46e5', align: 'center' } },
      { id: 'svc2-c2-title', type: 'heading', props: { content: 'Cloud Solution', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc2-c2-desc', type: 'text', props: { content: 'Infrastruktur cloud yang scalable, aman, dan berperforma tinggi untuk bisnis masa kini.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'svc2-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc2-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '36px', color: '#4f46e5', align: 'center' } },
      { id: 'svc2-c3-title', type: 'heading', props: { content: 'Keamanan Data', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc2-c3-desc', type: 'text', props: { content: 'Proteksi data berlapis dengan enkripsi dan protokol keamanan standar industri.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'services-03': [
    { id: 'svc3-heading', type: 'heading', props: { content: 'Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc3-subtext', type: 'text', props: { content: 'Solusi profesional untuk setiap kebutuhan bisnis Anda', fontSize: '16px', color: '#e0e7ff', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc3-card-1', type: 'card', props: { variant: 'feature', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'svc3-c1-icon', type: 'icon', props: { icon: 'FaBolt', size: '36px', color: '#ffffff', align: 'center' } },
      { id: 'svc3-c1-title', type: 'heading', props: { content: 'Layanan Cepat', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc3-c1-desc', type: 'text', props: { content: 'Eksekusi layanan dengan kecepatan dan ketepatan tanpa mengorbankan kualitas terbaik.', fontSize: '14px', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'svc3-card-2', type: 'card', props: { variant: 'feature', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'svc3-c2-icon', type: 'icon', props: { icon: 'FaUserTie', size: '36px', color: '#ffffff', align: 'center' } },
      { id: 'svc3-c2-title', type: 'heading', props: { content: 'Tim Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc3-c2-desc', type: 'text', props: { content: 'Tenaga ahli berpengalaman yang siap memberikan solusi terbaik bagi bisnis Anda.', fontSize: '14px', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'svc3-card-3', type: 'card', props: { variant: 'feature', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'svc3-c3-icon', type: 'icon', props: { icon: 'FaStar', size: '36px', color: '#ffffff', align: 'center' } },
      { id: 'svc3-c3-title', type: 'heading', props: { content: 'Kualitas Premium', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc3-c3-desc', type: 'text', props: { content: 'Standar kualitas premium di setiap aspek layanan yang kami hadirkan untuk Anda.', fontSize: '14px', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
  ],
  'services-04': [
    { id: 'svc4-heading', type: 'heading', props: { content: 'Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc4-subtext', type: 'text', props: { content: 'Layanan profesional yang telah dipercaya ribuan klien di seluruh Indonesia', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc4-card-1', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc4-c1-icon', type: 'icon', props: { icon: 'FaCode', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc4-c1-title', type: 'heading', props: { content: 'Pengembangan Software', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc4-c1-desc', type: 'text', props: { content: 'Pembangunan aplikasi web dan mobile custom sesuai kebutuhan bisnis Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc4-card-2', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc4-c2-icon', type: 'icon', props: { icon: 'FaPaintBrush', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc4-c2-title', type: 'heading', props: { content: 'Desain UI/UX', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc4-c2-desc', type: 'text', props: { content: 'Desain antarmuka yang indah, intuitif, dan berpusat pada pengalaman pengguna.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc4-card-3', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc4-c3-icon', type: 'icon', props: { icon: 'FaSearchDollar', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc4-c3-title', type: 'heading', props: { content: 'Digital Marketing', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc4-c3-desc', type: 'text', props: { content: 'Strategi pemasaran digital yang terukur untuk meningkatkan pertumbuhan bisnis Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],

  // === GALLERY LAYOUTS ===
  'gallery-01': [
    { id: 'gal1-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal1-subtext', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'gal1-img-1', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#c7d2fe,#a5b4fc)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img1-image', type: 'image', props: { src: '', alt: 'Foto Galeri 1', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-2', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#ddd6fe,#c4b5fd)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img2-image', type: 'image', props: { src: '', alt: 'Foto Galeri 2', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-3', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img3-image', type: 'image', props: { src: '', alt: 'Foto Galeri 3', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-4', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#f0fdf4,#bbf7d0)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img4-image', type: 'image', props: { src: '', alt: 'Foto Galeri 4', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-5', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#fef9c3,#fef08a)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img5-image', type: 'image', props: { src: '', alt: 'Foto Galeri 5', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-6', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#fce7f3,#fbcfe8)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img6-image', type: 'image', props: { src: '', alt: 'Foto Galeri 6', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
  ],
  'gallery-02': [
    { id: 'gal2-heading', type: 'heading', props: { content: 'Galeri Portfolio & Proyek', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal2-subtext', type: 'text', props: { content: 'Kumpulan foto hasil karya dan portofolio proyek unggulan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'gal2-img-1', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img1-image', type: 'image', props: { src: '', alt: 'Proyek 1', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-2', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img2-image', type: 'image', props: { src: '', alt: 'Proyek 2', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-3', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img3-image', type: 'image', props: { src: '', alt: 'Proyek 3', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-4', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img4-image', type: 'image', props: { src: '', alt: 'Proyek 4', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-5', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img5-image', type: 'image', props: { src: '', alt: 'Proyek 5', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-6', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img6-image', type: 'image', props: { src: '', alt: 'Proyek 6', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-7', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img7-image', type: 'image', props: { src: '', alt: 'Proyek 7', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-8', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img8-image', type: 'image', props: { src: '', alt: 'Proyek 8', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
  ],
  'gallery-03': [
    { id: 'gal3-heading', type: 'heading', props: { content: 'Galeri Eksklusif', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal3-subtext', type: 'text', props: { content: 'Dokumentasi visual proyek eksklusif dan pencapaian bermakna kami', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 48px 0' } },
    { id: 'gal3-img-1', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img1-image', type: 'image', props: { src: '', alt: 'Eksklusif 1', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-2', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img2-image', type: 'image', props: { src: '', alt: 'Eksklusif 2', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-3', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img3-image', type: 'image', props: { src: '', alt: 'Eksklusif 3', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-4', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img4-image', type: 'image', props: { src: '', alt: 'Eksklusif 4', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-5', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img5-image', type: 'image', props: { src: '', alt: 'Eksklusif 5', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-6', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img6-image', type: 'image', props: { src: '', alt: 'Eksklusif 6', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
  ],
  'gallery-04': [
    { id: 'gal4-heading', type: 'heading', props: { content: 'Galeri Aktivitas & Acara', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal4-subtext', type: 'text', props: { content: 'Momen-momen berharga dari berbagai event dan aktivitas kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'gal4-img-1', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img1-image', type: 'image', props: { src: '', alt: 'Acara 1', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-2', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img2-image', type: 'image', props: { src: '', alt: 'Acara 2', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-3', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img3-image', type: 'image', props: { src: '', alt: 'Acara 3', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-4', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img4-image', type: 'image', props: { src: '', alt: 'Acara 4', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-5', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img5-image', type: 'image', props: { src: '', alt: 'Acara 5', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-6', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img6-image', type: 'image', props: { src: '', alt: 'Acara 6', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-7', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img7-image', type: 'image', props: { src: '', alt: 'Acara 7', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-8', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img8-image', type: 'image', props: { src: '', alt: 'Acara 8', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
  ],

  // === CONTACT LAYOUTS ===
  'contact-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 32px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Email: hello@company.com', fontSize: '16px', color: '#64748b', align: 'center' } },
    { id: 'text-2', type: 'text', props: { content: 'Phone: +62 123 456 789', fontSize: '16px', color: '#64748b', align: 'center' } },
  ],
  'contact-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Get in touch with us', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ],
  'contact-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Get in touch with us', fontSize: '16px', color: '#cbd5e1', align: 'center', margin: '0 0 32px 0' } },
  ],

  // === FOOTER LAYOUTS ===
  'footer-01': [
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    { id: 'social-1', type: 'social', props: { platforms: ['facebook', 'twitter', 'linkedin'], size: 'medium' } },
  ],
  'footer-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Company Name', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'left' } },
  ],
  'footer-03': [
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    { id: 'social-1', type: 'social', props: { platforms: ['facebook', 'twitter', 'linkedin'], size: 'medium' } },
  ],
  'footer-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'Company Name', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'left' } },
  ],

  // === SINGLE LAYOUTS ===
  'statistics-01': [
    { id: 'stat1-heading', type: 'heading', props: { content: 'Statistik & Pencapaian', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'stat1-subtext', type: 'text', props: { content: 'Angka yang mencerminkan kepercayaan dan keunggulan layanan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'stat1-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c1-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c1-label', type: 'text', props: { content: 'Negara Jangkauan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c2-value', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c2-label', type: 'text', props: { content: 'Klien Terpercaya', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c3-value', type: 'heading', props: { content: '10K+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c3-label', type: 'text', props: { content: 'Pengiriman Selesai', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c4-value', type: 'heading', props: { content: '99%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c4-label', type: 'text', props: { content: 'Tingkat Kepuasan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
  ],
  'fleet-01': [
    { id: 'flt1-heading', type: 'heading', props: { content: 'Armada & Fasilitas Transportasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'flt1-subtext', type: 'text', props: { content: 'Armada angkutan darat, laut, dan udara siap melayani kebutuhan pengiriman barang', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'flt1-card-1', type: 'card', props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'flt1-c1-icon', type: 'icon', props: { icon: 'FaTruck', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'flt1-c1-title', type: 'heading', props: { content: 'Truk Tronton & Container', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
      { id: 'flt1-c1-desc', type: 'text', props: { content: 'Armada angkutan berat antar kota dan pulau berfasilitas GPS tracking realtime.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'flt1-card-2', type: 'card', props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'flt1-c2-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#4f46e5', align: 'left' } },
      { id: 'flt1-c2-title', type: 'heading', props: { content: 'Kapal Kargo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
      { id: 'flt1-c2-desc', type: 'text', props: { content: 'Layanan kontainer laut efisien untuk muatan besar ke pelabuhan Nusantara.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'flt1-card-3', type: 'card', props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'flt1-c3-icon', type: 'icon', props: { icon: 'FaPlane', size: '32px', color: '#4f46e5', align: 'left' } },
      { id: 'flt1-c3-title', type: 'heading', props: { content: 'Air Cargo Express', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
      { id: 'flt1-c3-desc', type: 'text', props: { content: 'Pengiriman kilat udara sampai di hari yang sama ke kota-kota besar.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'coverage-01': [
    { id: 'cov1-heading', type: 'heading', props: { content: 'Jangkauan Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cov1-subtext', type: 'text', props: { content: 'Melayani pengiriman ke seluruh wilayah Indonesia dan berbagai kota di Asia Tenggara', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cov1-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cov1-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cov1-c1-title', type: 'heading', props: { content: 'Jawa & Bali', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
      { id: 'cov1-c1-desc', type: 'text', props: { content: 'Layanan ekspres ke 200+ kota dan kabupaten se-pulau Jawa dan Bali.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cov1-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cov1-c2-icon', type: 'icon', props: { icon: 'FaGlobe', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cov1-c2-title', type: 'heading', props: { content: 'Sumatera & Kalimantan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
      { id: 'cov1-c2-desc', type: 'text', props: { content: 'Jaringan logistik menyeluruh ke seluruh penjuru Sumatera dan Kalimantan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cov1-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cov1-c3-icon', type: 'icon', props: { icon: 'FaGlobeAsia', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cov1-c3-title', type: 'heading', props: { content: 'Indonesia Timur', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
      { id: 'cov1-c3-desc', type: 'text', props: { content: 'Pengiriman ke Sulawesi, Maluku, NTT, NTB, Papua dan sekitarnya.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'clients-01': [
    { id: 'cli1-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli1-subtext', type: 'text', props: { content: 'Bergabung bersama ratusan perusahaan terkemuka yang telah mempercayakan kebutuhan mereka kepada kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cli1-card-1', type: 'card', props: { variant: 'client', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cli1-c1-logo', type: 'image', props: { src: '', alt: 'Logo Klien 1', width: '80px', height: '40px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli1-c1-name', type: 'heading', props: { content: 'PT Pertamina', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli1-card-2', type: 'card', props: { variant: 'client', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cli1-c2-logo', type: 'image', props: { src: '', alt: 'Logo Klien 2', width: '80px', height: '40px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli1-c2-name', type: 'heading', props: { content: 'Bank Mandiri', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli1-card-3', type: 'card', props: { variant: 'client', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cli1-c3-logo', type: 'image', props: { src: '', alt: 'Logo Klien 3', width: '80px', height: '40px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli1-c3-name', type: 'heading', props: { content: 'Telkom Indonesia', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli1-card-4', type: 'card', props: { variant: 'client', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cli1-c4-logo', type: 'image', props: { src: '', alt: 'Logo Klien 4', width: '80px', height: '40px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli1-c4-name', type: 'heading', props: { content: 'BRI', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
  ],
  'programs-01': [
    { id: 'prg1-badge', type: 'badge', props: { content: 'Program Studi', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prg1-heading', type: 'heading', props: { content: 'Program Akademik Unggulan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prg1-subtext', type: 'text', props: { content: 'Pilih jalur pendidikan terbaik yang sesuai dengan cita-cita dan karir Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'prg1-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'prg1-c1-icon', type: 'icon', props: { icon: 'FaGraduationCap', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'prg1-c1-title', type: 'heading', props: { content: 'Sarjana (S1)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'prg1-c1-desc', type: 'text', props: { content: 'Program sarjana 4 tahun dengan kurikulum berbasis kompetensi dan sertifikasi profesional.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
      { id: 'prg1-c1-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'prg1-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'prg1-c2-icon', type: 'icon', props: { icon: 'FaUniversity', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'prg1-c2-title', type: 'heading', props: { content: 'Magister (S2)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'prg1-c2-desc', type: 'text', props: { content: 'Program magister 2 tahun dengan fokus penelitian terapan dan kemitraan industri global.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
      { id: 'prg1-c2-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'prg1-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'prg1-c3-icon', type: 'icon', props: { icon: 'FaMicroscope', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'prg1-c3-title', type: 'heading', props: { content: 'Doktor (S3)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'prg1-c3-desc', type: 'text', props: { content: 'Program doktor riset mendalam dengan laboratorium riset berstandar internasional.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
      { id: 'prg1-c3-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
    ]},
  ],
  'teachers-01': [
    { id: 'tch1-badge', type: 'badge', props: { content: 'Tenaga Pengajar', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tch1-heading', type: 'heading', props: { content: 'Dosen & Instruktur Berpengalaman', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tch1-subtext', type: 'text', props: { content: 'Didukung oleh akademisi dan praktisi terbaik dari dalam dan luar negeri', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'tch1-card-1', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tch1-c1-avatar', type: 'image', props: { src: '', alt: 'Dr. Ahmad Fauzi', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tch1-c1-name', type: 'heading', props: { content: 'Dr. Ahmad Fauzi', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tch1-c1-role', type: 'text', props: { content: 'Kepala Program Teknik Informatika', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
      { id: 'tch1-c1-desc', type: 'text', props: { content: 'Ph.D dari MIT, 15 tahun pengalaman riset AI dan Machine Learning.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tch1-card-2', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tch1-c2-avatar', type: 'image', props: { src: '', alt: 'Prof. Siti Rahayu', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tch1-c2-name', type: 'heading', props: { content: 'Prof. Siti Rahayu', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tch1-c2-role', type: 'text', props: { content: 'Guru Besar Ekonomi Manajemen', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
      { id: 'tch1-c2-desc', type: 'text', props: { content: 'Konsultan senior Bank Indonesia, penulis 3 buku manajemen keuangan.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tch1-card-3', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tch1-c3-avatar', type: 'image', props: { src: '', alt: 'Dr. Reza Mahendra', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tch1-c3-name', type: 'heading', props: { content: 'Dr. Reza Mahendra', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tch1-c3-role', type: 'text', props: { content: 'Dosen Hukum Bisnis Internasional', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
      { id: 'tch1-c3-desc', type: 'text', props: { content: 'Advokat senior, 12 tahun pengalaman hukum bisnis internasional di Asia.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tch1-card-4', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tch1-c4-avatar', type: 'image', props: { src: '', alt: 'Prof. Linda Kartika', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tch1-c4-name', type: 'heading', props: { content: 'Prof. Linda Kartika', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tch1-c4-role', type: 'text', props: { content: 'Koordinator Jurusan Desain Komunikasi', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
      { id: 'tch1-c4-desc', type: 'text', props: { content: 'Creative Director berpengalaman 18 tahun di industri periklanan global.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'facilities-01': [
    { id: 'fac1-heading', type: 'heading', props: { content: 'Fasilitas Kampus Kelas Dunia', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'fac1-subtext', type: 'text', props: { content: 'Lingkungan belajar modern yang mendukung inovasi dan kreativitas mahasiswa', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'fac1-card-1', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'fac1-c1-icon', type: 'icon', props: { icon: 'FaBook', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'fac1-c1-title', type: 'heading', props: { content: 'Perpustakaan Digital', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'fac1-c1-desc', type: 'text', props: { content: 'Koleksi lebih dari 50.000 jurnal dan buku digital terakreditasi internasional.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'fac1-card-2', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'fac1-c2-icon', type: 'icon', props: { icon: 'FaFlask', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'fac1-c2-title', type: 'heading', props: { content: 'Laboratorium Riset', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'fac1-c2-desc', type: 'text', props: { content: 'Fasilitas laboratorium canggih untuk riset sains, teknologi, dan rekayasa.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'fac1-card-3', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'fac1-c3-icon', type: 'icon', props: { icon: 'FaRunning', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'fac1-c3-title', type: 'heading', props: { content: 'Pusat Olahraga', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'fac1-c3-desc', type: 'text', props: { content: 'Kompleks olahraga indoor & outdoor lengkap untuk aktivitas fisik mahasiswa.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'achievements-01': [
    { id: 'ach1-heading', type: 'heading', props: { content: 'Pencapaian Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ach1-subtext', type: 'text', props: { content: 'Angka yang berbicara tentang komitmen dan dedikasi kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'ach1-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'ach1-c1-value', type: 'heading', props: { content: '100+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'ach1-c1-label', type: 'text', props: { content: 'Penghargaan Nasional', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'ach1-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'ach1-c2-value', type: 'heading', props: { content: '5.000+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'ach1-c2-label', type: 'text', props: { content: 'Alumni Sukses', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'ach1-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'ach1-c3-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'ach1-c3-label', type: 'text', props: { content: 'Tahun Berpengalaman', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'ach1-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'ach1-c4-value', type: 'heading', props: { content: '98%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'ach1-c4-label', type: 'text', props: { content: 'Tingkat Keberhasilan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
  ],
  'registration-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Pendaftaran Mahasiswa', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Daftarkan diri Anda sekarang untuk tahun akademik mendatang', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ],
  'products-01': [
    { id: 'prod1-badge', type: 'badge', props: { content: 'Produk Unggulan', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod1-heading', type: 'heading', props: { content: 'Produk & Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod1-subtext', type: 'text', props: { content: 'Solusi inovatif yang dirancang khusus untuk kebutuhan bisnis modern Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'prod1-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod1-c1-image', type: 'image', props: { src: '', alt: 'Produk Enterprise', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod1-c1-title', type: 'heading', props: { content: 'DataSoft Enterprise', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod1-c1-desc', type: 'text', props: { content: 'Sistem manajemen bisnis terintegrasi untuk perusahaan skala besar.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
      { id: 'prod1-c1-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
    ]},
    { id: 'prod1-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod1-c2-image', type: 'image', props: { src: '', alt: 'Produk UMKM', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod1-c2-title', type: 'heading', props: { content: 'DataSoft UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod1-c2-desc', type: 'text', props: { content: 'Platform kasir dan stok digital yang mudah digunakan untuk UMKM.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
      { id: 'prod1-c2-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
    ]},
    { id: 'prod1-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod1-c3-image', type: 'image', props: { src: '', alt: 'Produk Akademik', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod1-c3-title', type: 'heading', props: { content: 'DataSoft Akademik', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod1-c3-desc', type: 'text', props: { content: 'Sistem informasi manajemen akademik lengkap untuk kampus dan sekolah.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
      { id: 'prod1-c3-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
    ]},
  ],
  'certifications-01': [
    { id: 'cert1-heading', type: 'heading', props: { content: 'Sertifikasi & Akreditasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cert1-subtext', type: 'text', props: { content: 'Diakui dan tersertifikasi oleh lembaga standar mutu nasional dan internasional', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cert1-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'cert1-c1-icon', type: 'icon', props: { icon: 'FaMedal', size: '40px', color: '#f59e0b', align: 'center' } },
      { id: 'cert1-c1-title', type: 'heading', props: { content: 'ISO 9001:2015', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'cert1-c1-desc', type: 'text', props: { content: 'Sistem Manajemen Mutu berstandar internasional untuk layanan pendidikan terbaik.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cert1-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'cert1-c2-icon', type: 'icon', props: { icon: 'FaLeaf', size: '40px', color: '#10b981', align: 'center' } },
      { id: 'cert1-c2-title', type: 'heading', props: { content: 'ISO 14001:2015', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'cert1-c2-desc', type: 'text', props: { content: 'Sistem Manajemen Lingkungan untuk kampus ramah lingkungan dan berkelanjutan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cert1-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'cert1-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '40px', color: '#3b82f6', align: 'center' } },
      { id: 'cert1-c3-title', type: 'heading', props: { content: 'OHSAS 18001', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'cert1-c3-desc', type: 'text', props: { content: 'Standar Kesehatan dan Keselamatan Kerja untuk lingkungan kampus yang aman.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'vision-01': [
    { id: 'badge-1', type: 'badge', props: { content: 'Our Vision', variant: 'primary', size: 'medium' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Our Vision', level: 'h2', fontSize: '36px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'To be the leading company in our industry, delivering innovative solutions that transform the way people live and work.', fontSize: '18px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'mission-01': [
    { id: 'badge-1', type: 'badge', props: { content: 'Our Mission', variant: 'secondary', size: 'medium' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Our Mission', level: 'h2', fontSize: '36px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'To provide exceptional value to our customers through quality products, dedicated service, and continuous innovation.', fontSize: '18px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'timeline-01': [
    { id: 'tml1-badge', type: 'badge', props: { content: 'PERJALANAN KAMI', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml1-heading', type: 'heading', props: { content: 'Jejak Langkah & Sejarah', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml1-subtext', type: 'text', props: { content: 'Perjalanan panjang kami dalam membangun solusi terbaik dari masa ke masa', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'tml1-card-1', type: 'card', props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tml1-c1-year', type: 'badge', props: { content: '2015', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
      { id: 'tml1-c1-title', type: 'heading', props: { content: 'Perusahaan Didirikan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
      { id: 'tml1-c1-desc', type: 'text', props: { content: 'Berawal dari 3 pendiri dengan visi besar menyediakan solusi teknologi tepercaya.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'tml1-card-2', type: 'card', props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tml1-c2-year', type: 'badge', props: { content: '2018', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
      { id: 'tml1-c2-title', type: 'heading', props: { content: 'Ekspansi Nasional', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
      { id: 'tml1-c2-desc', type: 'text', props: { content: 'Membuka cabang di 5 kota besar dan melayani lebih dari 100 perusahaan.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'tml1-card-3', type: 'card', props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tml1-c3-year', type: 'badge', props: { content: '2021', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
      { id: 'tml1-c3-title', type: 'heading', props: { content: 'Inovasi Cloud Enterprise', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
      { id: 'tml1-c3-desc', type: 'text', props: { content: 'Peluncuran platform cloud enterprise generasi baru berbasis otomasi AI.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'tml1-card-4', type: 'card', props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tml1-c4-year', type: 'badge', props: { content: '2024', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
      { id: 'tml1-c4-title', type: 'heading', props: { content: 'Pemimpin Pasar Industri', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
      { id: 'tml1-c4-desc', type: 'text', props: { content: 'Diakui sebagai penyedia solusi terdepan dengan kepuasan pelanggan 99%.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'team-01': [
    { id: 'tm1-heading', type: 'heading', props: { content: 'Tim Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tm1-subtext', type: 'text', props: { content: 'Didukung oleh tim profesional berpengalaman yang berdedikasi untuk kesuksesan Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'tm1-card-1', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'tm1-c1-avatar', type: 'image', props: { src: '', alt: 'Ahmad Santoso', width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tm1-c1-name', type: 'heading', props: { content: 'Ahmad Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tm1-c1-role', type: 'text', props: { content: 'CEO & Co-Founder', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 10px 0' } },
      { id: 'tm1-c1-desc', type: 'text', props: { content: '15 tahun pengalaman di industri teknologi dan manajemen perusahaan global.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tm1-card-2', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'tm1-c2-avatar', type: 'image', props: { src: '', alt: 'Siti Rahayu', width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tm1-c2-name', type: 'heading', props: { content: 'Siti Rahayu', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tm1-c2-role', type: 'text', props: { content: 'CTO & Head of Engineering', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 10px 0' } },
      { id: 'tm1-c2-desc', type: 'text', props: { content: 'Insinyur senior dengan keahlian cloud architecture dan sistem distributed skala besar.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tm1-card-3', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'tm1-c3-avatar', type: 'image', props: { src: '', alt: 'Budi Hartono', width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tm1-c3-name', type: 'heading', props: { content: 'Budi Hartono', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tm1-c3-role', type: 'text', props: { content: 'CMO & Head of Marketing', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 10px 0' } },
      { id: 'tm1-c3-desc', type: 'text', props: { content: 'Pakar pemasaran digital dengan rekam jejak pertumbuhan brand nasional dan internasional.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tm1-card-4', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'tm1-c4-avatar', type: 'image', props: { src: '', alt: 'Diana Kusuma', width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tm1-c4-name', type: 'heading', props: { content: 'Diana Kusuma', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tm1-c4-role', type: 'text', props: { content: 'CFO & Financial Director', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 10px 0' } },
      { id: 'tm1-c4-desc', type: 'text', props: { content: 'Ahli keuangan dengan pengalaman IPO dan fund management perusahaan teknologi.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],

  // === TESTIMONIALS ===
  'testimonials-01': [
    { id: 'test1-heading', type: 'heading', props: { content: 'Apa Kata Klien Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'test1-subtext', type: 'text', props: { content: 'Testimoni nyata dari pelanggan yang telah mempercayakan bisnis mereka kepada kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'test1-card-1', type: 'card', props: { variant: 'testimonial', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c1-icon', type: 'icon', props: { icon: 'FaQuoteLeft', size: '24px', color: '#4f46e5', align: 'left' } },
      { id: 'test1-c1-text', type: 'text', props: { content: '"Layanan yang sangat profesional dan responsif. Tim mereka benar-benar memahami kebutuhan bisnis kami dan memberikan solusi tepat sasaran."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
      { id: 'test1-c1-avatar', type: 'image', props: { src: '', alt: 'Rini Susanti', width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' } },
      { id: 'test1-c1-name', type: 'heading', props: { content: 'Rini Susanti', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c1-role', type: 'text', props: { content: 'Direktur Operasional, PT Maju Bersama', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'test1-card-2', type: 'card', props: { variant: 'testimonial', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c2-icon', type: 'icon', props: { icon: 'FaQuoteLeft', size: '24px', color: '#4f46e5', align: 'left' } },
      { id: 'test1-c2-text', type: 'text', props: { content: '"Implementasi sistem berlangsung sangat cepat dan hasilnya luar biasa. Produktivitas tim kami meningkat 40% dalam waktu 3 bulan pertama."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
      { id: 'test1-c2-avatar', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' } },
      { id: 'test1-c2-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c2-role', type: 'text', props: { content: 'CEO, CV Karya Mandiri', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'test1-card-3', type: 'card', props: { variant: 'testimonial', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c3-icon', type: 'icon', props: { icon: 'FaQuoteLeft', size: '24px', color: '#4f46e5', align: 'left' } },
      { id: 'test1-c3-text', type: 'text', props: { content: '"Dukungan teknis 24/7 yang mereka berikan benar-benar membuat kami tenang. Isu diselesaikan dalam hitungan menit, bukan jam."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
      { id: 'test1-c3-avatar', type: 'image', props: { src: '', alt: 'Maya Putri', width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' } },
      { id: 'test1-c3-name', type: 'heading', props: { content: 'Maya Putri', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c3-role', type: 'text', props: { content: 'IT Manager, Koperasi Mandiri Sejahtera', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
  ],

  // === STATISTICS EXTENDED ===
  'statistics-02': [
    { id: 'stat2-heading', type: 'heading', props: { content: 'Dampak \u0026 Pencapaian', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'stat2-subtext', type: 'text', props: { content: 'Angka yang membuktikan komitmen kami terhadap kualitas dan kepuasan pelanggan', fontSize: '16px', color: '#e0e7ff', align: 'center', margin: '0 0 48px 0' } },
    { id: 'stat2-card-1', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat2-c1-value', type: 'heading', props: { content: '10K+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat2-c1-label', type: 'text', props: { content: 'Pelanggan Aktif', fontSize: '15px', fontWeight: '600', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'stat2-card-2', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat2-c2-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat2-c2-label', type: 'text', props: { content: 'Kota Layanan', fontSize: '15px', fontWeight: '600', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'stat2-card-3', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat2-c3-value', type: 'heading', props: { content: '98%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat2-c3-label', type: 'text', props: { content: 'Tingkat Kepuasan', fontSize: '15px', fontWeight: '600', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'stat2-card-4', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat2-c4-value', type: 'heading', props: { content: '24/7', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat2-c4-label', type: 'text', props: { content: 'Dukungan Teknis', fontSize: '15px', fontWeight: '600', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
  ],

  // === CLIENTS EXTENDED ===
  'clients-02': [
    { id: 'cli2-heading', type: 'heading', props: { content: 'Mitra \u0026 Rekanan Bisnis', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli2-subtext', type: 'text', props: { content: 'Jaringan kemitraan strategis dengan perusahaan-perusahaan terkemuka di Indonesia', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cli2-card-1', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c1-logo', type: 'image', props: { src: '', alt: 'Mitra 1', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c1-name', type: 'heading', props: { content: 'PT PLN (Persero)', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-2', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c2-logo', type: 'image', props: { src: '', alt: 'Mitra 2', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c2-name', type: 'heading', props: { content: 'Garuda Indonesia', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-3', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c3-logo', type: 'image', props: { src: '', alt: 'Mitra 3', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c3-name', type: 'heading', props: { content: 'Astra International', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-4', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c4-logo', type: 'image', props: { src: '', alt: 'Mitra 4', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c4-name', type: 'heading', props: { content: 'Bank Central Asia', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-5', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c5-logo', type: 'image', props: { src: '', alt: 'Mitra 5', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c5-name', type: 'heading', props: { content: 'Unilever Indonesia', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-6', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c6-logo', type: 'image', props: { src: '', alt: 'Mitra 6', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c6-name', type: 'heading', props: { content: 'Indofood Group', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
  ],

  // === PRODUCTS EXTENDED ===
  'products-02': [
    { id: 'prod2-heading', type: 'heading', props: { content: 'Katalog Produk', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod2-subtext', type: 'text', props: { content: 'Temukan produk terbaik yang sesuai dengan kebutuhan dan anggaran Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'prod2-card-1', type: 'card', props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod2-c1-badge', type: 'badge', props: { content: 'Terlaris', background: '#fef3c7', color: '#d97706', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '600', margin: '12px 0 0 12px' } },
      { id: 'prod2-c1-image', type: 'image', props: { src: '', alt: 'Produk 1', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod2-c1-title', type: 'heading', props: { content: 'Produk Unggulan A', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#4f46e5', margin: '8px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c1-desc', type: 'text', props: { content: 'Solusi terbaik untuk kebutuhan bisnis Anda dengan fitur-fitur canggih.', fontSize: '13px', color: '#64748b', margin: '6px 0 20px 0', padding: '0 20px' } },
    ]},
    { id: 'prod2-card-2', type: 'card', props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod2-c2-badge', type: 'badge', props: { content: 'Baru', background: '#dbeafe', color: '#1d4ed8', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '600', margin: '12px 0 0 12px' } },
      { id: 'prod2-c2-image', type: 'image', props: { src: '', alt: 'Produk 2', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod2-c2-title', type: 'heading', props: { content: 'Produk Premium B', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c2-price', type: 'heading', props: { content: 'Rp 4.750.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#4f46e5', margin: '8px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c2-desc', type: 'text', props: { content: 'Paket premium dengan fitur eksklusif dan dukungan prioritas untuk bisnis Anda.', fontSize: '13px', color: '#64748b', margin: '6px 0 20px 0', padding: '0 20px' } },
    ]},
    { id: 'prod2-card-3', type: 'card', props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod2-c3-image', type: 'image', props: { src: '', alt: 'Produk 3', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod2-c3-title', type: 'heading', props: { content: 'Produk Starter C', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c3-price', type: 'heading', props: { content: 'Rp 1.200.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#4f46e5', margin: '8px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c3-desc', type: 'text', props: { content: 'Pilihan tepat untuk bisnis yang baru berkembang dengan budget yang terjangkau.', fontSize: '13px', color: '#64748b', margin: '6px 0 20px 0', padding: '0 20px' } },
    ]},
  ],

  // === ADDITIONAL LAYOUTS ===
  'about-05': [
    { id: 'ab5-heading', type: 'heading', props: { content: 'Tentang Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ab5-subtext', type: 'text', props: { content: 'Mengenal lebih dekat visi, misi, dan perjalanan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'ab5-image', type: 'image', props: { src: '', alt: 'About Image', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' } },
    { id: 'ab5-text', type: 'text', props: { content: 'Kami adalah perusahaan yang berdedikasi untuk memberikan solusi terbaik kepada pelanggan kami. Dengan tim yang berpengalaman dan teknologi terkini, kami siap membantu bisnis Anda tumbuh dan berkembang.', fontSize: '16px', color: '#475569', lineHeight: '1.8', margin: '24px 0 0 0' } },
    { id: 'ab5-btn', type: 'button', props: { label: 'Pelajari Lebih Lanjut', href: '#', variant: 'primary', background: '#4f46e5', color: '#ffffff' } },
  ],

  'contact-04': [
    { id: 'cnt4-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cnt4-subtext', type: 'text', props: { content: 'Kami siap membantu Anda. Hubungi kami melalui berbagai saluran yang tersedia.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cnt4-card-1', type: 'card', props: { variant: 'contact', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cnt4-c1-icon', type: 'icon', props: { icon: 'FaPhone', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cnt4-c1-title', type: 'heading', props: { content: 'Telepon', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
      { id: 'cnt4-c1-text', type: 'text', props: { content: '+62 21 1234 5678', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cnt4-card-2', type: 'card', props: { variant: 'contact', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cnt4-c2-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cnt4-c2-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
      { id: 'cnt4-c2-text', type: 'text', props: { content: 'info@perusahaan.co.id', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cnt4-card-3', type: 'card', props: { variant: 'contact', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cnt4-c3-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cnt4-c3-title', type: 'heading', props: { content: 'Alamat', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
      { id: 'cnt4-c3-text', type: 'text', props: { content: 'Jl. Sudirman No. 88, Jakarta Selatan', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],

  'faq-01': [
    { id: 'faq1-badge', type: 'badge', props: { content: 'FAQ', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq1-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq1-subtext', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan dan calon mahasiswa kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'faq1-item-1', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [
      { id: 'faq1-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
      { id: 'faq1-i1-a', type: 'text', props: { content: 'Kami menyediakan solusi lengkap mulai dari konsultasi, implementasi sistem, hingga pelatihan dan dukungan purna jual yang komprehensif.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'faq1-item-2', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [
      { id: 'faq1-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi sistem?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
      { id: 'faq1-i2-a', type: 'text', props: { content: 'Waktu implementasi bervariasi antara 2-8 minggu tergantung skala dan kompleksitas kebutuhan bisnis Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'faq1-item-3', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [
      { id: 'faq1-i3-q', type: 'heading', props: { content: 'Apakah tersedia paket harga yang fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
      { id: 'faq1-i3-a', type: 'text', props: { content: 'Ya, kami menawarkan paket harga yang dapat disesuaikan mulai dari UMKM, perusahaan menengah, hingga enterprise berskala nasional.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'faq1-item-4', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [
      { id: 'faq1-i4-q', type: 'heading', props: { content: 'Bagaimana sistem dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
      { id: 'faq1-i4-a', type: 'text', props: { content: 'Kami menyediakan dukungan teknis 24/7 melalui live chat, email, dan telepon khusus dengan tim insinyur berpengalaman.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'pricing-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Pricing Plans', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'map-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
};

export const getLayoutDefaults = (layoutId) => {
  return LAYOUT_DEFAULTS[layoutId] || [];
};