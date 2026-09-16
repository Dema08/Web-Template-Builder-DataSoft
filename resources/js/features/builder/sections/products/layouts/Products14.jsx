import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MAISON — Corporate Trust Products
 * Korporat biru + kartu formal ber-border.
 */
export default function Products14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prod14-badge', type: 'badge', props: { content: '◈ ISO 9001 Certified', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'prod14-heading', type: 'heading', props: { content: 'Solusi Korporat Terpercaya', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod14-text', type: 'text', props: { content: 'Dipercaya 500+ perusahaan & instansi.', fontSize: '15px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod14-cta', type: 'button', props: { label: 'Minta Penawaran →', href: '#quote', variant: 'primary', size: 'medium', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    {
      id: 'prod14-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '12px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod14-c1-image', type: 'image', props: { src: '', alt: 'ERP Suite', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px 12px 0 0' } },
        { id: 'prod14-c1-title', type: 'heading', props: { content: 'ERP Suite', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod14-c1-price', type: 'heading', props: { content: 'Hubungi Sales', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1d4ed8', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod14-c1-btn', type: 'button', props: { label: 'Detail →', href: '#detail', variant: 'ghost', size: 'small', background: 'transparent', color: '#1e40af' } },
      ],
    },
    {
      id: 'prod14-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '12px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod14-c2-image', type: 'image', props: { src: '', alt: 'HRIS Pro', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px 12px 0 0' } },
        { id: 'prod14-c2-title', type: 'heading', props: { content: 'HRIS Pro', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod14-c2-price', type: 'heading', props: { content: 'Hubungi Sales', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1d4ed8', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod14-c2-btn', type: 'button', props: { label: 'Detail →', href: '#detail', variant: 'ghost', size: 'small', background: 'transparent', color: '#1e40af' } },
      ],
    },
    {
      id: 'prod14-card-3', type: 'card',
      props: { variant: 'product', background: '#1e3a8a', borderRadius: '12px', shadow: 'md', borderWidth: '0', borderColor: '#1e3a8a', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod14-c3-title', type: 'heading', props: { content: 'Konsultasi Gratis', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod14-c3-desc', type: 'text', props: { content: 'Audit kebutuhan digital perusahaan Anda.', fontSize: '13px', color: '#bfdbfe', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod14-c3-btn', type: 'button', props: { label: 'Jadwalkan →', href: '#jadwal', variant: 'primary', size: 'small', radius: 'md', background: '#ffffff', color: '#1e3a8a' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-white border-t-4 border-blue-800">
      <div className="max-w-6xl mx-auto">
        {renderLayoutComponents(header.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-4 max-w-2xl">{renderLayoutComponents(header.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-xl">{renderLayoutComponents(header.filter(c => c.type === 'text'), sectionId)}</div>
        {renderLayoutComponents(header.filter(c => c.type === 'button'), sectionId)}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
