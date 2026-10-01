import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgEventsProfessional
 * Prestigious event agenda & congress calendar for professional association — navy/gold.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function OrgEventsProfessional({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'evt-badge', type: 'badge', props: { text: '📅 AGENDA & EVENT NASIONAL 2026', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
    { id: 'evt-title', type: 'heading', props: { content: 'Kalender Kegiatan, Seminar & Kongres Nasional', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'evt-desc', type: 'paragraph', props: { content: 'Ikuti rangkaian agenda ilmiah, rapat kerja nasional, dan forum sertifikasi kompetensi bersama para pakar dan regulator terkemuka di Indonesia.', fontSize: '16px', color: '#cbd5e1' } },
    
    // Event 1 Card
    {
      id: 'card-e1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0e1b30 0%, #081120 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'e1-tag', type: 'badge', props: { text: 'KONGRES UTAMA · 15 SKP RESMI', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
        { id: 'e1-title', type: 'heading', props: { content: 'Kongres Nasional XXV — Masa Depan Standar Profesi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'e1-date', type: 'heading', props: { content: '12–14 Maret 2026 · Jakarta Convention Center', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#fbbf24' } },
        { id: 'e1-desc', type: 'paragraph', props: { content: 'Forum tahunan akbar penetapan arah regulasi industri, sertifikasi standar kompetensi baru 2026, dan pemilihan dewan pengurus pusat periode 2026–2030.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Event 2 Card
    {
      id: 'card-e2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0e1b30 0%, #081120 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'e2-tag', type: 'badge', props: { text: 'SIMPOSIUM NASIONAL · 8 SKP RESMI', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
        { id: 'e2-title', type: 'heading', props: { content: 'Simposium Nasional: Integrasi AI & Etika Profesi Modern', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'e2-date', type: 'heading', props: { content: '8 Mei 2026 · Grand City Surabaya & Hybrid', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#fbbf24' } },
        { id: 'e2-desc', type: 'paragraph', props: { content: 'Panel diskusi bersama 12 narasumber dari kementerian, praktisi global, dan akademisi mengenai otomatisasi serta perlindungan standar etika kerja.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    // Event 3 Card
    {
      id: 'card-e3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0e1b30 0%, #081120 100%)', borderColor: 'rgba(217,119,6,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'e3-tag', type: 'badge', props: { text: 'ANUGERAH & GALA · EKSKLUSIF ANGGOTA', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
        { id: 'e3-title', type: 'heading', props: { content: 'Gala Dinner & Malam Anugerah Insan Profesi 2026', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'e3-date', type: 'heading', props: { content: '20 Desember 2026 · Nusa Dua Convention Center Bali', level: 'h4', fontSize: '13px', fontWeight: '700', color: '#fbbf24' } },
        { id: 'e3-desc', type: 'paragraph', props: { content: 'Malam penganugerahan penghargaan prestisius bagi tokoh berprestasi, inovator muda teladan, dan mitra korporasi teladan sepanjang tahun 2026.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    { id: 'evt-cta-btn', type: 'button', props: { label: 'Lihat Semua Agenda 2026 ⚜', href: '#events', variant: 'primary', size: 'large', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'evt-badge');
  const titleC = lc.filter(c => c.id === 'evt-title');
  const descC = lc.filter(c => c.id === 'evt-desc');
  const ctaBtn = lc.filter(c => c.id === 'evt-cta-btn');
  const cardE1 = lc.filter(c => c.id === 'card-e1');
  const cardE2 = lc.filter(c => c.id === 'card-e2');
  const cardE3 = lc.filter(c => c.id === 'card-e3');

  return (
    <section className="relative bg-[#040812] py-20 lg:py-28 overflow-hidden text-slate-100">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div>{renderLayoutComponents(cardE1, sectionId)}</div>
          <div>{renderLayoutComponents(cardE2, sectionId)}</div>
          <div>{renderLayoutComponents(cardE3, sectionId)}</div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-4">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
