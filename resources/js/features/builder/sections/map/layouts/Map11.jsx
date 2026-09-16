import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map11({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map11-badge', type: 'badge', props: { content: 'Lokasi', background: '#ffffff', color: '#7c3aed' } },
    { id: 'map11-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map11-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map11-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#ddd6fe', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map11-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'map11-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-indigo-600"> <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/20 blur-3xl animate-pulse" /> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#ffffff', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#ffffff' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
