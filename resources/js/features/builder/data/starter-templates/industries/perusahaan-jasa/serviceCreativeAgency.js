/**
 * Nexus Creative & Digital Innovation Studio
 * Exclusive Premium Starter Template untuk Agensi Kreatif, Desain Visual, & Produk Digital.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'service-creative-agency',
  name: 'Nexus Creative & Digital Studio',
  description: 'Template premium eksklusif ultra-modern dengan sentuhan neon violet-magenta untuk studio kreatif, agensi branding, rumah produksi digital, dan UI/UX design agency. Dilengkapi hero animasi grid 3D, 6 pilar kapabilitas kreatif bergradien, showcase portfolio interaktif, 4-tahap alur kerja transparan, 3-tier paket harga investasi, dan banner CTA konversi tinggi.',
  thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  tags: ['Creative Agency', 'Digital Studio', 'Branding', 'UI/UX Design', 'Web Development', 'Motion Graphics', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#7c3aed',
    secondaryColor: '#ec4899',
    accentColor: '#06b6d4',
    dark: true,
    surface: '#0a0612',
    text: '#ffffff',
    muted: '#94a3b8',
    border: '#2e1065',
    radius: '2xl',
    font: 'Plus Jakarta Sans, Outfit, sans-serif',
  },
  animations: ['fade-up', 'zoom-in', 'hover-lift', 'glow-pulse'],
  sections: [
    {
      id: 'sec-agency-nav',
      type: 'navbar',
      layout: 'service-nav-agency',
      components: [
        {
          id: 'ag-logo',
          type: 'heading',
          props: { content: 'NEXUS.STUDIO', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' },
        },
        {
          id: 'nav-ag1',
          type: 'button',
          props: { label: 'Layanan', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-ag2',
          type: 'button',
          props: { label: 'Portfolio', href: '#portfolio', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-ag3',
          type: 'button',
          props: { label: 'Proses', href: '#process', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-ag4',
          type: 'button',
          props: { label: 'Harga', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'cta-ag',
          type: 'button',
          props: { label: 'Mulai Proyek ✦', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-agency-hero',
      type: 'hero',
      layout: 'service-hero-agency',
      components: [
        {
          id: 'hero-badge',
          type: 'badge',
          props: { text: 'CREATIVE & DIGITAL INNOVATION LAB', variant: 'outline', background: 'rgba(236,72,153,0.15)', color: '#f472b6', borderColor: '#ec4899' },
        },
        {
          id: 'hero-title',
          type: 'heading',
          props: { content: 'Kami Menciptakan Identitas Brand & Pengalaman Digital Masa Depan', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'hero-desc',
          type: 'text',
          props: { content: 'Menggabungkan estetika visual kelas dunia, strategi storytelling memukau, dan rekayasa web modern untuk melipatgandakan valuasi brand Anda.', fontSize: '18px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'hero-btn-pri',
          type: 'button',
          props: { label: 'Eksplorasi Karya Kami ✦', href: '#portfolio', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '800' },
        },
        {
          id: 'hero-btn-sec',
          type: 'button',
          props: { label: 'Lihat Paket Harga', href: '#pricing', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.05)', color: '#ffffff', borderColor: '#a78bfa' },
        },
        { id: 'ag-hero-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80', alt: 'Nexus Studio Creative Work', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '0' } },
      ],
    },
    {
      id: 'sec-agency-services',
      type: 'services',
      layout: 'service-services-agency',
      components: [
        {
          id: 'srv-ag-badge',
          type: 'badge',
          props: { text: 'KEAHLIAN & LAYANAN KAMI', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#a78bfa', borderColor: '#7c3aed' },
        },
        {
          id: 'srv-ag-title',
          type: 'heading',
          props: { content: 'Layanan End-to-End untuk Pertumbuhan Eksponensial Brand', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'srv-ag-desc',
          type: 'text',
          props: { content: 'Dari konsep brand identity hingga website dengan performa tinggi, kami mengeksekusi setiap detail dengan presisi kreatif tertinggi.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'srv1-ag-title',
          type: 'heading',
          props: { content: 'Brand Strategy & Visual Identity', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv1-ag-desc',
          type: 'text',
          props: { content: 'Pondasi identitas brand yang kuat, guidelines visual komprehensif, typography khusus, dan narasi positioning pasar yang otentik.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv2-ag-title',
          type: 'heading',
          props: { content: 'UI/UX & Product Design', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv2-ag-desc',
          type: 'text',
          props: { content: 'Perancangan antarmuka digital yang intuitif, riset pengalaman pengguna, design system berskala besar, dan prototipe interaktif.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv3-ag-title',
          type: 'heading',
          props: { content: 'Web & Mobile App Development', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv3-ag-desc',
          type: 'text',
          props: { content: 'Pengembangan web mutakhir dengan React, Next.js, animasi 3D WebGL, integrasi API dinamis, dan kecepatan akses luar biasa.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv4-ag-title',
          type: 'heading',
          props: { content: '3D Motion & Visual Effects', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv4-ag-desc',
          type: 'text',
          props: { content: 'Animasi 3D memukau untuk kampanye promosi, aset interaktif website, visualisasi produk fotorealistis, dan explainer video bergengsi.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv5-ag-title',
          type: 'heading',
          props: { content: 'Growth Marketing & Social Media', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv5-ag-desc',
          type: 'text',
          props: { content: 'Strategi konten viral omnichannel, optimasi konversi (CRO), targeted performance ads, dan manajemen kampanye influencer skala regional.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv6-ag-title',
          type: 'heading',
          props: { content: 'Custom Creative Technology', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv6-ag-desc',
          type: 'text',
          props: { content: 'Pengembangan filter AR/VR imersif, microsite event interaktif dengan gamifikasi, dan integrasi AI generatif khusus brand.', fontSize: '14px', color: '#cbd5e1' },
        },
      ],
    },
    {
      id: 'sec-agency-portfolio',
      type: 'portfolio',
      layout: 'service-portfolio-agency',
      components: [
        {
          id: 'port-badge',
          type: 'badge',
          props: { text: 'PORTFOLIO KAMI', variant: 'outline', background: 'rgba(236,72,153,0.15)', color: '#f472b6', borderColor: '#ec4899' },
        },
        {
          id: 'port-title',
          type: 'heading',
          props: { content: 'Karya Terbaik yang Menghasilkan Dampak Nyata', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'port-desc',
          type: 'text',
          props: { content: 'Kami merancang identitas visual, kampanye digital, dan produk teknologi terobosan untuk brand terkemuka.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'port-item-img1',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', alt: 'FinVortex Global Rebranding', width: '100%', height: '280px', objectFit: 'cover' },
        },
        {
          id: 'port-item-title1',
          type: 'heading',
          props: { content: 'FinVortex Global Rebranding', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'port-item-desc1',
          type: 'text',
          props: { content: 'Transformasi brand fintech skala regional dengan peningkatan konversi 340%.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'port-item-tag1',
          type: 'badge',
          props: { text: 'Branding & UI/UX', variant: 'solid', background: '#7c3aed', color: '#ffffff' },
        },
        {
          id: 'port-item-img2',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', alt: 'Aura Lifestyle Mobile App', width: '100%', height: '280px', objectFit: 'cover' },
        },
        {
          id: 'port-item-title2',
          type: 'heading',
          props: { content: 'Aura Lifestyle Mobile App', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'port-item-desc2',
          type: 'text',
          props: { content: 'Aplikasi e-commerce gaya hidup dengan 1M+ active users dalam 6 bulan.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'port-item-tag2',
          type: 'badge',
          props: { text: 'App Development', variant: 'solid', background: '#ec4899', color: '#ffffff' },
        },
        {
          id: 'port-item-img3',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80', alt: 'CyberShield 3D Experience', width: '100%', height: '280px', objectFit: 'cover' },
        },
        {
          id: 'port-item-title3',
          type: 'heading',
          props: { content: 'CyberShield 3D Experience', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'port-item-desc3',
          type: 'text',
          props: { content: 'Website interaktif WebGL 3D pemenang penghargaan Awwwards Site of the Day.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'port-item-tag3',
          type: 'badge',
          props: { text: '3D Web Experience', variant: 'solid', background: '#06b6d4', color: '#042f2e' },
        },
        {
          id: 'port-item-img4',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', alt: 'Zenith Viral Social Campaign', width: '100%', height: '280px', objectFit: 'cover' },
        },
        {
          id: 'port-item-title4',
          type: 'heading',
          props: { content: 'Zenith Viral Social Campaign', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'port-item-desc4',
          type: 'text',
          props: { content: 'Kampanye digital lintas platform menjangkau 25 juta audiens muda di SEA.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'port-item-tag4',
          type: 'badge',
          props: { text: 'Digital Marketing', variant: 'solid', background: '#f59e0b', color: '#451a03' },
        },
        {
          id: 'port-cta-btn',
          type: 'button',
          props: { label: 'Lihat Semua Proyek ↗', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-agency-process',
      type: 'process',
      layout: 'service-process-agency',
      components: [
        {
          id: 'proc-badge',
          type: 'badge',
          props: { text: 'BAGAIMANA KAMI BEKERJA', variant: 'outline', background: 'rgba(124,58,237,0.15)', color: '#a78bfa', borderColor: '#7c3aed' },
        },
        {
          id: 'proc-title',
          type: 'heading',
          props: { content: 'Proses Kreatif yang Terstruktur & Berdampak', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'proc-desc',
          type: 'text',
          props: { content: 'Dari riset mendalam hingga peluncuran tanpa celah, metode kami menjamin hasil yang melampaui ekspektasi bisnis Anda.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'proc-step1-num',
          type: 'badge',
          props: { text: '01', variant: 'solid', background: '#7c3aed', color: '#ffffff' },
        },
        {
          id: 'proc-step1-title',
          type: 'heading',
          props: { content: 'Discovery & Research', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'proc-step1-desc',
          type: 'text',
          props: { content: 'Menganalisis lanskap pasar, persona audiens, kompetitor, serta tujuan objektif bisnis secara mendalam.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'proc-step2-num',
          type: 'badge',
          props: { text: '02', variant: 'solid', background: '#ec4899', color: '#ffffff' },
        },
        {
          id: 'proc-step2-title',
          type: 'heading',
          props: { content: 'Concept & Strategy', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'proc-step2-desc',
          type: 'text',
          props: { content: 'Merumuskan arah visual, moodboard, user journey, arsitektur informasi, serta positioning yang unik.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'proc-step3-num',
          type: 'badge',
          props: { text: '03', variant: 'solid', background: '#06b6d4', color: '#042f2e' },
        },
        {
          id: 'proc-step3-title',
          type: 'heading',
          props: { content: 'Design & Development', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'proc-step3-desc',
          type: 'text',
          props: { content: 'Eksekusi desain pixel-perfect, prototyping interaktif, serta coding performa tinggi dengan teknologi modern.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'proc-step4-num',
          type: 'badge',
          props: { text: '04', variant: 'solid', background: '#10b981', color: '#022c22' },
        },
        {
          id: 'proc-step4-title',
          type: 'heading',
          props: { content: 'Launch & Optimization', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'proc-step4-desc',
          type: 'text',
          props: { content: 'Pengujian menyeluruh (QA), deployment produksi, tracking analytics, dan evaluasi performa berkelanjutan.', fontSize: '14px', color: '#94a3b8' },
        },
      ],
    },
    {
      id: 'sec-agency-pricing',
      type: 'pricing',
      layout: 'service-pricing-agency',
      components: [
        {
          id: 'price-badge',
          type: 'badge',
          props: { text: 'PAKET & INVESTASI', variant: 'outline', background: 'rgba(236,72,153,0.15)', color: '#f472b6', borderColor: '#ec4899' },
        },
        {
          id: 'price-title',
          type: 'heading',
          props: { content: 'Investasi Terukur untuk Skala Bisnis Anda', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'price-desc',
          type: 'text',
          props: { content: 'Pilih paket yang paling sesuai dengan target pertumbuhan dan kebutuhan digital brand Anda.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'plan1-title',
          type: 'heading',
          props: { content: 'Startup Launch', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'plan1-price',
          type: 'heading',
          props: { content: 'Rp 25 Jt', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'plan1-desc',
          type: 'text',
          props: { content: 'Solusi esensial untuk bisnis baru yang ingin membangun reputasi kuat sejak hari pertama.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'plan1-btn',
          type: 'button',
          props: { label: 'Pilih Paket Startup', href: '#contact', variant: 'outline', size: 'medium', radius: 'xl', background: 'transparent', color: '#ffffff', borderColor: '#475569' },
        },
        {
          id: 'plan2-title',
          type: 'heading',
          props: { content: 'Growth Engine', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'plan2-price',
          type: 'heading',
          props: { content: 'Rp 65 Jt', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'plan2-desc',
          type: 'text',
          props: { content: 'Akselerasi penuh dengan kombinasi desain, sistem digital, dan kampanye terpadu.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'plan2-btn',
          type: 'button',
          props: { label: 'Pilih Growth Engine ★', href: '#contact', variant: 'primary', size: 'medium', radius: 'xl', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'plan3-title',
          type: 'heading',
          props: { content: 'Enterprise Custom', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'plan3-price',
          type: 'heading',
          props: { content: 'Custom Scope', level: 'h4', fontSize: '28px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'plan3-desc',
          type: 'text',
          props: { content: 'Dedicated multidisciplinary team untuk transformasi digital jangka panjang korporasi.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'plan3-btn',
          type: 'button',
          props: { label: 'Konsultasi Tim Ahli', href: '#contact', variant: 'outline', size: 'medium', radius: 'xl', background: 'transparent', color: '#ffffff', borderColor: '#475569' },
        },
      ],
    },
    {
      id: 'sec-agency-cta',
      type: 'cta',
      layout: 'service-cta-agency',
      components: [
        {
          id: 'cta-ag-badge',
          type: 'badge',
          props: { text: 'LET’S COLLABORATE', variant: 'outline', background: 'rgba(236,72,153,0.2)', color: '#f472b6', borderColor: '#ec4899' },
        },
        {
          id: 'cta-ag-title',
          type: 'heading',
          props: { content: 'Siap Mengubah Brand Anda Menjadi Market Leader?', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'cta-ag-desc',
          type: 'text',
          props: { content: 'Jadwalkan sesi brainstorming eksklusif 30 menit bersama Creative Director kami hari ini. Gratis tanpa komitmen.', fontSize: '16px', color: '#e2e8f0', textAlign: 'center' },
        },
        {
          id: 'cta-ag-btn1',
          type: 'button',
          props: { label: 'Jadwalkan Brainstorming ✦', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '800' },
        },
        {
          id: 'cta-ag-btn2',
          type: 'button',
          props: { label: 'Lihat Showreel Video ▶', href: '#portfolio', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.08)', color: '#ffffff', borderColor: '#a78bfa' },
        },
      ],
    },
    {
      id: 'sec-agency-footer',
      type: 'footer',
      layout: 'service-footer-agency',
      components: [
        {
          id: 'ftr-ag-brand',
          type: 'heading',
          props: { content: 'NEXUS.STUDIO', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' },
        },
        {
          id: 'ftr-ag-tagline',
          type: 'text',
          props: { content: 'Boutique Creative & Digital Innovation Agency yang mendefinisikan standar visual dan pengalaman masa depan.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'ftr-ag-copy',
          type: 'text',
          props: { content: '© 2026 Nexus Studio Inc. Hak cipta dilindungi. Designed for market leaders.', fontSize: '13px', color: '#64748b' },
        },
        {
          id: 'ftr-ag-lnk1',
          type: 'button',
          props: { label: 'Brand Identity', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-ag-lnk2',
          type: 'button',
          props: { label: 'UI/UX Design', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-ag-lnk3',
          type: 'button',
          props: { label: 'Web & Mobile Dev', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-ag-lnk4',
          type: 'button',
          props: { label: 'Digital Marketing', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
      ],
    },
  ],
};
