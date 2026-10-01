import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgMembershipProfessional
 * Formal tiered membership section for professional association — navy/gold premium.
 * Fully supports right-inspector selection and property editing for cards, buttons, badges, and texts.
 */
export default function OrgMembershipProfessional({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'memb-badge', type: 'badge', props: { text: '⚜ KEANGGOTAAN RESMI 2026', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.45)' } },
    { id: 'memb-title', type: 'heading', props: { content: 'Bergabunglah, Bangun Reputasi & Jaringan Profesionalmu', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'memb-desc', type: 'paragraph', props: { content: 'Pilih jalur keanggotaan yang sesuai dengan jenjang karier dan kebutuhan institusi Anda. Dapatkan sertifikasi terakreditasi dan akses jejaring eksklusif.', fontSize: '16px', color: '#cbd5e1' } },
    
    // Tier 1 Card — Associate
    {
      id: 'card-m1',
      type: 'card',
      props: { background: '#0a1424', borderColor: 'rgba(217,119,6,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '28px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'm1-tag', type: 'badge', props: { text: 'PILIHAN PEMULA', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
        { id: 'm1-title', type: 'heading', props: { content: 'Anggota Muda (Associate)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'm1-price', type: 'heading', props: { content: 'Rp 500.000 / tahun', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'm1-desc', type: 'paragraph', props: { content: 'Bagi fresh graduate & praktisi pemula (<5 tahun). Dapatkan kartu anggota digital, buletin bulanan, dan 4 webinar kompetensi gratis.', fontSize: '14px', color: '#94a3b8' } },
        { id: 'm1-btn', type: 'button', props: { label: 'Daftar Associate', href: '#join', variant: 'outline', size: 'medium', radius: 'sm', background: 'rgba(15,23,42,0.6)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
      ]
    },

    // Tier 2 Card — Full Member
    {
      id: 'card-m2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #132238 0%, #0a1424 100%)', borderColor: '#d97706', borderWidth: '2px', borderRadius: '16px', padding: '28px', shadow: '2xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'm2-tag', type: 'badge', props: { text: 'REKOMENDASI UTAMA', variant: 'solid', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff' } },
        { id: 'm2-title', type: 'heading', props: { content: 'Anggota Penuh (Full Member)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'm2-price', type: 'heading', props: { content: 'Rp 1.500.000 / tahun', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'm2-desc', type: 'paragraph', props: { content: 'Untuk profesional senior berpengalaman (>5 tahun). Sertifikat resmi fisik, hak suara penuh pada Kongres Nasional, dan program mentoring privat.', fontSize: '14px', color: '#cbd5e1' } },
        { id: 'm2-btn', type: 'button', props: { label: 'Daftar Full Member ⚜', href: '#join', variant: 'primary', size: 'medium', radius: 'sm', background: 'linear-gradient(135deg, #d97706, #92400e)', color: '#ffffff', fontWeight: '700' } },
      ]
    },

    // Tier 3 Card — Corporate
    {
      id: 'card-m3',
      type: 'card',
      props: { background: '#0a1424', borderColor: 'rgba(217,119,6,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '28px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'm3-tag', type: 'badge', props: { text: 'UNTUK PERUSAHAAN', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.3)' } },
        { id: 'm3-title', type: 'heading', props: { content: 'Mitra Korporasi (Corporate)', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'm3-price', type: 'heading', props: { content: 'Rp 10.000.000 / tahun', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#fbbf24' } },
        { id: 'm3-desc', type: 'paragraph', props: { content: 'Bagi institusi, firma & korporasi. Sertifikasi hingga 10 staf, prioritas booth pameran, akses talenta terverifikasi, dan co-branding acara.', fontSize: '14px', color: '#94a3b8' } },
        { id: 'm3-btn', type: 'button', props: { label: 'Hubungi Tim Kemitraan', href: '#contact', variant: 'outline', size: 'medium', radius: 'sm', background: 'rgba(15,23,42,0.6)', color: '#fbbf24', borderColor: 'rgba(245,158,11,0.4)' } },
      ]
    },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'memb-badge');
  const titleC = lc.filter(c => c.id === 'memb-title');
  const descC = lc.filter(c => c.id === 'memb-desc');
  const cardM1 = lc.filter(c => c.id === 'card-m1');
  const cardM2 = lc.filter(c => c.id === 'card-m2');
  const cardM3 = lc.filter(c => c.id === 'card-m3');

  return (
    <section className="relative bg-[#070e1c] py-20 lg:py-28 overflow-hidden text-slate-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 3 Tiers Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div>{renderLayoutComponents(cardM1, sectionId)}</div>
          <div>{renderLayoutComponents(cardM2, sectionId)}</div>
          <div>{renderLayoutComponents(cardM3, sectionId)}</div>
        </div>
      </div>
    </section>
  );
}
