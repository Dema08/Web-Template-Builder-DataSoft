import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopPermodalanDompetkita — Section #modal
 * Responsive: Bar chart stacks with copy on mobile, accordion 1 col on mobile, 2 cols on tablet/desktop.
 */
export default function KopPermodalanDompetkita({ components = [], sectionId = null }) {
  const [open, setOpen] = useState({ pokok: true, wajib: false, cadangan: false, pinjaman: true, bantuan: false, kegunaan: false });
  const toggle = key => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

  const defaultComponents = [
    { id: 'dompet-pm-title', type: 'heading', props: { content: 'Permodalan', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
    { id: 'dompet-pm-lead', type: 'paragraph', props: { content: 'Modal koperasi terdiri dari modal sendiri dan modal pinjaman. Koperasi juga dapat menghimpun modal penyertaan.', fontSize: '16px', color: '#627783', lineHeight: '1.75' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-pm-title');
  const leadC = lc.filter(c => c.id === 'dompet-pm-lead');

  const Accordion = ({ label, openKey, children }) => (
    <div className="mb-2.5 border border-[#DCE7EC] rounded-xl bg-white overflow-hidden shadow-xs">
      <button
        type="button"
        onClick={() => toggle(openKey)}
        className="flex items-center justify-between w-full py-3.5 px-4 sm:px-5 font-['Bricolage_Grotesque',system-ui,sans-serif] text-sm sm:text-base font-bold text-left cursor-pointer transition"
        style={{
          background: open[openKey] ? 'rgba(20,125,146,0.06)' : '#FFFFFF',
          color: open[openKey] ? '#147D92' : '#173042',
          borderBottom: open[openKey] ? '1px solid #DCE7EC' : 'none',
        }}
      >
        <span>{label}</span>
        <span className="text-xl font-normal text-[#147D92] ml-2 shrink-0">{open[openKey] ? '−' : '+'}</span>
      </button>
      {open[openKey] && (
        <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#627783] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <section id="modal" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px', background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Head row: title + bar chart illustration */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
          <div className="md:col-span-8">
            <span aria-hidden="true" className="block w-10 h-1 rounded bg-[#F4B544] mb-5" />
            <div className="mb-3 leading-snug font-['Bricolage_Grotesque',system-ui,sans-serif]">
              {renderLayoutComponents(titleC, sectionId)}
            </div>
            <div className="text-sm sm:text-base leading-relaxed text-[#627783] max-w-2xl mb-4">
              {renderLayoutComponents(leadC, sectionId)}
            </div>
          </div>
          {/* Bar chart SVG illustration */}
          <div className="md:col-span-4 flex justify-center">
            <svg viewBox="0 0 220 180" role="img" aria-label="Ilustrasi batang modal yang bertumbuh dengan koin" className="w-full max-w-[190px] sm:max-w-[220px] h-auto">
              <rect x="20" y="150" width="180" height="4" rx="2" fill="#DCE7EC" />
              <rect x="40" y="110" width="30" height="40" rx="7" fill="#147D92" opacity=".35" />
              <rect x="95" y="80" width="30" height="70" rx="7" fill="#147D92" opacity=".6" />
              <rect x="150" y="45" width="30" height="105" rx="7" fill="#147D92" />
              <path d="M55 98L110 68L165 33" fill="none" stroke="#F4B544" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
              <circle cx="55" cy="98" r="12" fill="#F4B544" />
              <circle cx="110" cy="68" r="12" fill="#F4B544" />
              <circle cx="165" cy="33" r="12" fill="#F4B544" />
              <circle cx="55" cy="98" r="7.5" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity=".7" />
              <circle cx="110" cy="68" r="7.5" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity=".7" />
              <circle cx="165" cy="33" r="7.5" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity=".7" />
            </svg>
          </div>
        </div>

        {/* 2-col accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
          <div>
            <h3 className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-base sm:text-lg font-bold text-[#173042] mb-3">
              Modal sendiri
            </h3>
            <Accordion label="Simpanan pokok" openKey="pokok">
              <p className="m-0 mb-2">Sejumlah uang yang sama banyaknya yang wajib dibayarkan oleh anggota kepada koperasi pada saat masuk menjadi anggota.</p>
              <ul className="list-disc pl-5 space-y-1 m-0">
                <li>Besaran dan tata cara pembayaran ditetapkan dalam AD/ART</li>
                <li>Simpanan pokok tidak dapat diambil kembali selama yang bersangkutan masih menjadi anggota</li>
              </ul>
            </Accordion>
            <Accordion label="Simpanan wajib" openKey="wajib">
              <p className="m-0 mb-2">Jumlah simpanan tertentu yang tidak harus sama yang wajib dibayar oleh anggota kepada koperasi dalam waktu dan kesempatan tertentu.</p>
              <ul className="list-disc pl-5 space-y-1 m-0">
                <li>Ketentuan besar dan periodenya ditetapkan di Rapat Anggota</li>
                <li>Tidak dapat diambil selama masih menjadi anggota</li>
              </ul>
            </Accordion>
            <Accordion label="Dana cadangan" openKey="cadangan">
              <p className="m-0">Sejumlah uang yang diperoleh dari penyisihan Sisa Hasil Usaha, dimaksudkan untuk memupuk modal sendiri dan untuk menutup kerugian koperasi bila diperlukan.</p>
            </Accordion>
          </div>

          <div>
            <h3 className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-base sm:text-lg font-bold text-[#173042] mb-3">
              Modal pinjaman dan bantuan
            </h3>
            <Accordion label="Modal pinjaman" openKey="pinjaman">
              <p className="m-0 mb-2">Dapat berasal dari:</p>
              <ul className="list-disc pl-5 space-y-1 m-0">
                <li>Anggota</li>
                <li>Koperasi lainnya dan/atau anggotanya</li>
                <li>Bank dan lembaga keuangan lainnya</li>
                <li>Penerbitan obligasi dan surat utang lainnya</li>
                <li>Sumber lain yang sah</li>
              </ul>
            </Accordion>
            <Accordion label="Bantuan dan hibah" openKey="bantuan">
              <p className="m-0">Koperasi dapat menerima hibah atau bantuan yang tidak mengikat dari berbagai pihak untuk pengembangan usaha dan organisasi sesuai ketentuan.</p>
            </Accordion>
            <Accordion label="Kegunaan modal" openKey="kegunaan">
              <p className="m-0">Modal digunakan untuk membiayai kegiatan usaha, investasi fasilitas dan sarana, perputaran kas, serta pengembangan layanan bagi anggota.</p>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
