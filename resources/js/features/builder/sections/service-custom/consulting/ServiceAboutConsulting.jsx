import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceAboutConsulting
 * Why choose us — dark about section with proven track record and methodology.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceAboutConsulting({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'cab-badge', type: 'badge', props: { content: '✦ MENGAPA ADVANTA PARTNERS', background: 'rgba(184,150,62,0.15)', color: '#d4af6a', size: 'medium' } },
    { id: 'cab-title', type: 'heading', props: { content: 'Metodologi Terbukti, Tim Senior, & Hasil yang Terukur', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff' } },
    { id: 'cab-desc', type: 'text', props: { content: 'Kami tidak sekadar memberikan laporan — kami berkolaborasi langsung dengan tim Anda untuk memastikan rekomendasi diimplementasikan dan menghasilkan dampak bisnis nyata yang terukur.', fontSize: '17px', color: '#94a3b8', lineHeight: '1.75' } },
    { id: 'cab-btn', type: 'button', props: { label: 'Pelajari Metodologi Kami →', href: '#methodology', variant: 'outline', size: 'medium', borderColor: '#d4af6a', color: '#d4af6a', fontWeight: '600' } },
    {
      id: 'ab-card-1',
      type: 'card',
      props: { background: '#111827', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(184,150,62,0.2)', padding: '28px' },
      childrenComponents: [
        { id: 'ac1-icon', type: 'icon', props: { name: 'Award', size: 28, color: '#d4af6a' } },
        { id: 'ac1-title', type: 'heading', props: { content: 'Tim Konsultan Senior Berpengalaman', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
        { id: 'ac1-desc', type: 'text', props: { content: 'Seluruh engagement dipimpin oleh mitra dan direktur dengan rata-rata 18 tahun pengalaman di industri klien, bukan oleh junior analyst.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
      ],
    },
    {
      id: 'ab-card-2',
      type: 'card',
      props: { background: '#111827', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(184,150,62,0.2)', padding: '28px' },
      childrenComponents: [
        { id: 'ac2-icon', type: 'icon', props: { name: 'Target', size: 28, color: '#d4af6a' } },
        { id: 'ac2-title', type: 'heading', props: { content: 'Pendekatan Berbasis Implementasi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
        { id: 'ac2-desc', type: 'text', props: { content: 'Kami memastikan setiap rekomendasi memiliki rencana implementasi konkret dengan KPI terukur dan timeline yang realistis untuk tim klien.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
      ],
    },
    {
      id: 'ab-card-3',
      type: 'card',
      props: { background: '#111827', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(184,150,62,0.2)', padding: '28px' },
      childrenComponents: [
        { id: 'ac3-icon', type: 'icon', props: { name: 'Globe', size: 28, color: '#d4af6a' } },
        { id: 'ac3-title', type: 'heading', props: { content: 'Jaringan Mitra Global Terpercaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
        { id: 'ac3-desc', type: 'text', props: { content: 'Kemitraan strategis dengan konsultan terkemuka di Singapura, Australia, Eropa, dan Amerika untuk mendukung proyek ekspansi internasional klien.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
      ],
    },
    {
      id: 'ab-card-4',
      type: 'card',
      props: { background: '#111827', borderRadius: '20px', borderWidth: '1px', borderColor: 'rgba(184,150,62,0.2)', padding: '28px' },
      childrenComponents: [
        { id: 'ac4-icon', type: 'icon', props: { name: 'ShieldCheck', size: 28, color: '#4ade80' } },
        { id: 'ac4-title', type: 'heading', props: { content: 'Kerahasiaan & Etika Profesional Tinggi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff' } },
        { id: 'ac4-desc', type: 'text', props: { content: 'Seluruh informasi klien terlindungi di bawah NDA ketat dengan protokol keamanan data kelas enterprise. Konflik kepentingan dikelola secara transparan.', fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-[#0d1627] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Copy */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div>{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          <div>{renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'button'), sectionId)}

          {/* Accent metrics */}
          <div className="mt-4 flex gap-8 pt-6 border-t border-slate-800">
            <div>
              <p className="text-3xl font-black text-amber-400">IDR 22T</p>
              <p className="text-xs text-slate-500 mt-1">Nilai Proyek Ditangani</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">48</p>
              <p className="text-xs text-slate-500 mt-1">Partner Aktif</p>
            </div>
            <div>
              <p className="text-3xl font-black text-green-400">15</p>
              <p className="text-xs text-slate-500 mt-1">Industri Dilayani</p>
            </div>
          </div>
        </div>

        {/* Right: 2×2 Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
