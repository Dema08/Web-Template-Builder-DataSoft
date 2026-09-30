import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingProcurementIndustrial
 * Section: B2B Industrial Vendor Procurement, Contractor Qualification & Tender Registration
 */
export default function HoldingProcurementIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'iproc-badge', type: 'badge', props: { content: '🏢 B2B VENDOR & CONTRACTOR QUALIFICATION PORTAL', variant: 'primary', background: 'rgba(245, 158, 11, 0.1)', color: '#fbbf24', size: 'medium' } },
    { id: 'iproc-heading', type: 'heading', props: { content: 'Portal Pengadaan Barang & Jasa (E-Procurement) Holding', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff' } },
    { id: 'iproc-text', type: 'text', props: { content: 'Kami membuka peluang kemitraan bagi pemasok peralatan berat, bahan kimia industri, kontraktor EPC, dan penyedia logistik yang memenuhi standar integritas tinggi.', fontSize: '16px', color: '#94a3b8' } },
    { id: 'iproc-btn-1', type: 'button', props: { label: 'Registrasi Vendor Rekanan Terdaftar →', href: '#', variant: 'primary', background: '#f59e0b', color: '#020617', size: 'large' } },
    { id: 'iproc-btn-2', type: 'button', props: { label: 'Unduh Dokumen Prakualifikasi Tender (PDF)', href: '#', variant: 'outline', border: '1px solid #475569', color: '#ffffff', size: 'large' } },
    {
      id: 'iproc-card-1',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: 'xl', padding: '20px' },
      childrenComponents: [
        { id: 'ipc1-icon', type: 'icon', props: { name: 'FileCheck', size: 24, color: '#fbbf24' } },
        { id: 'ipc1-head', type: 'heading', props: { content: 'Transparansi & Pakta Integritas Terverifikasi', level: 'h4', fontSize: '16px', color: '#ffffff' } },
        { id: 'ipc1-txt', type: 'text', props: { content: 'Seluruh proses tender dilakukan secara elektronik dan diawasi oleh komite pengadaan independen tanpa perantara.', fontSize: '13px', color: '#94a3b8' } },
      ],
    },
    {
      id: 'iproc-card-2',
      type: 'card',
      props: { background: '#0f172a', border: '1px solid #1e293b', radius: 'xl', padding: '20px' },
      childrenComponents: [
        { id: 'ipc2-icon', type: 'icon', props: { name: 'Zap', size: 24, color: '#fbbf24' } },
        { id: 'ipc2-head', type: 'heading', props: { content: 'Term Pembayaran Tepat Waktu (Supply Chain Financing)', level: 'h4', fontSize: '16px', color: '#ffffff' } },
        { id: 'ipc2-txt', type: 'text', props: { content: 'Fasilitas early-payment invoice berkolaborasi dengan sindikasi perbankan BUMN bagi vendor UMKM terpilih.', fontSize: '13px', color: '#94a3b8' } },
      ],
    },
  ];

  const comps = components.length > 0 ? components : defaultComponents;
  const badges = comps.filter((c) => c.type === 'badge');
  const headings = comps.filter((c) => c.type === 'heading');
  const texts = comps.filter((c) => c.type === 'text');
  const buttons = comps.filter((c) => c.type === 'button');
  const cards = comps.filter((c) => c.type === 'card');

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Procurement Information & Process */}
          <div className="lg:col-span-6">
            {badges.length > 0 && <div className="mb-4">{renderLayoutComponents(badges.slice(0, 1), sectionId)}</div>}
            {headings.length > 0 && <div className="mb-6">{renderLayoutComponents(headings.slice(0, 1), sectionId)}</div>}
            {texts.length > 0 && <div className="mb-8">{renderLayoutComponents(texts.slice(0, 1), sectionId)}</div>}

            {/* Procurement Criteria Cards */}
            {cards.length > 0 && (
              <div className="space-y-4 mb-8">
                {renderLayoutComponents(cards, sectionId)}
              </div>
            )}

            {buttons.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {renderLayoutComponents(buttons, sectionId)}
              </div>
            )}
          </div>

          {/* Right Column: Interactive Vendor Fast-Track Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-amber-500/30 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                  Official Vendor Qualification Portal
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Register as Approved Group Supplier
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Submit company credentials, ISO certifications, and capability profiles for ongoing group industrial tenders.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Corporate Entity Name
                    </label>
                    <input
                      type="text"
                      readOnly
                      placeholder="e.g. PT Steel Dynamics Tbk"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Industry Sector / Category
                    </label>
                    <select
                      disabled
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-300 text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option>Heavy Metallurgy & Smelting Supplies</option>
                      <option>Renewable Power Equipment & EPC</option>
                      <option>Industrial Automation & Robotics</option>
                      <option>Port Terminal & Logistics Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Executive Representative Email
                  </label>
                  <input
                    type="email"
                    readOnly
                    placeholder="procurement-lead@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all cursor-pointer text-sm"
                >
                  Access E-Procurement Portal & Tender Docs →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
