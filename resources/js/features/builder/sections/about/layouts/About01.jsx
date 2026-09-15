import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Floating Glass Story
 * Kartu kaca melayang + foto + statistik + CTA pill hitam.
 * Terang, premium, ala agency mahal.
 */
export default function About01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-1', type: 'badge', props: { content: '✦ Our Story', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'heading-1', type: 'heading', props: { content: 'We design brands the world remembers', level: 'h2', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Since 2018, Lumière has crafted identities, websites, and campaigns for 120+ ambitious teams — strategy first, pixels second.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-work', type: 'button', props: { label: 'See Our Work →', href: '#work', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-1', type: 'image', props: { src: '', alt: 'Studio', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto rounded-[28px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_24px_70px_-24px_rgba(15,23,42,0.25)] px-8 py-12 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="flex items-center gap-6 mt-8 select-none pointer-events-none">
            <div><p className="text-2xl font-black text-slate-900">120+</p><p className="text-xs text-slate-500">Projects</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">14</p><p className="text-xs text-slate-500">Awards</p></div>
            <div className="w-px h-10 bg-slate-200" />
            <div><p className="text-2xl font-black text-slate-900">8yr</p><p className="text-xs text-slate-500">Studio</p></div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[24px] overflow-hidden border border-white shadow-xl">
            {renderLayoutComponents(img, sectionId)}
          </div>
          <div className="absolute -bottom-4 -left-4 bg-slate-900 text-white rounded-2xl px-5 py-3.5 shadow-xl select-none pointer-events-none">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Established</p>
            <p className="text-sm font-bold">Jakarta — 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
}

