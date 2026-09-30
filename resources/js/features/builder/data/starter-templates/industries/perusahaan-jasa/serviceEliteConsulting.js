/**
 * Aurelius & Partners — Strategic Management & Executive Advisory
 * Exclusive Premium Starter Template untuk Firma Konsultasi Manajemen & Strategi Bisnis.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'service-elite-consulting',
  name: 'Aurelius Strategic Advisory',
  description: 'Template premium eksklusif bergaya McKinsey/BCG untuk firma konsultasi manajemen eksekutif, strategi M&A korporasi, transformasi digital, dan optimasi operasional. Dilengkapi split hero dengan stats, 6 pilar layanan strategis, metodologi konsultasi, profil Managing Partners, testimoni C-level, CTA konsultasi eksklusif, dan footer prestisius.',
  thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
  tags: ['Consulting', 'Management Advisory', 'Strategy', 'M&A', 'Corporate Finance', 'Executive', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#0a1128',
    secondaryColor: '#101f42',
    accentColor: '#d4af37',
    goldAccent: '#f59e0b',
    dark: true,
    surface: '#050b1a',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#1e293b',
    radius: 'xl',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-consulting-nav',
      type: 'navbar',
      layout: 'service-nav-consulting',
      components: [
        {
          id: 'cs-logo',
          type: 'heading',
          props: { content: 'AURELIUS & PARTNERS', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em' },
        },
        {
          id: 'nav-cs1',
          type: 'button',
          props: { label: 'Layanan Strategis', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-cs2',
          type: 'button',
          props: { label: 'Metodologi', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-cs3',
          type: 'button',
          props: { label: 'Senior Partners', href: '#team', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-cs4',
          type: 'button',
          props: { label: 'Testimoni Klien', href: '#testimonials', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'cta-cs',
          type: 'button',
          props: { label: 'Jadwalkan Konsultasi ➔', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#d4af37', color: '#0a1128', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-consulting-hero',
      type: 'hero',
      layout: 'service-hero-consulting',
      components: [
        {
          id: 'cs-badge',
          type: 'badge',
          props: { text: 'EXECUTIVE STRATEGIC ADVISORY', variant: 'outline', background: 'rgba(212,175,55,0.1)', color: '#d4af37', borderColor: '#d4af37' },
        },
        {
          id: 'cs-title',
          type: 'heading',
          props: { content: 'Navigasi Strategis untuk Pertumbuhan Korporasi Berkelanjutan', level: 'h1', fontSize: '46px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'cs-desc',
          type: 'paragraph',
          props: { content: 'Membimbing dewan direksi dan pemimpin industri melalui transformasi bisnis kompleks, merger & akuisisi, serta efisiensi operasional dengan wawasan berbasis data berstandar global.', fontSize: '17px', color: '#cbd5e1' },
        },
        {
          id: 'cs-btn-pri',
          type: 'button',
          props: { label: 'Konsultasi Eksekutif ➔', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: '#d4af37', color: '#0a1128', fontWeight: '700' },
        },
        {
          id: 'cs-btn-sec',
          type: 'button',
          props: { label: 'Pelajari Pendekatan Kami', href: '#about', variant: 'outline', size: 'large', radius: 'lg', background: 'transparent', color: '#ffffff', borderColor: '#d4af37' },
        },
        {
          id: 'stat1-val',
          type: 'heading',
          props: { content: '$4.2B+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#d4af37' },
        },
        {
          id: 'stat1-lbl',
          type: 'paragraph',
          props: { content: 'Nilai Transaksi M&A', fontSize: '12px', color: '#94a3b8' },
        },
        {
          id: 'stat2-val',
          type: 'heading',
          props: { content: '98%', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#d4af37' },
        },
        {
          id: 'stat2-lbl',
          type: 'paragraph',
          props: { content: 'Retensi Klien C-Level', fontSize: '12px', color: '#94a3b8' },
        },
        {
          id: 'stat3-val',
          type: 'heading',
          props: { content: '250+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#d4af37' },
        },
        {
          id: 'stat3-lbl',
          type: 'paragraph',
          props: { content: 'Proyek Transformasi', fontSize: '12px', color: '#94a3b8' },
        },
      ],
    },
    {
      id: 'sec-consulting-services',
      type: 'services',
      layout: 'service-services-consulting',
      components: [
        {
          id: 'srv-badge',
          type: 'badge',
          props: { text: 'BIDANG KEAHLIAN STRATEGIS', variant: 'outline', background: 'rgba(212,175,55,0.1)', color: '#d4af37', borderColor: '#d4af37' },
        },
        {
          id: 'srv-title',
          type: 'heading',
          props: { content: 'Solusi Holistik untuk Tantangan Bisnis Paling Kompleks', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'srv-desc',
          type: 'paragraph',
          props: { content: 'Keahlian terintegrasi lintas disiplin untuk memacu keunggulan kompetitif jangka panjang perusahaan Anda.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'srv1-title',
          type: 'heading',
          props: { content: 'Strategi Korporasi & Pertumbuhan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv1-desc',
          type: 'paragraph',
          props: { content: 'Perumusan roadmap bisnis 5-10 tahun, diversifikasi pasar, dan perancangan model bisnis tangguh masa depan.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv2-title',
          type: 'heading',
          props: { content: 'Merger, Akuisisi & Restrukturisasi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv2-desc',
          type: 'paragraph',
          props: { content: 'Uji tuntas komersial (commercial due diligence), valuasi bisnis presisi, dan integrasi pasca-merger (PMI).', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv3-title',
          type: 'heading',
          props: { content: 'Transformasi Digital & Teknologi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv3-desc',
          type: 'paragraph',
          props: { content: 'Modernisasi arsitektur enterprise IT, adopsi analitik cerdas/AI, dan otomasi alur kerja korporasi.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv4-title',
          type: 'heading',
          props: { content: 'Keunggulan Operasional & Rantai Pasok', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv4-desc',
          type: 'paragraph',
          props: { content: 'Optimasi biaya struktural, streamlining proses end-to-end, dan penguatan ketahanan supply chain.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv5-title',
          type: 'heading',
          props: { content: 'Organisasi & Kepemimpinan Eksekutif', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv5-desc',
          type: 'paragraph',
          props: { content: 'Restrukturisasi tata kelola organisasi, suksesi dewan direksi, dan transformasi budaya performa tinggi.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'srv6-title',
          type: 'heading',
          props: { content: 'Strategi Keberlanjutan & ESG', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv6-desc',
          type: 'paragraph',
          props: { content: 'Integrasi pilar Environmental, Social & Governance ke dalam strategi inti demi menciptakan nilai pemangku kepentingan.', fontSize: '14px', color: '#cbd5e1' },
        },
      ],
    },
    {
      id: 'sec-consulting-about',
      type: 'about',
      layout: 'service-about-consulting',
      components: [
        {
          id: 'abt-badge',
          type: 'badge',
          props: { text: 'PENDEKATAN & METODOLOGI', variant: 'outline', background: 'rgba(212,175,55,0.1)', color: '#d4af37', borderColor: '#d4af37' },
        },
        {
          id: 'abt-title',
          type: 'heading',
          props: { content: 'Metodologi Teruji Berbasis Riset Empiris & Eksekusi Lapangan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'abt-desc',
          type: 'paragraph',
          props: { content: 'Kami tidak sekadar memberikan rekomendasi teoretis. Tim konsultan senior kami mendampingi klien dari tahap diagnosa mendalam hingga realisasi dampak finansial nyata di lapangan.', fontSize: '16px', color: '#cbd5e1' },
        },
        {
          id: 'meth1-title',
          type: 'heading',
          props: { content: 'Diagnosa Berbasis Data Mendalam', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'meth1-desc',
          type: 'paragraph',
          props: { content: 'Audit kuantitatif dan benchmark kompetitif internasional untuk mengidentifikasi celah nilai strategis.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'meth2-title',
          type: 'heading',
          props: { content: 'Strategi Bersama Para Pemimpin Kunci', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'meth2-desc',
          type: 'paragraph',
          props: { content: 'Workshop intensif dan perancangan skenario masa depan yang selaras dengan visi pemegang saham.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'meth3-title',
          type: 'heading',
          props: { content: 'Pendampingan Eksekusi & Manajemen Perubahan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'meth3-desc',
          type: 'paragraph',
          props: { content: 'Program Management Office (PMO) berdedikasi untuk memastikan target terlaksana tepat waktu.', fontSize: '14px', color: '#cbd5e1' },
        },
      ],
    },
    {
      id: 'sec-consulting-team',
      type: 'team',
      layout: 'service-team-consulting',
      components: [
        {
          id: 'team-badge',
          type: 'badge',
          props: { text: 'DEWAN PARTNER SENIOR', variant: 'outline', background: 'rgba(212,175,55,0.1)', color: '#d4af37', borderColor: '#d4af37' },
        },
        {
          id: 'team-title',
          type: 'heading',
          props: { content: 'Dipimpin oleh Praktisi dan Pemikir Industri Berpengalaman', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'team-desc',
          type: 'paragraph',
          props: { content: 'Setiap proyek dipimpin langsung oleh Senior Partner dengan rekam jejak lebih dari 20 tahun di ranah eksekutif multinasional.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 't1-name',
          type: 'heading',
          props: { content: 'Prof. Richard Aurelius, Ph.D.', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 't1-role',
          type: 'paragraph',
          props: { content: 'Managing Partner & Head of Strategy', fontSize: '13px', color: '#d4af37', fontWeight: '600' },
        },
        {
          id: 't1-bio',
          type: 'paragraph',
          props: { content: 'Mantan Senior Advisor Forum Ekonomi Dunia dengan spesialisasi restrukturisasi makro dan strategi diversifikasi korporasi.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 't2-name',
          type: 'heading',
          props: { content: 'Clarissa Wardhani, MBA', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 't2-role',
          type: 'paragraph',
          props: { content: 'Senior Partner, M&A & Private Equity', fontSize: '13px', color: '#d4af37', fontWeight: '600' },
        },
        {
          id: 't2-bio',
          type: 'paragraph',
          props: { content: 'Telah memimpin lebih dari 40 transaksi merger lintas negara di kawasan Asia Pasifik dengan total valuasi $4B+.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 't3-name',
          type: 'heading',
          props: { content: 'Dr. Hendra Gunawan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 't3-role',
          type: 'paragraph',
          props: { content: 'Partner, Digital Transformation & AI', fontSize: '13px', color: '#d4af37', fontWeight: '600' },
        },
        {
          id: 't3-bio',
          type: 'paragraph',
          props: { content: 'Pakar arsitektur enterprise dan adopsi AI industri dengan latar belakang riset di Silicon Valley dan Zurich.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 't4-name',
          type: 'heading',
          props: { content: 'Maya Sastrowardoyo, M.Sc.', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 't4-role',
          type: 'paragraph',
          props: { content: 'Partner, ESG & Sustainable Finance', fontSize: '13px', color: '#d4af37', fontWeight: '600' },
        },
        {
          id: 't4-bio',
          type: 'paragraph',
          props: { content: 'Konsultan rujukan untuk dekarbonisasi industri berat dan penerbitan instrumen obligasi hijau (Green Bonds).', fontSize: '13px', color: '#cbd5e1' },
        },
      ],
    },
    {
      id: 'sec-consulting-testimonials',
      type: 'testimonials',
      layout: 'service-testimonials-consulting',
      components: [
        {
          id: 'test-badge',
          type: 'badge',
          props: { text: 'REPUTASI & TESTIMONI', variant: 'outline', background: 'rgba(212,175,55,0.1)', color: '#d4af37', borderColor: '#d4af37' },
        },
        {
          id: 'test-title',
          type: 'heading',
          props: { content: 'Kepercayaan dari Para Pemimpin Industri Terkemuka', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'test-desc',
          type: 'paragraph',
          props: { content: 'Bagaimana keterlibatan strategis kami memberikan akselerasi nyata bagi dewan direksi dan pemegang saham.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'quote1-text',
          type: 'paragraph',
          props: { content: '"Aurelius & Partners memberikan ketajaman analisis luar biasa yang memungkinkan kami menyelesaikan merger senilai $800M tepat waktu dengan integrasi pasca-merger yang mulus."', fontSize: '15px', color: '#cbd5e1' },
        },
        {
          id: 'quote1-author',
          type: 'heading',
          props: { content: 'Bambang Soediro', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'quote1-title',
          type: 'paragraph',
          props: { content: 'Direktur Utama, PT Nusantara Finansial Tbk', fontSize: '12px', color: '#d4af37' },
        },
        {
          id: 'quote2-text',
          type: 'paragraph',
          props: { content: '"Transformasi digital yang didampingi tim Aurelius berhasil memangkas biaya operasional kami sebesar 28% dalam kurun waktu 14 bulan tanpa friksi internal."', fontSize: '15px', color: '#cbd5e1' },
        },
        {
          id: 'quote2-author',
          type: 'heading',
          props: { content: 'Victoria Chen', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'quote2-title',
          type: 'paragraph',
          props: { content: 'Chief Operating Officer, Pan-Asia Logistics Group', fontSize: '12px', color: '#d4af37' },
        },
        {
          id: 'quote3-text',
          type: 'paragraph',
          props: { content: '"Roadmap ESG dan dekarbonisasi yang dirancang membuka akses pendanaan hijau global hingga $350M untuk ekspansi fasilitas manufaktur baru kami."', fontSize: '15px', color: '#cbd5e1' },
        },
        {
          id: 'quote3-author',
          type: 'heading',
          props: { content: 'Ir. Agus Wijaya', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'quote3-title',
          type: 'paragraph',
          props: { content: 'Komisaris Utama, Mega Energi Nusantara', fontSize: '12px', color: '#d4af37' },
        },
      ],
    },
    {
      id: 'sec-consulting-cta',
      type: 'cta',
      layout: 'service-cta-consulting',
      components: [
        {
          id: 'cta-badge',
          type: 'badge',
          props: { text: 'SESI KONSULTASI PRIVAT', variant: 'outline', background: 'rgba(212,175,55,0.15)', color: '#d4af37', borderColor: '#d4af37' },
        },
        {
          id: 'cta-title',
          type: 'heading',
          props: { content: 'Mulai Diskusi Strategis Bersama Dewan Partner Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'cta-desc',
          type: 'paragraph',
          props: { content: 'Kami menyambut diskusi rahasia (confidential briefing) dengan Dewan Komisaris dan Direksi untuk mengeksplorasi potensi nilai strategis.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'cta-btn-primary',
          type: 'button',
          props: { label: 'Jadwalkan Confidential Briefing ➔', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: '#d4af37', color: '#0a1128', fontWeight: '700' },
        },
        {
          id: 'cta-btn-secondary',
          type: 'button',
          props: { label: 'Unduh Company Credentials', href: '#about', variant: 'outline', size: 'large', radius: 'lg', background: 'transparent', color: '#ffffff', borderColor: '#d4af37' },
        },
      ],
    },
    {
      id: 'sec-consulting-footer',
      type: 'footer',
      layout: 'service-footer-consulting',
      components: [
        {
          id: 'ftr-brand',
          type: 'heading',
          props: { content: 'AURELIUS & PARTNERS', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em' },
        },
        {
          id: 'ftr-tagline',
          type: 'paragraph',
          props: { content: 'Firma konsultasi manajemen strategis terkemuka yang mendampingi transformasi korporasi dan penciptaan nilai pemegang saham berkelanjutan.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'ftr-copy',
          type: 'paragraph',
          props: { content: '© 2026 Aurelius & Partners Advisory Ltd. All rights reserved. Strict confidentiality guaranteed.', fontSize: '12px', color: '#64748b' },
        },
        {
          id: 'ftr-link1',
          type: 'button',
          props: { label: 'Strategi Korporasi', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'ftr-link2',
          type: 'button',
          props: { label: 'Merger & Akuisisi (M&A)', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'ftr-link3',
          type: 'button',
          props: { label: 'Transformasi Digital', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'ftr-link4',
          type: 'button',
          props: { label: 'Keberlanjutan & ESG', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
      ],
    },
  ],
};
