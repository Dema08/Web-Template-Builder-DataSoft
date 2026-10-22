import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopLambangDompetkita — Tujuan dan Makna Lambang KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 */
export default function KopLambangDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-lb-title', type: 'heading', props: { content: 'Tujuan dan makna lambang', level: 'h2' } },
    { id: 'dompet-lb-lead', type: 'paragraph', props: { content: 'Koperasi berdiri untuk memperkuat kesejahteraan anggota melalui partisipasi, tata kelola yang transparan, dan kegiatan usaha yang sesuai kebutuhan bersama.' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-lb-title');
  const leadC = lc.filter(c => c.id === 'dompet-lb-lead');

  return (
    <div className="dk-root">
      <section id="lambang">
        <div className="wrap">
          <h2>
            {titleC.length > 0 ? renderLayoutComponents(titleC, sectionId) : 'Tujuan dan makna lambang'}
          </h2>
          <p className="lead">
            {leadC.length > 0 ? renderLayoutComponents(leadC, sectionId) : 'Koperasi berdiri untuk memperkuat kesejahteraan anggota melalui partisipasi, tata kelola yang transparan, dan kegiatan usaha yang sesuai kebutuhan bersama.'}
          </p>

          <div className="logo-show">
            <svg className="logo big" viewBox="0 0 64 64" role="img" aria-label="Logo KOPERASI DOMPETKITA BERSAMA">
              <circle cx="32" cy="32" r="30" fill="#123B52" />
              <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F4B544" strokeWidth="3" strokeDasharray="3.2 2.2" />
              <circle cx="32" cy="32" r="23" fill="#147D92" />
              <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
              <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E5F5F7" />
              <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E5F5F7" />
              <path d="M20 50.5h24" stroke="#F4B544" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F4B544" />
            </svg>
            <div>
              <h3>Logo KOPERASI DOMPETKITA BERSAMA</h3>
              <p>Logo memadukan teratai sebagai lambang perkembangan dan kerja sama, bintang sebagai landasan Pancasila, serta lingkaran bergigi emas sebagai usaha yang terus berjalan. Bentuknya ringkas agar tetap jelas di layar, kartu anggota, dan dokumen.</p>
            </div>
          </div>

          <div className="g3" style={{ marginBottom: '36px' }}>
            <div className="card">
              <h3>Kebutuhan anggota</h3>
              <p>Mengembangkan layanan dan kegiatan usaha berdasarkan kebutuhan anggota serta keputusan Rapat Anggota.</p>
            </div>
            <div className="card">
              <h3>Kesejahteraan bersama</h3>
              <p>Mendorong manfaat ekonomi yang bertanggung jawab, terukur, dan sesuai kemampuan koperasi.</p>
            </div>
          </div>

          <h3 style={{ marginBottom: '14px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>Arti lambang</h3>
          <div className="g3">
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="5" /><circle cx="20" cy="20" r="12" strokeWidth="5" strokeDasharray="4.2 4.2" /></svg>
              </span>
              <h3>Lingkaran bergigi emas</h3>
              <p>Usaha karya yang terus menerus; gigi roda melambangkan kegiatan usaha yang bergerak bersama.</p>
            </div>
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 31c-5-3-6-10 0-15 6 5 5 12 0 15z" /><path d="M19 32c-7 0-11-5-11-10 6 0 10 4 11 10z" /><path d="M21 32c7 0 11-5 11-10-6 0-10 4-11 10z" /></svg>
              </span>
              <h3>Bunga teratai</h3>
              <p>Perkembangan, kemajuan, dan semangat kerja sama.</p>
            </div>
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="14" cy="23" r="8" /><circle cx="26" cy="23" r="8" /><circle cx="20" cy="14" r="8" /></svg>
              </span>
              <h3>Kelopak yang bertaut</h3>
              <p>Persahabatan kokoh dan ikatan kekeluargaan antaranggota.</p>
            </div>
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5l4.2 8.6 9.4 1.4-6.8 6.6 1.6 9.4L20 26.4l-8.4 4.6 1.6-9.4-6.8-6.6 9.4-1.4z" /></svg>
              </span>
              <h3>Bintang emas</h3>
              <p>Pancasila sebagai landasan idiil dan ideologi koperasi.</p>
            </div>
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 32h28M13 25v7M20 18v14M27 25v7" /></svg>
              </span>
              <h3>Garis emas di dasar</h3>
              <p>Dasar yang kokoh dan berakar: kepribadian Indonesia, simpanan anggota, dan tata kelola yang sehat.</p>
            </div>
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="14" /><circle cx="20" cy="20" r="7" /></svg>
              </span>
              <h3>Bentuk lingkaran</h3>
              <p>Persatuan tanpa ujung dan keadilan sosial: setiap anggota memiliki satu suara.</p>
            </div>
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="15" cy="20" r="9" style={{ fill: '#123B52', stroke: '#123B52' }} /><circle cx="25" cy="20" r="9" style={{ fill: '#147D92', stroke: '#147D92' }} /></svg>
              </span>
              <h3>Biru tua dan teal</h3>
              <p>Kepercayaan, ketenangan, dan pengelolaan yang transparan.</p>
            </div>
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="15" cy="20" r="9" style={{ fill: '#F4B544', stroke: '#F4B544' }} /><circle cx="25" cy="20" r="9" style={{ fill: '#FFFFFF' }} /></svg>
              </span>
              <h3>Emas dan putih</h3>
              <p>Emas melambangkan kemakmuran anggota dan masyarakat; putih melambangkan kejujuran dan niat yang bersih.</p>
            </div>
            <div className="card">
              <span className="ico sm">
                <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 11h28v18H6z" /><path d="M12 18h16M12 23h10" /></svg>
              </span>
              <h3>Tulisan KOPERASI DOMPETKITA BERSAMA</h3>
              <p>Identitas dan jati diri koperasi.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
