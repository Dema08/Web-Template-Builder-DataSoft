import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopHeroPuskopolda
 * Official Hero & Metric Statistics Section for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopHeroPuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'puskopolda-hero-badge', type: 'badge', props: { text: 'PUSAT KOPERASI KEPOLISIAN DAERAH', variant: 'outline', background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.35)' } },
    { id: 'puskopolda-hero-title', type: 'heading', props: { content: 'PUSKOPOLDA', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'puskopolda-hero-desc', type: 'paragraph', props: { content: 'Membangun Kesejahteraan Anggota Melalui Koperasi yang Profesional, Transparan, dan Berkelanjutan', fontSize: '18px', color: '#f8fafc' } },
    { id: 'puskopolda-hero-btn1', type: 'button', props: { label: 'Tentang Kami', href: '#tentang', variant: 'primary', size: 'large', radius: 'md', background: '#ffffff', color: '#1e40af', fontWeight: '700' } },
    { id: 'puskopolda-hero-btn2', type: 'button', props: { label: 'Layanan Kami', href: '#unit-usaha', variant: 'outline', size: 'large', radius: 'md', background: 'transparent', color: '#ffffff', borderColor: '#ffffff', fontWeight: '600' } },

    // 5 Metric Stat Cards
    {
      id: 'puskopolda-stat1-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
      childrenComponents: [
        { id: 'puskopolda-stat1-num', type: 'heading', props: { content: '2.500+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
        { id: 'puskopolda-stat1-lbl', type: 'paragraph', props: { content: 'Jumlah Anggota', fontSize: '13px', color: '#475569', fontWeight: '600' } },
      ]
    },
    {
      id: 'puskopolda-stat2-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
      childrenComponents: [
        { id: 'puskopolda-stat2-num', type: 'heading', props: { content: '8', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
        { id: 'puskopolda-stat2-lbl', type: 'paragraph', props: { content: 'Jumlah Unit Usaha', fontSize: '13px', color: '#475569', fontWeight: '600' } },
      ]
    },
    {
      id: 'puskopolda-stat3-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
      childrenComponents: [
        { id: 'puskopolda-stat3-num', type: 'heading', props: { content: '1998', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
        { id: 'puskopolda-stat3-lbl', type: 'paragraph', props: { content: 'Tahun Berdiri', fontSize: '13px', color: '#475569', fontWeight: '600' } },
      ]
    },
    {
      id: 'puskopolda-stat4-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
      childrenComponents: [
        { id: 'puskopolda-stat4-num', type: 'heading', props: { content: '25+', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
        { id: 'puskopolda-stat4-lbl', type: 'paragraph', props: { content: 'Jumlah Mitra', fontSize: '13px', color: '#475569', fontWeight: '600' } },
      ]
    },
    {
      id: 'puskopolda-stat5-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '12px', padding: '16px', shadow: 'md' },
      childrenComponents: [
        { id: 'puskopolda-stat5-num', type: 'heading', props: { content: '12', level: 'h3', fontSize: '28px', fontWeight: '900', color: '#1e40af' } },
        { id: 'puskopolda-stat5-lbl', type: 'paragraph', props: { content: 'Cabang / Unit Kerja', fontSize: '13px', color: '#475569', fontWeight: '600' } },
      ]
    },

    // Hero Visual Showcase Card
    {
      id: 'puskopolda-hero-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1e40af 0%, #172554 100%)', borderColor: '#60a5fa', borderWidth: '2px', borderRadius: '20px', padding: '20px', shadow: '2xl' },
      childrenComponents: [
        {
          id: 'puskopolda-hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80',
            alt: 'Gedung Pusat Koperasi Kepolisian Daerah',
            borderRadius: '14px',
            width: '100%',
            height: '340px',
            objectFit: 'cover',
          }
        },
        { id: 'puskopolda-card-badge', type: 'badge', props: { text: '🏛️ GRAHA PUSKOPOLDA TERPADU', variant: 'solid', background: 'rgba(255,255,255,0.2)', color: '#ffffff' } },
        { id: 'puskopolda-card-title', type: 'heading', props: { content: 'Pusat Pelayanan & Tata Kelola Usaha Koperasi Modern', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#ffffff' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'puskopolda-hero-badge' || c.id === 'hero-badge');
  const titleC = lc.filter(c => c.id === 'puskopolda-hero-title' || c.id === 'hero-title');
  const descC = lc.filter(c => c.id === 'puskopolda-hero-desc' || c.id === 'hero-subtitle');
  const btn1C = lc.filter(c => c.id === 'puskopolda-hero-btn1' || c.id === 'hero-btn-primary');
  const btn2C = lc.filter(c => c.id === 'puskopolda-hero-btn2' || c.id === 'hero-btn-secondary');
  const stat1 = lc.filter(c => c.id === 'puskopolda-stat1-card' || c.id === 'stat-card-1');
  const stat2 = lc.filter(c => c.id === 'puskopolda-stat2-card' || c.id === 'stat-card-2');
  const stat3 = lc.filter(c => c.id === 'puskopolda-stat3-card' || c.id === 'stat-card-3');
  const stat4 = lc.filter(c => c.id === 'puskopolda-stat4-card' || c.id === 'stat-card-4');
  const stat5 = lc.filter(c => c.id === 'puskopolda-stat5-card' || c.id === 'stat-card-5');
  const heroCard = lc.filter(c => c.id === 'puskopolda-hero-card' || c.type === 'card' && String(c.id).includes('hero'));

  return (
    <section id="beranda" className="relative min-h-[88vh] flex flex-col justify-center bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#1e3a8a] text-white overflow-hidden py-16 lg:py-20">
      {/* Subtle Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
            
            <div className="space-y-4">
              <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
              <div className="leading-relaxed text-blue-100 max-w-xl">{renderLayoutComponents(descC, sectionId)}</div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {renderLayoutComponents(btn1C, sectionId)}
              {renderLayoutComponents(btn2C, sectionId)}
            </div>
          </div>

          {/* Right Column Showcase */}
          <div className="lg:col-span-6">
            {heroCard.length > 0 ? (
              renderLayoutComponents(heroCard, sectionId)
            ) : (
              <div className="rounded-2xl border-2 border-blue-300/40 p-4 bg-blue-900/40 backdrop-blur-sm shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=80"
                  alt="Gedung Puskopolda"
                  className="rounded-xl w-full h-80 object-cover"
                />
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-blue-800 text-white">
                    🏛️ KANTOR PUSAT PUSKOPOLDA
                  </span>
                  <p className="mt-2 text-sm text-blue-100">
                    Mewadahi pelayanan simpan pinjam, perdagangan sembako, dan aneka usaha terpadu.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 5 Stats Strip Section */}
        <div className="mt-14 pt-8 border-t border-blue-400/30">
          <div className="bg-[#dbeafe] rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div>{renderLayoutComponents(stat1, sectionId)}</div>
              <div>{renderLayoutComponents(stat2, sectionId)}</div>
              <div>{renderLayoutComponents(stat3, sectionId)}</div>
              <div>{renderLayoutComponents(stat4, sectionId)}</div>
              <div>{renderLayoutComponents(stat5, sectionId)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
