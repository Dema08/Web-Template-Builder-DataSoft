import FooterSupportBadge from '@builder/sections/footer/FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmFooterWellness
 * Forest emerald footer with eco badges, botanical links, and laboratory address.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmFooterWellness({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ftr-wl-brand', type: 'heading', props: { content: 'SEKAR ARUM BOTANICALS', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ecfdf5', letterSpacing: '0.08em' } },
    { id: 'ftr-wl-tagline', type: 'paragraph', props: { content: 'Perawatan kulit alami berbasis kearifan botani herbal Indonesia. Menghidupkan kembali rahasia kecantikan tradisional yang teruji secara sains.', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'ftr-wl-copy', type: 'paragraph', props: { content: '© 2026 PT Sekar Arum Nusantara. Hak cipta dilindungi.', fontSize: '12px', color: '#6ee7b7' } },
    { id: 'ftr-wl-lnk1', type: 'button', props: { label: 'Face Oils & Serums', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'ftr-wl-lnk2', type: 'button', props: { label: 'Body Care & Soaps', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'ftr-wl-lnk3', type: 'button', props: { label: 'Aromatherapy Mists', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
    { id: 'ftr-wl-lnk4', type: 'button', props: { label: 'Herbal Clay Masks', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#a7f3d0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.id === 'ftr-wl-brand');
  const taglineComps = layoutComponents.filter(c => c.id === 'ftr-wl-tagline');
  const copyComps = layoutComponents.filter(c => c.id === 'ftr-wl-copy');
  const wellnessLinks = layoutComponents.filter(c => ['ftr-wl-lnk1', 'ftr-wl-lnk2', 'ftr-wl-lnk3', 'ftr-wl-lnk4'].includes(c.id));

  return (
    <footer className="relative bg-[#020d08] border-t border-emerald-950 text-white overflow-hidden pt-16 pb-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-950">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 text-sm">
                🌱
              </div>
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="max-w-sm">
              {renderLayoutComponents(taglineComps, sectionId)}
            </div>
            <div className="flex items-center gap-3 pt-2">
              {['Instagram: @sekararumbotanicals', 'Shopee Mall', 'TikTok Shop'].map((soc, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-950/80 border border-emerald-800/40 text-emerald-200 hover:text-white transition-all cursor-pointer"
                >
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Rangkaian Produk</div>
            <div className="flex flex-col items-start gap-1">
              {renderLayoutComponents(wellnessLinks, sectionId)}
            </div>
          </div>

          {/* Herbal Lab */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Studio & Laboratorium Alami</div>
            <p className="text-sm text-stone-300 leading-relaxed">
              Herbal Sanctuary Merapi, Jl. Kaliurang Km 14<br />
              Sleman, D.I. Yogyakarta 55581
            </p>
            <p className="text-sm text-emerald-300 font-medium pt-1">
              Customer Care: 0812-8899-0011 • halo@sekararum.id
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {renderLayoutComponents(copyComps, sectionId)}
          <div className="text-xs text-emerald-400/70">
            BPOM Certified • Halal MUI • 100% Eco-Harvested in Indonesia
          </div>
        </div>
        <FooterSupportBadge className="text-emerald-400/70" />
      </div>
    </footer>
  );
}

