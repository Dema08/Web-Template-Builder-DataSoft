import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopSHUDompetkita — Pembagian Sisa Hasil Usaha (SHU)
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopSHUDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-shu-title', type: 'heading', props: { content: 'Pembagian Sisa Hasil Usaha', level: 'h2' } },
    { id: 'dompet-shu-lead', type: 'paragraph', props: { content: 'Keuntungan tahunan dibagi menurut proporsi berikut. Besaran akhirnya ditetapkan Rapat Anggota.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-shu-title');
  const leadC = lc.filter(c => c.id === 'dompet-shu-lead');

  return (
    <div className="dk-root">
      <section id="shu">
        <div className="wrap">
          <h2>
            {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Pembagian Sisa Hasil Usaha'}
          </h2>
          <p className="lead">
            {leadC.length > 0 ? renderLayoutComponents(leadC, sectionId) : 'Keuntungan tahunan dibagi menurut proporsi berikut. Besaran akhirnya ditetapkan Rapat Anggota.'}
          </p>

          <div className="shu-grid">
            <svg
              className="donut"
              viewBox="0 0 42 42"
              role="img"
              aria-label="Diagram donat pembagian SHU: dana cadangan 30 persen, jasa anggota 30 persen, jasa simpanan 20 persen, insentif 15 persen, dana sosial dan pendidikan 5 persen"
            >
              <circle cx="21" cy="21" r="15.9155" fill="none" className="s-line" strokeWidth="6" />
              <g fill="none" strokeWidth="6" transform="rotate(0 21 21)">
                <circle cx="21" cy="21" r="15.9155" stroke="#147D92" strokeDasharray="29.4 70.6" strokeDashoffset="25" />
                <circle cx="21" cy="21" r="15.9155" stroke="#2F8878" strokeDasharray="29.4 70.6" strokeDashoffset="-5" />
                <circle cx="21" cy="21" r="15.9155" stroke="#F4B544" strokeDasharray="19.4 80.6" strokeDashoffset="-35" />
                <circle cx="21" cy="21" r="15.9155" stroke="#123B52" strokeDasharray="14.4 85.6" strokeDashoffset="-55" />
                <circle cx="21" cy="21" r="15.9155" stroke="#627783" strokeDasharray="4.4 95.6" strokeDashoffset="-70" />
              </g>
              <text x="21" y="20.6" textAnchor="middle" fontSize="5.2" fontWeight="800" fontFamily='"Bricolage Grotesque",system-ui,sans-serif' className="t-ink">
                SHU
              </text>
              <text x="21" y="25.6" textAnchor="middle" fontSize="2.7" fontFamily='"Source Sans 3",system-ui,sans-serif' className="t-mut">
                5 bagian
              </text>
            </svg>

            <div>
              <div
                className="shu"
                role="img"
                aria-label="Dana cadangan 30 persen, jasa anggota 30 persen, jasa simpanan 20 persen, insentif 15 persen, dana sosial dan pendidikan 5 persen"
              >
                <span style={{ flex: 30, background: '#147D92' }}>30%</span>
                <span style={{ flex: 30, background: '#2F8878' }}>30%</span>
                <span style={{ flex: 20, background: '#F4B544', color: '#173042' }}>20%</span>
                <span style={{ flex: 15, background: '#123B52' }}>15%</span>
                <span style={{ flex: 5, background: '#627783' }} />
              </div>
              <ul className="legend">
                <li><i style={{ background: '#147D92' }} />Dana cadangan, 30%</li>
                <li><i style={{ background: '#2F8878' }} />Jasa anggota (sesuai transaksi), 30%</li>
                <li><i style={{ background: '#F4B544' }} />Jasa simpanan (sesuai simpanan wajib), 20%</li>
                <li><i style={{ background: '#123B52' }} />Insentif Pengawas, Pengurus, Pengelola, 15%</li>
                <li><i style={{ background: '#627783' }} />Dana sosial dan pendidikan, 5%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
