import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopFooterDigital
 * Digital Fintech Cooperative SuperApp multi-column footer.
 * Fully supports right-inspector selection and property editing.
 */
export default function KopFooterDigital({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'dig-foot-logo', type: 'heading', props: { content: 'KOPERASI DIGITAL ID', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.04em' } },
    { id: 'dig-foot-desc', type: 'paragraph', props: { content: 'Pionir koperasi simpan pinjam berbasis teknologi digital pertama di Indonesia. Menghubungkan puluhan ribu anggota UMKM dengan layanan perbankan digital aman dan inklusif.', fontSize: '13px', color: '#94a3b8' } },
    { id: 'dig-foot-addr', type: 'paragraph', props: { content: 'Head Office: Cyber 2 Tower Lantai 18, Jl. HR Rasuna Said Blok X-5, Jakarta Selatan 12950', fontSize: '13px', color: '#cbd5e1' } },
    { id: 'dig-foot-contact', type: 'paragraph', props: { content: 'Helpdesk 24/7: 1500-888 | WhatsApp CS: 0811-9988-7766 | Email: support@koperasidigital.id', fontSize: '13px', color: '#67e8f9' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const logo = lc.filter(c => c.id === 'dig-foot-logo');
  const desc = lc.filter(c => c.id === 'dig-foot-desc');
  const addr = lc.filter(c => c.id === 'dig-foot-addr');
  const contact = lc.filter(c => c.id === 'dig-foot-contact');

  return (
    <footer className="bg-[#01080d] border-t border-cyan-500/20 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cyan-950">
          {/* Main Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                💳
              </div>
              <div className="leading-none">{renderLayoutComponents(logo, sectionId)}</div>
            </div>
            <div className="max-w-md leading-relaxed">{renderLayoutComponents(desc, sectionId)}</div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">ISO 27001 Certified</span>
              <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-emerald-300">QRIS & BI-FAST Network</span>
              <span className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/40 text-xs font-mono text-cyan-300">Terdaftar Kemenkop RI</span>
            </div>
          </div>

          {/* Office & Contact */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide">Customer Support & Kantor Operasional</h4>
            <div className="space-y-2">
              <div>{renderLayoutComponents(addr, sectionId)}</div>
              <div>{renderLayoutComponents(contact, sectionId)}</div>
            </div>
            <div className="pt-2 text-xs text-slate-500">
              Layanan Customer Care Digital Beroperasi 24 Jam 7 Hari Termasuk Hari Libur Nasional
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 PT Koperasi Digital Indonesia Tbk. Inklusi Finansial untuk Kemajuan Bersama.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Fitur SuperApp</a>
            <a href="#security" className="hover:text-cyan-400 transition-colors">Keamanan Digital</a>
            <a href="#download" className="hover:text-cyan-400 transition-colors">Download App</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
