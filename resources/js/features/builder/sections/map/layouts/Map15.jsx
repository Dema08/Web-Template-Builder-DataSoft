import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map15({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map15-badge', type: 'badge', props: { content: 'Lokasi', background: '#0f172a', color: '#ffffff' } },
    { id: 'map15-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map15-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map15-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map15-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'map15-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="py-20 px-6 bg-[#fafaf9]"> <div className="flex items-center justify-between text-[11px] tracking-widest text-stone-500 border-b border-stone-300 pb-2 mb-6 select-none pointer-events-none"><span>KURASI</span><span>EDISI MINGGUAN</span></div> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#ffffff', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#ffffff' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
