import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairySupplyIndustrial
 * 4 Industrial Quality Cards + Supply Assurance Banner Card.
 */
export default function DairySupplyIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'sup-badge', type: 'badge', props: { text: '📊 STANDAR MUTU BAHAN BAKU INDUSTRI', variant: 'outline', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderColor: 'rgba(16,185,129,0.4)' } },
    { id: 'sup-title', type: 'heading', props: { content: 'Kepatuhan Spesifikasi Teknis Pabrik Pengolahan Susu (IPS)', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#f8fafc', letterSpacing: '-0.02em' } },
    { id: 'sup-desc', type: 'paragraph', props: { content: 'Kami menjamin setiap liter susu yang dikirim memenuhi kriteria mikrobiologi dan kimiawi sesuai persyaratan industri multinasional.', fontSize: '16px', color: '#94a3b8' } },

    // Card 1: Low TPC Bacteria
    {
      id: 'card-sup1',
      type: 'card',
      props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sup1-badge', type: 'badge', props: { text: '🔬 TPC < 1 JUTA', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
        { id: 'sup1-title', type: 'heading', props: { content: 'Total Plate Count Rendah Grade A', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sup1-desc', type: 'paragraph', props: { content: 'Sanitasi kandang dan sistem perahan otomatis menghasilkan angka kuman sangat rendah, ideal untuk proses UHT dan keju keras.', fontSize: '14px', color: '#94a3b8' } },
      ]
    },

    // Card 2: Zero Antibiotic Residue
    {
      id: 'card-sup2',
      type: 'card',
      props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sup2-badge', type: 'badge', props: { text: '🛡️ 100% BEBAS ANTIBIOTIK', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
        { id: 'sup2-title', type: 'heading', props: { content: 'Uji Residu Antibiotik Negatif', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sup2-desc', type: 'paragraph', props: { content: 'Protokol karantina sapi yang sedang dalam masa pengobatan medis menjamin tidak ada residu beta-laktam yang masuk ke tanki pasok.', fontSize: '14px', color: '#94a3b8' } },
      ]
    },

    // Card 3: High Solid Non-Fat
    {
      id: 'card-sup3',
      type: 'card',
      props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sup3-badge', type: 'badge', props: { text: '🥛 SNF > 8.25%', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
        { id: 'sup3-title', type: 'heading', props: { content: 'Kadar Bahan Kering Tanpa Lemak Tinggi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sup3-desc', type: 'paragraph', props: { content: 'Nutrisi pakan silase jagung dan konsentrat seimbang menghasilkan rendemen olahan tinggi untuk pabrik susu kental manis dan mentega.', fontSize: '14px', color: '#94a3b8' } },
      ]
    },

    // Card 4: Long-Term SLAs
    {
      id: 'card-sup4',
      type: 'card',
      props: { background: '#0a1d1a', borderColor: 'rgba(16,185,129,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'sup4-badge', type: 'badge', props: { text: '📋 KONTRAK TAHUNAN', variant: 'solid', background: 'rgba(16,185,129,0.25)', color: '#6ee7b7' } },
        { id: 'sup4-title', type: 'heading', props: { content: 'Jaminan Kepastian Pasokan 365 Hari', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f8fafc' } },
        { id: 'sup4-desc', type: 'paragraph', props: { content: 'Perjanjian kerja sama terikat volume dengan sistem kompensasi penalti jika terjadi keterlambatan atau kegagalan spesifikasi mutu.', fontSize: '14px', color: '#94a3b8' } },
      ]
    },

    // Supply Assurance Banner Card
    {
      id: 'supply-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #064e3b 0%, #031c17 100%)', borderColor: 'rgba(16,185,129,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
      childrenComponents: [
        { id: 'supply-banner-badge', type: 'badge', props: { text: '📜 SERTIFIKASI SISTEM MANAJEMEN KEAMANAN PANGAN', variant: 'solid', background: 'rgba(16,185,129,0.3)', color: '#a7f3d0' } },
        { id: 'supply-banner-title', type: 'heading', props: { content: 'Audit Berkala & Keterlacakan Sumber Susu (Farm Traceability)', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
        { id: 'supply-banner-desc', type: 'paragraph', props: { content: 'Sistem barcode RFID pada ternak memungkinkan pelacakan asal susu hingga ke kelompok peternak di tingkat desa.', fontSize: '14px', color: '#cbd5e1' } },
        { id: 'supply-banner-btn', type: 'button', props: { label: 'Jadwalkan Audit Pabrik Koperasi 🏭', href: '#contact', variant: 'primary', size: 'medium', radius: 'md', background: '#10b981', color: '#ffffff', fontWeight: '700' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'sup-badge');
  const titleC = lc.filter(c => c.id === 'sup-title');
  const descC = lc.filter(c => c.id === 'sup-desc');
  const card1 = lc.filter(c => c.id === 'card-sup1');
  const card2 = lc.filter(c => c.id === 'card-sup2');
  const card3 = lc.filter(c => c.id === 'card-sup3');
  const card4 = lc.filter(c => c.id === 'card-sup4');
  const banner = lc.filter(c => c.id === 'supply-banner-card');

  return (
    <section className="py-20 lg:py-24 bg-[#071318] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
          <div>{renderLayoutComponents(card4, sectionId)}</div>
        </div>

        <div>{renderLayoutComponents(banner, sectionId)}</div>
      </div>
    </section>
  );
}
