import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopSHUDompetkita — Pembagian Sisa Hasil Usaha (SHU)
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, text, donut chart, and stacked bar chart is fully draggable, resizable, and editable.
 */
export default function KopSHUDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-shu-title', type: 'heading', props: { content: 'Pembagian Sisa Hasil Usaha', level: 'h2' } },
    { id: 'dompet-shu-lead', type: 'text', props: { content: 'Keuntungan tahunan dibagi menurut proporsi berikut. Besaran akhirnya ditetapkan Rapat Anggota.' } },

    // Resizable and Editable Donut Chart
    {
      id: 'dompet-shu-donut',
      type: 'chart',
      props: {
        variant: 'donut',
        val1: 30,
        val2: 30,
        val3: 20,
        val4: 15,
        val5: 5,
        color1: '#0D9488',
        color2: '#10B981',
        color3: '#F59E0B',
        color4: '#0F2942',
        color5: '#475569',
        centerTitle: 'SHU',
        centerSubtitle: '5 bagian',
        width: '100%',
        height: 'auto',
      },
    },

    // Resizable and Editable Stacked Bar Chart
    {
      id: 'dompet-shu-bar',
      type: 'chart',
      props: {
        variant: 'stacked-bar',
        val1: 30,
        val2: 30,
        val3: 20,
        val4: 15,
        val5: 5,
        color1: '#0D9488',
        color2: '#10B981',
        color3: '#F59E0B',
        color4: '#0F2942',
        color5: '#475569',
        width: '100%',
        height: 'auto',
      },
    },

    { id: 'dompet-shu-l1', type: 'text', props: { content: 'Dana cadangan, 30%' } },
    { id: 'dompet-shu-l2', type: 'text', props: { content: 'Jasa anggota (sesuai transaksi), 30%' } },
    { id: 'dompet-shu-l3', type: 'text', props: { content: 'Jasa simpanan (sesuai simpanan wajib), 20%' } },
    { id: 'dompet-shu-l4', type: 'text', props: { content: 'Insentif Pengawas, Pengurus, Pengelola, 15%' } },
    { id: 'dompet-shu-l5', type: 'text', props: { content: 'Dana sosial dan pendidikan, 5%' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const getComp = id => lc.filter(c => c.id === id);

  return (
    <div className="dk-root">
      <section id="shu">
        <div className="wrap">
          <h2>
            {renderLayoutComponents(getComp('dompet-shu-title'), sectionId)}
          </h2>
          <p className="lead">
            {renderLayoutComponents(getComp('dompet-shu-lead'), sectionId)}
          </p>

          <div className="shu-grid">
            {renderLayoutComponents(getComp('dompet-shu-donut'), sectionId)}

            <div>
              {renderLayoutComponents(getComp('dompet-shu-bar'), sectionId)}

              <ul className="legend">
                <li><i style={{ background: '#0D9488' }} />{renderLayoutComponents(getComp('dompet-shu-l1'), sectionId)}</li>
                <li><i style={{ background: '#10B981' }} />{renderLayoutComponents(getComp('dompet-shu-l2'), sectionId)}</li>
                <li><i style={{ background: '#F59E0B' }} />{renderLayoutComponents(getComp('dompet-shu-l3'), sectionId)}</li>
                <li><i style={{ background: '#0F2942' }} />{renderLayoutComponents(getComp('dompet-shu-l4'), sectionId)}</li>
                <li><i style={{ background: '#475569' }} />{renderLayoutComponents(getComp('dompet-shu-l5'), sectionId)}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
