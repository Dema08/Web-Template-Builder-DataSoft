/**
 * Nusantara Strategic Holdings Tbk — Diversified National Conglomerate
 * Exclusive Premium Starter Template untuk Grup Perusahaan Multi-Sektor Terintegrasi.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'holding-enterprise',
  name: 'Nusantara Strategic Holdings Tbk',
  description: 'Template premium eksklusif untuk konglomerasi bisnis nasional multi-sektor terintegrasi (Energi Terbarukan, Terminal Pelabuhan Maritim, Agro-Industri Presisi, & Digital FinTech). Dilengkapi live IDX ticker, portfolio showcase interaktif, pilar ESG Net-Zero 2060, profil Dewan Komisaris & Direksi, ringkasan laporan keuangan teraudit, milestone sejarah konglomerasi, dan portal keterbukaan informasi investor relations.',
  thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
  tags: ['Holding Company', 'Conglomerate', 'Multi-Industry', 'Investor Relations', 'ESG', 'Enterprise', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#0f172a',
    secondaryColor: '#1e293b',
    accentColor: '#0ea5e9',
    goldAccent: '#d97706',
    dark: true,
    surface: '#020617',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#334155',
    radius: 'xl',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift', 'glow-pulse'],
  sections: [
    {
      id: 'holding-nav',
      type: 'navbar',
      layout: 'holding-nav-conglomerate',
      components: [
        {
          id: 'conglom-logo',
          type: 'heading',
          props: {
            content: 'NUSANTARA HOLDINGS',
            level: 'h2',
            fontSize: '20px',
            fontWeight: '900',
            color: '#ffffff',
            letterSpacing: '0.08em',
          },
        },
        {
          id: 'nav-item-1',
          type: 'button',
          props: { label: 'Portofolio Bisnis', href: '#portfolio', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-item-2',
          type: 'button',
          props: { label: 'Kinerja Keuangan', href: '#financials', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-item-3',
          type: 'button',
          props: { label: 'Komitmen ESG', href: '#esg', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-item-4',
          type: 'button',
          props: { label: 'Dewan Direksi', href: '#leadership', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'nav-item-5',
          type: 'button',
          props: { label: 'Jejak Sejarah', href: '#timeline', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' },
        },
        {
          id: 'cta-investor',
          type: 'button',
          props: {
            label: 'Portal Investor Tbk →',
            href: '#investor',
            variant: 'primary',
            size: 'small',
            radius: 'lg',
            background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
            color: '#ffffff',
            fontWeight: '700',
          },
        },
      ],
    },
    {
      id: 'holding-hero',
      type: 'hero',
      layout: 'holding-hero-conglomerate',
      components: [
        {
          id: 'hero-conglom-badge',
          type: 'badge',
          props: {
            content: '🏛️ Membangun Kedaulatan Industri & Nilai Strategis Nasional',
            variant: 'primary',
            background: 'rgba(14, 165, 233, 0.15)',
            color: '#38bdf8',
            size: 'medium',
          },
        },
        {
          id: 'hero-conglom-heading',
          type: 'heading',
          props: {
            content: 'Menggerakkan Transformasi Ekonomi Nasional Melalui Ekosistem Bisnis Terpadu',
            level: 'h1',
            fontSize: '54px',
            fontWeight: '900',
            color: '#ffffff',
            lineHeight: '1.15',
          },
        },
        {
          id: 'hero-conglom-text',
          type: 'text',
          props: {
            content: 'Nusantara Strategic Holdings Tbk memimpin investasi strategis lintas 4 pilar industri vital: Transisi Energi Bersih, Infrastruktur Maritim & Logistik Pelabuhan, Pangan & Agro-Presisi, serta Inovasi Teknologi Digital & FinTech.',
            fontSize: '18px',
            color: '#94a3b8',
            lineHeight: '1.7',
          },
        },
        {
          id: 'hero-conglom-btn-1',
          type: 'button',
          props: {
            label: 'Jelajahi Ekosistem Bisnis Kami →',
            href: '#portfolio',
            variant: 'primary',
            size: 'large',
            radius: 'xl',
            background: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
            color: '#ffffff',
            fontWeight: '700',
          },
        },
        {
          id: 'hero-conglom-btn-2',
          type: 'button',
          props: {
            label: 'Unduh Annual Report 2025 (PDF)',
            href: '#financials',
            variant: 'outline',
            size: 'large',
            radius: 'xl',
            border: '1px solid #334155',
            color: '#f8fafc',
            fontWeight: '600',
          },
        },
        {
          id: 'hero-card-1',
          type: 'card',
          props: { background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(14, 165, 233, 0.3)', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'hc1-badge', type: 'badge', props: { content: 'IDX: NSTR', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', size: 'small' } },
            { id: 'hc1-head', type: 'heading', props: { content: 'Total Asset Under Holding', level: 'h4', fontSize: '15px', color: '#94a3b8' } },
            { id: 'hc1-txt', type: 'text', props: { content: 'Rp 148.5 Triliun', fontSize: '28px', fontWeight: '800', color: '#ffffff' } },
          ],
        },
        {
          id: 'hero-card-2',
          type: 'card',
          props: { background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(14, 165, 233, 0.3)', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'hc2-badge', type: 'badge', props: { content: 'Konsolidasi Grup', background: 'rgba(14, 165, 233, 0.2)', color: '#38bdf8', size: 'small' } },
            { id: 'hc2-head', type: 'heading', props: { content: 'Tenaga Kerja Profesional', level: 'h4', fontSize: '15px', color: '#94a3b8' } },
            { id: 'hc2-txt', type: 'text', props: { content: '38,500+ Karyawan', fontSize: '28px', fontWeight: '800', color: '#ffffff' } },
          ],
        },
        {
          id: 'conglom-hero-card',
          type: 'card',
          props: {
            background: '#091b33',
            borderColor: '#334155',
            borderWidth: '1px',
            borderRadius: '24px',
            padding: '0px',
            shadow: '2xl',
          },
          childrenComponents: [
            {
              id: 'conglom-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80',
                alt: 'Nusantara Strategic Holdings Tower',
                width: '100%',
                height: '440px',
                objectFit: 'cover',
                borderRadius: '24px 24px 0 0',
              },
            },
            {
              id: 'conglom-gov-card',
              type: 'card',
              props: {
                background: 'rgba(15, 23, 42, 0.95)',
                borderColor: 'rgba(51, 65, 85, 0.8)',
                borderWidth: '1px',
                borderRadius: '16px',
                padding: '16px',
                margin: '-70px 16px 16px 16px',
                shadow: 'xl',
              },
              childrenComponents: [
                {
                  id: 'conglom-gov-header',
                  type: 'card',
                  props: { background: 'transparent', borderWidth: '0px', padding: '0px', margin: '0 0 8px 0' },
                  childrenComponents: [
                    { id: 'cg-title', type: 'heading', props: { content: 'CORPORATE GOVERNANCE SUMMARY', level: 'h4', fontSize: '13px', fontWeight: '900', color: '#fbbf24', margin: '0' } },
                    { id: 'cg-badge', type: 'badge', props: { text: 'GCG Score 96.8 / 100', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#34d399' } },
                  ],
                },
                { id: 'cg-auditor', type: 'text', props: { content: 'Auditor Independen: PricewaterhouseCoopers (PwC)', fontSize: '12px', color: '#cbd5e1', fontWeight: '600' } },
                { id: 'cg-rating', type: 'text', props: { content: 'Peringkat Kredit: idAAA (Pefindo) / Baa2 (Moody\'s)', fontSize: '12px', color: '#fbbf24', fontWeight: '600' } },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'holding-portfolio',
      type: 'services',
      layout: 'holding-portfolio-conglomerate',
      components: [
        {
          id: 'port-badge',
          type: 'badge',
          props: { content: 'PORTFOLIO PERUSAHAAN ANAK & ENTITAS ASOSIASI', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'medium' },
        },
        {
          id: 'port-heading',
          type: 'heading',
          props: { content: '4 Pilar Portofolio Bisnis Terintegrasi Skala Nasional', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'port-text',
          type: 'text',
          props: { content: 'Masing-masing pilar beroperasi secara independen dengan standar tata kelola korporat kelas dunia, saling bersinergi dalam rantai nilai konglomerasi Nusantara.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'port-card-1',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'pc1-icon', type: 'icon', props: { name: 'Zap', size: 32, color: '#38bdf8' } },
            { id: 'pc1-badge', type: 'badge', props: { content: 'Pilar Energi Terbarukan', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', size: 'small' } },
            { id: 'pc1-heading', type: 'heading', props: { content: 'PT Nusantara Power & Clean Energy', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'pc1-text', type: 'text', props: { content: 'Pengembang dan operator PLTS Terapung, Panas Bumi (Geothermal), serta jaringan transmisi interkoneksi hijau berkapasitas 2.400 MW di 12 provinsi.', fontSize: '14px', color: '#94a3b8' } },
            { id: 'pc1-btn', type: 'button', props: { label: 'Profil Entitas Anak →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
        {
          id: 'port-card-2',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'pc2-icon', type: 'icon', props: { name: 'Anchor', size: 32, color: '#38bdf8' } },
            { id: 'pc2-badge', type: 'badge', props: { content: 'Pilar Infrastruktur Maritim', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', size: 'small' } },
            { id: 'pc2-heading', type: 'heading', props: { content: 'PT Nusantara Maritime Terminals Tbk', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'pc2-text', type: 'text', props: { content: 'Pengelola 7 pelabuhan peti kemas laut dalam dan armada kapal logistik curah cair terintegrasi di Alur Laut Kepulauan Indonesia (ALKI).', fontSize: '14px', color: '#94a3b8' } },
            { id: 'pc2-btn', type: 'button', props: { label: 'Profil Entitas Anak →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
        {
          id: 'port-card-3',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'pc3-icon', type: 'icon', props: { name: 'Wheat', size: 32, color: '#38bdf8' } },
            { id: 'pc3-badge', type: 'badge', props: { content: 'Pilar Agro & Pangan Presisi', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', size: 'small' } },
            { id: 'pc3-heading', type: 'heading', props: { content: 'PT Nusantara Agro Lestari', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'pc3-text', type: 'text', props: { content: 'Pengolahan komoditas pangan berkelanjutan, hilirisasi perkebunan terintegrasi RSPO/ISPO, dan manufaktur bio-based kemasan ramah lingkungan.', fontSize: '14px', color: '#94a3b8' } },
            { id: 'pc3-btn', type: 'button', props: { label: 'Profil Entitas Anak →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
        {
          id: 'port-card-4',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '32px' },
          childrenComponents: [
            { id: 'pc4-icon', type: 'icon', props: { name: 'Cpu', size: 32, color: '#38bdf8' } },
            { id: 'pc4-badge', type: 'badge', props: { content: 'Pilar Digital FinTech & AI', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', size: 'small' } },
            { id: 'pc4-heading', type: 'heading', props: { content: 'PT Nusantara Digital Inovasi', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
            { id: 'pc4-text', type: 'text', props: { content: 'Pusat data Tier-4, platform pembayaran enterprise, supply chain finance, dan solusi analitik kecerdasan buatan untuk ekosistem industri.', fontSize: '14px', color: '#94a3b8' } },
            { id: 'pc4-btn', type: 'button', props: { label: 'Profil Entitas Anak →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
      ],
    },
    {
      id: 'holding-stats',
      type: 'about',
      layout: 'holding-stats-conglomerate',
      components: [
        {
          id: 'stat-badge',
          type: 'badge',
          props: { content: 'DAMPAK & SKALA OPERASIONAL GRUP', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'medium' },
        },
        {
          id: 'stat-heading',
          type: 'heading',
          props: { content: 'Kekuatan Finansial, Fondasi Aset & Pengaruh Industri', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'stat-item-1',
          type: 'statistic',
          props: { value: 'Rp 148.5T', label: 'Total Aset Konsolidasi', description: 'Pertumbuhan CAGR 14.2% dalam 5 tahun terakhir', color: '#38bdf8' },
        },
        {
          id: 'stat-item-2',
          type: 'statistic',
          props: { value: '38,500+', label: 'Tenaga Kerja Langsung', description: 'Termasuk 6.400+ insinyur & teknisi bersertifikasi', color: '#ffffff' },
        },
        {
          id: 'stat-item-3',
          type: 'statistic',
          props: { value: '28 Entitas', label: 'Perusahaan Anak & Afiliasi', description: 'Beroperasi di 34 provinsi dan 6 hub ekspor Asia Pasifik', color: '#38bdf8' },
        },
        {
          id: 'stat-item-4',
          type: 'statistic',
          props: { value: 'AAA (idn)', label: 'Peringkat Kredit Korporat', description: 'Pefindo Rating dengan prospek stabil', color: '#4ade80' },
        },
      ],
    },
    {
      id: 'holding-esg',
      type: 'about',
      layout: 'holding-esg-conglomerate',
      components: [
        {
          id: 'esg-badge',
          type: 'badge',
          props: { content: 'SUSTAINABILITY & GOVERNANCE', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', size: 'medium' },
        },
        {
          id: 'esg-heading',
          type: 'heading',
          props: { content: 'Akselerasi Dekarbonisasi & Komitmen Net-Zero 2060', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'esg-text',
          type: 'text',
          props: { content: 'Kami mengintegrasikan prinsip Lingkungan, Sosial, dan Tata Kelola (ESG) dalam setiap keputusan alokasi modal holding, investasi baru, dan operasi pabrik.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'esg-btn',
          type: 'button',
          props: { label: 'Unduh Sustainability Report 2025 (GRI Standards) →', href: '#', variant: 'outline', border: '1px solid #22c55e', color: '#4ade80', size: 'medium' },
        },
        {
          id: 'esg-card-1',
          type: 'card',
          props: { background: '#020617', border: '1px solid rgba(34, 197, 94, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'ec1-icon', type: 'icon', props: { name: 'Leaf', size: 28, color: '#4ade80' } },
            { id: 'ec1-badge', type: 'badge', props: { content: 'Environmental Pillar', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', size: 'small' } },
            { id: 'ec1-heading', type: 'heading', props: { content: '34% Reduksi Emisi Karbon GRK', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'ec1-text', type: 'text', props: { content: 'Transisi 100% armada operasional pelabuhan ke baterai EV dan pemanfaatan solar PV rooftop di seluruh fasilitas pergudangan.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'esg-card-2',
          type: 'card',
          props: { background: '#020617', border: '1px solid rgba(14, 165, 233, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'ec2-icon', type: 'icon', props: { name: 'Users', size: 28, color: '#38bdf8' } },
            { id: 'ec2-badge', type: 'badge', props: { content: 'Social Pillar', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'small' } },
            { id: 'ec2-heading', type: 'heading', props: { content: '120.000+ Penerima Manfaat CSR', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'ec2-text', type: 'text', props: { content: 'Program beasiswa vokasi sains Maritim, pemberdayaan 1.200 UMKM mitra petani, dan akses air bersih pedesaan lingkar tambang.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'esg-card-3',
          type: 'card',
          props: { background: '#020617', border: '1px solid rgba(217, 119, 6, 0.3)', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'ec3-icon', type: 'icon', props: { name: 'ShieldCheck', size: 28, color: '#fbbf24' } },
            { id: 'ec3-badge', type: 'badge', props: { content: 'Governance Pillar', background: 'rgba(217, 119, 6, 0.1)', color: '#fbbf24', size: 'small' } },
            { id: 'ec3-heading', type: 'heading', props: { content: 'ISO 37001 Sistem Anti-Suap', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'ec3-text', type: 'text', props: { content: 'Komite Audit & Manajemen Risiko independen dengan Whistleblowing System (WBS) terverifikasi lembaga independen.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
      ],
    },
    {
      id: 'holding-leadership',
      type: 'team',
      layout: 'holding-leadership-conglomerate',
      components: [
        {
          id: 'lead-badge',
          type: 'badge',
          props: { content: 'LEADERSHIP & GOVERNANCE', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'medium' },
        },
        {
          id: 'lead-heading',
          type: 'heading',
          props: { content: 'Dewan Komisaris & Direksi Nusantara Strategic Holdings', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'lead-text',
          type: 'text',
          props: { content: 'Dipimpin oleh figur profesional dengan rekam jejak kepemimpinan puluhan tahun di industri energi, perbankan investasi, teknik kelautan, dan regulasi pemerintah.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'lead-card-1',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'lc1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80', alt: 'Ir. Raden Suryohadiprojo', radius: 'xl' } },
            { id: 'lc1-head', type: 'heading', props: { content: 'Ir. Raden Suryohadiprojo, M.Sc.', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'lc1-badge', type: 'badge', props: { content: 'Presiden Komisaris Utama', background: 'rgba(217, 119, 6, 0.15)', color: '#fbbf24', size: 'small' } },
            { id: 'lc1-txt', type: 'text', props: { content: 'Mantan Direktur BUMN Infrastruktur dengan pengalaman 32 tahun dalam pengawasan tata kelola mega-proyek nasional.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'lc1-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
        {
          id: 'lead-card-2',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'lc2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80', alt: 'Dr. Maya Hartono', radius: 'xl' } },
            { id: 'lc2-head', type: 'heading', props: { content: 'Dr. Maya Hartono, CFA, MBA', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'lc2-badge', type: 'badge', props: { content: 'Presiden Direktur & Group CEO', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', size: 'small' } },
            { id: 'lc2-txt', type: 'text', props: { content: 'Alumni Harvard Business School, memimpin strategi ekspansi M&A dan transformasi digital holding lintas kawasan ASEAN.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'lc2-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
        {
          id: 'lead-card-3',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'lc3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80', alt: 'Bambang Pratama', radius: 'xl' } },
            { id: 'lc3-head', type: 'heading', props: { content: 'Bambang Pratama, SE, Ak.', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'lc3-badge', type: 'badge', props: { content: 'Direktur Keuangan & Alokasi Modal (CFO)', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', size: 'small' } },
            { id: 'lc3-txt', type: 'text', props: { content: 'Ahli perbankan investasi dan restrukturisasi modal sindikasi global dengan pengalaman di London, Singapura, dan Jakarta.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'lc3-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
        {
          id: 'lead-card-4',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'lc4-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80', alt: 'Anindya Kusuma', radius: 'xl' } },
            { id: 'lc4-head', type: 'heading', props: { content: 'Anindya Kusuma, B.Eng, M.IT', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
            { id: 'lc4-badge', type: 'badge', props: { content: 'Direktur Teknologi & Sinergi Operasional', background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', size: 'small' } },
            { id: 'lc4-txt', type: 'text', props: { content: 'Memimpin implementasi otomatisasi pelabuhan, IoT cerdas transmisi listrik, dan integrasi data induk holding.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'lc4-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
      ],
    },
    {
      id: 'holding-financials',
      type: 'pricing',
      layout: 'holding-financials-conglomerate',
      components: [
        {
          id: 'fin-badge',
          type: 'badge',
          props: { content: 'AUDITED FINANCIAL PERFORMANCE FY2025', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'medium' },
        },
        {
          id: 'fin-heading',
          type: 'heading',
          props: { content: 'Kinerja Keuangan Konsolidasi Yang Tangguh & Menguntungkan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'fin-text',
          type: 'text',
          props: { content: 'Laporan keuangan konsolidasi holding teraudit oleh Kantor Akuntan Publik Big Four, menunjukkan pertumbuhan EBITDA berkesinambungan dan rasio hutang yang sehat.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'fin-btn-1',
          type: 'button',
          props: { label: 'Unduh Laporan Keuangan Q4 2025 (Excel) 📊', href: '#', variant: 'outline', border: '1px solid #334155', color: '#ffffff', size: 'medium' },
        },
        {
          id: 'fin-btn-2',
          type: 'button',
          props: { label: 'Jadwal Paparan Publik & Earnings Call →', href: '#investor', variant: 'primary', background: '#0ea5e9', color: '#ffffff', size: 'medium' },
        },
        {
          id: 'fin-card-1',
          type: 'card',
          props: { background: '#020617', border: '1px solid #1e293b', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'fc1-badge', type: 'badge', props: { content: '+18.4% YoY', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', size: 'small' } },
            { id: 'fc1-heading', type: 'heading', props: { content: 'Pendapatan Konsolidasi', level: 'h4', fontSize: '16px', color: '#94a3b8' } },
            { id: 'fc1-val', type: 'text', props: { content: 'Rp 42.8 Triliun', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
            { id: 'fc1-desc', type: 'text', props: { content: 'Didorong oleh kenaikan volume throughput peti kemas maritim dan kapasitas pembangkit EBT baru.', fontSize: '13px', color: '#64748b' } },
          ],
        },
        {
          id: 'fin-card-2',
          type: 'card',
          props: { background: '#020617', border: '1px solid #1e293b', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'fc2-badge', type: 'badge', props: { content: '+22.1% YoY', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', size: 'small' } },
            { id: 'fc2-heading', type: 'heading', props: { content: 'EBITDA Operasional Grup', level: 'h4', fontSize: '16px', color: '#94a3b8' } },
            { id: 'fc2-val', type: 'text', props: { content: 'Rp 14.6 Triliun', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
            { id: 'fc2-desc', type: 'text', props: { content: 'Margin EBITDA menguat ke level 34.1% hasil efisiensi digital supply chain terpadu.', fontSize: '13px', color: '#64748b' } },
          ],
        },
        {
          id: 'fin-card-3',
          type: 'card',
          props: { background: '#020617', border: '1px solid #1e293b', radius: 'xl', padding: '28px' },
          childrenComponents: [
            { id: 'fc3-badge', type: 'badge', props: { content: '+15.7% YoY', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', size: 'small' } },
            { id: 'fc3-heading', type: 'heading', props: { content: 'Laba Bersih Entitas Induk', level: 'h4', fontSize: '16px', color: '#94a3b8' } },
            { id: 'fc3-val', type: 'text', props: { content: 'Rp 6.8 Triliun', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
            { id: 'fc3-desc', type: 'text', props: { content: 'Dividen Payout Ratio terjaga konsisten di kisaran 45% dari total laba bersih.', fontSize: '13px', color: '#64748b' } },
          ],
        },
      ],
    },
    {
      id: 'holding-timeline',
      type: 'timeline',
      layout: 'holding-timeline-conglomerate',
      components: [
        {
          id: 'time-badge',
          type: 'badge',
          props: { content: 'JEJAK SEJARAH & EVOLUSI KONGLOMERASI', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'medium' },
        },
        {
          id: 'time-heading',
          type: 'heading',
          props: { content: 'Tiga Dekade Membangun Ekosistem Industri Indonesia', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'time-text',
          type: 'text',
          props: { content: 'Dari entitas perdagangan komoditas maritim lokal pada tahun 1994 hingga menjelma menjadi salah satu konglomerasi bisnis publik terbesar di Indonesia.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'time-card-1',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'tc1-badge', type: 'badge', props: { content: 'Tahun 1994', background: 'rgba(14, 165, 233, 0.2)', color: '#38bdf8', size: 'small' } },
            { id: 'tc1-head', type: 'heading', props: { content: 'Pendirian & Fondasi Logistik Maritim', level: 'h4', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
            { id: 'tc1-txt', type: 'text', props: { content: 'Memulai operasi perintis pengangkutan komoditas antar pulau di Pelabuhan Tanjung Priok dengan 2 armada kapal kargo.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'time-card-2',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'tc2-badge', type: 'badge', props: { content: 'Tahun 2008', background: 'rgba(14, 165, 233, 0.2)', color: '#38bdf8', size: 'small' } },
            { id: 'tc2-head', type: 'heading', props: { content: 'Penawaran Umum Perdana Saham (IPO IDX)', level: 'h4', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
            { id: 'tc2-txt', type: 'text', props: { content: 'Resmi melantai di Bursa Efek Indonesia dengan kode saham NSTR, menghimpun dana ekspansi Rp 2.4 Triliun.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'time-card-3',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'tc3-badge', type: 'badge', props: { content: 'Tahun 2017', background: 'rgba(14, 165, 233, 0.2)', color: '#38bdf8', size: 'small' } },
            { id: 'tc3-head', type: 'heading', props: { content: 'Diversifikasi Energi Bersih & Agro-Industri', level: 'h4', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
            { id: 'tc3-txt', type: 'text', props: { content: 'Akuisisi portofolio pembangkit geothermal dan pendirian lini pengolahan kelapa sawit bersertifikasi ramah lingkungan.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
        {
          id: 'time-card-4',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
          childrenComponents: [
            { id: 'tc4-badge', type: 'badge', props: { content: 'Tahun 2026', background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', size: 'small' } },
            { id: 'tc4-head', type: 'heading', props: { content: 'Ekosistem Terintegrasi AI & Transisi Hijau', level: 'h4', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
            { id: 'tc4-txt', type: 'text', props: { content: 'Konsolidasi 28 entitas anak ke dalam payung holding berbasis data induk cerdas dan komitmen Net-Zero 2060.', fontSize: '14px', color: '#94a3b8' } },
          ],
        },
      ],
    },
    {
      id: 'holding-investor',
      type: 'contact',
      layout: 'holding-investor-conglomerate',
      components: [
        {
          id: 'inv-badge',
          type: 'badge',
          props: { content: 'INVESTOR RELATIONS & CORPORATE SECRETARY', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'medium' },
        },
        {
          id: 'inv-heading',
          type: 'heading',
          props: { content: 'Pusat Informasi Pemegang Saham & Keterbukaan Informasi Bursa', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'inv-text',
          type: 'text',
          props: { content: 'Tim Hubungan Investor Nusantara Strategic Holdings berkomitmen menyajikan informasi material yang transparan, akurat, dan tepat waktu bagi seluruh pemangku kepentingan.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'inv-btn-1',
          type: 'button',
          props: { label: 'Keterbukaan Informasi IDX →', href: 'https://idx.co.id', action: { type: 'card_form', formChannel: 'whatsapp', value: '081199887766', message: 'Halo Tim Hubungan Investor Nusantara Holdings, ada permohonan baru:' }, variant: 'primary', background: '#0ea5e9', color: '#ffffff', size: 'large', radius: 'xl', fontWeight: '800' },
        },
        {
          id: 'inv-btn-2',
          type: 'button',
          props: { label: 'Kontak Sekretaris Perusahaan', href: '#contact', action: { type: 'card_form', formChannel: 'email', value: 'corsec@nusantaragroup.co.id', message: '[Investor Relations] Permohonan Keterbukaan Informasi / RUPS' }, variant: 'primary', background: '#6366f1', color: '#ffffff', size: 'large', radius: 'xl', fontWeight: '800' },
        },
        {
          id: 'inv-card-1',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'ic1-head', type: 'heading', props: { content: 'Undangan Rapat Umum Pemegang Saham (RUPS Tahunan 2026)', level: 'h4', fontSize: '16px', color: '#ffffff' } },
            { id: 'ic1-txt', type: 'text', props: { content: 'Pemberitahuan resmi mata acara rapat, tata cara e-voting via eASY.KSEI, dan registrasi pemegang saham tercatat.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'ic1-btn', type: 'button', props: { label: 'Unduh Risalah RUPS (PDF) ↓', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
        {
          id: 'inv-card-2',
          type: 'card',
          props: { background: '#0f172a', border: '1px solid #1e293b', radius: 'xl', padding: '24px' },
          childrenComponents: [
            { id: 'ic2-head', type: 'heading', props: { content: 'Corporate Presentation & Prospektus Obligasi Berkelanjutan II', level: 'h4', fontSize: '16px', color: '#ffffff' } },
            { id: 'ic2-txt', type: 'text', props: { content: 'Materi presentasi investor institusional Q1 2026, profil emisi obligasi hijau, dan peringkat Pefindo idAAA.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'ic2-btn', type: 'button', props: { label: 'Unduh Presentasi (PDF) ↓', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
          ],
        },
      ],
    },
    {
      id: 'holding-footer',
      type: 'footer',
      layout: 'holding-footer-conglomerate',
      components: [
        {
          id: 'foot-heading',
          type: 'heading',
          props: { content: 'NUSANTARA STRATEGIC HOLDINGS TBK', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'foot-text-1',
          type: 'text',
          props: { content: 'Gedung Menara Nusantara Lt. 48-52, Kawasan SCBD Lot 8, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190, Indonesia. Telp: +62 21 5289 8000 | Email: corporate.secretary@nusantaraholdings.co.id', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'foot-card-1',
          type: 'card',
          props: { background: 'transparent' },
          childrenComponents: [
            { id: 'fc-head-1', type: 'heading', props: { content: 'Pilar Portofolio Bisnis', level: 'h5', fontSize: '15px', color: '#ffffff' } },
            { id: 'fc-btn-1a', type: 'button', props: { label: 'Transisi Energi Bersih', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-1b', type: 'button', props: { label: 'Infrastruktur Maritim ALKI', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-1c', type: 'button', props: { label: 'Agro & Pangan Presisi', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-1d', type: 'button', props: { label: 'Digital FinTech & AI Center', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
          ],
        },
        {
          id: 'foot-card-2',
          type: 'card',
          props: { background: 'transparent' },
          childrenComponents: [
            { id: 'fc-head-2', type: 'heading', props: { content: 'Keterbukaan Informasi', level: 'h5', fontSize: '15px', color: '#ffffff' } },
            { id: 'fc-btn-2a', type: 'button', props: { label: 'Laporan Tahunan & Finansial', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-2b', type: 'button', props: { label: 'Laporan Keberlanjutan ESG', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-2c', type: 'button', props: { label: 'Keterbukaan IDX & Prospektus', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-2d', type: 'button', props: { label: 'Tata Kelola & Komite Audit', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
          ],
        },
        {
          id: 'foot-card-3',
          type: 'card',
          props: { background: 'transparent' },
          childrenComponents: [
            { id: 'fc-head-3', type: 'heading', props: { content: 'Kontak & Karir', level: 'h5', fontSize: '15px', color: '#ffffff' } },
            { id: 'fc-btn-3a', type: 'button', props: { label: 'Hubungan Investor (IR)', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-3b', type: 'button', props: { label: 'Whistleblowing System (WBS)', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-3c', type: 'button', props: { label: 'Portal Rekrutmen Eksekutif', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
            { id: 'fc-btn-3d', type: 'button', props: { label: 'Media & Press Releases', href: '#', variant: 'ghost', size: 'small', color: '#94a3b8' } },
          ],
        },
        {
          id: 'foot-text-2',
          type: 'text',
          props: { content: '© 2026 PT Nusantara Strategic Holdings Tbk. Hak Cipta Dilindungi Undang-Undang. Terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK) dan Bursa Efek Indonesia (BEI).', fontSize: '12px', color: '#64748b' },
        },
      ],
    },
  ],
};
