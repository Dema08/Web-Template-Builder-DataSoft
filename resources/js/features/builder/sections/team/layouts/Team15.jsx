import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Monocle — Editorial Magazine — Team
 * Pola premium: header editable penuh + kartu tim + ornamen non-klik.
 */
export default function Team15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'team15-badge', type: 'badge', props: { content: '✦ Tim 15', background: '#0f172a', color: '#ffffff' } },
    { id: 'team15-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team15-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team15-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'team15-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team15-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team15-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team15-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team15-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team15-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team15-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team15-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team15-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team15-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team15-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team15-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team15-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team15-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team15-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team15-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team15-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team15-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team15-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team15-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');
  return (
    <section className="py-20 px-6 bg-[#fafaf9]">
      <div className="flex items-center justify-between text-[11px] tracking-widest text-stone-500 border-b border-stone-300 pb-2 mb-6 select-none pointer-events-none"><span>KURASI</span><span>EDISI MINGGUAN</span></div>
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
