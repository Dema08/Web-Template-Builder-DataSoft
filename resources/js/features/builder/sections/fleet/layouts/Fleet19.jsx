import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ORION — Split Image Left + Right Feature List
 * Image di kiri dengan list fitur/keunggulan armada di kanan.
 * Untuk presentasi armada dengan pendekatan visual + detail teknis.
 */
export default function Fleet19({ components = [], sectionId = null }) {
  const features = [
    { icon: '🛰', title: 'GPS Tracking Presisi', desc: 'Koordinat diperbarui setiap 5 detik.' },
    { icon: '❄️', title: 'Cold Chain Certified', desc: 'Rantai dingin -20°C tersertifikasi ISO.' },
    { icon: '🔒', title: 'Keamanan Terjamin', desc: 'Sensor anti-intrusi + kamera 360°.' },
    { icon: '⚡', title: 'EV & Hybrid Ready', desc: '30% armada sudah tenaga listrik.' },
  ];

  const defaultComponents = [
    { id: 'flt19-badge', type: 'badge', props: { content: '🔍 Lebih dari Sekadar Truk', background: '#f8fafc', color: '#475569' } },
    { id: 'flt19-heading', type: 'heading', props: { content: 'Armada dengan Standar Tertinggi', level: 'h2', fontSize: '46px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'flt19-text', type: 'text', props: { content: 'Setiap armada melewati inspeksi 200-titik sebelum beroperasi. Standar kami melampaui regulasi nasional.', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 28px 0' } },
    { id: 'flt19-btn', type: 'button', props: { label: 'Lihat Sertifikasi Armada →', href: '#cert', variant: 'primary', size: 'large', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'flt19-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&auto=format&fit=crop&q=80', alt: 'Fleet Trucks', width: '100%', height: '100%', objectFit: 'cover' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-2xl" style={{ aspectRatio: '4/3' }}>
            {img.length > 0 ? (
              <div className="absolute inset-0">{renderLayoutComponents(img, sectionId)}</div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-7xl bg-slate-100">🚛</div>
            )}
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-xl select-none pointer-events-none">
            <p className="text-xs text-slate-400 uppercase tracking-widest">Inspeksi Terakhir</p>
            <p className="text-sm font-black text-slate-900 mt-1">✓ Semua unit lulus 200-titik QC</p>
          </div>
        </div>

        {/* Right: Text + Features */}
        <div className="flex flex-col items-start">
          {renderLayoutComponents(badge, sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
          <div className="space-y-4 w-full mb-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <div>
                  <p className="font-bold text-slate-900">{f.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {renderLayoutComponents(buttons, sectionId)}
        </div>
      </div>
    </section>
  );
}
