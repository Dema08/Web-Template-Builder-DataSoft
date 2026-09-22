import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLARIS — App Download / CTA Fleet
 * Gradien biru-cyan dengan progress bar dan CTA download app tracking.
 * Untuk perusahaan logistik dengan aplikasi mobile.
 */
export default function Fleet18({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt18-badge', type: 'badge', props: { content: '📱 App v3.0 Tersedia', background: 'rgba(255,255,255,0.12)', color: '#67e8f9' } },
    { id: 'flt18-heading', type: 'heading', props: { content: 'Pantau Armada dari Genggaman', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt18-text', type: 'text', props: { content: 'Download aplikasi tracking kami dan pantau posisi armada, status kiriman, dan estimasi tiba secara real-time kapan saja.', fontSize: '17px', color: 'rgba(255,255,255,0.75)', align: 'center', margin: '0 0 32px 0' } },
    { id: 'flt18-btn1', type: 'button', props: { label: '⬇ App Store', href: '#appstore', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#0369a1' } },
    { id: 'flt18-btn2', type: 'button', props: { label: '⬇ Google Play', href: '#playstore', variant: 'outline', size: 'large', radius: 'full', background: 'transparent', color: '#ffffff' } },
    { id: 'flt18-card-1', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(103,232,249,0.2)', padding: '24px' },
      childrenComponents: [
        { id: 'flt18-c1-title', type: 'heading', props: { content: '📍 Live Map', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' } },
        { id: 'flt18-c1-desc', type: 'text', props: { content: 'Lihat posisi truk real-time di peta interaktif.', fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: '0' } },
      ]
    },
    { id: 'flt18-card-2', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(103,232,249,0.2)', padding: '24px' },
      childrenComponents: [
        { id: 'flt18-c2-title', type: 'heading', props: { content: '🔔 Notifikasi', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' } },
        { id: 'flt18-c2-desc', type: 'text', props: { content: 'Push notification tiap perubahan status kiriman.', fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: '0' } },
      ]
    },
    { id: 'flt18-card-3', type: 'card', props: { variant: 'service-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(103,232,249,0.2)', padding: '24px' },
      childrenComponents: [
        { id: 'flt18-c3-title', type: 'heading', props: { content: '📊 Laporan', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' } },
        { id: 'flt18-c3-desc', type: 'text', props: { content: 'Analitik harian dan bulanan pengiriman Anda.', fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: '0' } },
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
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)' }}>
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
      <div className="relative max-w-5xl mx-auto text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {renderLayoutComponents(buttons, sectionId)}
        </div>
        <p className="text-xs text-cyan-300/70 mt-4 select-none">★★★★★ 4.9/5 dari 12.000+ ulasan</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="max-w-2xl mx-auto mt-8 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300" />
        </div>
        <p className="text-xs text-white/50 mt-2 select-none">500.000+ unduhan · iOS & Android</p>
      </div>
    </section>
  );
}
