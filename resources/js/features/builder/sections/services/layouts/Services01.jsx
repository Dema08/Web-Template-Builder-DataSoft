import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 01 — AURORA Centered Gradient Glow
 * Mirrors Hero01 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'srv1-badge', type: 'badge', props: { content: '✦ 01 LUMIÈRE — SERVICES', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'srv1-heading', type: 'heading', props: { content: 'Layanan Profesional & Terintegrasi', level: 'h2', fontSize: '56px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'srv1-text', type: 'text', props: { content: 'Solusi lengkap berstandar tinggi yang disesuaikan dengan kebutuhan pertumbuhan bisnis Anda.', fontSize: '18px', color: '#64748b', align: 'center', margin: '0 0 28px 0' } },
    {
      id: 'srv1-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv1-c1-icon', type: 'icon', props: { icon: 'FaTruck', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'srv1-c1-title', type: 'heading', props: { content: 'Pengiriman & Logistik', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv1-c1-desc', type: 'text', props: { content: 'Armada pengiriman siap melayani pengiriman darat, laut, dan udara secara tepat waktu.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv1-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv1-c2-icon', type: 'icon', props: { icon: 'FaWarehouse', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'srv1-c2-title', type: 'heading', props: { content: 'Manajemen Pergudangan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv1-c2-desc', type: 'text', props: { content: 'Fasilitas gudang modern berpendingin dan terintegrasi sistem inventori otomatis.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv1-card-3',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv1-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '32px', color: '#4f46e5', align: 'left' } },
        { id: 'srv1-c3-title', type: 'heading', props: { content: 'Jaminan & Asuransi Cargo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv1-c3-desc', type: 'text', props: { content: 'Perlindungan penuh 100% untuk kargo Anda selama proses pengiriman.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-200/60 via-fuchsia-200/50 to-cyan-200/60 blur-3xl animate-pulse" />
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(badge, sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(heading, sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(text, sectionId)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8 text-left">
          {renderLayoutComponents(cards, sectionId)}
        </div>
        <div className="flex items-center gap-4 mt-12 text-xs text-slate-400">
          <span className="select-none">★★★★★ Layanan 4.9/5</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="select-none">Terpercaya & Bergaransi</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="select-none">Konsultasi Gratis</span>
        </div>
      </div>
    </section>
  );
}
