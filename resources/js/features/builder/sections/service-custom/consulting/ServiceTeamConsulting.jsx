import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceTeamConsulting
 * Senior partner profiles for elite consulting firm.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceTeamConsulting({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ctm-badge', type: 'badge', props: { content: '👥 MITRA & DIREKTUR SENIOR', background: 'rgba(184,150,62,0.15)', color: '#d4af6a', size: 'medium' } },
    { id: 'ctm-title', type: 'heading', props: { content: 'Dipimpin oleh Pakar dengan Rekam Jejak Terbukti', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', align: 'center' } },
    { id: 'ctm-desc', type: 'text', props: { content: 'Tim kepemimpinan kami terdiri dari mantan eksekutif C-suite, ex-McKinsey, ex-BCG, dan pakar industri dengan kedalaman pengetahuan sektor yang tak tertandingi.', fontSize: '16px', color: '#94a3b8', align: 'center' } },
    {
      id: 'tm-card-1',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '28px' },
      childrenComponents: [
        { id: 'tc1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80', alt: 'Budi Santoso', borderRadius: '16px', objectFit: 'cover', height: '180px' } },
        { id: 'tc1-name', type: 'heading', props: { content: 'Budi Santoso, MBA', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
        { id: 'tc1-role', type: 'badge', props: { content: 'Managing Partner & CEO', background: 'rgba(184,150,62,0.15)', color: '#d4af6a', size: 'small' } },
        { id: 'tc1-desc', type: 'text', props: { content: 'Ex-McKinsey & Company, 25 tahun memimpin proyek transformasi korporasi di 12 negara Asia-Pasifik dengan total nilai program USD 4.2 miliar.', fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'tc1-btn', type: 'button', props: { label: 'Profil Lengkap →', href: '#', variant: 'ghost', size: 'small', color: '#d4af6a' } },
      ],
    },
    {
      id: 'tm-card-2',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '28px' },
      childrenComponents: [
        { id: 'tc2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80', alt: 'Ratna Pertiwi', borderRadius: '16px', objectFit: 'cover', height: '180px' } },
        { id: 'tc2-name', type: 'heading', props: { content: 'Dr. Ratna Pertiwi, CFA', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
        { id: 'tc2-role', type: 'badge', props: { content: 'Partner – Financial Advisory', background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', size: 'small' } },
        { id: 'tc2-desc', type: 'text', props: { content: 'Doktor Keuangan dari London School of Economics, 20 tahun spesialis M&A dan capital market advisory untuk transaksi blue-chip senilai USD 1.8 miliar.', fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'tc2-btn', type: 'button', props: { label: 'Profil Lengkap →', href: '#', variant: 'ghost', size: 'small', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'tm-card-3',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '28px' },
      childrenComponents: [
        { id: 'tc3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80', alt: 'Arif Wibowo', borderRadius: '16px', objectFit: 'cover', height: '180px' } },
        { id: 'tc3-name', type: 'heading', props: { content: 'Arif Wibowo, M.Sc.', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
        { id: 'tc3-role', type: 'badge', props: { content: 'Partner – Digital & Technology', background: 'rgba(14,165,233,0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'tc3-desc', type: 'text', props: { content: 'Mantan CTO di 2 unicorn Indonesia, spesialis transformasi digital end-to-end, implementasi AI/ML di sektor perbankan, ritel, dan manufaktur.', fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'tc3-btn', type: 'button', props: { label: 'Profil Lengkap →', href: '#', variant: 'ghost', size: 'small', color: '#38bdf8' } },
      ],
    },
    {
      id: 'tm-card-4',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '28px' },
      childrenComponents: [
        { id: 'tc4-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80', alt: 'Sari Indah', borderRadius: '16px', objectFit: 'cover', height: '180px' } },
        { id: 'tc4-name', type: 'heading', props: { content: 'Sari Indah Lestari, MSOP', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
        { id: 'tc4-role', type: 'badge', props: { content: 'Partner – Operations & ESG', background: 'rgba(34,197,94,0.15)', color: '#4ade80', size: 'small' } },
        { id: 'tc4-desc', type: 'text', props: { content: 'Pakar Lean Six Sigma Master Black Belt dan perancang program ESG untuk 40+ perusahaan tbk di Indonesia, Malaysia, dan Vietnam.', fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'tc4-btn', type: 'button', props: { label: 'Profil Lengkap →', href: '#', variant: 'ghost', size: 'small', color: '#4ade80' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="team" className="py-24 px-4 sm:px-6 bg-[#080e1c] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
