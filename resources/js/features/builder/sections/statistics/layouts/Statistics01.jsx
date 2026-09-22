import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AURORA — Centered Gradient Glow — Statistics
 * Orb gradient animasi + badge pill + kartu statistik bersih.
 * Klasik SaaS premium yang selalu terlihat mahal.
 */
export default function Statistics01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat1-badge', type: 'badge', props: { content: '✦ Aurora 3.0 — Live Metrics', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'stat1-heading', type: 'heading', props: { content: 'Numbers that feel like magic', level: 'h2', fontSize: '48px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat1-text', type: 'text', props: { content: 'Setiap angka mewakili tim nyata yang membangun lebih cepat bersama Aurora — tanpa satu baris kode pun.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat1-cta', type: 'button', props: { label: 'Lihat Laporan Publik →', href: '#laporan', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    {
      id: 'stat1-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat1-c1-value', type: 'heading', props: { content: '12.000+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat1-c1-label', type: 'text', props: { content: 'Makers Aktif', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat1-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat1-c2-value', type: 'heading', props: { content: '480K', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat1-c2-label', type: 'text', props: { content: 'Situs Dipublikasikan', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat1-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat1-c3-value', type: 'heading', props: { content: '99,9%', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat1-c3-label', type: 'text', props: { content: 'Uptime Edge', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'stat1-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' },
      childrenComponents: [
        { id: 'stat1-c4-value', type: 'heading', props: { content: '4,9/5', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'stat1-c4-label', type: 'text', props: { content: 'Rating Pengguna', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-200/60 via-fuchsia-200/50 to-cyan-200/60 blur-3xl animate-pulse" />
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
          <div className="mt-5 w-full">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
          <div className="w-full max-w-2xl">{renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}</div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
            {renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center justify-center gap-4 mt-8 text-xs text-slate-400 select-none">
          <span>★★★★★ 4.9/5</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>Data diperbarui real-time</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>Audit publik setiap kuartal</span>
        </div>
      </div>
    </section>
  );
}
