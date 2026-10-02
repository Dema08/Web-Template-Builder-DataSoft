import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceHeroConsulting
 * Dramatic split hero with dark navy background and animated gold accent lines.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceHeroConsulting({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'con-badge', type: 'badge', props: { content: '🏆 Top 10 Consulting Firm Indonesia 2026 — Versi Warta Ekonomi', background: 'rgba(184, 150, 62, 0.15)', color: '#d4af6a', size: 'medium' } },
    { id: 'con-title', type: 'heading', props: { content: 'Kami Membantu Perusahaan Anda Tumbuh Lebih Cepat dengan Strategi yang Tepat', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', lineHeight: '1.12', letterSpacing: '-0.02em' } },
    { id: 'con-desc', type: 'text', props: { content: 'Advanta Partners menghadirkan solusi konsultasi manajemen, transformasi organisasi, strategi ekspansi pasar, dan optimasi operasional berbasis data bagi perusahaan skala menengah hingga korporasi Fortune 500.', fontSize: '18px', color: '#94a3b8', lineHeight: '1.75' } },
    { id: 'con-btn1', type: 'button', props: { label: 'Konsultasi Strategis Gratis →', href: '#contact', variant: 'primary', size: 'large', radius: 'xl', background: 'linear-gradient(135deg, #b8963e, #d4af6a)', color: '#0d1117', fontWeight: '800' } },
    { id: 'con-btn2', type: 'button', props: { label: 'Lihat Rekam Jejak Klien Kami', href: '#clients', variant: 'outline', size: 'large', radius: 'xl', borderColor: '#475569', color: '#e2e8f0', fontWeight: '600' } },
    { id: 'con-hero-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&auto=format&fit=crop&q=80', alt: 'Advanta Partners Executive Team', width: '100%', height: '340px', objectFit: 'cover', borderRadius: '0' } },
    {
      id: 'con-stat-1',
      type: 'card',
      props: { background: 'rgba(13,22,39,0.9)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(184,150,62,0.3)', padding: '20px 24px' },
      childrenComponents: [
        { id: 'cs1-val', type: 'heading', props: { content: '350+', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#d4af6a' } },
        { id: 'cs1-lbl', type: 'text', props: { content: 'Proyek Konsultasi Diselesaikan', fontSize: '13px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'con-stat-2',
      type: 'card',
      props: { background: 'rgba(13,22,39,0.9)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(184,150,62,0.3)', padding: '20px 24px' },
      childrenComponents: [
        { id: 'cs2-val', type: 'heading', props: { content: '23 Tahun', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
        { id: 'cs2-lbl', type: 'text', props: { content: 'Pengalaman Konsultasi Korporasi', fontSize: '13px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'con-stat-3',
      type: 'card',
      props: { background: 'rgba(13,22,39,0.9)', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(184,150,62,0.3)', padding: '20px 24px' },
      childrenComponents: [
        { id: 'cs3-val', type: 'heading', props: { content: '98%', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#4ade80' } },
        { id: 'cs3-lbl', type: 'text', props: { content: 'Tingkat Kepuasan Klien', fontSize: '13px', color: '#94a3b8' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading');
  const textComps = layoutComponents.filter(c => c.type === 'text');
  const buttonComps = layoutComponents.filter(c => c.type === 'button');
  const cardComps = layoutComponents.filter(c => c.type === 'card');
  const imageComps = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="relative min-h-[88vh] flex items-center py-24 px-4 sm:px-6 bg-[#0d1627] overflow-hidden">
      {/* Decorative gold diagonal stripe */}
      <div className="absolute top-0 right-0 w-[700px] h-full bg-gradient-to-bl from-amber-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      {/* Horizontal gold rule */}
      <div className="absolute left-0 top-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-amber-500 to-transparent -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center w-full">
        {/* Left: Copy */}
        <div className="flex flex-col items-start">
          {renderLayoutComponents(badgeComps, sectionId)}
          <div className="mt-6 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>
          <div className="mt-5 w-full">{renderLayoutComponents(textComps, sectionId)}</div>
          <div className="flex flex-wrap gap-4 mt-8">{renderLayoutComponents(buttonComps, sectionId)}</div>

          {/* Trusted by logos strip */}
          <div className="mt-10 pt-8 border-t border-slate-800 w-full">
            <p className="text-xs text-slate-500 font-semibold tracking-widest uppercase mb-4 select-none">Dipercaya oleh perusahaan terkemuka</p>
            <div className="flex flex-wrap gap-3">
              {['Astra Group', 'BCA Finance', 'Telkomsel', 'Garuda Indonesia', 'Pertamina'].map(name => (
                <span key={name} className="text-xs font-bold text-slate-400 px-3 py-1.5 border border-slate-700 rounded-lg bg-slate-800/60 select-none">{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Stats + Image */}
        <div className="flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/60">
            {imageComps.length > 0 ? renderLayoutComponents(imageComps, sectionId) : (
              renderLayoutComponents(layoutComponents.filter(c => c.id === 'con-hero-img'), sectionId)
            )}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0d1627]/90 via-transparent to-transparent" />
            <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-10">
              <div className="bg-[#0d1627]/90 backdrop-blur-md border border-amber-500/20 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-black text-[#0d1627] text-lg select-none">★</div>
                <div>
                  <p className="text-sm font-bold text-white">Best Consulting Firm 2026</p>
                  <p className="text-xs text-amber-400">Asia Pacific Business Awards</p>
                </div>
              </div>
            </div>
          </div>

          {cardComps.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {renderLayoutComponents(cardComps, sectionId)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
