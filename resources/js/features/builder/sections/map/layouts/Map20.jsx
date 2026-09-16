import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map20({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map20-badge', type: 'badge', props: { content: 'Lokasi', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'map20-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map20-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map20-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#a5b4fc', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map20-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'map20-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="relative py-24 px-6 bg-slate-950 overflow-hidden"> <div className="pointer-events-none absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/25 to-transparent blur-3xl animate-pulse" /> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: 'rgba(196,181,253,0.3)', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
