import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndTelemetrySmart
 * Real-time Industry 4.0 Telemetry, Energy Efficiency & AI Yield Analytics.
 * Fully supports right-inspector selection and property editing for cards, badges, and texts.
 */
export default function IndTelemetrySmart({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tel-badge', type: 'badge', props: { text: '📊 REAL-TIME SMART FACTORY TELEMETRY', variant: 'outline', background: 'rgba(59,130,246,0.15)', color: '#60a5fa', borderColor: 'rgba(59,130,246,0.45)' } },
    { id: 'tel-title', type: 'heading', props: { content: 'Visibilitas Operasional Penuh dengan Data Telemetri Real-Time', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'tel-desc', type: 'paragraph', props: { content: 'Pantau status permesinan, konsumsi daya listrik per stasiun, dan tingkat cacat produk secara langsung dari dashboard cloud terpusat.', fontSize: '16px', color: '#cbd5e1' } },

    // Metric 1: Energy Reduction
    {
      id: 'card-tel1',
      type: 'card',
      props: { background: '#0a1226', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tel1-tag', type: 'badge', props: { text: 'ENERGY MANAGEMENT', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7' } },
        { id: 'tel1-title', type: 'heading', props: { content: 'Efisiensi Energi -30% dengan AI Load Balancing', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'tel1-desc', type: 'paragraph', props: { content: 'Optimasi konsumsi listrik otomatis saat beban puncak (peak load) yang menghemat biaya operasional hingga miliaran rupiah per tahun.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Metric 2: MTBF & Reliability
    {
      id: 'card-tel2',
      type: 'card',
      props: { background: '#0a1226', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tel2-tag', type: 'badge', props: { text: 'RELIABILITY INDEX', variant: 'solid', background: 'rgba(59,130,246,0.2)', color: '#60a5fa' } },
        { id: 'tel2-title', type: 'heading', props: { content: 'MTBF (Mean Time Between Failures) 4.200 Jam', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'tel2-desc', type: 'paragraph', props: { content: 'Ketahanan sistem robotik dengan protokol pemeliharaan preventif yang menjaga lini produksi tetap beroperasi tanpa henti.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Metric 3: Cycle Time Speed
    {
      id: 'card-tel3',
      type: 'card',
      props: { background: '#0a1226', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tel3-tag', type: 'badge', props: { text: 'SPEED OPTIMIZATION', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'tel3-title', type: 'heading', props: { content: 'Percepatan Cycle Time Produksi hingga 45%', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'tel3-desc', type: 'paragraph', props: { content: 'Sinkronisasi pergerakan robotik multi-sumbu mengurangi waktu tunggu (idle time) antar stasiun kerja perakitan.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Metric 4: Cyber Security IEC 62443
    {
      id: 'card-tel4',
      type: 'card',
      props: { background: '#0a1226', borderColor: 'rgba(59,130,246,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tel4-tag', type: 'badge', props: { text: 'CYBER SECURITY', variant: 'solid', background: 'rgba(168,85,247,0.2)', color: '#c084fc' } },
        { id: 'tel4-title', type: 'heading', props: { content: 'Keamanan Data Industri Berstandar IEC 62443', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'tel4-desc', type: 'paragraph', props: { content: 'Enkripsi jaringan kontrol SCADA/PLC tingkat militer untuk melindungi formula manufaktur dan data produksi dari ancaman siber.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Smart Control Center Banner
    {
      id: 'control-center-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0d1e44 0%, #060e22 100%)', borderColor: 'rgba(59,130,246,0.4)', borderWidth: '2px', borderRadius: '20px', padding: '32px', shadow: '2xl' },
      childrenComponents: [
        { id: 'ctrl-badge', type: 'badge', props: { text: '🕹 INTEGRATED COMMAND CENTER 24/7', variant: 'solid', background: 'rgba(59,130,246,0.25)', color: '#60a5fa' } },
        { id: 'ctrl-title', type: 'heading', props: { content: 'Centralized Manufacturing Execution System (MES) & Cloud SCADA', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f8fafc' } },
        { id: 'ctrl-desc', type: 'paragraph', props: { content: 'Terintegrasi secara seamless dengan API ERP (SAP/Oracle/Microsoft Dynamics), barcode QR traceability per batch produk, dan automated alert WhatsApp/Email saat terjadi anomali produksi.', fontSize: '14px', color: '#cbd5e1' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'tel-badge');
  const titleC = lc.filter(c => c.id === 'tel-title');
  const descC = lc.filter(c => c.id === 'tel-desc');
  const card1 = lc.filter(c => c.id === 'card-tel1');
  const card2 = lc.filter(c => c.id === 'card-tel2');
  const card3 = lc.filter(c => c.id === 'card-tel3');
  const card4 = lc.filter(c => c.id === 'card-tel4');
  const ctrlCard = lc.filter(c => c.id === 'control-center-card');

  return (
    <section id="telemetry" className="relative bg-[#02050f] py-20 lg:py-28 overflow-hidden text-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
          <div>{renderLayoutComponents(card4, sectionId)}</div>
        </div>

        {/* Control Center Banner */}
        <div>{renderLayoutComponents(ctrlCard, sectionId)}</div>
      </div>
    </section>
  );
}
