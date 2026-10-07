import FooterSupportBadge from '@builder/sections/footer/FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * RetailFooterOmni
 * Omnichannel Supermart footer with download links, 24/7 CS hotline, and store locator.
 * All texts rendered via renderLayoutComponents for full Right Inspector support.
 */
export default function RetailFooterOmni({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'omni-ft-title', type: 'heading', props: { content: 'PT SUPERMART RETAIL NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff' } },
    { id: 'omni-ft-desc', type: 'text', props: { content: 'Jaringan Pasar Swalayan & Retail Omnichannel Terbesar di Indonesia. Solusi Belanja Hemat, Segar & Terpercaya Untuk Keluarga Sejak 2010.', fontSize: '13px', color: '#fda4af' } },
    { id: 'omni-ft-address', type: 'text', props: { content: '📍 Supermart Headquarter: Tower Retail Center Lt. 18, Jl. TB Simatupang, Jakarta Selatan', fontSize: '12px', color: '#fb7185', fontWeight: '600' } },

    { id: 'omni-ft-h-cs', type: 'heading', props: { content: 'LAYANAN KONSUMEN', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#ffe4e6' } },
    { id: 'omni-ft-cs1', type: 'button', props: { label: 'Pusat Bantuan & Komplain (24 Jam)', href: '#help', variant: 'ghost', size: 'small', background: 'transparent', color: '#fda4af' } },
    { id: 'omni-ft-cs2', type: 'button', props: { label: 'Garansi Pengembalian Produk Segar', href: '#warranty', variant: 'ghost', size: 'small', background: 'transparent', color: '#fda4af' } },
    { id: 'omni-ft-cs3', type: 'button', props: { label: 'Panduan Click & Collect Gerai', href: '#guide', variant: 'ghost', size: 'small', background: 'transparent', color: '#fda4af' } },
    { id: 'omni-ft-cs4', type: 'button', props: { label: 'Cek Status Pengiriman Pesanan', href: '#tracking', variant: 'ghost', size: 'small', background: 'transparent', color: '#fda4af' } },

    { id: 'omni-ft-h-pay', type: 'heading', props: { content: 'METODE PEMBAYARAN', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#ffe4e6' } },
    { id: 'omni-ft-pay1', type: 'text', props: { content: 'QRIS All Payment & E-Wallet', fontSize: '12px', color: '#fda4af' } },
    { id: 'omni-ft-pay2', type: 'text', props: { content: 'Kartu Debit & Kredit Visa/Mastercard', fontSize: '12px', color: '#fda4af' } },
    { id: 'omni-ft-pay3', type: 'text', props: { content: 'Virtual Account Semua Bank', fontSize: '12px', color: '#fda4af' } },
    { id: 'omni-ft-pay4', type: 'text', props: { content: 'Bayar di Tempat (COD) & SuperPoin', fontSize: '12px', color: '#fda4af' } },

    { id: 'omni-ft-copy', type: 'text', props: { content: '© 2026 PT Supermart Retail Nusantara. Belanja Lebih, Hemat Lebih.', fontSize: '12px', color: '#fb7185' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const titleC = lc.filter(c => c.id === 'omni-ft-title');
  const descC = lc.filter(c => c.id === 'omni-ft-desc');
  const addressC = lc.filter(c => c.id === 'omni-ft-address');
  const hCsC = lc.filter(c => c.id === 'omni-ft-h-cs');
  const csComps = lc.filter(c => ['omni-ft-cs1', 'omni-ft-cs2', 'omni-ft-cs3', 'omni-ft-cs4'].includes(c.id));
  const hPayC = lc.filter(c => c.id === 'omni-ft-h-pay');
  const payComps = lc.filter(c => ['omni-ft-pay1', 'omni-ft-pay2', 'omni-ft-pay3', 'omni-ft-pay4'].includes(c.id));
  const copyC = lc.filter(c => c.id === 'omni-ft-copy');

  return (
    <footer className="bg-[#080205] text-rose-200/70 py-12 border-t border-rose-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-rose-950">
          <div className="md:col-span-2 space-y-3">
            {renderLayoutComponents(titleC, sectionId)}
            {renderLayoutComponents(descC, sectionId)}
            <div className="flex items-center gap-3 pt-2 text-xs text-rose-400 font-semibold">
              {renderLayoutComponents(addressC, sectionId)}
            </div>
          </div>

          <div>
            <div className="uppercase tracking-wider mb-3">
              {renderLayoutComponents(hCsC, sectionId)}
            </div>
            <div className="space-y-1 text-xs flex flex-col items-start">
              {renderLayoutComponents(csComps, sectionId)}
            </div>
          </div>

          <div>
            <div className="uppercase tracking-wider mb-3">
              {renderLayoutComponents(hPayC, sectionId)}
            </div>
            <div className="space-y-1 text-xs flex flex-col items-start">
              {renderLayoutComponents(payComps, sectionId)}
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs space-y-2">
          {renderLayoutComponents(copyC, sectionId)}
          <FooterSupportBadge className="text-rose-400/60" />
        </div>
      </div>
    </footer>
  );
}

