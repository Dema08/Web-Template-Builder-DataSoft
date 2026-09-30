import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EduHeroUniversity
 * High-impact academic split hero for premier research institute / university.
 * Fully supports right-inspector selection and property editing.
 */
export default function EduHeroUniversity({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'uni-badge', type: 'badge', props: { text: 'PUSAT KEUNGGULAN RISET & TEKNOLOGI ASIA', variant: 'outline', background: 'rgba(217,119,6,0.15)', color: '#fbbf24', borderColor: '#d97706' } },
    { id: 'uni-title', type: 'heading', props: { content: 'Membentuk Generasi Pemimpin Inovasi & Rekayasa Masa Depan', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#ffffff', letterSpacing: '-0.02em' } },
    { id: 'uni-desc', type: 'paragraph', props: { content: 'Universitas riset berstandar internasional dengan kurikulum berbasis industri mutakhir, laboratorium canggih, dan kemitraan global di 30+ negara.', fontSize: '17px', color: '#cbd5e1' } },
    { id: 'uni-btn-pri', type: 'button', props: { label: 'Pendaftaran Mahasiswa Baru 🎓', href: '#admission', variant: 'primary', size: 'large', radius: 'lg', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
    { id: 'uni-btn-sec', type: 'button', props: { label: 'Unduh Prospektus Akademik (PDF)', href: '#programs', variant: 'outline', size: 'large', radius: 'lg', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', borderColor: '#334155' } },
    // Stats
    { id: 'uni-stat1-num', type: 'heading', props: { content: '96.4%', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fbbf24' } },
    { id: 'uni-stat1-lbl', type: 'paragraph', props: { content: 'Serapan Kerja Lulusan < 3 Bulan', fontSize: '12px', color: '#94a3b8' } },
    { id: 'uni-stat2-num', type: 'heading', props: { content: 'Rp 45 M+', level: 'h3', fontSize: '28px', fontWeight: '800', color: '#fbbf24' } },
    { id: 'uni-stat2-lbl', type: 'paragraph', props: { content: 'Dana Riset & Beasiswa Tahunan', fontSize: '12px', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.id === 'uni-badge');
  const titleComps = layoutComponents.filter(c => c.id === 'uni-title');
  const descComps = layoutComponents.filter(c => c.id === 'uni-desc');
  const btnPriComps = layoutComponents.filter(c => c.id === 'uni-btn-pri');
  const btnSecComps = layoutComponents.filter(c => c.id === 'uni-btn-sec');
  const stat1Num = layoutComponents.filter(c => c.id === 'uni-stat1-num');
  const stat1Lbl = layoutComponents.filter(c => c.id === 'uni-stat1-lbl');
  const stat2Num = layoutComponents.filter(c => c.id === 'uni-stat2-num');
  const stat2Lbl = layoutComponents.filter(c => c.id === 'uni-stat2-lbl');

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#070e1c] overflow-hidden py-20 lg:py-28">
      {/* Background Navy Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex">{renderLayoutComponents(badgeComps, sectionId)}</div>
            <div className="space-y-4">
              {renderLayoutComponents(titleComps, sectionId)}
              {renderLayoutComponents(descComps, sectionId)}
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {renderLayoutComponents(btnPriComps, sectionId)}
              {renderLayoutComponents(btnSecComps, sectionId)}
            </div>

            {/* Metrics */}
            <div className="pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-[#0e1b33] border border-blue-900/40">
                {renderLayoutComponents(stat1Num, sectionId)}
                {renderLayoutComponents(stat1Lbl, sectionId)}
              </div>
              <div className="p-4 rounded-2xl bg-[#0e1b33] border border-blue-900/40">
                {renderLayoutComponents(stat2Num, sectionId)}
                {renderLayoutComponents(stat2Lbl, sectionId)}
              </div>
              <div className="p-4 rounded-2xl bg-[#0e1b33] border border-blue-900/40 hidden sm:block">
                <div className="text-[28px] font-extrabold text-amber-400">1 : 8</div>
                <div className="text-xs text-slate-400">Rasio Dosen Mahasiswa Ideal</div>
              </div>
            </div>
          </div>

          {/* Right Campus Building Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-700/40 shadow-2xl shadow-blue-950/80 group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="University students on campus library"
                className="w-full h-[460px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0d1a33]/90 backdrop-blur-md border border-blue-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-bold">Beasiswa Unggulan Nusantara</div>
                  <div className="text-sm font-bold text-white">Bebas Biaya Kuliah 100% + Uang Saku Riset</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-extrabold shrink-0">
                  Full Grant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
