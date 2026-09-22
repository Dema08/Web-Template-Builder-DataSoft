import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NEBULA — Dark Glass Fleet Dashboard
 * Tampilan gelap ala dashboard dengan kartu kaca dan orb animasi.
 * Untuk perusahaan tech-logistik / fleet management / AI tracking.
 */
export default function Fleet06({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt6-badge', type: 'badge', props: { content: '● FLEET LIVE', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'flt6-heading', type: 'heading', props: { content: 'Kontrol Armada Real-Time', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt6-text', type: 'text', props: { content: 'Dashboard AI-powered yang memantau setiap unit armada secara langsung — dari lokasi hingga kondisi mesin.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 40px 0' } },
    { id: 'flt6-card-1', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.2)', padding: '28px' },
      childrenComponents: [
        { id: 'flt6-c1-title', type: 'heading', props: { content: '432', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'flt6-c1-desc', type: 'text', props: { content: 'Unit Online', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0' } },
      ]
    },
    { id: 'flt6-card-2', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.2)', padding: '28px' },
      childrenComponents: [
        { id: 'flt6-c2-title', type: 'heading', props: { content: '99.8%', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'flt6-c2-desc', type: 'text', props: { content: 'On-time Rate', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0' } },
      ]
    },
    { id: 'flt6-card-3', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.2)', padding: '28px' },
      childrenComponents: [
        { id: 'flt6-c3-title', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'flt6-c3-desc', type: 'text', props: { content: 'Kota Aktif', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0' } },
      ]
    },
    { id: 'flt6-card-4', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.2)', padding: '28px' },
      childrenComponents: [
        { id: 'flt6-c4-title', type: 'heading', props: { content: '4,200+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'flt6-c4-desc', type: 'text', props: { content: 'Paket / Hari', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0' } },
      ]
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl animate-pulse" />
      <div className="relative max-w-5xl mx-auto text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="mt-8 max-w-2xl mx-auto h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300" />
        </div>
        <p className="text-xs text-slate-500 mt-3 select-none">Update terakhir: 2 menit lalu · Semua unit dalam kondisi optimal</p>
      </div>
    </section>
  );
}
