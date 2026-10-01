import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyProcessFresh
 * 4 Quality Control & Pasteurization Cards + SNI Quality Banner Card.
 */
export default function DairyProcessFresh({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'proc-badge', type: 'badge', props: { text: '🧪 PROSES PASTEURISASI & STANDAR MUTU', variant: 'outline', background: 'rgba(13,148,136,0.15)', color: '#5eead4', borderColor: 'rgba(20,184,166,0.4)' } },
    { id: 'proc-title', type: 'heading', props: { content: 'Rantai Pasok Higienis Dari Kandang Hingga Botol Siap Konsumsi', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#f0fdfa', letterSpacing: '-0.02em' } },
    { id: 'proc-desc', type: 'paragraph', props: { content: 'Setiap tetes susu melewati pengujian ketat di laboratorium koperasi untuk memastikan bebas antibiotik, bebas bakteri patogen, dan memiliki kadar lemak optimal.', fontSize: '16px', color: '#99f6e4' } },

    // Card 1: Uji Lab Pagi Hari
    {
      id: 'card-proc1',
      type: 'card',
      props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'proc1-badge', type: 'badge', props: { text: '🔬 UJI ALKOHOL & BJ', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4' } },
        { id: 'proc1-title', type: 'heading', props: { content: 'Uji Kualitas Langsung Saat Diterima', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdfa' } },
        { id: 'proc1-desc', type: 'paragraph', props: { content: 'Pemeriksaan berat jenis (min. 1.028), uji reduktase, dan keasaman untuk menolak susu yang tidak memenuhi standar mutu tinggi.', fontSize: '14px', color: '#99f6e4' } },
      ]
    },

    // Card 2: Rapid Cooling Tank
    {
      id: 'card-proc2',
      type: 'card',
      props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'proc2-badge', type: 'badge', props: { text: '❄️ COOLING 4°C', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4' } },
        { id: 'proc2-title', type: 'heading', props: { content: 'Pendinginan Cepat Dalam 1 Jam', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdfa' } },
        { id: 'proc2-desc', type: 'paragraph', props: { content: 'Susu langsung dimasukkan ke tanki pendingin stainless steel SUS 304 food-grade untuk menghentikan pertumbuhan bakteri alami.', fontSize: '14px', color: '#99f6e4' } },
      ]
    },

    // Card 3: Gentle HTST Pasteurization
    {
      id: 'card-proc3',
      type: 'card',
      props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'proc3-badge', type: 'badge', props: { text: '🌡️ HTST PASTEURISASI', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4' } },
        { id: 'proc3-title', type: 'heading', props: { content: 'Pasteurisasi Presisi Menjaga Gizi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdfa' } },
        { id: 'proc3-desc', type: 'paragraph', props: { content: 'Pemanasan 72°C selama 15 detik membunuh mikroba jahat tanpa merusak enzim baik dan struktur rasa susu segar.', fontSize: '14px', color: '#99f6e4' } },
      ]
    },

    // Card 4: Cold Chain Fleet
    {
      id: 'card-proc4',
      type: 'card',
      props: { background: '#08332f', borderColor: 'rgba(20,184,166,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'proc4-badge', type: 'badge', props: { text: '🚛 THERMAL LOGISTICS', variant: 'solid', background: 'rgba(13,148,136,0.25)', color: '#5eead4' } },
        { id: 'proc4-title', type: 'heading', props: { content: 'Distribusi Termo-Isolasi Harian', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#f0fdfa' } },
        { id: 'proc4-desc', type: 'paragraph', props: { content: 'Pengiriman ke pelanggan rumah tangga, kedai kopi, dan supermarket menggunakan armada box berpendingin.', fontSize: '14px', color: '#99f6e4' } },
      ]
    },

    // SNI Quality Banner Card
    {
      id: 'sni-banner-card',
      type: 'card',
      props: { background: 'linear-gradient(135deg, #0f766e 0%, #042f2c 100%)', borderColor: 'rgba(20,184,166,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
      childrenComponents: [
        { id: 'sni-banner-badge', type: 'badge', props: { text: '🏆 SERTIFIKASI RESMI SNI, BPOM & HALAL MUI', variant: 'solid', background: 'rgba(13,148,136,0.3)', color: '#ccfbf1' } },
        { id: 'sni-banner-title', type: 'heading', props: { content: 'Jaminan Kesejahteraan Peternak & Transparansi Harga Bagi Hasil', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
        { id: 'sni-banner-desc', type: 'paragraph', props: { content: 'Koperasi membeli susu peternak dengan harga terbaik di atas rata-rata pasar dan membagikan SHU secara transparan di setiap Rapat Anggota Tahunan.', fontSize: '14px', color: '#99f6e4' } },
        { id: 'sni-banner-btn', type: 'button', props: { label: 'Pelajari Sistem Kemitraan Koperasi 🤝', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#14b8a6', color: '#ffffff', fontWeight: '700' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'proc-badge');
  const titleC = lc.filter(c => c.id === 'proc-title');
  const descC = lc.filter(c => c.id === 'proc-desc');
  const card1 = lc.filter(c => c.id === 'card-proc1');
  const card2 = lc.filter(c => c.id === 'card-proc2');
  const card3 = lc.filter(c => c.id === 'card-proc3');
  const card4 = lc.filter(c => c.id === 'card-proc4');
  const banner = lc.filter(c => c.id === 'sni-banner-card');

  return (
    <section className="py-20 lg:py-24 bg-[#02211d] text-teal-100">
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
