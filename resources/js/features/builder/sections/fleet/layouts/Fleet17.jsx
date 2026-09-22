import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TRANSGO — Full-Width Image Fleet Banner
 * Banner image penuh + overlay gelap + teks & stats di atas gambar.
 * Untuk hero fleet yang memukau secara visual.
 */
export default function Fleet17({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt17-badge', type: 'badge', props: { content: '🚛 Armada Nasional', background: 'rgba(255,255,255,0.12)', color: '#ffffff' } },
    { id: 'flt17-heading', type: 'heading', props: { content: 'Bergerak Tanpa Henti, Melayani Tanpa Batas', level: 'h2', fontSize: '58px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt17-text', type: 'text', props: { content: 'Armada lengkap untuk setiap rute — darat, laut, dan udara — siap melayani kebutuhan logistik bisnis Anda.', fontSize: '18px', color: 'rgba(255,255,255,0.8)', align: 'center', margin: '0 0 28px 0' } },
    { id: 'flt17-btn1', type: 'button', props: { label: 'Mulai Sekarang →', href: '#start', variant: 'primary', size: 'large', radius: 'full', background: '#f97316', color: '#ffffff' } },
    { id: 'flt17-btn2', type: 'button', props: { label: 'Lacak Kiriman', href: '#tracking', variant: 'ghost', size: 'large', background: 'rgba(255,255,255,0.1)', color: '#ffffff' } },
    { id: 'flt17-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&auto=format&fit=crop&q=80', alt: 'Fleet Background', width: '100%', height: '100%', objectFit: 'cover' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      {img.length > 0 ? (
        <div className="absolute inset-0">{renderLayoutComponents(img, sectionId)}</div>
      ) : (
        <div className="absolute inset-0 bg-slate-800" />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center w-full">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5">{renderLayoutComponents(heading, sectionId)}</div>
        {renderLayoutComponents(text, sectionId)}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {renderLayoutComponents(buttons, sectionId)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto">
          {[['500+', 'Armada Aktif'], ['99.8%', 'On-time'], ['50+', 'Kota'], ['24/7', 'Support']].map(([v, l]) => (
            <div key={l} className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4">
              <p className="text-3xl font-black text-orange-400">{v}</p>
              <p className="text-xs text-white/70 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
