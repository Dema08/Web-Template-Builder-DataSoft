import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingSafetyIndustrial
 * Section: Operational Safety, ISO Certifications, Zero-Harm Index & Quality Assurance
 */
export default function HoldingSafetyIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'isaf-badge', type: 'badge', props: { content: '🛡️ OCCUPATIONAL HEALTH, SAFETY & QUALITY (K3)', variant: 'primary', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', size: 'medium' } },
    { id: 'isaf-heading', type: 'heading', props: { content: 'Standar Keselamatan Kerja K3 Kelas Dunia & Zero-Harm', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' } },
    { id: 'isaf-text', type: 'text', props: { content: 'Bagi Sovereign Industrial Group, keselamatan setiap karyawan dan pelestarian ekosistem lingkungan sekitar pabrik adalah fondasi mutlak dari kelangsungan bisnis jangka panjang.', fontSize: '16px', color: '#94a3b8' } },
    { id: 'isaf-btn', type: 'button', props: { label: 'Unduh Manual Kebijakan K3 & Lingkungan (PDF) →', href: '#', variant: 'outline', border: '1px solid #f59e0b', color: '#fbbf24', size: 'medium' } },
    {
      id: 'isaf-card-1',
      type: 'card',
      props: { background: '#020617', border: '1px solid rgba(245, 158, 11, 0.3)', radius: 'xl', padding: '28px' },
      childrenComponents: [
        { id: 'sc1-icon', type: 'icon', props: { name: 'ShieldCheck', size: 28, color: '#fbbf24' } },
        { id: 'sc1-badge', type: 'badge', props: { content: 'ISO 45001 : 2018', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'small' } },
        { id: 'sc1-head', type: 'heading', props: { content: 'Sistem Manajemen K3 Terakreditasi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc1-txt', type: 'text', props: { content: 'Audit K3 harian berbasis sensor AI helm pelindung dan protokol permit-to-work digital untuk seluruh area panas smelter.', fontSize: '14px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'isaf-card-2',
      type: 'card',
      props: { background: '#020617', border: '1px solid rgba(34, 197, 94, 0.3)', radius: 'xl', padding: '28px' },
      childrenComponents: [
        { id: 'sc2-icon', type: 'icon', props: { name: 'Activity', size: 28, color: '#4ade80' } },
        { id: 'sc2-badge', type: 'badge', props: { content: 'ISO 14001 : 2015', background: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', size: 'small' } },
        { id: 'sc2-head', type: 'heading', props: { content: 'Pengelolaan Emisi & Limbah Sirkular', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc2-txt', type: 'text', props: { content: 'Fasilitas daur ulang tailing terak smelter menjadi bahan paving industri semen serta pemantauan kualitas udara CEMS.', fontSize: '14px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'isaf-card-3',
      type: 'card',
      props: { background: '#020617', border: '1px solid rgba(14, 165, 233, 0.3)', radius: 'xl', padding: '28px' },
      childrenComponents: [
        { id: 'sc3-icon', type: 'icon', props: { name: 'CheckCircle2', size: 28, color: '#38bdf8' } },
        { id: 'sc3-badge', type: 'badge', props: { content: 'ISO 9001 & ISO 17025', background: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', size: 'small' } },
        { id: 'sc3-head', type: 'heading', props: { content: 'Laboratorium Metalurgi Terakreditasi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
        { id: 'sc3-txt', type: 'text', props: { content: 'Pengujian spektrometri emisi optik (OES) dan mikroskop elektron untuk memastikan toleransi kemurnian ingot logam sesuai standar ASTM.', fontSize: '14px', color: '#94a3b8' } },
      ],
    },
  ];

  const comps = components.length > 0 ? components : defaultComponents;
  const badges = comps.filter((c) => c.type === 'badge');
  const headings = comps.filter((c) => c.type === 'heading');
  const texts = comps.filter((c) => c.type === 'text');
  const buttons = comps.filter((c) => c.type === 'button');
  const cards = comps.filter((c) => c.type === 'card');
  const stats = comps.filter((c) => c.type === 'statistic');

  return (
    <section className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden border-t border-b border-amber-500/20">
      {/* Ambient Industrial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            {badges.length > 0 && <div className="mb-4">{renderLayoutComponents(badges.slice(0, 1), sectionId)}</div>}
            {headings.length > 0 && <div className="mb-4">{renderLayoutComponents(headings.slice(0, 1), sectionId)}</div>}
            {texts.length > 0 && <div>{renderLayoutComponents(texts.slice(0, 1), sectionId)}</div>}
          </div>
          {buttons.length > 0 && <div>{renderLayoutComponents(buttons.slice(0, 1), sectionId)}</div>}
        </div>

        {/* Safety KPI Highlights */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-slate-950/60 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
            {renderLayoutComponents(stats, sectionId)}
          </div>
        )}

        {/* Safety & Compliance Pillar Cards */}
        {cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {renderLayoutComponents(cards, sectionId)}
          </div>
        )}
      </div>
    </section>
  );
}
