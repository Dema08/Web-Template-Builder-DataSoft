import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * ServicePricingAgency
 * 3-Tier transparent package pricing with gradient highlights for Agency.
 * Fully supports right-inspector selection and property editing.
 */
export default function ServicePricingAgency({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'price-badge', type: 'badge', props: { text: 'PAKET & INVESTASI', variant: 'outline', background: 'rgba(236,72,153,0.15)', color: '#f472b6', borderColor: '#ec4899' } },
    { id: 'price-title', type: 'heading', props: { content: 'Investasi Terukur untuk Skala Bisnis Anda', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'price-desc', type: 'paragraph', props: { content: 'Pilih paket yang paling sesuai dengan target pertumbuhan dan kebutuhan digital brand Anda.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Plan 1
    { id: 'plan1-title', type: 'heading', props: { content: 'Startup Launch', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
    { id: 'plan1-price', type: 'heading', props: { content: 'Rp 25 Jt', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
    { id: 'plan1-desc', type: 'paragraph', props: { content: 'Solusi esensial untuk bisnis baru yang ingin membangun reputasi kuat sejak hari pertama.', fontSize: '14px', color: '#94a3b8' } },
    { id: 'plan1-btn', type: 'button', props: { label: 'Pilih Paket Startup', href: '#contact', variant: 'outline', size: 'medium', radius: 'xl', background: 'transparent', color: '#ffffff', borderColor: '#475569' } },
    // Plan 2 (Popular)
    { id: 'plan2-title', type: 'heading', props: { content: 'Growth Engine', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
    { id: 'plan2-price', type: 'heading', props: { content: 'Rp 65 Jt', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
    { id: 'plan2-desc', type: 'paragraph', props: { content: 'Akselerasi penuh dengan kombinasi desain, sistem digital, dan kampanye terpadu.', fontSize: '14px', color: '#cbd5e1' } },
    { id: 'plan2-btn', type: 'button', props: { label: 'Pilih Growth Engine ★', href: '#contact', variant: 'primary', size: 'medium', radius: 'xl', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', fontWeight: '700' } },
    // Plan 3
    { id: 'plan3-title', type: 'heading', props: { content: 'Enterprise Custom', level: 'h3', fontSize: '22px', fontWeight: '700', color: '#ffffff' } },
    { id: 'plan3-price', type: 'heading', props: { content: 'Custom Scope', level: 'h4', fontSize: '28px', fontWeight: '800', color: '#ffffff' } },
    { id: 'plan3-desc', type: 'paragraph', props: { content: 'Dedicated multidisciplinary team untuk transformasi digital jangka panjang korporasi.', fontSize: '14px', color: '#94a3b8' } },
    { id: 'plan3-btn', type: 'button', props: { label: 'Konsultasi Tim Ahli', href: '#contact', variant: 'outline', size: 'medium', radius: 'xl', background: 'transparent', color: '#ffffff', borderColor: '#475569' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'price-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'price-title');
  const descComps = layoutComponents.filter(c => c.id === 'price-desc');

  const plans = [
    {
      title: layoutComponents.filter(c => c.id === 'plan1-title'),
      price: layoutComponents.filter(c => c.id === 'plan1-price'),
      desc: layoutComponents.filter(c => c.id === 'plan1-desc'),
      btn: layoutComponents.filter(c => c.id === 'plan1-btn'),
      features: [
        'Brand Identity Guidelines (Logo, Color, Typography)',
        'Custom Landing Page (Responsive & SEO Ready)',
        'Social Media Kit (10 Templates)',
        'Revisi Desain hingga 3 Putaran',
        'Dukungan Teknis 30 Hari'
      ],
      isPopular: false,
      border: 'border-white/10'
    },
    {
      title: layoutComponents.filter(c => c.id === 'plan2-title'),
      price: layoutComponents.filter(c => c.id === 'plan2-price'),
      desc: layoutComponents.filter(c => c.id === 'plan2-desc'),
      btn: layoutComponents.filter(c => c.id === 'plan2-btn'),
      features: [
        'Semua fitur pada paket Startup',
        'Website Multi-Page / Web App Interaktif',
        'Motion Graphics & Video Promosi 3D',
        'Integrated CRM & Lead Generation Funnel',
        'Strategic Media Campaign (Meta & Google Ads)',
        'Dedicated Project Manager & Prioritas 24/7'
      ],
      isPopular: true,
      border: 'border-pink-500/50 shadow-2xl shadow-pink-500/20'
    },
    {
      title: layoutComponents.filter(c => c.id === 'plan3-title'),
      price: layoutComponents.filter(c => c.id === 'plan3-price'),
      desc: layoutComponents.filter(c => c.id === 'plan3-desc'),
      btn: layoutComponents.filter(c => c.id === 'plan3-btn'),
      features: [
        'Dedicated Creative & Engineering Squad',
        'Arsitektur Solusi Khusus Skala Besar',
        'Keamanan Tingkat Lanjut & Compliance',
        'Continuous A/B Testing & Conversion Audit',
        'SLA 99.9% & On-Demand Support'
      ],
      isPopular: false,
      border: 'border-white/10'
    }
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#0c0618] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* Pricing Cards 3 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                p.isPopular
                  ? 'bg-gradient-to-b from-[#1c0b36] to-[#120524] border-2 ' + p.border + ' lg:-translate-y-4'
                  : 'bg-white/[0.03] border ' + p.border + ' hover:bg-white/[0.05]'
              }`}
            >
              {p.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-pink-500/30">
                  PALING DIMINATI
                </div>
              )}

              <div>
                <div className="space-y-3 pb-6 border-b border-white/10">
                  {renderLayoutComponents(p.title, sectionId)}
                  <div className="pt-2">{renderLayoutComponents(p.price, sectionId)}</div>
                  {renderLayoutComponents(p.desc, sectionId)}
                </div>

                {/* Features List */}
                <ul className="py-6 space-y-3.5 text-sm text-slate-300">
                  {p.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <span className="text-pink-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                {renderLayoutComponents(p.btn, sectionId)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
