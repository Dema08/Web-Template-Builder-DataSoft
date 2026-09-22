import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Luxury Global Ports Showcase
 * Tampilan elegan dengan showcase pelabuhan & gerbang internasional, rasio visual premium, dan aksen ungu mewah.
 * Cocok untuk kargo internasional, freight forwarding ekspor-impor, dan kepelabuhanan.
 */
export default function Coverage16({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov16-badge', type: 'badge', props: { content: 'INTERNATIONAL GATEWAY PORTS', background: '#faf5ff', color: '#9333ea' } },
    { id: 'cov16-heading', type: 'heading', props: { content: 'Gerbang Pelabuhan & Hub Internasional Terpadu', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov16-text', type: 'text', props: { content: 'Konektivitas langsung dari pelabuhan samudra Indonesia ke hub perdagangan internasional di Asia Tenggara dan dunia.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const ports = [
    { port: 'Pelabuhan Tanjung Priok', city: 'Jakarta International Port', cap: '7.8 Juta TEUs / Tahun', tag: 'Gerbang Ekspor Utama' },
    { port: 'Pelabuhan Tanjung Perak', city: 'Surabaya Gateway', cap: '4.2 Juta TEUs / Tahun', tag: 'Koneksi Indonesia Timur' },
    { port: 'Bandara Soekarno-Hatta Cargo', city: 'Cengkareng Hub', cap: '850.000 Ton / Tahun', tag: 'Air Cargo Express Hub' },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full text-white">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full text-slate-400">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ports.map((p, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-800/80 border border-purple-500/20 hover:border-purple-400 transition-all duration-300">
              <span className="text-xs font-bold text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800">{p.tag}</span>
              <h3 className="text-xl font-bold text-white mt-4">{p.port}</h3>
              <p className="text-sm text-slate-400 mt-1">{p.city}</p>
              <div className="mt-8 pt-4 border-t border-slate-700/80 text-xs text-slate-300 font-semibold">
                Kapasitas: {p.cap}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
