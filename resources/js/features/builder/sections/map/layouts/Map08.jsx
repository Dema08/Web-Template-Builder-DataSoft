import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map08({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map8-badge', type: 'badge', props: { content: 'Lokasi', background: '#fce7f3', color: '#be185d' } },
    { id: 'map8-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map8-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map8-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map8-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'map8-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#831843' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="py-24 px-6 bg-gradient-to-b from-pink-50 to-white"> <div className="flex items-center justify-center gap-2 my-1 select-none pointer-events-none"><div className="w-12 h-px bg-pink-300" /><span className="text-pink-400">✦</span><div className="w-12 h-px bg-pink-300" /></div> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#fff1f2', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#fff1f2' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
