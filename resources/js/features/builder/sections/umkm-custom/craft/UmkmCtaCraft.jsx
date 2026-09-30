import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * UmkmCtaCraft
 * Bespoke custom order & corporate souvenir CTA banner for Craft UMKM.
 * Fully supports right-inspector selection and property editing.
 */
export default function UmkmCtaCraft({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cta-cr-badge', type: 'badge', props: { text: 'PESANAN KHUSUS & SOUVENIR KORPORASI', variant: 'outline', background: 'rgba(194,65,12,0.15)', color: '#fb923c', borderColor: '#c2410c' } },
    { id: 'cta-cr-title', type: 'heading', props: { content: 'Ingin Merancang Busana Custom atau Hampers Eksklusif?', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffedd5', textAlign: 'center' } },
    { id: 'cta-cr-desc', type: 'paragraph', props: { content: 'Kami melayani pembuatan busana seragam tenun custom, gift set cinderamata instansi, dan pesanan motif batik khusus bernilai tinggi.', fontSize: '16px', color: '#fed7aa', textAlign: 'center' } },
    { id: 'cta-cr-btn1', type: 'button', props: { label: 'Konsultasi Custom Order via WhatsApp 💬', href: '#contact', variant: 'primary', size: 'large', radius: 'none', background: '#c2410c', color: '#ffffff', fontWeight: '700' } },
    { id: 'cta-cr-btn2', type: 'button', props: { label: 'Unduh Buku Portofolio (PDF)', href: '#catalog', variant: 'outline', size: 'large', radius: 'none', background: 'transparent', color: '#ffedd5', borderColor: '#fb923c' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'cta-cr-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'cta-cr-title');
  const descComps = layoutComponents.filter(c => c.id === 'cta-cr-desc');
  const btn1Comps = layoutComponents.filter(c => c.id === 'cta-cr-btn1');
  const btn2Comps = layoutComponents.filter(c => c.id === 'cta-cr-btn2');

  return (
    <section id="catalog" className="relative py-24 sm:py-32 bg-[#170e0a] overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-10 sm:p-16 bg-[#1f130c] border border-orange-900/60 shadow-2xl text-center space-y-8">
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

          <div className="pt-6 border-t border-orange-950/80 flex flex-wrap items-center justify-center gap-8 text-xs text-orange-200/70">
            <span>✓ Sertifikat Orisinalitas Kain</span>
            <span>✓ Kemasan Hardbox Eksklusif Ramah Lingkungan</span>
            <span>✓ Pengiriman Seluruh Indonesia & Internasional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
