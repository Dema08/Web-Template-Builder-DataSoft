import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * NOIR — Full Dark Luxury
 * Navbar hitam pekat dengan aksen emas, garis bawah animasi,
 * CTA outline emas. Nuansa brand mewah / fashion / properti premium.
 */
export default function Navbar02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'logo-2', type: 'heading', props: { content: 'NOIR', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.3em' } },
    { id: 'nav-maison', type: 'button', props: { label: 'Maison', href: '#maison', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-collection', type: 'button', props: { label: 'Collection', href: '#collection', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-atelier', type: 'button', props: { label: 'Atelier', href: '#atelier', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-contact', type: 'button', props: { label: 'Contact', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'cta-reserve', type: 'button', props: { label: 'Reserve', href: '#reserve', variant: 'outline', size: 'small', radius: 'full', background: '#c9a227', color: '#c9a227' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <nav className="bg-[#0a0a0b] border-b border-white/10 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        <div className="flex flex-col leading-none shrink-0">
          {renderLayoutComponents(logoComps, sectionId)}
          <span className="text-[9px] tracking-[0.45em] text-amber-200/70 font-semibold mt-1 select-none">PARIS — JAKARTA</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
            <>
              <span className="text-[13px] tracking-[0.2em] uppercase text-slate-300 cursor-default select-none">Maison</span>
              <span className="text-[13px] tracking-[0.2em] uppercase text-slate-300 cursor-default select-none">Collection</span>
              <span className="text-[13px] tracking-[0.2em] uppercase text-slate-300 cursor-default select-none">Atelier</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:block text-[11px] tracking-[0.25em] text-amber-200/80 font-semibold select-none">EST. 2026</span>
          <div className="w-px h-6 bg-white/15 hidden sm:block" />
          {renderLayoutComponents(ctaComps, sectionId)}
        </div>
      </div>
      <div className="h-px mt-4 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
    </nav>
  );
}
