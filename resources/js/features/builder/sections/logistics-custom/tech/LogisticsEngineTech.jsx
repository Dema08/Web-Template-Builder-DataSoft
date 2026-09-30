import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsEngineTech
 * Developer API & Real-Time Logistics Routing Engine showcase.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsEngineTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'eng-badge', type: 'badge', props: { content: '⚡ DEVELOPER REST API & WEBHOOK', variant: 'primary', background: '#0284c7', color: '#ffffff', size: 'medium' } },
    { id: 'eng-title', type: 'heading', props: { content: 'Integrasi Pengiriman Otomatis ke Platform Anda dalam 10 Menit', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'eng-desc', type: 'text', props: { content: 'Satu koneksi API untuk cek ongkir instan, request pickup kurir, print label thermal barcode, dan menerima webhook perubahan status kiriman real-time.', fontSize: '16px', color: '#94a3b8', align: 'left', lineHeight: '1.8', margin: '0 0 28px 0' } },
    { id: 'eng-btn-api', type: 'button', props: { label: 'Lihat Dokumentasi API Lengkap →', href: '#pricing', variant: 'primary', size: 'large', radius: 'full', background: '#0284c7', color: '#ffffff', fontWeight: '700' } },
    { id: 'eng-btn-key', type: 'button', props: { label: 'Generate Free Sandbox API Key', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading');
  const textComps = layoutComponents.filter(c => c.type === 'text');
  const buttonComps = layoutComponents.filter(c => c.type === 'button');

  return (
    <section id="engine" className="py-24 px-4 sm:px-6 bg-[#090f1d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-6">
          {renderLayoutComponents(badgeComps, sectionId)}
          <div className="mt-4">{renderLayoutComponents(headingComps, sectionId)}</div>
          {renderLayoutComponents(textComps, sectionId)}

          <div className="flex flex-wrap gap-4 mt-6">
            {renderLayoutComponents(buttonComps, sectionId)}
          </div>
        </div>

        {/* Right Code Visual Terminal */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 shadow-2xl font-mono text-xs text-slate-300">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-slate-500 text-[11px]">POST /v1/orders/instant-pickup</span>
            </div>
            <pre className="overflow-x-auto text-emerald-400 leading-relaxed">
{`// 1. Request Pickup Kurir Instant via API
const order = await trackFast.createOrder({
  service: "INSTANT_2HR",
  origin: {
    lat: -6.2088, lng: 106.8456,
    address: "Warehouse Central D2C, Jakarta"
  },
  destination: {
    lat: -6.2297, lng: 106.8295,
    receiver: "Amanda Putri (0812-9988-7711)"
  },
  package: {
    weight_kg: 1.5,
    is_fragile: true,
    cod_amount: 250000
  }
});

// Response: Auto Generated AWB & Courier Assigned
console.log(order.awb); // "TF-99210-JKT"
console.log(order.courier.name); // "Budi Santoso (EV-04)"`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
