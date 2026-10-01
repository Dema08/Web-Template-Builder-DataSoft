import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgProjectsDigital
 * Open-source & hackathon collaborative projects showcase for digital community — cyber dark.
 * Fully supports right-inspector selection and property editing for all cards, badges, buttons, and texts.
 */
export default function OrgProjectsDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'proj-badge', type: 'badge', props: { text: '⚡ PROYEK KOLABORASI & OPEN SOURCE', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
    { id: 'proj-title', type: 'heading', props: { content: 'Kolaborasi Nyata, Membangun Solusi Digital untuk Bangsa', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '-0.02em' } },
    { id: 'proj-desc', type: 'paragraph', props: { content: 'Bergabunglah dalam inisiatif open source lintas komunitas, hackathon berhadiah ratusan juta, dan proyek riset teknologi masa depan.', fontSize: '16px', color: '#cbd5e1' } },
    
    // Project 1 Card
    {
      id: 'card-pr1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0b0e2b 0%, #06081c 100%)', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pr1-tag', type: 'badge', props: { text: '🏛 OPEN SOURCE · 140+ KONTRIBUTOR', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'pr1-title', type: 'heading', props: { content: 'OpenGov Indonesia — Platform Transparansi Publik', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f1f5f9' } },
        { id: 'pr1-desc', type: 'paragraph', props: { content: 'Sistem analitik anggaran dan keterbukaan data pemda berbasis AI. Telah diimplementasikan di 50+ pemerintah kota dengan 1.2M pengguna.', fontSize: '13px', color: '#94a3b8' } },
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
        { id: 'pr2-desc', type: 'paragraph', props: { content: 'Model computer vision deteksi dini penyakit kulit & retina berbasis foto smartphone untuk puskesmas daerah 3T tanpa dokter spesialis.', fontSize: '13px', color: '#94a3b8' } },
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
        { id: 'pr3-desc', type: 'paragraph', props: { content: 'Kompetisi pengembangan produk AI & IoT selama 72 jam non-stop dengan total pendanaan akselerasi Rp 500 Juta untuk 50 tim inovator terpilih.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'pr3-stack', type: 'heading', props: { content: 'Web3 · AI Agents · Cloud | Live Stage', level: 'h4', fontSize: '12px', fontWeight: '700', color: '#fdba74' } },
      ]
    },

    { id: 'proj-cta-btn', type: 'button', props: { label: 'Lihat Semua Proyek & Hackathon ⚡', href: '#projects', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'proj-badge');
  const titleC = lc.filter(c => c.id === 'proj-title');
  const descC = lc.filter(c => c.id === 'proj-desc');
  const ctaBtn = lc.filter(c => c.id === 'proj-cta-btn');
  const cardPr1 = lc.filter(c => c.id === 'card-pr1');
  const cardPr2 = lc.filter(c => c.id === 'card-pr2');
  const cardPr3 = lc.filter(c => c.id === 'card-pr3');

  return (
    <section className="relative bg-[#050516] py-20 lg:py-28 overflow-hidden text-slate-100">
      {/* Background Neon Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div>{renderLayoutComponents(cardPr1, sectionId)}</div>
          <div>{renderLayoutComponents(cardPr2, sectionId)}</div>
          <div>{renderLayoutComponents(cardPr3, sectionId)}</div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
