import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * DairyProgramsIndustrial
 * 3 B2B Programs & Industrial Support Cards with editable images, capacity badges, and inquiry buttons.
 */
export default function DairyProgramsIndustrial({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'prog-badge', type: 'badge', props: { text: '🏭 HULU KE HILIR • EKOSISTEM PETERNAKAN B2B', variant: 'outline', background: 'rgba(16,185,129,0.1)', color: '#059669', borderColor: 'rgba(16,185,129,0.3)' } },
    { id: 'prog-title', type: 'heading', props: { content: 'Infrastruktur Hulu Peternakan & Pengolahan Pakan Mandiri', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
    { id: 'prog-desc', type: 'paragraph', props: { content: 'Membangun ketahanan pasokan susu melalui produksi pakan konsentrat protein tinggi, bibit sapi unggul, dan otomatisasi pendingin desa.', fontSize: '16px', color: '#64748b' } },

    // Card 1: Feed Mill
    {
      id: 'card-prog1',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prog1-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80',
            alt: 'Pabrik Pengolahan Pakan Ternak Konsentrat Sapi Perah',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'prog1-badge', type: 'badge', props: { text: '🌾 PABRIK PAKAN • 120 TON/HARI', variant: 'solid', background: '#ecfdf5', color: '#047857' } },
        { id: 'prog1-title', type: 'heading', props: { content: 'Pabrik Pakan Konsentrat Protein 18%', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'prog1-desc', type: 'paragraph', props: { content: 'Formulasi nutrisi seimbang dari jagung, bungkil kedelai, dan mineral mikro untuk mendongkrak produksi susu harian dan kadar solid non-fat (SNF).', fontSize: '14px', color: '#64748b' } },
        { id: 'prog1-btn', type: 'button', props: { label: 'Order Pakan Ternak 🌾', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#059669', color: '#ffffff', fontWeight: '600' } },
      ]
    },

    // Card 2: Breeding & Genetics
    {
      id: 'card-prog2',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prog2-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80',
            alt: 'Sapi Perah Frisian Holstein Unggul Genetik',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'prog2-badge', type: 'badge', props: { text: '🧬 GENETIK UNGGUL • INSEMINASI', variant: 'solid', background: '#ecfdf5', color: '#047857' } },
        { id: 'prog2-title', type: 'heading', props: { content: 'Pemuliaan Genetik Sapi FH Pedigree', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'prog2-desc', type: 'paragraph', props: { content: 'Semen beku bersertifikasi dari pejantan unggul dunia untuk menghasilkan anakan sapi perah dengan kapasitas laktasi di atas 25 liter per hari.', fontSize: '14px', color: '#64748b' } },
        { id: 'prog2-btn', type: 'button', props: { label: 'Konsultasi Genetik Ternak 🧬', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#059669', color: '#ffffff', fontWeight: '600' } },
      ]
    },

    // Card 3: Bulk Tanker Fleet
    {
      id: 'card-prog3',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
      childrenComponents: [
        {
          id: 'prog3-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80',
            alt: 'Armada Truk Tangki Susu Stainless Isothermal',
            borderRadius: '12px',
            width: '100%',
            height: '210px',
            objectFit: 'cover',
          }
        },
        { id: 'prog3-badge', type: 'badge', props: { text: '🚛 LOGISTIK • TANGKI 10-25 KL', variant: 'solid', background: '#ecfdf5', color: '#047857' } },
        { id: 'prog3-title', type: 'heading', props: { content: 'Armada Tangki Susu Isothermal B2B', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
        { id: 'prog3-desc', type: 'paragraph', props: { content: 'Layanan sewa dan kontrak angkutan susu segar curah untuk rute antar-kota/antar-provinsi dengan isolasi ganda (kenaikan suhu < 0.5°C/24 jam).', fontSize: '14px', color: '#64748b' } },
        { id: 'prog3-btn', type: 'button', props: { label: 'Sewa Armada Tangki 🚛', href: '#contact', variant: 'primary', size: 'small', radius: 'md', background: '#059669', color: '#ffffff', fontWeight: '600' } },
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'prog-badge');
  const titleC = lc.filter(c => c.id === 'prog-title');
  const descC = lc.filter(c => c.id === 'prog-desc');
  const card1 = lc.filter(c => c.id === 'card-prog1');
  const card2 = lc.filter(c => c.id === 'card-prog2');
  const card3 = lc.filter(c => c.id === 'card-prog3');

  return (
    <section id="programs" className="py-20 lg:py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <div className="leading-relaxed">{renderLayoutComponents(descC, sectionId)}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>{renderLayoutComponents(card1, sectionId)}</div>
          <div>{renderLayoutComponents(card2, sectionId)}</div>
          <div>{renderLayoutComponents(card3, sectionId)}</div>
        </div>
      </div>
    </section>
  );
}
