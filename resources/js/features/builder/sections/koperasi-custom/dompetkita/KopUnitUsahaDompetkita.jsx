import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopUnitUsahaDompetkita — Section #usaha
 * Responsive: Chips wrap cleanly, cards grid: 1 col on mobile, 2 on tablet, 3 on desktop.
 */
export default function KopUnitUsahaDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-uu-title', type: 'heading', props: { content: 'Unit usaha', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
    { id: 'dompet-uu-lead', type: 'paragraph', props: { content: 'Unit usaha koperasi umum dikembangkan berdasarkan kebutuhan anggota, peluang pasar, kelayakan usaha, dan keputusan Rapat Anggota. Koperasi merupakan badan usaha tersendiri; kegiatan dan manfaatnya mengikuti AD/ART, perizinan, serta perjanjian yang relevan. Dompetkita.id menjadi salah satu persyaratan akun bagi calon anggota sesuai ketentuan keanggotaan koperasi.', fontSize: '16px', color: '#627783', lineHeight: '1.75' } },
    { id: 'dompet-uu1-name', type: 'heading', props: { content: 'Perdagangan & pangan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#147D92', lineHeight: '1.35' } },
    { id: 'dompet-uu1-desc', type: 'paragraph', props: { content: 'Penyediaan dan perdagangan bahan pangan, produk pertanian, kebutuhan pokok, serta perlengkapan usaha sesuai peluang pasar.', fontSize: '14.5px', color: '#627783', lineHeight: '1.7' } },
    { id: 'dompet-uu2-name', type: 'heading', props: { content: 'Peternakan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#147D92', lineHeight: '1.35' } },
    { id: 'dompet-uu2-desc', type: 'paragraph', props: { content: 'Budi daya ayam ras petelur.', fontSize: '14.5px', color: '#627783', lineHeight: '1.7' } },
    { id: 'dompet-uu3-name', type: 'heading', props: { content: 'Kesehatan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#147D92', lineHeight: '1.35' } },
    { id: 'dompet-uu3-desc', type: 'paragraph', props: { content: 'Layanan kesehatan dan perdagangan eceran produk kesehatan sesuai perizinan yang berlaku.', fontSize: '14.5px', color: '#627783', lineHeight: '1.7' } },
    { id: 'dompet-uu4-name', type: 'heading', props: { content: 'Logistik & gudang', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#147D92', lineHeight: '1.35' } },
    { id: 'dompet-uu4-desc', type: 'paragraph', props: { content: 'Pergudangan, penyimpanan barang, dan layanan distribusi.', fontSize: '14.5px', color: '#627783', lineHeight: '1.7' } },
    { id: 'dompet-uu5-name', type: 'heading', props: { content: 'Jasa', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#147D92', lineHeight: '1.35' } },
    { id: 'dompet-uu5-desc', type: 'paragraph', props: { content: 'Pembayaran, reparasi alat elektronik, dan penyelenggaraan acara khusus.', fontSize: '14.5px', color: '#627783', lineHeight: '1.7' } },
    { id: 'dompet-uu6-name', type: 'heading', props: { content: 'Simpan pinjam', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#147D92', lineHeight: '1.35' } },
    { id: 'dompet-uu6-desc', type: 'paragraph', props: { content: 'Layanan simpan pinjam bagi anggota sesuai ketentuan, perizinan, dan kemampuan koperasi.', fontSize: '14.5px', color: '#627783', lineHeight: '1.7' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-uu-title');
  const leadC = lc.filter(c => c.id === 'dompet-uu-lead');

  const units = [
    { nameId: 'dompet-uu1-name', descId: 'dompet-uu1-desc', icon: <svg viewBox="0 0 48 48" aria-hidden="true" className="w-7 h-7 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M8 20h32l-4 18H12z" /><path d="M16 20l6-10M32 20l-6-10" /><path d="M19 27v5M24 27v5M29 27v5" /></svg> },
    { nameId: 'dompet-uu2-name', descId: 'dompet-uu2-desc', icon: <svg viewBox="0 0 48 48" aria-hidden="true" className="w-7 h-7 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M20 8c7 0 12 11 12 19a12 12 0 0 1-24 0c0-8 5-19 12-19z" /><path d="M33 22c5 0 8 7 8 12a8 8 0 0 1-14 5" /></svg> },
    { nameId: 'dompet-uu3-name', descId: 'dompet-uu3-desc', icon: <svg viewBox="0 0 48 48" aria-hidden="true" className="w-7 h-7 stroke-[#147D92] fill-none stroke-2 stroke-round"><rect x="9" y="9" width="30" height="30" rx="9" /><path d="M24 16v16M16 24h16" /></svg> },
    { nameId: 'dompet-uu4-name', descId: 'dompet-uu4-desc', icon: <svg viewBox="0 0 48 48" aria-hidden="true" className="w-7 h-7 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M6 21L24 8l18 13v19H6z" /><path d="M16 40V28h16v12M16 34h16" /></svg> },
    { nameId: 'dompet-uu5-name', descId: 'dompet-uu5-desc', icon: <svg viewBox="0 0 48 48" aria-hidden="true" className="w-7 h-7 stroke-[#147D92] fill-none stroke-2 stroke-round"><circle cx="24" cy="24" r="6" /><circle cx="24" cy="24" r="14" strokeWidth="5" strokeDasharray="4.4 4.4" /></svg> },
    { nameId: 'dompet-uu6-name', descId: 'dompet-uu6-desc', icon: <svg viewBox="0 0 48 48" aria-hidden="true" className="w-7 h-7 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M10 15c0-3 6-5 14-5s14 2 14 5-6 5-14 5-14-2-14-5z" /><path d="M10 15v8c0 3 6 5 14 5s14-2 14-5v-8M10 23v8c0 3 6 5 14 5s14-2 14-5v-8" /></svg> },
  ];

  return (
    <section id="usaha" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px', background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span aria-hidden="true" className="block w-10 h-1 rounded bg-[#F4B544] mb-5" />
        <div className="mb-3 leading-snug font-['Bricolage_Grotesque',system-ui,sans-serif]">
          {renderLayoutComponents(titleC, sectionId)}
        </div>
        <div className="text-sm sm:text-base leading-relaxed text-[#627783] max-w-2xl mb-6 sm:mb-8">
          {renderLayoutComponents(leadC, sectionId)}
        </div>

        {/* Chips */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-8">
          <span className="inline-block px-4 py-2 bg-[#147D92] text-white rounded-full font-semibold text-xs sm:text-sm border border-[#147D92]">
            Usaha utama: dikembangkan sesuai kebutuhan anggota dan keputusan RAT
          </span>
          <span className="inline-block px-4 py-2 bg-white text-[#173042] rounded-full font-semibold text-xs sm:text-sm border border-[#DCE7EC]">
            Pilihan usaha tambahan: sesuai kelayakan dan perizinan
          </span>
        </div>

        {/* 3-col unit grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {units.map((u, i) => {
            const nameC = lc.filter(c => c.id === u.nameId);
            const descC = lc.filter(c => c.id === u.descId);
            return (
              <div
                key={i}
                className="bg-white border border-[#DCE7EC] rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E5F5F7] flex items-center justify-center mb-3.5">
                  {u.icon}
                </div>
                <div className="font-['Bricolage_Grotesque',system-ui,sans-serif] mb-1.5">
                  {renderLayoutComponents(nameC, sectionId)}
                </div>
                <div className="text-xs sm:text-sm text-[#627783] leading-relaxed">
                  {renderLayoutComponents(descC, sectionId)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
