import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Agency Portfolio Fleet Showcase
 * Tata letak kiri besar + kanan scrolling cards.
 * Untuk agensi / startup logistik yang ingin tampil kreatif.
 */
export default function Fleet16({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt16-badge', type: 'badge', props: { content: '01 — ARMADA', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'flt16-heading', type: 'heading', props: { content: 'Armada Kami Berbicara Sendiri', level: 'h2', fontSize: '52px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'flt16-text', type: 'text', props: { content: 'Setiap unit armada kami memiliki kisah — ratusan kilometer, ribuan paket, dan satu tujuan: melampaui ekspektasi klien.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 28px 0' } },
    { id: 'flt16-btn', type: 'button', props: { label: 'Lihat Semua Unit →', href: '#units', variant: 'primary', size: 'large', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    { id: 'flt16-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'flt16-c1-num', type: 'text', props: { content: '01', fontSize: '11px', color: '#4f46e5', fontWeight: '700', letterSpacing: '0.25em', margin: '0 0 12px 0' } },
        { id: 'flt16-c1-title', type: 'heading', props: { content: 'Truk Tronton 40ft', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'flt16-c1-desc', type: 'text', props: { content: '180 unit aktif · GPS + CCTV · Kapasitas 25 ton', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
    { id: 'flt16-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'flt16-c2-num', type: 'text', props: { content: '02', fontSize: '11px', color: '#4f46e5', fontWeight: '700', letterSpacing: '0.25em', margin: '0 0 12px 0' } },
        { id: 'flt16-c2-title', type: 'heading', props: { content: 'Cold Chain Reefer', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'flt16-c2-desc', type: 'text', props: { content: '80 unit aktif · -20°C · IoT Sensor · Farmasi & Pangan', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
    { id: 'flt16-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', hoverEffect: 'lift', padding: '28px' },
      childrenComponents: [
        { id: 'flt16-c3-num', type: 'text', props: { content: '03', fontSize: '11px', color: '#4f46e5', fontWeight: '700', letterSpacing: '0.25em', margin: '0 0 12px 0' } },
        { id: 'flt16-c3-title', type: 'heading', props: { content: 'Kapal Kargo Inter-Island', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
        { id: 'flt16-c3-desc', type: 'text', props: { content: '12 kapal · AIS Tracking · Kapasitas 1.000 ton', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        <div className="lg:sticky lg:top-20">
          {renderLayoutComponents(badge, sectionId)}
          <div className="mt-4">{renderLayoutComponents(heading, sectionId)}</div>
          {renderLayoutComponents(text, sectionId)}
          <div className="mt-2">{renderLayoutComponents(buttons, sectionId)}</div>
          <div className="mt-10 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          <div className="flex gap-6 mt-6">
            {[['500+', 'Armada'], ['26 Thn', 'Berpengalaman'], ['50+', 'Kota']].map(([v, l]) => (
              <div key={l}>
                <p className="text-xl font-black text-slate-900">{v}</p>
                <p className="text-xs text-slate-400">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
