import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingNewsCapital
 * Recent Fund M&A, IPO Announcements, and Portfolio Exits.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingNewsCapital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'news-badge', type: 'badge', props: { content: '📰 PRESS RELEASES & EXITS', variant: 'primary', background: '#022c22', color: '#34d399', size: 'medium' } },
    { id: 'news-title', type: 'heading', props: { content: 'Warta Investasi, Putaran Pendanaan & IPO', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'news-desc', type: 'text', props: { content: 'Update berkala mengenai aksi korporasi, pendanaan baru, dan pengumuman listing bursa portofolio Vanguard Apex.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'news-card-1',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'nc1-badge', type: 'badge', props: { content: 'IPO Announcement', variant: 'primary', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', size: 'small' } },
        { id: 'nc1-title', type: 'heading', props: { content: 'NeuroScale AI Resmi Melantai di NASDAQ (Ticker: NAI)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'nc1-desc', type: 'text', props: { content: 'Pencatatan perdana saham berhasil mengumpulkan $620 Juta dengan kapitalisasi pasar pembukaan $3.8 Miliar.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'nc1-btn', type: 'button', props: { label: 'Baca Siaran Pers →', href: '#inquiry', variant: 'primary', size: 'small', radius: 'full', background: '#10b981', color: '#042f2e', fontWeight: '700' } },
      ],
    },
    {
      id: 'news-card-2',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'nc2-badge', type: 'badge', props: { content: 'Funding Lead', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'nc2-title', type: 'heading', props: { content: 'Vanguard Apex Memimpin Series C $85M di VoltMobility', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'nc2-desc', type: 'text', props: { content: 'Ekspansi jaringan baterai swap motor listrik ke 10 kota metropolitan di Asia Tenggara untuk mempercepat adopsi EV.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'nc2-btn', type: 'button', props: { label: 'Baca Siaran Pers →', href: '#inquiry', variant: 'primary', size: 'small', radius: 'full', background: '#38bdf8', color: '#0c0a09', fontWeight: '700' } },
      ],
    },
    {
      id: 'news-card-3',
      type: 'card',
      props: { variant: 'service', background: '#09090b', borderRadius: '24px', borderWidth: '1px', borderColor: '#27272a', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'nc3-badge', type: 'badge', props: { content: 'Fund Launch', variant: 'primary', background: 'rgba(167, 139, 250, 0.15)', color: '#a78bfa', size: 'small' } },
        { id: 'nc3-title', type: 'heading', props: { content: 'First Close Fund IV $1.2B Disetujui Lembaga Sovereign Dunia', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'nc3-desc', type: 'text', props: { content: 'Fokus pada pendanaan startup tahap Series B hingga Pre-IPO sektor Deep-Tech, AI Generatif & Transisi Energi Bersih.', fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' } },
        { id: 'nc3-btn', type: 'button', props: { label: 'Baca Siaran Pers →', href: '#inquiry', variant: 'primary', size: 'small', radius: 'full', background: '#a78bfa', color: '#0c0a09', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#030303] text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
