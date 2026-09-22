import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AETHER — Ultra Premium Global Network Finale
 * Mahakarya layout penutup dengan tema kosmik indigo/cyan, orb partikel menyala, metrik distribusi multi-modal terintegrasi.
 * Cocok untuk ekosistem konglomerat logistik, infrastruktur transportasi nasional, dan portofolio kelas dunia.
 */
export default function Coverage20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov20-badge', type: 'badge', props: { content: '✦ AETHER GLOBAL LOGISTICS ECOSYSTEM', background: '#1e1b4b', color: '#818cf8' } },
    { id: 'cov20-heading', type: 'heading', props: { content: 'Konektivitas Logistik Tanpa Batas Seluruh Wilayah', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#fafaf9', align: 'center', margin: '0 0 16px 0' } },
    { id: 'cov20-text', type: 'text', props: { content: 'Menyatukan rute angkutan darat, laut, udara, dan pergudangan cerdas dalam satu platform terpadu dengan standar reliabilitas tertinggi.', fontSize: '17px', color: '#cbd5e1', align: 'center', margin: '0 0 48px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const stats = [
    { num: '38', label: 'Provinsi Terlayani Penuh', desc: 'Jangkauan merata tanpa batas' },
    { num: '514+', label: 'Kota & Kabupaten Aktif', desc: 'Armada beroperasi setiap hari' },
    { num: '120+', label: 'Hub Logistik & Sortir', desc: 'Fasilitas otomatisasi terpadu' },
    { num: '99.8%', label: 'Ketepatan Jadwal (SLA)', desc: 'Garansi kepastian waktu tiba' },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#09090b] overflow-hidden text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Ambient Celestial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-500/30 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        {/* 4 Core Pillars / Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-indigo-500/50 shadow-2xl transition-all duration-300 group">
              <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent block mb-3">
                {s.num}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{s.label}</h3>
              <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Global Footer Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-purple-950/80 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Siap Memperluas Distribusi Bisnis Anda?</h3>
            <p className="text-slate-400 text-sm mt-1">Konsultasikan kebutuhan rute dan SLA khusus untuk perusahaan Anda bersama tim logistik kami.</p>
          </div>
          <a href="#contact" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all whitespace-nowrap">
            Hubungi Konsultan Rute →
          </a>
        </div>
      </div>
    </section>
  );
}
