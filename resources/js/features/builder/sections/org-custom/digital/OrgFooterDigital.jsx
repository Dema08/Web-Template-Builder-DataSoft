import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgFooterDigital
 * Tech-forward multi-column footer for digital community — cyber dark purple/cyan.
 * Fully supports right-inspector selection and property editing.
 */
export default function OrgFooterDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dig-foot-logo', type: 'heading', props: { content: 'KOMUNITAS INOVASI DIGITAL', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '0.04em' } },
    { id: 'dig-foot-desc', type: 'paragraph', props: { content: 'Wadah kolaborasi teknologi non-profit terbuka terbesar di Indonesia. Menghubungkan engineer, desainer, dan inovator untuk membangun ekosistem digital mandiri.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'dig-foot-addr', type: 'paragraph', props: { content: 'Community Tech Hub: Jl. BSD Green Office Park No. 6, Tangerang, Banten 15345', fontSize: '13px', color: '#94a3b8' } },
    { id: 'dig-foot-phone', type: 'paragraph', props: { content: 'Discord Bot Support: discord.gg/inovasidigital | dev@inovasidigital.id', fontSize: '13px', color: '#67e8f9' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logoC = lc.filter(c => c.id === 'dig-foot-logo');
  const descC = lc.filter(c => c.id === 'dig-foot-desc');
  const addrC = lc.filter(c => c.id === 'dig-foot-addr');
  const phoneC = lc.filter(c => c.id === 'dig-foot-phone');

  return (
    <footer className="relative bg-[#020208] text-slate-300 pt-16 pb-12 border-t-2 border-cyan-500/30 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-indigo-950">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 p-0.5 shadow-md">
                <div className="w-full h-full bg-[#07071c] rounded-[10px] flex items-center justify-center text-cyan-300 font-black text-lg">
                  ⚡
                </div>
              </div>
              <div>{renderLayoutComponents(logoC, sectionId)}</div>
            </div>
            <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">Open Source OSS</span>
              <span className="px-2.5 py-1 rounded bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">GPL-3.0 License</span>
            </div>
          </div>

          {/* Col 2: Hub Komunitas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono">Tech Hub & Discord HQ</h4>
            <div className="leading-relaxed">{renderLayoutComponents(addrC, sectionId)}</div>
            <div className="pt-2 font-mono font-medium">{renderLayoutComponents(phoneC, sectionId)}</div>
          </div>

          {/* Col 3: Ekosistem Proyek */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono">Ecosystem</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">OpenGov Indonesia</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">HealthAI Nusantara</a></li>
              <li><a href="#hackathon" className="hover:text-cyan-400 transition-colors">Hackathon 2026</a></li>
              <li><a href="#bootcamp" className="hover:text-cyan-400 transition-colors">Free Tech Class</a></li>
              <li><a href="#jobs" className="hover:text-cyan-400 transition-colors">Job Board Remote</a></li>
            </ul>
          </div>

          {/* Col 4: Platform Health Status */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono">System & Bot Status</h4>
            <div className="p-4 rounded-xl bg-[#060618] border border-cyan-500/20 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span>Discord Gateway:</span>
                <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 99.98%
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>GitHub Repositories:</span>
                <span className="text-cyan-300 font-bold">150+ Repos</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">All systems operational in ap-southeast-1</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Komunitas Inovasi Digital Indonesia. Dikelola bersama komunitas terbuka.
          </div>
          <div className="flex items-center gap-6">
            <a href="#code-of-conduct" className="hover:text-cyan-400 transition-colors">Code of Conduct</a>
            <a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#github" className="hover:text-cyan-400 transition-colors">GitHub Organization</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
