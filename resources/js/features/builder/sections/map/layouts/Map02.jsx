import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map2-badge', type: 'badge', props: { content: 'Lokasi', background: '#1c1917', color: '#e7c873' } },
    { id: 'map2-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map2-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map2-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#a8a29e', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map2-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } },
    { id: 'map2-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="py-24 px-6 bg-[#0c0a09] relative overflow-hidden"> <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#e7c873]/60 to-transparent" /> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#44403c', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#1c1917' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
