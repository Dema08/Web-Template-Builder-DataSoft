import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopPartnersPuskopolda
 * Strategic Institutional & Banking Partners Grid for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopPartnersPuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'kop-ptr-badge', type: 'badge', props: { text: 'MITRA KERJA SAMA', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-ptr-title', type: 'heading', props: { content: 'Jejaring Kemitraan Strategis', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-ptr-badge');
  const titleC = lc.filter(c => c.id === 'kop-ptr-title');

  const partners = [
    { name: 'Kepolisian Negara RI', tag: '🏛️ PEMBINA', desc: 'Induk institusi pembina kesejahteraan anggota.' },
    { name: 'Bank BRI', tag: '🏦 PERBANKAN', desc: 'Mitra pengelolaan kas, simpanan & payroll.' },
    { name: 'Bank Mandiri', tag: '🏦 PERBANKAN', desc: 'Penyedia fasilitas virtual account pembayaran.' },
    { name: 'Koperasi Nusantara', tag: '🤝 KOPERASI', desc: 'Sinergi jaringan retail dan permodalan.' },
    { name: 'Pemerintah Daerah', tag: '🏢 PEMDA', desc: 'Pembinaan regulasi & sertifikasi koperasi.' },
    { name: 'Pusat Koperasi Nasional', tag: '🇮🇩 INDUK NASIONAL', desc: 'Asosiasi induk konsolidasi koperasi nasional.' },
    { name: 'Asuransi Jiwa & Kredit', tag: '🛡️ ASURANSI', desc: 'Proteksi pinjaman dan keselamatan anggota.' },
    { name: 'PT Mitra Distribusi Sembako', tag: '📦 LOGISTIK', desc: 'Penyedia pasokan kebutuhan pangan primer.' },
  ];

  return (
    <section id="mitra" className="py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <p className="text-slate-600 text-sm sm:text-base">
            Kolaborasi terpercaya bersama institusi pemerintah, perbankan BUMN, dan mitra usaha terkemuka.
          </p>
        </div>

        {/* 8 Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-blue-300 transition text-center space-y-2">
              <span className="text-[11px] font-bold text-[#1e40af] bg-blue-50 px-2.5 py-1 rounded-md">
                {p.tag}
              </span>
              <h4 className="text-base font-bold text-slate-900 pt-1">{p.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
