import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MONOCLE — Editorial Magazine Fleet
 * Gaya editorial majalah: serif besar + timeline / tabel spesifikasi armada.
 * Untuk perusahaan logistik premium, annual report style.
 */
export default function Fleet13({ components = [], sectionId = null }) {
  const specs = [
    { type: 'Truk Tronton 40ft', count: '180 unit', payload: '25 ton', range: 'Seluruh Jawa', tech: 'GPS + CCTV' },
    { type: 'Cold Chain -20°C', count: '80 unit', payload: '8 ton', range: 'Nasional', tech: 'IoT Sensor' },
    { type: 'Kapal Kontainer', count: '12 unit', payload: '1.000 ton', range: 'Antar Pulau', tech: 'AIS Tracking' },
    { type: 'Air Cargo Slot', count: '8 slot/hari', payload: '2 ton', range: '30+ Bandara', tech: 'AWB Digital' },
  ];

  const defaultComponents = [
    { id: 'flt13-badge', type: 'badge', props: { content: 'SPESIFIKASI ARMADA — 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'flt13-heading', type: 'heading', props: { content: 'Setiap Unit, Dirancang untuk Keunggulan', level: 'h2', fontSize: '56px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'flt13-text', type: 'text', props: { content: 'Spesifikasi lengkap armada kami yang telah melewati standar sertifikasi internasional ISO 28000.', fontSize: '17px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    { id: 'flt13-btn', type: 'button', props: { label: 'Unduh Katalog Armada →', href: '#catalog', variant: 'primary', size: 'large', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');

  return (
    <section className="py-14 px-6 bg-[#faf9f6] border-b-2 border-stone-900" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div>
            {renderLayoutComponents(badge, sectionId)}
            <div className="mt-4">{renderLayoutComponents(heading, sectionId)}</div>
            {renderLayoutComponents(text, sectionId)}
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-5 select-none">ISO 28000 Certified · Carbon Neutral Fleet</p>
            {renderLayoutComponents(buttons, sectionId)}
          </div>
          <div className="border-2 border-stone-900 shadow-[8px_8px_0_#1c1917]">
            <div className="bg-stone-900 text-white px-4 py-3 flex justify-between text-xs font-bold uppercase tracking-widest select-none">
              <span>Tipe Armada</span>
              <span>Unit</span>
            </div>
            {specs.map((s, i) => (
              <div key={i} className={`px-4 py-4 border-b border-stone-200 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-stone-900">{s.type}</p>
                    <p className="text-xs text-stone-500 mt-1">{s.payload} · {s.range}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-stone-900">{s.count}</p>
                    <p className="text-xs text-stone-500">{s.tech}</p>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-[11px] italic text-stone-500 bg-white px-4 py-2 border-t-2 border-stone-900 select-none">Data per Q3 2026 · Diperbarui bulanan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
