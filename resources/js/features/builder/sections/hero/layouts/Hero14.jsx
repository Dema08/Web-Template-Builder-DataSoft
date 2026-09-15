import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MAISON — Corporate Trust
 * Biru korporat + badge kepercayaan + foto tim. Untuk
 * universitas / rumah sakit / institusi.
 */
export default function Hero14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-14', type: 'badge', props: { content: '✓ Terakreditasi A • Sejak 1998', background: '#dbeafe', color: '#1e40af' } },
    { id: 'heading-14', type: 'heading', props: { content: 'Membangun generasi unggul Indonesia', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-14', type: 'text', props: { content: '28 program studi, 15.000+ alumni sukses, dan kampus berstandar internasional di jantung kota.', fontSize: '17px', color: '#475569', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-daftar', type: 'button', props: { label: 'Daftar Sekarang →', href: '#daftar', variant: 'primary', size: 'large', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    { id: 'img-14', type: 'image', props: { src: '', alt: 'Campus', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
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
          <div className="flex flex-wrap gap-3 mt-2">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
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
            <div><p className="text-sm font-black text-slate-900">Penerimaan 2026 Dibuka</p><p className="text-xs text-slate-500">Gelombang 1 s/d 31 Maret — beasiswa 100%</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
