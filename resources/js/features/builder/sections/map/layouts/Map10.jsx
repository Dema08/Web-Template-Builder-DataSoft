import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
export default function Map10({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'map10-badge', type: 'badge', props: { content: 'Lokasi', background: '#fef2f2', color: '#dc2626' } },
    { id: 'map10-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map10-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map10-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map10-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    { id: 'map10-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  return ( <section className="py-20 px-6 bg-slate-50"> <div className="w-full max-w-xl mt-2 flex items-center gap-2 bg-white border rounded-full px-5 py-3 shadow-sm select-none pointer-events-none"><span className="text-slate-400">⌕</span><span className="text-sm text-slate-400 flex-1 text-left">Cari…</span></div> <div className="relative max-w-6xl mx-auto"> <div className="flex flex-col items-center text-center gap-1"> {renderLayoutComponents(layoutComponents.filter((c) => c.type !== 'image'), sectionId)} </div> <div className="mt-8 rounded-2xl border overflow-hidden select-none pointer-events-none" style={{ borderColor: '#e2e8f0', height: '400px' }}> <div className="w-full h-full flex items-center justify-center" style={{ background: '#ffffff' }}> <div className="text-center"> <div className="text-6xl mb-4">PIN</div> <div className="text-lg font-bold">Map Location</div> <div className="text-sm">123 Main Street, City</div> </div> </div> </div> </div> </section> );
}
