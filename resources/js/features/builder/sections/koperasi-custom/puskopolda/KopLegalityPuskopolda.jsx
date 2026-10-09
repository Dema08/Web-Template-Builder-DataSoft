import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopLegalityPuskopolda
 * Legal Entity Information, NIK, NIB, NPWP, and Verification Documents for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopLegalityPuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'kop-leg-badge', type: 'badge', props: { text: 'LEGALITAS & PERIZINAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-leg-title', type: 'heading', props: { content: 'Legalitas Kelembagaan Resmi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-leg-badge');
  const titleC = lc.filter(c => c.id === 'kop-leg-title');

  const legalInfo = [
    { label: 'Nama Koperasi', value: 'PUSAT KOPERASI KEPOLISIAN DAERAH (PUSKOPOLDA)' },
    { label: 'Badan Hukum', value: 'No. 1234/BH/XIV/1998' },
    { label: 'Nomor Induk Koperasi (NIK)', value: '1234567890123456' },
    { label: 'Nomor Induk Berusaha (NIB)', value: '9876543210987' },
    { label: 'NPWP Badan', value: '01.234.567.8-901.000' },
    { label: 'Alamat Kantor', value: 'Jl. Contoh No. 123, Jakarta Selatan' },
    { label: 'Tahun Berdiri', value: '1998' },
    { label: 'Status Kelembagaan', value: 'Aktif Terdaftar Kemenkop UKM RI' },
  ];

  const docs = [
    { title: 'Akta Pendirian Koperasi', desc: 'Salinan Akta Notaris pengesahan dasar perkoperasian.', tag: 'PDF' },
    { title: 'SK Badan Hukum Kemenkop', desc: 'Surat Keputusan Menteri Koperasi & UKM RI.', tag: 'PDF' },
    { title: 'NPWP & SKT Perpajakan', desc: 'Bukti pendaftaran wajib pajak badan resmi.', tag: 'PDF' },
  ];

  return (
    <section id="legalitas" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <p className="text-slate-600 text-sm sm:text-base">
            Beroperasi dengan landasan hukum yang sah dan akuntabel di bawah pengawasan dinas terkait.
          </p>
        </div>

        {/* 2 Column Grid: Info Table & Document Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table */}
          <div className="lg:col-span-7 bg-[#f8fafc] border border-blue-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-[#1e40af] mb-4">
              Identitas & Izin Berusaha
            </h3>
            <div className="divide-y divide-slate-200">
              {legalInfo.map((item, idx) => (
                <div key={idx} className="py-3 flex flex-col sm:flex-row sm:justify-between text-sm gap-1">
                  <span className="font-semibold text-slate-700 sm:w-1/2">{item.label}</span>
                  <span className="font-mono text-slate-900 sm:w-1/2 text-left sm:text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Docs */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Dokumen Pendukung
            </h3>
            {docs.map((doc, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-[#1e40af] bg-blue-50 px-2 py-0.5 rounded">
                    {doc.tag}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">{doc.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{doc.desc}</p>
                </div>
                <a
                  href="#dokumen"
                  className="px-3 py-1.5 rounded-lg bg-[#2563eb] text-white text-xs font-semibold hover:bg-[#1e40af] transition shrink-0"
                >
                  Unduh
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
