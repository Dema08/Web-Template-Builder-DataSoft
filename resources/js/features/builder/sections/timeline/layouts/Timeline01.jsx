import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AURORA — Centered Milestone Cards
 * Tampilan lini masa modern dengan orb gradient glow, badge pill, kartu beranimasi hover lift, dan ringkasan pencapaian.
 * Cocok untuk company profile, kilas balik sejarah perusahaan, dan milestone korporat.
 */
export default function Timeline01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'tml1-badge',
      type: 'badge',
      props: { content: '✦ HISTORI & PERJALANAN KAMI', background: '#ede9fe', color: '#4f46e5' },
    },
    {
      id: 'tml1-heading',
      type: 'heading',
      props: { content: 'Jejak Langkah Menuju Keunggulan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'tml1-subtext',
      type: 'text',
      props: { content: 'Perjalanan panjang kami dalam membangun standar industri terbaik melalui inovasi konsisten dan dedikasi tanpa henti.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'tml1-card-1',
      type: 'card',
      props: { variant: 'timeline', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'tml1-c1-year', type: 'badge', props: { content: '2015 — Awal Mula', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
        { id: 'tml1-c1-title', type: 'heading', props: { content: 'Pendirian & Fondasi Pertama', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'tml1-c1-desc', type: 'text', props: { content: 'Dimulai oleh para founder dengan visi mentransformasi ekosistem layanan melalui teknologi modern.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tml1-card-2',
      type: 'card',
      props: { variant: 'timeline', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'tml1-c2-year', type: 'badge', props: { content: '2018 — Ekspansi', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
        { id: 'tml1-c2-title', type: 'heading', props: { content: 'Ekspansi Jaringan Nasional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'tml1-c2-desc', type: 'text', props: { content: 'Membuka cabang operasional di 15 kota strategis dan menjalin kemitraan dengan 200+ klien korporasi.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tml1-card-3',
      type: 'card',
      props: { variant: 'timeline', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'tml1-c3-year', type: 'badge', props: { content: '2022 — Inovasi AI', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
        { id: 'tml1-c3-title', type: 'heading', props: { content: 'Transformasi Digital Cerdas', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'tml1-c3-desc', type: 'text', props: { content: 'Integrasi platform otomasi berbasis cloud dan AI untuk mempercepat efisiensi operasional harian.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'tml1-card-4',
      type: 'card',
      props: { variant: 'timeline', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'tml1-c4-year', type: 'badge', props: { content: '2026 — Masa Depan', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
        { id: 'tml1-c4-title', type: 'heading', props: { content: 'Pemimpin Pasar Terdepan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'tml1-c4-desc', type: 'text', props: { content: 'Menjadi standar keunggulan industri dengan kepuasan pelanggan 99.8% di seluruh Indonesia.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading' && c.id === 'tml1-heading');
  const subtext = layoutComponents.filter(c => c.type === 'text' && c.id === 'tml1-subtext');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');
  const otherComponents = layoutComponents.filter(c => 
    c.type !== 'badge' && 
    c.id !== 'tml1-heading' && 
    c.id !== 'tml1-subtext' && 
    c.type !== 'card'
  );

  return (
    <section className="relative py-24 px-6 bg-slate-50/50 overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Aurora Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-br from-indigo-200/50 via-purple-200/40 to-cyan-200/50 blur-3xl opacity-70" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-4">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading.length > 0 ? heading : layoutComponents.filter(c => c.type === 'heading').slice(0, 1), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(subtext.length > 0 ? subtext : layoutComponents.filter(c => c.type === 'text').slice(0, 1), sectionId)}</div>
          {otherComponents.length > 0 && renderLayoutComponents(otherComponents, sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>

        <div className="pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>10+ Tahun Dedikasi Berkelanjutan</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <span>1000+ Klien Puas</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>Standar Mutu Terakreditasi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
