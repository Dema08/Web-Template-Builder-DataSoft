import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopMembershipPuskopolda
 * Membership Criteria, Rights, Duties, Benefits, Requirements, and Procedure for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopMembershipPuskopolda({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'kop-mem-badge', type: 'badge', props: { text: 'KEANGGOTAAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-mem-title', type: 'heading', props: { content: 'Bergabung Bersama Keluarga Besar Puskopolda', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },

    {
      id: 'crit-mem-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'sm' },
      childrenComponents: [
        { id: 'c-title', type: 'heading', props: { content: 'Siapa yang Dapat Menjadi Anggota?', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#1e40af' } },
        { id: 'c-desc', type: 'paragraph', props: { content: '• Anggota Polri aktif di wilayah daerah\n• Purnawirawan Polri\n• ASN di lingkungan korps Polri\n• Keluarga sah anggota Polri', fontSize: '14px', color: '#475569' } }
      ]
    },
    {
      id: 'ben-mem-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#bfdbfe', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'sm' },
      childrenComponents: [
        { id: 'b-title', type: 'heading', props: { content: 'Manfaat & Keuntungan Anggota', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#1e40af' } },
        { id: 'b-desc', type: 'paragraph', props: { content: '• Akses pinjaman bunga rendah & proses cepat\n• Harga diskon khusus di unit perdagangan\n• Pembagian SHU tahunan secara transparan\n• Pelayanan prioritas administrasi koperasi', fontSize: '14px', color: '#475569' } }
      ]
    },

    { id: 'kop-mem-cta', type: 'button', props: { label: 'Daftar Menjadi Anggota 📝', href: '#kontak', variant: 'primary', size: 'large', radius: 'md', background: '#2563eb', color: '#ffffff', fontWeight: '700' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-mem-badge');
  const titleC = lc.filter(c => c.id === 'kop-mem-title');
  const critC = lc.filter(c => c.id === 'crit-mem-card');
  const benC = lc.filter(c => c.id === 'ben-mem-card');
  const ctaBtn = lc.filter(c => c.id === 'kop-mem-cta');

  const steps = [
    { num: '1', title: 'Ambil Formulir', desc: 'Ambil formulir di kantor Puskopolda atau unduh dari website.' },
    { num: '2', title: 'Isi Data Lengkap', desc: 'Lengkapi identitas diri, kesatuan dinas, dan nomor kontak aktif.' },
    { num: '3', title: 'Lampirkan Berkas', desc: 'Lampirkan fotokopi KTA Polri/ASN, KTP, dan Kartu Keluarga.' },
    { num: '4', title: 'Setor Simpanan Pokok', desc: 'Lakukan penyetoran simpanan pokok awal melalui rekening resmi.' },
    { num: '5', title: 'Penerbitan KTA', desc: 'Kartu Tanda Anggota diterbitkan dan nikmati seluruh fasilitas.' },
  ];

  const checklist = [
    'Mengisi formulir pendaftaran anggota baru',
    'Memenuhi persyaratan administrasi (KTA/KTP/KK)',
    'Menyetujui AD/ART perkoperasian',
    'Membayar lunas Simpanan Pokok',
    'Bersedia membayar Simpanan Wajib rutin',
  ];

  return (
    <section id="keanggotaan" className="py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
        </div>

        {/* 2 Column Cards: Criteria & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>{renderLayoutComponents(critC, sectionId)}</div>
          <div>{renderLayoutComponents(benC, sectionId)}</div>
        </div>

        {/* Requirements Checklist & Procedure Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Checklist */}
          <div className="lg:col-span-5 bg-white border border-blue-200 rounded-2xl p-6 lg:p-8 shadow-sm space-y-4">
            <span className="text-xs font-bold text-[#1e40af] bg-blue-100 px-3 py-1 rounded-full">
              PERSYARATAN
            </span>
            <h3 className="text-xl font-bold text-slate-900">Syarat Keanggotaan</h3>
            <ul className="space-y-3 pt-2">
              {checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedure Steps */}
          <div className="lg:col-span-7 bg-[#dbeafe] rounded-2xl p-6 lg:p-8 shadow-sm space-y-4">
            <span className="text-xs font-bold text-blue-900 bg-white px-3 py-1 rounded-full">
              ALUR PENDAFTARAN
            </span>
            <h3 className="text-xl font-bold text-slate-900">5 Langkah Registrasi Mudah</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-xs">
                  <span className="inline-block w-7 h-7 rounded-lg bg-[#1e40af] text-white font-bold text-xs leading-7 text-center">
                    {st.num}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-2">{st.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-4">
          {renderLayoutComponents(ctaBtn, sectionId)}
        </div>
      </div>
    </section>
  );
}
