import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * Aether — Ultra Premium Finale — Team
 * Pola premium: header editable penuh + kartu tim + ornamen non-klik.
 */
export default function Team20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'team20-badge', type: 'badge', props: { content: '✦ Tim 20', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'team20-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team20-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team20-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    {
      id: 'team20-card-1',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team20-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team20-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team20-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#6366f1', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team20-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team20-card-2',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team20-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team20-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team20-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#6366f1', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team20-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team20-card-3',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team20-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team20-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team20-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#6366f1', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team20-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team20-card-4',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team20-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team20-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team20-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#6366f1', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team20-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const header = layoutComponents.filter((c) => c.type !== 'card');
  const cards = layoutComponents.filter((c) => c.type === 'card');
  return (
    <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/25 to-transparent blur-3xl animate-pulse" />
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
