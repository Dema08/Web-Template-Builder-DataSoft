import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmCtaWellness
 * Free skin consultation & WhatsApp ordering banner for Botanical Wellness UMKM.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmCtaWellness({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cta-wl-badge', type: 'badge', props: { text: 'KONSULTASI KULIT BEBAS BIAYA', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#34d399', borderColor: '#10b981' } },
    { id: 'cta-wl-title', type: 'heading', props: { content: 'Bingung Memilih Produk yang Tepat untuk Kondisi Kulit Anda?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ecfdf5', textAlign: 'center' } },
    { id: 'cta-wl-desc', type: 'paragraph', props: { content: 'Konsultasikan keluhan kulit Anda secara personal dengan Beauty & Herbalist Advisor kami via WhatsApp. Dapatkan rekomendasi produk sesuai jenis kulit dan panduan pemakaian rutin.', fontSize: '16px', color: '#a7f3d0', textAlign: 'center' } },
    { id: 'cta-wl-btn1', type: 'button', props: { label: 'Konsultasi via WhatsApp (Gratis) 💬', href: '#consultation', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #10b981, #059669)', color: '#ffffff', fontWeight: '700' } },
    { id: 'cta-wl-btn2', type: 'button', props: { label: 'Belanja di Shopee / Tokopedia', href: '#products', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(255,255,255,0.05)', color: '#ecfdf5', borderColor: '#34d399' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'cta-wl-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'cta-wl-title');
  const descComps = layoutComponents.filter(c => c.id === 'cta-wl-desc');
  const btn1Comps = layoutComponents.filter(c => c.id === 'cta-wl-btn1');
  const btn2Comps = layoutComponents.filter(c => c.id === 'cta-wl-btn2');

  return (
    <section id="consultation" className="relative py-24 sm:py-32 bg-[#061810] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0b2b1e] to-[#061911] border border-emerald-600/30 shadow-2xl text-center space-y-8 overflow-hidden">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {renderLayoutComponents(titleComps, sectionId)}
            {renderLayoutComponents(descComps, sectionId)}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {renderLayoutComponents(btn1Comps, sectionId)}
            {renderLayoutComponents(btn2Comps, sectionId)}
          </div>

          <div className="pt-6 border-t border-emerald-950 flex flex-wrap items-center justify-center gap-8 text-xs text-emerald-300">
            <span>🌿 Garansi 100% Produk Original</span>
            <span>📦 Gratis Ongkir ke Seluruh Indonesia</span>
            <span>🛡️ Kemasan Bubble Wrap Biodegradable Aman</span>
          </div>
        </div>
      </div>
    </section>
  );
}
