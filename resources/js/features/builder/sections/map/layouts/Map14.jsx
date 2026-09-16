import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map14-badge', type: 'badge', props: { content: 'Lokasi', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'map14-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map14-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map14-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map14-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } },
    { id: 'map14-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="py-20 px-6 bg-white border-t-4 border-blue-800">  <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#bfdbfe', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#ffffff' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
