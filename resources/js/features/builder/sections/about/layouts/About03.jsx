import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AURORA — Centered Gradient Story
 * Tengah + orb gradient + badge pill + checklist.
 * Klasik SaaS premium yang selalu terlihat mahal.
 */
export default function About03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-3', type: 'badge', props: { content: '✦ Who We Are', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'heading-3', type: 'heading', props: { content: 'A team obsessed with craft', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-3', type: 'text', props: { content: 'Aurora is a 40-person studio of designers, engineers, and storytellers shipping premium websites since 2020.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-team', type: 'button', props: { label: 'Meet the Team →', href: '#team', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-indigo-200/50 via-fuchsia-200/40 to-cyan-200/50 blur-3xl" />
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}
        </div>
        <div className="grid grid-cols-3 gap-3 mt-10 w-full max-w-xl select-none pointer-events-none">
          {[['40+', 'People'], ['120+', 'Launches'], ['4.9★', 'Rating']].map(([v, l]) => (
            <div key={l} className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-5">
              <p className="text-2xl font-black text-slate-900">{v}</p>
              <p className="text-[11px] text-slate-500 uppercase tracking-widest">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
