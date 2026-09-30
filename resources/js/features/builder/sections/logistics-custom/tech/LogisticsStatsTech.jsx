import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsStatsTech
 * Fast on-demand tech metrics dashboard.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsStatsTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'stat-badge', type: 'badge', props: { content: '📊 METRIK PERFORMA REAL-TIME', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'medium' } },
    { id: 'stat-title', type: 'heading', props: { content: 'Kecepatan & Skala Pengiriman Teruji', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'stat-desc', type: 'text', props: { content: 'Didukung sistem perutean AI dan 10.000+ armada kurir roda dua listrik & blindvan perkotaan.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'tstat-card-1',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ts-c1-val', type: 'heading', props: { content: '99.4%', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#0284c7', align: 'center', margin: '0 0 8px 0' } },
        { id: 'ts-c1-lbl', type: 'heading', props: { content: 'SLA Tepat Waktu Same-Day', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
        { id: 'ts-c1-sub', type: 'text', props: { content: 'Garansi Ongkir Kembali Jika Terlambat', fontSize: '12px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'tstat-card-2',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ts-c2-val', type: 'heading', props: { content: '45 Menit', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#10b981', align: 'center', margin: '0 0 8px 0' } },
        { id: 'ts-c2-lbl', type: 'heading', props: { content: 'Rata-rata Instant Delivery', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
        { id: 'ts-c2-sub', type: 'text', props: { content: 'Area Jabodetabek, Bandung, Surabaya', fontSize: '12px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'tstat-card-3',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ts-c3-val', type: 'heading', props: { content: '2.5 Juta+', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#8b5cf6', align: 'center', margin: '0 0 8px 0' } },
        { id: 'ts-c3-lbl', type: 'heading', props: { content: 'Paket Terkirim Per Bulan', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
        { id: 'ts-c3-sub', type: 'text', props: { content: 'Dipercaya 45.000+ Toko Online & D2C', fontSize: '12px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
    {
      id: 'tstat-card-4',
      type: 'card',
      props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e2e8f0', shadow: 'md', padding: '28px 20px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'ts-c4-val', type: 'heading', props: { content: '< 150 ms', level: 'h3', fontSize: '42px', fontWeight: '900', color: '#f59e0b', align: 'center', margin: '0 0 8px 0' } },
        { id: 'ts-c4-lbl', type: 'heading', props: { content: 'Latency API & Webhook', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
        { id: 'ts-c4-sub', type: 'text', props: { content: 'Uptime Sistem 99.99% Cloud SLA', fontSize: '12px', color: '#64748b', align: 'center', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-4 sm:px-6 bg-slate-50 relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
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
