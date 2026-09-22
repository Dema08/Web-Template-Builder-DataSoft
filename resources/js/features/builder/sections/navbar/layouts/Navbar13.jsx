import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SOLSTICE — Bottom Floating Dock
 * Navbar melayang di bawah ala mobile dock / macOS dock:
 * ikon membesar saat hover, ada indikator aktif animasi.
 */
export default function Navbar13({ components = [], sectionId = null }) {
  const [active, setActive] = useState('nav-home');

  const defaultComponents = [
    { id: 'logo-13', type: 'heading', props: { content: 'Solstice', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
    { id: 'nav-home', type: 'button', props: { label: '⌂', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'nav-explore', type: 'button', props: { label: '✦', href: '#explore', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
    { id: 'nav-cart', type: 'button', props: { label: '◉', href: '#cart', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
    { id: 'nav-user', type: 'button', props: { label: '☺', href: '#user', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
    { id: 'cta-join', type: 'button', props: { label: 'Join →', href: '#join', variant: 'primary', size: 'small', radius: 'full', background: '#f97316', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const dockComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <div className="px-4 pt-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-5 py-3 rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_16px_50px_-16px_rgba(15,23,42,0.3)]">
        <div className="flex items-center gap-2 shrink-0">
          {!hasImageLogo && <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white font-black shadow select-none shrink-0">S</div>}
          {renderLayoutComponents(logoComps, sectionId)}
        </div>
        <div
          className="hidden sm:flex items-end gap-1 bg-slate-100/90 border border-slate-200 rounded-2xl px-2 py-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          {dockComps.length > 0 ? dockComps.map(c => (
            <button
              key={c.id}
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActive(c.id); }}
              className={`relative w-11 h-11 rounded-xl text-lg transition-all duration-300 select-none ${active === c.id ? 'bg-white shadow-md scale-110 -translate-y-1' : 'hover:bg-white/70 hover:scale-105 text-slate-500'}`}
              title={c.props?.label}
            >
              {c.props?.label}
              {active === c.id && <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-orange-500" />}
            </button>
          )) : (
            <span className="text-sm text-slate-400 px-3 cursor-default select-none">dock</span>
          )}
          <div className="hidden">{renderLayoutComponents(dockComps, sectionId)}</div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </nav>
      <p className="text-center text-[10px] text-slate-400 mt-2 select-none">Klik ikon dock untuk preview state aktif — komponen tetap terseleksi via panel</p>
    </div>
  );
}
