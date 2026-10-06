import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceFooterAgency
 * Modern neon-dark footer with agency links, social handles, and newsletter input.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceFooterAgency({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ftr-ag-brand', type: 'heading', props: { content: 'NEXUS.STUDIO', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'ftr-ag-tagline', type: 'paragraph', props: { content: 'Boutique Creative & Digital Innovation Agency yang mendefinisikan standar visual dan pengalaman masa depan.', fontSize: '14px', color: '#94a3b8' } },
    { id: 'ftr-ag-copy', type: 'paragraph', props: { content: '© 2026 Nexus Studio Inc. Hak cipta dilindungi. Designed for market leaders.', fontSize: '13px', color: '#64748b' } },
    { id: 'ftr-ag-lnk1', type: 'button', props: { label: 'Brand Identity', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-ag-lnk2', type: 'button', props: { label: 'UI/UX Design', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-ag-lnk3', type: 'button', props: { label: 'Web & Mobile Dev', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'ftr-ag-lnk4', type: 'button', props: { label: 'Digital Marketing', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.id === 'ftr-ag-brand');
  const taglineComps = layoutComponents.filter(c => c.id === 'ftr-ag-tagline');
  const copyComps = layoutComponents.filter(c => c.id === 'ftr-ag-copy');
  const serviceLinks = layoutComponents.filter(c => ['ftr-ag-lnk1', 'ftr-ag-lnk2', 'ftr-ag-lnk3', 'ftr-ag-lnk4'].includes(c.id));

  return (
    <footer className="relative bg-[#05020c] border-t border-purple-900/30 text-white overflow-hidden pt-16 pb-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center font-black text-white text-sm">
                N
              </div>
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="max-w-sm">
              {renderLayoutComponents(taglineComps, sectionId)}
            </div>
            {/* Social Pill */}
            <div className="flex items-center gap-3 pt-2">
              {['Instagram', 'Dribbble', 'LinkedIn', 'Behance'].map((soc, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all cursor-pointer"
                >
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-pink-400">Layanan Kreatif</div>
            <div className="flex flex-col items-start gap-1">
              {renderLayoutComponents(serviceLinks, sectionId)}
            </div>
          </div>

          {/* Office / Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-violet-400">Studio & Kontak</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Senopati Creative Hub, Lt. 4<br />
              Jakarta Selatan, DKI Jakarta 12190
            </p>
            <p className="text-sm text-slate-300 font-medium pt-1">
              hello@nexusstudio.id • +62 21 555-0988
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {renderLayoutComponents(copyComps, sectionId)}
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
