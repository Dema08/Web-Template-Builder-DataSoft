import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopVisiMisiDompetkita — Section #misi (Visi/Misi)
 * Responsive: Stacks on mobile, 2 columns on tablet and desktop.
 */
export default function KopVisiMisiDompetkita({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dompet-vm-title', type: 'heading', props: { content: 'Membangun kesejahteraan anggota melalui koperasi yang adil, transparan, dan bertanggung jawab.', level: 'h2', fontSize: 'clamp(24px,3.2vw,40px)', fontWeight: '700', color: '#173042', letterSpacing: '-0.035em' } },
    { id: 'dompet-vm-lead', type: 'paragraph', props: { content: 'Itulah visi kami: anggota bekerja sama mengembangkan usaha dan memperoleh manfaat ekonomi secara bersama.', fontSize: '16px', color: '#627783', lineHeight: '1.75' } },
    { id: 'dompet-misi1', type: 'paragraph', props: { content: 'Pengembangan layanan keuangan yang sesuai prinsip dan ketentuan yang dipilih serta disahkan koperasi.', fontSize: '15.5px', color: '#173042', lineHeight: '1.7' } },
    { id: 'dompet-misi2', type: 'paragraph', props: { content: 'Edukasi keuangan, pendampingan, dan pengembangan kesejahteraan karyawan.', fontSize: '15.5px', color: '#173042', lineHeight: '1.7' } },
    { id: 'dompet-misi3', type: 'paragraph', props: { content: 'Penyediaan kebutuhan sehari-hari dan layanan distribusi yang relevan bagi anggota.', fontSize: '15.5px', color: '#173042', lineHeight: '1.7' } },
    { id: 'dompet-misi4', type: 'paragraph', props: { content: 'Rasa memiliki, transparansi, dan semangat gotong royong dalam kegiatan koperasi.', fontSize: '15.5px', color: '#173042', lineHeight: '1.7' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'dompet-vm-title');
  const leadC = lc.filter(c => c.id === 'dompet-vm-lead');
  const m1 = lc.filter(c => c.id === 'dompet-misi1');
  const m2 = lc.filter(c => c.id === 'dompet-misi2');
  const m3 = lc.filter(c => c.id === 'dompet-misi3');
  const m4 = lc.filter(c => c.id === 'dompet-misi4');
  const missions = [m1, m2, m3, m4];

  return (
    <section id="misi" className="py-12 sm:py-20 font-['Source_Sans_3',system-ui,sans-serif]" style={{ scrollMarginTop: '75px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-start">
          <div>
            <span aria-hidden="true" className="block w-10 h-1 rounded bg-[#F4B544] mb-5" />
            <div className="mb-3 leading-snug font-['Bricolage_Grotesque',system-ui,sans-serif]">
              {renderLayoutComponents(titleC, sectionId)}
            </div>
            <div className="text-sm sm:text-base leading-relaxed text-[#627783] max-w-xl">
              {renderLayoutComponents(leadC, sectionId)}
            </div>
          </div>
          <ul className="list-none p-0 m-0 space-y-0 divide-y divide-[#DCE7EC]">
            {missions.map((misi, i) => (
              <li key={i} className="py-4 pl-7 relative text-sm sm:text-base leading-relaxed text-[#173042]">
                <span aria-hidden="true" className="absolute left-0 top-6 w-3 h-3 rounded-full bg-[#147D92]" />
                {renderLayoutComponents(misi, sectionId)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
