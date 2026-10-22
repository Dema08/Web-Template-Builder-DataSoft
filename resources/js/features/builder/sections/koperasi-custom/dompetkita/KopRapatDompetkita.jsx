import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopRapatDompetkita — Section #rapat
 * Responsive: Scrollable quorum table with mobile hint, 2-column layout stacks on mobile.
 */
export default function KopRapatDompetkita({ components = [], sectionId = null }) {
  const [open, setOpen] = useState({ rat: true, ralb: false, daring: false });
  const toggle = key => setOpen(prev => ({ ...prev, [key]: !prev[key] }));

  const defaultComponents = [
    { id: 'dompet-rapat-title', type: 'heading', props: { content: 'Rapat Anggota: kuorum dan keputusan', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
    { id: 'dompet-rapat-lead', type: 'paragraph', props: { content: 'Rapat Anggota adalah kekuasaan tertinggi. Keputusan diambil dengan musyawarah mufakat. Jika tidak tercapai, diputuskan dengan suara terbanyak: disetujui lebih dari setengah anggota yang hadir. Suara tidak bisa diwakilkan.', fontSize: '16px', color: '#627783', lineHeight: '1.75' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-rapat-title');
  const leadC = lc.filter(c => c.id === 'dompet-rapat-lead');

  const quorum = [
    { jenis: 'Rapat Anggota biasa (kuorum pertama)', hadir: 'Lebih dari 1/2 anggota terdaftar', setuju: 'Lebih dari 1/2 yang hadir' },
    { jenis: 'Rapat Anggota kedua (jika kuorum gagal)', hadir: 'Sedikitnya 1/3 anggota terdaftar', setuju: 'Lebih dari 1/2 yang hadir' },
    { jenis: 'Ubah Anggaran Dasar, penggabungan, peleburan (RALB)', hadir: 'Sedikitnya 3/4 anggota', setuju: 'Sedikitnya 3/4 yang hadir' },
    { jenis: 'Pembubaran koperasi', hadir: 'Sedikitnya 3/4 anggota', setuju: 'Sedikitnya 2/3 yang hadir' },
  ];

  const wewenang = [
    'Menetapkan dan mengubah AD, ART, dan peraturan khusus',
    'Memilih, mengangkat, dan memberhentikan Pengurus dan Pengawas',
    'Menetapkan rencana kerja, anggaran, dan mengesahkan laporan keuangan',
    'Mengesahkan pertanggungjawaban Pengurus dan Pengawas',
    'Menetapkan pembagian SHU',
    'Memutuskan penggabungan, peleburan, kepailitan, dan pembubaran',
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
    <section id="rapat" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span aria-hidden="true" className="block w-10 h-1 rounded bg-[#F4B544] mb-5" />
        <div className="mb-3 leading-snug font-['Bricolage_Grotesque',system-ui,sans-serif]">
          {renderLayoutComponents(titleC, sectionId)}
        </div>
        <div className="text-sm sm:text-base leading-relaxed text-[#627783] max-w-2xl mb-6 sm:mb-8">
          {renderLayoutComponents(leadC, sectionId)}
        </div>

        {/* Mobile scroll hint */}
        <div className="sm:hidden text-xs text-[#627783] mb-2 flex items-center gap-1.5 font-medium">
          <span>👉</span> Geser ke samping untuk melihat tabel kuorum lengkap
        </div>

        {/* Quorum Table */}
        <div className="border border-[#DCE7EC] rounded-2xl shadow-sm overflow-x-auto bg-white mb-4" tabIndex={0} role="region" aria-label="Tabel kuorum dan keputusan Rapat Anggota">
          <table className="w-full border-collapse text-xs sm:text-sm text-left min-w-[500px]">
            <thead>
              <tr className="bg-[#123B52] text-white font-['Bricolage_Grotesque',system-ui,sans-serif]">
                <th className="py-3 px-4 font-bold">Jenis rapat</th>
                <th className="py-3 px-4 font-bold">Kuorum kehadiran</th>
                <th className="py-3 px-4 font-bold">Kuorum keputusan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DCE7EC]">
              {quorum.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-4 font-semibold text-[#173042]">{row.jenis}</td>
                  <td className="py-3 px-4 text-[#147D92] font-semibold">{row.hadir}</td>
                  <td className="py-3 px-4 text-[#627783]">{row.setuju}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs sm:text-sm text-[#627783] mb-8 leading-relaxed">
          Usul pembubaran atau penyelenggaraan rapat oleh anggota memerlukan dukungan sedikitnya 1/5 jumlah anggota. Rapat kedua diadakan paling lambat 30 hari setelah rapat pertama, dengan undangan paling lambat 14 hari sebelumnya.
        </p>

        {/* Two-col: wewenang + bentuk rapat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div>
            <h3 className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-base sm:text-lg font-bold text-[#173042] mb-3">
              Wewenang Rapat Anggota
            </h3>
            <ul className="list-none p-0 m-0 divide-y divide-[#DCE7EC]">
              {wewenang.map((w, i) => (
                <li key={i} className="py-3.5 pl-7 relative text-xs sm:text-sm leading-relaxed text-[#173042]">
                  <span aria-hidden="true" className="absolute left-0 top-5 w-2.5 h-2.5 rounded-full bg-[#147D92]" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-['Bricolage_Grotesque',system-ui,sans-serif] text-base sm:text-lg font-bold text-[#173042] mb-3">
              Bentuk rapat
            </h3>
            <Accordion label="Rapat Anggota Tahunan (RAT)" openKey="rat">
              <ul className="list-disc pl-5 space-y-1.5 m-0">
                <li>Paling lambat 6 bulan setelah tahun buku berakhir</li>
                <li>Membahas laporan jalannya koperasi, neraca, perhitungan hasil usaha, dan SHU</li>
                <li>Pimpinan rapat dipilih dari anggota, bukan Pengurus</li>
              </ul>
            </Accordion>
            <Accordion label="Rapat Anggota Luar Biasa (RALB)" openKey="ralb">
              <ul className="list-disc pl-5 space-y-1.5 m-0">
                <li>Untuk keputusan mendesak</li>
                <li>Contoh: menjual atau menjaminkan aset lebih dari 25% total aset, atau menerima hibah lebih dari 25% aset</li>
              </ul>
            </Accordion>
            <Accordion label="Rapat kelompok, tertulis, dan daring" openKey="daring">
              <ul className="list-disc pl-5 space-y-1.5 m-0">
                <li>Sistem kelompok dapat dipakai bila anggota lebih dari 500 orang</li>
                <li>Rapat tertulis: anggota diberi waktu 14 hari untuk menjawab</li>
                <li>Rapat daring wajib memungkinkan semua peserta saling melihat dan mendengar</li>
              </ul>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
