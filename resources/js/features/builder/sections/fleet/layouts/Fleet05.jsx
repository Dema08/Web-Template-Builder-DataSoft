import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERENITY — Minimal Clean Grid
 * Krem bersih + tipografi ringan + grid 4 kolom armada.
 * Untuk logistik premium yang ingin tampil elegan dan tenang.
 */
export default function Fleet05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt5-heading', type: 'heading', props: { content: 'Armada Kami', level: 'h2', fontSize: '52px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'flt5-text', type: 'text', props: { content: 'Setiap unit dipilih dengan teliti — keandalan, ketepatan, dan keamanan dalam satu armada.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 48px 0' } },
    { id: 'flt5-card-1', type: 'card', props: { variant: 'service', background: '#faf9f7', borderRadius: '0px', borderWidth: '1px', borderColor: '#e7e5e4', shadow: 'none', padding: '32px' },
      childrenComponents: [
        { id: 'flt5-c1-title', type: 'heading', props: { content: 'Truk Tronton', level: 'h3', fontSize: '20px', fontWeight: '600', color: '#1c1917', margin: '0 0 8px 0' } },
        { id: 'flt5-c1-desc', type: 'text', props: { content: '120 unit aktif untuk pengiriman antar kota skala besar.', fontSize: '14px', color: '#78716c', margin: '0' } },
      ]
    },
    { id: 'flt5-card-2', type: 'card', props: { variant: 'service', background: '#faf9f7', borderRadius: '0px', borderWidth: '1px', borderColor: '#e7e5e4', shadow: 'none', padding: '32px' },
      childrenComponents: [
        { id: 'flt5-c2-title', type: 'heading', props: { content: 'Cold Chain', level: 'h3', fontSize: '20px', fontWeight: '600', color: '#1c1917', margin: '0 0 8px 0' } },
        { id: 'flt5-c2-desc', type: 'text', props: { content: '48 unit pendingin -20°C untuk farmasi dan produk segar.', fontSize: '14px', color: '#78716c', margin: '0' } },
      ]
    },
    { id: 'flt5-card-3', type: 'card', props: { variant: 'service', background: '#faf9f7', borderRadius: '0px', borderWidth: '1px', borderColor: '#e7e5e4', shadow: 'none', padding: '32px' },
      childrenComponents: [
        { id: 'flt5-c3-title', type: 'heading', props: { content: 'Kapal Kargo', level: 'h3', fontSize: '20px', fontWeight: '600', color: '#1c1917', margin: '0 0 8px 0' } },
        { id: 'flt5-c3-desc', type: 'text', props: { content: '12 kapal untuk pengiriman antar pulau kapasitas besar.', fontSize: '14px', color: '#78716c', margin: '0' } },
      ]
    },
    { id: 'flt5-card-4', type: 'card', props: { variant: 'service', background: '#faf9f7', borderRadius: '0px', borderWidth: '1px', borderColor: '#e7e5e4', shadow: 'none', padding: '32px' },
      childrenComponents: [
        { id: 'flt5-c4-title', type: 'heading', props: { content: 'Air Cargo', level: 'h3', fontSize: '20px', fontWeight: '600', color: '#1c1917', margin: '0 0 8px 0' } },
        { id: 'flt5-c4-desc', type: 'text', props: { content: 'Pengiriman udara ekpres same-day ke 30+ kota besar.', fontSize: '14px', color: '#78716c', margin: '0' } },
      ]
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-[#faf9f6]" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.5em] text-stone-400 mb-6 select-none">A R M A D A — T R A N S P O R T A S I</p>
        {renderLayoutComponents(heading, sectionId)}
        <div className="flex items-center justify-center gap-2 my-5">
          <div className="w-16 h-px bg-stone-300" />
          <div className="w-1.5 h-1.5 rotate-45 bg-stone-400" />
          <div className="w-16 h-px bg-stone-300" />
        </div>
        <div className="max-w-2xl mx-auto">{renderLayoutComponents(text, sectionId)}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-12 border-l border-t border-stone-200">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
