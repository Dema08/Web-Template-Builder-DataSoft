import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingLeadershipConglomerate
 * Board of Commissioners and Executive Directors showcase for holding groups.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingLeadershipConglomerate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'lead-badge', type: 'badge', props: { content: '👥 DEWAN PIMPINAN & PENGAWAS', variant: 'primary', background: '#fffbeb', color: '#b45309', size: 'medium' } },
    { id: 'lead-title', type: 'heading', props: { content: 'Dewan Komisaris & Direksi Eksekutif Grup', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'lead-desc', type: 'text', props: { content: 'Dipimpin oleh jajaran eksekutif berpengalaman puluhan tahun dalam manajemen konglomerasi, pasar modal, dan industri strategis nasional.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'leader-card-1',
      type: 'card',
      props: { variant: 'team', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ld1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80', alt: 'Dr. Ir. Hendra Suryadharma', borderRadius: '16px', height: '220px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'ld1-badge', type: 'badge', props: { content: 'Presiden Komisaris', variant: 'primary', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'ld1-name', type: 'heading', props: { content: 'Dr. Ir. Hendra Suryadharma', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 4px 0' } },
        { id: 'ld1-bio', type: 'text', props: { content: 'Mantan Menteri BUMN & praktisi industri energi dengan pengalaman kepemimpinan 35+ tahun.', fontSize: '12px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'leader-card-2',
      type: 'card',
      props: { variant: 'team', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ld2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80', alt: 'Maya S. Wiranata, MBA', borderRadius: '16px', height: '220px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'ld2-badge', type: 'badge', props: { content: 'Presiden Direktur (Group CEO)', variant: 'primary', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'ld2-name', type: 'heading', props: { content: 'Maya S. Wiranata, MBA', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 4px 0' } },
        { id: 'ld2-bio', type: 'text', props: { content: 'Alumni Harvard Business School, memimpin ekspansi dan transformasi digital portofolio grup sejak 2018.', fontSize: '12px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'leader-card-3',
      type: 'card',
      props: { variant: 'team', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ld3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80', alt: 'Bambang Pratama, CFA, CPA', borderRadius: '16px', height: '220px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'ld3-badge', type: 'badge', props: { content: 'Direktur Keuangan (Group CFO)', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'ld3-name', type: 'heading', props: { content: 'Bambang Pratama, CFA', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 4px 0' } },
        { id: 'ld3-bio', type: 'text', props: { content: 'Spesialis perbankan investasi global dan M&A dengan rekam jejak restrukturisasi aset $5 Miliar+.', fontSize: '12px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'leader-card-4',
      type: 'card',
      props: { variant: 'team', background: '#091b33', borderRadius: '24px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ld4-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80', alt: 'Prof. Dr. Ratna Dewanti', borderRadius: '16px', height: '220px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'ld4-badge', type: 'badge', props: { content: 'Komisaris Independen & Ketua Komite Audit', variant: 'primary', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'ld4-name', type: 'heading', props: { content: 'Prof. Dr. Ratna Dewanti', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 4px 0' } },
        { id: 'ld4-bio', type: 'text', props: { content: 'Guru Besar Tata Kelola Perusahaan dan konsultan independen pengawasan audit pasar modal OJK.', fontSize: '12px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 bg-[#051325] text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
