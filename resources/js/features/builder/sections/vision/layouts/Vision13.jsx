import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 13 — KIOSO Playful Food Vision
 * Mirrors Hero13 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v13-badge', type: 'badge', props: { content: '🎉 Visi F&B: Rasa & Kebahagiaan', background: '#fce7f3', color: '#db2777' } },
    { id: 'v13-heading', type: 'heading', props: { content: 'Delicious vision, happy community!', level: 'h2', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'v13-text', type: 'text', props: { content: 'Inovasi rasa, kualitas premium & pelayanan hangat — disajikan penuh cinta setiap hari.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'v13-card-1',
      type: 'card',
      props: { variant: 'service', background: '#fffbeb', borderRadius: '20px', padding: '20px', borderWidth: '2px', borderColor: '#0f172a', shadow: '4px_4px_0_#0f172a' },
      childrenComponents: [
        { id: 'v13-c1-title', type: 'heading', props: { content: 'Kualitas Bahan Baku', level: 'h3', fontSize: '16px', fontWeight: '800', color: '#0f172a', margin: '0 0 4px 0' } },
        { id: 'v13-c1-desc', type: 'text', props: { content: 'Hanya menggunakan bahan segar pilihan terbaik.', fontSize: '13px', color: '#64748b', margin: '0' } },
      ],
    },
    { id: 'v13-img', type: 'image', props: { src: '', alt: 'Playful Vision', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '32px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-16 px-6 bg-[#fef9c3]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="bg-white border-[3px] border-slate-900 rounded-[28px] p-7 shadow-[8px_8px_0_#0f172a] -rotate-1">
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="mt-2">
            {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
          </div>
          <div className="flex items-center gap-2 mt-5">
            <div className="flex -space-x-2">
              {['🍔', '🍟', '🥤'].map((e, i) => (
                <span key={i} className="w-9 h-9 rounded-full bg-amber-100 border-2 border-slate-900 flex items-center justify-center text-lg">{e}</span>
              ))}
            </div>
            <p className="text-xs font-bold select-none">12,000+ pelanggan tersenyum ★★★★★</p>
          </div>
        </div>
        <div className="border-[3px] border-slate-900 rounded-[32px] overflow-hidden shadow-[8px_8px_0_#0f172a] rotate-1 bg-white">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
