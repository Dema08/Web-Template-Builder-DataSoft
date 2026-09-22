import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Warm Gradient Bento
 * Grid bento dengan gradien hangat merah-orange.
 * Untuk armada ekspedisi dengan nuansa segar dan modern.
 */
export default function Fleet08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'flt8-badge', type: 'badge', props: { content: '🚀 Armada Terbaru 2026', background: '#fff1f2', color: '#e11d48' } },
    { id: 'flt8-heading', type: 'heading', props: { content: 'Pilihan Armada untuk Setiap Kebutuhan', level: 'h2', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'flt8-text', type: 'text', props: { content: 'Dari pengiriman lokal skala kecil hingga distribusi nasional skala besar, kami punya solusi tepat.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 40px 0' } },
    { id: 'flt8-card-1', type: 'card', props: { variant: 'feature', background: 'linear-gradient(135deg, #fef2f2 0%, #fce7f3 100%)', borderRadius: '24px', borderWidth: '0px', shadow: 'none', padding: '32px' },
      childrenComponents: [
        { id: 'flt8-c1-title', type: 'heading', props: { content: '🚛 Truk Ekspres', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'flt8-c1-desc', type: 'text', props: { content: '250 unit · Jangkauan Jawa-Bali · GPS + CCTV aktif sepanjang perjalanan.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
    { id: 'flt8-card-2', type: 'card', props: { variant: 'feature', background: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)', borderRadius: '24px', borderWidth: '0px', shadow: 'none', padding: '32px' },
      childrenComponents: [
        { id: 'flt8-c2-title', type: 'heading', props: { content: '❄️ Cold Chain', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'flt8-c2-desc', type: 'text', props: { content: '80 unit · Suhu -20°C sampai +10°C · Cocok farmasi, makanan beku.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
    { id: 'flt8-card-3', type: 'card', props: { variant: 'feature', background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderRadius: '24px', borderWidth: '0px', shadow: 'none', padding: '32px' },
      childrenComponents: [
        { id: 'flt8-c3-title', type: 'heading', props: { content: '⛵ Kapal Kargo', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'flt8-c3-desc', type: 'text', props: { content: '12 kapal · Antar pulau · Kapasitas hingga 1.000 ton per perjalanan.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
    { id: 'flt8-card-4', type: 'card', props: { variant: 'feature', background: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)', borderRadius: '24px', borderWidth: '0px', shadow: 'none', padding: '32px' },
      childrenComponents: [
        { id: 'flt8-c4-title', type: 'heading', props: { content: '✈️ Air Cargo', level: 'h3', fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '0 0 8px 0' } },
        { id: 'flt8-c4-desc', type: 'text', props: { content: 'Same-day delivery ke 30+ kota besar di seluruh Indonesia.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ]
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badge = layoutComponents.filter(c => c.type === 'badge');
  const heading = layoutComponents.filter(c => c.type === 'heading');
  const text = layoutComponents.filter(c => c.type === 'text');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {renderLayoutComponents(badge, sectionId)}
          <div className="mt-4 w-full">{renderLayoutComponents(heading, sectionId)}</div>
          <div className="max-w-2xl">{renderLayoutComponents(text, sectionId)}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
