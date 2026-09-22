import FooterSupportBadge from '../FooterSupportBadge';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MAISON DOUBLE — Institutional Footer
 * Bar kontak biru + kolom institusi + akreditasi.
 * Untuk universitas / rumah sakit / institusi.
 */
export default function Footer14({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'brand-14', type: 'heading', props: { content: 'MAISON UNIVERSITY', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-14', type: 'text', props: { content: '28 prodi, 15.000+ alumni. Kampus berstandar internasional.', fontSize: '14px', color: '#bfdbfe', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-akademik', type: 'button', props: { label: 'Akademik', href: '#akademik', variant: 'ghost', size: 'small', background: 'transparent', color: '#dbeafe' } },
    { id: 'link-admisi', type: 'button', props: { label: 'Admisi', href: '#admisi', variant: 'ghost', size: 'small', background: 'transparent', color: '#dbeafe' } },
    { id: 'link-riset', type: 'button', props: { label: 'Riset', href: '#riset', variant: 'ghost', size: 'small', background: 'transparent', color: '#dbeafe' } },
    { id: 'cta-daftar', type: 'button', props: { label: 'Daftar Sekarang →', href: '#daftar', variant: 'primary', size: 'small', radius: 'md', background: '#ffffff', color: '#1e40af' } },
    { id: 'copy-14', type: 'text', props: { content: '© 2026 Maison University. Terakreditasi A.', fontSize: '12px', color: '#93c5fd', align: 'center', margin: '0' } },
  ];
  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const brandComps = layoutComponents.filter(c => c.type === 'heading' || c.type === 'image');
  const descComps = layoutComponents.filter(c => c.type === 'text' && !String(c.id || '').startsWith('copy'));
  const linkComps = layoutComponents.filter(c => c.type === 'button' && !String(c.id || '').startsWith('cta'));
  const ctaComps = layoutComponents.filter(c => c.type === 'button' && String(c.id || '').startsWith('cta'));
  const copyComps = layoutComponents.filter(c => c.type === 'text' && String(c.id || '').startsWith('copy'));
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-950">
      <div className="bg-blue-600 text-white px-6 py-3">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-bold select-none">
          <span>📞 (021) 555-0198 — Senin–Jumat 08.00–17.00</span>
          <span className="flex items-center gap-2">
            <span className="bg-white/20 rounded-full px-2.5 py-0.5">ID</span>
            <span className="opacity-60">EN</span>
          </span>
        </div>
      </div>
      <div className="px-6 pt-12 pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr_1fr_auto] gap-8 items-start">
          <div>
            {renderLayoutComponents(brandComps, sectionId)}
            <div className="max-w-xs">{renderLayoutComponents(descComps, sectionId)}</div>
            <div className="grid grid-cols-3 gap-2 mt-2 max-w-xs">
              {[['28', 'Prodi'], ['15k+', 'Alumni'], ['A', 'Akreditasi']].map(([v, l]) => (
                <div key={l} className="bg-white/10 border border-white/15 rounded-xl px-3 py-2 text-center select-none">
                  <p className="text-sm font-black text-white">{v}</p>
                  <p className="text-[10px] text-blue-200 uppercase">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-blue-300 mb-3 select-none">KAMPUS</p>
            <div className="flex flex-col items-start gap-1">
              {linkComps.length > 0 ? renderLayoutComponents(linkComps, sectionId) : (<span className="text-sm text-blue-100 cursor-default select-none">Akademik</span>)}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black tracking-[0.25em] text-blue-300 mb-3 select-none">LAYANAN</p>
            <div className="flex flex-col gap-1.5 text-sm text-blue-100 select-none">
              <span>Beasiswa</span>
              <span>Karier</span>
              <span>Perpustakaan</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-black tracking-[0.25em] text-blue-300 select-none">ADMISI 2026</p>
            {renderLayoutComponents(ctaComps, sectionId)}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/15 text-center">
          {copyComps.length > 0 ? renderLayoutComponents(copyComps, sectionId) : (<span className="text-xs text-blue-300 cursor-default select-none">© 2026 Maison.</span>)}
          <FooterSupportBadge className="text-blue-200" />
        </div>
      </div>
    </footer>
  );
}
