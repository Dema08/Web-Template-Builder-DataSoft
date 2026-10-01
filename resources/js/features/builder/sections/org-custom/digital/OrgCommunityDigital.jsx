import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgCommunityDigital
 * 6 Community benefits & perks cards for tech innovators — cyber purple/cyan.
 * Fully supports right-inspector selection and property editing for cards, badges, buttons, and texts.
 */
export default function OrgCommunityDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'comm-badge', type: 'badge', props: { text: '🌐 KENAPA HARUS JOIN KOMUNITAS KAMI', variant: 'outline', background: 'rgba(6,182,212,0.15)', color: '#67e8f9', borderColor: 'rgba(6,182,212,0.45)' } },
    { id: 'comm-title', type: 'heading', props: { content: 'Fasilitas & Akses Eksklusif untuk Builder & Developer Indonesia', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#f1f5f9', letterSpacing: '-0.02em' } },
    { id: 'comm-desc', type: 'paragraph', props: { content: 'Kami membangun ekosistem pendukung menyeluruh agar setiap developer, designer, dan founder dapat bertumbuh secara karier, keterampilan teknis, dan finansial.', fontSize: '16px', color: '#cbd5e1' } },
    
    // 6 Benefit Cards
    {
      id: 'card-b1',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'b1-tag', type: 'badge', props: { text: '🧠 KARIER & SKILL', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'b1-title', type: 'heading', props: { content: 'Mentoring 1-on-1 dengan Tech Lead Senior', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
        { id: 'b1-desc', type: 'paragraph', props: { content: 'Sesi konsultasi privat dengan 200+ Principal Engineer, VP of Engineering, dan CTO dari tech company ternama Asia & Silicon Valley.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'card-b2',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'b2-tag', type: 'badge', props: { text: '💼 GLOBAL HIRING', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'b2-title', type: 'heading', props: { content: 'Portal Lowongan Kerja Remote Global', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
        { id: 'b2-desc', type: 'paragraph', props: { content: 'Akses khusus 500+ lowongan kerja remote & hybrid bergaji dollar/SGD tanpa perantara langsung ke hiring manager.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'card-b3',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'b3-tag', type: 'badge', props: { text: '🚀 LIVE CLASS', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'b3-title', type: 'heading', props: { content: '80+ Workshop & Tech Talk Gratis / Tahun', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
        { id: 'b3-desc', type: 'paragraph', props: { content: 'Kelas interaktif mingguan mencakup Large Language Models, System Design, DevOps Kubernetes, hingga Product Growth.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'card-b4',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'b4-tag', type: 'badge', props: { text: '💬 24/7 FORUM', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'b4-title', type: 'heading', props: { content: 'Forum Discord 24/7 & Code Review', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
        { id: 'b4-desc', type: 'paragraph', props: { content: 'Ruang kolaborasi aktif dengan 100+ channels topik, automated AI feedback bot, dan live voice study rooms setiap malam.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'card-b5',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'b5-tag', type: 'badge', props: { text: '🏅 VERIFIED BADGE', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'b5-title', type: 'heading', props: { content: 'Sertifikat & Verified Skill Badge', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
        { id: 'b5-desc', type: 'paragraph', props: { content: 'Badge digital terverifikasi on-chain yang diakui 100+ partner tech company sebagai portofolio resmi kemampuan teknismu.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },
    {
      id: 'card-b6',
      type: 'card',
      props: { background: 'linear-gradient(180deg, #0a0d26 0%, #050617 100%)', borderColor: 'rgba(6,182,212,0.25)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'xl', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'b6-tag', type: 'badge', props: { text: '💰 MONETISASI', variant: 'solid', background: 'rgba(6,182,212,0.2)', color: '#67e8f9' } },
        { id: 'b6-title', type: 'heading', props: { content: 'Revenue Share Proyek Komersial', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#f1f5f9' } },
        { id: 'b6-desc', type: 'paragraph', props: { content: 'Kontributor aktif proyek open-source komunitas mendapatkan bagian pendanaan hibah dan komisi lisensi enterprise software.', fontSize: '13px', color: '#94a3b8' } },
      ]
    },

    { id: 'comm-cta-btn', type: 'button', props: { label: 'Gabung Gratis Sekarang — Klaim Akses ⚡', href: '#join', variant: 'primary', size: 'large', radius: 'md', background: 'linear-gradient(135deg, #06b6d4, #6366f1)', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'comm-badge');
  const titleC = lc.filter(c => c.id === 'comm-title');
  const descC = lc.filter(c => c.id === 'comm-desc');
  const ctaBtn = lc.filter(c => c.id === 'comm-cta-btn');
  const cardB1 = lc.filter(c => c.id === 'card-b1');
  const cardB2 = lc.filter(c => c.id === 'card-b2');
  const cardB3 = lc.filter(c => c.id === 'card-b3');
  const cardB4 = lc.filter(c => c.id === 'card-b4');
  const cardB5 = lc.filter(c => c.id === 'card-b5');
  const cardB6 = lc.filter(c => c.id === 'card-b6');

  return (
    <section className="relative bg-[#040411] py-20 lg:py-28 overflow-hidden text-slate-100">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div>{renderLayoutComponents(cardB1, sectionId)}</div>
          <div>{renderLayoutComponents(cardB2, sectionId)}</div>
          <div>{renderLayoutComponents(cardB3, sectionId)}</div>
          <div>{renderLayoutComponents(cardB4, sectionId)}</div>
          <div>{renderLayoutComponents(cardB5, sectionId)}</div>
          <div>{renderLayoutComponents(cardB6, sectionId)}</div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
