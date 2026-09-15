import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LUMIÈRE — Floating Glass Pill
 * Premium floating navbar: pill melayang dengan glassmorphism,
 * underline animasi + tombol CTA gradient. Ala web agency mahal.
 */
export default function Navbar01({ components = [], sectionId = null }) {
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

  return (
    <div className="px-4 sm:px-6 pt-4 pb-2">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.25)]">
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 via-rose-400 to-indigo-500 shadow-md" />
          {renderLayoutComponents(logoComps, sectionId)}
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
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </nav>
    </div>
  );
}
