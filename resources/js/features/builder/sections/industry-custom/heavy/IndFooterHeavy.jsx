import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * IndFooterHeavy
 * Heavy industrial multi-column footer with plant address, ISO certifications, and emergency contact.
 * Fully supports right-inspector selection and property editing.
 */
export default function IndFooterHeavy({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heavy-foot-logo', type: 'heading', props: { content: 'PT NUSANTARA HEAVY INDUSTRY', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
    { id: 'heavy-foot-desc', type: 'paragraph', props: { content: 'Perusahaan manufaktur presisi dan rekayasa baja berat terintegrasi. Berpengalaman lebih dari 25 tahun melayani proyek strategis energi, pertambangan, dan infrastruktur nasional.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'heavy-foot-plant', type: 'paragraph', props: { content: 'Main Plant: Kawasan Industri Krakatau Steel Kav. C-12, Cilegon, Banten 42435', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'heavy-foot-contact', type: 'paragraph', props: { content: 'Tel: (021) 8990-2026 / 2027 | Email: rfq@nusantaraindustrial.co.id | Web: www.nusantaraindustrial.co.id', fontSize: '13px', color: '#fbbf24' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'heavy-foot-logo');
  const desc = lc.filter(c => c.id === 'heavy-foot-desc');
  const plant = lc.filter(c => c.id === 'heavy-foot-plant');
  const contact = lc.filter(c => c.id === 'heavy-foot-contact');

  return (
    <footer className="bg-[#05070a] border-t border-amber-500/20 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Main Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
                ⚙️
              </div>
              <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            </div>
            <div className="max-w-md leading-relaxed">{renderLayoutComponents(desc, sectionId)}</div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">ISO 9001:2015</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">ISO 14001:2015</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">ASME U-Stamp</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">AWS D1.1</span>
            </div>
          </div>

          {/* Plant & Contact */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Fasilitas Pabrik & Hotline RFQ</h4>
            <div className="space-y-2">
              <div>{renderLayoutComponents(plant, sectionId)}</div>
              <div>{renderLayoutComponents(contact, sectionId)}</div>
            </div>
            <div className="pt-2 text-xs text-slate-500">
              Jam Operasional Kantor B2B: Senin - Jumat 08:00 - 17:00 WIB | Lini Produksi: 24 Jam Non-Stop 7 Hari
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 PT Nusantara Heavy Industry Tbk. All Rights Reserved. Heavy Precision Engineering.</p>
          <div className="flex items-center gap-6">
            <a href="#capabilities" className="hover:text-amber-400 transition-colors">Kapasitas</a>
            <a href="#standards" className="hover:text-amber-400 transition-colors">Sertifikasi ISO</a>
            <a href="#rfq" className="hover:text-amber-400 transition-colors">Permintaan RFQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
