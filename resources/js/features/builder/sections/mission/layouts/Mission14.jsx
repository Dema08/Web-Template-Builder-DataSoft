import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 14 — Maison Corporate Trust
 */
export default function Mission14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-14', type: 'badge', props: { content: '✓ Misi Pendidikan Indonesia', background: '#dbeafe', color: '#1e40af' } },
    { id: 'heading-14', type: 'heading', props: { content: 'Mencerdaskan kehidupan bangsa melalui keunggulan akademik', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-14', type: 'text', props: { content: 'Komitmen kami dalam menghasilkan lulusan profesional yang berakhlak mulia dan siap bersaing di kancah global.', fontSize: '17px', color: '#475569', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-daftar', type: 'button', props: { label: 'Pelajari Program →', href: '#programs', variant: 'primary', size: 'large', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    { id: 'img-14', type: 'image', props: { src: '', alt: 'Campus', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '20px' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const left = layoutComponents.filter(c => c.type !== 'image');
  const img = layoutComponents.filter(c => c.type === 'image');

  return (
    <section className="py-20 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          {renderLayoutComponents(left.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(left.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(left.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-2">{renderLayoutComponents(left.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-xl bg-white">
          {renderLayoutComponents(img, sectionId)}
        </div>
      </div>
    </section>
  );
}
