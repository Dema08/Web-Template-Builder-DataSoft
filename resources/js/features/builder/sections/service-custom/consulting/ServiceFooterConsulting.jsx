import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceFooterConsulting
 * Prestige dark footer for elite consulting firm.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceFooterConsulting({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cft-logo', type: 'heading', props: { content: 'ADVANTA PARTNERS', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.06em' } },
    { id: 'cft-tagline', type: 'text', props: { content: 'Management Consulting & Strategic Advisory', fontSize: '13px', color: '#d4af6a' } },
    { id: 'cft-addr', type: 'text', props: { content: 'Pacific Place Lt. 18, SCBD, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190 · Telp: +62 21 5050 8888 · consult@advantapartners.com', fontSize: '13px', color: '#64748b' } },
    {
      id: 'cft-col-1',
      type: 'card',
      props: { background: 'transparent' },
      childrenComponents: [
        { id: 'cfc1-h', type: 'heading', props: { content: 'Layanan Konsultasi', level: 'h5', fontSize: '14px', color: '#ffffff', fontWeight: '700' } },
        { id: 'cfc1-b1', type: 'button', props: { label: 'Strategy & Growth', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
        { id: 'cfc1-b2', type: 'button', props: { label: 'Financial Advisory & M&A', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
        { id: 'cfc1-b3', type: 'button', props: { label: 'Digital Transformation', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
        { id: 'cfc1-b4', type: 'button', props: { label: 'Operations Excellence', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
        { id: 'cfc1-b5', type: 'button', props: { label: 'ESG & Sustainability', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
      ],
    },
    {
      id: 'cft-col-2',
      type: 'card',
      props: { background: 'transparent' },
      childrenComponents: [
        { id: 'cfc2-h', type: 'heading', props: { content: 'Perusahaan', level: 'h5', fontSize: '14px', color: '#ffffff', fontWeight: '700' } },
        { id: 'cfc2-b1', type: 'button', props: { label: 'Tentang Advanta', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
        { id: 'cfc2-b2', type: 'button', props: { label: 'Tim Mitra Senior', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
        { id: 'cfc2-b3', type: 'button', props: { label: 'Studi Kasus Klien', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
        { id: 'cfc2-b4', type: 'button', props: { label: 'Insight & Thought Leadership', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
        { id: 'cfc2-b5', type: 'button', props: { label: 'Karir di Advanta', href: '#', variant: 'ghost', size: 'small', color: '#64748b' } },
      ],
    },
    { id: 'cft-copy', type: 'text', props: { content: '© 2026 Advanta Partners. Management Consulting & Strategic Advisory. All rights reserved.', fontSize: '12px', color: '#475569', align: 'center' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => ['heading', 'text', 'image'].includes(c.type) && !String(c.id || '').startsWith('cft-copy'));
  const colCards = layoutComponents.filter(c => c.type === 'card');
  const copyComps = layoutComponents.filter(c => c.id === 'cft-copy');

  return (
    <footer className="bg-[#080e1c] border-t border-slate-800 px-4 sm:px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand block */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-[#080e1c] font-black text-base select-none">A</div>
              {renderLayoutComponents(logoComps.filter(c => c.type === 'heading'), sectionId)}
            </div>
            {renderLayoutComponents(logoComps.filter(c => c.type === 'text'), sectionId)}
          </div>

          {/* Link columns */}
          {renderLayoutComponents(colCards, sectionId)}
        </div>

        <div className="border-t border-slate-800 pt-6">
          {renderLayoutComponents(copyComps, sectionId)}
        </div>
      </div>
    </footer>
  );
}
