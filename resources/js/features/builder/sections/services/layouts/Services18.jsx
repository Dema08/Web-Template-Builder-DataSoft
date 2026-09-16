import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SERVICES 18 — SOLSTICE App Download Services
 * Mirrors Hero18 visual styles, color palettes, background gradients, and badge designs.
 */
export default function Services18({ components = [], sectionId = null }) {
  const [os, setOs] = useState('iOS');

  const defaultComponents = [
    { id: 'srv18-badge', type: 'badge', props: { content: '★★★★★ 4.9 — 2M+ downloads', background: '#fff7ed', color: '#ea580c' } },
    { id: 'srv18-heading', type: 'heading', props: { content: 'Banking & financial services in your pocket', level: 'h2', fontSize: '54px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'srv18-text', type: 'text', props: { content: 'Send money, save smarter, and track every rupiah — all through our secure mobile services app.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    {
      id: 'srv18-card-1',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv18-c1-icon', type: 'icon', props: { icon: 'FaWallet', size: '32px', color: '#ea580c', align: 'left' } },
        { id: 'srv18-c1-title', type: 'heading', props: { content: 'Smart Saving', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv18-c1-desc', type: 'text', props: { content: 'Automated portfolio and rupiah savings.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'srv18-card-2',
      type: 'card',
      props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' },
      childrenComponents: [
        { id: 'srv18-c2-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '32px', color: '#ea580c', align: 'left' } },
        { id: 'srv18-c2-title', type: 'heading', props: { content: 'Secure Transfers', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
        { id: 'srv18-c2-desc', type: 'text', props: { content: 'Instant bank transfers with zero fees.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const copy = layoutComponents.filter(c => c.type !== 'card');
  const cards = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-rose-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {renderLayoutComponents(copy.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-4">{renderLayoutComponents(copy.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(copy.filter(c => c.type === 'text'), sectionId)}
          <div className="flex gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
            {['iOS', 'Android'].map(o => (
              <button
                key={o}
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOs(o); }}
                className={`text-xs font-bold rounded-full px-4 py-1.5 transition-all select-none ${os === o ? 'bg-slate-900 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}
              >
                {o}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 select-none">Active platform: {os} — Free download</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderLayoutComponents(cards, sectionId)}
        </div>
      </div>
    </section>
  );
}
