import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Chronology Spec
 * Lini masa bergaya jurnal editorial monokrom dengan tipografi serif elegan dan kronologi peristiwa terperinci.
 * Cocok untuk institusi hukum, galeri seni, biografi perusahaan, dan penerbitan.
 */
export default function Timeline13({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tml13-badge', type: 'badge', props: { content: 'JURNAL KRONOLOGI RESMI', background: '#f1f5f9', color: '#334155' } },
    { id: 'tml13-heading', type: 'heading', props: { content: 'Kronologi Sejarah & Dokumentasi Peristiwa', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml13-text', type: 'text', props: { content: 'Arsip resmi momen-momen penting yang membentuk identitas dan reputasi lembaga kami.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');

  const chronicles = [
    { year: '2016', chapter: 'Babak I — Deklarasi Gagasan', desc: 'Perumusan manifest fondasi dan penandatanganan akta pendirian resmi oleh para inisiator.' },
    { year: '2019', chapter: 'Babak II — Konsolidasi Standar Mutu', desc: 'Perolehan sertifikasi kepatuhan internasional pertama dan pembentukan dewan pengawas independen.' },
    { year: '2023', chapter: 'Babak III — Transformasi Arsitektur Layanan', desc: 'Modernisasi seluruh infrastruktur informasi dan peluncuran portal publik terpadu.' },
    { year: '2026', chapter: 'Babak IV — Dasawarsa Pertama & Visi 2035', desc: 'Peringatan satu dekade kiprah dengan komitmen perluasan dampak ke tingkat global.' },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex flex-col items-center text-center space-y-3 font-sans">
          {renderLayoutComponents(badge, sectionId)}
          <div className="w-full font-serif">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="w-full font-sans">{renderLayoutComponents(text, sectionId)}</div>
        </div>

        <div className="space-y-6 font-sans">
          {chronicles.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-300 shadow-sm flex flex-col md:flex-row md:items-start gap-6 hover:border-slate-400 transition-colors">
              <span className="text-2xl font-serif font-black text-slate-900 md:w-28 shrink-0">{c.year}</span>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 font-serif">{c.chapter}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
