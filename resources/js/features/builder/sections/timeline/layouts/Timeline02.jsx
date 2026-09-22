import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NOIR — Full Dark Cinematic Vertical Stepper
 * Lini masa gelap mewah dengan garis vertikal beraksen emas, kartu bernuansa sinematik, dan tahapan proses berurutan.
 * Cocok untuk alur kerja eksklusif, proses layanan VIP, dan lini masa perusahaan prestisius.
 */
export default function Timeline02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'tm02-badge', type: 'badge', props: { content: '✦ THE NOIR PROCESS ROADMAP', background: '#1c1917', color: '#e7c873' } },
    { id: 'tm02-heading', type: 'heading', props: { content: 'Alur Eksekusi & Tahapan Presisi Tinggi', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 14px 0' } },
    { id: 'tm02-desc', type: 'text', props: { content: 'Setiap langkah dirancang dengan ketelitian maksimal untuk memastikan hasil akhir melampaui ekspektasi Anda.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 48px 0' } },
    {
      id: 'tm02-card-1', type: 'card', props: { variant: 'default', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tm02-c1-badge', type: 'badge', props: { content: 'TAHAP 01', background: '#292524', color: '#e7c873', size: 'small' } },
        { id: 'tm02-c1-title', type: 'heading', props: { content: 'Konsultasi & Strategi Awal', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#fafaf9', align: 'left', margin: '14px 0 6px 0' } },
        { id: 'tm02-c1-desc', type: 'text', props: { content: 'Analisis mendalam mengenai kebutuhan, parameter teknis, dan sasaran strategis Anda.', fontSize: '14px', color: '#a8a29e', align: 'left', margin: '0' } },
      ]
    },
    {
      id: 'tm02-card-2', type: 'card', props: { variant: 'default', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tm02-c2-badge', type: 'badge', props: { content: 'TAHAP 02', background: '#292524', color: '#e7c873', size: 'small' } },
        { id: 'tm02-c2-title', type: 'heading', props: { content: 'Desain & Rekayasa Arsitektur', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#fafaf9', align: 'left', margin: '14px 0 6px 0' } },
        { id: 'tm02-c2-desc', type: 'text', props: { content: 'Penyusunan blueprint komprehensif dan spesifikasi detail berstandar industri kelas dunia.', fontSize: '14px', color: '#a8a29e', align: 'left', margin: '0' } },
      ]
    },
    {
      id: 'tm02-card-3', type: 'card', props: { variant: 'default', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tm02-c3-badge', type: 'badge', props: { content: 'TAHAP 03', background: '#292524', color: '#e7c873', size: 'small' } },
        { id: 'tm02-c3-title', type: 'heading', props: { content: 'Implementasi & Pengujian Ketat', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#fafaf9', align: 'left', margin: '14px 0 6px 0' } },
        { id: 'tm02-c3-desc', type: 'text', props: { content: 'Eksekusi presisi disertai audit kualitas multi-tahap demi menjamin keandalan tanpa cacat.', fontSize: '14px', color: '#a8a29e', align: 'left', margin: '0' } },
      ]
    },
    {
      id: 'tm02-card-4', type: 'card', props: { variant: 'default', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'tm02-c4-badge', type: 'badge', props: { content: 'TAHAP 04', background: '#292524', color: '#e7c873', size: 'small' } },
        { id: 'tm02-c4-title', type: 'heading', props: { content: 'Peluncuran & Dukungan Penuh', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#fafaf9', align: 'left', margin: '14px 0 6px 0' } },
        { id: 'tm02-c4-desc', type: 'text', props: { content: 'Serah terima resmi dengan pendampingan operasional dan pemantauan performa 24/7.', fontSize: '14px', color: '#a8a29e', align: 'left', margin: '0' } },
      ]
    }
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComp = layoutComponents.filter(c => c.type === 'badge');
  const titleComp = layoutComponents.find(c => c.id === 'tm02-heading') || layoutComponents.find(c => c.type === 'heading');
  const descComp = layoutComponents.find(c => c.id === 'tm02-desc') || layoutComponents.find(c => c.type === 'text');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="relative py-28 px-6 bg-[#0c0a09] overflow-hidden" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Noir Glow Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,39,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-3">
          {badgeComp.length > 0 && renderLayoutComponents(badgeComp, sectionId)}
          <div className="w-full">
            {titleComp && renderLayoutComponents([titleComp], sectionId)}
          </div>
          <div className="flex items-center gap-3 my-2">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#c9a227]" />
            <div className="w-2 h-2 rotate-45 bg-[#c9a227]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#c9a227]" />
          </div>
          {descComp && (
            <div className="max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              {renderLayoutComponents([descComp], sectionId)}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}
