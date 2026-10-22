import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFAQDompetkita — Section #faq
 * Responsive: Clean accordion with responsive padding for mobile viewports.
 */
export default function KopFAQDompetkita({ components = [], sectionId = null }) {
  const [open, setOpen] = useState({});
  const toggle = key => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

  const defaultComponents = [
    { id: 'dompet-faq-title', type: 'heading', props: { content: 'Pertanyaan yang sering diajukan', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const faqTitleC = lc.filter(c => c.id === 'dompet-faq-title');

  const faqs = [
    { key: 'f1', q: 'Siapa yang dapat menjadi anggota KOPERASI DOMPETKITA BERSAMA?', a: 'Karyawan perusahaan yang sudah terdaftar dan memiliki akun di Dompetkita.id, memenuhi persyaratan AD/ART, dan telah diterima melalui proses pendaftaran koperasi. Ketentuan perusahaan/program yang relevan juga harus dipenuhi.' },
    { key: 'f2', q: 'Apakah suara anggota berbeda menurut besar simpanan?', a: 'Tidak. Setiap anggota hanya punya satu suara dan tidak bisa diwakilkan.' },
    { key: 'f3', q: 'Kapan saya menerima SHU?', a: 'SHU dibagikan setelah disahkan di Rapat Anggota Tahunan. Bagian anggota dihitung dari transaksi usaha dan simpanan wajib.' },
    { key: 'f4', q: 'Bisakah simpanan diambil kembali?', a: 'Simpanan pokok tidak bisa diambil selama masih anggota. Anggota yang keluar berhak atas pengembalian simpanannya.' },
    { key: 'f5', q: 'Bagaimana jika saya tidak setuju dengan keputusan pengurus?', a: 'Anda berhak menyampaikan pendapat kepada Pengurus dan Pengawas kapan saja, serta meminta diadakan Rapat Anggota.' },
    { key: 'f6', q: 'Apakah semua pemilik akun Dompetkita otomatis menjadi anggota koperasi?', a: 'Tidak. Calon anggota harus merupakan karyawan perusahaan, memiliki akun Dompetkita.id, memenuhi ketentuan keanggotaan, dan menyelesaikan proses penerimaan anggota koperasi.' },
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px', background: '#F8FAFC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span aria-hidden="true" className="block w-10 h-1 rounded bg-[#F4B544] mb-5" />
        <div className="mb-6 sm:mb-8 leading-snug font-['Bricolage_Grotesque',system-ui,sans-serif]">
          {renderLayoutComponents(faqTitleC, sectionId)}
        </div>

        <div className="space-y-2.5 max-w-4xl">
          {faqs.map(faq => (
            <div key={faq.key} className="border border-[#DCE7EC] rounded-xl bg-white overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => toggle(faq.key)}
                className="flex items-center justify-between w-full py-3.5 px-4 sm:px-5 font-['Bricolage_Grotesque',system-ui,sans-serif] text-sm sm:text-base font-bold text-left cursor-pointer transition"
                style={{
                  background: open[faq.key] ? 'rgba(20,125,146,0.06)' : '#FFFFFF',
                  color: open[faq.key] ? '#147D92' : '#173042',
                  borderBottom: open[faq.key] ? '1px solid #DCE7EC' : 'none',
                }}
              >
                <span>{faq.q}</span>
                <span className="text-xl font-normal text-[#147D92] ml-2 shrink-0">{open[faq.key] ? '−' : '+'}</span>
              </button>
              {open[faq.key] && (
                <div className="p-4 sm:p-5 text-xs sm:text-sm text-[#627783] leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
