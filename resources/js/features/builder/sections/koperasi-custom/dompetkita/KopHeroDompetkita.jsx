import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopHeroDompetkita — Hero & Quick Nav KOPERASI DOMPETKITA BERSAMA
 * 100% exact match with KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * Every heading, text, button, and stat card is fully draggable, resizable, and editable in Right Inspector & Canvas.
 */
export default function KopHeroDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-hero-eyebrow', type: 'badge', props: { text: 'Koperasi untuk tumbuh bersama', variant: 'outline', background: 'transparent', color: '#D1F0ED' } },
    { id: 'dompet-hero-title', type: 'heading', props: { content: 'Koperasi DOMPETKITA BERSAMA.', level: 'h1', fontSize: 'clamp(42px,5.5vw,72px)', fontWeight: '800', color: '#ffffff' } },
    { id: 'dompet-hero-desc', type: 'text', props: { content: 'KOPERASI DOMPETKITA BERSAMA adalah koperasi umum yang menghimpun anggota dari kalangan karyawan perusahaan yang telah memiliki akun Dompetkita.id. Koperasi mengembangkan usaha dan layanan berdasarkan kebutuhan anggota, dengan tata kelola yang transparan, bertanggung jawab, dan berorientasi pada kesejahteraan bersama.', fontSize: '17px', color: '#E2E8F0' } },
    { id: 'dompet-hero-btn1', type: 'button', props: { label: 'Pelajari keanggotaan ↗', href: '#anggota', variant: 'primary', background: '#FFFFFF', color: '#0F2942', fontWeight: '600' } },
    { id: 'dompet-hero-btn2', type: 'button', props: { label: 'Jelajahi unit usaha →', href: '#usaha', variant: 'outline', background: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.5)', fontWeight: '600' } },
    {
      id: 'dompet-stat1-card', type: 'card',
      props: { background: 'rgba(255,255,255,0.045)', borderColor: 'rgba(255,255,255,0.14)', borderWidth: '1px', borderRadius: '13px', padding: '19px 17px 18px', width: '100%' },
      childrenComponents: [
        { id: 'dompet-hero-stat1-val', type: 'heading', props: { content: '1 orang = 1 suara', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff' } },
        { id: 'dompet-hero-stat1-lbl', type: 'text', props: { content: 'di Rapat Anggota', fontSize: '14px', color: '#E2E8F0' } },
      ],
    },
    {
      id: 'dompet-stat2-card', type: 'card',
      props: { background: 'rgba(255,255,255,0.045)', borderColor: 'rgba(255,255,255,0.14)', borderWidth: '1px', borderRadius: '13px', padding: '19px 17px 18px', width: '100%' },
      childrenComponents: [
        { id: 'dompet-hero-stat2-val', type: 'heading', props: { content: '5 tahun', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff' } },
        { id: 'dompet-hero-stat2-lbl', type: 'text', props: { content: 'masa jabatan pengurus', fontSize: '14px', color: '#E2E8F0' } },
      ],
    },
    {
      id: 'dompet-stat3-card', type: 'card',
      props: { background: 'rgba(255,255,255,0.045)', borderColor: 'rgba(255,255,255,0.14)', borderWidth: '1px', borderRadius: '13px', padding: '19px 17px 18px', width: '100%' },
      childrenComponents: [
        { id: 'dompet-hero-stat3-val', type: 'heading', props: { content: 'Min. 1×/tahun', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff' } },
        { id: 'dompet-hero-stat3-lbl', type: 'text', props: { content: 'Rapat Anggota Tahunan', fontSize: '14px', color: '#E2E8F0' } },
      ],
    },
    {
      id: 'dompet-stat4-card', type: 'card',
      props: { background: 'rgba(255,255,255,0.045)', borderColor: 'rgba(255,255,255,0.14)', borderWidth: '1px', borderRadius: '13px', padding: '19px 17px 18px', width: '100%' },
      childrenComponents: [
        { id: 'dompet-hero-stat4-val', type: 'heading', props: { content: '5 bagian', level: 'h3', fontSize: '24px', fontWeight: '800', color: '#ffffff' } },
        { id: 'dompet-hero-stat4-lbl', type: 'text', props: { content: 'pembagian SHU', fontSize: '14px', color: '#E2E8F0' } },
      ],
    },
    {
      id: 'dompet-hero-illustration',
      type: 'image',
      props: {
        alt: 'Ilustrasi Tiga Karyawan Terhubung Dompet Digital',
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
        svgContent: '<svg viewBox="0 0 480 400" role="img" aria-label="Ilustrasi tiga karyawan terhubung dengan dompet digital di ponsel"><circle cx="240" cy="190" r="172" fill="#FFFFFF" fillOpacity=".07" /><circle cx="240" cy="190" r="196" fill="none" stroke="#F59E0B" strokeOpacity=".55" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" /><ellipse cx="240" cy="382" rx="200" ry="8" fill="#FFFFFF" fillOpacity=".1" /><rect x="180" y="24" width="120" height="232" rx="24" fill="#0E2C3E" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="2" /><rect x="190" y="46" width="100" height="198" rx="14" fill="#FFFFFF" /><rect x="225" y="32" width="30" height="5" rx="2.5" fill="#FFFFFF" fillOpacity=".35" /><g transform="translate(226, 52) scale(0.4375)"><circle cx="32" cy="32" r="30" fill="#0F2942" /><circle cx="32" cy="32" r="28.5" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3.2 2.2" /><circle cx="32" cy="32" r="23" fill="#0D9488" /><path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" /><path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F59E0B" /></g><rect x="205" y="92" width="70" height="46" rx="10" fill="#0D9488" /><rect x="252" y="107" width="30" height="16" rx="8" fill="#F59E0B" /><circle cx="266" cy="115" r="3" fill="#0F2942" /><rect x="205" y="154" width="70" height="8" rx="4" fill="#E2E8F0" /><rect x="205" y="170" width="46" height="8" rx="4" fill="#E2E8F0" /><rect x="205" y="200" width="70" height="22" rx="11" fill="#F59E0B" /><path d="M150 276C150 200 178 170 194 150" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" /><path d="M330 276C330 200 302 170 286 150" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" /><g transform="translate(345 92)"><circle r="22" fill="#F59E0B" /><circle r="14" fill="none" stroke="#0F2942" strokeOpacity=".35" strokeWidth="2" /></g><g transform="translate(130 120)"><circle r="16" fill="#F59E0B" /><circle r="10" fill="none" stroke="#0F2942" strokeOpacity=".35" strokeWidth="2" /></g><g transform="translate(372 196)"><circle r="12" fill="#F59E0B" /><circle r="7" fill="none" stroke="#0F2942" strokeOpacity=".35" strokeWidth="2" /></g><path d="M120 380v-28a30 30 0 0 1 60 0v28z" fill="#36B6C4" /><circle cx="150" cy="300" r="20" fill="#F1C7A0" /><path d="M130 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#2A2A33" /><path d="M208 380v-38a32 32 0 0 1 64 0v38z" fill="#F59E0B" /><circle cx="240" cy="288" r="22" fill="#C98F62" /><path d="M218 286a22 22 0 0 1 44 0c-10-9-34-9-44 0z" fill="#2A2A33" /><path d="M232 322l8 10 8-10" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M300 380v-28a30 30 0 0 1 60 0v28z" fill="#10B981" /><circle cx="330" cy="300" r="20" fill="#8D5A3B" /><path d="M310 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#2A2A33" /></svg>',
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
  const statCards = lc.filter(c => c.type === 'card' || (c.id && c.id.includes('stat') && c.id.includes('card')));

  return (
    <div className="dk-root">
      <header className="hero">
        <div className="stripe" aria-hidden="true" />
        <div className="wrap">
          <div className="hero-grid" id="top">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" /> {renderLayoutComponents(getComp('dompet-hero-eyebrow'), sectionId)}
              </p>
              <h1>
                {renderLayoutComponents(getComp('dompet-hero-title'), sectionId)}
              </h1>
              <p>
                {renderLayoutComponents(getComp('dompet-hero-desc'), sectionId)}
              </p>
              <div className="btns">
                {renderLayoutComponents(getComp('dompet-hero-btn1'), sectionId)}
                {renderLayoutComponents(getComp('dompet-hero-btn2'), sectionId)}
              </div>
            </div>

            <figure className="hero-art">
              {renderLayoutComponents(getComp('dompet-hero-illustration'), sectionId)}
              <figcaption>KOPERASI DOMPETKITA BERSAMA, Bertumbuh dan Sejahtera Bersama</figcaption>
            </figure>
          </div>
          <div className="nums">
            {renderLayoutComponents(statCards, sectionId)}
          </div>
        </div>
      </header>
    </div>
  );
}
