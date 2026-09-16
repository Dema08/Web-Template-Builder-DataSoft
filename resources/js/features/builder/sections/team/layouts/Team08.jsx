import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Sakura — Centered Floral — Team
 * Pola premium: header editable penuh + kartu tim + ornamen non-klik.
 */
export default function Team08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'team8-badge', type: 'badge', props: { content: '✦ Tim 08', background: '#fce7f3', color: '#be185d' } },
    { id: 'team8-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team8-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team8-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    {
      id: 'team8-card-1',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team8-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team8-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team8-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#db2777', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team8-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#831843' } },
      ],
    },
    {
      id: 'team8-card-2',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team8-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team8-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team8-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#db2777', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team8-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#831843' } },
      ],
    },
    {
      id: 'team8-card-3',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team8-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team8-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team8-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#db2777', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team8-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#831843' } },
      ],
    },
    {
      id: 'team8-card-4',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team8-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team8-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team8-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#db2777', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team8-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#831843' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="flex items-center justify-center gap-2 my-1 select-none pointer-events-none"><div className="w-12 h-px bg-pink-300" /><span className="text-pink-400">✦</span><div className="w-12 h-px bg-pink-300" /></div>
      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(header.filter((c) => c.type === 'badge'), sectionId)}
        <div className="mt-4 w-full">{renderLayoutComponents(header.filter((c) => c.type === 'heading'), sectionId)}</div>
        <div className="max-w-2xl">{renderLayoutComponents(header.filter((c) => c.type === 'text'), sectionId)}</div>
        <div className="mt-1">{renderLayoutComponents(header.filter((c) => c.type === 'button'), sectionId)}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10 text-center">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
