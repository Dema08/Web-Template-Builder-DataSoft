import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopStrukturDompetkita — Section #struktur
 * Responsive: Org chart has horizontal scroll container with mobile hint.
 */
export default function KopStrukturDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-str-title', type: 'heading', props: { content: 'Struktur organisasi', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
    { id: 'dompet-str-lead', type: 'paragraph', props: { content: 'Pengurus dipilih oleh anggota melalui Rapat Anggota. Pengurus dan Pengawas menjalankan amanah sesuai AD/ART, dengan masa jabatan dan persyaratan yang ditetapkan koperasi.', fontSize: '16px', color: '#627783', lineHeight: '1.75' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-str-title');
  const leadC = lc.filter(c => c.id === 'dompet-str-lead');

  const nodeBase = { position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px', minWidth: '160px', maxWidth: '210px', minHeight: '54px', padding: '12px 16px', borderRadius: '12px', fontWeight: 700, lineHeight: 1.3, textAlign: 'center', fontFamily: '"Bricolage Grotesque",system-ui,sans-serif', boxShadow: '0 5px 16px rgba(23,48,66,0.07)', border: '1px solid #DCE7EC', background: '#FFFFFF', color: '#173042', fontSize: '13.5px' };
  const nodeTop = { ...nodeBase, background: '#F4B544', color: '#173042', borderColor: '#F4B544', boxShadow: '0 7px 18px rgba(244,181,68,0.19)' };
  const nodeK = { ...nodeBase, background: '#147D92', color: '#FFFFFF', borderColor: '#147D92' };
  const nodeW = { ...nodeBase, background: '#2F8878', color: '#FFFFFF', borderColor: '#2F8878' };
  const nodeSubtle = { ...nodeBase, borderColor: '#D1E0E6', background: '#FFFFFF' };

  return (
    <section id="struktur" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px' }}>
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
          <span>👉</span> Geser ke samping untuk melihat bagan struktur organisasi lengkap
        </div>

        {/* Org Chart Container */}
        <div className="border border-[#DCE7EC] rounded-2xl bg-white p-3 sm:p-7 shadow-sm overflow-x-auto" tabIndex={0} role="region" aria-label="Bagan struktur organisasi">
          <div className="text-center min-w-[720px] py-2">
            {/* Rapat Anggota (top) */}
            <div className="flex flex-col items-center">
              <div style={nodeTop}>
                Rapat Anggota
                <small className="text-[11px] font-medium opacity-90 block">Kekuasaan tertinggi koperasi</small>
              </div>
              <div className="w-0.5 h-7 bg-[#DCE7EC]" />

              {/* Level 2: Pengawas + Ketua */}
              <div className="flex gap-14 justify-center relative">
                <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-[#DCE7EC]" />

                {/* Pengawas */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                  <div style={nodeW}>
                    Badan Pengawas
                    <small className="text-[11px] font-medium opacity-90 block">Pengawasan dan nasihat</small>
                  </div>
                </div>

                {/* Ketua */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                  <div style={nodeK}>
                    Ketua
                    <small className="text-[11px] font-medium opacity-90 block">Memimpin pengurus koperasi</small>
                  </div>
                  <div className="w-0.5 h-7 bg-[#DCE7EC]" />

                  {/* Level 3 under Ketua */}
                  <div className="flex gap-4 justify-center relative">
                    <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-[#DCE7EC]" />

                    {/* Wakil Ketua */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                      <div style={nodeK}>Wakil Ketua</div>
                      <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                          <div style={nodeSubtle}>Bidang Usaha</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                          <div style={nodeSubtle}>Bidang Anggota</div>
                        </div>
                      </div>
                    </div>

                    {/* Sekretaris */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                      <div style={nodeSubtle}>Sekretaris</div>
                    </div>

                    {/* Bendahara */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                      <div style={nodeSubtle}>Bendahara</div>
                    </div>

                    {/* Pengelola Unit Usaha */}
                    <div className="flex flex-col items-center">
                      <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                      <div style={nodeSubtle}>Pengelola Unit Usaha</div>
                      <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                      <div className="flex gap-2">
                        {['Unit 1: Perdagangan', 'Unit 2: Peternakan', 'Unit 3: Simpan Pinjam'].map(u => (
                          <div key={u} className="flex flex-col items-center">
                            <div className="w-0.5 h-7 bg-[#DCE7EC]" />
                            <div style={{ ...nodeSubtle, minWidth: '110px', fontSize: '12px', padding: '8px 10px' }}>{u}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
