/**
 * CodeSphere Tech Academy — Intensive Fullstack & AI Career Accelerator
 * Exclusive Premium Starter Template untuk Bootcamp IT, Coding Academy, & Kursus Keahlian Digital.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'edu-tech-bootcamp',
  name: 'CodeSphere Tech Academy',
  description: 'Template premium eksklusif bergaya neon cyber-dark & terminal coding untuk IT bootcamp, kursus coding fullstack, akademi AI engineering, dan data science. Dilengkapi live batch seat ticker, hero interactive terminal console, 4 career tracks berstandar industri, metodologi project-based capstone, 350+ hiring partners strip & testimoni alumni unicorn, 3 skema pembayaran fleksibel (Upfront, Cicilan 0%, ISA), serta footer komunitas Discord.',
  thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
  tags: ['Bootcamp', 'Coding', 'Fullstack', 'AI Engineering', 'Data Science', 'Tech Academy', 'Kursus Online', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#6366f1',
    secondaryColor: '#a855f7',
    accentColor: '#06b6d4',
    dark: true,
    surface: '#070311',
    text: '#ffffff',
    muted: '#cbd5e1',
    border: '#2e1065',
    radius: '2xl',
    font: 'Plus Jakarta Sans, JetBrains Mono, sans-serif',
  },
  animations: ['fade-up', 'zoom-in', 'hover-lift', 'glow-pulse'],
  sections: [
    {
      id: 'sec-boot-nav',
      type: 'navbar',
      layout: 'edu-nav-bootcamp',
      components: [
        {
          id: 'boot-logo',
          type: 'heading',
          props: { content: 'CODESPHERE.ACADEMY', level: 'h2', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' },
        },
        {
          id: 'nav-bt1',
          type: 'button',
          props: { label: 'Career Tracks', href: '#tracks', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-bt2',
          type: 'button',
          props: { label: 'Kurikulum & Proyek', href: '#curriculum', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-bt3',
          type: 'button',
          props: { label: 'Hiring Partners', href: '#hiring', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-bt4',
          type: 'button',
          props: { label: 'Biaya & ISA', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'cta-boot',
          type: 'button',
          props: { label: 'Gabung Batch 24 ⚡', href: '#pricing', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-boot-hero',
      type: 'hero',
      layout: 'edu-hero-bootcamp',
      components: [
        {
          id: 'bt-badge',
          type: 'badge',
          props: { text: 'INTENSIVE CAREER ACCELERATOR', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' },
        },
        {
          id: 'bt-title',
          type: 'heading',
          props: { content: 'Transformasi Karir Menjadi Software Engineer & AI Specialist dalam 16 Minggu', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' },
        },
        {
          id: 'bt-desc',
          type: 'text',
          props: { content: 'Belajar langsung dari Tech Lead unicorn & global startup dengan kurikulum berbasis proyek nyata. Dapatkan jaminan koneksi kerja ke 350+ hiring partners.', fontSize: '17px', color: '#cbd5e1' },
        },
        {
          id: 'bt-btn-pri',
          type: 'button',
          props: { label: 'Daftar Sekarang & Konsultasi ⚡', href: '#pricing', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: '#ffffff', fontWeight: '800' },
        },
        {
          id: 'bt-btn-sec',
          type: 'button',
          props: { label: 'Unduh Silabus Lengkap (PDF)', href: '#curriculum', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.06)', color: '#ffffff', borderColor: '#818cf8' },
        },
        {
          id: 'term-bt-title',
          type: 'heading',
          props: { content: 'codesphere-student-v24.ts', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#818cf8' },
        },
        {
          id: 'term-bt-stat1',
          type: 'heading',
          props: { content: '95.2%', level: 'h3', fontSize: '26px', fontWeight: '800', color: '#34d399' },
        },
        {
          id: 'term-bt-stat2',
          type: 'heading',
          props: { content: 'Rp 14.5 Jt', level: 'h3', fontSize: '26px', fontWeight: '800', color: '#60a5fa' },
        },
      ],
    },
    {
      id: 'sec-boot-tracks',
      type: 'tracks',
      layout: 'edu-tracks-bootcamp',
      components: [
        {
          id: 'trk-badge',
          type: 'badge',
          props: { text: 'PILIHAN JALUR KARIR 2026', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' },
        },
        {
          id: 'trk-title',
          type: 'heading',
          props: { content: 'Jalur Karir dengan Permintaan Talenta Tertinggi di Industri', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'trk-desc',
          type: 'text',
          props: { content: 'Dirancang dari nol hingga siap kerja (Zero to Hero) bersama mentor praktisi industri top tech companies.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 't1-title',
          type: 'heading',
          props: { content: 'Fullstack Web & Cloud Architecture', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 't1-desc',
          type: 'text',
          props: { content: 'Menguasai ekosistem React, Next.js, Node.js/Go, database SQL/NoSQL, microservices, dan deployment AWS.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 't1-tag',
          type: 'badge',
          props: { text: '16 Minggu • Full-Time / Part-Time', variant: 'solid', background: '#4f46e5', color: '#ffffff' },
        },
        {
          id: 't2-title',
          type: 'heading',
          props: { content: 'Applied AI & LLM Systems Engineer', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 't2-desc',
          type: 'text',
          props: { content: 'Membangun aplikasi cerdas dengan Large Language Models (LLM), LangChain, RAG architecture, dan vector database.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 't2-tag',
          type: 'badge',
          props: { text: '16 Minggu • Paling Banyak Dicari', variant: 'solid', background: '#a855f7', color: '#ffffff' },
        },
        {
          id: 't3-title',
          type: 'heading',
          props: { content: 'Data Science & Machine Learning Specialist', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 't3-desc',
          type: 'text',
          props: { content: 'Eksplorasi big data, visualisasi analitik eksekutif, predictive modeling, algoritma klasifikasi, dan pipeline MLOps.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 't3-tag',
          type: 'badge',
          props: { text: '16 Minggu • Industri Fintech & E-commerce', variant: 'solid', background: '#06b6d4', color: '#042f2e' },
        },
        {
          id: 't4-title',
          type: 'heading',
          props: { content: 'DevOps & Cloud Infrastructure Engineering', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 't4-desc',
          type: 'text',
          props: { content: 'Otomasi CI/CD pipelines, container orchestration Kubernetes, Terraform IaC, dan monitoring Prometheus.', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 't4-tag',
          type: 'badge',
          props: { text: '16 Minggu • High Salary Potential', variant: 'solid', background: '#ec4899', color: '#ffffff' },
        },
        {
          id: 'trk-cta-btn',
          type: 'button',
          props: { label: 'Konsultasi Tes Bakat Coding Gratis ➔', href: '#pricing', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-boot-curriculum',
      type: 'curriculum',
      layout: 'edu-curriculum-bootcamp',
      components: [
        {
          id: 'cur-badge',
          type: 'badge',
          props: { text: 'METODOLOGI PROJECT-BASED', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' },
        },
        {
          id: 'cur-title',
          type: 'heading',
          props: { content: 'Belajar Bukan Menghafal, Tapi Membangun Produk Nyata', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'cur-desc',
          type: 'text',
          props: { content: 'Di CodeSphere, Anda menulis lebih dari 15.000 baris kode nyata, menyelesaikan pull request harian di GitHub, dan mendeploy 4 proyek skala produksi yang siap dipamerkan ke recruiter.', fontSize: '16px', color: '#cbd5e1' },
        },
        {
          id: 'cs1-title',
          type: 'heading',
          props: { content: 'Live Interactive Coding & Deep Fundamentals', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'cs1-desc',
          type: 'text',
          props: { content: 'Fondasi logika algoritma, struktur data efisien, dan clean architecture standar enterprise.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'cs2-title',
          type: 'heading',
          props: { content: '1-on-1 Code Review dari Senior Tech Lead', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'cs2-desc',
          type: 'text',
          props: { content: 'Setiap baris kode Anda diulas langsung untuk memastikan best practice, security, dan readability.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'cs3-title',
          type: 'heading',
          props: { content: 'Real-World Production Capstone Project', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'cs3-desc',
          type: 'text',
          props: { content: 'Membangun aplikasi fullstack kompleks dengan live database, payment gateway, dan deployment CI/CD.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'cur-cta-btn',
          type: 'button',
          props: { label: 'Lihat Contoh Portofolio Alumni ➔', href: '#hiring', variant: 'outline', size: 'medium', radius: 'full', background: 'rgba(99,102,241,0.1)', color: '#818cf8', borderColor: '#6366f1' },
        },
      ],
    },
    {
      id: 'sec-boot-hiring',
      type: 'hiring',
      layout: 'edu-hiring-bootcamp',
      components: [
        {
          id: 'hir-badge',
          type: 'badge',
          props: { text: 'JARINGAN 350+ HIRING PARTNERS', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' },
        },
        {
          id: 'hir-title',
          type: 'heading',
          props: { content: 'Alumni Kami Bekerja di Perusahaan Teknologi Terdepan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'hir-desc',
          type: 'text',
          props: { content: 'Program Career Support mendampingi Anda dari simulasi technical interview, optimasi CV/LinkedIn, hingga negosiasi penawaran gaji.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'al1-quote',
          type: 'text',
          props: { content: '"Dari latar belakang lulusan hukum tanpa basic coding sama sekali, setelah 16 minggu di CodeSphere saya diterima sebagai Frontend Engineer di unicorn fintech."', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'al1-name',
          type: 'heading',
          props: { content: 'Bagas Aditya', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'al1-role',
          type: 'text',
          props: { content: 'Frontend Engineer @ DANA Indonesia (Alumni Batch 18)', fontSize: '12px', color: '#818cf8' },
        },
        {
          id: 'al2-quote',
          type: 'text',
          props: { content: '"1-on-1 code review dari Tech Lead sangat mengubah cara berpikir arsitektur backend saya. Portofolio capstone-nya membuat recruiter terkesan."', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'al2-name',
          type: 'heading',
          props: { content: 'Fauziah Zahra', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'al2-role',
          type: 'text',
          props: { content: 'Backend Developer @ Traveloka (Alumni Batch 19)', fontSize: '12px', color: '#818cf8' },
        },
        {
          id: 'al3-quote',
          type: 'text',
          props: { content: '"Career track AI Engineer di sini sangat up-to-date dengan industri. Saya langsung dipercaya membangun sistem RAG AI di perusahaan logistik."', fontSize: '14px', color: '#cbd5e1' },
        },
        {
          id: 'al3-name',
          type: 'heading',
          props: { content: 'Rian Firmansyah', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'al3-role',
          type: 'text',
          props: { content: 'AI Solutions Engineer @ J&T Express (Alumni Batch 20)', fontSize: '12px', color: '#818cf8' },
        },
      ],
    },
    {
      id: 'sec-boot-pricing',
      type: 'pricing',
      layout: 'edu-pricing-bootcamp',
      components: [
        {
          id: 'prc-bt-badge',
          type: 'badge',
          props: { text: 'SKEMA INVESTASI FLEKSIBEL', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' },
        },
        {
          id: 'prc-bt-title',
          type: 'heading',
          props: { content: 'Investasi Pendidikan dengan Jaminan Pengembalian Karir', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'prc-bt-desc',
          type: 'text',
          props: { content: 'Pilih opsi pembayaran yang paling sesuai dengan kondisi finansial Anda saat ini.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' },
        },
        {
          id: 'pl1-title',
          type: 'heading',
          props: { content: 'Upfront Payment', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'pl1-price',
          type: 'heading',
          props: { content: 'Rp 16.5 Jt', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'pl1-desc',
          type: 'text',
          props: { content: 'Hemat Rp 3.5 Jt dengan pembayaran lunas di awal sebelum batch dimulai.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'pl1-btn',
          type: 'button',
          props: { label: 'Pilih Bayar di Awal', href: '#pricing', variant: 'outline', size: 'medium', radius: 'full', background: 'transparent', color: '#ffffff', borderColor: '#475569' },
        },
        {
          id: 'pl2-title',
          type: 'heading',
          props: { content: 'Cicilan 0% Ringan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'pl2-price',
          type: 'heading',
          props: { content: 'Rp 1.45 Jt / bln', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'pl2-desc',
          type: 'text',
          props: { content: 'Cicilan 12 bulan tanpa bunga via kartu kredit atau mitra finansial edukasi.', fontSize: '13px', color: '#cbd5e1' },
        },
        {
          id: 'pl2-btn',
          type: 'button',
          props: { label: 'Pilih Cicilan 0% ★', href: '#pricing', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'pl3-title',
          type: 'heading',
          props: { content: 'Income Share (ISA)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'pl3-price',
          type: 'heading',
          props: { content: 'Rp 0 di Awal', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'pl3-desc',
          type: 'text',
          props: { content: 'Belajar tanpa biaya di depan. Bayar persentase gaji hanya setelah Anda mendapat pekerjaan.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'pl3-btn',
          type: 'button',
          props: { label: 'Ajukan Program ISA', href: '#pricing', variant: 'outline', size: 'medium', radius: 'full', background: 'transparent', color: '#ffffff', borderColor: '#475569' },
        },
      ],
    },
    {
      id: 'sec-boot-footer',
      type: 'footer',
      layout: 'edu-footer-bootcamp',
      components: [
        {
          id: 'ftr-bt-brand',
          type: 'heading',
          props: { content: 'CODESPHERE.ACADEMY', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.02em' },
        },
        {
          id: 'ftr-bt-tagline',
          type: 'text',
          props: { content: 'Akselerator Karir Teknologi Terdepan. Menjembatani talenta non-IT dan profesional menuju karir software engineer kelas dunia.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'ftr-bt-copy',
          type: 'text',
          props: { content: '© 2026 CodeSphere Academy Inc. Hak cipta dilindungi.', fontSize: '12px', color: '#64748b' },
        },
        {
          id: 'ftr-bt-lnk1',
          type: 'button',
          props: { label: 'Fullstack Web Engineering', href: '#tracks', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-bt-lnk2',
          type: 'button',
          props: { label: 'Applied AI & LLM Systems', href: '#tracks', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-bt-lnk3',
          type: 'button',
          props: { label: 'Data Science & MLOps', href: '#tracks', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
        {
          id: 'ftr-bt-lnk4',
          type: 'button',
          props: { label: 'Skema Beasiswa & ISA', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' },
        },
      ],
    },
  ],
};
