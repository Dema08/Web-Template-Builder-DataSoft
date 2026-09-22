import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SUMMIT — Navy Corporate Logistics Grid
 * Gaya korporat enterprise warna biru navy tegas dengan tiering wilayah profesional dan indikator SLA ketat.
 * Untuk B2B logistics, suplai industri, dan tender korporat skala besar.
 */
export default function Coverage09({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cov9-badge', type: 'badge', props: { content: 'ENTERPRISE DISTRIBUTION SLA', background: '#1e293b', color: '#38bdf8' } },
    { id: 'cov9-heading', type: 'heading', props: { content: 'Cakupan Distribusi Skala Korporasi Nasional', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 14px 0' } },
    { id: 'cov9-text', type: 'text', props: { content: 'Standar SLA tier 1 dengan jaminan fulfillment 99.8% untuk mendukung rantai pasok industri manufaktur dan FMCG.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const tiers = [
    { tier: 'Tier 1 — Metropolitan', cities: 'Jakarta, Surabaya, Medan, Bandung, Semarang', lead: '12-24 Jam', sla: '99.9%' },
    { tier: 'Tier 2 — Kota Komersial', cities: 'Balikpapan, Makassar, Palembang, Denpasar, Pekanbaru', lead: '24-48 Jam', sla: '99.7%' },
    { tier: 'Tier 3 — Regional Sub-Distrik', cities: '300+ Kabupaten & Kota Penyangga Nusantara', lead: '48-72 Jam', sla: '99.5%' },
  ];

  return (
    <section className="py-24 px-6 bg-[#0f172a]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="space-y-4">
          {tiers.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#1e293b] border border-slate-700/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-sky-500/50 transition-colors">
              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-400 tracking-wide uppercase">{t.tier}</span>
                <h3 className="text-lg font-bold text-white">{t.cities}</h3>
              </div>
              <div className="flex items-center gap-8 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-700 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block">Lead Time</span>
                  <span className="text-white font-bold">{t.lead}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Target SLA</span>
                  <span className="text-emerald-400 font-bold">{t.sla}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
