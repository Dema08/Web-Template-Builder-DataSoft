import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopVisiMisiDompetkita — Visi & Misi KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, lead, and mission item is fully editable in Right Inspector & Canvas.
 */
export default function KopVisiMisiDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-vm-title', type: 'heading', props: { content: 'Membangun kesejahteraan anggota melalui koperasi yang adil, transparan, dan bertanggung jawab.', level: 'h2' } },
    { id: 'dompet-vm-lead', type: 'text', props: { content: 'Itulah visi kami: anggota bekerja sama mengembangkan usaha dan memperoleh manfaat ekonomi secara bersama.', fontSize: '17px', color: '#475569' } },
    { id: 'dompet-misi-1', type: 'text', props: { content: 'Pengembangan layanan keuangan yang sesuai prinsip dan ketentuan yang dipilih serta disahkan koperasi.', fontSize: '16.5px', color: '#0F172A' } },
    { id: 'dompet-misi-2', type: 'text', props: { content: 'Edukasi keuangan, pendampingan, dan pengembangan kesejahteraan karyawan.', fontSize: '16.5px', color: '#0F172A' } },
    { id: 'dompet-misi-3', type: 'text', props: { content: 'Penyediaan kebutuhan sehari-hari dan layanan distribusi yang relevan bagi anggota.', fontSize: '16.5px', color: '#0F172A' } },
    { id: 'dompet-misi-4', type: 'text', props: { content: 'Rasa memiliki, transparansi, dan semangat gotong royong dalam kegiatan koperasi.', fontSize: '16.5px', color: '#0F172A' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const getComp = id => lc.filter(c => c.id === id);

  return (
    <div className="dk-root">
      <section id="misi">
        <div className="wrap two">
          <div>
            <h2>
              {renderLayoutComponents(getComp('dompet-vm-title'), sectionId)}
            </h2>
            <div className="lead">
              {renderLayoutComponents(getComp('dompet-vm-lead'), sectionId)}
            </div>
          </div>
          <ul className="misi">
            <li>
              {renderLayoutComponents(getComp('dompet-misi-1'), sectionId)}
            </li>
            <li>
              {renderLayoutComponents(getComp('dompet-misi-2'), sectionId)}
            </li>
            <li>
              {renderLayoutComponents(getComp('dompet-misi-3'), sectionId)}
            </li>
            <li>
              {renderLayoutComponents(getComp('dompet-misi-4'), sectionId)}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
