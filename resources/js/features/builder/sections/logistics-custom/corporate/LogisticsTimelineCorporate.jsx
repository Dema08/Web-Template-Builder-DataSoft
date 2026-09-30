import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsTimelineCorporate
 * Standard Operating Procedure & ISO Quality Milestones timeline.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsTimelineCorporate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'time-badge', type: 'badge', props: { content: '🛡️ Standar Operasional Bersertifikasi ISO', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'time-title', type: 'heading', props: { content: 'SOP Rantai Pasok TransGo: 5 Tahap Presisi Tinggi', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'time-desc', type: 'text', props: { content: 'Alur kerja baku yang diaudit berkala untuk memastikan nol deviasi waktu, nol kerusakan muatan, dan transparansi data real-time.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'step-card-1',
      type: 'card',
      props: { variant: 'timeline', background: '#0f223d', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'st1-step', type: 'badge', props: { content: 'FASE 01', variant: 'primary', background: '#f97316', color: '#ffffff', size: 'small' } },
        { id: 'st1-title', type: 'heading', props: { content: 'Booking & Dispatch Order', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'st1-desc', type: 'text', props: { content: 'Integrasi sistem EDI / API ERP klien untuk pemesanan slot armada dan verifikasi manifest muatan secara otomatis.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'step-card-2',
      type: 'card',
      props: { variant: 'timeline', background: '#0f223d', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'st2-step', type: 'badge', props: { content: 'FASE 02', variant: 'primary', background: '#f97316', color: '#ffffff', size: 'small' } },
        { id: 'st2-title', type: 'heading', props: { content: 'Inspeksi & Smart Electronic Seal', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'st2-desc', type: 'text', props: { content: 'Pemeriksaan kelayakan armada KIR dan penguncian palka/kontainer dengan segel digital GPS ber-barcode unik.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'step-card-3',
      type: 'card',
      props: { variant: 'timeline', background: '#0f223d', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'st3-step', type: 'badge', props: { content: 'FASE 03', variant: 'primary', background: '#f97316', color: '#ffffff', size: 'small' } },
        { id: 'st3-title', type: 'heading', props: { content: 'Perjalanan & Live Telemetry', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'st3-desc', type: 'text', props: { content: 'Monitoring berkala oleh control room 24/7 mencakup geofence, kecepatan laju, suhu kargo reefer, dan perilaku driver.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
    {
      id: 'step-card-4',
      type: 'card',
      props: { variant: 'timeline', background: '#0f223d', borderRadius: '20px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'st4-step', type: 'badge', props: { content: 'FASE 04', variant: 'primary', background: '#f97316', color: '#ffffff', size: 'small' } },
        { id: 'st4-title', type: 'heading', props: { content: 'Serah Terima & Digital ePOD', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'st4-desc', type: 'text', props: { content: 'Tanda tangan elektronik surat jalan (ePOD), foto serah terima kargo di lokasi tujuan, dan verifikasi instan ke dashboard klien.', fontSize: '13px', color: '#94a3b8', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0a1b33] relative">
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
