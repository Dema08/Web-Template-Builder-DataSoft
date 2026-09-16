import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 14 — MAISON Corporate Trust
 * Mirrors Hero14 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv14-badge', type: 'badge', props: { content: '✓ Terakreditasi A • Sejak 1998', background: '#dbeafe', color: '#1e40af' } },
    { id: 'srv14-heading', type: 'heading', props: { content: 'Membangun layanan institusi unggul', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'srv14-text', type: 'text', props: { content: '28 program studi, 15.000+ alumni sukses, dan kampus berstandar internasional di jantung kota.', fontSize: '17px', color: '#475569', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'srv14-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '24px' },
      childrenComponents: [
        { id: 'srv14-c1-icon', type: 'icon', props: { icon: 'FaGraduationCap', size: '32px', color: '#1e40af', align: 'left' } },
        { id: 'srv14-c1-title', type: 'heading', props: { content: 'Program Studi Unggulan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1e3a8a', margin: '12px 0 6px 0' } },
        { id: 'srv14-c1-desc', type: 'text', props: { content: 'Kurikulum berbasis industri modern.', fontSize: '14px', color: '#475569', margin: '0' } },
      ],
    },
    {
      id: 'srv14-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '24px' },
      childrenComponents: [
        { id: 'srv14-c2-icon', type: 'icon', props: { icon: 'FaChalkboardTeacher', size: '32px', color: '#1e40af', align: 'left' } },
        { id: 'srv14-c2-title', type: 'heading', props: { content: 'Dosen Praktisi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1e3a8a', margin: '12px 0 6px 0' } },
        { id: 'srv14-c2-desc', type: 'text', props: { content: 'Pengajar profesional berpengalaman luas.', fontSize: '14px', color: '#475569', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'image');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-md">
            {[['28', 'Prodi'], ['15k+', 'Alumni'], ['A', 'Akreditasi']].map(([v, l]) => (
              <div key={l} className="bg-white border border-blue-100 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-2xl font-black text-blue-900">{v}</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-widest">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
