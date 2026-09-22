import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * VELOCE — Dark Cinematic Split
 * Armada gelap sinematik: kiri teks + kanan image dengan glow oranye.
 * Untuk logistik premium, transportasi korporat.
 */
export default function Fleet03({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt3-badge', type: 'badge', props: { content: '🚛 500+ Armada Aktif', background: '#1c1917', color: '#f97316' } },
    { id: 'flt3-heading', type: 'heading', props: { content: 'Armada Berat Kelas Dunia', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#fafaf9', align: 'left', margin: '0 0 16px 0' } },
    { id: 'flt3-text', type: 'text', props: { content: 'Truk tronton 40ft, kapal kargo kontainer, dan jet cargo udara beroperasi 24/7 untuk memastikan setiap pengiriman tiba tepat waktu.', fontSize: '17px', color: '#a8a29e', align: 'left', margin: '0 0 28px 0' } },
    { id: 'flt3-btn1', type: 'button', props: { label: 'Lihat Seluruh Armada →', href: '#fleet', variant: 'primary', size: 'large', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'flt3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&auto=format&fit=crop&q=80', alt: 'Fleet Armada', width: '100%', height: '100%', objectFit: 'cover' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-0 bg-[#0c0a09] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[600px]">
        {/* Left: Text */}
        <div className="flex flex-col justify-center px-10 py-20">
          {renderLayoutComponents(badge, sectionId)}
          <div className="mt-5 w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full max-w-lg">{renderLayoutComponents(text, sectionId)}</div>
          <div className="flex flex-wrap gap-3 mt-2">{renderLayoutComponents(buttons, sectionId)}</div>
          <div className="flex items-center gap-6 mt-10">
            {[['500+', 'Armada'], ['99.8%', 'On-time'], ['24/7', 'Operasi']].map(([v, l]) => (
              <div key={l}>
                <p className="text-2xl font-black text-orange-400">{v}</p>
                <p className="text-xs text-stone-500 uppercase tracking-widest">{l}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent z-10 pointer-events-none" />
          {img.length > 0 ? (
            <div className="absolute inset-0">{renderLayoutComponents(img, sectionId)}</div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-8xl bg-stone-900">🚛</div>
          )}
          <div className="absolute bottom-6 right-6 z-20 bg-black/70 backdrop-blur border border-orange-500/30 rounded-2xl px-5 py-3 select-none pointer-events-none">
            <p className="text-[10px] text-orange-400 uppercase tracking-widest">Live GPS</p>
            <p className="text-sm font-bold text-white">432 Truk Online</p>
          </div>
        </div>
      </div>
    </section>
  );
}
