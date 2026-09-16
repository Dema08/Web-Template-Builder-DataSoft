import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIERE — Agency Portfolio Products
 * Glass putih + kartu portofolio jasa studio.
 */
export default function Products19({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod19-badge', type: 'badge', props: { content: '✦ Portfolio 120+', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'prod19-heading', type: 'heading', props: { content: 'Layanan Studio Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod19-text', type: 'text', props: { content: 'Branding, web & kampanye — strategi dulu, piksel kemudian.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod19-cta', type: 'button', props: { label: 'Book a Call →', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'prod19-card-1', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.85)', borderRadius: '24px', shadow: 'lg', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod19-c1-image', type: 'image', props: { src: '', alt: 'Branding', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod19-c1-title', type: 'heading', props: { content: 'Brand Identity', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod19-c1-price', type: 'heading', props: { content: 'Mulai Rp 25jt', level: 'h4', fontSize: '16px', fontWeight: '800', color: '#4f46e5', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod19-c1-btn', type: 'button', props: { label: 'Lihat Paket →', href: '#paket', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'prod19-card-2', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.85)', borderRadius: '24px', shadow: 'lg', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod19-c2-image', type: 'image', props: { src: '', alt: 'Website', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod19-c2-title', type: 'heading', props: { content: 'Website Premium', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod19-c2-price', type: 'heading', props: { content: 'Mulai Rp 45jt', level: 'h4', fontSize: '16px', fontWeight: '800', color: '#4f46e5', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod19-c2-btn', type: 'button', props: { label: 'Lihat Paket →', href: '#paket', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'prod19-card-3', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '24px', shadow: 'lg', borderWidth: '0', borderColor: '#0f172a', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod19-c3-title', type: 'heading', props: { content: 'Retainer Studio', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod19-c3-price', type: 'heading', props: { content: 'Rp 18jt/bln', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#a5b4fc', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod19-c3-desc', type: 'text', props: { content: 'Desain unlimited, prioritas 24 jam.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod19-c3-btn', type: 'button', props: { label: 'Book a Call →', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#ffffff', color: '#0f172a' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto rounded-[28px] bg-white/80 backdrop-blur-xl border border-white shadow-xl px-8 py-12 flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
