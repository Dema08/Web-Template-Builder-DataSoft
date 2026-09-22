import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Luxury Agency Roadmap
 * Lini masa agensi mewah dengan nuansa ungu gelap & aksen emas, rasio visual sinematik, dan pameran babak portofolio.
 * Cocok untuk studio kreatif premium, agensi periklanan, dan desainer mode.
 */
export default function Timeline16({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml16-badge', type: 'badge', props: { content: 'AGENCY CREATIVE CHAPTERS', background: '#faf5ff', color: '#9333ea' } },
    { id: 'tml16-heading', type: 'heading', props: { content: 'Babak Kreatif & Mahakarya Desain', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml16-text', type: 'text', props: { content: 'Eksplorasi perjalanan estetika dan penciptaan identitas visual untuk brand-brand paling berpengaruh.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const chapters = [
    { tag: 'CHAPTER 01', title: 'Pure Visual Identity', award: 'Winner — Best Branding 2020', desc: 'Membangun karakter visual yang autentik bagi 50 brand ikonik.' },
    { tag: 'CHAPTER 02', title: 'Immersive Digital Canvas', award: 'Site of the Year 2023', desc: 'Merancang pengalaman web interaktif sinematik yang memenangkan penghargaan global.' },
    { tag: 'CHAPTER 03', title: 'Spatial & AI Aesthetics', award: 'Innovation Award 2026', desc: 'Menjelajah batas baru desain generatif dan antarmuka spasial masa depan.' },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full text-white">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full text-slate-400">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chapters.map((c, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-800/80 border border-purple-500/20 hover:border-purple-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800">{c.tag}</span>
                <h3 className="text-2xl font-bold text-white mt-4">{c.title}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{c.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-700/80 text-xs font-semibold text-purple-300">
                ★ {c.award}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
