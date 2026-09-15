import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * EMERALD — Eco Newsletter Footer
 * Hijau segar + newsletter expand + badge karbon-netral.
 * Untuk eco brand / organik / skincare natural.
 */
export default function Footer04({ components = [], sectionId = null }) {
  const [email, setEmail] = useState('');

  const defaultComponents = [
    { id: 'brand-4', type: 'heading', props: { content: '🌿 Emerald', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#f0fdf4', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-4', type: 'text', props: { content: 'Botanical rituals, carbon-neutral from farm to door.', fontSize: '14px', color: '#86efac', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-shop', type: 'button', props: { label: 'Shop', href: '#shop', variant: 'ghost', size: 'small', background: 'transparent', color: '#bbf7d0' } },
    { id: 'link-rituals', type: 'button', props: { label: 'Rituals', href: '#rituals', variant: 'ghost', size: 'small', background: 'transparent', color: '#bbf7d0' } },
    { id: 'link-impact', type: 'button', props: { label: 'Our Impact', href: '#impact', variant: 'ghost', size: 'small', background: 'transparent', color: '#bbf7d0' } },
    { id: 'cta-join', type: 'button', props: { label: 'Join Green Club →', href: '#club', variant: 'primary', size: 'small', radius: 'full', background: '#22c55e', color: '#ffffff' } },
    { id: 'copy-4', type: 'text', props: { content: '© 2026 Emerald Botanics. 32.000+ pohon ditanam bersama pelanggan.', fontSize: '12px', color: '#4ade80', align: 'center', margin: '0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));

  return (
    <footer className="bg-gradient-to-b from-emerald-950 to-green-950 px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-6 py-5 flex flex-col md:flex-row md:items-center gap-4 mb-10">
          <div className="flex-1">
            <p className="text-sm font-black text-white">Dapatkan ritual & promo hijau 🌱</p>
            <p className="text-xs text-emerald-300">1 email/minggu. Tanpa spam, bisa berhenti kapan saja.</p>
          </div>
          <div
            className="flex items-center gap-2 bg-white rounded-full pl-5 pr-1.5 py-1.5 w-full md:w-96 focus-within:ring-4 focus-within:ring-emerald-400/30 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              placeholder="nama@email.com"
              className="flex-1 bg-transparent outline-none text-sm text-slate-800"
            />
            <span
              className="bg-emerald-600 text-white text-xs font-black rounded-full px-5 py-2.5 select-none cursor-pointer hover:bg-emerald-500 transition"
              onClick={(e) => e.stopPropagation()}
            >
              Join
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-emerald-400 mb-3 select-none">SHOP</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (
                <span className="text-sm text-emerald-200 cursor-default select-none">Shop</span>
              )}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-emerald-400 mb-3 select-none">HELP</p>
            <div className="flex flex-col gap-1.5 text-sm text-emerald-200 select-none">
              <span>Shipping</span>
              <span>Returns</span>
              <span>FAQ</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-emerald-400 select-none">COMMUNITY</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (
            <span className="text-xs text-emerald-400 cursor-default select-none">© 2026 Emerald Botanics.</span>
          )}
        </div>
      </div>
    </footer>
  );
}
