/**
 * Synapse Cloud & Enterprise IT Solutions
 * Exclusive Premium Starter Template untuk Penyedia Solusi Teknologi, Cloud, & Software Enterprise.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'service-tech-solutions',
  name: 'Synapse Enterprise Tech Solutions',
  description: 'Template premium eksklusif bergaya futuristik cyber-dark & cyan glassmorphism untuk perusahaan IT solutions, cloud architecture, cybersecurity SOC-2, dan enterprise software engineering. Dilengkapi terminal live console, 6 pilar layanan IT, showcase topologi arsitektur sistem terdistribusi, benchmark performa & SLA 99.99%, serta formulir audit arsitektur gratis.',
  thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
  tags: ['Tech Solutions', 'Cloud Infrastructure', 'DevOps', 'Cybersecurity', 'Enterprise Software', 'Microservices', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#06b6d4',
    secondaryColor: '#3b82f6',
    accentColor: '#10b981',
    dark: true,
    surface: '#060a14',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#1e293b',
    radius: 'xl',
    font: 'Plus Jakarta Sans, JetBrains Mono, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-tech-nav',
      type: 'navbar',
      layout: 'service-nav-tech',
      components: [
        {
          id: 'tech-logo',
          type: 'heading',
          props: { content: 'SYNAPSE.TECH', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em' },
        },
        {
          id: 'nav-tc1',
          type: 'button',
          props: { label: 'Layanan IT', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'nav-tc2',
          type: 'button',
          props: { label: 'Solusi Cloud', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'nav-tc3',
          type: 'button',
          props: { label: 'Infrastruktur', href: '#stats', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'nav-tc4',
          type: 'button',
          props: { label: 'Keamanan', href: '#security', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'cta-tc',
          type: 'button',
          props: { label: 'Konsultasi Arsitektur ⚡', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', color: '#ffffff', fontWeight: '700' },
        },
      ],
    },
    {
      id: 'sec-tech-hero',
      type: 'hero',
      layout: 'service-hero-tech',
      components: [
        {
          id: 'tech-badge',
          type: 'badge',
          props: { text: 'ENTERPRISE TECH & CLOUD ARCHITECTURE', variant: 'outline', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' },
        },
        {
          id: 'tech-title',
          type: 'heading',
          props: { content: 'Membangun Infrastruktur Digital Tangguh Skala Enterprise', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' },
        },
        {
          id: 'tech-desc',
          type: 'text',
          props: { content: 'Kami merancang, mengamankan, dan menskalakan ekosistem cloud, microservices, dan software kustom untuk perusahaan modern dengan standar keandalan 99.99%.', fontSize: '17px', color: '#94a3b8' },
        },
        {
          id: 'tech-btn-pri',
          type: 'button',
          props: { label: 'Konsultasi Solusi IT ⚡', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #06b6d4, #2563eb)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'tech-btn-sec',
          type: 'button',
          props: { label: 'Dokumentasi & Arsitektur', href: '#solutions', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' },
        },
        {
          id: 'term-title',
          type: 'heading',
          props: { content: 'Cluster Topology v4.8 (Production)', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#22d3ee' },
        },
        {
          id: 'term-metric1',
          type: 'heading',
          props: { content: '99.99%', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'term-metric2',
          type: 'heading',
          props: { content: '< 15ms', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff' },
        },
      ],
    },
    {
      id: 'sec-tech-services',
      type: 'services',
      layout: 'service-services-tech',
      components: [
        {
          id: 'srv-tc-badge',
          type: 'badge',
          props: { text: 'CAPABILITIES & STACK', variant: 'outline', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' },
        },
        {
          id: 'srv-tc-title',
          type: 'heading',
          props: { content: 'Layanan Teknologi Berstandar Global untuk Pertumbuhan Skala Besar', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'srv-tc-desc',
          type: 'text',
          props: { content: 'Membantu perusahaan bertransformasi melalui arsitektur cloud cerdas, keamanan siber ketat, dan software engineering mutakhir.', fontSize: '16px', color: '#94a3b8', textAlign: 'center' },
        },
        {
          id: 'srv1-tc-title',
          type: 'heading',
          props: { content: 'Cloud Infrastructure & DevOps', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv1-tc-desc',
          type: 'text',
          props: { content: 'Migrasi cloud tanpa downtime, otomatisasi CI/CD, manajemen Kubernetes cluster, dan optimalisasi biaya multi-cloud.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'srv2-tc-title',
          type: 'heading',
          props: { content: 'Custom Enterprise Software', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv2-tc-desc',
          type: 'text',
          props: { content: 'Pengembangan web & core systems berskala jutaan pengguna dengan arsitektur microservices dan API-first design.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'srv3-tc-title',
          type: 'heading',
          props: { content: 'Cybersecurity & SOC-2 Compliance', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv3-tc-desc',
          type: 'text',
          props: { content: 'Audit keamanan berkala, penetration testing, implementasi zero-trust network, serta sertifikasi ISO 27001.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'srv4-tc-title',
          type: 'heading',
          props: { content: 'Data Engineering & Real-Time Analytics', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv4-tc-desc',
          type: 'text',
          props: { content: 'Pembangunan data pipeline berkecepatan tinggi, data warehouse terdistribusi, dan visualisasi dashboard eksekutif.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'srv5-tc-title',
          type: 'heading',
          props: { content: 'AI & Machine Learning Integration', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv5-tc-desc',
          type: 'text',
          props: { content: 'Implementasi LLM khusus korporasi, otomatisasi cerdas NLP, dan model prediktif untuk optimasi operasional bisnis.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'srv6-tc-title',
          type: 'heading',
          props: { content: '24/7 SRE & Managed IT Support', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'srv6-tc-desc',
          type: 'text',
          props: { content: 'Monitoring proaktif round-the-clock, incident response dengan SLA < 15 menit, dan disaster recovery drills.', fontSize: '14px', color: '#94a3b8' },
        },
      ],
    },
    {
      id: 'sec-tech-solutions',
      type: 'solutions',
      layout: 'service-solutions-tech',
      components: [
        {
          id: 'sol-tc-badge',
          type: 'badge',
          props: { text: 'ENTERPRISE CAPABILITY', variant: 'outline', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' },
        },
        {
          id: 'sol-tc-title',
          type: 'heading',
          props: { content: 'Arsitektur Terdistribusi Berkecepatan Tinggi & Skalal', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' },
        },
        {
          id: 'sol-tc-desc',
          type: 'text',
          props: { content: 'Kami membangun fondasi teknologi yang mampu menangani jutaan transaksi simultan tanpa penurunan performa dengan toleransi kesalahan tingkat tinggi.', fontSize: '16px', color: '#94a3b8' },
        },
        {
          id: 'sol1-title',
          type: 'heading',
          props: { content: 'Zero-Downtime Multi-Region Failover', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'sol1-desc',
          type: 'text',
          props: { content: 'Infrastruktur aktif-aktif lintas data center geografis untuk ketahanan bisnis mutlak.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'sol2-title',
          type: 'heading',
          props: { content: 'Automated CI/CD & GitOps Workflow', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'sol2-desc',
          type: 'text',
          props: { content: 'Deployment otomatis dengan canary release, automated rollback, dan keamanan kontainer terintegrasi.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'sol3-title',
          type: 'heading',
          props: { content: 'End-to-End Zero Trust Security', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' },
        },
        {
          id: 'sol3-desc',
          type: 'text',
          props: { content: 'Enkripsi data at-rest & in-transit (AES-256), SSO IAM kustom, dan audit logging otomatis.', fontSize: '14px', color: '#94a3b8' },
        },
        {
          id: 'sol-cta-btn',
          type: 'button',
          props: { label: 'Unduh Whitepaper Arsitektur ➔', href: '#contact', variant: 'outline', size: 'medium', radius: 'lg', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' },
        },
      ],
    },
    {
      id: 'sec-tech-stats',
      type: 'stats',
      layout: 'service-stats-tech',
      components: [
        {
          id: 'stat-tc-badge',
          type: 'badge',
          props: { text: 'RELIABILITY BENCHMARKS', variant: 'outline', background: 'rgba(6,182,212,0.1)', color: '#22d3ee', borderColor: '#06b6d4' },
        },
        {
          id: 'stat-tc-title',
          type: 'heading',
          props: { content: 'Performa dan Skalabilitas yang Terbukti di Lapangan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'stat-tc-desc',
          type: 'text',
          props: { content: 'Metrik nyata dari infrastruktur yang kami kelola untuk korporasi lintas industri.', fontSize: '16px', color: '#94a3b8', textAlign: 'center' },
        },
        {
          id: 'st1-val',
          type: 'heading',
          props: { content: '99.99%', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#22d3ee' },
        },
        {
          id: 'st1-lbl',
          type: 'text',
          props: { content: 'Uptime SLA Terjamin', fontSize: '15px', color: '#ffffff', fontWeight: '600' },
        },
        {
          id: 'st1-sub',
          type: 'text',
          props: { content: 'Multi-region failover aktif', fontSize: '13px', color: '#64748b' },
        },
        {
          id: 'st2-val',
          type: 'heading',
          props: { content: '500M+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#60a5fa' },
        },
        {
          id: 'st2-lbl',
          type: 'text',
          props: { content: 'API Requests / Hari', fontSize: '15px', color: '#ffffff', fontWeight: '600' },
        },
        {
          id: 'st2-sub',
          type: 'text',
          props: { content: 'Throughput konsisten tanpa lonjakan latensi', fontSize: '13px', color: '#64748b' },
        },
        {
          id: 'st3-val',
          type: 'heading',
          props: { content: '< 15ms', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#34d399' },
        },
        {
          id: 'st3-lbl',
          type: 'text',
          props: { content: 'Rata-Rata Respon Server', fontSize: '15px', color: '#ffffff', fontWeight: '600' },
        },
        {
          id: 'st3-sub',
          type: 'text',
          props: { content: 'Edge cache teroptimasi', fontSize: '13px', color: '#64748b' },
        },
        {
          id: 'st4-val',
          type: 'heading',
          props: { content: '150+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#a78bfa' },
        },
        {
          id: 'st4-lbl',
          type: 'text',
          props: { content: 'Enterprise Deployments', level: 'h4', fontSize: '15px', color: '#ffffff', fontWeight: '600' },
        },
        {
          id: 'st4-sub',
          type: 'text',
          props: { content: 'Fintech, Retail, Telco, Healthcare', fontSize: '13px', color: '#64748b' },
        },
      ],
    },
    {
      id: 'sec-tech-cta',
      type: 'cta',
      layout: 'service-cta-tech',
      components: [
        {
          id: 'cta-tc-badge',
          type: 'badge',
          props: { text: 'FREE ARCHITECTURE AUDIT', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#22d3ee', borderColor: '#06b6d4' },
        },
        {
          id: 'cta-tc-title',
          type: 'heading',
          props: { content: 'Siap Mengoptimasi Infrastruktur & Keamanan IT Anda?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', textAlign: 'center' },
        },
        {
          id: 'cta-tc-desc',
          type: 'text',
          props: { content: 'Dapatkan audit arsitektur sistem komprehensif dari Lead Cloud Architect kami. Tanpa biaya, analisis mendalam dalam 48 jam.', fontSize: '16px', color: '#94a3b8', textAlign: 'center' },
        },
        {
          id: 'cta-tc-btn1',
          type: 'button',
          props: { label: 'Ajukan Audit Arsitektur ⚡', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #06b6d4, #2563eb)', color: '#ffffff', fontWeight: '700' },
        },
        {
          id: 'cta-tc-btn2',
          type: 'button',
          props: { label: 'Bicara dengan DevOps Lead', href: '#contact', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' },
        },
      ],
    },
    {
      id: 'sec-tech-footer',
      type: 'footer',
      layout: 'service-footer-tech',
      components: [
        {
          id: 'ftr-tc-brand',
          type: 'heading',
          props: { content: 'SYNAPSE.TECH', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffffff', letterSpacing: '0.05em' },
        },
        {
          id: 'ftr-tc-tagline',
          type: 'text',
          props: { content: 'Enterprise Cloud Architecture & Distributed Systems Engineering. Built for mission-critical digital scale.', fontSize: '13px', color: '#94a3b8' },
        },
        {
          id: 'ftr-tc-copy',
          type: 'text',
          props: { content: '© 2026 Synapse Technologies Ltd. High-Reliability Systems Architecture.', fontSize: '12px', color: '#64748b' },
        },
        {
          id: 'ftr-tc-lnk1',
          type: 'button',
          props: { label: 'Cloud Infrastructure', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'ftr-tc-lnk2',
          type: 'button',
          props: { label: 'Microservices & APIs', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'ftr-tc-lnk3',
          type: 'button',
          props: { label: 'Cybersecurity SOC-2', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
        {
          id: 'ftr-tc-lnk4',
          type: 'button',
          props: { label: 'Data & AI Pipeline', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' },
        },
      ],
    },
  ],
};
