import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map7-badge', type: 'badge', props: { content: 'Lokasi', background: '#052e16', color: '#4ade80' } },
    { id: 'map7-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map7-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map7-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#94a3b8', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map7-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } },
    { id: 'map7-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#e2e8f0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="py-20 px-6 bg-[#020617] font-mono"> <div className="flex items-center gap-1.5 mb-6 select-none pointer-events-none"><span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-500" /><span className="w-3 h-3 rounded-full bg-green-500" /></div> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#1e293b', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#0f172a' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
