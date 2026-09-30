import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFleetGlobal
 * Global international fleet: Boeing 777F cargo planes, mega container vessels, and temperature-controlled trailers.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsFleetGlobal({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'gflt-badge', type: 'badge', props: { content: '✈️ GLOBAL CARGO FLEET & CARRIERS', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'gflt-title', type: 'heading', props: { content: 'Armada Kargo Udara & Samudra Lintas Benua', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gflt-desc', type: 'text', props: { content: 'Konektivitas tak terbatas dengan pesawat kargo wide-body, kapal peti kemas ultra-large, dan armada feeder regional.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 44px 0' } },
    {
      id: 'gf-card-1',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gf1-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80', alt: 'Boeing 777F Air Cargo', borderRadius: '16px', height: '190px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'gf1-badge', type: 'badge', props: { content: 'Air Freight Charter', variant: 'primary', background: 'rgba(231, 200, 115, 0.15)', color: '#e7c873', size: 'small' } },
        { id: 'gf1-title', type: 'heading', props: { content: 'Boeing 777-200F Widebody Freighter', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'gf1-desc', type: 'text', props: { content: 'Payload 102 Ton / 650 CBM dengan jarak jelajah 9.200 km non-stop untuk kargo bernilai tinggi dan farmasi.', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'gf1-btn', type: 'button', props: { label: 'Inquire Air Charter Space →', href: '#inquiry', variant: 'primary', size: 'small', radius: 'full', background: '#e7c873', color: '#0c0a09', fontWeight: '700' } },
      ],
    },
    {
      id: 'gf-card-2',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gf2-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&auto=format&fit=crop&q=80', alt: 'Ultra Large Container Vessel', borderRadius: '16px', height: '190px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'gf2-badge', type: 'badge', props: { content: 'Ocean Liner Service', variant: 'primary', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', size: 'small' } },
        { id: 'gf2-title', type: 'heading', props: { content: 'Ultra Large Container Vessel (ULCV)', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'gf2-desc', type: 'text', props: { content: 'Kapasitas 18.000 hingga 24.000 TEUs menghubungkan Tanjung Priok ke Rotterdam, Hamburg, Los Angeles, dan Shanghai.', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'gf2-btn', type: 'button', props: { label: 'Book Ocean Container →', href: '#inquiry', variant: 'primary', size: 'small', radius: 'full', background: '#38bdf8', color: '#0c0a09', fontWeight: '700' } },
      ],
    },
    {
      id: 'gf-card-3',
      type: 'card',
      props: { variant: 'service', background: '#141210', borderRadius: '24px', borderWidth: '1px', borderColor: '#292524', padding: '24px', hoverEffect: 'lift' },
      childrenComponents: [
        { id: 'gf3-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80', alt: 'Air Cargo Feeder & Turboprop', borderRadius: '16px', height: '190px', objectFit: 'cover', margin: '0 0 16px 0' } },
        { id: 'gf3-badge', type: 'badge', props: { content: 'Regional Express Feeder', variant: 'primary', background: 'rgba(74, 222, 128, 0.15)', color: '#4ade80', size: 'small' } },
        { id: 'gf3-title', type: 'heading', props: { content: 'Boeing 737-800BCF Regional Cargo', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '12px 0 6px 0' } },
        { id: 'gf3-desc', type: 'text', props: { content: 'Payload 23.9 Ton / 141 CBM untuk koneksi express bandara ASEAN (Singapura, Kuala Lumpur, Bangkok, Manila).', fontSize: '13px', color: '#a8a29e', margin: '0 0 16px 0' } },
        { id: 'gf3-btn', type: 'button', props: { label: 'Book Regional Feeder →', href: '#inquiry', variant: 'primary', size: 'small', radius: 'full', background: '#4ade80', color: '#0c0a09', fontWeight: '700' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComps = layoutComponents.filter(c => c.type !== 'card');
  const cardComps = layoutComponents.filter(c => c.type === 'card');

  return (
    <section id="fleet" className="py-24 px-4 sm:px-6 bg-[#0c0a09] text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {renderLayoutComponents(headerComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(headerComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(headerComps.filter(c => c.type === 'text'), sectionId)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderLayoutComponents(cardComps, sectionId)}
        </div>
      </div>
    </section>
  );
}
