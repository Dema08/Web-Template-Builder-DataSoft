import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * PAPERCUT — Brutalist Bold
 * Gaya neo-brutalism: border tebal hitam, shadow kotak keras,
 * warna kuning cerah. Berani & playful, ala web design award.
 */
export default function Navbar08({ components = [], sectionId = null }) {
  const [open, setOpen] = useState(false);

  const defaultComponents = [
    { id: 'logo-8', type: 'heading', props: { content: 'PAPERCUT*', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#000000' } },
    { id: 'nav-work', type: 'button', props: { label: 'Work', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'nav-about', type: 'button', props: { label: 'About', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'nav-blog', type: 'button', props: { label: 'Blog', href: '#blog', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'cta-hire', type: 'button', props: { label: "Hire Us ★", href: '#hire', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#facc15' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <nav className="sticky top-0 z-50 bg-[#facc15] border-b-4 border-black px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 bg-white border-[3px] border-black rounded-xl px-3 py-1.5 shadow-[4px_4px_0_#000] -rotate-1 shrink-0">
          {renderLayoutComponents(logoComps, sectionId)}
        </div>
        <div className="hidden md:flex items-center gap-2">
          {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
            <span className="text-sm font-black uppercase text-black bg-white border-[3px] border-black rounded-xl px-4 py-1.5 shadow-[3px_3px_0_#000] cursor-default select-none">Work</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center bg-white border-[3px] border-black rounded-xl px-3 py-1.5 shadow-[3px_3px_0_#000]">
            <span className="text-xs font-black select-none">● LIVE</span>
          </div>
          <div className="border-[3px] border-black rounded-xl shadow-[4px_4px_0_#000] rotate-1 hover:rotate-0 transition-transform">
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(v => !v); }}
            className="md:hidden w-11 h-11 bg-white border-[3px] border-black rounded-xl shadow-[3px_3px_0_#000] font-black select-none"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0_#000] p-2 flex flex-col gap-1">
          {renderLayoutComponents(menuComps, sectionId)}
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
    </nav>
  );
}
