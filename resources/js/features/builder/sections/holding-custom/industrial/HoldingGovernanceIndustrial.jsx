import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingGovernanceIndustrial
 * Section: Executive Industrial Council, Plant Engineering Directors & Governance
 */
export default function HoldingGovernanceIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'igov-badge', type: 'badge', props: { content: '👥 DEWAN DIREKSI & KOMITE REKAYASA TEKNIK', variant: 'primary', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'medium' } },
    { id: 'igov-heading', type: 'heading', props: { content: 'Kepemimpinan Eksekutif Sovereign Industrial Group', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' } },
    { id: 'igov-text', type: 'text', props: { content: 'Dipimpin oleh pakar metalurgi, insinyur perkapalan terkemuka, dan eksekutif manufaktur dengan pengalaman puluhan tahun mengelola fasilitas industri berat.', fontSize: '16px', color: '#94a3b8' } },
    {
      id: 'igov-card-1',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
      childrenComponents: [
        { id: 'igovc1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80', alt: 'Ir. Hendra Tanuwijaya', radius: 'xl' } },
        { id: 'igovc1-head', type: 'heading', props: { content: 'Ir. Hendra Tanuwijaya, M.Sc.', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'igovc1-badge', type: 'badge', props: { content: 'Presiden Direktur & Group CEO', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'igovc1-txt', type: 'text', props: { content: 'Doktor Metalurgi dari RWTH Aachen University dengan pengalaman 30 tahun merancang smelter ramah lingkungan.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'igovc1-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
      ],
    },
    {
      id: 'igov-card-2',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
      childrenComponents: [
        { id: 'igovc2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80', alt: 'Prof. Dr. Ratna Wulandari', radius: 'xl' } },
        { id: 'igovc2-head', type: 'heading', props: { content: 'Prof. Dr. Ratna Wulandari, B.Eng', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'igovc2-badge', type: 'badge', props: { content: 'Direktur Teknologi & Rekayasa Manufaktur', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'igovc2-txt', type: 'text', props: { content: 'Pelopor pengembangan sel surya fotovoltaik efisiensi tinggi dan ketua konsorsium energi bersih industri.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'igovc2-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
      ],
    },
    {
      id: 'igov-card-3',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
      childrenComponents: [
        { id: 'igovc3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80', alt: 'Gunawan Wicaksono', radius: 'xl' } },
        { id: 'igovc3-head', type: 'heading', props: { content: 'Gunawan Wicaksono, SE, MM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'igovc3-badge', type: 'badge', props: { content: 'Direktur Operasional & Supply Chain Holding', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'igovc3-txt', type: 'text', props: { content: 'Mengomandani pengadaan bahan baku kokas, asam sulfat, dan operasional logistik pelabuhan laut dalam grup.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'igovc3-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
      ],
    },
    {
      id: 'igov-card-4',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: '2xl', padding: '24px' },
      childrenComponents: [
        { id: 'igovc4-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=80', alt: 'Dewi Kartika', radius: 'xl' } },
        { id: 'igovc4-head', type: 'heading', props: { content: 'Dewi Kartika, SH, LL.M', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'igovc4-badge', type: 'badge', props: { content: 'Direktur Kepatuhan Hukum & K3 Lingkungan', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'small' } },
        { id: 'igovc4-txt', type: 'text', props: { content: 'Memastikan kepatuhan ketat seluruh pabrik terhadap baku mutu AMDAL, izin lingkungan, dan sertifikasi K3 internasional.', fontSize: '13px', color: '#94a3b8' } },
        { id: 'igovc4-btn', type: 'button', props: { label: 'Profil Eksekutif →', href: '#', variant: 'ghost', size: 'small', color: '#fbbf24' } },
      ],
    },
  ];

  const comps = components.length > 0 ? components : defaultComponents;
  const badges = comps.filter((c) => c.type === 'badge');
  const headings = comps.filter((c) => c.type === 'heading');
  const texts = comps.filter((c) => c.type === 'text');
  const cards = comps.filter((c) => c.type === 'card');

  return (
    <section className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badges.length > 0 && <div className="flex justify-center mb-4">{renderLayoutComponents(badges.slice(0, 1), sectionId)}</div>}
          {headings.length > 0 && <div className="mb-4">{renderLayoutComponents(headings.slice(0, 1), sectionId)}</div>}
          {texts.length > 0 && <div>{renderLayoutComponents(texts.slice(0, 1), sectionId)}</div>}
        </div>

        {/* Executive Council Cards */}
        {cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderLayoutComponents(cards, sectionId)}
          </div>
        )}
      </div>
    </section>
  );
}
