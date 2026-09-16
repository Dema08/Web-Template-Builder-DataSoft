import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map1-badge', type: 'badge', props: { content: 'Lokasi', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'map1-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map1-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map1-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map1-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    { id: 'map1-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="relative py-24 px-6 bg-white overflow-hidden"> <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-200/60 via-fuchsia-200/50 to-cyan-200/60 blur-3xl animate-pulse" /> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#e2e8f0', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#ffffff' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
