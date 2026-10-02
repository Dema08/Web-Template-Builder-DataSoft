import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * OrgHeroSocial
 * Vibrant emotional hero for NGO / social movement — emerald + orange with impact numbers.
 * Fully supports right-inspector selection and property editing.
 */
export default function OrgHeroSocial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'soc-badge', type: 'badge', props: { text: '🌿 GERAKAN SOSIAL YANG BERDAMPAK NYATA', variant: 'outline', background: 'rgba(16,185,129,0.2)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
    { id: 'soc-title', type: 'heading', props: { content: 'Bersatu, Bergerak, Mengubah Hidup Jutaan Saudara Kita', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.025em' } },
    { id: 'soc-desc', type: 'paragraph', props: { content: 'Gerakan Berdaya hadir untuk menghadirkan keadilan akses pendidikan, layanan kesehatan cuma-cuma, dan kemandirian ekonomi bagi keluarga di pelosok Nusantara.', fontSize: '17px', color: '#a7f3d0' } },
    { id: 'soc-btn1', type: 'button', props: { label: 'Bergabung Jadi Relawan 💚', href: '#join', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#ffffff', fontWeight: '700' } },
    { id: 'soc-btn2', type: 'button', props: { label: 'Lihat Laporan Dampak Kami', href: '#impact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(2,44,34,0.7)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.5)' } },
    { id: 'soc-stat1-num', type: 'heading', props: { content: '150.000+', level: 'h3', fontSize: '30px', fontWeight: '900', color: '#6ee7b7' } },
    { id: 'soc-stat1-lbl', type: 'paragraph', props: { content: 'Penerima Manfaat Program', fontSize: '12px', color: '#34d399' } },
    { id: 'soc-stat2-num', type: 'heading', props: { content: '12.000+', level: 'h3', fontSize: '30px', fontWeight: '900', color: '#6ee7b7' } },
    { id: 'soc-stat2-lbl', type: 'paragraph', props: { content: 'Relawan Aktif di 34 Provinsi', fontSize: '12px', color: '#34d399' } },
    { id: 'soc-stat3-num', type: 'heading', props: { content: '320', level: 'h3', fontSize: '30px', fontWeight: '900', color: '#6ee7b7' } },
    { id: 'soc-stat3-lbl', type: 'paragraph', props: { content: 'Desa Binaan Berkelanjutan', fontSize: '12px', color: '#34d399' } },
    { id: 'soc-hero-bg', type: 'image', props: { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80', alt: 'Komunitas Relawan Gerakan Berdaya', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'soc-badge');
  const titleC = lc.filter(c => c.id === 'soc-title');
  const descC = lc.filter(c => c.id === 'soc-desc');
  const btn1C = lc.filter(c => c.id === 'soc-btn1');
  const btn2C = lc.filter(c => c.id === 'soc-btn2');
  const s1n = lc.filter(c => c.id === 'soc-stat1-num');
  const s1l = lc.filter(c => c.id === 'soc-stat1-lbl');
  const s2n = lc.filter(c => c.id === 'soc-stat2-num');
  const s2l = lc.filter(c => c.id === 'soc-stat2-lbl');
  const s3n = lc.filter(c => c.id === 'soc-stat3-num');
  const s3l = lc.filter(c => c.id === 'soc-stat3-lbl');
  const bgImg = lc.filter(c => c.id === 'soc-hero-bg');

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#01140e] text-white overflow-hidden py-20 lg:py-28">
      {/* Background Hero Image with Vivid Emerald Overlay — editable via Right Inspector (image component) */}
      <div className="absolute inset-0 z-0 [&>div]:h-full [&img]:!h-full [&img]:min-h-[90vh]">
        {bgImg.length > 0 ? (
          renderLayoutComponents(bgImg, sectionId)
        ) : (
          renderLayoutComponents(lc.filter(c => c.type === 'image'), sectionId)
        )}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#011a12]/95 via-[#012217]/90 to-[#022c22]/75" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.08]" />
      </div>

      {/* Decorative Warm Ambient Glow */}
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          
          <div className="space-y-4">
            <div className="leading-tight drop-shadow-md">{renderLayoutComponents(titleC, sectionId)}</div>
            <div className="leading-relaxed drop-shadow-sm">{renderLayoutComponents(descC, sectionId)}</div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {renderLayoutComponents(btn1C, sectionId)}
            {renderLayoutComponents(btn2C, sectionId)}
          </div>

          {/* Frosted Impact Stats */}
          <div className="pt-8 border-t border-emerald-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#022c22]/85 backdrop-blur-md border border-emerald-500/30 shadow-xl hover:border-emerald-400/50 transition-all">
              <div className="text-emerald-400 text-lg mb-1">❤️</div>
              {renderLayoutComponents(s1n, sectionId)}
              {renderLayoutComponents(s1l, sectionId)}
            </div>
            <div className="p-4 rounded-2xl bg-[#022c22]/85 backdrop-blur-md border border-emerald-500/30 shadow-xl hover:border-emerald-400/50 transition-all">
              <div className="text-emerald-400 text-lg mb-1">🤝</div>
              {renderLayoutComponents(s2n, sectionId)}
              {renderLayoutComponents(s2l, sectionId)}
            </div>
            <div className="p-4 rounded-2xl bg-[#022c22]/85 backdrop-blur-md border border-emerald-500/30 shadow-xl hover:border-emerald-400/50 transition-all">
              <div className="text-emerald-400 text-lg mb-1">🏡</div>
              {renderLayoutComponents(s3n, sectionId)}
              {renderLayoutComponents(s3l, sectionId)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
