import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * SAKURA — Centered Elegant
 * Logo di tengah, menu kiri-kanan simetris. Nuansa wedding /
 * hospitality / brand feminin elegan dengan aksen blush.
 */
export default function Navbar06({ components = [], sectionId = null }) {
  const [open, setOpen] = useState(false);

  const defaultComponents = [
    { id: 'logo-6', type: 'heading', props: { content: 'Sakura & Co.', level: 'h2', fontSize: '26px', fontWeight: '700', color: '#831843' } },
    { id: 'nav-left-1', type: 'button', props: { label: 'Collections', href: '#collections', variant: 'ghost', size: 'small', background: 'transparent', color: '#6b7280' } },
    { id: 'nav-left-2', type: 'button', props: { label: 'Our Story', href: '#story', variant: 'ghost', size: 'small', background: 'transparent', color: '#6b7280' } },
    { id: 'nav-right-1', type: 'button', props: { label: 'Journal', href: '#journal', variant: 'ghost', size: 'small', background: 'transparent', color: '#6b7280' } },
    { id: 'cta-reserve-6', type: 'button', props: { label: 'Reserve Table', href: '#reserve', variant: 'primary', size: 'small', radius: 'full', background: '#be185d', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const leftComps = layoutComponents.filter(c => c.type === 'button' && c.id.includes('left'));
  const rightComps = layoutComponents.filter(c => c.type === 'button' && (c.id.includes('right') || String(c.id || '').startsWith('cta')));
  const allMenu = layoutComponents.filter(c => c.type === 'button');

  return (
    <nav className="sticky top-0 z-50 bg-[#fff7f8]/95 backdrop-blur border-b border-pink-100 px-6 py-4">
      <div className="max-w-6xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="hidden md:flex items-center justify-end gap-1">
          {leftComps.length > 0 ? renderLayoutComponents(leftComps, sectionId) : (
            <span className="text-sm font-medium text-slate-500 px-3 cursor-default select-none">Collections</span>
          )}
        </div>
        <div className="flex flex-col items-center leading-none">
          <span className="text-[10px] tracking-[0.4em] text-pink-400 font-bold select-none">EST • 2026</span>
          {renderLayoutComponents(logoComps, sectionId)}
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="w-8 h-px bg-pink-300" />
            <div className="w-1.5 h-1.5 rotate-45 bg-pink-400" />
            <div className="w-8 h-px bg-pink-300" />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {rightComps.length > 0 ? renderLayoutComponents(rightComps, sectionId) : (
            <span className="text-sm font-medium text-slate-500 px-3 cursor-default select-none">Journal</span>
          )}
        </div>
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(v => !v); }}
          className="md:hidden justify-self-end w-10 h-10 rounded-full bg-pink-100 text-pink-700 font-bold select-none"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-1 bg-white border border-pink-100 rounded-2xl p-2">
          {renderLayoutComponents(allMenu, sectionId)}
        </div>
      </div>
    </nav>
  );
}
