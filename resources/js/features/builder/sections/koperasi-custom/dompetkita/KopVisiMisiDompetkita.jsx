import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopVisiMisiDompetkita — Visi & Misi KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopVisiMisiDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-vm-title', type: 'heading', props: { content: 'Membangun kesejahteraan anggota melalui koperasi yang adil, transparan, dan bertanggung jawab.', level: 'h2' } },
    { id: 'dompet-vm-lead', type: 'paragraph', props: { content: 'Itulah visi kami: anggota bekerja sama mengembangkan usaha dan memperoleh manfaat ekonomi secara bersama.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-vm-title');
  const leadC = lc.filter(c => c.id === 'dompet-vm-lead');

  return (
    <div className="dk-root">
      <section id="misi">
        <div className="wrap two">
          <div>
            <h2>
              {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Membangun kesejahteraan anggota melalui koperasi yang adil, transparan, dan bertanggung jawab.'}
            </h2>
            <p className="lead">
              {leadC.length > 0 ? renderLayoutComponents(leadC, sectionId) : 'Itulah visi kami: anggota bekerja sama mengembangkan usaha dan memperoleh manfaat ekonomi secara bersama.'}
            </p>
          </div>
          <ul className="misi">
            <li>Pengembangan layanan keuangan yang sesuai prinsip dan ketentuan yang dipilih serta disahkan koperasi.</li>
            <li>Edukasi keuangan, pendampingan, dan pengembangan kesejahteraan karyawan.</li>
            <li>Penyediaan kebutuhan sehari-hari dan layanan distribusi yang relevan bagi anggota.</li>
            <li>Rasa memiliki, transparansi, dan semangat gotong royong dalam kegiatan koperasi.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
