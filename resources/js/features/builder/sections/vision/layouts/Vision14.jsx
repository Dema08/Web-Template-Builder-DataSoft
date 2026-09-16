import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VISION 14 — MAISON Corporate Trust Institutional Vision
 * Mirrors Hero14 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Vision14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'v14-badge', type: 'badge', props: { content: '✓ Terakreditasi A • Visi Institusional 1998', background: '#dbeafe', color: '#1e40af' } },
    { id: 'v14-heading', type: 'heading', props: { content: 'Membentuk visi generasi unggul Indonesia', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'v14-text', type: 'text', props: { content: '28 program studi, 15.000+ alumni sukses, dan komitmen institusi berstandar internasional.', fontSize: '17px', color: '#475569', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'v14-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', padding: '20px', borderWidth: '1px', borderColor: '#bfdbfe', shadow: 'sm' },
      childrenComponents: [
        { id: 'v14-c1-title', type: 'heading', props: { content: 'Keunggulan Akademik', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#1e3a8a', margin: '0 0 4px 0' } },
        { id: 'v14-c1-desc', type: 'text', props: { content: 'Kurikulum adaptif masa depan dan riset unggulan.', fontSize: '13px', color: '#475569', margin: '0' } },
      ],
    },
    { id: 'v14-img', type: 'image', props: { src: '', alt: 'Institutional Vision', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="mt-2">
            {renderLayoutComponents(copy.filter(c => c.type === 'card'), sectionId)}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-md">
            {[['28', 'Prodi'], ['15k+', 'Alumni'], ['A', 'Akreditasi']].map(([v, l]) => (
              <div key={l} className="bg-white border border-blue-100 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-blue-900">{v}</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[20px] overflow-hidden border-4 border-white shadow-[0_28px_60px_-20px_rgba(30,64,175,0.4)]">
            {renderLayoutComponents(img, sectionId)}
          </div>
          <div className="absolute -bottom-5 left-6 right-6 bg-white rounded-2xl shadow-xl border border-blue-100 px-5 py-4 flex items-center gap-3 select-none pointer-events-none">
            <span className="text-2xl">🎓</span>
            <div><p className="text-sm font-black text-slate-900">Visi Akademik 2026</p><p className="text-xs text-slate-500">Pusat unggulan riset dan inovasi pendidikan tinggi</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
