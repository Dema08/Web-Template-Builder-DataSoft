import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServiceServicesAgency
 * Creative service offerings with bold gradient card accents.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServiceServicesAgency({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'agsvc-badge', type: 'badge', props: { content: '✦ APA YANG KAMI LAKUKAN', background: 'rgba(124,58,237,0.2)', color: '#c4b5fd', size: 'medium' } },
    { id: 'agsvc-title', type: 'heading', props: { content: 'Layanan Kreatif Terlengkap untuk Brand yang Ingin Menonjol', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center' } },
    { id: 'agsvc-desc', type: 'text', props: { content: 'Dari strategi brand identity hingga kampanye media sosial yang viral — kami menangani segalanya dengan standar kreatif tertinggi.', fontSize: '16px', color: '#a78bfa', align: 'center' } },
    {
      id: 'agsvc-card-1',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1e0545, #2d0f6b)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(124,58,237,0.4)', padding: '32px' },
      childrenComponents: [
        { id: 'agsc1-num', type: 'heading', props: { content: '01', level: 'h3', fontSize: '40px', fontWeight: '900', color: 'rgba(167,139,250,0.3)' } },
        { id: 'agsc1-title', type: 'heading', props: { content: 'Brand Identity & Visual Design', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'agsc1-desc', type: 'text', props: { content: 'Logo system, brand guidelines, color palette, typography, dan seluruh aset visual yang membangun identitas brand yang kuat, konsisten, dan berkesan.', fontSize: '14px', color: '#c4b5fd', lineHeight: '1.6' } },
        { id: 'agsc1-btn', type: 'button', props: { label: 'Lihat Contoh Karya →', href: '#portfolio', variant: 'ghost', size: 'small', color: '#a78bfa' } },
      ],
    },
    {
      id: 'agsvc-card-2',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #3b0764, #6b1d8a)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(236,72,153,0.4)', padding: '32px' },
      childrenComponents: [
        { id: 'agsc2-num', type: 'heading', props: { content: '02', level: 'h3', fontSize: '40px', fontWeight: '900', color: 'rgba(249,168,212,0.3)' } },
        { id: 'agsc2-title', type: 'heading', props: { content: 'Web Design & Development', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'agsc2-desc', type: 'text', props: { content: 'Website premium dengan desain unik bespoke, animasi micro-interaction, performa lighthouse 90+, dan dioptimalkan untuk konversi dan SEO.', fontSize: '14px', color: '#f9a8d4', lineHeight: '1.6' } },
        { id: 'agsc2-btn', type: 'button', props: { label: 'Lihat Contoh Karya →', href: '#portfolio', variant: 'ghost', size: 'small', color: '#f472b6' } },
      ],
    },
    {
      id: 'agsvc-card-3',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1a0735, #2a0e5a)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(99,102,241,0.4)', padding: '32px' },
      childrenComponents: [
        { id: 'agsc3-num', type: 'heading', props: { content: '03', level: 'h3', fontSize: '40px', fontWeight: '900', color: 'rgba(165,180,252,0.3)' } },
        { id: 'agsc3-title', type: 'heading', props: { content: 'Social Media & Content Strategy', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'agsc3-desc', type: 'text', props: { content: 'Perencanaan konten strategis, copywriting, produksi konten visual/video reels, dan manajemen komunitas media sosial yang mendorong engagement tinggi.', fontSize: '14px', color: '#c7d2fe', lineHeight: '1.6' } },
        { id: 'agsc3-btn', type: 'button', props: { label: 'Lihat Contoh Karya →', href: '#portfolio', variant: 'ghost', size: 'small', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'agsvc-card-4',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #130520, #221040)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(139,92,246,0.4)', padding: '32px' },
      childrenComponents: [
        { id: 'agsc4-num', type: 'heading', props: { content: '04', level: 'h3', fontSize: '40px', fontWeight: '900', color: 'rgba(196,181,253,0.3)' } },
        { id: 'agsc4-title', type: 'heading', props: { content: 'Video Production & Motion Graphics', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'agsc4-desc', type: 'text', props: { content: 'Produksi video TVC, iklan digital, animasi explainer 2D/3D, motion graphics interaktif, dan konten video pendek untuk platform TikTok & Instagram Reels.', fontSize: '14px', color: '#ddd6fe', lineHeight: '1.6' } },
        { id: 'agsc4-btn', type: 'button', props: { label: 'Lihat Contoh Karya →', href: '#portfolio', variant: 'ghost', size: 'small', color: '#c4b5fd' } },
      ],
    },
    {
      id: 'agsvc-card-5',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #1f0531, #38096b)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(124,58,237,0.4)', padding: '32px' },
      childrenComponents: [
        { id: 'agsc5-num', type: 'heading', props: { content: '05', level: 'h3', fontSize: '40px', fontWeight: '900', color: 'rgba(167,139,250,0.3)' } },
        { id: 'agsc5-title', type: 'heading', props: { content: 'Performance Marketing & SEO', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'agsc5-desc', type: 'text', props: { content: 'Kampanye iklan Google Ads, Meta Ads, dan TikTok Ads yang dioptimalkan berbasis data, strategi SEO on-page dan off-page untuk mendominasi hasil pencarian.', fontSize: '14px', color: '#c4b5fd', lineHeight: '1.6' } },
        { id: 'agsc5-btn', type: 'button', props: { label: 'Lihat Contoh Karya →', href: '#portfolio', variant: 'ghost', size: 'small', color: '#a78bfa' } },
      ],
    },
    {
      id: 'agsvc-card-6',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #2d0643, #4a0e7a)', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(236,72,153,0.4)', padding: '32px' },
      childrenComponents: [
        { id: 'agsc6-num', type: 'heading', props: { content: '06', level: 'h3', fontSize: '40px', fontWeight: '900', color: 'rgba(249,168,212,0.3)' } },
        { id: 'agsc6-title', type: 'heading', props: { content: 'UI/UX Design & App Prototyping', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
        { id: 'agsc6-desc', type: 'text', props: { content: 'Desain antarmuka aplikasi mobile dan web yang intuitif, research pengguna (UX research), prototyping interaktif Figma, dan panduan desain sistem yang komprehensif.', fontSize: '14px', color: '#f9a8d4', lineHeight: '1.6' } },
        { id: 'agsc6-btn', type: 'button', props: { label: 'Lihat Contoh Karya →', href: '#portfolio', variant: 'ghost', size: 'small', color: '#f472b6' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#0a0612] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-700/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="mt-4">{renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
