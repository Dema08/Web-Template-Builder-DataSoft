import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map12({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map12-badge', type: 'badge', props: { content: 'Lokasi', background: '#0f172a', color: '#38bdf8' } },
    { id: 'map12-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map12-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map12-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#94a3b8', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map12-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    { id: 'map12-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="py-20 px-6 bg-slate-950"> <div className="mt-6 flex gap-6 select-none pointer-events-none"><div><p className="text-2xl font-black text-white">99.99%</p><p className="text-xs text-slate-500">Uptime</p></div><div><p className="text-2xl font-black text-white">120+</p><p className="text-xs text-slate-500">Klien</p></div></div> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#334155', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#1e293b' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
