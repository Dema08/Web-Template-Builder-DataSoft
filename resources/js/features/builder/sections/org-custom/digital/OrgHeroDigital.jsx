import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgHeroDigital
 * Cyberpunk & modern split tech hero for developer community — dark purple / cyan.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function OrgHeroDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dig-badge', type: 'badge', props: { text: '⚡ KOMUNITAS TEKNOLOGI & INOVATOR #1 INDONESIA', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
    { id: 'dig-title', type: 'heading', props: { content: 'Wadah Inovator & Developer Terbuka Terbesar di Indonesia', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '-0.025em' } },
    { id: 'dig-desc', type: 'paragraph', props: { content: 'Komunitas Inovasi Digital mempertemukan 28.000+ software engineer, AI researcher, product designer, dan tech startup founder untuk berkolaborasi, berinovasi, dan membangun solusi bangsa.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'dig-btn1', type: 'button', props: { label: 'Join Komunitas Gratis ⚡', href: '#join', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
    { id: 'dig-btn2', type: 'button', props: { label: 'Eksplor Proyek Kolaborasi', href: '#projects', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(99,102,241,0.1)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.4)' } },
    
    // 4 Cyber Stat Cards
    {
      id: 'dig-stat1-card',
      type: 'card',
      props: { background: '#0b0e26', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dig-stat1-num', type: 'heading', props: { content: '28.000+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
        { id: 'dig-stat1-lbl', type: 'paragraph', props: { content: 'Member Aktif Terdaftar', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'dig-stat2-card',
      type: 'card',
      props: { background: '#0b0e26', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dig-stat2-num', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
        { id: 'dig-stat2-lbl', type: 'paragraph', props: { content: 'Workshop & Hackathon', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'dig-stat3-card',
      type: 'card',
      props: { background: '#0b0e26', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dig-stat3-num', type: 'heading', props: { content: '150+', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
        { id: 'dig-stat3-lbl', type: 'paragraph', props: { content: 'Proyek Open Source', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'dig-stat4-card',
      type: 'card',
      props: { background: '#0b0e26', borderColor: 'rgba(6,182,212,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'dig-stat4-num', type: 'heading', props: { content: '95%', level: 'h3', fontSize: '26px', fontWeight: '900', color: '#67e8f9' } },
        { id: 'dig-stat4-lbl', type: 'paragraph', props: { content: 'Terserap Industri Global', fontSize: '12px', color: '#94a3b8' } },
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
        { id: 'dig-term-desc', type: 'paragraph', props: { content: '✔ Connected to 28,450 active builders | ✔ AI Pair Programming live | ✔ Discord 24/7 channel synced', fontSize: '12px', color: '#cbd5e1' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'dig-badge');
  const titleC = lc.filter(c => c.id === 'dig-title');
  const descC = lc.filter(c => c.id === 'dig-desc');
  const btn1C = lc.filter(c => c.id === 'dig-btn1');
  const btn2C = lc.filter(c => c.id === 'dig-btn2');
  const statCard1 = lc.filter(c => c.id === 'dig-stat1-card');
  const statCard2 = lc.filter(c => c.id === 'dig-stat2-card');
  const statCard3 = lc.filter(c => c.id === 'dig-stat3-card');
  const statCard4 = lc.filter(c => c.id === 'dig-stat4-card');
  const termCard = lc.filter(c => c.id === 'dig-terminal-card');

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#03030c] text-slate-100 overflow-hidden py-20 lg:py-28">
      {/* Cyber Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
            
            <div className="space-y-4">
              <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
              <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {renderLayoutComponents(btn1C, sectionId)}
              {renderLayoutComponents(btn2C, sectionId)}
            </div>

            {/* 4 Cyber Stat Cards */}
            <div className="pt-8 border-t border-cyan-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>{renderLayoutComponents(statCard1, sectionId)}</div>
              <div>{renderLayoutComponents(statCard2, sectionId)}</div>
              <div>{renderLayoutComponents(statCard3, sectionId)}</div>
              <div>{renderLayoutComponents(statCard4, sectionId)}</div>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5">
            <div>{renderLayoutComponents(termCard, sectionId)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
