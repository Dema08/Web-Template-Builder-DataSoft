import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailFooterOmni
 * Omnichannel Supermart footer with download links, 24/7 CS hotline, and store locator.
 */
export default function RetailFooterOmni({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'omni-ft-title', type: 'heading', props: { content: 'PT SUPERMART RETAIL NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
    { id: 'omni-ft-desc', type: 'paragraph', props: { content: 'Jaringan Pasar Swalayan & Retail Omnichannel Terbesar di Indonesia. Solusi Belanja Hemat, Segar & Terpercaya Untuk Keluarga Sejak 2010.', fontSize: '13px', color: '#fda4af' } },
    { id: 'omni-ft-copy', type: 'paragraph', props: { content: '© 2026 PT Supermart Retail Nusantara. Belanja Lebih, Hemat Lebih.', fontSize: '12px', color: '#fb7185' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'omni-ft-title');
  const descC = lc.filter(c => c.id === 'omni-ft-desc');
  const copyC = lc.filter(c => c.id === 'omni-ft-copy');

  return (
    <footer className="bg-[#080205] text-rose-200/70 py-12 border-t border-rose-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-rose-950">
          <div className="md:col-span-2 space-y-3">
            {renderLayoutComponents(titleC, sectionId)}
            {renderLayoutComponents(descC, sectionId)}
            <div className="flex items-center gap-3 pt-2 text-xs text-rose-400 font-semibold">
              <span>📍 Supermart Headquarter: Tower Retail Center Lt. 18, Jl. TB Simatupang, Jakarta Selatan</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-rose-100 uppercase tracking-wider mb-3">Layanan Konsumen</h4>
            <ul className="space-y-2 text-xs">
              <li>Pusat Bantuan & Komplain (24 Jam)</li>
              <li>Garansi Pengembalian Produk Segar</li>
              <li>Panduan Click & Collect Gerai</li>
              <li>Cek Status Pengiriman Pesanan</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-rose-100 uppercase tracking-wider mb-3">Metode Pembayaran</h4>
            <ul className="space-y-2 text-xs">
              <li>QRIS All Payment & E-Wallet</li>
              <li>Kartu Debit & Kredit Visa/Mastercard</li>
              <li>Virtual Account Semua Bank</li>
              <li>Bayar di Tempat (COD) & SuperPoin</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-xs">
          {renderLayoutComponents(copyC, sectionId)}
        </div>
      </div>
    </footer>
  );
}
