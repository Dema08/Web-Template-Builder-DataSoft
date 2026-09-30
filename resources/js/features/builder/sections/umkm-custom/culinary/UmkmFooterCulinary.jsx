import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmFooterCulinary
 * Warm ambient footer with opening hours, social links, and delivery partners.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmFooterCulinary({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ftr-cul-brand', type: 'heading', props: { content: 'KOPI KARSA', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#fef3c7', letterSpacing: '0.1em' } },
    { id: 'ftr-cul-tagline', type: 'paragraph', props: { content: 'Artisan Coffee Roastery & Homemade Kitchen. Menghargai setiap proses dari biji kopi hingga cangkir Anda.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'ftr-cul-copy', type: 'paragraph', props: { content: '© 2026 Kopi Karsa Nusantara. Bangga Buatan Indonesia.', fontSize: '12px', color: '#a8a29e' } },
    { id: 'ftr-cul-lnk1', type: 'button', props: { label: 'Signature Coffee', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'ftr-cul-lnk2', type: 'button', props: { label: 'Artisan Bakery', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'ftr-cul-lnk3', type: 'button', props: { label: 'Biji Kopi Roastery', href: '#order', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'ftr-cul-lnk4', type: 'button', props: { label: 'Kemitraan & Wholesale', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.id === 'ftr-cul-brand');
  const taglineComps = layoutComponents.filter(c => c.id === 'ftr-cul-tagline');
  const copyComps = layoutComponents.filter(c => c.id === 'ftr-cul-copy');
  const menuLinks = layoutComponents.filter(c => ['ftr-cul-lnk1', 'ftr-cul-lnk2', 'ftr-cul-lnk3', 'ftr-cul-lnk4'].includes(c.id));

  return (
    <footer className="relative bg-[#0c0604] border-t border-amber-950/80 text-white overflow-hidden pt-16 pb-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-amber-900/30">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white text-base">
                ☕
              </div>
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="max-w-sm">
              {renderLayoutComponents(taglineComps, sectionId)}
            </div>
            <div className="flex items-center gap-3 pt-2">
              {['Instagram: @kopikarsa.id', 'TikTok: @kopikarsa', 'GoFood', 'GrabFood'].map((soc, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/60 border border-amber-800/40 text-amber-200 hover:text-white transition-all cursor-pointer"
                >
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Pilihan Produk</div>
            <div className="flex flex-col items-start gap-1">
              {renderLayoutComponents(menuLinks, sectionId)}
            </div>
          </div>

          {/* Contact / Kedai */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Kedai & Roastery</div>
            <p className="text-sm text-stone-300 leading-relaxed">
              Jl. Prawirotaman No. 42, Yogyakarta<br />
              D.I. Yogyakarta 55153
            </p>
            <p className="text-sm text-amber-300 font-medium pt-1">
              WhatsApp: 0812-3456-7890 • Halo@kopikarsa.id
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {renderLayoutComponents(copyComps, sectionId)}
          <div className="text-xs text-stone-500">
            Halal Certified • 100% Single Origin Indonesia
          </div>
        </div>
      </div>
    </footer>
  );
}
