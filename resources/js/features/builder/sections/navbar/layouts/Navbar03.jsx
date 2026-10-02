import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * AURORA — Gradient Border Glow
 * Navbar putih dengan border gradient animasi + blur glow di belakang.
 * Fresh, modern, cocok untuk SaaS / startup.
 */
export default function Navbar03({ components = [], sectionId = null }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const defaultComponents = [
    { id: 'logo-3', type: 'heading', props: { content: 'aurora', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#0f172a' } },
    { id: 'nav-product', type: 'button', props: { label: 'Product', href: '#product', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-docs', type: 'button', props: { label: 'Docs', href: '#docs', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-blog', type: 'button', props: { label: 'Blog', href: '#blog', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Free →', href: '#trial', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  const hasImageLogo = logoComps.some(c => c.type === 'image');

  return (
    <div className="px-4 sm:px-6 pt-5">
      <div className="max-w-6xl mx-auto rounded-2xl p-[1.5px] bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 shadow-[0_18px_50px_-12px_rgba(99,102,241,0.45)]">
        <nav className="rounded-2xl bg-white/95 backdrop-blur-xl px-4 sm:px-5 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 shrink-0 min-w-0">
              {!hasImageLogo && <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white text-sm font-black shadow shrink-0">a</div>}
              <div className="min-w-0 truncate">
                {renderLayoutComponents(logoComps, sectionId)}
              </div>
              {!hasImageLogo && <span className="hidden sm:inline-block ml-1 text-[10px] font-bold text-white bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full px-2 py-0.5 select-none">v3.0</span>}
            </div>
            <div className="hidden lg:flex items-center gap-1">
              {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
                <>
                  <span className="text-sm font-semibold text-slate-600 px-3 py-2 cursor-default select-none">Product</span>
                  <span className="text-sm font-semibold text-slate-600 px-3 py-2 cursor-default select-none">Pricing</span>
                  <span className="text-sm font-semibold text-slate-600 px-3 py-2 cursor-default select-none">Docs</span>
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
              <div className="pt-2 sm:hidden border-t border-slate-100">
                {renderLayoutComponents(ctaComps, sectionId)}
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
