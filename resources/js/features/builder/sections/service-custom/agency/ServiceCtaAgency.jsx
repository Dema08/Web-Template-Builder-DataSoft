import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceCtaAgency
 * High-conversion bold CTA banner with vivid magenta/violet lighting effects for Agency.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceCtaAgency({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cta-ag-badge', type: 'badge', props: { text: 'LET’S COLLABORATE', variant: 'outline', background: 'rgba(236,72,153,0.2)', color: '#f472b6', borderColor: '#ec4899' } },
    { id: 'cta-ag-title', type: 'heading', props: { content: 'Siap Mengubah Brand Anda Menjadi Market Leader?', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', textAlign: 'center' } },
    { id: 'cta-ag-desc', type: 'paragraph', props: { content: 'Jadwalkan sesi brainstorming eksklusif 30 menit bersama Creative Director kami hari ini. Gratis tanpa komitmen.', fontSize: '16px', color: '#e2e8f0', textAlign: 'center' } },
    { id: 'cta-ag-btn1', type: 'button', props: { label: 'Jadwalkan Brainstorming ✦', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '800' } },
    { id: 'cta-ag-btn2', type: 'button', props: { label: 'Lihat Showreel Video ▶', href: '#portfolio', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.08)', color: '#ffffff', borderColor: '#a78bfa' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'cta-ag-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'cta-ag-title');
  const descComps = layoutComponents.filter(c => c.id === 'cta-ag-desc');
  const btn1Comps = layoutComponents.filter(c => c.id === 'cta-ag-btn1');
  const btn2Comps = layoutComponents.filter(c => c.id === 'cta-ag-btn2');

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#080312] overflow-hidden">
      {/* Background Decorative Mesh / Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/30 via-[#080312] to-[#080312] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-[#1b0a33] via-[#130626] to-[#0d041a] border border-violet-500/30 shadow-2xl shadow-purple-900/40 text-center space-y-8 overflow-hidden">
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="relative inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>

          <div className="relative space-y-4 max-w-3xl mx-auto">
            {renderLayoutComponents(titleComps, sectionId)}
            {renderLayoutComponents(descComps, sectionId)}
          </div>

          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-4">
            {renderLayoutComponents(btn1Comps, sectionId)}
            {renderLayoutComponents(btn2Comps, sectionId)}
          </div>

          {/* Guarantee / trust footnote */}
          <div className="relative pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">●</span> Respon dalam 24 Jam</span>
            <span className="flex items-center gap-1.5"><span className="text-pink-400">●</span> NDA Kerahasiaan Terjamin</span>
            <span className="flex items-center gap-1.5"><span className="text-cyan-400">●</span> Konsultasi Awal Bebas Biaya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
