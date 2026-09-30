import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduPricingBootcamp
 * Flexible tuition plans (Upfront, 0% Installments, ISA) for Bootcamp.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduPricingBootcamp({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prc-bt-badge', type: 'badge', props: { text: 'SKEMA INVESTASI FLEKSIBEL', variant: 'outline', background: 'rgba(99,102,241,0.15)', color: '#818cf8', borderColor: '#6366f1' } },
    { id: 'prc-bt-title', type: 'heading', props: { content: 'Investasi Pendidikan dengan Jaminan Pengembalian Karir', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#ffffff', textAlign: 'center' } },
    { id: 'prc-bt-desc', type: 'paragraph', props: { content: 'Pilih opsi pembayaran yang paling sesuai dengan kondisi finansial Anda saat ini.', fontSize: '16px', color: '#cbd5e1', textAlign: 'center' } },
    // Plan 1
    { id: 'pl1-title', type: 'heading', props: { content: 'Upfront Payment', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'pl1-price', type: 'heading', props: { content: 'Rp 16.5 Jt', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
    { id: 'pl1-desc', type: 'paragraph', props: { content: 'Hemat Rp 3.5 Jt dengan pembayaran lunas di awal sebelum batch dimulai.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'pl1-btn', type: 'button', props: { label: 'Pilih Bayar di Awal', href: '#pricing', variant: 'outline', size: 'medium', radius: 'full', background: 'transparent', color: '#ffffff', borderColor: '#475569' } },
    // Plan 2 (Popular)
    { id: 'pl2-title', type: 'heading', props: { content: 'Cicilan 0% Ringan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'pl2-price', type: 'heading', props: { content: 'Rp 1.45 Jt / bln', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
    { id: 'pl2-desc', type: 'paragraph', props: { content: 'Cicilan 12 bulan tanpa bunga via kartu kredit atau mitra finansial edukasi.', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'pl2-btn', type: 'button', props: { label: 'Pilih Cicilan 0% ★', href: '#pricing', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: '#ffffff', fontWeight: '700' } },
    // Plan 3
    { id: 'pl3-title', type: 'heading', props: { content: 'Income Share (ISA)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
    { id: 'pl3-price', type: 'heading', props: { content: 'Rp 0 di Awal', level: 'h4', fontSize: '32px', fontWeight: '800', color: '#ffffff' } },
    { id: 'pl3-desc', type: 'paragraph', props: { content: 'Belajar tanpa biaya di depan. Bayar persentase gaji hanya setelah Anda mendapat pekerjaan.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'pl3-btn', type: 'button', props: { label: 'Ajukan Program ISA', href: '#pricing', variant: 'outline', size: 'medium', radius: 'full', background: 'transparent', color: '#ffffff', borderColor: '#475569' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'prc-bt-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'prc-bt-title');
  const descComps = layoutComponents.filter(c => c.id === 'prc-bt-desc');

  const plans = [
    {
      title: layoutComponents.filter(c => c.id === 'pl1-title'),
      price: layoutComponents.filter(c => c.id === 'pl1-price'),
      desc: layoutComponents.filter(c => c.id === 'pl1-desc'),
      btn: layoutComponents.filter(c => c.id === 'pl1-btn'),
      features: [
        'Akses Penuh 16 Minggu Live Bootcamp',
        '1-on-1 Mentoring Mingguan dengan Tech Lead',
        'Akses Seumur Hidup ke Rekaman & Materi',
        'Sertifikat Kelulusan Resmi Digital'
      ],
      isPopular: false,
      border: 'border-purple-900/40'
    },
    {
      title: layoutComponents.filter(c => c.id === 'pl2-title'),
      price: layoutComponents.filter(c => c.id === 'pl2-price'),
      desc: layoutComponents.filter(c => c.id === 'pl2-desc'),
      btn: layoutComponents.filter(c => c.id === 'pl2-btn'),
      features: [
        'Semua fasilitas paket Upfront',
        'Dedicated Career Coach & CV Review',
        'Simulasi Technical & HR Interview',
        'Prioritas Rekomendasi ke 350+ Hiring Partners',
        'Jaminan Uang Kembali jika Tidak Dapat Kerja*'
      ],
      isPopular: true,
      border: 'border-indigo-500/60 shadow-2xl shadow-indigo-500/20'
    },
    {
      title: layoutComponents.filter(c => c.id === 'pl3-title'),
      price: layoutComponents.filter(c => c.id === 'pl3-price'),
      desc: layoutComponents.filter(c => c.id === 'pl3-desc'),
      btn: layoutComponents.filter(c => c.id === 'pl3-btn'),
      features: [
        'Biaya Kuliah Awal Rp 0',
        'Seleksi Logika & Wawancara Ketat',
        'Mulai Bayar Setelah Gaji > Rp 8 Jt/bulan',
        'Maksimal 15% Gaji selama 18 Bulan'
      ],
      isPopular: false,
      border: 'border-purple-900/40'
    }
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#070212] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            {renderLayoutComponents(badgeComps, sectionId)}
          </div>
          {renderLayoutComponents(titleComps, sectionId)}
          {renderLayoutComponents(descComps, sectionId)}
        </div>

        {/* Pricing Grid 3 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                p.isPopular
                  ? 'bg-gradient-to-b from-[#1b0a38] to-[#110526] border-2 ' + p.border + ' lg:-translate-y-4'
                  : 'bg-white/[0.03] border ' + p.border + ' hover:bg-white/[0.05]'
              }`}
            >
              {p.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                  PILIHAN PALING POPULER
                </div>
              )}

              <div>
                <div className="space-y-3 pb-6 border-b border-purple-900/30">
                  {renderLayoutComponents(p.title, sectionId)}
                  <div className="pt-2">{renderLayoutComponents(p.price, sectionId)}</div>
                  {renderLayoutComponents(p.desc, sectionId)}
                </div>

                <ul className="py-6 space-y-3.5 text-sm text-slate-300">
                  {p.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <span className="text-indigo-400 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-purple-900/30">
                {renderLayoutComponents(p.btn, sectionId)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
