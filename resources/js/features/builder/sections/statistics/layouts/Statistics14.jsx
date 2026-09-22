import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MAISON — Corporate Trust — Statistics
 * Biru korporat + badge kepercayaan + kartu institusional.
 * Untuk universitas / rumah sakit / institusi.
 */
export default function Statistics14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat14-badge', type: 'badge', props: { content: '✓ Terakreditasi A • Sejak 1998', background: '#dbeafe', color: '#1e40af' } },
    { id: 'stat14-heading', type: 'heading', props: { content: 'Angka yang membangun generasi unggul', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat14-text', type: 'text', props: { content: '28 program studi, 15.000+ alumni sukses, dan kampus berstandar internasional di jantung kota.', fontSize: '17px', color: '#475569', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat14-cta', type: 'button', props: { label: 'Lihat Laporan Tahunan →', href: '#laporan', variant: 'primary', size: 'medium', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    {
      id: 'stat14-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#dbeafe', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat14-c1-value', type: 'heading', props: { content: '28', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#1e40af', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat14-c1-label', type: 'text', props: { content: 'Program Studi', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat14-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#dbeafe', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat14-c2-value', type: 'heading', props: { content: '15K+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#1e40af', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat14-c2-label', type: 'text', props: { content: 'Alumni Sukses', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat14-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#dbeafe', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat14-c3-value', type: 'heading', props: { content: 'A', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#1e40af', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat14-c3-label', type: 'text', props: { content: 'Akreditasi', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat14-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#dbeafe', hoverEffect: 'lift', padding: '28px 20px' },
      childrenComponents: [
        { id: 'stat14-c4-value', type: 'heading', props: { content: '1998', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#1e40af', align: 'center', margin: '0 0 6px 0' } },
        { id: 'stat14-c4-label', type: 'text', props: { content: 'Tahun Berdiri', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-3 mt-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
          <div className="flex items-center gap-4 mt-8 text-xs text-slate-500 select-none pointer-events-none">
            <span className="select-none">✓ Akreditasi A</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="select-none">✓ Kerja sama 120+ industri</span>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {renderLayoutComponents(cards, sectionId)}
          </div>
          <div className="absolute -bottom-5 left-6 right-6 bg-white rounded-2xl shadow-xl border border-blue-100 px-5 py-4 flex items-center gap-3 select-none pointer-events-none">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-sm font-black text-slate-900">Data Terverifikasi 2026</p>
              <p className="text-xs text-slate-500">Diaudit independen setiap tahun akademik</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
