import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsCorridorsGlobal
 * Strategic international freight lanes (Asia-Pac, Europe, Americas, Middle East).
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsCorridorsGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cor-badge', type: 'badge', props: { content: '🌐 STRATEGIC TRADE LANES', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'cor-title', type: 'heading', props: { content: 'Koridor Perdagangan & Rute Ekspor-Impor Utama', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cor-desc', type: 'text', props: { content: 'Jadwal keberangkatan kargo udara dan samudra harian dan mingguan menghubungkan pelabuhan Indonesia ke pasar global.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'gcor-card-1',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gc1-b', type: 'badge', props: { content: 'Asia-Pacific Core Lane', variant: 'primary', background: 'rgba(231, 200, 115, 0.15)', color: '#e7c873', size: 'small' } },
        { id: 'gc1-t', type: 'heading', props: { content: 'Indonesia ⇄ Singapore / China / Japan', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'gc1-d', type: 'text', props: { content: 'Lead-time udara 24 jam & laut 4-8 hari. Koneksi langsung ke pelabuhan Shanghai, Shenzhen, Tokyo, dan Busan.', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'gc1-btn', type: 'button', props: { label: 'Check Asia-Pac Tariffs →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#e7c873', borderColor: '#e7c873', fontWeight: '700' } },
      ],
    },
    {
      id: 'gcor-card-2',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gc2-b', type: 'badge', props: { content: 'Trans-Atlantic & Europe', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'gc2-t', type: 'heading', props: { content: 'Indonesia ⇄ Rotterdam / Hamburg / London', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'gc2-d', type: 'text', props: { content: 'Jalur maritim Terusan Suez terjadwal mingguan dan air charter Boeing 777F express 48 jam door-to-door.', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'gc2-btn', type: 'button', props: { label: 'Check Europe Tariffs →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#38bdf8', borderColor: '#38bdf8', fontWeight: '700' } },
      ],
    },
    {
      id: 'gcor-card-3',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gc3-b', type: 'badge', props: { content: 'Americas Gateway', variant: 'primary', background: 'rgba(74, 222, 128, 0.15)', color: '#4ade80', size: 'small' } },
        { id: 'gc3-t', type: 'heading', props: { content: 'Indonesia ⇄ Los Angeles / New York', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'gc3-d', type: 'text', props: { content: 'Fasilitas C-TPAT & ISF 10+2 US Customs compliant untuk komoditas manufaktur, garmen, dan elektronik.', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'gc3-btn', type: 'button', props: { label: 'Check Americas Tariffs →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#4ade80', borderColor: '#4ade80', fontWeight: '700' } },
      ],
    },
    {
      id: 'gcor-card-4',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '28px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gc4-b', type: 'badge', props: { content: 'Middle East & Gulf', variant: 'primary', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', size: 'small' } },
        { id: 'gc4-t', type: 'heading', props: { content: 'Indonesia ⇄ Dubai (DXB) / Jeddah / Qatar', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 8px 0' } },
        { id: 'gc4-d', type: 'text', props: { content: 'Konektivitas hub Timur Tengah dengan sertifikasi Halal Logistics Internasional untuk produk pangan & kosmetik.', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'gc4-btn', type: 'button', props: { label: 'Check Gulf Tariffs →', href: '#inquiry', variant: 'outline', size: 'small', radius: 'full', background: 'transparent', color: '#f59e0b', borderColor: '#f59e0b', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-4 sm:px-6 bg-[#0c0a09] text-white relative">
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
