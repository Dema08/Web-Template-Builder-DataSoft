import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MAISON — Corporate Trust Story
 * Biru korporat + badge akreditasi + foto kampus + stats.
 * Untuk universitas / rumah sakit / institusi.
 */
export default function About14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-14', type: 'badge', props: { content: '✓ Terakreditasi A • Sejak 1998', background: '#dbeafe', color: '#1e40af' } },
    { id: 'heading-14', type: 'heading', props: { content: '28 tahun mencetak generasi unggul', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-14', type: 'text', props: { content: 'Dari 200 mahasiswa pertama hingga 15.000+ alumni di 20 negara — komitmen kami pada mutu tak pernah berubah.', fontSize: '16px', color: '#475569', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-history', type: 'button', props: { label: 'Sejarah Kami →', href: '#sejarah', variant: 'primary', size: 'medium', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    { id: 'img-14', type: 'image', props: { src: '', alt: 'Campus', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">{renderLayoutComponents(copy.filter(c => c.type === 'button'), sectionId)}</div>
          <div className="grid grid-cols-3 gap-3 mt-8 max-w-md select-none pointer-events-none">
            {[['28', 'Prodi'], ['15k+', 'Alumni'], ['1998', 'Berdiri']].map(([v, l]) => (
              <div key={l} className="bg-white border border-blue-100 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-blue-900">{v}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[20px] overflow-hidden border-4 border-white shadow-[0_28px_60px_-20px_rgba(30,64,175,0.4)]">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
