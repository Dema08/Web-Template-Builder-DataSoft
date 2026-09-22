import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ZEPHYR — Glassmorphism Premium Fleet
 * Kaca transparan di atas gradien biru-ungu.
 * Untuk perusahaan logistik modern, tech-first.
 */
export default function Fleet14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt14-badge', type: 'badge', props: { content: '✦ Smart Fleet Technology', background: 'rgba(255,255,255,0.1)', color: '#c4b5fd' } },
    { id: 'flt14-heading', type: 'heading', props: { content: 'Armada Pintar Bertenaga AI', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt14-text', type: 'text', props: { content: 'Setiap kendaraan terhubung ke sistem AI kami untuk optimasi rute, prediksi maintenance, dan efisiensi bahan bakar secara real-time.', fontSize: '17px', color: 'rgba(255,255,255,0.75)', align: 'center', margin: '0 0 40px 0' } },
    { id: 'flt14-btn1', type: 'button', props: { label: 'Coba Gratis 30 Hari', href: '#trial', variant: 'primary', size: 'large', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'flt14-btn2', type: 'button', props: { label: 'Pelajari Teknologi', href: '#tech', variant: 'ghost', size: 'large', background: 'transparent', color: 'rgba(255,255,255,0.8)' } },
    { id: 'flt14-card-1', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.15)', shadow: 'none', padding: '28px' },
      childrenComponents: [
        { id: 'flt14-c1-title', type: 'heading', props: { content: '🧠 AI Route Optimizer', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'flt14-c1-desc', type: 'text', props: { content: 'Memperpendek rute rata-rata 23% dengan analisis traffic real-time.', fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: '0' } },
      ]
    },
    { id: 'flt14-card-2', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.15)', shadow: 'none', padding: '28px' },
      childrenComponents: [
        { id: 'flt14-c2-title', type: 'heading', props: { content: '🔧 Predictive Maintenance', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'flt14-c2-desc', type: 'text', props: { content: 'Deteksi kerusakan sebelum terjadi. Downtime turun 67% dari rata-rata industri.', fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: '0' } },
      ]
    },
    { id: 'flt14-card-3', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.15)', shadow: 'none', padding: '28px' },
      childrenComponents: [
        { id: 'flt14-c3-title', type: 'heading', props: { content: '📡 IoT Connected', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '0 0 8px 0' } },
        { id: 'flt14-c3-desc', type: 'text', props: { content: 'Setiap unit mengirim data telemetri setiap 5 detik ke pusat kendali.', fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: '0' } },
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
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #312e81 0%, #4c1d95 50%, #1e1b4b 100%)' }}>
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
      <div className="relative max-w-5xl mx-auto text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {renderLayoutComponents(buttons, sectionId)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
