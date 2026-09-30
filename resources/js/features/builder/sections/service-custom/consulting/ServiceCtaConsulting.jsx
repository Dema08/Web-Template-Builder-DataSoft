import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceCtaConsulting
 * Dark CTA section — book a consultation with elite consulting firm.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceCtaConsulting({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ccta-badge', type: 'badge', props: { content: '🤝 MULAI PERJALANAN TRANSFORMASI ANDA', background: 'rgba(184,150,62,0.15)', color: '#d4af6a', size: 'medium' } },
    { id: 'ccta-title', type: 'heading', props: { content: 'Jadwalkan Sesi Konsultasi Strategis Perdana Anda — Tanpa Biaya', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', lineHeight: '1.2' } },
    { id: 'ccta-desc', type: 'text', props: { content: 'Dalam sesi 90 menit bersama mitra senior kami, Anda akan mendapatkan diagnosis awal tantangan bisnis, kerangka solusi yang dapat ditindaklanjuti, dan estimasi potensi dampak finansialnya.', fontSize: '17px', color: '#94a3b8', align: 'center', lineHeight: '1.7' } },
    { id: 'ccta-btn1', type: 'button', props: { label: 'Pesan Sesi Konsultasi Gratis →', href: '#contact', variant: 'primary', size: 'large', radius: 'xl', background: 'linear-gradient(135deg, #b8963e, #d4af6a)', color: '#0d1117', fontWeight: '800' } },
    { id: 'ccta-btn2', type: 'button', props: { label: 'Unduh Company Profile (PDF)', href: '#', variant: 'outline', size: 'large', radius: 'xl', borderColor: '#475569', color: '#e2e8f0', fontWeight: '600' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 bg-[#080e1c] relative overflow-hidden">
      {/* Diagonal gold gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 via-transparent to-indigo-900/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/6 rounded-full blur-3xl pointer-events-none" />
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-6">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="mt-5">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium select-none">
          <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Tanpa Biaya Initial Consultation</span>
          <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> NDA Ditandatangani di Hari Pertama</span>
          <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Respons dalam 24 Jam Kerja</span>
          <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Dipimpin Langsung oleh Mitra Senior</span>
        </div>
      </div>
    </section>
  );
}
