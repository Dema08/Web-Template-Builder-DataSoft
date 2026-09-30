import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsFooterTech
 * Modern clean tech logistics footer with app badges and developer links.
 */
export default function LogisticsFooterTech({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'ft-logo', type: 'heading', props: { content: 'TRACKFAST ID', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#0284c7', letterSpacing: '0.04em' } },
    { id: 'ft-desc', type: 'text', props: { content: 'Platform pengiriman on-demand, instant fulfillment, dan kurir ramah lingkungan bertenaga IoT & AI.', fontSize: '13px', color: '#64748b' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center text-white font-black text-sm">
              ⚡
            </div>
            {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}
          </div>
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}
          <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL 99.99%</span>
          </div>
        </div>

        <div className="space-y-3 text-xs">
          <p className="font-bold text-sky-400 uppercase tracking-wider">Produk & Fitur</p>
          <ul className="space-y-2 text-slate-400">
            <li>Instant Courier &lt;2 Jam</li>
            <li>Same-Day Delivery</li>
            <li>Cash On Delivery (COD)</li>
            <li>Smart Micro-Hub Locker</li>
          </ul>
        </div>

        <div className="space-y-3 text-xs">
          <p className="font-bold text-sky-400 uppercase tracking-wider">Developer & API</p>
          <ul className="space-y-2 text-slate-400">
            <li>REST API Documentation</li>
            <li>Shopify & WooCommerce Plugin</li>
            <li>Webhook Telematics Docs</li>
            <li>Postman Collection</li>
          </ul>
        </div>

        <div className="space-y-3 text-xs">
          <p className="font-bold text-sky-400 uppercase tracking-wider">Pusat Bantuan</p>
          <ul className="space-y-2 text-slate-400">
            <li>Live Chat Support 24/7</li>
            <li>Pusat Bantuan & FAQ</li>
            <li>Klaim Garansi Paket 100%</li>
            <li>support@trackfast.id</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 PT TrackFast Teknologi Logistik. All Rights Reserved.</p>
        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-sky-400">Kebijakan Privasi</a>
          <a href="#" className="hover:text-sky-400">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-sky-400">Keamanan Data</a>
        </div>
      </div>
    </footer>
  );
}
