import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 10 — Pulse Search-First Marketplace
 */
export default function Mission10({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'badge-10', type: 'badge', props: { content: '🔥 MARKETPLACE MISSION', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-10', type: 'heading', props: { content: 'Empowering millions of local merchants', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-10', type: 'text', props: { content: 'Our mission is to connect buyers and trusted sellers with instant search, secure escrow, and rapid delivery.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 26px 0' } },
    { id: 'btn-sell', type: 'button', props: { label: 'Join as Merchant →', href: '#merchant', variant: 'primary', size: 'large', radius: 'full', background: '#0f172a', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'badge'), sectionId)}
        <div className="mt-5 w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
        <div className="w-full max-w-2xl">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
        <div className="mt-4">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
      </div>
    </section>
  );
}
