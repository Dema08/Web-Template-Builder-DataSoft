import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsHeroCorporate
 * High-impact B2B logistics hero with live tracking input simulator, trust metrics, and dual CTA.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsHeroCorporate({ components = [], sectionId = null }) {
  const [awb, setAwb] = useState('');
  const [trackResult, setTrackResult] = useState(null);

  const defaultComponents = [
    { id: 'hero-badge', type: 'badge', props: { content: '🚚 Jaringan Distribusi Nasional 38 Provinsi', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'hero-title', type: 'heading', props: { content: 'Solusi Rantai Pasok Terpadu & Kargo Multi-Modal Indonesia', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'hero-desc', type: 'text', props: { content: 'Menghubungkan pusat industri, pelabuhan, dan jaringan distribusi dengan 1.400+ armada FTL/LTL modern, kapal kargo nusantara, dan fasilitas cold chain terintegrasi telematika satelit.', fontSize: '17px', color: '#cbd5e1', align: 'left', lineHeight: '1.8', margin: '0 0 28px 0' } },
    { id: 'btn-rfq', type: 'button', props: { label: 'Minta Penawaran Kontrak B2B →', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: '#f97316', color: '#ffffff', shadow: 'lg', fontWeight: '700' } },
    { id: 'btn-calc', type: 'button', props: { label: 'Hitung Estimasi Kargo', href: '#calculator', variant: 'outline', size: 'large', radius: 'lg', background: 'transparent', color: '#f97316', borderColor: '#f97316', fontWeight: '700' } },

    // 3 Metric Stat Cards
    {
      id: 'hero-stat-1',
      type: 'card',
      props: { variant: 'stat', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px' },
      childrenComponents: [
        { id: 'h-s1-val', type: 'heading', props: { content: '99.8%', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#ffffff', margin: '0' } },
        { id: 'h-s1-lbl', type: 'text', props: { content: 'On-Time Delivery SLA', fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'hero-stat-2',
      type: 'card',
      props: { variant: 'stat', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px' },
      childrenComponents: [
        { id: 'h-s2-val', type: 'heading', props: { content: '1.480+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#f97316', margin: '0' } },
        { id: 'h-s2-lbl', type: 'text', props: { content: 'Armada Berat & Kapal', fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' } },
      ],
    },
    {
      id: 'hero-stat-3',
      type: 'card',
      props: { variant: 'stat', background: 'rgba(15, 23, 42, 0.6)', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '16px' },
      childrenComponents: [
        { id: 'h-s3-val', type: 'heading', props: { content: '48 Hub', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#34d399', margin: '0' } },
        { id: 'h-s3-lbl', type: 'text', props: { content: 'Pergudangan Terintegrasi', fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' } },
      ],
    },

    // Right Showcase Card with Warehouse Image and Dispatch Metrics
    {
      id: 'corp-hero-card',
      type: 'card',
      props: {
        background: '#0d1f38',
        borderColor: '#334155',
        borderWidth: '1px',
        borderRadius: '24px',
        padding: '0px',
        shadow: '2xl',
      },
      childrenComponents: [
        {
          id: 'corp-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80',
            alt: 'TransGo National Logistics Automated Warehouse Facility',
            width: '100%',
            height: '420px',
            objectFit: 'cover',
            borderRadius: '24px 24px 0 0',
          },
        },
        {
          id: 'corp-status-card',
          type: 'card',
          props: {
            background: 'rgba(15, 23, 42, 0.95)',
            borderColor: 'rgba(51, 65, 85, 0.8)',
            borderWidth: '1px',
            borderRadius: '16px',
            padding: '16px',
            margin: '-60px 16px 16px 16px',
            shadow: 'xl',
          },
          childrenComponents: [
            {
              id: 'corp-dispatch-header',
              type: 'card',
              props: {
                background: 'transparent',
                borderWidth: '0px',
                padding: '0px',
                margin: '0 0 8px 0',
              },
              childrenComponents: [
                { id: 'corp-dispatch-title', type: 'heading', props: { content: 'STATUS FLEET DISPATCH', level: 'h4', fontSize: '13px', fontWeight: '900', color: '#fb923c', margin: '0' } },
                { id: 'corp-dispatch-badge', type: 'badge', props: { text: '99.8% On-Schedule', variant: 'solid', background: 'rgba(16,185,129,0.2)', color: '#34d399' } },
              ],
            },
            { id: 'corp-fleet-units', type: 'text', props: { content: 'Active Wingbox Units: 1,240 En-Route', fontSize: '12px', color: '#cbd5e1', fontWeight: '600' } },
            { id: 'corp-fleet-vessels', type: 'text', props: { content: 'Intermodal Vessel: 18 Cargo Ships Active', fontSize: '12px', color: '#cbd5e1', fontWeight: '600' } },
          ],
        },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading');
  const textComps = layoutComponents.filter(c => c.type === 'text');
  const buttonComps = layoutComponents.filter(c => c.type === 'button');
  const statComps = layoutComponents.filter(c => c.id === 'hero-stat-1' || c.id === 'hero-stat-2' || c.id === 'hero-stat-3' || c.props?.variant === 'stat');
  const heroCard = layoutComponents.filter(c => c.id === 'corp-hero-card');
  const fallbackImageComps = layoutComponents.filter(c => c.type === 'image' || c.id === 'corp-hero-img');

  const handleSimulateTrack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!awb.trim()) {
      setTrackResult('Masukkan nomor resi / surat jalan (contoh: TG-88291)');
      return;
    }
    setTrackResult(`[STATUS AKTIF] Resi ${awb.toUpperCase()}: Kargo Kontainer 40ft dalam perjalanan Tol Cikampek Menuju Surabaya Hub. Estimasi Tiba: Hari Ini 18:30 WIB (SLA On-Time).`);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0a192f] via-[#0f2444] to-[#0a192f] overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_30%,rgba(249,115,22,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {renderLayoutComponents(badgeComps, sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(headingComps, sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(textComps, sectionId)}</div>

          {/* Quick AWB Tracking Simulator Box */}
          <div className="w-full bg-slate-900/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl mb-8">
            <div className="flex items-center justify-between mb-3 text-xs text-slate-300">
              <span className="font-bold flex items-center gap-2 text-orange-400">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                CEK STATUS PENGIRIMAN LIVE (AWB / SURAT JALAN)
              </span>
              <span className="text-slate-400">Terhubung ke 48 Hub Nasional</span>
            </div>
            <form onSubmit={handleSimulateTrack} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={awb}
                onChange={(e) => setAwb(e.target.value)}
                placeholder="Contoh: TG-89210 / B2B-FMCG-09"
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-orange-500/20 shrink-0"
              >
                Lacak Resi 🔍
              </button>
            </form>
            {trackResult && (
              <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-orange-500/40 text-xs text-amber-300 font-mono animate-fadeIn">
                {trackResult}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4">{renderLayoutComponents(buttonComps, sectionId)}</div>

          {/* Trust Metrics Cards */}
          {statComps.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800 w-full">
              {renderLayoutComponents(statComps, sectionId)}
            </div>
          )}
        </div>

        {/* Right Visual Card */}
        <div className="lg:col-span-5 relative">
          {heroCard.length > 0 ? (
            renderLayoutComponents(heroCard, sectionId)
          ) : fallbackImageComps.length > 0 ? (
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-[0_30px_90px_-20px_rgba(249,115,22,0.3)]">
              {renderLayoutComponents(fallbackImageComps, sectionId)}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
