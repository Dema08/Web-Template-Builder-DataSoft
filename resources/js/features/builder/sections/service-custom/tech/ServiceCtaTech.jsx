import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceCtaTech
 * Technical audit & architecture consultation CTA for Tech Solutions.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceCtaTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cta-tc-badge', type: 'badge', props: { text: 'FREE ARCHITECTURE AUDIT', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#22d3ee', borderColor: '#06b6d4' } },
    { id: 'cta-tc-title', type: 'heading', props: { content: 'Siap Mengoptimasi Infrastruktur & Keamanan IT Anda?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', textAlign: 'center' } },
    { id: 'cta-tc-desc', type: 'paragraph', props: { content: 'Dapatkan audit arsitektur sistem komprehensif dari Lead Cloud Architect kami. Tanpa biaya, analisis mendalam dalam 48 jam.', fontSize: '16px', color: '#94a3b8', textAlign: 'center' } },
    { id: 'cta-tc-btn1', type: 'button', props: { label: 'Ajukan Audit Arsitektur ⚡', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #06b6d4, #2563eb)', color: '#ffffff', fontWeight: '700' } },
    { id: 'cta-tc-btn2', type: 'button', props: { label: 'Bicara dengan DevOps Lead', href: '#contact', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'cta-tc-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'cta-tc-title');
  const descComps = layoutComponents.filter(c => c.id === 'cta-tc-desc');
  const btn1Comps = layoutComponents.filter(c => c.id === 'cta-tc-btn1');
  const btn2Comps = layoutComponents.filter(c => c.id === 'cta-tc-btn2');

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050811] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 bg-gradient-to-b from-[#0a142c] to-[#060b18] border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 text-center space-y-8 overflow-hidden">
          {/* Cyan Glow & Grid */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

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

          {/* Security & Response badges */}
          <div className="relative pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5"><span className="text-cyan-400">🔒</span> Strict NDA Guaranteed</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">⚡</span> Response &lt; 2 Hours</span>
            <span className="flex items-center gap-1.5"><span className="text-blue-400">🛡️</span> Certified Cloud Architects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
