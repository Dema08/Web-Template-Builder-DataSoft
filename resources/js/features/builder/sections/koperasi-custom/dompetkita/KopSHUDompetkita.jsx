import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopSHUDompetkita — Section #shu
 * Responsive: Donut chart and stacked bar adapt cleanly to mobile viewports.
 */
export default function KopSHUDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-shu-title', type: 'heading', props: { content: 'Pembagian Sisa Hasil Usaha', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
    { id: 'dompet-shu-lead', type: 'paragraph', props: { content: 'Keuntungan tahunan dibagi menurut proporsi berikut. Besaran akhirnya ditetapkan Rapat Anggota.', fontSize: '16px', color: '#627783', lineHeight: '1.75' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-shu-title');
  const leadC = lc.filter(c => c.id === 'dompet-shu-lead');

  const legend = [
    { color: '#147D92', label: 'Dana cadangan, 30%', flex: 30, textColor: '#FFFFFF' },
    { color: '#2F8878', label: 'Jasa anggota (sesuai transaksi), 30%', flex: 30, textColor: '#FFFFFF' },
    { color: '#F4B544', label: 'Jasa simpanan (sesuai simpanan wajib), 20%', flex: 20, textColor: '#173042' },
    { color: '#123B52', label: 'Insentif Pengawas, Pengurus, Pengelola, 15%', flex: 15, textColor: '#FFFFFF' },
    { color: '#627783', label: 'Dana sosial dan pendidikan, 5%', flex: 5, textColor: '#FFFFFF' },
  ];

  return (
    <section id="shu" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span aria-hidden="true" className="block w-10 h-1 rounded bg-[#F4B544] mb-5" />
        <div className="mb-3 leading-snug font-['Bricolage_Grotesque',system-ui,sans-serif]">
          {renderLayoutComponents(titleC, sectionId)}
        </div>
        <div className="text-sm sm:text-base leading-relaxed text-[#627783] max-w-2xl mb-8 sm:mb-10">
          {renderLayoutComponents(leadC, sectionId)}
        </div>

        {/* SHU Grid: donut + bar + legend */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* Donut Chart */}
          <div className="md:col-span-5 flex justify-center">
            <svg
              viewBox="0 0 42 42"
              role="img"
              aria-label="Diagram donat pembagian SHU"
              className="w-full max-w-[200px] sm:max-w-[260px] h-auto block"
            >
              <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#DCE7EC" strokeWidth="6" />
              <g fill="none" strokeWidth="6" transform="rotate(0 21 21)">
                <circle cx="21" cy="21" r="15.9155" stroke="#147D92" strokeDasharray="29.4 70.6" strokeDashoffset="25" />
                <circle cx="21" cy="21" r="15.9155" stroke="#2F8878" strokeDasharray="29.4 70.6" strokeDashoffset="-5" />
                <circle cx="21" cy="21" r="15.9155" stroke="#F4B544" strokeDasharray="19.4 80.6" strokeDashoffset="-35" />
                <circle cx="21" cy="21" r="15.9155" stroke="#123B52" strokeDasharray="14.4 85.6" strokeDashoffset="-55" />
                <circle cx="21" cy="21" r="15.9155" stroke="#627783" strokeDasharray="4.4 95.6" strokeDashoffset="-70" />
              </g>
              <text x="21" y="20.6" textAnchor="middle" fontSize="5.2" fontWeight="800" fontFamily='"Bricolage Grotesque",system-ui,sans-serif' fill="#173042">SHU</text>
              <text x="21" y="25.6" textAnchor="middle" fontSize="2.7" fontFamily='"Source Sans 3",system-ui,sans-serif' fill="#627783">5 bagian</text>
            </svg>
          </div>

          <div className="md:col-span-7">
            {/* Stacked bar */}
            <div
              role="img"
              aria-label="Pembagian persentase SHU"
              className="flex h-12 sm:h-16 rounded-xl overflow-hidden my-2 sm:my-4 shadow-xs"
            >
              {legend.map((item, i) => (
                <span
                  key={i}
                  style={{
                    flex: item.flex,
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '6px 8px',
                    color: item.textColor,
                    fontFamily: '"Bricolage Grotesque",system-ui,sans-serif',
                    fontWeight: 700,
                    fontSize: '13px',
                    background: item.color,
                    minWidth: 0,
                  }}
                >
                  {item.flex}%
                </span>
              ))}
            </div>

            {/* Legend list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 list-none p-0 mt-4 text-xs sm:text-sm text-[#173042]">
              {legend.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-3.5 h-3.5 rounded-full shrink-0"
                    style={{ background: item.color }}
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
