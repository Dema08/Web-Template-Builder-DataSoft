import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndFooterSmart
 * High-tech Industry 4.0 & Smart Factory multi-column footer.
 * Fully supports right-inspector selection and property editing.
 */
export default function IndFooterSmart({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'smart-foot-logo', type: 'heading', props: { content: 'NEXUS AUTOMATION 4.0', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
    { id: 'smart-foot-desc', type: 'paragraph', props: { content: 'Penyedia solusi otomasi industri, robotika manufaktur, dan sistem AI quality control terdepan di Asia Tenggara. Menghubungkan sensor cerdas, robotik, dan cloud MES.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'smart-foot-center', type: 'paragraph', props: { content: 'Robotics Center: Kawasan Industri Jababeka V Blok G-8, Cikarang, Bekasi 17530', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'smart-foot-contact', type: 'paragraph', props: { content: 'Support: (021) 8934-4000 | Email: connect@nexus4.id | API Portal: dev.nexus4.id', fontSize: '13px', color: '#67e8f9' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'smart-foot-logo');
  const desc = lc.filter(c => c.id === 'smart-foot-desc');
  const center = lc.filter(c => c.id === 'smart-foot-center');
  const contact = lc.filter(c => c.id === 'smart-foot-contact');

  return (
    <footer className="bg-[#02040b] border-t border-blue-500/20 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-950">
          {/* Main Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold">
                🤖
              </div>
              <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            </div>
            <div className="max-w-md leading-relaxed">{renderLayoutComponents(desc, sectionId)}</div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/40 text-xs font-mono text-cyan-300">OPC-UA Ready</span>
              <span className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/40 text-xs font-mono text-cyan-300">IEC 62443 Security</span>
              <span className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/40 text-xs font-mono text-cyan-300">SAP / MES Integrated</span>
              <span className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-800/40 text-xs font-mono text-cyan-300">ISO 9001 Certified</span>
            </div>
          </div>

          {/* Plant & Contact */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Pusat Inovasi Robotika & Dukungan B2B</h4>
            <div className="space-y-2">
              <div>{renderLayoutComponents(center, sectionId)}</div>
              <div>{renderLayoutComponents(contact, sectionId)}</div>
            </div>
            <div className="pt-2 text-xs text-slate-500">
              Technical Support 24/7 untuk Pabrik Terdaftar | Cloud SLA 99.98% Guarantee
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 PT Nexus Automation Indonesia Tbk. Empowering Smart Manufacturing 4.0.</p>
          <div className="flex items-center gap-6">
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solusi Robotik</a>
            <a href="#telemetry" className="hover:text-cyan-400 transition-colors">Live Telemetri</a>
            <a href="#audit" className="hover:text-cyan-400 transition-colors">Audit Otomasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
