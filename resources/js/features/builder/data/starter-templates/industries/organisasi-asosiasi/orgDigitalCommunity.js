/**
 * Komunitas Inovasi Digital Indonesia — Premium Digital Community Template
 * Exclusive Premium Starter Template untuk Komunitas Tech, Developer Community, & Asosiasi Digital.
 * Fully compatible with Right Inspector selection and property editing for all components.
 */
export default {
  id: 'org-digital-community',
  name: 'Komunitas Inovasi Digital',
  description: 'Template premium eksklusif bergaya futuristik dark purple & electric cyan untuk komunitas teknologi, developer community, asosiasi digital, dan forum inovator. Dilengkapi hackathon announcement bar, hero split stats 28.000+ member, featured collaborative projects (OpenGov AI, HealthAI), 6 community benefits cards, glowing join CTA, dan footer tech-forward dengan GitHub/Discord links.',
  thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
  tags: ['Organisasi', 'Komunitas Digital', 'Developer Community', 'Tech Association', 'Inovasi', 'Open Source', 'Premium-Exclusive'],
  theme: {
    primaryColor: '#06b6d4',
    secondaryColor: '#040411',
    accentColor: '#6366f1',
    dark: true,
    surface: '#03030c',
    text: '#f1f5f9',
    muted: '#94a3b8',
    border: 'rgba(6,182,212,0.25)',
    radius: 'lg',
    font: 'Plus Jakarta Sans, Inter, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'zoom-in', 'hover-lift'],
  sections: [
    {
      id: 'sec-dig-nav',
      type: 'navbar',
      layout: 'org-nav-digital',
      components: [
        { id: 'dig-logo', type: 'heading', props: { content: 'KOMUNITAS INOVASI DIGITAL', level: 'h2', fontSize: '15px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '0.04em' } },
        { id: 'nav-dig1', type: 'button', props: { label: 'Komunitas', href: '#community', variant: 'ghost', size: 'small', background: 'transparent', color: '#67e8f9' } },
        { id: 'nav-dig2', type: 'button', props: { label: 'Workshop & Bootcamp', href: '#events', variant: 'ghost', size: 'small', background: 'transparent', color: '#67e8f9' } },
        { id: 'nav-dig3', type: 'button', props: { label: 'Proyek Kolaborasi', href: '#projects', variant: 'ghost', size: 'small', background: 'transparent', color: '#67e8f9' } },
        { id: 'nav-dig4', type: 'button', props: { label: 'Blog & Insight', href: '#blog', variant: 'ghost', size: 'small', background: 'transparent', color: '#67e8f9' } },
        { id: 'cta-dig', type: 'button', props: { label: 'Join Community ⚡', href: '#join', variant: 'primary', size: 'small', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-dig-hero',
      type: 'hero',
      layout: 'org-hero-digital',
      components: [
        { id: 'dig-badge', type: 'badge', props: { text: '⚡ KOMUNITAS TEKNOLOGI & INOVATOR #1 INDONESIA', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
        { id: 'dig-title', type: 'heading', props: { content: 'Wadah Inovator & Developer Terbuka Terbesar di Indonesia', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '-0.025em' } },
        { id: 'dig-desc', type: 'text', props: { content: 'Komunitas Inovasi Digital mempertemukan 28.000+ software engineer, AI researcher, product designer, dan tech startup founder untuk berkolaborasi, berinovasi, dan membangun solusi bangsa.', fontSize: '17px', color: '#cbd5e1' } },
        { id: 'dig-btn1', type: 'button', props: { label: 'Join Komunitas Gratis ⚡', href: '#join', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
        { id: 'dig-btn2', type: 'button', props: { label: 'Eksplor Proyek Kolaborasi', href: '#projects', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(99,102,241,0.1)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },
        
        // 4 Cyber Stat Cards
        {
          id: 'dig-stat1-card',
          type: 'card',
          props: { background: '#0b0e26', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'dig-stat1-num', type: 'heading', props: { content: '28.000+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
            { id: 'dig-stat1-lbl', type: 'text', props: { content: 'Member Aktif Terdaftar', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'dig-stat2-card',
          type: 'card',
          props: { background: '#0b0e26', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'dig-stat2-num', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
            { id: 'dig-stat2-lbl', type: 'text', props: { content: 'Workshop & Hackathon', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'dig-stat3-card',
          type: 'card',
          props: { background: '#0b0e26', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'dig-stat3-num', type: 'heading', props: { content: '150+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
            { id: 'dig-stat3-lbl', type: 'text', props: { content: 'Proyek Open Source', fontSize: '12px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'dig-stat4-card',
          type: 'card',
          props: { background: '#0b0e26', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'dig-stat4-num', type: 'heading', props: { content: '95%', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
            { id: 'dig-stat4-lbl', type: 'text', props: { content: 'Terserap Industri Global', fontSize: '12px', color: '#94a3b8' } },
          ]
        },

        // Cyber Terminal Card
        {
          id: 'dig-terminal-card',
          type: 'card',
          props: { background: '#07071e', borderColor: 'rgba(6,182,212,0.4)', borderWidth: '2px', borderRadius: '16px', padding: '20px', shadow: '2xl' },
          childrenComponents: [
            { id: 'dig-term-tag', type: 'badge', props: { text: '⚡ COMMUNITY SHELL · NPX', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'dig-term-title', type: 'heading', props: { content: 'npx join-komunitas-digital@latest', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#67e8f9' } },
            { id: 'dig-term-desc', type: 'text', props: { content: '✔ Connected to 28,450 active builders | ✔ AI Pair Programming live | ✔ Discord 24/7 channel synced', fontSize: '12px', color: '#cbd5e1' } },
          ]
        }
      ],
    },
    {
      id: 'sec-dig-projects',
      type: 'projects',
      layout: 'org-projects-digital',
      components: [
        { id: 'proj-badge', type: 'badge', props: { text: '⚡ PROYEK KOLABORASI & OPEN SOURCE', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
        { id: 'proj-title', type: 'heading', props: { content: 'Kolaborasi Nyata, Membangun Solusi Digital untuk Bangsa', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '-0.02em' } },
        { id: 'proj-desc', type: 'text', props: { content: 'Bergabunglah dalam inisiatif open source lintas komunitas, hackathon berhadiah ratusan juta, dan proyek riset teknologi masa depan.', fontSize: '16px', color: '#cbd5e1' } },
        
        // Project 1 Card
        {
          id: 'card-pr1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0b0e2b 0%, #06081c 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pr1-tag', type: 'badge', props: { text: '🏛 OPEN SOURCE · 140+ KONTRIBUTOR', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'pr1-title', type: 'heading', props: { content: 'OpenGov Indonesia — Platform Transparansi Publik', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'pr1-desc', type: 'text', props: { content: 'Sistem analitik anggaran dan keterbukaan data pemda berbasis AI. Telah diimplementasikan di 50+ pemerintah kota dengan 1.2M pengguna.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'pr1-stack', type: 'heading', props: { content: 'TypeScript · Next.js · Python | 1.4k ★', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#67e8f9' } },
          ]
        },

        // Project 2 Card
        {
          id: 'card-pr2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0b0e2b 0%, #06081c 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pr2-tag', type: 'badge', props: { text: '🩺 RISET KOLABORASI · BRIN MITRA', variant: 'solid', background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' } },
            { id: 'pr2-title', type: 'heading', props: { content: 'HealthAI Nusantara — Diagnostik Terpencil', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'pr2-desc', type: 'text', props: { content: 'Model computer vision deteksi dini penyakit kulit & retina berbasis foto smartphone untuk puskesmas daerah 3T tanpa dokter spesialis.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'pr2-stack', type: 'heading', props: { content: 'PyTorch · FastAPI · Flutter | 980 ★', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#a5b4fc' } },
          ]
        },

        // Project 3 Card
        {
          id: 'card-pr3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0b0e2b 0%, #06081c 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pr3-tag', type: 'badge', props: { text: '🏆 EVENT NASIONAL · HADIAH RP 500 JT', variant: 'solid', background: 'rgba(249,115,22,0.2)', color: '#fdba74' } },
            { id: 'pr3-title', type: 'heading', props: { content: 'Hackathon Nasional 2026 — "Build for Indonesia"', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'pr3-desc', type: 'text', props: { content: 'Kompetisi pengembangan produk AI & IoT selama 72 jam non-stop dengan total pendanaan akselerasi Rp 500 Juta untuk 50 tim inovator terpilih.', fontSize: '13px', color: '#94a3b8' } },
            { id: 'pr3-stack', type: 'heading', props: { content: 'Web3 · AI Agents · Cloud | Live Stage', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fdba74' } },
          ]
        },

        { id: 'proj-cta-btn', type: 'button', props: { label: 'Lihat Semua Proyek & Hackathon ⚡', href: '#projects', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-dig-community',
      type: 'community',
      layout: 'org-community-digital',
      components: [
        { id: 'comm-badge', type: 'badge', props: { text: '🌐 KENAPA HARUS JOIN KOMUNITAS KAMI', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
        { id: 'comm-title', type: 'heading', props: { content: 'Fasilitas & Akses Eksklusif untuk Builder & Developer Indonesia', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '-0.02em' } },
        { id: 'comm-desc', type: 'text', props: { content: 'Kami membangun ekosistem pendukung menyeluruh agar setiap developer, designer, dan founder dapat bertumbuh secara karier, keterampilan teknis, dan finansial.', fontSize: '16px', color: '#cbd5e1' } },
        
        // 6 Benefit Cards
        {
          id: 'card-b1',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'b1-tag', type: 'badge', props: { text: '🧠 KARIER & SKILL', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'b1-title', type: 'heading', props: { content: 'Mentoring 1-on-1 dengan Tech Lead Senior', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'b1-desc', type: 'text', props: { content: 'Sesi konsultasi privat dengan 200+ Principal Engineer, VP of Engineering, dan CTO dari tech company ternama Asia & Silicon Valley.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-b2',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'b2-tag', type: 'badge', props: { text: '💼 GLOBAL HIRING', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'b2-title', type: 'heading', props: { content: 'Portal Lowongan Kerja Remote Global', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'b2-desc', type: 'text', props: { content: 'Akses khusus 500+ lowongan kerja remote & hybrid bergaji dollar/SGD tanpa perantara langsung ke hiring manager.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-b3',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'b3-tag', type: 'badge', props: { text: '🚀 LIVE CLASS', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'b3-title', type: 'heading', props: { content: '80+ Workshop & Tech Talk Gratis / Tahun', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'b3-desc', type: 'text', props: { content: 'Kelas interaktif mingguan mencakup Large Language Models, System Design, DevOps Kubernetes, hingga Product Growth.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-b4',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'b4-tag', type: 'badge', props: { text: '💬 24/7 FORUM', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'b4-title', type: 'heading', props: { content: 'Forum Discord 24/7 & Code Review', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'b4-desc', type: 'text', props: { content: 'Ruang kolaborasi aktif dengan 100+ channels topik, automated AI feedback bot, dan live voice study rooms setiap malam.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-b5',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'b5-tag', type: 'badge', props: { text: '🏅 VERIFIED BADGE', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'b5-title', type: 'heading', props: { content: 'Sertifikat & Verified Skill Badge', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'b5-desc', type: 'text', props: { content: 'Badge digital terverifikasi on-chain yang diakui 100+ partner tech company sebagai portofolio resmi kemampuan teknismu.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },
        {
          id: 'card-b6',
          type: 'card',
          props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'b6-tag', type: 'badge', props: { text: '💰 MONETISASI', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
            { id: 'b6-title', type: 'heading', props: { content: 'Revenue Share Proyek Komersial', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
            { id: 'b6-desc', type: 'text', props: { content: 'Kontributor aktif proyek open-source komunitas mendapatkan bagian pendanaan hibah dan komisi lisensi enterprise software.', fontSize: '13px', color: '#94a3b8' } },
          ]
        },

        { id: 'comm-cta-btn', type: 'button', props: { label: 'Gabung Gratis Sekarang — Klaim Akses ⚡', href: '#join', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
      ],
    },
    {
      id: 'sec-dig-cta',
      type: 'cta',
      layout: 'org-cta-digital',
      components: [
        {
          id: 'cta-dig-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0e1338 0%, #070920 50%, #040514 100%)', borderColor: 'rgba(6,182,212,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '48px', shadow: '2xl', hoverEffect: 'glow' },
          childrenComponents: [
            { id: 'cta-badge', type: 'badge', props: { text: '⚡ PENDAFTARAN KOMUNITAS GELOMBANG 2026', variant: 'outline', background: 'rgba(6,182,212,0.2)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.5)' } },
            { id: 'cta-title', type: 'heading', props: { content: 'Waktunya Terhubung, Berkolaborasi & Membangun Bersama Inovator Terbaik', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '-0.02em', textAlign: 'center' } },
            { id: 'cta-desc', type: 'text', props: { content: 'Gabung bersama 28.000+ builder Indonesia hari ini. Dapatkan akses instant ke forum Discord, repositori open-source, dan mentoring gratis selamanya.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
            { id: 'cta-btn1', type: 'button', props: { label: 'Join Discord Komunitas ⚡', href: '#join', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
            { id: 'cta-btn2', type: 'button', props: { label: 'Eksplorasi GitHub Repo', href: '#projects', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(10,13,38,0.8)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },
          ]
        }
      ],
    },
    {
      id: 'sec-dig-footer',
      type: 'footer',
      layout: 'org-footer-digital',
      components: [
        { id: 'dig-foot-logo', type: 'heading', props: { content: 'KOMUNITAS INOVASI DIGITAL', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '0.04em' } },
        { id: 'dig-foot-desc', type: 'text', props: { content: 'Wadah kolaborasi teknologi non-profit terbuka terbesar di Indonesia. Menghubungkan engineer, desainer, dan inovator untuk membangun ekosistem digital mandiri.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'dig-foot-addr', type: 'text', props: { content: 'Community Tech Hub: Jl. BSD Green Office Park No. 6, Tangerang, Banten 15345', fontSize: '13px', color: '#94a3b8' } },
        { id: 'dig-foot-phone', type: 'text', props: { content: 'Discord Bot Support: discord.gg/inovasidigital | dev@inovasidigital.id', fontSize: '13px', color: '#67e8f9' } },
      ],
    },
  ],
};

