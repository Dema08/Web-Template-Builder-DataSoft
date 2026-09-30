import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFooterCorporate
 * Enterprise mega footer with official association memberships and hub directory.
 */
export default function LogisticsFooterCorporate({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ft-logo', type: 'heading', props: { content: 'TRANSGO LOGISTICS INDONESIA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.06em' } },
    { id: 'ft-desc', type: 'text', props: { content: 'Penyedia infrastruktur logistik multi-modal, rantai pasok terintegrasi, dan armada kargo terbesar di Indonesia.', fontSize: '13px', color: '#94a3b8' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <footer className="bg-[#050c18] border-t border-slate-800 text-white pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        {/* Col 1 Brand */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center font-black text-slate-950 text-lg">
              T
            </div>
            {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}
          </div>
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
          <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-400">
            <span className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-md">Anggota ALFI / ILFA</span>
            <span className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-md">APTRINDO</span>
            <span className="bg-slate-900 border border-slate-700 px-3 py-1 rounded-md">ISO 9001:2015</span>
          </div>
        </div>

        {/* Col 2 Hubs */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-orange-400 uppercase tracking-wider">Hub Utama Jawa</p>
          <ul className="space-y-2 text-slate-400">
            <li>Central Hub Cikarang</li>
            <li>Hub Semarang Kaligawe</li>
            <li>Hub Surabaya Rungkut</li>
            <li>Hub Bandung Gedebage</li>
          </ul>
        </div>

        {/* Col 3 Hubs Outer */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-orange-400 uppercase tracking-wider">Hub Luar Jawa</p>
          <ul className="space-y-2 text-slate-400">
            <li>Hub Medan Belawan</li>
            <li>Hub Palembang Kertapati</li>
            <li>Hub Balikpapan (IKN Hub)</li>
            <li>Hub Makassar Pelabuhan</li>
          </ul>
        </div>

        {/* Col 4 Hotline */}
        <div className="space-y-3 text-xs">
          <p className="font-bold text-orange-400 uppercase tracking-wider">Layanan Dispatch</p>
          <ul className="space-y-2 text-slate-400">
            <li className="text-white font-bold">24/7 Hotline B2B:</li>
            <li className="text-orange-400 font-bold">0800-TRANSGO-B2B</li>
            <li>cs@transgo-logistics.id</li>
            <li>Emergency Break-down Support</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 PT TransGo Multi-Modal Logistik Indonesia. Hak Cipta Dilindungi.</p>
        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-orange-400">Kebijakan Privasi</a>
          <a href="#" className="hover:text-orange-400">Syarat Ketentuan Pengiriman</a>
          <a href="#" className="hover:text-orange-400">Kepatuhan Keselamatan K3</a>
        </div>
      </div>
    </footer>
  );
}
