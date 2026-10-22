import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopKeanggotaanDompetkita — Section #anggota
 * Responsive: 4-step flow stacks 1 col on mobile, 2 on tablet, 4 on desktop.
 * Accordion stacks in 1 col on mobile, 2 cols on tablet/desktop.
 */
export default function KopKeanggotaanDompetkita({ components = [], sectionId = null }) {
  const [open, setOpen] = useState({ syarat: true, kewajiban: false, hak: true, luarBiasa: false });
  const toggle = key => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

  const defaultComponents = [
    { id: 'dompet-mem-title', type: 'heading', props: { content: 'Keanggotaan', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
    { id: 'dompet-mem-lead', type: 'paragraph', props: { content: 'Syarat utama: calon anggota sudah terdaftar dan memiliki akun Dompetkita.id serta merupakan karyawan perusahaan. Status akun tidak otomatis memberikan keanggotaan; calon anggota tetap harus diterima sesuai AD/ART koperasi.', fontSize: '16px', color: '#627783', lineHeight: '1.75' } },
    { id: 'dompet-step1-title', type: 'heading', props: { content: 'Punya akun Dompetkita.id', level: 'h3', fontWeight: '700', fontSize: '16px', color: '#173042' } },
    { id: 'dompet-step1-desc', type: 'paragraph', props: { content: 'Daftar dan miliki akun di Dompetkita.id.', fontSize: '14px', color: '#627783' } },
    { id: 'dompet-step2-title', type: 'heading', props: { content: 'Verifikasi karyawan', level: 'h3', fontWeight: '700', fontSize: '16px', color: '#173042' } },
    { id: 'dompet-step2-desc', type: 'paragraph', props: { content: 'Status akun dan karyawan diverifikasi.', fontSize: '14px', color: '#627783' } },
    { id: 'dompet-step3-title', type: 'heading', props: { content: 'Setujui AD/ART', level: 'h3', fontWeight: '700', fontSize: '16px', color: '#173042' } },
    { id: 'dompet-step3-desc', type: 'paragraph', props: { content: 'Setujui AD/ART serta ketentuan keanggotaan.', fontSize: '14px', color: '#627783' } },
    { id: 'dompet-step4-title', type: 'heading', props: { content: 'Bayar simpanan pokok', level: 'h3', fontWeight: '700', fontSize: '16px', color: '#173042' } },
    { id: 'dompet-step4-desc', type: 'paragraph', props: { content: 'Lunasi simpanan pokok sesuai ketentuan.', fontSize: '14px', color: '#627783' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-mem-title');
  const leadC = lc.filter(c => c.id === 'dompet-mem-lead');

  const steps = [
    { titleId: 'dompet-step1-title', descId: 'dompet-step1-desc', icon: <svg viewBox="0 0 32 32" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><rect x="9" y="3" width="14" height="26" rx="4" /><path d="M14 7h4M16 24h.01" /></svg> },
    { titleId: 'dompet-step2-title', descId: 'dompet-step2-desc', icon: <svg viewBox="0 0 32 32" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><rect x="4" y="8" width="24" height="18" rx="4" /><path d="M12 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M11 17l4 4 7-8" /></svg> },
    { titleId: 'dompet-step3-title', descId: 'dompet-step3-desc', icon: <svg viewBox="0 0 32 32" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><path d="M8 3h12l5 5v21H8z" /><path d="M20 3v5h5M12 15h9M12 20h9M12 25h5" /></svg> },
    { titleId: 'dompet-step4-title', descId: 'dompet-step4-desc', icon: <svg viewBox="0 0 32 32" aria-hidden="true" className="w-6 h-6 stroke-[#147D92] fill-none stroke-2 stroke-round"><circle cx="16" cy="16" r="12" /><path d="M16 9v14M12 12.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5-1.8 2.5-4 2.5-4 1-4 2.5 1.8 2.5 4 2.5 4-1 4-2.5" /></svg> },
  ];

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
    <section id="anggota" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span aria-hidden="true" className="block w-10 h-1 rounded bg-[#F4B544] mb-5" />
        <div className="mb-3 leading-snug font-['Bricolage_Grotesque',system-ui,sans-serif]">
          {renderLayoutComponents(titleC, sectionId)}
        </div>
        <div className="text-sm sm:text-base leading-relaxed text-[#627783] max-w-2xl mb-8 sm:mb-10">
          {renderLayoutComponents(leadC, sectionId)}
        </div>

        {/* 4-step flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10 sm:mb-12">
          {steps.map((step, i) => {
            const nameC = lc.filter(c => c.id === step.titleId);
            const descC = lc.filter(c => c.id === step.descId);
            return (
              <div
                key={i}
                className="relative bg-white border border-[#DCE7EC] rounded-2xl p-5 shadow-sm"
              >
                <span className="font-['Bricolage_Grotesque',system-ui,sans-serif] font-extrabold text-2xl text-[#F4B544] opacity-90 absolute right-4 top-3.5 leading-none">
                  {i + 1}
                </span>
                <div className="w-11 h-11 rounded-xl bg-[#E5F5F7] flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <div className="font-['Bricolage_Grotesque',system-ui,sans-serif] font-bold text-sm sm:text-base mb-1 text-[#173042]">
                  {renderLayoutComponents(nameC, sectionId)}
                </div>
                <div className="text-xs sm:text-sm text-[#627783] leading-relaxed">
                  {renderLayoutComponents(descC, sectionId)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Two-col accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
          <div>
            <p className="text-xs sm:text-sm text-[#627783] mb-3 leading-relaxed">
              Ketentuan inti: calon anggota wajib memiliki akun Dompetkita.id dan berstatus sebagai karyawan perusahaan. Akun saja tidak otomatis menjadikan seseorang anggota koperasi.
            </p>
            <Accordion label="Syarat menjadi anggota" openKey="syarat">
              <ul className="list-disc pl-5 space-y-1.5 m-0">
                {['Sudah terdaftar dan memiliki akun di Dompetkita.id', 'Merupakan karyawan dari perusahaan yang memenuhi ketentuan program', 'Memenuhi ketentuan kecakapan hukum dan persyaratan keanggotaan dalam AD/ART', 'Mengajukan pendaftaran serta melengkapi data verifikasi', 'Menyetujui AD/ART serta ketentuan keanggotaan koperasi', 'Melunasi simpanan pokok sesuai ketentuan'].map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion label="Kewajiban anggota" openKey="kewajiban">
              <ul className="list-disc pl-5 space-y-1.5 m-0">
                {['Mematuhi AD/ART dan keputusan Rapat Anggota', 'Menghadiri Rapat Anggota', 'Ikut mengawasi organisasi dan usaha koperasi', 'Membayar simpanan pokok dan simpanan wajib'].map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </Accordion>
          </div>
          <div>
            <Accordion label="Hak anggota" openKey="hak">
              <ul className="list-disc pl-5 space-y-1.5 m-0">
                {['Memberi suara dan pendapat di Rapat Anggota', 'Memilih dan dipilih menjadi Pengurus atau Pengawas', 'Mendapat pelayanan usaha koperasi', 'Mendapat keterangan tentang perkembangan koperasi', 'Menerima bagian Sisa Hasil Usaha (SHU)', 'Menerima pengembalian simpanan jika keluar'].map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion label="Anggota luar biasa" openKey="luarBiasa">
              <ul className="list-disc pl-5 space-y-1.5 m-0">
                {['Status anggota luar biasa hanya berlaku jika diatur dalam AD/ART koperasi', 'Kepemilikan akun Dompetkita.id saja tidak otomatis menjadikan seseorang anggota koperasi apabila belum memenuhi ketentuan'].map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
