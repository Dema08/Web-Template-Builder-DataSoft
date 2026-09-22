import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLARIS — App Product Launch Roadmap
 * Lini masa peluncuran produk aplikasi mobile dengan fitur rilis bertahap, status ketersediaan di app store, dan CTA unduh.
 * Cocok untuk mobile application, SaaS startup, dan peluncuran produk digital.
 */
export default function Timeline18({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml18-badge', type: 'badge', props: { content: '📱 APP RELEASE SCHEDULE', background: '#fff1f2', color: '#e11d48' } },
    { id: 'tml18-heading', type: 'heading', props: { content: 'Jadwal Rilis Fitur & Pembaruan Aplikasi', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tml18-text', type: 'text', props: { content: 'Ikuti roadmap peluncuran fitur baru yang dirancang untuk meningkatkan produktivitas harian Anda.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const releases = [
    { version: 'v1.0 (Live)', title: 'Core Features & Onboarding', status: 'Tersedia di Store', desc: 'Manajemen akun mandiri, sinkronisasi data real-time, dan navigasi intuitif.' },
    { version: 'v2.0 (Beta)', title: 'AI Assistant & Automation', status: 'Akses Terbatas', desc: 'Asisten cerdas terintegrasi untuk otomatisasi tugas rutin dan pelaporan instan.' },
    { version: 'v3.0 (Coming)', title: 'Multi-User Collaboration Mesh', status: 'Segera Hadir', desc: 'Ruang kerja tim bersama dengan editing simultan tanpa batasan perangkat.' },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-rose-50/50 to-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {releases.map((r, i) => (
            <div key={i} className="p-7 rounded-2xl bg-white border border-rose-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-rose-600 text-sm">{r.version}</span>
                  <span className="text-xs bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full font-semibold">{r.status}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-2">{r.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{r.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-rose-100 text-xs text-rose-600 font-bold">
                ✓ Standar Kualitas iOS & Android
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
