import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgHeroProfessional
 * Majestic full-screen split hero for professional forum/association — navy deep with gold.
 * Fully supports right-inspector selection and property editing for all components, cards, and images.
 */
export default function OrgHeroProfessional({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'pro-badge', type: 'badge', props: { text: '⚜ DEWAN PENGURUS PUSAT FORUM PROFESI NUSANTARA', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
    { id: 'pro-title', type: 'heading', props: { content: 'Membangun Standar Profesi Unggul, Memajukan Bangsa Indonesia', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.025em' } },
    { id: 'pro-desc', type: 'paragraph', props: { content: 'Forum Profesi Nusantara adalah wadah resmi bagi 35.000+ profesional lintas disiplin terbaik Indonesia — menegakkan kode etik, akreditasi kompetensi, dan memperluas kolaborasi strategis nasional.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'pro-btn1', type: 'button', props: { label: 'Daftar Keanggotaan ⚜', href: '#join', variant: 'primary', size: 'large', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
    { id: 'pro-btn2', type: 'button', props: { label: 'Unduh Profil Organisasi (PDF)', href: '#about', variant: 'outline', size: 'large', radius: 'sm', background: 'rgba(15,23,42,0.8)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
    // Stat Cards
    {
      id: 'pro-stat1-card',
      type: 'card',
      props: { background: '#0b162c', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pro-stat1-num', type: 'heading', props: { content: '35.000+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'pro-stat1-lbl', type: 'paragraph', props: { content: 'Anggota Aktif di 34 Provinsi', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'pro-stat2-card',
      type: 'card',
      props: { background: '#0b162c', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pro-stat2-num', type: 'heading', props: { content: '38 Tahun', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'pro-stat2-lbl', type: 'paragraph', props: { content: 'Dedikasi & Integritas Sejak 1985', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'pro-stat3-card',
      type: 'card',
      props: { background: '#0b162c', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'pro-stat3-num', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'pro-stat3-lbl', type: 'paragraph', props: { content: 'Kongres & Seminar Tahunan', fontSize: '12px', color: '#94a3b8' } },
      ]
    },
    // Hero Showcase Image
    {
      id: 'pro-hero-img',
      type: 'image',
      props: {
        src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1000&q=80',
        alt: 'Annual National Professional Congress',
        width: '100%',
        height: '460px',
        objectFit: 'cover',
        borderRadius: '16px',
        shadow: 'xl',
      }
    },
    {
      id: 'pro-hero-float-card',
      type: 'card',
      props: { background: 'rgba(11,22,44,0.95)', borderColor: 'rgba(217,119,6,0.4)', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'xl' },
      childrenComponents: [
        { id: 'pro-float-tag', type: 'badge', props: { text: '⚜ KONGRES NASIONAL XXV 2026', variant: 'outline', background: 'transparent', color: '#fbbf24', borderColor: 'transparent' } },
        { id: 'pro-float-title', type: 'heading', props: { content: 'Jakarta International Convention Center', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#ffffff' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'pro-badge');
  const titleC = lc.filter(c => c.id === 'pro-title');
  const descC = lc.filter(c => c.id === 'pro-desc');
  const btn1C = lc.filter(c => c.id === 'pro-btn1');
  const btn2C = lc.filter(c => c.id === 'pro-btn2');
  const statCard1 = lc.filter(c => c.id === 'pro-stat1-card');
  const statCard2 = lc.filter(c => c.id === 'pro-stat2-card');
  const statCard3 = lc.filter(c => c.id === 'pro-stat3-card');
  const heroImg = lc.filter(c => c.id === 'pro-hero-img');
  const floatCard = lc.filter(c => c.id === 'pro-hero-float-card');

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#040812] text-slate-100 overflow-hidden py-20 lg:py-28">
      {/* Deep Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.05] pointer-events-none" />

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

            {/* Prestige Stat Card Components */}
            <div className="pt-8 border-t border-amber-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>{renderLayoutComponents(statCard1, sectionId)}</div>
              <div>{renderLayoutComponents(statCard2, sectionId)}</div>
              <div>{renderLayoutComponents(statCard3, sectionId)}</div>
            </div>
          </div>

          {/* Right Showcase Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-black/80">
              {renderLayoutComponents(heroImg, sectionId)}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#040812] via-transparent to-transparent" />

              {/* Floating Card */}
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-10">
                <div className="pointer-events-auto">
                  {renderLayoutComponents(floatCard, sectionId)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
