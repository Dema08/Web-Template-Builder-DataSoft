import FooterSupportBadge from '@builder/sections/footer/FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmFooterCraft
 * Terracotta artisan studio footer with heritage links and workshop address.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmFooterCraft({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ftr-cr-brand', type: 'heading', props: { content: 'PUSAKA HERITAGE', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#ffedd5', letterSpacing: '0.12em' } },
    { id: 'ftr-cr-tagline', type: 'paragraph', props: { content: 'Rumah Kriya & Wastra Nusantara. Melestarikan tradisi tenun ikat dan batik tulis pewarna alam untuk generasi masa depan.', fontSize: '13px', color: '#fed7aa' } },
    { id: 'ftr-cr-copy', type: 'paragraph', props: { content: '© 2026 Pusaka Heritage Studio. Dilindungi Hak Cipta & Kebudayaan Nasional.', fontSize: '12px', color: '#a8a29e' } },
    { id: 'ftr-cr-lnk1', type: 'button', props: { label: 'Outer & Busana Tenun', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'ftr-cr-lnk2', type: 'button', props: { label: 'Kain Batik Tulis Sutra', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'ftr-cr-lnk3', type: 'button', props: { label: 'Scarf Pewarna Alam', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
    { id: 'ftr-cr-lnk4', type: 'button', props: { label: 'Kriya Rotan & Kulit', href: '#products', variant: 'ghost', size: 'small', background: 'transparent', color: '#fed7aa' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.id === 'ftr-cr-brand');
  const taglineComps = layoutComponents.filter(c => c.id === 'ftr-cr-tagline');
  const copyComps = layoutComponents.filter(c => c.id === 'ftr-cr-copy');
  const craftLinks = layoutComponents.filter(c => ['ftr-cr-lnk1', 'ftr-cr-lnk2', 'ftr-cr-lnk3', 'ftr-cr-lnk4'].includes(c.id));

  return (
    <footer className="relative bg-[#0c0604] border-t border-orange-950 text-white overflow-hidden pt-16 pb-12">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-orange-950">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 border border-orange-500 bg-orange-950 flex items-center justify-center font-serif text-orange-400 text-xs font-bold">
                P
              </div>
              {renderLayoutComponents(brandComps, sectionId)}
            </div>
            <div className="max-w-sm">
              {renderLayoutComponents(taglineComps, sectionId)}
            </div>
            <div className="flex items-center gap-3 pt-2">
              {['Instagram: @pusakaheritage', 'Shopee Mall', 'Tokopedia Official'].map((soc, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-[#1a0f08] border border-orange-900/40 text-orange-200 hover:text-white transition-all cursor-pointer"
                >
                  {soc}
                </span>
              ))}
            </div>
          </div>

          {/* Catalog Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-400">Koleksi Wastra</div>
            <div className="flex flex-col items-start gap-1">
              {renderLayoutComponents(craftLinks, sectionId)}
            </div>
          </div>

          {/* Galeri Studio */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-400">Galeri & Rumah Produksi</div>
            <p className="text-sm text-stone-300 leading-relaxed font-serif">
              Omah Wastra Pusaka, Tirtonirmolo<br />
              Kasihan, Bantul, D.I. Yogyakarta 55184
            </p>
            <p className="text-sm text-orange-300 font-medium pt-1">
              WhatsApp: 0813-9876-5432 • salam@pusakaheritage.id
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {renderLayoutComponents(copyComps, sectionId)}
          <div className="text-xs text-stone-500">
            Handcrafted with Pride in Indonesia • Eco-Friendly Textiles
          </div>
        </div>
        <FooterSupportBadge className="text-stone-500" />
      </div>
    </footer>
  );
}
