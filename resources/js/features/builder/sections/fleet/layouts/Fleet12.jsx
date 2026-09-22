import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — Orange Gradient Full-Bleed
 * Full-bleed orange gradient dengan headline besar + kartu horizontal.
 * Untuk transportasi ekspedisi nasional yang aktif dan energik.
 */
export default function Fleet12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt12-badge', type: 'badge', props: { content: '⚡ Non-Stop 24/7', background: 'rgba(255,255,255,0.15)', color: '#ffffff' } },
    { id: 'flt12-heading', type: 'heading', props: { content: 'Armada Kami Tidak Pernah Berhenti', level: 'h2', fontSize: '56px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt12-text', type: 'text', props: { content: 'Setiap menit, puluhan truk kami melaju memastikan kiriman Anda tiba tepat waktu ke seluruh penjuru Indonesia.', fontSize: '18px', color: 'rgba(255,255,255,0.8)', align: 'center', margin: '0 0 40px 0' } },
    { id: 'flt12-btn1', type: 'button', props: { label: 'Mulai Pengiriman →', href: '#send', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#ea580c' } },
    { id: 'flt12-btn2', type: 'button', props: { label: 'Hubungi Sales', href: '#sales', variant: 'ghost', size: 'large', background: 'transparent', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');

  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 40%, #dc2626 100%)' }}>
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-white/10 blur-3xl" />
      <div className="relative max-w-4xl mx-auto text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {renderLayoutComponents(buttons, sectionId)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
          {[['500+', 'Unit Aktif', '🚛'], ['99.8%', 'On-time Rate', '⏱'], ['50+', 'Kota Tujuan', '📍'], ['24/7', 'Operasional', '🌙']].map(([v, l, e]) => (
            <div key={l} className="rounded-2xl bg-white/15 backdrop-blur border border-white/20 p-5">
              <p className="text-3xl">{e}</p>
              <p className="text-2xl font-black text-white mt-2">{v}</p>
              <p className="text-xs text-white/70 uppercase tracking-widest mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
