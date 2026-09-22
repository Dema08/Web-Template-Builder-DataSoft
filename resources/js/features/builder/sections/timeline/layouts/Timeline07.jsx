import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * TERMINAL — Developer Git Commit History / Changelog
 * Lini masa bergaya konsol developer dengan format commit history, tag versi rilis, dan visual branching.
 * Cocok untuk platform open source, dokumentasi developer, dan software changelog.
 */
export default function Timeline07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml7-badge', type: 'badge', props: { content: 'GIT_LOG --ONELINE --GRAPH', background: '#022c22', color: '#4ade80' } },
    { id: 'tml7-heading', type: 'heading', props: { content: 'Histori Rilis & Catatan Perubahan Sistem', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#f0fdf4', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml7-text', type: 'text', props: { content: 'Rekam jejak pembaruan fitur, optimasi performa, dan patch stabilitas dari setiap iterasi versi.', fontSize: '15px', color: '#86efac', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const logs = [
    { tag: 'v4.2.0', hash: 'e89a1c2', date: '2026-03-15', msg: 'feat: AI Autonomous Workflow engine & sub-second sync', author: '@core-team' },
    { tag: 'v4.0.0', hash: 'b44c9d1', date: '2025-11-20', msg: 'release: Next-Gen Enterprise Architecture with zero-downtime', author: '@lead-dev' },
    { tag: 'v3.5.0', hash: '7fa0218', date: '2025-06-10', msg: 'perf: 60% memory optimization on background queue workers', author: '@infra-ops' },
    { tag: 'v3.0.0', hash: '19c8fa3', date: '2025-01-08', msg: 'feat: Initial Cloud Platform roll-out with RESTful API v1', author: '@founders' },
  ];

  return (
    <section className="py-24 px-6 bg-[#021f17] font-mono text-emerald-400" style={{ fontFamily: 'monospace' }}>
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3 font-sans">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full font-mono">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full font-sans">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="rounded-2xl bg-[#01140e] border border-emerald-500/30 overflow-hidden shadow-2xl">
          <div className="bg-[#032a1e] px-4 py-3 border-b border-emerald-500/20 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-emerald-300 ml-2 font-bold">git log --decorate --graph</span>
            </div>
            <span className="text-emerald-400 font-semibold">BRANCH: MAIN [STABLE]</span>
          </div>

          <div className="p-6 space-y-4 divide-y divide-emerald-500/15">
            {logs.map((log, i) => (
              <div key={i} className="pt-4 first:pt-0 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs md:text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500">*</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{log.tag}</span>
                  <span className="text-stone-400 font-mono">[{log.hash}]</span>
                  <span className="text-white font-medium">{log.msg}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-emerald-600 md:text-emerald-400">
                  <span>{log.author}</span>
                  <span>{log.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
