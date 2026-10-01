import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndFooterEco
 * Sustainable FMCG & Eco-Plant multi-column footer with plant address and certifications.
 * Fully supports right-inspector selection and property editing.
 */
export default function IndFooterEco({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'eco-foot-logo', type: 'heading', props: { content: 'ECOPLANT NUSANTARA', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f0fdf4', letterSpacing: '0.04em' } },
    { id: 'eco-foot-desc', type: 'paragraph', props: { content: 'Pionir manufaktur kontrak FMCG dan kemasan ramah lingkungan berskala industri di Indonesia. Berkomitmen mencapai Net-Zero Emission dengan standar kualitas global.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'eco-foot-plant', type: 'paragraph', props: { content: 'Eco Plant & Cleanroom: Kawasan Industri KIIC Lot B-15, Karawang Barat, Jawa Barat 41361', fontSize: '13px', color: '#a7f3d0' } },
    { id: 'eco-foot-contact', type: 'paragraph', props: { content: 'B2B Hotline: (0267) 840-5500 | Email: oem@ecoplant.id | Web: www.ecoplant.id', fontSize: '13px', color: '#6ee7b7' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'eco-foot-logo');
  const desc = lc.filter(c => c.id === 'eco-foot-desc');
  const plant = lc.filter(c => c.id === 'eco-foot-plant');
  const contact = lc.filter(c => c.id === 'eco-foot-contact');

  return (
    <footer className="bg-[#01110a] border-t border-emerald-500/20 text-emerald-200/70 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-950">
          {/* Main Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                🌱
              </div>
              <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            </div>
            <div className="max-w-md leading-relaxed">{renderLayoutComponents(desc, sectionId)}</div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/40 text-xs font-mono text-emerald-300">BPOM Grade A</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/40 text-xs font-mono text-emerald-300">Halal MUI / BPJPH</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/40 text-xs font-mono text-emerald-300">FSSC 22000</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/40 text-xs font-mono text-emerald-300">FSC Certified</span>
            </div>
          </div>

          {/* Plant & Contact */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Fasilitas Pabrik Hijau & Layanan Maklon</h4>
            <div className="space-y-2">
              <div>{renderLayoutComponents(plant, sectionId)}</div>
              <div>{renderLayoutComponents(contact, sectionId)}</div>
            </div>
            <div className="pt-2 text-xs text-emerald-400/60">
              Layanan Sampel & R&D: Senin - Jumat 08:30 - 17:30 WIB | Kapasitas Siap Pesanan Ekspor & Domestik
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 PT EcoPlant Nusantara Tbk. Sustainable Manufacturing & Green Packaging.</p>
          <div className="flex items-center gap-6">
            <a href="#products" className="hover:text-emerald-300 transition-colors">Produk & OEM</a>
            <a href="#esg" className="hover:text-emerald-300 transition-colors">Laporan ESG</a>
            <a href="#oem" className="hover:text-emerald-300 transition-colors">Permintaan Sample</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
