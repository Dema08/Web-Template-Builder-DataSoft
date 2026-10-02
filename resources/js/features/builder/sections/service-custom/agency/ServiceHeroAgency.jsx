import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceHeroAgency
 * Electrifying full-screen agency hero — vivid violet/magenta gradient, bold typography.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceHeroAgency({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ag-badge', type: 'badge', props: { content: '⚡ #1 Creative Digital Agency — Indonesia', background: 'rgba(124,58,237,0.2)', color: '#c4b5fd', size: 'medium' } },
    { id: 'ag-title', type: 'heading', props: { content: 'Kami Tidak Membuat Konten Biasa — Kami Ciptakan Pengalaman yang Diingat Selamanya', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', lineHeight: '1.05', letterSpacing: '-0.03em' } },
    { id: 'ag-desc', type: 'text', props: { content: 'Nexus.Studio adalah agensi kreatif full-service yang menggabungkan strategi brand, visual design yang memukau, dan teknologi terkini untuk menciptakan pengalaman digital yang mengubah pengunjung menjadi pelanggan setia.', fontSize: '18px', color: '#a78bfa', lineHeight: '1.7' } },
    { id: 'ag-btn1', type: 'button', props: { label: 'Mulai Proyekmu Sekarang ✦', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '800', shadow: '0 0 30px rgba(124,58,237,0.5)' } },
    { id: 'ag-btn2', type: 'button', props: { label: 'Lihat Portofolio Kami', href: '#portfolio', variant: 'outline', size: 'large', radius: 'full', borderColor: 'rgba(255,255,255,0.2)', color: '#e2e8f0', fontWeight: '600' } },
    { id: 'ag-hero-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80', alt: 'Nexus Studio Creative Work', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '0' } },
    {
      id: 'ag-stat-1',
      type: 'card',
      props: { background: 'rgba(124,58,237,0.15)', borderRadius: '18px', borderWidth: '1px', borderColor: 'rgba(124,58,237,0.3)', padding: '18px 22px' },
      childrenComponents: [
        { id: 'as1-val', type: 'heading', props: { content: '480+', level: 'h3', fontSize: '34px', fontWeight: '900', color: '#a78bfa' } },
        { id: 'as1-lbl', type: 'text', props: { content: 'Proyek Kreatif Selesai', fontSize: '12px', color: '#8b7cf8' } },
      ],
    },
    {
      id: 'ag-stat-2',
      type: 'card',
      props: { background: 'rgba(236,72,153,0.12)', borderRadius: '18px', borderWidth: '1px', borderColor: 'rgba(236,72,153,0.3)', padding: '18px 22px' },
      childrenComponents: [
        { id: 'as2-val', type: 'heading', props: { content: '12 Negara', level: 'h3', fontSize: '34px', fontWeight: '900', color: '#f9a8d4' } },
        { id: 'as2-lbl', type: 'text', props: { content: 'Klien Internasional', fontSize: '12px', color: '#f472b6' } },
      ],
    },
    {
      id: 'ag-stat-3',
      type: 'card',
      props: { background: 'rgba(16,185,129,0.1)', borderRadius: '18px', borderWidth: '1px', borderColor: 'rgba(16,185,129,0.25)', padding: '18px 22px' },
      childrenComponents: [
        { id: 'as3-val', type: 'heading', props: { content: '35+ Award', level: 'h3', fontSize: '34px', fontWeight: '900', color: '#4ade80' } },
        { id: 'as3-lbl', type: 'text', props: { content: 'Penghargaan Kreatif', fontSize: '12px', color: '#34d399' } },
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
    <section className="relative min-h-screen flex items-center py-24 px-4 sm:px-6 bg-[#0a0612] overflow-hidden">
      {/* Bold gradient bg blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/15 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(167,139,250,0.8) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {renderLayoutComponents(badgeComps, sectionId)}
          <div className="mt-6 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>
          <div className="mt-6 max-w-2xl">{renderLayoutComponents(textComps, sectionId)}</div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">{renderLayoutComponents(buttonComps, sectionId)}</div>
        </div>

        {/* Hero Image — editable via Right Inspector (image component) */}
        <div className="mt-14 relative rounded-3xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-900/50 max-w-5xl mx-auto">
          {imageComps.length > 0 ? renderLayoutComponents(imageComps, sectionId) : (
            renderLayoutComponents(layoutComponents.filter(c => c.id === 'ag-hero-img'), sectionId)
          )}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0a0612]/80 via-transparent to-transparent" />
          {/* Floating stat cards */}
          {cardComps.length > 0 && (
            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-4 flex-wrap justify-center px-4">
              <div className="pointer-events-auto flex gap-4 flex-wrap justify-center">
                {renderLayoutComponents(cardComps, sectionId)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
