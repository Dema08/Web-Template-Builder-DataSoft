import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduCtaExecutive
 * B2B In-House Training proposal request & executive advisory CTA banner.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduCtaExecutive({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cta-ex-badge', type: 'badge', props: { text: 'IN-HOUSE CORPORATE SOLUTIONS', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' } },
    { id: 'cta-ex-title', type: 'heading', props: { content: 'Siap Mentransformasi Kapabilitas Tim Eksekutif Korporasi Anda?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', textAlign: 'center' } },
    { id: 'cta-ex-desc', type: 'paragraph', props: { content: 'Diskusikan kebutuhan pelatihan internal khusus (in-house) untuk jajaran manajerial dan direksi perusahaan Anda bersama Lead Advisory kami.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    { id: 'cta-ex-btn1', type: 'button', props: { label: 'Ajukan Proposal In-House Training ➔', href: '#contact', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', color: '#ffffff', fontWeight: '700' } },
    { id: 'cta-ex-btn2', type: 'button', props: { label: 'Unduh Company Credentials (PDF)', href: '#programs', variant: 'outline', size: 'large', radius: 'md', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'cta-ex-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'cta-ex-title');
  const descComps = layoutComponents.filter(c => c.id === 'cta-ex-desc');
  const btn1Comps = layoutComponents.filter(c => c.id === 'cta-ex-btn1');
  const btn2Comps = layoutComponents.filter(c => c.id === 'cta-ex-btn2');

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#060a12] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0e192c] via-[#09111e] to-[#04080e] border border-cyan-700/30 shadow-2xl text-center space-y-8 overflow-hidden">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {renderLayoutComponents(titleComps, sectionId)}
            {renderLayoutComponents(descComps, sectionId)}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {renderLayoutComponents(btn1Comps, sectionId)}
            {renderLayoutComponents(btn2Comps, sectionId)}
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><span className="text-cyan-400">●</span> Kustomisasi Modul & Studi Kasus</span>
            <span className="flex items-center gap-1.5"><span className="text-blue-400">●</span> Sertifikat Terakreditasi Global</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-400">●</span> Evaluasi & Laporan Pasca-Pelatihan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
