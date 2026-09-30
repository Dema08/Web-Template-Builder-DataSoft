import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduTrainersExecutive
 * Faculty profiles of master facilitators & former C-level leaders for Executive Institute.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduTrainersExecutive({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'trn-badge', type: 'badge', props: { text: 'DEWAN MASTER FACILITATOR', variant: 'outline', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', borderColor: '#0ea5e9' } },
    { id: 'trn-title', type: 'heading', props: { content: 'Dibimbing Langsung oleh Praktisi & Mantan Pemimpin Korporasi', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'trn-desc', type: 'paragraph', props: { content: 'Bukan sekadar akademisi, fasilitator kami adalah mantan CEO, Direktur SDM, dan konsultan strategis berkaliber internasional.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Trainer 1
    { id: 'tr1-name', type: 'heading', props: { content: 'Dr. Ir. Aryo Soebroto, MBA', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'tr1-role', type: 'paragraph', props: { content: 'Mantan Direktur Utama BUMN Energi • Lead Strategic Leadership', fontSize: '12px', color: '#38bdf8', fontWeight: '600' } },
    { id: 'tr1-bio', type: 'paragraph', props: { content: 'Pengalaman 28 tahun memimpin restrukturisasi korporasi dan transformasi digital skala masif di kawasan Asia.', fontSize: '13px', color: '#94a3b8' } },
    // Trainer 2
    { id: 'tr2-name', type: 'heading', props: { content: 'Elena Hartanto, M.Sc., PMP®', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'tr2-role', type: 'paragraph', props: { content: 'Senior Vice President of Transformation • Lead Agile & PMP', fontSize: '12px', color: '#38bdf8', fontWeight: '600' } },
    { id: 'tr2-bio', type: 'paragraph', props: { content: 'Telah membimbing lebih dari 3.000 project manager lulus ujian PMP® dan mengelola PMO bernilai miliaran dolar.', fontSize: '13px', color: '#94a3b8' } },
    // Trainer 3
    { id: 'tr3-name', type: 'heading', props: { content: 'Bambang Kusuma, Ph.D.', level: 'h3', fontSize: '19px', fontWeight: '700', color: '#ffffff' } },
    { id: 'tr3-role', type: 'paragraph', props: { content: 'Former Chief People Officer • Lead Culture & Talent', fontSize: '12px', color: '#38bdf8', fontWeight: '600' } },
    { id: 'tr3-bio', type: 'paragraph', props: { content: 'Pakar asesmen suksesi eksekutif, desain organisasi masa depan, dan perancangan sistem remunerasi berbasis performa.', fontSize: '13px', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'trn-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'trn-title');
  const descComps = layoutComponents.filter(c => c.id === 'trn-desc');

  const trainers = [
    {
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      name: layoutComponents.filter(c => c.id === 'tr1-name'),
      role: layoutComponents.filter(c => c.id === 'tr1-role'),
      bio: layoutComponents.filter(c => c.id === 'tr1-bio'),
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      name: layoutComponents.filter(c => c.id === 'tr2-name'),
      role: layoutComponents.filter(c => c.id === 'tr2-role'),
      bio: layoutComponents.filter(c => c.id === 'tr2-bio'),
    },
    {
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      name: layoutComponents.filter(c => c.id === 'tr3-name'),
      role: layoutComponents.filter(c => c.id === 'tr3-role'),
      bio: layoutComponents.filter(c => c.id === 'tr3-bio'),
    }
  ];

  return (
    <section id="trainers" className="relative py-24 sm:py-32 bg-[#090e18] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* 3 Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0f1726] border border-cyan-950 overflow-hidden shadow-xl hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="h-64 w-full overflow-hidden bg-black/40">
                <img
                  src={t.img}
                  alt="Trainer portrait"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-2">
                {renderLayoutComponents(t.name, sectionId)}
                {renderLayoutComponents(t.role, sectionId)}
                <div className="pt-2">{renderLayoutComponents(t.bio, sectionId)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
