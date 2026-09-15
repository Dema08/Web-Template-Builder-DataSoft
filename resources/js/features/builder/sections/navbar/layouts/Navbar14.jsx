import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MAISON DOUBLE — Double Row Classic
 * Dua baris: bar atas untuk kontak/bahasa, bar bawah logo + menu + CTA.
 * Klasik korporat / universitas / rumah sakit premium.
 */
export default function Navbar14({ components = [], sectionId = null }) {
  const [lang, setLang] = useState('ID');

  const defaultComponents = [
    { id: 'logo-14', type: 'heading', props: { content: 'MAISON DOUBLE', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#1e3a8a', letterSpacing: '0.08em' } },
    { id: 'nav-profile', type: 'button', props: { label: 'Profil', href: '#profil', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-layanan', type: 'button', props: { label: 'Layanan', href: '#layanan', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-berita', type: 'button', props: { label: 'Berita', href: '#berita', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-kontak', type: 'button', props: { label: 'Kontak', href: '#kontak', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-daftar', type: 'button', props: { label: 'Pendaftaran →', href: '#daftar', variant: 'primary', size: 'small', radius: 'md', background: '#1e40af', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const logoComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image');
  const menuComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#1e3a8a] text-white/90 px-6 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-medium">
          <div className="flex items-center gap-4">
            <span className="select-none">☎ (021) 800-1234</span>
            <span className="hidden sm:inline select-none">✉ hello@maisondouble.id</span>
          </div>
          <div className="flex items-center gap-1 bg-white/10 rounded-full p-0.5" onClick={(e) => e.stopPropagation()}>
            {['ID', 'EN'].map(l => (
              <button
                key={l}
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLang(l); }}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all select-none ${lang === l ? 'bg-white text-blue-900' : 'text-white/70 hover:text-white'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
      <nav className="bg-white border-b-2 border-blue-900/10 px-6 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-lg bg-blue-900 flex items-center justify-center text-white font-black text-lg select-none">M</div>
            <div className="leading-tight">
              {renderLayoutComponents(logoComps, sectionId)}
              <p className="text-[10px] text-slate-500 tracking-widest select-none">TRUSTED SINCE 1998</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            {menuComps.length > 0 ? renderLayoutComponents(menuComps, sectionId) : (
              <span className="text-sm font-semibold text-slate-600 px-3 cursor-default select-none">Profil</span>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
      </nav>
    </header>
  );
}
