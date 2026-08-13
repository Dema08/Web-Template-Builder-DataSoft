import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Timeline02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tm02-heading', type: 'heading', props: { content: 'Alur Proses Pengiriman Cargo', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tm02-desc', type: 'text', props: { content: 'Standar operasional pengiriman 4 tahap yang terintegrasi penuh dengan sistem digital kami.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } }
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const allHeadings = layoutComponents.filter(c => c.type === 'heading');
  const allTexts = layoutComponents.filter(c => c.type === 'text');

  const titleComp = allHeadings[0];
  const descComp = allTexts[0];

  const steps = [
    {
      num: '01',
      title: 'Pickup Cargo',
      desc: 'Pengambilan langsung dari gudang pengirim menggunakan armada penjemput khusus yang terjadwal.',
      icon: '📦',
      colorFrom: '#f97316',
      colorTo: '#ea580c',
      bg: 'rgba(249,115,22,0.08)',
      borderColor: 'rgba(249,115,22,0.2)',
    },
    {
      num: '02',
      title: 'Smart Sorting',
      desc: 'Penyaringan dan pengelompokan muatan otomatis dengan sistem WMS di hub distribusi regional.',
      icon: '⚙️',
      colorFrom: '#2563eb',
      colorTo: '#1d4ed8',
      bg: 'rgba(37,99,235,0.08)',
      borderColor: 'rgba(37,99,235,0.2)',
    },
    {
      num: '03',
      title: 'Secure Transit',
      desc: 'Pengiriman lintas pulau dengan rute tercepat, GPS pelacakan aktif, dan keamanan armada penuh.',
      icon: '🚛',
      colorFrom: '#0891b2',
      colorTo: '#0e7490',
      bg: 'rgba(8,145,178,0.08)',
      borderColor: 'rgba(8,145,178,0.2)',
    },
    {
      num: '04',
      title: 'Handover & Confirm',
      desc: 'Pengantaran ke alamat tujuan dengan verifikasi penerima digital dan POD (Proof of Delivery) real-time.',
      icon: '✅',
      colorFrom: '#059669',
      colorTo: '#047857',
      bg: 'rgba(5,150,105,0.08)',
      borderColor: 'rgba(5,150,105,0.2)',
    }
  ];

  return (
    <section className="py-20 bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          {titleComp && renderLayoutComponents([titleComp], sectionId)}
          {descComp && (
            <div className="max-w-2xl">
              {renderLayoutComponents([descComp], sectionId)}
            </div>
          )}
        </div>

        {/* Steps: horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] z-0">
            <div className="h-full bg-gradient-to-r from-orange-400 via-blue-500 via-cyan-500 to-green-500 opacity-30 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                {/* Mobile vertical connector */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden absolute left-1/2 h-full w-[2px] -translate-x-1/2 -z-10" />
                )}

                {/* Step Circle */}
                <div
                  className="relative w-[104px] h-[104px] rounded-2xl flex flex-col items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl cursor-default border"
                  style={{
                    background: step.bg,
                    borderColor: step.borderColor,
                  }}
                >
                  {/* Number badge */}
                  <span
                    className="absolute -top-3 -right-3 text-[11px] font-black px-2 py-0.5 rounded-full shadow-md text-white"
                    style={{ background: `linear-gradient(135deg, ${step.colorFrom}, ${step.colorTo})` }}
                  >
                    {step.num}
                  </span>
                  {/* Icon */}
                  <span className="text-3xl leading-none">{step.icon}</span>
                  {/* Arrow between steps */}
                  {idx < steps.length - 1 && (
                    <div
                      className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-slate-100 shadow-sm items-center justify-center text-slate-400 text-xs font-bold z-20"
                    >
                      →
                    </div>
                  )}
                </div>

                {/* Title + Description */}
                <div className="mt-5 space-y-2 max-w-[200px]">
                  <h3
                    className="text-[15px] font-bold transition-colors duration-300 group-hover:text-blue-600"
                    style={{ color: '#0f172a' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <p className="text-sm font-semibold text-slate-600">
              Semua tahap dapat dipantau secara real-time melalui dashboard klien kami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
