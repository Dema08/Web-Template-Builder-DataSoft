/**
 * Vanguard Apex Capital Group — Private Equity & Venture Capital Holding
 * Exclusive Premium Starter Template untuk Institusi Investasi, Private Equity & Holding Modal Ventura.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'holding-investor',
  name: 'Vanguard Apex Capital Group',
  description: 'Template premium eksklusif bertema High-Finance & Private Equity Holding (AUM $4.2B): portofolio investasi Unicorn & Decacorn, Investment Thesis multi-sektor, metrik imbal hasil IRR & MOIC, profil General Partners lulusan Ivy League, portal sindikasi Limited Partner (LP), berita IPO & M&A terkini, serta formulir pitch & alokasi modal institusional.',
  thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
  tags: ['Private Equity', 'Venture Capital', 'Holding Group', 'Fintech', 'AUM', 'LP Portal', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#030712',
    secondaryColor: '#111827',
    accentColor: '#10b981',
    emeraldAccent: '#059669',
    dark: true,
    surface: '#030712',
    text: '#f9fafb',
    muted: '#9ca3af',
    border: '#1f2937',
    radius: 'lg',
    font: 'Space Grotesk, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'matrix-fade', 'hover-lift', 'glow-emerald'],
  sections: [
    {
      id: 'cap-nav',
      type: 'navbar',
      layout: 'holding-nav-capital',
      components: [
        {
          id: 'cap-logo',
          type: 'heading',
          props: {
            content: 'VANGUARD APEX CAPITAL',
            level: 'h2',
            fontSize: '18px',
            fontWeight: '800',
            color: '#ffffff',
            letterSpacing: '0.12em',
          },
        },
        {
          id: 'c-nav-1',
          type: 'button',
          props: { label: 'Portofolio Investasi', href: '#portfolio', variant: 'ghost', size: 'small', background: 'transparent', color: '#e5e7eb' },
        },
        {
          id: 'c-nav-2',
          type: 'button',
          props: { label: 'Investment Thesis', href: '#thesis', variant: 'ghost', size: 'small', background: 'transparent', color: '#e5e7eb' },
        },
        {
          id: 'c-nav-3',
          type: 'button',
          props: { label: 'AUM & Track Record', href: '#metrics', variant: 'ghost', size: 'small', background: 'transparent', color: '#e5e7eb' },
        },
        {
          id: 'c-nav-4',
          type: 'button',
          props: { label: 'General Partners', href: '#partners', variant: 'ghost', size: 'small', background: 'transparent', color: '#e5e7eb' },
        },
        {
          id: 'c-nav-5',
          type: 'button',
          props: { label: 'Sindikasi LP', href: '#syndicate', variant: 'ghost', size: 'small', background: 'transparent', color: '#e5e7eb' },
        },
        {
          id: 'c-cta-lp',
          type: 'button',
          props: {
            label: 'Institutional LP Portal 🔒',
            href: '#inquiry',
            variant: 'primary',
            size: 'small',
            radius: 'lg',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: '#ffffff',
            fontWeight: '700',
          },
        },
      ],
    },
    {
      id: 'cap-hero',
      type: 'hero',
      layout: 'holding-hero-capital',
      components: [
        {
          id: 'cap-hero-badge',
          type: 'badge',
          props: {
            content: '💼 Global Private Equity & Venture Capital Holding',
            variant: 'primary',
            background: 'rgba(16, 185, 129, 0.15)',
            color: '#34d399',
            size: 'medium',
          },
        },
        {
          id: 'cap-hero-heading',
          type: 'heading',
          props: {
            content: 'Mengalokasikan Modal Strategis Untuk Membentuk Pemimpin Industri Masa Depan',
            level: 'h1',
            fontSize: '56px',
            fontWeight: '900',
            color: '#ffffff',
            lineHeight: '1.15',
          },
        },
        {
          id: 'cap-hero-text',
          type: 'text',
          props: {
            content: 'Vanguard Apex Capital Group mengelola $4.2B AUM dengan rekam jejak 28 tahun dalam pendanaan pertumbuhan (Growth Equity), Buyout Korporat, dan ekosistem modal ventura tahap lanjut (Late-Stage) di Asia Pasifik & Amerika Utara.',
            fontSize: '18px',
            color: '#9ca3af',
            lineHeight: '1.7',
          },
        },
        {
          id: 'cap-hero-btn-1',
          type: 'button',
          props: {
            label: 'Jelajahi Portofolio Unggulan →',
            href: '#portfolio',
            variant: 'primary',
            size: 'large',
            radius: 'xl',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: '#ffffff',
            fontWeight: '700',
          },
        },
        {
          id: 'cap-hero-btn-2',
          type: 'button',
          props: {
            label: 'Unduh Track Record & Fund V Deck (PDF)',
            href: '#inquiry',
            variant: 'outline',
            size: 'large',
            radius: 'xl',
            border: '1px solid #374151',
            color: '#f9fafb',
            fontWeight: '600',
          },
        },
        {
          id: 'cap-hero-card-1',
          type: 'card',
          props: { background: 'rgba(17, 24, 39, 0.85)', border: '1px solid rgba(16, 185, 129, 0.3)', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'chc1-badge', type: 'badge', props: { content: 'Total Capital Under Management', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', size: 'small' } },
            { id: 'chc1-head', type: 'heading', props: { content: 'Assets Under Management (AUM)', level: 'h4', fontSize: '14px', color: '#9ca3af' } },
            { id: 'chc1-txt', type: 'text', props: { content: '$4.2B USD', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
          ],
        },
        {
          id: 'cap-hero-card-2',
          type: 'card',
          props: { background: 'rgba(17, 24, 39, 0.85)', border: '1px solid rgba(16, 185, 129, 0.3)', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'chc2-badge', type: 'badge', props: { content: 'Net IRR Track Record', background: 'rgba(52, 211, 153, 0.2)', color: '#34d399', size: 'small' } },
            { id: 'chc2-head', type: 'heading', props: { content: 'Historis Kembalian Bersih Sejak 2004', level: 'h4', fontSize: '14px', color: '#9ca3af' } },
            { id: 'chc2-txt', type: 'text', props: { content: '28.4% Net IRR', fontSize: '32px', fontWeight: '800', color: '#10b981' } },
          ],
        },
      ],
    },
    {
      id: 'cap-portfolio',
      type: 'services',
      layout: 'holding-portfolio-capital',
      components: [
        {
          id: 'c-port-badge',
          type: 'badge',
          props: { content: 'ACTIVE PORTFOLIO & HISTORIC EXITS', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', size: 'medium' },
        },
        {
          id: 'c-port-heading',
          type: 'heading',
          props: { content: 'Portofolio Perusahaan Kategori Unicorn & Ekspansi Lanjut', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'c-port-text',
          type: 'text',
          props: { content: 'Investasi terpilih kami di perusahaan teknologi mutakhir, infrastruktur finansial terdesentralisasi, manufaktur bioteknologi, dan logistik digital.', fontSize: '16px', color: '#9ca3af' },
        },
        {
          id: 'c-port-card-1',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'cpc1-icon', type: 'icon', props: { name: 'CreditCard', size: 32, color: '#34d399' } },
            { id: 'cpc1-badge', type: 'badge', props: { content: 'FinTech Infrastructure | Series D', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'cpc1-head', type: 'heading', props: { content: 'OmniPay Global Network', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cpc1-txt', type: 'text', props: { content: 'Jaringan cross-border settlement mata uang multi-koridor Asia-AS yang memproses $32B GMV per tahun.', fontSize: '14px', color: '#9ca3af' } },
            { id: 'cpc1-btn', type: 'button', props: { label: 'Lihat Case Study Investasi →', href: '#', variant: 'ghost', size: 'small', color: '#34d399' } },
          ],
        },
        {
          id: 'c-port-card-2',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'cpc2-icon', type: 'icon', props: { name: 'Dna', size: 32, color: '#34d399' } },
            { id: 'cpc2-badge', type: 'badge', props: { content: 'BioTech Genomics | Series C', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'cpc2-head', type: 'heading', props: { content: 'HelixThera BioPharma', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cpc2-txt', type: 'text', props: { content: 'Platform terapi gen berbasis mRNA presisi tinggi untuk onkologi tahap klinis Phase-II yang didukung 14 paten global.', fontSize: '14px', color: '#9ca3af' } },
            { id: 'cpc2-btn', type: 'button', props: { label: 'Lihat Case Study Investasi →', href: '#', variant: 'ghost', size: 'small', color: '#34d399' } },
          ],
        },
        {
          id: 'c-port-card-3',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'cpc3-icon', type: 'icon', props: { name: 'CloudRain', size: 32, color: '#34d399' } },
            { id: 'cpc3-badge', type: 'badge', props: { content: 'Climate AI & Clean Grid | Series B', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'cpc3-head', type: 'heading', props: { content: 'AuraGrid Intelligent Energy', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cpc3-txt', type: 'text', props: { content: 'Sistem komputasi edge dan sensor AI untuk penyeimbangan daya beban jaringan gardu induk energi terbarukan.', fontSize: '14px', color: '#9ca3af' } },
            { id: 'cpc3-btn', type: 'button', props: { label: 'Lihat Case Study Investasi →', href: '#', variant: 'ghost', size: 'small', color: '#34d399' } },
          ],
        },
        {
          id: 'c-port-card-4',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'cpc4-icon', type: 'icon', props: { name: 'Layers', size: 32, color: '#34d399' } },
            { id: 'cpc4-badge', type: 'badge', props: { content: 'Enterprise SaaS | NASDAQ IPO Exit', background: 'rgba(52, 211, 153, 0.2)', color: '#34d399', size: 'small' } },
            { id: 'cpc4-head', type: 'heading', props: { content: 'CloudMatrix Security Corp', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cpc4-txt', type: 'text', props: { content: 'Sukses melantai di bursa NASDAQ dengan kapitalisasi pasar $5.8B, menghasilkan 8.4x MOIC bagi fund pemodal awal.', fontSize: '14px', color: '#9ca3af' } },
            { id: 'cpc4-btn', type: 'button', props: { label: 'Lihat Case Study Investasi →', href: '#', variant: 'ghost', size: 'small', color: '#34d399' } },
          ],
        },
      ],
    },
    {
      id: 'cap-thesis',
      type: 'about',
      layout: 'holding-thesis-capital',
      components: [
        {
          id: 'ct-badge',
          type: 'badge',
          props: { content: 'INVESTMENT THESIS & DISCIPLINE', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', size: 'medium' },
        },
        {
          id: 'ct-heading',
          type: 'heading',
          props: { content: 'Tiga Pilar Alokasi Modal & Penciptaan Nilai Berkelanjutan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'ct-text',
          type: 'text',
          props: { content: 'Kami tidak sekadar menyediakan modal likuiditas, tetapi bermitra aktif melalui dewan direksi, restrukturisasi M&A, ekspansi pasar global, dan penguatan tata kelola.', fontSize: '16px', color: '#9ca3af' },
        },
        {
          id: 'ct-card-1',
          type: 'card',
          props: { background: '#0a0f1d', border: '1px solid rgba(16, 185, 129, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'ctc1-head', type: 'heading', props: { content: '01. Deep Market Moat & IP Keunggulan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'ctc1-txt', type: 'text', props: { content: 'Fokus pada perusahaan dengan efek jaringan (network effects) yang kuat, keunggulan algoritma unik, atau hak paten eksklusif.', fontSize: '14px', color: '#9ca3af' } },
          ],
        },
        {
          id: 'ct-card-2',
          type: 'card',
          props: { background: '#0a0f1d', border: '1px solid rgba(16, 185, 129, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'ctc2-head', type: 'heading', props: { content: '02. Capital-Efficient Scalability', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'ctc2-txt', type: 'text', props: { content: 'Model bisnis dengan rasio LTV/CAC > 4x, margin kotor di atas 65%, dan jalur yang terbukti menuju profitabilitas kas positif.', fontSize: '14px', color: '#9ca3af' } },
          ],
        },
        {
          id: 'ct-card-3',
          type: 'card',
          props: { background: '#0a0f1d', border: '1px solid rgba(16, 185, 129, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'ctc3-head', type: 'heading', props: { content: '03. Global Expansion Synergy', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'ctc3-txt', type: 'text', props: { content: 'Akses instan ke jaringan korporasi multinasional, mitra perbankan global, dan jalur listing bursa saham tier-1 (NYSE, NASDAQ, SGX, IDX).', fontSize: '14px', color: '#9ca3af' } },
          ],
        },
      ],
    },
    {
      id: 'cap-metrics',
      type: 'about',
      layout: 'holding-metrics-capital',
      components: [
        {
          id: 'cm-badge',
          type: 'badge',
          props: { content: 'FUND PERFORMANCE & KEY FINANCIAL METRICS', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', size: 'medium' },
        },
        {
          id: 'cm-heading',
          type: 'heading',
          props: { content: 'Rekam Jejak Kinerja & Kembalian Modal Kumulatif', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'cm-stat-1',
          type: 'statistic',
          props: { value: '$4.2B+', label: 'Total AUM Terkelola', description: 'Lintas 5 dana ventura & private equity aktif', color: '#34d399' },
        },
        {
          id: 'cm-stat-2',
          type: 'statistic',
          props: { value: '28.4%', label: 'Historis Net IRR', description: 'Kembalian tahunan bersih rata-rata investor', color: '#ffffff' },
        },
        {
          id: 'cm-stat-3',
          type: 'statistic',
          props: { value: '18 IPOs', label: 'Sukses Melantai di Bursa', description: 'Termasuk di NYSE, NASDAQ, SGX, dan IDX', color: '#34d399' },
        },
        {
          id: 'cm-stat-4',
          type: 'statistic',
          props: { value: '4.1x', label: 'Rata-rata MOIC Exits', description: 'Multiple on Invested Capital realisasi', color: '#10b981' },
        },
      ],
    },
    {
      id: 'cap-partners',
      type: 'team',
      layout: 'holding-partners-capital',
      components: [
        {
          id: 'cp-badge',
          type: 'badge',
          props: { content: 'GENERAL PARTNERS & INVESTMENT COMMITTEE', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', size: 'medium' },
        },
        {
          id: 'cp-heading',
          type: 'heading',
          props: { content: 'Tim Pengelola Dana & Partner Investasi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'cp-text',
          type: 'text',
          props: { content: 'Kombinasi mantan pendiri perusahaan teknologi seri miliaran dolar, bankir investasi Wall Street, dan pakar riset industri kuantitatif.', fontSize: '16px', color: '#9ca3af' },
        },
        {
          id: 'cp-card-1',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'cpc1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80', alt: 'Victoria Chen', radius: 'xl' } },
            { id: 'cpc1-head', type: 'heading', props: { content: 'Victoria Chen, MBA', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cpc1-badge', type: 'badge', props: { content: 'Managing Partner & Co-Founder', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'cpc1-txt', type: 'text', props: { content: 'Mantan Managing Director Goldman Sachs Tech M&A Asia Pasifik dengan 22 tahun pengalaman alokasi modal institusional.', fontSize: '13px', color: '#9ca3af' } },
            { id: 'cpc1-btn', type: 'button', props: { label: 'Profil Partner →', href: '#', variant: 'ghost', size: 'small', color: '#34d399' } },
          ],
        },
        {
          id: 'cp-card-2',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'cpc2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80', alt: 'Alexander Sterling', radius: 'xl' } },
            { id: 'cpc2-head', type: 'heading', props: { content: 'Alexander Sterling, Ph.D.', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cpc2-badge', type: 'badge', props: { content: 'General Partner — Deep Tech & AI', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'cpc2-txt', type: 'text', props: { content: 'Alumni Stanford & MIT, mantan VP Engineering di Silicon Valley dengan 18 paten sistem komputasi terdistribusi.', fontSize: '13px', color: '#9ca3af' } },
            { id: 'cpc2-btn', type: 'button', props: { label: 'Profil Partner →', href: '#', variant: 'ghost', size: 'small', color: '#34d399' } },
          ],
        },
        {
          id: 'cp-card-3',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'cpc3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80', alt: 'Sarah Salim', radius: 'xl' } },
            { id: 'cpc3-head', type: 'heading', props: { content: 'Sarah Salim, CFA', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cpc3-badge', type: 'badge', props: { content: 'General Partner — FinTech & ASEAN', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'cpc3-txt', type: 'text', props: { content: 'Memimpin investasi 8 FinTech terkemuka di Asia Tenggara dan restrukturisasi transaksi perbankan regional.', fontSize: '13px', color: '#9ca3af' } },
            { id: 'cpc3-btn', type: 'button', props: { label: 'Profil Partner →', href: '#', variant: 'ghost', size: 'small', color: '#34d399' } },
          ],
        },
      ],
    },
    {
      id: 'cap-syndicate',
      type: 'pricing',
      layout: 'holding-syndicate-capital',
      components: [
        {
          id: 'cs-badge',
          type: 'badge',
          props: { content: 'FUND STRUCTURES & LP VEHICLES', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', size: 'medium' },
        },
        {
          id: 'cs-heading',
          type: 'heading',
          props: { content: 'Struktur Dana Investasi & Pembagian Sindikasi Modal', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'cs-text',
          type: 'text',
          props: { content: 'Dirancang khusus untuk Sovereign Wealth Funds (SWF), Family Offices tier-1, dan Investor Institusional berlisensi internasional.', fontSize: '16px', color: '#9ca3af' },
        },
        {
          id: 'cs-card-1',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: 'xl', padding: '32px' },
          childrenComponents: [
            { id: 'csc1-badge', type: 'badge', props: { content: 'Fund V — Growth Stage', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'csc1-head', type: 'heading', props: { content: 'Apex Growth Fund V (USD 1.5B)', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'csc1-txt', type: 'text', props: { content: 'Fokus pada putaran Seri B hingga Pre-IPO untuk perusahaan teknologi AI dan infrastruktur finansial berpendapatan terbukti.', fontSize: '14px', color: '#9ca3af' } },
            { id: 'csc1-btn', type: 'button', props: { label: 'Permintaan Prospektus Fund V →', href: '#inquiry', variant: 'primary', background: '#10b981', color: '#ffffff', size: 'small' } },
          ],
        },
        {
          id: 'cs-card-2',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: 'xl', padding: '32px' },
          childrenComponents: [
            { id: 'csc2-badge', type: 'badge', props: { content: 'Special Situations & Buyout', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'csc2-head', type: 'heading', props: { content: 'Apex Strategic Buyout Fund (USD 2.0B)', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'csc2-txt', type: 'text', props: { content: 'Akuisisi kepemilikan mayoritas perusahaan industri matang untuk transformasi digital, efisiensi rantai pasok, dan ekspansi regional.', fontSize: '14px', color: '#9ca3af' } },
            { id: 'csc2-btn', type: 'button', props: { label: 'Permintaan Prospektus Buyout →', href: '#inquiry', variant: 'primary', background: '#10b981', color: '#ffffff', size: 'small' } },
          ],
        },
      ],
    },
    {
      id: 'cap-news',
      type: 'about',
      layout: 'holding-news-capital',
      components: [
        {
          id: 'cn-badge',
          type: 'badge',
          props: { content: 'PRESS RELEASES & TRANSACTION ANNOUNCEMENTS', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', size: 'medium' },
        },
        {
          id: 'cn-heading',
          type: 'heading',
          props: { content: 'Berita Transaksi M&A, Exit & Portofolio Terkini', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'cn-card-1',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'cnc1-badge', type: 'badge', props: { content: '24 Maret 2026 | Deal Announcement', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
            { id: 'cnc1-head', type: 'heading', props: { content: 'Vanguard Apex Memimpin Putaran Seri D Senilai $180M di OmniPay Global Network', level: 'h4', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cnc1-txt', type: 'text', props: { content: 'Pendanaan strategis ini akan mempercepat integrasi jaringan penyelesaian kliring lintas negara di 14 negara Asia Pasifik.', fontSize: '13px', color: '#9ca3af' } },
          ],
        },
        {
          id: 'cn-card-2',
          type: 'card',
          props: { background: '#111827', border: '1px solid #1f2937', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'cnc2-badge', type: 'badge', props: { content: '10 Februari 2026 | IPO Exit Update', background: 'rgba(52, 211, 153, 0.2)', color: '#34d399', size: 'small' } },
            { id: 'cnc2-head', type: 'heading', props: { content: 'HelixThera Menyelesaikan Registrasi Form S-1 di Komisi Sekuritas dan Bursa AS (SEC)', level: 'h4', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
            { id: 'cnc2-txt', type: 'text', props: { content: 'Rencana penawaran umum perdana di bursa NASDAQ dijadwalkan pada Q3 2026 dengan valuasi indikatif $2.4B.', fontSize: '13px', color: '#9ca3af' } },
          ],
        },
      ],
    },
    {
      id: 'cap-inquiry',
      type: 'contact',
      layout: 'holding-inquiry-capital',
      components: [
        {
          id: 'ci-badge',
          type: 'badge',
          props: { content: 'INSTITUTIONAL LP & FOUNDER PITCH INQUIRY', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', size: 'medium' },
        },
        {
          id: 'ci-heading',
          type: 'heading',
          props: { content: 'Mulai Diskusi Alokasi Modal atau Kirimkan Pitch Deck Startup Anda', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'ci-text',
          type: 'text',
          props: { content: 'Tim investasi kami mengulas setiap proposal secara berkala dan menjaga kerahasiaan penuh di bawah payung Non-Disclosure Agreement (NDA) standar institusional.', fontSize: '16px', color: '#9ca3af' },
        },
        {
          id: 'ci-btn-1',
          type: 'button',
          props: { label: 'Jadwalkan Private Briefing LP 🔒', href: '#', variant: 'primary', background: '#10b981', color: '#ffffff', size: 'large' },
        },
        {
          id: 'ci-btn-2',
          type: 'button',
          props: { label: 'Kirim Pitch Deck (founders@apexcap.com)', href: 'mailto:founders@apexcap.com', variant: 'outline', border: '1px solid #374151', color: '#f9fafb', size: 'large' },
        },
      ],
    },
    {
      id: 'cap-footer',
      type: 'footer',
      layout: 'holding-footer-capital',
      components: [
        {
          id: 'cfoot-heading',
          type: 'heading',
          props: { content: 'VANGUARD APEX CAPITAL GROUP', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'cfoot-text-1',
          type: 'text',
          props: { content: 'One Marina Bay Tower Level 42, Marina Bay Financial Centre, Singapore 018981. Kantor Perwakilan: New York (Madison Ave) | London (Mayfair) | Jakarta (SCBD).', fontSize: '14px', color: '#9ca3af' },
        },
        {
          id: 'cfoot-card-1',
          type: 'card',
          props: { background: 'transparent' },
          childrenComponents: [
            { id: 'cfc-head-1', type: 'heading', props: { content: 'Fund & Strategi', level: 'h5', fontSize: '15px', color: '#ffffff' } },
            { id: 'cfc-btn-1a', type: 'button', props: { label: 'Apex Growth Fund V', href: '#', variant: 'ghost', size: 'small', color: '#9ca3af' } },
            { id: 'cfc-btn-1b', type: 'button', props: { label: 'Strategic Buyout Fund', href: '#', variant: 'ghost', size: 'small', color: '#9ca3af' } },
            { id: 'cfc-btn-1c', type: 'button', props: { label: 'DeepTech & AI Ventures', href: '#', variant: 'ghost', size: 'small', color: '#9ca3af' } },
          ],
        },
        {
          id: 'cfoot-card-2',
          type: 'card',
          props: { background: 'transparent' },
          childrenComponents: [
            { id: 'cfc-head-2', type: 'heading', props: { content: 'Portal LP & Kepatuhan', level: 'h5', fontSize: '15px', color: '#ffffff' } },
            { id: 'cfc-btn-2a', type: 'button', props: { label: 'Akses Portal LP Secure', href: '#', variant: 'ghost', size: 'small', color: '#9ca3af' } },
            { id: 'cfc-btn-2b', type: 'button', props: { label: 'Regulatory Disclosure MAS/SEC', href: '#', variant: 'ghost', size: 'small', color: '#9ca3af' } },
            { id: 'cfc-btn-2c', type: 'button', props: { label: 'Prinsip Investasi Bertanggung Jawab PRI', href: '#', variant: 'ghost', size: 'small', color: '#9ca3af' } },
          ],
        },
        {
          id: 'cfoot-text-2',
          type: 'text',
          props: { content: '© 2026 Vanguard Apex Capital Management LLC. Dokumen ini hanya diperuntukkan bagi Investor Terakreditasi dan bukan merupakan penawaran umum surat berharga.', fontSize: '12px', color: '#6b7280' },
        },
      ],
    },
  ],
};
