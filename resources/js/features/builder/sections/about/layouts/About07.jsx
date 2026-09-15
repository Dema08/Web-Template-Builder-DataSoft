import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OBSIDIAN — Enterprise Dark Story
 * Gelap + badge compliance + foto dashboard + status.
 * Untuk SaaS enterprise / cloud / fintech.
 */
export default function About07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-7', type: 'badge', props: { content: '◆ SOC2 • ISO 27001', background: '#0f172a', color: '#67e8f9' } },
    { id: 'heading-7', type: 'heading', props: { content: 'Trusted by the teams that cannot fail', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-7', type: 'text', props: { content: 'Obsidian powers banks, hospitals, and governments across 40 regions — audited, certified, always on.', fontSize: '16px', color: '#94a3b8', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-compliance', type: 'button', props: { label: 'Security Overview →', href: '#security', variant: 'primary', size: 'medium', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    { id: 'img-7', type: 'image', props: { src: '', alt: 'Operations', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="relative py-20 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_-20px_rgba(56,189,248,0.35)] bg-slate-900">
          {renderLayoutComponents(img, sectionId)}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5 pt-12 pointer-events-none select-none">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <p className="text-xs font-bold text-white">TRUSTED IN 40/40 REGIONS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
