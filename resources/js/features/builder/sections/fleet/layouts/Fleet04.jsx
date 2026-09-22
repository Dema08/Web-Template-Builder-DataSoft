import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Neo-Brutalist Fleet
 * Gaya brutalis: kuning + border tebal + bayangan kotak keras.
 * Untuk perusahaan logistik yang ingin tampil bold & berani.
 */
export default function Fleet04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt4-badge', type: 'badge', props: { content: '★ ARMADA 2026', background: '#000000', color: '#facc15' } },
    { id: 'flt4-heading', type: 'heading', props: { content: 'ARMADA TANGGUH, PENGIRIMAN PASTI', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'flt4-text', type: 'text', props: { content: 'Tidak ada kompromi dalam kecepatan dan keamanan pengiriman barang Anda ke seluruh Indonesia.', fontSize: '16px', color: '#000000', align: 'left', margin: '0 0 24px 0' } },
    { id: 'flt4-btn1', type: 'button', props: { label: 'CEK ARMADA ★', href: '#fleet', variant: 'primary', size: 'large', radius: 'none', background: '#000000', color: '#facc15' } },
    { id: 'flt4-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '0px', borderWidth: '3px', borderColor: '#000000', shadow: 'none', padding: '24px' },
      childrenComponents: [
        { id: 'flt4-c1-title', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#000000', margin: '0 0 4px 0' } },
        { id: 'flt4-c1-desc', type: 'text', props: { content: 'Unit Armada', fontSize: '14px', color: '#374151', margin: '0' } },
      ]
    },
    { id: 'flt4-card-2', type: 'card', props: { variant: 'service', background: '#facc15', borderRadius: '0px', borderWidth: '3px', borderColor: '#000000', shadow: 'none', padding: '24px' },
      childrenComponents: [
        { id: 'flt4-c2-title', type: 'heading', props: { content: '99.8%', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#000000', margin: '0 0 4px 0' } },
        { id: 'flt4-c2-desc', type: 'text', props: { content: 'On-time Rate', fontSize: '14px', color: '#000000', margin: '0' } },
      ]
    },
    { id: 'flt4-card-3', type: 'card', props: { variant: 'service', background: '#000000', borderRadius: '0px', borderWidth: '3px', borderColor: '#000000', shadow: 'none', padding: '24px' },
      childrenComponents: [
        { id: 'flt4-c3-title', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#facc15', margin: '0 0 4px 0' } },
        { id: 'flt4-c3-desc', type: 'text', props: { content: 'Kota Tujuan', fontSize: '14px', color: '#facc15', margin: '0' } },
      ]
    },
    { id: 'flt4-card-4', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '0px', borderWidth: '3px', borderColor: '#000000', shadow: 'none', padding: '24px' },
      childrenComponents: [
        { id: 'flt4-c4-title', type: 'heading', props: { content: '24/7', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#000000', margin: '0 0 4px 0' } },
        { id: 'flt4-c4-desc', type: 'text', props: { content: 'Operasional', fontSize: '14px', color: '#374151', margin: '0' } },
      ]
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const buttons = layoutComponents.filter(c => c.type === 'button');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-[#facc15] border-b-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-block border-[3px] border-black bg-white px-3 py-1 shadow-[4px_4px_0_#000] -rotate-1 mb-4">
            {renderLayoutComponents(badge, sectionId)}
          </div>
          <div className="bg-white border-[3px] border-black p-8 shadow-[8px_8px_0_#000] rotate-[0.5deg]">
            {renderLayoutComponents(heading, sectionId)}
            {renderLayoutComponents(text, sectionId)}
            <div className="flex flex-wrap gap-3 mt-2">
              {renderLayoutComponents(buttons, sectionId)}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 border-[3px] border-black shadow-[8px_8px_0_#000]">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
