import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopDocumentsPuskopolda
 * Public Documents, Annual Reports, SOP, Forms, and Bylaws for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopDocumentsPuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'kop-doc-badge', type: 'badge', props: { text: 'DOKUMEN PUBLIK & UNDUHAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-doc-title', type: 'heading', props: { content: 'Pusat Unduhan Berkas & Formulir', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-doc-badge');
  const titleC = lc.filter(c => c.id === 'kop-doc-title');

  const categories = [
    {
      cat: '1. Profil Lembaga',
      items: [
        { title: 'Company Profile Puskopolda 2026', size: '4.2 MB', ext: 'PDF' }
      ]
    },
    {
      cat: '2. Laporan Keuangan & Tahunan',
      items: [
        { title: 'Laporan Pertanggungjawaban Keuangan 2025 (Audited)', size: '6.8 MB', ext: 'PDF' },
        { title: 'Buku Laporan Tahunan RAT 2026', size: '8.1 MB', ext: 'PDF' }
      ]
    },
    {
      cat: '3. Standar Operasional Prosedur (SOP)',
      items: [
        { title: 'SOP Pelayanan & Penyaluran Pinjaman Anggota', size: '1.5 MB', ext: 'PDF' },
        { title: 'SOP Pelayanan Anggota & Pengaduan Konsumen', size: '1.2 MB', ext: 'PDF' }
      ]
    },
    {
      cat: '4. Formulir Pendaftaran & Permohonan',
      items: [
        { title: 'Formulir Registrasi Keanggotaan Baru', size: '450 KB', ext: 'DOCX' },
        { title: 'Formulir Permohonan Pinjaman & Pembiayaan Usaha', size: '520 KB', ext: 'DOCX' }
      ]
    },
    {
      cat: '5. Peraturan & AD/ART',
      items: [
        { title: 'Anggaran Dasar & Anggaran Rumah Tangga (AD/ART)', size: '3.4 MB', ext: 'PDF' },
        { title: 'Peraturan Khusus Manajemen Simpanan Sukarela', size: '1.8 MB', ext: 'PDF' }
      ]
    }
  ];

  return (
    <section id="dokumen" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <p className="text-slate-600 text-sm sm:text-base">
            Unduh formulir permohonan, buku laporan RAT, dan panduan SOP layanan secara mudah.
          </p>
        </div>

        {/* Grouped Document Categories */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {categories.map((grp, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-base font-bold text-[#1e40af] border-b border-slate-200 pb-2">
                {grp.cat}
              </h3>
              <div className="space-y-2.5">
                {grp.items.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 hover:border-blue-300 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-blue-100 text-[#1e40af] flex items-center justify-center font-bold text-xs shrink-0">
                        {doc.ext}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Ukuran: {doc.size} • Format: {doc.ext}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-lg bg-[#2563eb] text-white text-xs font-bold hover:bg-[#1e40af] transition shrink-0 cursor-pointer"
                    >
                      Unduh 📥
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
