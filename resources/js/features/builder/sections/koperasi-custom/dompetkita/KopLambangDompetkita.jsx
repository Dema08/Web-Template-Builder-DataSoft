import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopLambangDompetkita — Tujuan dan Makna Lambang KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, description, objective card, and arti card is fully draggable, resizable, and editable.
 */
export default function KopLambangDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-lb-title', type: 'heading', props: { content: 'Tujuan dan makna lambang', level: 'h2' } },
    { id: 'dompet-lb-lead', type: 'text', props: { content: 'Koperasi berdiri untuk memperkuat kesejahteraan anggota melalui partisipasi, tata kelola yang transparan, dan kegiatan usaha yang sesuai kebutuhan bersama.', fontSize: '17px', color: '#475569' } },
    { id: 'dompet-lb-logoname', type: 'heading', props: { content: 'Logo KOPERASI DOMPETKITA BERSAMA', level: 'h3', fontSize: '22px', color: '#0D9488' } },
    { id: 'dompet-lb-logodesc', type: 'text', props: { content: 'Logo memadukan teratai sebagai lambang perkembangan dan kerja sama, bintang sebagai landasan Pancasila, serta lingkaran bergigi emas sebagai usaha yang terus berjalan. Bentuknya ringkas agar tetap jelas di layar, kartu anggota, dan dokumen.', fontSize: '16px', color: '#475569' } },

    // 2 Resizable and Draggable Objective Cards
    {
      id: 'dompet-lb-obj1-card', type: 'card',
      props: { background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%' },
      childrenComponents: [
        { id: 'dompet-lb-obj1-title', type: 'heading', props: { content: 'Kebutuhan anggota', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-obj1-desc', type: 'text', props: { content: 'Mengembangkan layanan dan kegiatan usaha berdasarkan kebutuhan anggota serta keputusan Rapat Anggota.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-obj2-card', type: 'card',
      props: { background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%' },
      childrenComponents: [
        { id: 'dompet-lb-obj2-title', type: 'heading', props: { content: 'Kesejahteraan bersama', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-obj2-desc', type: 'text', props: { content: 'Mendorong manfaat ekonomi yang bertanggung jawab, terukur, dan sesuai kemampuan koperasi.', fontSize: '15px', color: '#475569' } },
      ],
    },

    // 9 Resizable and Draggable Arti Lambang Cards
    {
      id: 'dompet-lb-art1-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="16" strokeDasharray="3.5 2.5" strokeWidth="3" /><circle cx="24" cy="24" r="10" strokeWidth="2" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art1-title', type: 'heading', props: { content: 'Lingkaran bergigi emas', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art1-desc', type: 'text', props: { content: 'Usaha karya yang terus menerus; gigi roda melambangkan kegiatan usaha yang bergerak bersama.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-art2-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 38c-8-6-12-14-12-20a12 12 0 0 1 24 0c0 6-4 14-12 20z" /><path d="M24 38c-4-5-6-11-6-15a6 6 0 0 1 12 0c0 4-2 10-6 15z" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art2-title', type: 'heading', props: { content: 'Bunga teratai', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art2-desc', type: 'text', props: { content: 'Perkembangan, kemajuan, dan semangat kerja sama.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-art3-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 28c3 5 7 8 10 8s7-3 10-8" /><path d="M12 20c4 7 8 10 12 10s8-3 12-10" /><path d="M18 14c2 4 4 6 6 6s4-2 6-6" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art3-title', type: 'heading', props: { content: 'Kelopak yang bertaut', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art3-desc', type: 'text', props: { content: 'Persahabatan kokoh dan ikatan kekeluargaan antaranggota.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-art4-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 8l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art4-title', type: 'heading', props: { content: 'Bintang emas', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art4-desc', type: 'text', props: { content: 'Pancasila sebagai landasan idiil dan ideologi koperasi.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-art5-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 36h28M14 30h20M18 24h12" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art5-title', type: 'heading', props: { content: 'Garis emas di dasar', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art5-desc', type: 'text', props: { content: 'Dasar yang kokoh dan berakar: kepribadian Indonesia, simpanan anggota, dan tata kelola yang sehat.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-art6-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="16" strokeWidth="3" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art6-title', type: 'heading', props: { content: 'Bentuk lingkaran', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art6-desc', type: 'text', props: { content: 'Persatuan tanpa ujung dan keadilan sosial: setiap anggota memiliki satu suara.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-art7-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="10" width="13" height="28" rx="4" fill="#0F2942" stroke="none" /><rect x="25" y="10" width="13" height="28" rx="4" fill="#0D9488" stroke="none" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art7-title', type: 'heading', props: { content: 'Biru tua dan teal', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art7-desc', type: 'text', props: { content: 'Kepercayaan, ketenangan, dan pengelolaan yang transparan.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-art8-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="24" r="10" fill="#F59E0B" stroke="none" /><circle cx="30" cy="24" r="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art8-title', type: 'heading', props: { content: 'Emas dan putih', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art8-desc', type: 'text', props: { content: 'Emas melambangkan kemakmuran anggota dan masyarakat; putih melambangkan kejujuran dan niat yang bersih.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-art9-card', type: 'card',
      props: {
        background: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: '1px', borderRadius: '17px', padding: '26px', width: '100%',
        iconSvg: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="14" width="32" height="20" rx="5" /><path d="M15 24h18M15 20h10M15 28h8" /></svg>',
      },
      childrenComponents: [
        { id: 'dompet-lb-art9-title', type: 'heading', props: { content: 'Tulisan KOPERASI DOMPETKITA BERSAMA', level: 'h3', fontSize: '18px', color: '#0D9488' } },
        { id: 'dompet-lb-art9-desc', type: 'text', props: { content: 'Identitas dan jati diri koperasi.', fontSize: '15px', color: '#475569' } },
      ],
    },
    {
      id: 'dompet-lb-logo-img',
      type: 'image',
      props: {
        alt: 'Logo KOPERASI DOMPETKITA BERSAMA',
        width: '132px',
        height: '132px',
        borderRadius: '50%',
        objectFit: 'contain',
        svgContent: '<svg viewBox="0 0 64 64" role="img" aria-label="Logo KOPERASI DOMPETKITA BERSAMA"><circle cx="32" cy="32" r="30" fill="#0F2942" /><circle cx="32" cy="32" r="28.5" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3.2 2.2" /><circle cx="32" cy="32" r="23" fill="#0D9488" /><path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" /><path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E2E8F0" /><path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E2E8F0" /><path d="M20 50.5h24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" /><path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F59E0B" /></svg>',
      },
    },
  ];

  const mergedComponents = defaultComponents.map(def => {
    const existing = components.find(c => c.id === def.id);
    if (existing) return existing;
    if (def.type === 'card' && Array.isArray(def.childrenComponents)) {
      const mergedChildren = def.childrenComponents.map(child => {
        const userChild = components.find(c => c.id === child.id);
        return userChild ? { ...child, props: { ...child.props, ...userChild.props } } : child;
      });
      return { ...def, childrenComponents: mergedChildren };
    }
    return def;
  });
  const childIds = new Set(
    mergedComponents
      .filter(c => c.type === 'card' && Array.isArray(c.childrenComponents))
      .flatMap(c => c.childrenComponents.map(ch => ch.id))
  );
  const extraComponents = components.filter(
    c => !defaultComponents.some(def => def.id === c.id) && !childIds.has(c.id)
  );
  const lc = [...mergedComponents, ...extraComponents];
  const getComp = id => lc.filter(c => c.id === id);
  const objCards = lc.filter(c => c.type === 'card' && c.id && c.id.includes('dompet-lb-obj'));
  const artiCards = lc.filter(c => c.type === 'card' && c.id && c.id.includes('dompet-lb-art'));

  return (
    <div className="dk-root">
      <section id="lambang">
        <div className="wrap">
          <h2>
            {renderLayoutComponents(getComp('dompet-lb-title'), sectionId)}
          </h2>
          <div className="lead">
            {renderLayoutComponents(getComp('dompet-lb-lead'), sectionId)}
          </div>

          <div className="logo-show">
            {renderLayoutComponents(getComp('dompet-lb-logo-img'), sectionId)}
            <div>
              <h3>
                {renderLayoutComponents(getComp('dompet-lb-logoname'), sectionId)}
              </h3>
              <p>
                {renderLayoutComponents(getComp('dompet-lb-logodesc'), sectionId)}
              </p>
            </div>
          </div>

          <div className="two grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: '24px' }}>
            {renderLayoutComponents(objCards, sectionId)}
          </div>

          <h3 style={{ marginTop: '48px', marginBottom: '14px', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif' }}>Arti lambang</h3>
          <div className="arti-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {renderLayoutComponents(artiCards, sectionId)}
          </div>
        </div>
      </section>
    </div>
  );
}
