import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Floating Glass Pill
 * Premium floating navbar: pill melayang dengan glassmorphism,
 * underline animasi + tombol CTA gradient. Ala web agency mahal.
 */
export default function Navbar01({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'logo-1', type: 'heading', props: { content: 'LUMIÈRE', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0f172a', letterSpacing: '0.18em' } },
    { id: 'nav-home', type: 'button', props: { label: 'Home', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-work', type: 'button', props: { label: 'Work', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-studio', type: 'button', props: { label: 'Studio', href: '#studio', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-journal', type: 'button', props: { label: 'Journal', href: '#journal', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-book', type: 'button', props: { label: 'Book a Call →', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0f172a', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <div className="px-4 sm:px-6 pt-4 pb-2">
      <nav className="max-w-6xl mx-auto rounded-[2rem] bg-white/90 backdrop-blur-xl border border-slate-200/80 p-3 sm:px-6 shadow-xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 shrink-0 min-w-0">
            {!hasImageLogo && <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-amber-300 via-rose-400 to-indigo-500 shadow-md shrink-0" />}
            <div className="min-w-0 truncate">
              {renderLayoutComponents(logoComps, sectionId)}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 rounded-full px-1.5 py-1">
            {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
              <>
                <span className="text-sm font-semibold text-slate-600 px-4 py-2 cursor-default select-none">Home</span>
                <span className="text-sm font-semibold text-slate-600 px-4 py-2 cursor-default select-none">Work</span>
                <span className="text-sm font-semibold text-slate-600 px-4 py-2 cursor-default select-none">Studio</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:block">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl transition text-base font-bold"
              aria-label="Toggle Navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            {renderLayoutComponents(menuComps, sectionId)}
            <div className="pt-2 border-t border-slate-100 sm:hidden">
              {renderLayoutComponents(ctaComps, sectionId)}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
