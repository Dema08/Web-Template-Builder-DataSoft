import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceServicesConsulting
 * Service offerings grid for executive consulting firm.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceServicesConsulting({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'csvc-badge', type: 'badge', props: { content: '🎯 AREA KEAHLIAN & LAYANAN UTAMA', background: 'rgba(184,150,62,0.15)', color: '#d4af6a', size: 'medium' } },
    { id: 'csvc-title', type: 'heading', props: { content: 'Solusi Konsultasi Komprehensif untuk Setiap Tantangan Bisnis', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', align: 'center' } },
    { id: 'csvc-desc', type: 'text', props: { content: 'Tim konsultan senior kami mengintegrasikan analisis mendalam, metodologi global, dan pemahaman lokal untuk menghasilkan rekomendasi yang dapat dieksekusi.', fontSize: '16px', color: '#94a3b8', align: 'center' } },
    {
      id: 'svc-card-1',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '32px' },
      childrenComponents: [
        { id: 'sc1-badge', type: 'badge', props: { content: 'Strategi & Pertumbuhan', background: 'rgba(184,150,62,0.15)', color: '#d4af6a', size: 'small' } },
        { id: 'sc1-title', type: 'heading', props: { content: 'Corporate Strategy & Market Expansion', level: 'h3', fontSize: '21px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc1-desc', type: 'text', props: { content: 'Formulasi strategi pertumbuhan jangka panjang, analisis pasar, competitive intelligence, dan roadmap ekspansi regional untuk perusahaan ambisius.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'sc1-btn', type: 'button', props: { label: 'Pelajari Lebih Lanjut →', href: '#contact', variant: 'ghost', size: 'small', color: '#d4af6a' } },
      ],
    },
    {
      id: 'svc-card-2',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '32px' },
      childrenComponents: [
        { id: 'sc2-badge', type: 'badge', props: { content: 'Transformasi Organisasi', background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', size: 'small' } },
        { id: 'sc2-title', type: 'heading', props: { content: 'Organizational Change & Restructuring', level: 'h3', fontSize: '21px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc2-desc', type: 'text', props: { content: 'Restrukturisasi organisasi, desain ulang proses bisnis, manajemen perubahan, dan program peningkatan kapabilitas SDM untuk efisiensi maksimal.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'sc2-btn', type: 'button', props: { label: 'Pelajari Lebih Lanjut →', href: '#contact', variant: 'ghost', size: 'small', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'svc-card-3',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '32px' },
      childrenComponents: [
        { id: 'sc3-badge', type: 'badge', props: { content: 'Keuangan & M&A', background: 'rgba(34,197,94,0.12)', color: '#4ade80', size: 'small' } },
        { id: 'sc3-title', type: 'heading', props: { content: 'Financial Advisory & M&A Due Diligence', level: 'h3', fontSize: '21px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc3-desc', type: 'text', props: { content: 'Analisis kelayakan investasi, valuasi perusahaan target, due diligence komprehensif, dan advisory M&A untuk transaksi lintas batas.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'sc3-btn', type: 'button', props: { label: 'Pelajari Lebih Lanjut →', href: '#contact', variant: 'ghost', size: 'small', color: '#4ade80' } },
      ],
    },
    {
      id: 'svc-card-4',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '32px' },
      childrenComponents: [
        { id: 'sc4-badge', type: 'badge', props: { content: 'Teknologi & Digitalisasi', background: 'rgba(14,165,233,0.12)', color: '#38bdf8', size: 'small' } },
        { id: 'sc4-title', type: 'heading', props: { content: 'Digital Transformation & IT Strategy', level: 'h3', fontSize: '21px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc4-desc', type: 'text', props: { content: 'Roadmap digitalisasi perusahaan, seleksi dan implementasi ERP/CRM, analitik data bisnis, dan strategi adopsi AI untuk keunggulan kompetitif.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'sc4-btn', type: 'button', props: { label: 'Pelajari Lebih Lanjut →', href: '#contact', variant: 'ghost', size: 'small', color: '#38bdf8' } },
      ],
    },
    {
      id: 'svc-card-5',
      type: 'card',
      props: { background: '#111827', borderRadius: '24px', borderWidth: '1px', borderColor: '#1f2937', padding: '32px' },
      childrenComponents: [
        { id: 'sc5-badge', type: 'badge', props: { content: 'Operasi & Rantai Pasok', background: 'rgba(251,146,60,0.12)', color: '#fb923c', size: 'small' } },
        { id: 'sc5-title', type: 'heading', props: { content: 'Operations Excellence & Supply Chain', level: 'h3', fontSize: '21px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc5-desc', type: 'text', props: { content: 'Optimasi proses operasional dengan metode Lean Six Sigma, redesain rantai pasok global, perbaikan logistik inbound/outbound, dan pengurangan biaya operasional.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'sc5-btn', type: 'button', props: { label: 'Pelajari Lebih Lanjut →', href: '#contact', variant: 'ghost', size: 'small', color: '#fb923c' } },
      ],
    },
    {
      id: 'svc-card-6',
      type: 'card',
      props: { background: 'linear-gradient(135deg, rgba(184,150,62,0.15), rgba(13,22,39,0.95))', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(184,150,62,0.35)', padding: '32px' },
      childrenComponents: [
        { id: 'sc6-badge', type: 'badge', props: { content: 'ESG & Keberlanjutan', background: 'rgba(34,197,94,0.15)', color: '#4ade80', size: 'small' } },
        { id: 'sc6-title', type: 'heading', props: { content: 'ESG Strategy & Sustainability Roadmap', level: 'h3', fontSize: '21px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc6-desc', type: 'text', props: { content: 'Pengembangan strategi ESG terintegrasi, pelaporan keberlanjutan (GRI/TCFD), program dekarbonisasi operasional, dan persiapan IPO berbasis prinsip sustainability.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
        { id: 'sc6-btn', type: 'button', props: { label: 'Konsultasikan Strategi ESG →', href: '#contact', variant: 'ghost', size: 'small', color: '#d4af6a' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#080e1c] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
