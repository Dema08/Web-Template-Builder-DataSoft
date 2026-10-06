/**
 * Apex Leadership & Corporate Institute — Executive Education & Management Certification
 * Exclusive Premium Starter Template untuk Pelatihan Eksekutif, Corporate Training, & Sertifikasi Manajemen.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'edu-executive-institute',
  name: 'Apex Leadership & Corporate Institute',
  description: 'Template premium eksklusif bergaya korporasi modern slate-graphite & titanium blue untuk lembaga pelatihan eksekutif, masterclass kepemimpinan C-Suite, in-house corporate training, dan sertifikasi profesional global (PMP, GCG, ERM). Dilengkapi notice akreditasi PMI & HRCI, split hero dengan skor kepuasan 4.92/5, 4 modul masterclass eksekutif, metodologi 4D terintegrasi (Kirkpatrick L4 ROI 340%), profil dewan master facilitator mantan C-level, formulir proposal in-house corporate training, dan footer eksekutif.',
  thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
  tags: ['Executive Training', 'Corporate Education', 'Leadership', 'Management Certification', 'PMP', 'In-House Training', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#0ea5e9',
    secondaryColor: '#0284c7',
    accentColor: '#38bdf8',
    dark: true,
    surface: '#070b14',
    text: '#ffffff',
    muted: '#94a3b8',
    border: '#1e293b',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-exec-nav',
      type: 'navbar',
      layout: 'edu-nav-executive',
      components: [
        {
          id: 'exec-logo',
          type: 'heading',
          props: { content: 'APEX LEADERSHIP INSTITUTE', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.06em' },
        },
        {
          id: 'nav-ex1',
          type: 'button',
          props: { label: 'Program Eksekutif', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-ex2',
          type: 'button',
          props: { label: 'Metodologi & Dampak', href: '#methodology', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-ex3',
          type: 'button',
          props: { label: 'Master Facilitators', href: '#trainers', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'nav-ex4',
          type: 'button',
          props: { label: 'In-House Corporate', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'cta-exec',
          type: 'button',
          props: { label: 'Konsultasi In-House Training ➔', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-exec-hero',
      type: 'hero',
      layout: 'edu-hero-executive',
      components: [
        {
          id: 'ex-badge',
          type: 'badge',
          props: { text: 'EXECUTIVE CORPORATE DEVELOPMENT', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' },
        },
        {
          id: 'ex-title',
          type: 'heading',
          props: { content: 'Membangun Kapabilitas Kepemimpinan Strategis & Keunggulan Korporasi', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' },
        },
        {
          id: 'ex-desc',
          type: 'text',
          props: { content: 'Program pelatihan eksekutif tersertifikasi internasional yang dirancang khusus untuk Dewan Direksi, General Manager, dan pemimpin masa depan BUMN serta korporasi multinasional.', fontSize: '17px', color: '#cbd5e1' },
        },
        {
          id: 'ex-btn-pri',
          type: 'button',
          props: { label: 'Rancang In-House Program ➔', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'ex-btn-sec',
          type: 'button',
          props: { label: 'Jadwal Masterclass 2026', href: '#programs', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' },
        },
        {
          id: 'ex-stat1-num',
          type: 'heading',
          props: { content: '500+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#38bdf8' },
        },
        {
          id: 'ex-stat1-lbl',
          type: 'text',
          props: { content: 'Korporasi & BUMN Klien', fontSize: '12px', color: '#94a3b8' },
        },
        {
          id: 'ex-stat2-num',
          type: 'heading',
          props: { content: '4.92 / 5', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#38bdf8' },
        },
        {
          id: 'ex-stat2-lbl',
          type: 'text',
          props: { content: 'Skor Kepuasan Peserta Eksekutif', fontSize: '12px', color: '#94a3b8' },
        },
        {
          id: 'ex-hero-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', alt: 'Executive board leadership workshop', width: '100%', height: '460px', objectFit: 'cover', borderRadius: '0' },
        },
      ],
    },
    {
      id: 'sec-exec-programs',
      type: 'programs',
      layout: 'edu-programs-executive',
      components: [
        {
          id: 'ex-prog-badge',
          type: 'badge',
          props: { text: 'PROGRAM MASTERCLASS & SERTIFIKASI', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' },
        },
        {
          id: 'ex-prog-title',
          type: 'heading',
          props: { content: 'Pengembangan Kapabilitas Strategis Berstandar Global', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'ex-prog-desc',
          type: 'text',
          props: { content: 'Materi intensif berbasis studi kasus riil korporasi dunia dengan sertifikasi kompetensi bertaraf internasional.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'ep1-title',
          type: 'heading',
          props: { content: 'Strategic Board Leadership & GCG', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'ep1-desc',
          type: 'text',
          props: { content: 'Pengambilan keputusan tingkat dewan, manajemen krisis korporasi, etika tata kelola (GCG), dan penciptaan nilai pemegang saham.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 'ep1-tag',
          type: 'badge',
          props: { text: 'Khusus Direksi & Komisaris', variant: 'solid', background: '#0284c7', color: '#ffffff' },
        },
        {
          id: 'ep2-title',
          type: 'heading',
          props: { content: 'Digital Transformation & Enterprise AI Mastery', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'ep2-desc',
          type: 'text',
          props: { content: 'Roadmap transformasi digital, adopsi AI generatif korporasi, arsitektur data modern, dan manajemen perubahan budaya digital.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 'ep2-tag',
          type: 'badge',
          props: { text: 'Sertifikasi CDTP Terakreditasi', variant: 'solid', background: '#0284c7', color: '#ffffff' },
        },
        {
          id: 'ep3-title',
          type: 'heading',
          props: { content: 'Project Management Professional (PMP)® Prep', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'ep3-desc',
          type: 'text',
          props: { content: 'Persiapan komprehensif sertifikasi PMP resmi dari Project Management Institute (PMI) dengan tingkat kelulusan 98%.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 'ep3-tag',
          type: 'badge',
          props: { text: 'PMI Authorized Partner', variant: 'solid', background: '#0284c7', color: '#ffffff' },
        },
        {
          id: 'ep4-title',
          type: 'heading',
          props: { content: 'Strategic Corporate Finance & ERM', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'ep4-desc',
          type: 'text',
          props: { content: 'Analisis valuasi investasi, struktur permodalan optimal, mitigasi Enterprise Risk Management (ERM), dan kepatuhan ESG.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 'ep4-tag',
          type: 'badge',
          props: { text: 'C-Suite Finance Track', variant: 'solid', background: '#0284c7', color: '#ffffff' },
        },
        {
          id: 'ex-prog-cta-btn',
          type: 'button',
          props: { label: 'Unduh Kalender Pelatihan 2026 ➔', href: '#contact', variant: 'primary', size: 'medium', radius: 'md', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-exec-methodology',
      type: 'methodology',
      layout: 'edu-methodology-executive',
      components: [
        {
          id: 'mth-badge',
          type: 'badge',
          props: { text: 'METODOLOGI KORPORASI TERINTEGRASI', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' },
        },
        {
          id: 'mth-title',
          type: 'heading',
          props: { content: 'Kerangka Kerja 4D untuk Menghasilkan Dampak Bisnis Nyata (ROI)', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'mth-desc',
          type: 'text',
          props: { content: 'Setiap program pelatihan disesuaikan secara khusus (tailor-made) dengan strategi bisnis, budaya organisasi, dan target Key Performance Indicators (KPI) korporasi Anda.', fontSize: '16px', color: '#cbd5e1' },
        },
        {
          id: 's1-title',
          type: 'heading',
          props: { content: '1. Discover & Competency Gap Audit', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 's1-desc',
          type: 'text',
          props: { content: 'Pemetaan kompetensi kepemimpinan dan asesmen kebutuhan pembelajaran (TNA) berbasis data objektif.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 's2-title',
          type: 'heading',
          props: { content: '2. Design Custom Learning Journey', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 's2-desc',
          type: 'text',
          props: { content: 'Penyusunan kurikulum modular, simulasi bisnis gamifikasi, dan studi kasus spesifik industri perusahaan.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 's3-title',
          type: 'heading',
          props: { content: '3. Deliver High-Impact Masterclasses', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 's3-desc',
          type: 'text',
          props: { content: 'Fasilitasi interaktif oleh mantan C-level executives dan praktisi industri global berakreditasi.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 's4-title',
          type: 'heading',
          props: { content: '4. Drive Business Impact & Evaluation', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 's4-desc',
          type: 'text',
          props: { content: 'Evaluasi Kirkpatrick Level 4 untuk mengukur implementasi di tempat kerja dan pertumbuhan ROI bisnis.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 'mth-cta-btn',
          type: 'button',
          props: { label: 'Jadwalkan Konsultasi TNA Korporasi ➔', href: '#contact', variant: 'outline', size: 'medium', radius: 'md', background: 'rgba(14,165,233,0.1)', color: '#38bdf8', borderColor: '#0ea5e9' },
        },
      ],
    },
    {
      id: 'sec-exec-trainers',
      type: 'trainers',
      layout: 'edu-trainers-executive',
      components: [
        {
          id: 'trn-badge',
          type: 'badge',
          props: { text: 'DEWAN MASTER FACILITATOR', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' },
        },
        {
          id: 'trn-title',
          type: 'heading',
          props: { content: 'Dibimbing Langsung oleh Praktisi & Mantan Pemimpin Korporasi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'trn-desc',
          type: 'text',
          props: { content: 'Bukan sekadar akademisi, fasilitator kami adalah mantan CEO, Direktur SDM, dan konsultan strategis berkaliber internasional.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'tr1-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80', alt: 'Dr. Ir. Aryo Soebroto, MBA', width: '100%', height: '256px', objectFit: 'cover' },
        },
        {
          id: 'tr1-name',
          type: 'heading',
          props: { content: 'Dr. Ir. Aryo Soebroto, MBA', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'tr1-role',
          type: 'text',
          props: { content: 'Mantan Direktur Utama BUMN Energi • Lead Strategic Leadership', fontSize: '12px', color: '#38bdf8', fontWeight: '600' },
        },
        {
          id: 'tr1-bio',
          type: 'text',
          props: { content: 'Pengalaman 28 tahun memimpin restrukturisasi korporasi dan transformasi digital skala masif di kawasan Asia.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'tr2-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80', alt: 'Elena Hartanto, M.Sc., PMP®', width: '100%', height: '256px', objectFit: 'cover' },
        },
        {
          id: 'tr2-name',
          type: 'heading',
          props: { content: 'Elena Hartanto, M.Sc., PMP®', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'tr2-role',
          type: 'text',
          props: { content: 'Senior Vice President of Transformation • Lead Agile & PMP', fontSize: '12px', color: '#38bdf8', fontWeight: '600' },
        },
        {
          id: 'tr2-bio',
          type: 'text',
          props: { content: 'Telah membimbing lebih dari 3.000 project manager lulus ujian PMP® dan mengelola PMO bernilai miliaran dolar.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'tr3-img',
          type: 'image',
          props: { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80', alt: 'Bambang Kusuma, Ph.D.', width: '100%', height: '256px', objectFit: 'cover' },
        },
        {
          id: 'tr3-name',
          type: 'heading',
          props: { content: 'Bambang Kusuma, Ph.D.', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'tr3-role',
          type: 'text',
          props: { content: 'Former Chief People Officer • Lead Culture & Talent', fontSize: '12px', color: '#38bdf8', fontWeight: '600' },
        },
        {
          id: 'tr3-bio',
          type: 'text',
          props: { content: 'Pakar asesmen suksesi eksekutif, desain organisasi masa depan, dan perancangan sistem remunerasi berbasis performa.', fontSize: '13px', color: '#94a3b8' },
        },
      ],
    },
    {
      id: 'sec-exec-cta',
      type: 'cta',
      layout: 'edu-cta-executive',
      components: [
        {
          id: 'cta-ex-badge',
          type: 'badge',
          props: { text: 'IN-HOUSE CORPORATE SOLUTIONS', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' },
        },
        {
          id: 'cta-ex-title',
          type: 'heading',
          props: { content: 'Siap Mentransformasi Kapabilitas Tim Eksekutif Korporasi Anda?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'cta-ex-desc',
          type: 'text',
          props: { content: 'Diskusikan kebutuhan pelatihan internal khusus (in-house) untuk jajaran manajerial dan direksi perusahaan Anda bersama Lead Advisory kami.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'cta-ex-btn1',
          type: 'button',
          props: { label: 'Ajukan Proposal In-House Training ➔', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'cta-ex-btn2',
          type: 'button',
          props: { label: 'Unduh Company Credentials (PDF)', href: '#programs', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' },
        },
      ],
    },
    {
      id: 'sec-exec-footer',
      type: 'footer',
      layout: 'edu-footer-executive',
      components: [
        {
          id: 'ftr-ex-brand',
          type: 'heading',
          props: { content: 'APEX LEADERSHIP INSTITUTE', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.06em' },
        },
        {
          id: 'ftr-ex-tagline',
          type: 'text',
          props: { content: 'Lembaga Pengembangan Eksekutif & Sertifikasi Manajemen Global. Membangun pemimpin tangguh untuk masa depan korporasi Indonesia.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'ftr-ex-copy',
          type: 'text',
          props: { content: '© 2026 Apex Leadership & Corporate Institute. Hak cipta dilindungi.', fontSize: '12px', color: '#64748b' },
        },
        {
          id: 'ftr-ex-lnk1',
          type: 'button',
          props: { label: 'Board Leadership & GCG', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-ex-lnk2',
          type: 'button',
          props: { label: 'Project Management (PMP)', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-ex-lnk3',
          type: 'button',
          props: { label: 'Digital Transformation Track', href: '#programs', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-ex-lnk4',
          type: 'button',
          props: { label: 'In-House Corporate RFP', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
      ],
    },
  ],
};
