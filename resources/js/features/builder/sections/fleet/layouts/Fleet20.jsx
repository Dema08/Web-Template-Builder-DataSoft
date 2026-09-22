import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AETHER — Ultra Premium Finale Fleet
 * Aurora gelap + glass cards + progress bar + mega stats.
 * Fleet section paling mewah dari 20 variasi.
 */
export default function Fleet20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt20-badge', type: 'badge', props: { content: '✦ ARMADA AETHER 2026 — PREMIUM FLEET', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'flt20-heading', type: 'heading', props: { content: 'Satu Platform. Ratusan Armada. Tanpa Batas.', level: 'h2', fontSize: '58px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt20-text', type: 'text', props: { content: 'Infrastruktur logistik terlengkap di Indonesia — darat, laut, udara, dan cold chain — dikelola dalam satu ekosistem terintegrasi bertenaga AI.', fontSize: '18px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'flt20-btn1', type: 'button', props: { label: 'Daftar Mitra Armada ✦', href: '#partner', variant: 'primary', size: 'large', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'flt20-btn2', type: 'button', props: { label: 'Lihat Dashboard Live', href: '#live', variant: 'ghost', size: 'large', background: 'transparent', color: '#e2e8f0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');

  return (
    <section className="relative py-28 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative max-w-5xl mx-auto text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-6">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {renderLayoutComponents(buttons, sectionId)}
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {[
            ['⚡', 'Armada Darat', '320 Unit Aktif'],
            ['🛡', 'Cold Chain', '80 Unit -20°C'],
            ['⛵', 'Armada Laut', '12 Kapal Kargo'],
            ['✈️', 'Air Cargo', '8 Slot / Hari'],
          ].map(([icon, t, d]) => (
            <div key={t} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 hover:bg-white/10 transition-all duration-300">
              <p className="text-3xl">{icon}</p>
              <p className="text-base font-bold text-white mt-3">{t}</p>
              <p className="text-xs text-slate-400 mt-1">{d}</p>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="max-w-2xl mx-auto mt-10 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300" />
        </div>
        <p className="text-xs text-slate-500 mt-3 select-none">
          Target 2030: 1.000 unit armada · Net-Zero Fleet · 100 kota tujuan
        </p>
      </div>
    </section>
  );
}
