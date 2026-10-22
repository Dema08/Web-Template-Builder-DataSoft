import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopLambangDompetkita — Section #lambang
 * Responsive: Logo card stacks on mobile, grid cards 1 col on mobile, 2 on tablet, 3 on desktop.
 */
export default function KopLambangDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-lb-title', type: 'heading', props: { content: 'Tujuan dan makna lambang', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
    { id: 'dompet-lb-lead', type: 'paragraph', props: { content: 'Koperasi berdiri untuk memperkuat kesejahteraan anggota melalui partisipasi, tata kelola yang transparan, dan kegiatan usaha yang sesuai kebutuhan bersama.', fontSize: '16px', color: '#627783', lineHeight: '1.75' } },
    { id: 'dompet-lb-logoname', type: 'heading', props: { content: 'Logo KOPERASI DOMPETKITA BERSAMA', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#147D92' } },
    { id: 'dompet-lb-logodesc', type: 'paragraph', props: { content: 'Logo memadukan teratai sebagai lambang perkembangan dan kerja sama, bintang sebagai landasan Pancasila, serta lingkaran bergigi emas sebagai usaha yang terus berjalan. Bentuknya ringkas agar tetap jelas di layar, kartu anggota, dan dokumen.', fontSize: '15px', color: '#627783', lineHeight: '1.7' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-lb-title');
  const leadC = lc.filter(c => c.id === 'dompet-lb-lead');
  const logonameC = lc.filter(c => c.id === 'dompet-lb-logoname');
  const logodescC = lc.filter(c => c.id === 'dompet-lb-logodesc');

  const LogoSvg = ({ size = 64 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Logo KOPERASI DOMPETKITA BERSAMA" className="shrink-0">
      <circle cx="32" cy="32" r="30" fill="#123B52" />
      <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F4B544" strokeWidth="3" strokeDasharray="3.2 2.2" />
      <circle cx="32" cy="32" r="23" fill="#147D92" />
      <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
      <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E5F5F7" />
      <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E5F5F7" />
      <path d="M20 50.5h24" stroke="#F4B544" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F4B544" />
    </svg>
  );

  const meanings = [
    {
      name: 'Lingkaran bergigi emas', desc: 'Usaha karya yang terus menerus; gigi roda melambangkan kegiatan usaha yang bergerak bersama.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><circle cx="20" cy="20" r="5" /><circle cx="20" cy="20" r="12" strokeWidth="5" strokeDasharray="4.2 4.2" /></svg>
    },
    {
      name: 'Bunga teratai', desc: 'Perkembangan, kemajuan, dan semangat kerja sama.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M20 31c-5-3-6-10 0-15 6 5 5 12 0 15z" /><path d="M19 32c-7 0-11-5-11-10 6 0 10 4 11 10z" /><path d="M21 32c7 0 11-5 11-10-6 0-10 4-11 10z" /></svg>
    },
    {
      name: 'Kelopak yang bertaut', desc: 'Persahabatan kokoh dan ikatan kekeluargaan antaranggota.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><circle cx="14" cy="23" r="8" /><circle cx="26" cy="23" r="8" /><circle cx="20" cy="14" r="8" /></svg>
    },
    {
      name: 'Bintang emas', desc: 'Pancasila sebagai landasan idiil dan ideologi koperasi.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M20 5l4.2 8.6 9.4 1.4-6.8 6.6 1.6 9.4L20 26.4l-8.4 4.6 1.6-9.4-6.8-6.6 9.4-1.4z" /></svg>
    },
    {
      name: 'Garis emas di dasar', desc: 'Dasar yang kokoh dan berakar: kepribadian Indonesia, simpanan anggota, dan tata kelola yang sehat.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M6 32h28M13 25v7M20 18v14M27 25v7" /></svg>
    },
    {
      name: 'Bentuk lingkaran', desc: 'Persatuan tanpa ujung dan keadilan sosial: setiap anggota memiliki satu suara.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><circle cx="20" cy="20" r="14" /><circle cx="20" cy="20" r="7" /></svg>
    },
    {
      name: 'Timbangan & padi-kapas', desc: 'Keadilan sosial dan kemakmuran bagi seluruh anggota tanpa pembedaan.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M10 20h20M20 10v20M8 26l6-12 6 12zM20 26l6-12 6 12z" /></svg>
    },
    {
      name: 'Warna biru navy & teal', desc: 'Ketenangan, profesionalisme, dan kepercayaan anggota pada institusi.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><circle cx="20" cy="20" r="12" fill="#147D92" fillOpacity=".15" /></svg>
    },
    {
      name: 'Warna emas & putih', desc: 'Keluhuran budi, kemurnian niat, dan kesejahteraan yang ingin dicapai.',
      icon: <svg viewBox="0 0 40 40" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><circle cx="20" cy="20" r="12" stroke="#F4B544" fill="#F4B544" fillOpacity=".15" /></svg>
    },
  ];

  return (
    <section id="lambang" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span aria-hidden="true" className="block w-10 h-1 rounded bg-[#F4B544] mb-5" />
        <div className="mb-3 leading-snug font-['Bricolage_Grotesque',system-ui,sans-serif]">
          {renderLayoutComponents(titleC, sectionId)}
        </div>
        <div className="text-sm sm:text-base leading-relaxed text-[#627783] max-w-2xl mb-8 sm:mb-10">
          {renderLayoutComponents(leadC, sectionId)}
        </div>

        {/* Logo showcase card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 sm:gap-8 bg-white border border-[#DCE7EC] rounded-2xl p-5 sm:p-7 mb-8 shadow-sm">
          <LogoSvg size={100} />
          <div className="min-w-0">
            <div className="font-['Bricolage_Grotesque',system-ui,sans-serif] mb-2">
              {renderLayoutComponents(logonameC, sectionId)}
            </div>
            <div className="text-sm sm:text-base text-[#627783] leading-relaxed max-w-2xl">
              {renderLayoutComponents(logodescC, sectionId)}
            </div>
          </div>
        </div>

        {/* 2 objective cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 sm:mb-10">
          {[
            { title: 'Kebutuhan anggota', desc: 'Mengembangkan layanan dan kegiatan usaha berdasarkan kebutuhan anggota serta keputusan Rapat Anggota.' },
            { title: 'Kesejahteraan bersama', desc: 'Mendorong manfaat ekonomi yang bertanggung jawab, terukur, dan sesuai kemampuan koperasi.' },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-[#DCE7EC] rounded-xl p-5 shadow-sm">
              <h3 className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-base sm:text-lg font-bold text-[#147D92] mb-1.5 mt-0">
                {c.title}
              </h3>
              <p className="m-0 text-sm sm:text-base text-[#627783] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-lg sm:text-xl font-bold text-[#173042] mb-4">
          Arti lambang
        </h3>

        {/* 9 meaning cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {meanings.map((m, i) => (
            <div
              key={i}
              className="bg-white border border-[#DCE7EC] rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200"
            >
              <span className="w-10 h-10 rounded-lg bg-[#E5F5F7] flex items-center justify-center mb-3">
                {m.icon}
              </span>
              <h3 className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-sm sm:text-base font-bold text-[#147D92] mb-1.5 mt-0">
                {m.name}
              </h3>
              <p className="m-0 text-xs sm:text-sm text-[#627783] leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
