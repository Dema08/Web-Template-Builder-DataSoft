import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KIOSO — Rounded Playful
 * Super rounded, warna pastel berani, avatar stack + tombol ceria.
 * Untuk kids brand / F&B / startup fun.
 */
export default function Navbar19({ components = [], sectionId = null }) {
  const [cart, setCart] = useState(2);

  const defaultComponents = [
    { id: 'logo-19', type: 'heading', props: { content: 'kioso!', level: 'h2', fontSize: '26px', fontWeight: '900', color: '#0f172a' } },
    { id: 'nav-menu', type: 'button', props: { label: 'Menu', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-promo', type: 'button', props: { label: 'Promo', href: '#promo', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-outlets', type: 'button', props: { label: 'Outlets', href: '#outlets', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-order', type: 'button', props: { label: 'Order Yum! 🍔', href: '#order', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <div className="px-4 sm:px-6 pt-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-3 bg-[#fef9c3] border-[3px] border-slate-900 rounded-[28px] px-4 sm:px-5 py-2.5 shadow-[6px_6px_0_#0f172a]">
        <div className="flex items-center gap-2 shrink-0">
          {!hasImageLogo && <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-orange-300 border-2 border-slate-900 flex items-center justify-center text-xl rotate-[-6deg] select-none shrink-0">🍩</div>}
          {renderLayoutComponents(logoComps, sectionId)}
        </div>
        <div className="hidden md:flex items-center gap-1 bg-white border-2 border-slate-900 rounded-full px-1.5 py-1">
          {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
            <span className="text-sm font-extrabold text-slate-700 px-4 py-1.5 cursor-default select-none">Menu</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCart(c => c + 1); }}
            className="relative w-11 h-11 rounded-full bg-white border-2 border-slate-900 text-lg hover:rotate-12 transition-transform select-none"
            title="Tambah ke keranjang (preview)"
          >
            🛒
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-pink-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white">{cart}</span>
          </button>
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </nav>
    </div>
  );
}
